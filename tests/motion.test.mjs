import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { MOTION_ACTIONS, frameAt,frameRect,motionSource,resolveMotion,createMotionPlayer } from '../motion.js';
import { OUTFITS, wardrobeSource, outfitSourceRect } from '../wardrobe.js';
import { WORN_MOTION_SHEETS } from '../wearing-motion.js';

test('every action timeline visits four generated poses and loops at the same composition',()=>{
  for(const [action,spec] of Object.entries(MOTION_ACTIONS)){
    const frames=spec.sequence.map((_,index)=>frameAt(index*spec.frameMs,action).frame);
    assert.equal(new Set(frames).size,4);
    assert.deepEqual(frameAt(0,action),frameAt(spec.sequence.length*spec.frameMs,action));
    assert.equal(frameAt(-12,action).frame,0);
  }
});
test('long holds avoid ghosting; brief dissolve stays bounded and can be disabled',()=>{
  assert.equal(frameAt(150,'pet').blend,0);
  const nearEnd=frameAt(MOTION_ACTIONS.pet.frameMs*.95,'pet');
  assert(nearEnd.blend>0&&nearEnd.blend<1);
  assert.equal(frameAt(440,'pet',true).blend,0);
});
test('grid extraction covers four separate frames without leaking into adjacent cells',()=>{
  assert.deepEqual(frameRect(2048,2048,0),{x:0,y:0,width:1024,height:1024});
  assert.deepEqual(frameRect(2048,2048,3),{x:1024,y:1024,width:1024,height:1024});
  const source=frameRect(1254,1254,2);assert.equal(source.y,627);assert.equal(source.x,0);
  assert.throws(()=>frameRect(0,10,1));assert.throws(()=>frameRect(2048,2048,4));
});
test('all sixty sources preserve the selected cat and never substitute another identity',()=>{
  const ids=['bori','mochi','luna','nabi','siru','oreo','miso','hodu','byeol','bam'];
  assert.equal(new Set(ids.flatMap(id=>Object.keys(MOTION_ACTIONS).map(action=>motionSource(id,action)))).size,60);
  assert.equal(motionSource('bam','groom'),'assets/motion/groom/bam.png');
  assert.throws(()=>motionSource('../bori','pet'));assert.throws(()=>motionSource('bori','__proto__'));
});

test('every worn combination resolves to its exact outfit and never falls through to bare art',()=>{
  const ids=['bori','mochi','luna','nabi','siru','oreo','miso','hodu','byeol','bam'];
  for(const catId of ids)for(const outfit of OUTFITS)for(const action of Object.keys(MOTION_ACTIONS)){
    const resolved=resolveMotion(catId,action,outfit.id),registered=Object.hasOwn(WORN_MOTION_SHEETS,`${catId}/${outfit.id}/${action}`);
    assert.equal(resolved.catId,catId);assert.equal(resolved.outfitId,outfit.id);assert.equal(resolved.action,action);
    assert.notEqual(resolved.source,motionSource(catId,action));
    if(registered){
      assert.equal(resolved.kind,'sequence');
      assert.equal(resolved.source,`assets/motion/wearing/${catId}/${outfit.id}/${action}.png`);
    }else{
      assert.equal(resolved.kind,'portrait');assert.equal(resolved.source,wardrobeSource(catId));
      assert.deepEqual(resolved.sourceRect,outfitSourceRect(catId,outfit.id));assert.equal(resolved.inset,0);
    }
  }
  assert.equal(resolveMotion('bori','pet').source,motionSource('bori','pet'));
  for(const invalid of ['unknown','../ribbon','__proto__',null])assert.throws(()=>resolveMotion('bori','pet',invalid));
  assert.throws(()=>resolveMotion('../bori','pet','ribbon'));assert.throws(()=>resolveMotion('bori','__proto__','ribbon'));
});

test('registered wardrobe sequences point to installed four-panel image files',async()=>{
  for(const key of Object.keys(WORN_MOTION_SHEETS)){
    const [catId,outfitId,action]=key.split('/'),source=resolveMotion(catId,action,outfitId);
    assert.equal(source.kind,'sequence');
    const png=await readFile(new URL(`../${source.source}`,import.meta.url));
    assert.equal(png.subarray(1,4).toString(),'PNG',`${key} must be an installed PNG sheet`);
    const width=png.readUInt32BE(16),height=png.readUInt32BE(20);
    assert(width>=1024&&height>=1024,`${key} needs readable illustrated frames`);
    assert.equal(width,height,`${key} uses the square 2 × 2 animation layout`);
    assert(source.inset*2<width/2,`${key} inset must leave a drawable frame`);
  }
});

