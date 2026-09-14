import assert from 'node:assert/strict';
import {mkdir,writeFile,readFile} from 'node:fs/promises';
import {pathToFileURL} from 'node:url';
import path from 'node:path';
import {OUTFITS,outfitSourceRect,wardrobeSource} from '../wardrobe.js';
const {chromium}=await import(pathToFileURL(path.join(process.env.USERPROFILE,'.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs')));
const browser=await chromium.launch({channel:'chrome',headless:true});
const page=await browser.newPage({viewport:{width:1440,height:1050}});
const errors=[];page.on('pageerror',e=>errors.push(e.message));
const smoke=process.argv.includes('--smoke');
const ids=smoke?['bori']:['bori','mochi','luna','nabi','siru','oreo','miso','hodu','byeol','bam'];
const state=()=>page.evaluate(()=>JSON.parse(window.render_game_to_text()));
const close=()=>page.keyboard.press('Escape');
const ready=()=>page.waitForFunction(()=>JSON.parse(window.render_game_to_text()).motion?.ready,null,{timeout:20000});
const dressedReady=()=>page.locator('.wardrobe-cat-stage image').evaluate(async element=>{const i=new Image();i.src=element.getAttribute('href');await i.decode();const canvas=document.createElement('canvas');canvas.width=i.naturalWidth;canvas.height=i.naturalHeight;const context=canvas.getContext('2d');context.drawImage(i,0,0);const pixels=context.getImageData(0,0,canvas.width,canvas.height).data;let transparent=0,opaque=0;for(let n=3;n<pixels.length;n+=68){if(pixels[n]===0)transparent++;if(pixels[n]>250)opaque++;}return {transparent,opaque};});
const capture=async name=>page.screenshot({path:`output/expansion-qa/${name}.png`,fullPage:true});
await mkdir('output/expansion-qa',{recursive:true});
try{
 await page.goto('http://127.0.0.1:4173/',{waitUntil:'networkidle'});
 for(const [action,motion]of [['feed','feed'],['water','drink'],['stretch','stretch']]){
   const before=await state();
   await page.locator(`[data-action="${action}"]`).click();await ready();
   const after=await state();assert.equal(after.motion.action,motion);assert.equal(after.motion.playing,true);
   if(action==='feed')assert.equal(after.inventory.food,before.inventory.food-1);
   const pixels0=await page.locator('.motion-canvas').evaluate(el=>el.toDataURL());
   await page.evaluate(()=>window.advanceTime(1200));
   const pixels1=await page.locator('.motion-canvas').evaluate(el=>el.toDataURL());
   assert.notEqual(pixels0,pixels1);
   assert.equal((await state()).cat.affection,after.cat.affection);
   await capture(`${motion}-cutscene`);await close();
 }
 for(const action of ['blink','call']){
   await page.locator(`[data-action="${action}"]`).click();assert.equal((await state()).modal,'bond');
   assert((await page.locator('.bond-copy p').innerText()).length>20);await capture(`${action}-moment`);await close();
   const before=(await state()).cat.affection;await page.locator(`[data-action="${action}"]`).click();
   assert.equal((await state()).modal,null);assert.equal((await state()).cat.affection,before);
   assert.match(await page.locator('#toast').innerText(),/여유/);
 }
 await page.locator('.closet-link').click();assert.equal((await state()).view,'wardrobe');
 await dressedReady();const initial=await state();
 await page.locator('[data-outfit="vest"]').click();
 assert.equal((await state()).cat.outfit,'none','Preview does not equip');assert.equal((await state()).coins,initial.coins);
 await page.locator('[data-command="buy-outfit"]').focus();await page.keyboard.press('Enter');assert.equal((await state()).coins,initial.coins-65);
 assert.equal(await page.evaluate(()=>document.activeElement?.dataset.command),'equip-outfit','Keyboard focus follows purchase to the wear button');
 assert.equal((await state()).cat.outfit,'none','Purchase and wearing are separate');
 await page.locator('[data-command="equip-outfit"]').click();assert.equal((await state()).cat.outfit,'vest');
 assert.equal((await state()).cat.affection,initial.cat.affection);
 await capture('wardrobe-desktop');
 await page.reload({waitUntil:'networkidle'});assert.equal((await state()).cat.outfit,'vest');
 assert.equal(await page.locator('.scene-cat.selected [data-outfit-art="vest"]').count(),1,'Chosen outfit appears in the room');
 await page.locator('.scene-cat.selected').click();
 assert.equal(await page.locator('.portrait-touch [data-outfit-art="vest"]').count(),1);await close();
 await page.locator('.closet-link').click();
 const checked=[];
 for(const id of ids){
   await page.locator(`[data-wardrobe-cat="${id}"]`).click();
   for(const item of OUTFITS){
     await page.locator(`[data-outfit="${item.id}"]`).click();const alpha=await dressedReady();
     assert(alpha.transparent>500&&alpha.opaque>500,'The sheet contains real transparent background and visible cat pixels');
     assert.equal(await page.locator('.wardrobe-cat-stage .dressed-portrait').getAttribute('data-cat-art'),id);
     assert.equal(await page.locator('.wardrobe-cat-stage .dressed-portrait').getAttribute('data-outfit-art'),item.id);
     const data=await readFile(wardrobeSource(id));assert.equal(data[25],6,'Generated wardrobe has an actual RGBA alpha channel');
     const rect=outfitSourceRect(id,item.id);
     const box=(await page.locator('.wardrobe-cat-stage .dressed-portrait').getAttribute('viewBox')).split(' ').map(Number);
     assert.deepEqual(box,[0,0,rect.width,rect.height],'The viewport follows the measured source frame');
     const source=page.locator('.wardrobe-cat-stage image');
     assert.equal(Number(await source.getAttribute('width')),data.readUInt32BE(16),'Source pixels preserve their native proportions');
     assert.equal(Number(await source.getAttribute('height')),data.readUInt32BE(20));
     checked.push(`${id}:${item.id}`);
   }
 }
 await page.locator('[data-wardrobe-cat="bori"]').click();
 await page.locator('[data-outfit="ribbon"]').click();await page.locator('[data-command="equip-outfit"]').click();
 await page.setViewportSize({width:390,height:844});await capture('wardrobe-mobile');
 assert(await page.locator('body').evaluate(el=>el.scrollWidth<=innerWidth),'No page horizontal overflow');
 assert.equal(await page.locator('.sidebar nav button').count(),6);
 await page.locator('[data-outfit="none"]').click();await page.locator('[data-command="equip-outfit"]').click();assert.equal((await state()).cat.outfit,'none');
 await page.getByRole('button',{name:'우리 집',exact:true}).click();
 await page.evaluate(()=>window.advanceTime(45000));
 await page.locator('[data-action="blink"]').click();await capture('bond-mobile');
 assert(await page.locator('#modal').evaluate(el=>el.scrollWidth<=el.clientWidth));await close();
 await page.locator('[data-action="sleep"]').click();await page.locator('.closet-link').click();
 await page.locator('[data-outfit="ribbon"]').click();await page.locator('[data-command="equip-outfit"]').click();
 assert.equal((await state()).cat.outfit,'none');assert.match(await page.locator('#toast').innerText(),/쉬고/);
 assert.deepEqual(errors,[]);
 await writeFile(`output/expansion-qa/${smoke?'smoke':'result'}.json`,JSON.stringify({ok:true,wardrobeVariants:checked,errors,coverage:['new-care-cutscenes','real-pose-change','bond-moments','social-cooldowns','preview-no-mutation','purchase-once','individual-equipment','wardrobe-restore','room-and-portrait-art','alpha-and-aspect','mobile','remove-outfit','resting-refusal']},null,2));
 console.log(`PASS: expansion interactions, automatic cutscenes, ${checked.length} outfit variants, preview/purchase/equip/restore/mobile, no page errors.`);
}finally{await browser.close();}
