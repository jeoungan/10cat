import {CATS} from '../game.js';
import {OUTFITS,WARDROBE_SHEETS,outfitSourceRect,wardrobeSource} from '../wardrobe.js';
import {readFile,writeFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
const assets=[];
for(const cat of CATS){
 const source=wardrobeSource(cat.id),data=await readFile(source);
 if(data[25]!==6)throw new Error(`${cat.id} wardrobe is not an RGBA PNG`);
 const width=data.readUInt32BE(16),height=data.readUInt32BE(20),sheet=WARDROBE_SHEETS[cat.id];
 if(width!==sheet.width||height!==sheet.height)throw new Error(`${cat.id} wardrobe dimensions differ from source metadata`);
 assets.push({catId:cat.id,source,width,height,frames:OUTFITS.map(item=>({outfitId:item.id,...outfitSourceRect(cat.id,item.id)})),bytes:data.length,sha256:createHash('sha256').update(data).digest('hex')});
}
await writeFile('assets/wardrobe/manifest.json',JSON.stringify({tool:'built-in image_gen',layout:{columns:2,rows:2,sourceInsetPx:0},outfits:OUTFITS.map(({id,name,frame})=>({id,name,frame})),variants:assets.length*OUTFITS.length,assets},null,2)+'\n');
console.log(JSON.stringify({variants:assets.length*OUTFITS.length,totalMiB:assets.reduce((sum,a)=>sum+a.bytes,0)/1048576,aspects:Object.fromEntries(assets.filter(a=>a.width!==a.height).map(a=>[a.catId,a.width/a.height]))}));