// Controlled image decoding makes races reproducible without fetching real art.
function playerHarness(t){
  const originals=new Map(),images=[],listeners=new Set(),players=[],contexts=[];
  let scheduled=0,disconnected=0;
  const globals={
    window:{devicePixelRatio:1},document:{hidden:false,addEventListener:(_type,fn)=>listeners.add(fn),removeEventListener:(_type,fn)=>listeners.delete(fn)},
    Image:class{naturalWidth=1254;naturalHeight=1254;constructor(){images.push(this);}decode(){return new Promise((resolve,reject)=>{this.finish=resolve;this.fail=reject;});}},
    ResizeObserver:class{observe(){}disconnect(){disconnected++;}},requestAnimationFrame:()=>++scheduled,cancelAnimationFrame:()=>{},
  };
  for(const [key,value] of Object.entries(globals)){originals.set(key,Object.getOwnPropertyDescriptor(globalThis,key));Object.defineProperty(globalThis,key,{value,configurable:true,writable:true});}
  t.after(()=>{players.forEach(player=>player.destroy());for(const [key,value] of originals){if(value)Object.defineProperty(globalThis,key,value);else delete globalThis[key];}});
  return {images,listeners,contexts,get scheduled(){return scheduled;},get disconnected(){return disconnected;},
    create(options){
      const calls=[],context=Object.fromEntries(['fillRect','drawImage','save','restore','beginPath','moveTo','lineTo','closePath','clip'].map(name=>[name,(...args)=>calls.push([name,...args])]));
      contexts.push(calls);const player=createMotionPlayer({clientWidth:512,getContext:()=>context},options);players.push(player);return player;
    }
  };
}

function registeredSheet(t,key,spec={inset:6}){
  const existed=Object.hasOwn(WORN_MOTION_SHEETS,key),previous=WORN_MOTION_SHEETS[key];WORN_MOTION_SHEETS[key]=spec;
  t.after(()=>{if(existed)WORN_MOTION_SHEETS[key]=previous;else delete WORN_MOTION_SHEETS[key];});
}

function unregisteredSheet(t,key){
  const existed=Object.hasOwn(WORN_MOTION_SHEETS,key),previous=WORN_MOTION_SHEETS[key];delete WORN_MOTION_SHEETS[key];
  t.after(()=>{if(existed)WORN_MOTION_SHEETS[key]=previous;});
}

test('a registered worn sequence requests only the matching garment source and keeps normal playback',async t=>{
  registeredSheet(t,'bori/ribbon/pet',{inset:3});const harness=playerHarness(t);
  const player=harness.create({catId:'bori',action:'pet',outfitId:'ribbon'});
  assert.equal(harness.images[0].src,'assets/motion/wearing/bori/ribbon/pet.png');
  harness.images[0].finish();assert.equal(await player.ready,true);
  assert.equal(player.state.kind,'sequence');assert.equal(player.state.outfitId,'ribbon');assert.equal(player.state.playing,true);
  assert.equal(harness.scheduled,1);player.advance(MOTION_ACTIONS.pet.frameMs*2);assert.equal(player.state.frame,2);
  const draw=harness.contexts[0].find(call=>call[0]==='drawImage');assert.deepEqual(draw.slice(2,6),[3,3,621,621]);
});

test('an unregistered worn moment preserves atlas clipping and never animates a different pose',async t=>{
  unregisteredSheet(t,'hodu/sailor/groom');
  const harness=playerHarness(t),player=harness.create({catId:'hodu',action:'groom',outfitId:'sailor'}),rect=outfitSourceRect('hodu','sailor');
  assert.equal(harness.images[0].src,wardrobeSource('hodu'));
  harness.images[0].finish();assert.equal(await player.ready,true);
  assert.equal(player.state.kind,'portrait');assert.equal(player.state.outfitId,'sailor');
  player.play();player.seek(3);player.advance(10000);player.restart();
  assert.equal(player.state.playing,false);assert.equal(player.state.frame,0);assert.equal(player.state.elapsedMs,0);assert.equal(harness.scheduled,0);
  const draw=harness.contexts[0].find(call=>call[0]==='drawImage'),scale=.8*Math.min(512/rect.width,512/rect.height);
  assert.deepEqual(draw.slice(2,6),[rect.x,rect.y,rect.width,rect.height]);
  assert.equal(draw[8]/draw[9],rect.width/rect.height,'Portrait source aspect must remain undistorted');
  assert(draw[6]>=51.2-1e-9&&draw[7]>=51.2-1e-9,'Still portraits need breathing room clear of scene decorations');
  if(rect.clip){
    assert.equal(harness.contexts[0].filter(call=>call[0]==='clip').length,1);
    const points=harness.contexts[0].filter(call=>call[0]==='moveTo'||call[0]==='lineTo').map(call=>call.slice(1));
    assert.deepEqual(points,rect.clip.map(([x,y])=>[(512-rect.width*scale)/2+x*scale,(512-rect.height*scale)/2+y*scale]));
  }
});

