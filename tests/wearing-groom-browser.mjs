import assert from 'node:assert/strict';
import {mkdir,readFile,writeFile} from 'node:fs/promises';
import {pathToFileURL} from 'node:url';
import path from 'node:path';
import {createGame,SAVE_KEY,CATS} from '../game.js';
import {OUTFITS} from '../wardrobe.js';
import {resolveMotion} from '../motion.js';

const catId=process.argv.find(arg=>arg.startsWith('--cat='))?.slice(6)||'mochi';
const cat=CATS.find(cat=>cat.id===catId);assert(cat,'Choose a known cat ID');
const output=process.argv.find(arg=>arg.startsWith('--output='))?.slice(9)||'output/review-1412';
await mkdir(output,{recursive:true});
// Fail before opening a browser if a new sequence has not been installed/approved.
for(const outfit of OUTFITS){
  const source=resolveMotion(catId,'groom',outfit.id);assert.equal(source.kind,'sequence',`${catId}/${outfit.id}/groom must be registered`);
  const png=await readFile(new URL(`../${source.source}`,import.meta.url));assert.equal(png.subarray(1,4).toString(),'PNG');
  assert(png.readUInt32BE(16)>=1024);assert.equal(png.readUInt32BE(16),png.readUInt32BE(20));
}
const {chromium}=await import(pathToFileURL(path.join(process.env.USERPROFILE,'.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs')));
const browser=await chromium.launch({channel:'chrome',headless:true});
const page=await browser.newPage({viewport:{width:1440,height:1050},reducedMotion:'no-preference'});
const errors=[],requests=[],checked=[];page.on('pageerror',error=>errors.push(error.message));
page.on('request',request=>{if(request.url().includes('/assets/motion/'))requests.push(request.url());});
await page.addInitScript(key=>{const next=sessionStorage.getItem('groom-review-next');if(next){localStorage.setItem(key,next);sessionStorage.removeItem('groom-review-next');}},SAVE_KEY);
const state=()=>page.evaluate(()=>JSON.parse(window.render_game_to_text()));
const ready=()=>page.waitForFunction(()=>JSON.parse(window.render_game_to_text()).motion?.ready,null,{timeout:25000});
const ledger=state=>({selectedCat:state.selectedCat,outfit:state.cat.outfit,affection:state.cat.affection,interactions:state.cat.interactions,coins:state.coins,inventory:state.inventory,wardrobe:state.wardrobe,quests:state.quests,album:state.album});
const fixture=async outfitId=>{
  let saved;const game=createGame({getItem:()=>null,setItem:(_key,value)=>saved=value});
  game.state.wardrobe.owned=OUTFITS.map(outfit=>outfit.id);game.selectCat(catId);game.equipOutfit(catId,outfitId);game.save();
  await page.evaluate(saved=>sessionStorage.setItem('groom-review-next',saved),saved);await page.reload({waitUntil:'networkidle'});
};
const expectMoment=async(outfitId,action='groom',playing=true)=>{
  const current=await state();assert.equal(current.modal,'motion');assert.equal(current.selectedCat,catId);assert.equal(current.cat.outfit,outfitId);
  assert.equal(current.motion.catId,catId);assert.equal(current.motion.outfitId,outfitId);assert.equal(current.motion.action,action);assert.equal(current.motion.kind,'sequence');
  assert.equal(current.motion.source,`assets/motion/wearing/${catId}/${outfitId}/${action}.png`);assert.equal(current.motion.playing,playing);
  assert.equal(await page.locator('.motion-cat-name [data-outfit-art]').getAttribute('data-outfit-art'),outfitId);
  assert.equal(await page.locator('[data-command="motion-toggle"],[data-command="motion-replay"],[data-motion-frame]').count(),0);
  return current;
};
const fourPoses=()=>page.evaluate(async()=>{
  const {MOTION_ACTIONS}=await import('/motion.js'),canvas=document.querySelector('.motion-canvas'),spec=MOTION_ACTIONS.groom;
  const starting=JSON.parse(window.render_game_to_text()).motion,cycle=spec.frameMs*spec.sequence.length,base=(Math.floor(starting.elapsedMs/cycle)+1)*cycle;
  const frames=[],pixels=[];
  for(let index=0;index<4;index++){
    const current=JSON.parse(window.render_game_to_text()).motion,target=base+(index+.25)*spec.frameMs;
    window.advanceTime(target-current.elapsedMs);frames.push(JSON.parse(window.render_game_to_text()).motion.frame);pixels.push(canvas.toDataURL());
  }
  return {frames,distinctPixels:new Set(pixels).size};
});
const captureGroom=async outfitId=>{
  // Keep review screenshots on an actual held wipe pose. Only this capture uses
  // the player's visibility pause; playback and persistence assertions remain live.
  await page.evaluate(async()=>{
    Object.defineProperty(document,'hidden',{configurable:true,value:true});
    document.dispatchEvent(new Event('visibilitychange'));
    const {MOTION_ACTIONS}=await import('/motion.js'),spec=MOTION_ACTIONS.groom;
    const current=JSON.parse(window.render_game_to_text()).motion,cycle=spec.frameMs*spec.sequence.length;
    window.advanceTime((Math.floor(current.elapsedMs/cycle)+1)*cycle+2.25*spec.frameMs-current.elapsedMs);
  });
  try{await page.locator('#modal').screenshot({path:`${output}/game-${catId}-${outfitId}-groom.png`});}
  finally{await page.evaluate(()=>{delete document.hidden;document.dispatchEvent(new Event('visibilitychange'));});}
};
try{
  await page.goto('http://127.0.0.1:4173/',{waitUntil:'networkidle'});
  for(const outfit of OUTFITS){
    await fixture(outfit.id);const baseline=ledger(await state());requests.length=0;
    assert.equal(await page.locator('.moment-discovery').getAttribute('data-moment'),'groom','Home discovery prefers the newly installed groom sequence');
    await page.locator('.moment-discovery').click();await ready();await expectMoment(outfit.id);
    const poses=await fourPoses();assert.deepEqual(poses.frames,[0,1,2,3]);assert.equal(poses.distinctPixels,4);
    assert.deepEqual(ledger(await state()),baseline,'Watching four poses grants no care rewards or resource changes');
    await captureGroom(outfit.id);
    await page.locator('.motion-other-actions [data-moment="pet"]').click();await ready();await expectMoment(outfit.id,'pet');
    await page.locator('.motion-other-actions [data-moment="groom"]').click();await ready();await expectMoment(outfit.id);
    assert.deepEqual(ledger(await state()),baseline,'Switching between petting and grooming is viewing only');
    await page.locator('.motion-return').click();assert.equal((await state()).modal,null);
    // The enlarged portrait enters the same outfit's new moment and returns there.
    await page.locator('.profile-portrait').click();assert.equal((await state()).modal,'portrait');
    assert.equal(await page.locator('.portrait-moments').getAttribute('data-moment'),'groom');
    await page.locator('.portrait-moments').click();await ready();await expectMoment(outfit.id);
    await page.locator('.motion-return').click();assert.equal((await state()).modal,'portrait');
    assert.deepEqual(ledger(await state()),baseline);
    await page.locator('.portrait-moments').click();await ready();
    // Reload during real playback saves the outfit, but does not grant a new event.
    await page.reload({waitUntil:'networkidle'});const restored=await state();
    assert.equal(restored.modal,null);assert.equal(restored.motion,null);assert.deepEqual(ledger(restored),baseline);
    await page.locator('.moment-discovery').click();await ready();await expectMoment(outfit.id);await page.keyboard.press('Escape');
    // Exercise the actual user preference control and its persisted reload state.
    await page.getByRole('button',{name:'환경 설정',exact:true}).click();await page.locator('[data-setting="reducedMotion"]').check();await page.keyboard.press('Escape');
    await page.locator('.moment-discovery').click();await ready();const reduced=await expectMoment(outfit.id,'groom',false);assert.equal(reduced.motion.frame,0);
    const still=await page.locator('.motion-canvas').evaluate(canvas=>canvas.toDataURL());await page.waitForTimeout(700);
    assert.equal(await page.locator('.motion-canvas').evaluate(canvas=>canvas.toDataURL()),still,'Reduced-motion setting holds the actual first illustration');
    await page.reload({waitUntil:'networkidle'});
    assert.equal(await page.evaluate(key=>JSON.parse(localStorage.getItem(key)).settings.reducedMotion,SAVE_KEY),true);
    await page.locator('.moment-discovery').click();await ready();await expectMoment(outfit.id,'groom',false);
    assert.deepEqual(ledger(await state()),baseline);
    assert(requests.every(url=>url.includes(`/assets/motion/wearing/${catId}/${outfit.id}/`)),'New grooming must never request a bare cat, different cat or different outfit');
    checked.push({catId,outfitId:outfit.id,source:resolveMotion(catId,'groom',outfit.id).source,...poses,home:true,portrait:true,petSwitch:true,reload:true,reducedMotion:true,rewardsUnchanged:true});
    await page.keyboard.press('Escape');
  }
  // OS-level motion preference also applies even when the in-game checkbox is off.
  await fixture('ribbon');await page.emulateMedia({reducedMotion:'reduce'});
  await page.locator('.moment-discovery').click();await ready();await expectMoment('ribbon','groom',false);await page.keyboard.press('Escape');
  await page.emulateMedia({reducedMotion:'no-preference'});
  // A real pet action retains its one reward when the player subsequently watches groom.
  const beforeCare=await state();await page.locator('.care-actions [data-action="pet"]').click();await ready();
  const cared=await expectMoment('ribbon','pet');assert.equal(cared.cat.affection,beforeCare.cat.affection+3+(cat.preferredAction==='pet'?1:0));
  await page.locator('.motion-other-actions [data-moment="groom"]').click();await ready();await expectMoment('ribbon');assert.deepEqual(ledger(await state()),ledger(cared));
  assert.deepEqual(errors,[]);
  await writeFile(`${output}/game-result.json`,JSON.stringify({ok:true,catId,checked,osReducedMotion:true,careRewardOnce:true,errors},null,2));
  console.log(`PASS: ${catId} four dressed groom sequences, sixteen real poses, both entry routes, switching, persistence, rewards and reduced motion.`);
}catch(error){
  await page.screenshot({path:`${output}/game-failure.png`,fullPage:true}).catch(()=>{});
  await writeFile(`${output}/game-failure.json`,JSON.stringify({message:error.message,state:await state().catch(()=>null),errors},null,2));throw error;
}finally{await browser.close();}
