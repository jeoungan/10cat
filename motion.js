import { outfitById, wardrobeSource, outfitSourceRect } from './wardrobe.js';
import { WORN_MOTION_SHEETS } from './wearing-motion.js';

// Each animated action is original illustrated keyframes in a 2 × 2 sheet.
export const MOTION_ACTIONS = {
  pet: {
    title: '손길에 사르르', label: '머리 쓰다듬기', icon: 'hand',
    caption: '다정한 손길에, 마음도 사르르',
    description: '이마에서 귀 뒤까지, 다정한 손길에 천천히 눈을 감아요.',
    captions: ['손끝을 조심스럽게 가까이', '이마를 따라 부드럽게', '기분 좋아, 눈이 사르르', '조금 더 기대고 싶은 마음'],
    sequence: [0, 1, 2, 3, 2, 1], frameMs: 470,
  },
  brush: {
    title: '보송보송, 느긋한 시간', label: '빗질 받기', icon: 'brush',
    caption: '털도 마음도 보송보송',
    description: '어깨부터 등을 따라 살살. 가지런해지는 털과 편안한 표정.',
    captions: ['익숙한 빗에 안심하고', '어깨부터 살살 빗어 주면', '등을 살짝 펴며 기지개', '털도 마음도 보송보송'],
    sequence: [0, 1, 2, 3, 2, 1], frameMs: 490,
  },
  groom: {
    title: '작은 앞발로 하는 세수', label: '발 핥고 그루밍', icon: 'paw',
    caption: '작은 앞발로, 꼼꼼한 세수',
    description: '앞발을 핥고, 볼과 귀를 쓱쓱. 고양이만의 정성스러운 세수예요.',
    captions: ['앞발을 살며시 들어 올리고', '작은 혀로 꼼꼼하게 핥고', '볼에서 귀까지 쓱쓱', '세수를 마치고 느긋하게'],
    sequence: [0, 1, 2, 3], frameMs: 550,
  },
  feed: {
    title:'오독오독, 맛있는 한 끼',label:'맛있게 먹기',icon:'bowl',
    caption:'작은 그릇에 담긴 든든한 마음',description:'냄새를 맡고, 고개를 숙여 오독오독. 마지막 한 입까지 천천히 즐겨요.',
    captions:['맛있는 냄새를 맡고','그릇에 살짝 고개를 숙여','오독오독 한 입','입가를 정리하며 고개를 들어요'],sequence:[0,1,2,3],frameMs:560,
  },
  drink: {
    title:'찹찹, 맑은 물 한 모금',label:'물 마시기',icon:'water',
    caption:'조용한 오후에 들리는 작은 물소리',description:'물그릇을 살피고 혀끝으로 찹찹. 촉촉한 코 끝에 햇살이 맺혀요.',
    captions:['물그릇을 살피고','작은 혀로 찹찹','한 모금 더 마시고','느긋하게 고개를 들어요'],sequence:[0,1,2,3],frameMs:520,
  },
  stretch: {
    title:'앞발 쭉, 나른한 기지개',label:'기지개 켜기',icon:'sun',
    caption:'서두르지 않고, 온몸을 쭉',description:'앞발을 길게 뻗고 등을 느긋하게 펴요. 몸을 일으키고 나면 한결 가벼운 표정.',
    captions:['앞발을 길게 뻗고','등과 어깨를 쭉 펴고','천천히 몸을 일으켜','편안한 자세로 돌아와요'],sequence:[0,1,2,3],frameMs:620,
  },
};

export function motionSource(catId, action) {
  const ids = ['bori','mochi','luna','nabi','siru','oreo','miso','hodu','byeol','bam'];
  if (!ids.includes(catId) || !Object.hasOwn(MOTION_ACTIONS, action)) throw new Error('Unknown illustrated moment');
  return `assets/motion/${action}/${catId}.png`;
}

export function resolveMotion(catId, action, outfitId = 'none') {
  // Validate identity and action even when this will display a still portrait.
  const bareSource = motionSource(catId, action);
  if (outfitId === 'none') return { catId, action, outfitId, kind: 'sequence', source: bareSource, inset: 6 };
  if (!outfitById(outfitId)) throw new Error('Unknown illustrated outfit');
  const key = `${catId}/${outfitId}/${action}`;
  if (Object.hasOwn(WORN_MOTION_SHEETS, key)) {
    const inset = WORN_MOTION_SHEETS[key].inset ?? 2;
    if (!Number.isFinite(inset) || inset < 0) throw new Error('Invalid illustrated source inset');
    return { catId, action, outfitId, kind: 'sequence', source: `assets/motion/wearing/${key}.png`, inset };
  }
  return { catId, action, outfitId, kind: 'portrait', source: wardrobeSource(catId),
    sourceRect: outfitSourceRect(catId, outfitId), inset: 0 };
}

export function frameAt(elapsedMs, action, reduceMotion = false) {
  const spec=MOTION_ACTIONS[action];
  if (!spec) throw new Error('Unknown action');
  const elapsed=Number.isFinite(elapsedMs)?Math.max(0,elapsedMs):0;
  const frameIndex=Math.floor(elapsed/spec.frameMs)%spec.sequence.length;
  const phase=(elapsed%spec.frameMs)/spec.frameMs;
  // Hold each drawing long enough to read; dissolve only at the tail of the frame.
  // We draw real generated poses rather than moving one still image around.
  const blend=reduceMotion?0:Math.max(0, Math.min(1,(phase-.78)/.22));
  return { frame:spec.sequence[frameIndex], nextFrame:spec.sequence[(frameIndex+1)%spec.sequence.length], blend,
    phase:elapsed%(spec.frameMs*spec.sequence.length)/(spec.frameMs*spec.sequence.length) };
}

