import {WARDROBE_ROW_SEAMS} from './wardrobe-seams.js';

export const OUTFITS = [
  {id:'ribbon',name:'장밋빛 리본 목걸이',shortName:'리본 목걸이',category:'RIBBON COLLAR',description:'작은 리본 하나로, 오늘은 조금 더 사랑스럽게.',price:0,frame:0,color:'#d6a1a6',fabric:'부드러운 리본'},
  {id:'bandana',name:'세이지 스카프',shortName:'세이지 스카프',category:'SOFT BANDANA',description:'햇살과 잘 어울리는 차분한 초록빛 스카프.',price:35,frame:1,color:'#a4b39a',fabric:'가벼운 면'},
  {id:'vest',name:'라일락 니트 베스트',shortName:'니트 베스트',category:'LILAC KNIT',description:'앞발은 자유롭게, 포근함은 살짝 더한 니트.',price:65,frame:2,color:'#b7a6c9',fabric:'포근한 니트'},
  {id:'sailor',name:'크림 세일러 칼라',shortName:'세일러 칼라',category:'CREAM SAILOR',description:'작은 크림색 옷깃에 부드러운 푸른 선, 가벼운 작은 멋.',price:80,frame:3,color:'#c5bfae',fabric:'산뜻한 면'},
];
export const outfitById=id=>OUTFITS.find(outfit=>outfit.id===id)||null;
// Generated alpha sheets have slightly displaced gutters. Use their measured
// source boundaries so adjacent cats never appear and ears/tails stay intact.
export const WARDROBE_SHEETS={
 bori:{width:1254,height:1254,source:'assets/wardrobe-v2/bori-design.png'},mochi:{width:1254,height:1254,source:'assets/wardrobe-v2/mochi.png'},luna:{width:1254,height:1254,source:'assets/wardrobe-v2/luna.png'},
 nabi:{width:1254,height:1254,source:'assets/wardrobe-v2/nabi.png'},siru:{width:1254,height:1254,source:'assets/wardrobe-v2/siru.png'},oreo:{width:1254,height:1254,source:'assets/wardrobe-v2/oreo.png'},
 miso:{width:1254,height:1254,source:'assets/wardrobe-v2/miso.png'},
 hodu:{width:1254,height:1254,source:'assets/wardrobe-v2/hodu.png',rowSeams:WARDROBE_ROW_SEAMS.hodu},
 byeol:{width:1254,height:1254,splitX:646,splitY:639,source:'assets/wardrobe-v2/byeol.png'},bam:{width:1254,height:1254,source:'assets/wardrobe-v2/bam.png'},
};
export function wardrobeSource(catId){
 if(!Object.hasOwn(WARDROBE_SHEETS,catId))throw new Error('Unknown cat wardrobe');
 return WARDROBE_SHEETS[catId].source||`assets/wardrobe/${catId}.png`;
}
export function outfitSourceRect(catId,outfitId){
 wardrobeSource(catId);
 const outfit=outfitById(outfitId);
 if(!outfit)throw new Error('Unknown outfit');
 const sheet=WARDROBE_SHEETS[catId],splitX=sheet.splitX??sheet.width/2,splitY=sheet.splitY??sheet.height/2;
 const right=outfit.frame%2===1,bottom=outfit.frame>1;
 if(sheet.rowSeams){
   // Follow the measured transparent gap between a long upper tail and lower ears.
   // The two complementary polygons keep every opaque source pixel in one portrait.
   const seam=sheet.rowSeams[right?1:0],width=sheet.width/2,low=Math.min(...seam.map(p=>p[1])),high=Math.max(...seam.map(p=>p[1]));
   const height=bottom?sheet.height-low:high;
   const clip=bottom?[...seam.map(([x,y])=>[x,y-low]),[width,height],[0,height]]:[[0,0],[width,0],...seam.toReversed()];
   return {x:right?width:0,y:bottom?low:0,width,height,clip};
 }
 if(sheet.steppedRows){
   // A fluffy upper tail can sit lower than the next cat's ear. The transparent
   // gap between them is a step, so clip along that gap instead of cutting fur.
   const step=sheet.steppedRows[right?1:0],width=sheet.width/2,height=bottom?sheet.height-step.low:step.high;
   const clip=bottom?[[0,0],[step.x,0],[step.x,step.high-step.low],[width,step.high-step.low],[width,height],[0,height]]:[[0,0],[width,0],[width,height],[step.x,height],[step.x,step.low],[0,step.low]];
   return {x:right?width:0,y:bottom?step.low:0,width,height,clip};
 }
 return {x:right?splitX:0,y:bottom?splitY:0,width:right?sheet.width-splitX:splitX,height:bottom?sheet.height-splitY:splitY};
}
let portraitSerial=0;
// The SVG viewport displays one generated full-cat illustration, preserving its alpha.
export function dressedPortrait(catId,outfitId,className='',label=''){
 const outfit=outfitById(outfitId);
 if(!outfit)throw new Error('Unknown outfit');
 const safe=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const rect=outfitSourceRect(catId,outfitId),sheet=WARDROBE_SHEETS[catId];
 const clipId=rect.clip?`wardrobe-source-${++portraitSerial}`:null;
 const clip=clipId?`<defs><clipPath id="${clipId}" clipPathUnits="userSpaceOnUse"><polygon points="${rect.clip.map(point=>point.join(',')).join(' ')}"/></clipPath></defs>`:'';
 return `<svg class="cat-portrait dressed-portrait ${safe(className)}" viewBox="0 0 ${rect.width} ${rect.height}" role="img" aria-label="${safe(label)}" data-outfit-art="${outfit.id}" data-cat-art="${catId}"><svg width="${rect.width}" height="${rect.height}" viewBox="0 0 ${rect.width} ${rect.height}" overflow="hidden" aria-hidden="true">${clip}<g${clipId?` clip-path="url(#${clipId})"`:''}><image href="${wardrobeSource(catId)}" x="${-rect.x}" y="${-rect.y}" width="${sheet.width}" height="${sheet.height}" preserveAspectRatio="none"/></g></svg></svg>`;
}