test('failed worn decoding reports an error without requesting bare art or another outfit',async t=>{
  registeredSheet(t,'bori/ribbon/pet');const harness=playerHarness(t),player=harness.create({catId:'bori',action:'pet',outfitId:'ribbon'});
  harness.images[0].fail(new Error('missing sheet'));assert.equal(await player.ready,false);
  assert.equal(harness.images.length,1);assert.equal(player.state.source,'assets/motion/wearing/bori/ribbon/pet.png');
  assert.equal(player.state.outfitId,'ribbon');assert.equal(player.state.ready,false);assert.equal(player.state.playing,false);assert(player.state.error);
  assert.equal(harness.contexts[0].filter(call=>call[0]==='drawImage').length,0);assert.equal(harness.scheduled,0);
});

test('late decoding after an outfit/action replacement cannot paint or revive the discarded player',async t=>{
  unregisteredSheet(t,'hodu/bandana/feed');
  const harness=playerHarness(t),oldUpdates=[];
  const previous=harness.create({catId:'hodu',action:'pet',outfitId:'vest',onUpdate:state=>oldUpdates.push(state)});
  previous.destroy();
  const current=harness.create({catId:'hodu',action:'feed',outfitId:'bandana'});
  harness.images[1].finish();assert.equal(await current.ready,true);
  harness.images[0].finish();assert.equal(await previous.ready,false);
  assert.equal(previous.state.ready,false);assert.equal(previous.state.playing,false);assert.equal(oldUpdates.length,0);
  assert.equal(harness.contexts[0].filter(call=>call[0]==='drawImage').length,0);
  assert.equal(current.state.outfitId,'bandana');assert.equal(current.state.action,'feed');assert.equal(current.state.ready,true);
  assert.equal(harness.listeners.size,1);current.destroy();assert.equal(harness.listeners.size,0);assert.equal(harness.scheduled,0);
});

test('selecting a pose during image loading keeps that pose paused after decoding',async t=>{
  const originals=new Map();
  let finishDecode,scheduled=0,disconnected=false;
  const listeners=new Map();
  const globals={
    window:{devicePixelRatio:1},
    document:{hidden:false,addEventListener:(type,fn)=>listeners.set(type,fn),removeEventListener:type=>listeners.delete(type)},
    Image:class{naturalWidth=2048;naturalHeight=2048;decode(){return new Promise(resolve=>{finishDecode=resolve;});}},
    ResizeObserver:class{observe(){}disconnect(){disconnected=true;}},
    requestAnimationFrame:()=>{scheduled++;return scheduled;},cancelAnimationFrame:()=>{},
  };
  for(const [key,value] of Object.entries(globals)){
    originals.set(key,Object.getOwnPropertyDescriptor(globalThis,key));
    Object.defineProperty(globalThis,key,{value,configurable:true,writable:true});
  }
  let player;
  t.after(()=>{player?.destroy();for(const [key,descriptor] of originals){if(descriptor)Object.defineProperty(globalThis,key,descriptor);else delete globalThis[key];}});
  const context={fillRect(){},drawImage(){}};
  const canvas={clientWidth:512,getContext:()=>context};
  player=createMotionPlayer(canvas,{catId:'bam',action:'groom'});
  player.seek(2);
  finishDecode();
  assert.equal(await player.ready,true);
  assert.equal(player.state.frame,2);
  assert.equal(player.state.playing,false);
  assert.equal(scheduled,0,'Decoding must not override an explicit pose selection');
  player.play();
  assert.equal(player.state.playing,true);
  assert.equal(player.state.frame,2,'Explicit playback resumes from the selected pose');
  assert.equal(scheduled,1);
  player.destroy();
  assert.equal(disconnected,true);
  assert.equal(listeners.size,0);
});
