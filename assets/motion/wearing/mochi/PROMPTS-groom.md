# 모찌 · 의상을 입은 그루밍

2026-09-08 14:12 회차. Built-in `image_gen` 생성4회·표적 편집3회 사용. 기존 착용 쓰다듬기 시트의 모찌 외모·착장·실내광을 참조하고 맨몸 그루밍은 동작 참조로만 사용. 모든 참조 입력은 생성 전에 `view_image`로 확인했다. 기존 pet.png와 의상 원본을 변경하지 않았다. 수동 래스터 편집·재색칠·확대 없음.

프레임 순서: 앞발 들기 → 같은 앞발 핥기 → 같은 앞발로 볼/귀 세수 → 앞발을 바닥에 내려놓고 편히 앉기. 실제 출력7개 모두 PNG 헤더에서1254×1254 확인. 최종4시트/16자세, 각627×627; 테두리 없는 정확한 중앙2×2 구도이며 재생기는 기존 inset2px를 사용.

## 최종 파일

| 착장 | 프로젝트 경로 | 해상도 | Bytes | SHA256 |
|---|---|---|---:|---|
| ribbon | `assets/motion/wearing/mochi/ribbon/groom.png` | 1254×1254 | 2309597 | `4fa2e265e5d4ebaadee33cb17c6631ce5b8fb1a249a6acd5f70e3da67587195d` |
| bandana | `assets/motion/wearing/mochi/bandana/groom.png` | 1254×1254 | 2338399 | `faea91ce21a20241b50ec881f58b8bd60e9153f64e9748a6b255e93a9e4b32c5` |
| vest | `assets/motion/wearing/mochi/vest/groom.png` | 1254×1254 | 2403834 | `27b6aeed059587d025474a934bac09783d9a801e0db4f6ba5fbb26e57e8a6e94` |
| sailor | `assets/motion/wearing/mochi/sailor/groom.png` | 1254×1254 | 2243895 | `526b622ffe750eb2ea487e8af7de6ab6131211a680fc9fc2bb188cebb34e9d96` |

총9,295,725 bytes. 최종선택: bandana/vest 최초 결과, sailor 1차 교정, ribbon 2차 교정.

## 최초 생성

### ribbon

프로젝트 대상: `ribbon/groom.png`

참조 입력 (순서 고정):

1. `C:/Users/jeoun/OneDrive/바탕 화면/고양이양이/assets/motion/wearing/mochi/ribbon/pet.png`
2. `C:/Users/jeoun/OneDrive/바탕 화면/고양이양이/assets/motion/groom/mochi.png`

출력 원본: `C:/Users/jeoun/.codex/generated_images/01a07f6f-1ca0-7312-aee5-d23bfeb87335/exec-506529b5-3a40-4bd9-b7c5-f7c9ede6cab6.png` (1254×1254).

첫 결과는 세수 팔이 얼굴을 가로질러 반대쪽으로 향해 미채택. 아래 표적 편집으로 보완.

정확한 생성 프롬프트:

```text
Use case: illustration-story.
Asset type: production four-frame cat self-grooming animation atlas for a high-quality cozy 2D visual novel game.
Reference images: input 1 is the exact cat identity, outfit, warm room, rendering style and camera reference. Input 2 is only a feline self-grooming motion reference. Create NEW self-grooming poses; REMOVE ALL HUMAN HANDS AND ARMS from input 1.
Subject: Mochi, the same round-faced white long-haired Persian cat, pink small nose, amber-gold eyes, fluffy cheek ruff and plume tail consistently curled on the viewer-left on the rug. Exactly one cat per frame.
Outfit invariant in all four frames: the exact small muted rose-red cotton bow and narrow rose collar in input 1; one bow on the viewer-right front of the neck. White neck fur naturally overlaps the narrow fabric band. No shirt, no large accessory.
Composition: one square 1254 x 1254 image, a precisely equal 2 x 2 grid, each individual view 627 x 627; exact vertical and horizontal splits at 50%. Edge-to-edge scene cells, no border or gutter and no painted dividing line. Identical locked camera, cat scale, rug position, room geometry, sofa and warm light in all four views. Full body and complete tail, both ears and every resting foot safely inside every cell, with at least 7% space around outer fur. Cozy sunlit cream-and-sage living room from input 1; soft detailed painterly illustration, fine white fur, grounded shadows, natural fabric texture integrated in same lighting.
Four genuinely different connected self-grooming poses in reading order:
1 TOP LEFT: seated cat lifts its anatomical LEFT front paw (the paw on viewer RIGHT) toward its mouth; eyes relaxed, mouth closed. The opposite front paw remains planted.
2 TOP RIGHT: the SAME lifted front paw held near mouth, small pink tongue visibly licking its fur, head bending slightly down toward it; opposite paw still planted.
3 BOTTOM LEFT: the SAME front paw sweeps up to wash the cheek and base of its own ear on viewer RIGHT, eyes gently closed, natural bent feline wrist; opposite paw planted.
4 BOTTOM RIGHT: the moving front paw has lowered fully to the rug beside the other front paw, the cat peacefully sits with both front paws resting and a soft content expression.
Anatomy: one connected moving front leg with a natural feline shoulder and elbow, one planted front leg, two plausible hind feet; no duplicate or disembodied paws, no humanlike arms. The cat remains seated at the same base position; tail stays on viewer-left without flipping. Clothing follows chest and leg motion naturally, fur overlaps seams, no pasted sticker edges.
No words, letters, numbers, labels, watermark, border, checkerboard, toys, hands, brushes or second cat. Preserve the same cat and garment across all frames.
```

### bandana

프로젝트 대상: `bandana/groom.png`

참조 입력 (순서 고정):

1. `C:/Users/jeoun/OneDrive/바탕 화면/고양이양이/assets/motion/wearing/mochi/bandana/pet.png`
2. `C:/Users/jeoun/OneDrive/바탕 화면/고양이양이/assets/motion/groom/mochi.png`

출력 원본: `C:/Users/jeoun/.codex/generated_images/01a07f6f-1ca0-7312-aee5-d23bfeb87335/exec-8a9d43fc-42e7-4cbc-817f-5c3569617b4b.png` (1254×1254).

첫 결과를 최종 선택.

정확한 생성 프롬프트:

```text
Use case: illustration-story.
Asset type: production four-frame cat self-grooming animation atlas for a high-quality cozy 2D visual novel game.
Reference images: input 1 is the exact cat identity, outfit, warm room, rendering style and camera reference. Input 2 is only a feline self-grooming motion reference. Create NEW self-grooming poses; REMOVE ALL HUMAN HANDS AND ARMS from input 1.
Subject: Mochi, the same round-faced white long-haired Persian cat, pink small nose, amber-gold eyes, fluffy cheek ruff and plume tail consistently curled on the viewer-left on the rug. Exactly one cat per frame.
Outfit invariant in all four frames: the exact soft sage-green small triangular cotton neckerchief in input 1, softly folded at the throat with the tied ends at the viewer-right neck. The natural cloth folds follow the chest and neck fur. No extra scarf on belly or legs.
Composition: one square 1254 x 1254 image, a precisely equal 2 x 2 grid, each individual view 627 x 627; exact vertical and horizontal splits at 50%. Edge-to-edge scene cells, no border or gutter and no painted dividing line. Identical locked camera, cat scale, rug position, room geometry, sofa and warm light in all four views. Full body and complete tail, both ears and every resting foot safely inside every cell, with at least 7% space around outer fur. Cozy sunlit cream-and-sage living room from input 1; soft detailed painterly illustration, fine white fur, grounded shadows, natural fabric texture integrated in same lighting.
Four genuinely different connected self-grooming poses in reading order:
1 TOP LEFT: seated cat lifts its anatomical LEFT front paw (the paw on viewer RIGHT) toward its mouth; eyes relaxed, mouth closed. The opposite front paw remains planted.
2 TOP RIGHT: the SAME lifted front paw held near mouth, small pink tongue visibly licking its fur, head bending slightly down toward it; opposite paw still planted.
3 BOTTOM LEFT: the SAME front paw sweeps up to wash the cheek and base of its own ear on viewer RIGHT, eyes gently closed, natural bent feline wrist; opposite paw planted.
4 BOTTOM RIGHT: the moving front paw has lowered fully to the rug beside the other front paw, the cat peacefully sits with both front paws resting and a soft content expression.
Anatomy: one connected moving front leg with a natural feline shoulder and elbow, one planted front leg, two plausible hind feet; no duplicate or disembodied paws, no humanlike arms. The cat remains seated at the same base position; tail stays on viewer-left without flipping. Clothing follows chest and leg motion naturally, fur overlaps seams, no pasted sticker edges.
No words, letters, numbers, labels, watermark, border, checkerboard, toys, hands, brushes or second cat. Preserve the same cat and garment across all frames.
```