export function frameRect(width,height,frame) {
  if (!(width>0&&height>0)||!Number.isInteger(frame)||frame<0||frame>3) throw new Error('Invalid frame rectangle');
  return { x:(frame%2)*width/2, y:Math.floor(frame/2)*height/2, width:width/2, height:height/2 };
}

export function createMotionPlayer(canvas,{catId,action,outfitId='none',reducedMotion=false,onUpdate=()=>{}}) {
  const resolved=resolveMotion(catId,action,outfitId),spec=MOTION_ACTIONS[action],url=resolved.source,isSequence=resolved.kind==='sequence';
  const context=canvas.getContext('2d',{alpha:false});
  let image=null, raf=0, destroyed=false, ready=false, playing=false, elapsed=0, last=0, manualFrame=null, error=null, reportedFrame=-1;
  const ratio=Math.min(window.devicePixelRatio||1,2);
  const snapshot=()=>({catId,action,outfitId,kind:resolved.kind,source:url,ready,playing,frame:isSequence?(manualFrame??frameAt(elapsed,action).frame):0,elapsedMs:Math.round(elapsed),error});
  function report(force=false){const state=snapshot();if(force||state.frame!==reportedFrame){reportedFrame=state.frame;onUpdate(state);}}
  function resize(){if(destroyed)return;const width=Math.max(1,Math.round(canvas.clientWidth*ratio));canvas.width=width;canvas.height=width;draw();}
  function draw(){
    if(!ready||destroyed)return;
    if(!isSequence){
      // Fit the complete generated outfit illustration without stretching it.
      // Its measured polygon removes adjacent ears/tails in displaced atlas rows.
      const r=resolved.sourceRect,scale=.8*Math.min(canvas.width/r.width,canvas.height/r.height),width=r.width*scale,height=r.height*scale,x=(canvas.width-width)/2,y=(canvas.height-height)/2;
      context.globalAlpha=1;context.fillStyle='#f0e7d5';context.fillRect(0,0,canvas.width,canvas.height);
      context.save();
      if(r.clip){context.beginPath();r.clip.forEach(([px,py],index)=>context[index?'lineTo':'moveTo'](x+px*scale,y+py*scale));context.closePath();context.clip();}
      context.drawImage(image,r.x,r.y,r.width,r.height,x,y,width,height);context.restore();report();return;
    }
    const current=manualFrame!==null?{frame:manualFrame,nextFrame:manualFrame,blend:0}:frameAt(elapsed,action,reducedMotion);
    const paint=(frame,alpha)=>{const r=frameRect(image.naturalWidth,image.naturalHeight,frame),inset=resolved.inset;context.globalAlpha=alpha;context.drawImage(image,r.x+inset,r.y+inset,r.width-2*inset,r.height-2*inset,0,0,canvas.width,canvas.height);};
    context.globalAlpha=1;context.fillStyle='#f0e7d5';context.fillRect(0,0,canvas.width,canvas.height);paint(current.frame,1);
    if(current.blend>0&&current.nextFrame!==current.frame)paint(current.nextFrame,current.blend);
    context.globalAlpha=1;
    report();
  }
  function schedule(){if(playing&&ready&&!destroyed&&!document.hidden&&!raf){last=performance.now();raf=requestAnimationFrame(step);}}
  function step(now){raf=0;if(destroyed||!playing||document.hidden)return;elapsed+=Math.min(Math.max(0,now-last),80);last=now;draw();raf=requestAnimationFrame(step);}
  function pause(){playing=false;cancelAnimationFrame(raf);raf=0;report(true);}
  function play(){if(destroyed||!ready||!isSequence)return;if(manualFrame!==null){const index=spec.sequence.indexOf(manualFrame);elapsed=Math.max(0,index)*spec.frameMs;manualFrame=null;}playing=true;report(true);schedule();}
  function seek(frame){if(destroyed||!isSequence||!Number.isInteger(frame)||frame<0||frame>3)return;pause();manualFrame=frame;draw();report(true);}
  function restart(){if(destroyed||!ready||!isSequence)return;elapsed=0;manualFrame=null;draw();play();}
  function visibility(){cancelAnimationFrame(raf);raf=0;if(!document.hidden)schedule();}
  document.addEventListener('visibilitychange',visibility);
  const observer=new ResizeObserver(resize);observer.observe(canvas);resize();
  const readyPromise=(async()=>{
    try{
      const source=new Image();source.decoding='async';source.src=url;await source.decode();
      if(destroyed)return false;
      if(source.naturalWidth<512||source.naturalHeight<512)throw new Error('Sequence resolution too small');
      if(isSequence&&resolved.inset*2>=Math.min(source.naturalWidth,source.naturalHeight)/2)throw new Error('Source inset exceeds frame');
      image=source;ready=true;draw();report(true);if(!reducedMotion&&manualFrame===null)play();return true;
    } catch {
      if(!destroyed){error='이 장면의 그림을 불러오지 못했어요. 다시 시도해 주세요.';report(true);}return false;
    }
  })();
  return { ready:readyPromise, get state(){return snapshot();}, play,pause,seek,restart,
    advance(ms){if(destroyed||!ready||!isSequence||!Number.isFinite(ms)||ms<0)return;manualFrame=null;elapsed+=ms;draw();report(true);},
    destroy(){destroyed=true;playing=false;cancelAnimationFrame(raf);raf=0;observer.disconnect();document.removeEventListener('visibilitychange',visibility);image=null;}
  };
}
