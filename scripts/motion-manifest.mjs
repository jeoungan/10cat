import { CATS } from '../game.js';
import { MOTION_ACTIONS,motionSource } from '../motion.js';
import { readFile,writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
const sequences=[];
for(const cat of CATS){
 for(const action of Object.keys(MOTION_ACTIONS)){
  const source=motionSource(cat.id,action),data=await readFile(source);
  sequences.push({catId:cat.id,catName:cat.name,action,source,width:data.readUInt32BE(16),height:data.readUInt32BE(20),frames:4,bytes:data.length,sha256:createHash('sha256').update(data).digest('hex')});
 }
}
const result={version:1,tool:'built-in image_gen',layout:{columns:2,rows:2,sourceInsetPx:6},sequences:sequences.length,totalFrames:sequences.length*4,totalBytes:sequences.reduce((sum,s)=>sum+s.bytes,0),assets:sequences};
await writeFile('assets/motion/manifest.json',JSON.stringify(result,null,2)+'\n');
console.log(`${result.sequences} sequences, ${result.totalFrames} illustrated frames, ${(result.totalBytes/1048576).toFixed(1)} MiB; manifest written.`);
