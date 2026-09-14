// Capture the actual game canvas; this does not synthesize or edit artwork.
import { writeFile,mkdir } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import path from 'node:path';
let pw;try{pw=await import('playwright');}catch{pw=await import(pathToFileURL(path.join(process.env.USERPROFILE,'.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs')));}
const browser=await pw.chromium.launch({channel:'chrome',headless:true});
try{
 const page=await browser.newPage({viewport:{width:1440,height:1050},deviceScaleFactor:1});
 await page.goto('http://127.0.0.1:4173/',{waitUntil:'networkidle'});
 await page.locator('.moment-discovery').click();
 await page.waitForFunction(()=>JSON.parse(window.render_game_to_text()).motion?.ready);
 await mkdir('output/motion-qa',{recursive:true});
 const clip=await page.locator('.motion-canvas').evaluate(async canvas=>{
  const mime=MediaRecorder.isTypeSupported('video/webm;codecs=vp9')?'video/webm;codecs=vp9':'video/webm';
  const stream=canvas.captureStream(24),recorder=new MediaRecorder(stream,{mimeType:mime,videoBitsPerSecond:1800000}),chunks=[];
  const data=await new Promise((resolve,reject)=>{
   recorder.ondataavailable=e=>{if(e.data.size)chunks.push(e.data);};recorder.onerror=reject;
   recorder.onstop=async()=>{const blob=new Blob(chunks,{type:mime});const reader=new FileReader();reader.onload=()=>resolve(reader.result.split(',')[1]);reader.onerror=reject;reader.readAsDataURL(blob);};
   recorder.start();setTimeout(()=>recorder.stop(),4600);
  });
  stream.getTracks().forEach(track=>track.stop());return data;
 });
 await writeFile('output/motion-qa/groom-preview.webm',Buffer.from(clip,'base64'));
 console.log('Captured actual animated grooming canvas to output/motion-qa/groom-preview.webm.');
}finally{await browser.close();}