### vest

프로젝트 대상: `vest/groom.png`

참조 입력 (순서 고정):

1. `C:/Users/jeoun/OneDrive/바탕 화면/고양이양이/assets/motion/wearing/mochi/vest/pet.png`
2. `C:/Users/jeoun/OneDrive/바탕 화면/고양이양이/assets/motion/groom/mochi.png`

출력 원본: `C:/Users/jeoun/.codex/generated_images/01a07f6f-1ca0-7312-aee5-d23bfeb87335/exec-0fb16f42-085d-43d5-be12-724020b7728a.png` (1254×1254).

첫 결과를 최종 선택.

정확한 생성 프롬프트:

```text
Use case: illustration-story.
Asset type: production four-frame cat self-grooming animation atlas for a high-quality cozy 2D visual novel game.
Reference images: input 1 is the exact cat identity, outfit, warm room, rendering style and camera reference. Input 2 is only a feline self-grooming motion reference. Create NEW self-grooming poses; REMOVE ALL HUMAN HANDS AND ARMS from input 1.
Subject: Mochi, the same round-faced white long-haired Persian cat, pink small nose, amber-gold eyes, fluffy cheek ruff and plume tail consistently curled on the viewer-left on the rug. Exactly one cat per frame.
Outfit invariant in all four frames: the exact pastel lilac-pink fine-knit sleeveless vest in input 1. Preserve the ribbed round neckline and arm openings and the tiny knit pattern. White neck fur overlaps the neckline; the moving front leg emerges through its same arm opening with natural contact shadow and small fabric folds. No sleeves, no other accessories.
Composition: one square 1254 x 1254 image, a precisely equal 2 x 2 grid, each individual view 627 x 627; exact vertical and horizontal splits at 50%. Edge-to-edge scene cells, no border or gutter and no painted dividing line. Identical locked camera, cat scale, rug position, room geometry, sofa and warm light in all four views. Full body and complete tail, both ears and every resting foot safely inside every cell, with at least 7% space around outer fur. Cozy sunlit cream-and-sage living room from input 1; soft detailed painterly illustration, fine white fur, grounded shadows, natural fabric texture integrated in same lighting.
Four genuinely different connected self-grooming poses in reading order:
1 TOP LEFT: seated cat lifts its anatomical LEFT front paw (the paw on viewer RIGHT) toward its mouth; eyes relaxed, mouth closed. The opposite front paw remains planted.
2 TOP RIGHT: the SAME lifted front paw held near mouth, small pink tongue visibly licking its fur, head bending slightly down toward it; opposite paw still planted.
3 BOTTOM LEFT: the SAME front paw sweeps up to wash the cheek and base of its own ear on viewer RIGHT, eyes gently closed, natural bent feline wrist; opposite paw planted.
4 BOTTOM RIGHT: the moving front paw has lowered fully to the rug beside the other front paw, the cat peacefully sits with both front paws resting and a soft content expression.
Anatomy: one connected moving front leg with a natural feline shoulder and elbow, one planted front leg, two plausible hind feet; no duplicate or disembodied paws, no humanlike arms. The cat remains seated at the same base position; tail stays on viewer-left without flipping. Clothing follows chest and leg motion naturally, fur overlaps seams, no pasted sticker edges.
No words, letters, numbers, labels, watermark, border, checkerboard, toys, hands, brushes or second cat. Preserve the same cat and garment across all frames.
```

### sailor

