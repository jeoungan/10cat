import assert from 'node:assert/strict';
import {mkdir,writeFile,readFile} from 'node:fs/promises';
import {chromium} from 'file:///C:/Users/jeoun/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
import {CATS} from '../game.js';
import {OUTFITS,wardrobeSource,WARDROBE_SHEETS} from '../wardrobe.js';
const ids=process.argv.slice(2),cats=ids.length?CATS.filter(c=>ids.includes(c.id)):CATS;
const out='output/wardrobe-v2-review';await mkdir(out,{recursive:true});
const browser=await chromium.launch({channel:'chrome',headless:true});const page=await browser.newPage({viewport:{width:1440,height:1050}});
const errors=[];page.on('pageerror',e=>errors.push(e.message));const checked=[];
try{
 await page.goto('http://127.0.0.1:4173/',{waitUntil:'networkidle'});await page.getByRole('button',{name:'작은 옷장',exact:true}).click();
 for(const cat of cats){
  await page.locator(`[data-wardrobe-cat="${cat.id}"]`).click();
  const bytes=await readFile(wardrobeSource(cat.id));assert.equal(bytes[25],6);assert.equal(bytes.readUInt32BE(16),WARDROBE_SHEETS[cat.id].width);assert.equal(bytes.readUInt32BE(20),WARDROBE_SHEETS[cat.id].height);
  for(const outfit of OUTFITS){
   await page.locator(`[data-outfit="${outfit.id}"]`).click();
   await page.locator('.wardrobe-cat-stage image').evaluate(async e=>{const im=new Image();im.src=e.getAttribute('href');await im.decode();});
   assert.equal(await page.locator('.wardrobe-cat-stage image').getAttribute('href'),wardrobeSource(cat.id));
   const clip=await page.locator('.wardrobe-preview').boundingBox();
   await page.screenshot({path:`${out}/${cat.id}-${outfit.id}-final.png`,clip});
   checked.push(`${cat.id}/${outfit.id}`);
  }
  await page.screenshot({path:`${out}/${cat.id}-desktop-final.png`,fullPage:true});
 }
 await page.setViewportSize({width:390,height:844});
 await page.locator(`[data-wardrobe-cat="${cats[0].id}"]`).click();
 await page.locator('[data-outfit="vest"]').click();
 await page.screenshot({path:`${out}/wardrobe-mobile-final.png`,fullPage:true});
 assert(await page.locator('body').evaluate(e=>e.scrollWidth<=innerWidth));
 const label=await page.locator('[data-outfit="sailor"] b').innerText();assert.equal(label,'세일러 칼라');
 assert.deepEqual(errors,[]);
 await writeFile(`${out}/${ids.length?'target':'all'}-ui-result.json`,JSON.stringify({ok:true,checked,errors},null,2));
 console.log(`PASS: ${checked.length} redesigned wardrobe views, original RGBA/native geometry, mobile and matching garment names.`);
}finally{await browser.close();}
