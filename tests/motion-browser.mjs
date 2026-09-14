import assert from 'node:assert/strict';
import { mkdir,writeFile,readFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import path from 'node:path';
import { MOTION_ACTIONS } from '../motion.js';
let pw;
try{pw=await import('playwright');}catch{pw=await import(pathToFileURL(path.join(process.env.USERPROFILE,'.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs')));}
const browser=await pw.chromium.launch({channel:'chrome',headless:true});
const context=await browser.newContext({viewport:{width:1440,height:1050}});
const page=await context.newPage();
const errors=[];page.on('pageerror',e=>errors.push(e.message));
const smoke=process.argv.includes('--smoke');
const ids=smoke?['bori','mochi','luna']:['bori','mochi','luna','nabi','siru','oreo','miso','hodu','byeol','bam'];
const state=()=>page.evaluate(()=>JSON.parse(window.render_game_to_text()));
const ready=()=>page.waitForFunction(()=>JSON.parse(window.render_game_to_text()).motion?.ready,{},{timeout:15000});
const assertContinuousUI=async()=>{
 assert.equal(await page.locator('[data-command="motion-toggle"], [data-command="motion-replay"], [data-motion-frame]').count(),0,'Cutscenes have no pause, replay, or pose-selector controls');
 assert.equal(await page.locator('[data-command="motion-retry"]').isVisible(),false,'Retry is shown only after a load failure');
 assert.equal((await state()).motion.playing,true,'The illustration loops automatically');
};
const poseSnapshot=async frame=>{
 const action=(await state()).motion.action,spec=MOTION_ACTIONS[action];
 return page.evaluate(({frame,spec})=>{
  const before=JSON.parse(window.render_game_to_text()).motion;
  const period=spec.frameMs*spec.sequence.length;
  const target=spec.sequence.indexOf(frame)*spec.frameMs+100;
  const delta=(target-before.elapsedMs%period+period)%period;
  window.advanceTime(delta);
  return {motion:JSON.parse(window.render_game_to_text()).motion,pixels:document.querySelector('canvas.motion-canvas').toDataURL()};
 },{frame,spec});
};
const capture=async name=>{await page.screenshot({path:`output/motion-qa/${name}.png`,fullPage:true,animations:'disabled'});};
await mkdir('output/motion-qa',{recursive:true});
try{
 await page.goto('http://127.0.0.1:4173/',{waitUntil:'networkidle'});
 const initial=await state();
 await page.locator('.care-actions [data-action="pet"]').click();
 await ready();
 assert.equal((await state()).motion.action,'pet');assert.equal((await state()).motion.catId,'bori');
 assert.equal((await state()).cat.affection,initial.cat.affection+3);
 const afterCare=await state();
 await assertContinuousUI();
 const pose2=await poseSnapshot(2);assert.equal(pose2.motion.frame,2);
 await capture('head-petting-desktop');
 const pose0=await poseSnapshot(0);assert.equal(pose0.motion.frame,0);
 assert.notEqual(pose0.pixels,pose2.pixels,'Drawn cat pose genuinely changes across source frames');
 const running=await state();await page.waitForTimeout(160);assert((await state()).motion.elapsedMs>running.motion.elapsedMs,'Animation continues without a play control');
 await page.evaluate(()=>window.advanceTime(10000));
 assert.equal((await state()).cat.affection,afterCare.cat.affection,'Looping cannot farm affection');
 assert.equal((await state()).coins,afterCare.coins,'Looping cannot duplicate coins');
 await page.keyboard.press('Escape');
 assert.equal((await state()).motion,null,'Closing destroys the player');
 assert.equal(await page.locator('.care-actions [data-action="pet"]').evaluate(el=>el===document.activeElement),true);
 console.log('PASS: automatic petting, real pose changes, continuous playback with no player controls, no duplicate rewards, cleanup/focus.');

 const checked=[];
 for(const id of ids){
   await page.locator(`[data-select-cat="${id}"]`).click();
   const before=await state();
   await page.locator('.moment-discovery').click();
   for(const action of ['groom','pet','brush','feed','drink','stretch']){
     if(action!=='groom')await page.locator(`.motion-other-actions [data-moment="${action}"]`).click();
     await ready();await assertContinuousUI();
     const s=await state();assert.equal(s.motion.source,`assets/motion/${action}/${id}.png`);assert.equal(s.motion.catId,id);
     assert.equal((await poseSnapshot(2)).motion.frame,2);
     const data=await readFile(`assets/motion/${action}/${id}.png`);
     assert(data.readUInt32BE(16)>=1024&&data.readUInt32BE(20)>=1024,'All sheets preserve adequate resolution');
     checked.push(`${id}:${action}`);
     if(id==='bori')await capture(`bori-${action}`);
   }
   assert.equal((await state()).cat.affection,before.cat.affection,'Watching scenes does not simulate extra care');
   assert.equal((await state()).coins,before.coins,'Switching between scenes cannot duplicate coins');
   await page.keyboard.press('Escape');
   console.log(`Verified six moving scenes: ${id}`);
 }

 await page.locator('[data-select-cat="bori"]').click();
 await page.locator('.scene-cat.selected').click();
 await page.locator('.portrait-moments').click();await ready();
 await page.locator('[data-command="motion-return"]').click();assert.equal((await state()).modal,'portrait');
 await page.keyboard.press('Escape');
 await page.setViewportSize({width:390,height:844});
 await page.locator('.moment-discovery').click();await ready();await assertContinuousUI();
 await poseSnapshot(1);await capture('groom-mobile');
 assert(await page.locator('#modal').evaluate(el=>el.scrollWidth<=el.clientWidth),'No mobile cutscene overflow');
 await page.locator('.motion-canvas').click();await page.keyboard.press('ArrowRight');await page.keyboard.press('Space');
 assert.equal((await state()).motion.playing,true,'Space and arrow keys cannot pause or manually seek the cutscene');
 await page.keyboard.press('Escape');
 assert(await page.locator('.moment-discovery').evaluate(el=>el===document.activeElement),'Groom launcher regains focus');
 await page.locator('.avatar').click();await page.locator('[data-setting="reducedMotion"]').check();await page.keyboard.press('Escape');
 await page.locator('.moment-discovery').click();await ready();assert.equal((await state()).motion.playing,false,'Reduced motion displays a static illustration');
 const reduced=await state();await page.waitForTimeout(160);
 assert.equal((await state()).motion.elapsedMs,reduced.motion.elapsedMs,'Reduced-motion preference prevents automatic movement');
 assert.equal(await page.locator('[data-command="motion-toggle"], [data-command="motion-replay"], [data-motion-frame]').count(),0);
 await page.keyboard.press('Escape');

 // A failed illustration load remains a recoverable scene, with an explicit retry.
 await page.route('**/assets/motion/groom/bori.png',route=>route.abort());
 await page.locator('.moment-discovery').click();
 await page.waitForFunction(()=>!!JSON.parse(window.render_game_to_text()).motion?.error);
 assert.match(await page.locator('.motion-loader').innerText(),/불러오지/);
 assert.equal(await page.locator('[data-command="motion-retry"]').isVisible(),true);
 await page.unroute('**/assets/motion/groom/bori.png');await page.locator('[data-command="motion-retry"]').click();await ready();
 assert.equal(await page.locator('[data-command="motion-retry"]').isVisible(),false,'Retry disappears after recovery');
 await page.keyboard.press('Escape');
 // Rapidly dismissing a decoding image must never reopen or update a newer modal.
 await page.locator('.moment-discovery').click();await page.keyboard.press('Escape');
 await page.locator('.avatar').click();await page.waitForTimeout(150);assert.equal((await state()).modal,'settings');
 await page.keyboard.press('Escape');assert.equal((await state()).motion,null);
 assert.deepEqual(errors,[]);
 await writeFile(`output/motion-qa/${smoke?'smoke':'result'}.json`,JSON.stringify({ok:true,sequencesChecked:checked,errors,coverage:['pose-change','auto-care','continuous-loop','no-player-controls','loop-no-reward','cleanup','all-identities','portrait-return','mobile','keyboard-no-pause','reduced-motion','error-only-retry','rapid-close']},null,2));
 console.log(`PASS: ${checked.length} action sequences plus motion integration, mobile, failure recovery, and no page errors.`);
}finally{await browser.close();}