프로젝트 대상: `sailor/groom.png`

참조 입력 (순서 고정):

1. `C:/Users/jeoun/OneDrive/바탕 화면/고양이양이/assets/motion/wearing/mochi/sailor/pet.png`
2. `C:/Users/jeoun/OneDrive/바탕 화면/고양이양이/assets/motion/groom/mochi.png`

출력 원본: `C:/Users/jeoun/.codex/generated_images/01a07f6f-1ca0-7312-aee5-d23bfeb87335/exec-26b444f0-fad9-4090-83ad-f736f47baee7.png` (1254×1254).

첫 결과는 세수 팔이 얼굴을 가로질러 반대쪽으로 향해 미채택. 아래 표적 편집으로 보완.

정확한 생성 프롬프트:

```text
Use case: illustration-story.
Asset type: production four-frame cat self-grooming animation atlas for a high-quality cozy 2D visual novel game.
Reference images: input 1 is the exact cat identity, outfit, warm room, rendering style and camera reference. Input 2 is only a feline self-grooming motion reference. Create NEW self-grooming poses; REMOVE ALL HUMAN HANDS AND ARMS from input 1.
Subject: Mochi, the same round-faced white long-haired Persian cat, pink small nose, amber-gold eyes, fluffy cheek ruff and plume tail consistently curled on the viewer-left on the rug. Exactly one cat per frame.
Outfit invariant in all four frames: the exact small cream cotton sailor collar with muted blue piping and a small muted blue front knot in input 1. It lies softly over the neck fur; no shirt, no sleeves, no separate bow elsewhere.
Composition: one square 1254 x 1254 image, a precisely equal 2 x 2 grid, each individual view 627 x 627; exact vertical and horizontal splits at 50%. Edge-to-edge scene cells, no border or gutter and no painted dividing line. Identical locked camera, cat scale, rug position, room geometry, sofa and warm light in all four views. Full body and complete tail, both ears and every resting foot safely inside every cell, with at least 7% space around outer fur. Cozy sunlit cream-and-sage living room from input 1; soft detailed painterly illustration, fine white fur, grounded shadows, natural fabric texture integrated in same lighting.
Four genuinely different connected self-grooming poses in reading order:
1 TOP LEFT: seated cat lifts its anatomical LEFT front paw (the paw on viewer RIGHT) toward its mouth; eyes relaxed, mouth closed. The opposite front paw remains planted.
2 TOP RIGHT: the SAME lifted front paw held near mouth, small pink tongue visibly licking its fur, head bending slightly down toward it; opposite paw still planted.
3 BOTTOM LEFT: the SAME front paw sweeps up to wash the cheek and base of its own ear on viewer RIGHT, eyes gently closed, natural bent feline wrist; opposite paw planted.
4 BOTTOM RIGHT: the moving front paw has lowered fully to the rug beside the other front paw, the cat peacefully sits with both front paws resting and a soft content expression.
Anatomy: one connected moving front leg with a natural feline shoulder and elbow, one planted front leg, two plausible hind feet; no duplicate or disembodied paws, no humanlike arms. The cat remains seated at the same base position; tail stays on viewer-left without flipping. Clothing follows chest and leg motion naturally, fur overlaps seams, no pasted sticker edges.
No words, letters, numbers, labels, watermark, border, checkerboard, toys, hands, brushes or second cat. Preserve the same cat and garment across all frames.
```

## 표적 교정

### ribbon 1차

참조(순서 고정):

1. `C:/Users/jeoun/.codex/generated_images/01a07f6f-1ca0-7312-aee5-d23bfeb87335/exec-506529b5-3a40-4bd9-b7c5-f7c9ede6cab6.png`

출력 원본: `C:/Users/jeoun/.codex/generated_images/01a07f6f-1ca0-7312-aee5-d23bfeb87335/exec-bd851b0d-1782-448a-8468-e955a48f5c70.png` (1254×1254).

결과: 발이 화면 왼쪽에 남아 미채택.

정확한 편집 프롬프트:

