import assert from 'node:assert/strict';
import {mkdir,writeFile} from 'node:fs/promises';
import {pathToFileURL} from 'node:url';
import path from 'node:path';
import {createGame,SAVE_KEY,CATS} from '../game.js';
import {OUTFITS} from '../wardrobe.js';
import {resolveMotion} from '../motion.js';
const {chromium}=await import(pathToFileURL(path.join(process.env.USERPROFILE,'.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs')));
const smoke=process.argv.includes('--smoke');
const output='output/wearing-qa';await mkdir(output,{recursive:true});
const browser=await chromium.launch({channel:'chrome',headless:true});
const page=await browser.newPage({viewport:{width:1440,height:1050}});
await page.addInitScript(key=>{const seed=sessionStorage.getItem('wearing-qa-next');if(seed){localStorage.setItem(key,seed);sessionStorage.removeItem('wearing-qa-next');}},SAVE_KEY);
const errors=[];page.on('pageerror',e=>errors.push(e.message));
const requests=[];page.on('request',r=>{if(r.url().includes('/assets/motion/'))requests.push(r.url());});
const state=()=>page.evaluate(()=>JSON.parse(window.render_game_to_text()));
const ready=()=>page.waitForFunction(()=>JSON.parse(window.render_game_to_text()).motion?.ready,null,{timeout:25000});
const fixture=async(catId,outfitId)=>{
 let seed;const game=createGame({getItem:()=>null,setItem:(_,v)=>seed=v});
 game.state.wardrobe.owned=OUTFITS.map(o=>o.id);game.selectCat(catId);game.equipOutfit(catId,outfitId);game.save();
 await page.evaluate(seed=>sessionStorage.setItem('wearing-qa-next',seed),seed);
 await page.reload({waitUntil:'networkidle'});
};
try{
 await page.goto('http://127.0.0.1:4173/',{waitUntil:'networkidle'});
 const checked=[];
 for(const cat of (smoke?CATS.slice(0,1):CATS))for(const outfit of OUTFITS){
  await fixture(cat.id,outfit.id);const before=await state();requests.length=0;
  await page.locator('.care-actions [data-action="pet"]').click();await ready();
  const after=await state(),expected=resolveMotion(cat.id,'pet',outfit.id);
  assert.equal(expected.kind,'sequence','Every cat has a real petting sequence in all four outfits');
  assert.equal(after.cat.outfit,outfit.id);assert.equal(after.motion.outfitId,outfit.id);
  assert.equal(after.motion.source,expected.source);assert.equal(after.motion.kind,expected.kind);
  assert.equal(after.motion.playing,expected.kind==='sequence');
  assert.equal(after.cat.affection,before.cat.affection+3+(cat.preferredAction==='pet'?1:0),'A care action gives its normal preference-aware reward exactly once');
  assert.equal(await page.locator('.motion-cat-name [data-outfit-art]').getAttribute('data-outfit-art'),outfit.id);
  const p0=await page.locator('.motion-canvas').evaluate(c=>c.toDataURL());
  await page.evaluate(()=>window.advanceTime(1000));
  const p1=await page.locator('.motion-canvas').evaluate(c=>c.toDataURL());
  if(expected.kind==='sequence')assert.notEqual(p0,p1,'Wearing sequence changes the actual drawn pose');
  else assert.equal(p0,p1,'A portrait is honestly static');
  assert.equal((await state()).cat.affection,after.cat.affection,'Viewing cannot duplicate care rewards');
  assert.equal((await state()).coins,after.coins);
  assert.equal(await page.locator('[data-command="motion-toggle"],[data-command="motion-replay"],[data-motion-frame]').count(),0);
  assert(requests.every(url=>url.includes('/motion/wearing/')),'A dressed cat never requests bare care artwork');
  if(cat.id==='bori'||outfit.id==='vest')await page.locator('#modal').screenshot({path:`${output}/${cat.id}-${outfit.id}-pet.png`});
  checked.push({catId:cat.id,outfitId:outfit.id,kind:after.motion.kind,source:after.motion.source});
  if(cat.id==='bori'&&resolveMotion(cat.id,'groom',outfit.id).kind==='sequence'){
   await page.locator('.motion-other-actions [data-moment="groom"]').click();await ready();
   const groom=await state();assert.equal(groom.motion.action,'groom');assert.equal(groom.motion.outfitId,outfit.id);
   assert.equal(groom.cat.affection,after.cat.affection);assert.equal(groom.coins,after.coins);
   await page.locator('#modal').screenshot({path:`${output}/bori-${outfit.id}-groom.png`});
  }
  await page.keyboard.press('Escape');assert.equal((await state()).motion,null);
  await page.reload({waitUntil:'networkidle'});assert.equal((await state()).cat.outfit,outfit.id);
 }
 // The home shortcut opens an available dressed animation without applying care.
 await fixture('mochi','vest');const beforeViewing=await state();
 await page.locator('.moment-discovery').click();await ready();
 const viewed=await state();assert.equal(viewed.motion.kind,'sequence');assert.equal(viewed.motion.outfitId,'vest');
 assert.equal(viewed.cat.affection,beforeViewing.cat.affection);assert.equal(viewed.coins,beforeViewing.coins);
 await page.keyboard.press('Escape');
 // Unregistered actions retain the outfit and their real care result.
 await fixture('bori','vest');const beforeFeed=await state();requests.length=0;
 await page.locator('.care-actions [data-action="feed"]').click();await ready();
 const feed=await state();assert.equal(feed.cat.outfit,'vest');assert.equal(feed.inventory.food,beforeFeed.inventory.food-1);
 assert.equal(feed.motion.source,resolveMotion('bori','feed','vest').source);
 assert(requests.every(url=>url.includes('/motion/wearing/')));
 await page.locator('#modal').screenshot({path:`${output}/bori-vest-feed-still.png`});
 await page.keyboard.press('Escape');
 // A failed dressed sheet stays in that outfit and retries without repeating care.
 await fixture('bori','ribbon');requests.length=0;
 const wornRoute='**/assets/motion/wearing/bori/ribbon/pet.png';await page.route(wornRoute,route=>route.abort());
 await page.locator('.care-actions [data-action="pet"]').click();
 await page.waitForFunction(()=>JSON.parse(window.render_game_to_text()).motion?.error);
 const failed=await state();assert.equal(failed.cat.outfit,'ribbon');
 assert.equal(await page.locator('[data-command="motion-retry"]').isVisible(),true);
 assert(requests.every(url=>url.includes('/motion/wearing/')));
 await page.unroute(wornRoute);await page.locator('[data-command="motion-retry"]').click();await ready();
 assert.equal((await state()).cat.affection,failed.cat.affection);assert.equal((await state()).cat.outfit,'ribbon');
 assert.equal((await state()).motion.playing,true);await page.keyboard.press('Escape');
 // Mobile, outfit removal, and normal unadorned sequences still work.
 await page.setViewportSize({width:390,height:844});await fixture('bori','ribbon');
 await page.locator('.care-actions [data-action="pet"]').click();await ready();
 assert(await page.locator('#modal').evaluate(el=>el.scrollWidth<=el.clientWidth));
 await page.locator('#modal').screenshot({path:`${output}/bori-ribbon-mobile.png`});
 await page.locator('.motion-return').scrollIntoViewIfNeeded();
 await page.locator('#modal').screenshot({path:`${output}/bori-ribbon-mobile-bottom.png`});
 await page.locator('.motion-return').click();assert.equal((await state()).motion,null);
 await page.locator('.closet-link').click();await page.locator('[data-outfit="none"]').click();
 await page.locator('[data-command="equip-outfit"]').click();
 await page.getByRole('button',{name:'우리 집',exact:true}).click();
 await page.locator('.moment-discovery').click();await ready();
 assert.equal((await state()).motion.outfitId,'none');assert.equal((await state()).motion.source,'assets/motion/groom/bori.png');
 assert.equal((await state()).motion.playing,true);assert.deepEqual(errors,[]);
 await writeFile(`${output}/${smoke?'smoke':'result'}.json`,JSON.stringify({ok:true,checked,errors},null,2));
 console.log(`PASS: ${checked.length} dressed care combinations, outfit continuity, real pose/static semantics, rewards once, reload, mobile, and removal.`);
}finally{await browser.close();}
