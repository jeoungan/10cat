import {WORN_MOTION_SHEETS} from '../wearing-motion.js';
import {readFile,writeFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
const assets=[];
for(const [key,settings] of Object.entries(WORN_MOTION_SHEETS)){
 const [catId,outfitId,action]=key.split('/'),source=`assets/motion/wearing/${key}.png`,data=await readFile(source);
 const width=data.readUInt32BE(16),height=data.readUInt32BE(20);
 if(width!==height||width<1024)throw new Error(`${key} is not a readable square sequence`);
 assets.push({catId,outfitId,action,source,width,height,inset:settings.inset??6,frames:4,bytes:data.length,sha256:createHash('sha256').update(data).digest('hex')});
}
await writeFile('assets/motion/wearing/manifest.json',JSON.stringify({tool:'built-in image_gen',layout:{columns:2,rows:2},sequences:assets.length,poses:assets.length*4,assets},null,2)+'\n');
console.log(JSON.stringify({sequences:assets.length,poses:assets.length*4,totalMiB:assets.reduce((sum,a)=>sum+a.bytes,0)/1048576}));