```text
Use case: precise-object-edit. Edit only the BOTTOM LEFT frame of this 1254 x 1254 four-frame Mochi cat grooming atlas. Keep the other three frames unchanged. In the bottom-left frame, change only the raised front leg's washing gesture: it is the cat's anatomical LEFT front leg on viewer RIGHT, and its paw should touch the SAME-side cheek and base of ear on viewer RIGHT, next to that eye. The arm must NOT cross horizontally over the cat's face to the viewer-left ear. Draw the shoulder and elbow as a short natural bent feline front leg, with the paw washing the viewer-right cheek. Both eyes remain gently closed. Keep the opposite planted front leg, hind feet, exact rose cotton bow and collar, all white Persian fur, face identity, cat's position and size, the fluffy tail curled viewer-left, sofa, warm sunlit room and camera unchanged. Preserve exact equal 2x2 layout and exact midpoint cell boundaries, entire ears, paw and tail safely inside every frame. No new accessories, hands, text, border, or extra legs.
```

### sailor 1차

참조(순서 고정):

1. `C:/Users/jeoun/.codex/generated_images/01a07f6f-1ca0-7312-aee5-d23bfeb87335/exec-26b444f0-fad9-4090-83ad-f736f47baee7.png`

출력 원본: `C:/Users/jeoun/.codex/generated_images/01a07f6f-1ca0-7312-aee5-d23bfeb87335/exec-79219f3a-874a-4b71-ab97-9ea27b0f273d.png` (1254×1254).

결과: 같은 쪽 볼 세수로 보완되어 최종 groom.png로 복사.

정확한 편집 프롬프트:

```text
Use case: precise-object-edit. Edit only the BOTTOM LEFT frame of this 1254 x 1254 four-frame Mochi cat grooming atlas. Keep the other three frames unchanged. In the bottom-left frame, change only the raised front leg's washing gesture: it is the cat's anatomical LEFT front leg on viewer RIGHT, and its paw should touch the SAME-side cheek and base of ear on viewer RIGHT, next to that eye. The arm must NOT cross horizontally over the cat's face to the viewer-left ear. Draw the shoulder and elbow as a short natural bent feline front leg, with the paw washing the viewer-right cheek. Both eyes remain gently closed. Keep the opposite planted front leg, hind feet, exact small cream sailor collar with blue piping and blue tie, all white Persian fur, face identity, cat's position and size, the fluffy tail curled viewer-left, sofa, warm sunlit room and camera unchanged. Preserve exact equal 2x2 layout and exact midpoint cell boundaries, entire ears, paw and tail safely inside every frame. No new accessories, hands, text, border, or extra legs.
```

### ribbon 2차

참조(순서 고정):

1. `C:/Users/jeoun/.codex/generated_images/01a07f6f-1ca0-7312-aee5-d23bfeb87335/exec-506529b5-3a40-4bd9-b7c5-f7c9ede6cab6.png`
2. `C:/Users/jeoun/OneDrive/바탕 화면/고양이양이/assets/motion/wearing/mochi/bandana/groom.png`

출력 원본: `C:/Users/jeoun/.codex/generated_images/01a07f6f-1ca0-7312-aee5-d23bfeb87335/exec-b93589d9-0ebb-4c30-9b1b-e66d1b18445b.png` (1254×1254).

결과: 같은 쪽 볼 세수로 보완되어 최종 groom.png로 복사.

정확한 편집 프롬프트:

```text
Use case: precise-object-edit.
INPUT 1 is the edit target, a rose-ribbon white Persian cat grooming atlas.
INPUT 2 is a POSE REFERENCE ONLY. Its bottom-left frame has the correct pose.
Change only the BOTTOM-LEFT panel of INPUT 1: reproduce the exact grooming pose from the BOTTOM-LEFT panel of INPUT 2. In that pose the raised paw is on the RIGHT HALF OF THE PICTURE, touching the cat's rightmost visible eye/cheek. The planted front leg is in the middle of the picture. Keep a SINGLE naturally connected raised front leg on picture-right. Do not put a raised paw on the picture-left half; do not add a fifth leg.
Very important: keep the rose-red cotton ribbon and narrow rose collar from INPUT 1. Do NOT transfer the sage scarf from input 2. Do not change the clothes in any panel.
Keep input 1's other three panels unchanged, including the same exact round white Persian face, eyes, ears, complete white fur plume tail curled on picture-left, original cat scale and grounded position, camera and sunlit cream living room. In the corrected panel keep eyes closed. The feline front wrist bends naturally as the paw washes that same-side cheek like input 2.
Output same 1254 by 1254 square, exact equal 2 by 2 grid at midpoint x627/y627, no border, no text, no hands, no checkerboard. This is a correction of one paw gesture, not a redesign.
```

