import test from 'node:test';
import assert from 'node:assert/strict';
import {createGame,SAVE_KEY} from '../game.js';
import {OUTFITS,dressedPortrait,wardrobeSource} from '../wardrobe.js';
const memory=()=>{const data=new Map();return {getItem:key=>data.get(key)??null,setItem:(key,value)=>data.set(key,value)};};

test('new social interactions respect rest, fatigue, and individual cooldowns without duplicate rewards',()=>{
 const game=createGame(null);
 for(const action of ['blink','call','stretch']){
   const before=game.state.cats.bori.affection;
   assert.equal(game.act('bori',action).ok,true);
   assert.equal(game.state.cats.bori.affection,before+2);
   const cat=structuredClone(game.state.cats.bori);
   assert.equal(game.act('bori',action).ok,false);
   assert.deepEqual(game.state.cats.bori,cat);
   assert.equal(game.act('mochi',action).ok,true,'A different cat has its own interaction history');
 }
 game.tick(45000);assert.equal(game.act('bori','stretch').ok,true);
 game.act('bori','sleep');
 for(const action of ['blink','call','stretch'])assert.equal(game.act('bori',action).ok,false);
 game.act('bori','sleep');game.tick(45000);game.state.cats.bori.energy=10;
 assert.equal(game.act('bori','stretch').ok,false);
});

test('wardrobe purchases are shared and charged once; equipping never changes care rewards',()=>{
 const game=createGame(null),initial=game.state.coins;
 assert.deepEqual(game.state.wardrobe.owned,['ribbon']);
 assert.equal(game.equipOutfit('bori','ribbon').ok,true);
 assert.equal(game.state.coins,initial);
 assert.equal(game.equipOutfit('mochi','vest').ok,false);
 assert.equal(game.purchaseOutfit('vest').ok,true);
 assert.equal(game.state.coins,initial-65);
 assert.equal(game.purchaseOutfit('vest').ok,false);
 assert.equal(game.state.coins,initial-65);
 for(const id of ['bori','mochi']){
   const before=structuredClone(game.state.cats[id]);
   assert.equal(game.equipOutfit(id,'vest').ok,true);
   const after={...game.state.cats[id],outfit:before.outfit};
   assert.deepEqual(after,before);
 }
 game.act('mochi','sleep');assert.equal(game.equipOutfit('mochi','ribbon').ok,false);
 assert.equal(game.equipOutfit('mochi','none').ok,true);
 game.state.coins=0;assert.equal(game.purchaseOutfit('sailor').ok,false);
 assert.equal(game.purchaseOutfit('__proto__').ok,false);
 assert.equal(game.equipOutfit('missing','ribbon').ok,false);
 assert.equal(game.equipOutfit('bori','__proto__').ok,false);
});

test('social cooldown expires on the final millisecond after fractional time steps',()=>{
 const game=createGame(null);
 assert.equal(game.act('bori','blink').ok,true);
 game.tick(30000);assert.equal(game.act('bori','blink').ok,true);
 game.tick(29999);assert.equal(game.act('bori','blink').ok,false);
 game.tick(1);assert.equal(game.state.cats.bori.socialCooldowns.blink,0);
 assert.equal(game.act('bori','blink').ok,true);
});

test('outfits and interaction cooldowns survive reload and old saves get a free ribbon',()=>{
 const storage=memory(),game=createGame(storage);
 game.purchaseOutfit('bandana');game.equipOutfit('nabi','bandana');game.equipOutfit('bori','ribbon');game.act('bori','blink');
 const restored=createGame(storage);
 assert.equal(restored.state.cats.nabi.outfit,'bandana');assert.equal(restored.state.cats.bori.outfit,'ribbon');
 assert.equal(restored.act('bori','blink').ok,false);
 const raw=JSON.parse(storage.getItem(SAVE_KEY));delete raw.wardrobe;
 raw.cats.bori.outfit='sailor';delete raw.cats.mochi.socialCooldowns;
 storage.setItem(SAVE_KEY,JSON.stringify(raw));
 const legacy=createGame(storage);
 assert.deepEqual(legacy.state.wardrobe.owned,['ribbon']);assert.equal(legacy.state.cats.bori.outfit,'none');assert.equal(legacy.state.cats.nabi.outfit,'none');
 assert.equal(legacy.act('mochi','call').ok,true);
});

test('outfit art points to each cats own generated sheet and distinct garment quadrant',()=>{
 for(const id of ['bori','nabi','bam']){
   const variants=OUTFITS.map(item=>dressedPortrait(id,item.id,'',id));
   assert.equal(new Set(variants).size,4);
   for(const svg of variants)assert(svg.includes(wardrobeSource(id)));
 }
 assert.throws(()=>dressedPortrait('../cat','ribbon'));
 assert.throws(()=>dressedPortrait('bori','unknown'));
});