## 검수와 보존 확인

- 자체 육안 검수: 네 착장 각각 리본/스카프/니트/세일러 칼라의 형태와 색상, 흰 페르시안 얼굴·앰버 눈·왼쪽으로 감긴 단일 꼬리, 같은 앞발로 이어지는4자세, 귀/앞발/꼬리 여백, 손/글자/체크 없음 확인. 니트 목단과 팔구멍의 털 겹침·그림자를 확인.
- 루트 독립 원화 검수: bandana/vest 최초 결과 승인, sailor 수정 결과 승인, ribbon 2차 수정 결과 명시 재승인. 네 최종 원화 모두 승인 후 등록하도록 전달했다.
- 생성 완료 후 기존 pet.png 네 파일 SHA256을 다시 읽어 변경 전과 완전히 동일함을 확인했다.
- 기존 pet.png의 변경 전 SHA256 (4파일 모두 기존1254×1254):

```jsonl
{"path":"assets/motion/wearing/mochi/ribbon/pet.png","width":1254,"height":1254,"sha256":"0eade470ba7ad3dca255fce8e48f5373caa939608db3ab746f8b95e90932f27e"}
{"path":"assets/motion/wearing/mochi/bandana/pet.png","width":1254,"height":1254,"sha256":"8303ca868ac039f98c02d4161bee5cdb7a148991eb64783e9dda52509d817fdf"}
{"path":"assets/motion/wearing/mochi/vest/pet.png","width":1254,"height":1254,"sha256":"7b057eef3366275d2f526de7904d2c8d4b7d1920752e2230b483de12caabd697"}
{"path":"assets/motion/wearing/mochi/sailor/pet.png","width":1254,"height":1254,"sha256":"fce16cc5e3aaf7c4edfb8396c9a7289887674a8cf7b190f705c43a6096fc3420"}
```

실제 브라우저 재생과 코드 등록은 루트 통합 검증 범위다. 아트 담당은 `output/review-1412/game-result.json`의 네 착장 정확한 groom 출처와 각각4개 distinctPixels PASS를 읽고, `game-mochi-{ribbon,bandana,vest,sailor}-groom.png` 네 장 및 `ui-mochi-{ribbon,bandana,vest,sailor}-1440-frame-{1,2}.png` 여덟 hold 화면을 직접 확인했다. 네 의상·모찌·단일 꼬리·귀·앞발·혀핥기·같은 쪽 볼 세수와 리본/세일러 교정이 실제 캔버스에 반영되며, 자막 띠가 그림을 가리지 않아 데스크톱 아트 표시를 명시 재승인했다.

모바일 추가 검수에서 `ui-mochi-vest-390-frame-0.png`와 `ui-mochi-sailor-320-frame-0.png`의 전체 실루엣·옷·자막은 온전함을 확인했다. `ui-mochi-ribbon-320-frame-0.png`에서는 상단 장식 영문 배지가 오른쪽 귀 끝 일부를 가려 루트/UI 담당에게 수정 요청했다. 루트가360px 이하에서 장식 배지를 숨긴 후 `ui-refined-mochi-ribbon-320-frame-0.png`를 다시 직접 열어 양쪽 귀 끝·얼굴·작은 리본·앞발·전체 꼬리·자막이 겹침 없이 온전히 보임을 확인했다. `ui-refined-mochi-ribbon-320-bottom.png`에서 동작 전환과 우리 집 복귀 버튼 및 문구도 온전함을 확인했다. 모바일까지 최종 아트 재승인, 남은 지적 없음. 아트 원본 추가 변경 없이 UI 수정으로 해결.
