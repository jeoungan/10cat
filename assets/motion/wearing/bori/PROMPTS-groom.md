# 보리 · 의상을 입은 그루밍

제작 도구: built-in image_gen. 4착장 × 한 장의 2×2시트 = 4개 시퀀스/16자세. 모든 원본은 생성 출력 그대로 프로젝트에 복사, 확대/그림 합성/수동 래스터 편집 없음. 새 시트 중앙 경계가 1–2px이므로 런타임 sourceInset은 2px.

검토: wardrobe_visual_review가 네 원본을 독립 육안 확인하고 명시 승인. 같은 의상·목선과 털 가림·보리의 얼굴/무늬·전신 프레이밍이 유지되고 앞발 올림→혀 접촉→볼/귀 닦기→앞발 내림의 실제 자세 변화가 구분됨. 승인 후 카탈로그 등록. 보리 두 동작 총8시퀀스는 실제 Chrome에서32개 자세의 픽셀 변화·착용 소스 격리·자동재생·움직임 줄이기 검사를 통과. 근거 output/wearing-motion-qa/bori-eight-sequences.png 및 sequences-result.json.

## ribbon

- 원본: C:/Users/jeoun/.codex/generated_images/01a07f11-3707-75c0-9cbf-6620f96a4e33/exec-632ba8b6-1ee0-4ad3-93ba-eaf0293064b0.png
- 프로젝트 파일: assets/motion/wearing/bori/ribbon/groom.png
- 입력1: assets/motion/wearing/bori/ribbon/pet.png
- 입력2: assets/motion/groom/bori.png
- 결과: 1254×1254, 네 프레임627×627. 원본 검토 승인/등록 완료.

정확한 프롬프트:

```text
Use case: illustration-story.
Asset type: production illustrated cat-care game animation atlas, one square image, exactly four equally sized square frames in a strict 2 by 2 grid.
Input image 1 is the exact Bori identity and garment design reference, showing petting: copy only this cat and its small muted rose grosgrain ribbon collar: a narrow soft band nestled in neck fur with a restrained bow at the cat’s left side (viewer right), short ribbon ends and natural contact shadows. Input image 2 is the original grooming sequence reference: preserve its four grooming poses, cozy room composition and stable camera. There must be NO human hands in this new image.
Primary request: Bori naturally grooming while wearing the exact same ribbon accessory or garment throughout all four panels. Illustrate the whole cat, clothing, fur and light as one unified beautiful warm painterly image, never an overlay/sticker/photomontage. The real cloth bends and partially disappears behind the raised foreleg and neck fur as the cat moves; contact shadows and folds match the anatomy.
Four chronological poses: upper left the cat raises its right front paw (viewer left) near its muzzle, about to lick; upper right a small pink tongue actually touches the raised paw, head gently bowed; lower left the SAME paw moves across its cheek up toward the ear in a face-washing sweep, eyes comfortably closed; lower right the paw lowers slightly to chest level and the cat closes its eyes contentedly after the wipe. Keep body scale, rug placement, hind paws, unraised front paw and tail anchors stable while the grooming paw, tongue, face and clothing contact naturally change.
Subject invariants: same orange tabby Bori, amber eyes, delicate white chin/chest/toe tips, pink nose, original face markings and ringed curved tail. One complete cat per panel with both ears, all paws and entire tail inside safe margins. Anatomically coherent raised paw, no duplicate limbs, no extra ears, no human.
Scene: same warm sunlit cream sofa, muted sage and peach pillows, pale woven rug, leafy shadows and soft plant-filled living room from reference 2. Stable background, fixed medium full-body camera. Sophisticated gently painted realistic storybook game art, detailed fur and fine fabric with shared warm sunlight; calm, tactile, no plastic or 3D render look.
Composition: square output; exact horizontal and vertical boundaries at 50 percent. Four equally sized square panels, fine straight central seams no wider than 2 pixels, no wide gutters, no graphic frames, no rounded corners, no lettering, no captions, no watermarks. ONE four-pose grooming sequence in the SAME outfit in every cell, all parts safely framed.
```

## bandana

- 원본: C:/Users/jeoun/.codex/generated_images/01a07f11-3707-75c0-9cbf-6620f96a4e33/exec-659eb6a2-368a-4851-9ef6-cefcba2644c8.png
- 프로젝트 파일: assets/motion/wearing/bori/bandana/groom.png
- 입력1: assets/motion/wearing/bori/bandana/pet.png
- 입력2: assets/motion/groom/bori.png
- 결과: 1254×1254, 네 프레임627×627. 원본 검토 승인/등록 완료.

정확한 프롬프트:

```text
Use case: illustration-story.
Asset type: production illustrated cat-care game animation atlas, one square image, exactly four equally sized square frames in a strict 2 by 2 grid.
Input image 1 is the exact Bori identity and garment design reference, showing petting: copy only this cat and its small muted sage-green cotton neckerchief: a thin softly folded shallow triangle over the upper chest, tiny side knot, neck fur naturally overlapping the cloth. Input image 2 is the original grooming sequence reference: preserve its four grooming poses, cozy room composition and stable camera. There must be NO human hands in this new image.
Primary request: Bori naturally grooming while wearing the exact same bandana accessory or garment throughout all four panels. Illustrate the whole cat, clothing, fur and light as one unified beautiful warm painterly image, never an overlay/sticker/photomontage. The real cloth bends and partially disappears behind the raised foreleg and neck fur as the cat moves; contact shadows and folds match the anatomy.
Four chronological poses: upper left the cat raises its right front paw (viewer left) near its muzzle, about to lick; upper right a small pink tongue actually touches the raised paw, head gently bowed; lower left the SAME paw moves across its cheek up toward the ear in a face-washing sweep, eyes comfortably closed; lower right the paw lowers slightly to chest level and the cat closes its eyes contentedly after the wipe. Keep body scale, rug placement, hind paws, unraised front paw and tail anchors stable while the grooming paw, tongue, face and clothing contact naturally change.
Subject invariants: same orange tabby Bori, amber eyes, delicate white chin/chest/toe tips, pink nose, original face markings and ringed curved tail. One complete cat per panel with both ears, all paws and entire tail inside safe margins. Anatomically coherent raised paw, no duplicate limbs, no extra ears, no human.
Scene: same warm sunlit cream sofa, muted sage and peach pillows, pale woven rug, leafy shadows and soft plant-filled living room from reference 2. Stable background, fixed medium full-body camera. Sophisticated gently painted realistic storybook game art, detailed fur and fine fabric with shared warm sunlight; calm, tactile, no plastic or 3D render look.
Composition: square output; exact horizontal and vertical boundaries at 50 percent. Four equally sized square panels, fine straight central seams no wider than 2 pixels, no wide gutters, no graphic frames, no rounded corners, no lettering, no captions, no watermarks. ONE four-pose grooming sequence in the SAME outfit in every cell, all parts safely framed.
```

## vest

- 원본: C:/Users/jeoun/.codex/generated_images/01a07f11-3707-75c0-9cbf-6620f96a4e33/exec-ec9b9675-dc8b-4963-9ea5-2371a9b50118.png
- 프로젝트 파일: assets/motion/wearing/bori/vest/groom.png
- 입력1: assets/motion/wearing/bori/vest/pet.png
- 입력2: assets/motion/groom/bori.png
- 결과: 1254×1254, 네 프레임627×627. 원본 검토 승인/등록 완료.

정확한 프롬프트:

```text
Use case: illustration-story.
Asset type: production illustrated cat-care game animation atlas, one square image, exactly four equally sized square frames in a strict 2 by 2 grid.
Input image 1 is the exact Bori identity and garment design reference, showing petting: copy only this cat and its light blush-lilac fine-gauge sleeveless knitted vest: fitted to the feline torso, fine stitches and soft ribbed hem, ample front-leg openings with orange shoulder and underarm fur visible, natural folds as the grooming paw lifts. Input image 2 is the original grooming sequence reference: preserve its four grooming poses, cozy room composition and stable camera. There must be NO human hands in this new image.
Primary request: Bori naturally grooming while wearing the exact same vest accessory or garment throughout all four panels. Illustrate the whole cat, clothing, fur and light as one unified beautiful warm painterly image, never an overlay/sticker/photomontage. The real cloth bends and partially disappears behind the raised foreleg and neck fur as the cat moves; contact shadows and folds match the anatomy.
Four chronological poses: upper left the cat raises its right front paw (viewer left) near its muzzle, about to lick; upper right a small pink tongue actually touches the raised paw, head gently bowed; lower left the SAME paw moves across its cheek up toward the ear in a face-washing sweep, eyes comfortably closed; lower right the paw lowers slightly to chest level and the cat closes its eyes contentedly after the wipe. Keep body scale, rug placement, hind paws, unraised front paw and tail anchors stable while the grooming paw, tongue, face and clothing contact naturally change.
Subject invariants: same orange tabby Bori, amber eyes, delicate white chin/chest/toe tips, pink nose, original face markings and ringed curved tail. One complete cat per panel with both ears, all paws and entire tail inside safe margins. Anatomically coherent raised paw, no duplicate limbs, no extra ears, no human.
Scene: same warm sunlit cream sofa, muted sage and peach pillows, pale woven rug, leafy shadows and soft plant-filled living room from reference 2. Stable background, fixed medium full-body camera. Sophisticated gently painted realistic storybook game art, detailed fur and fine fabric with shared warm sunlight; calm, tactile, no plastic or 3D render look.
Composition: square output; exact horizontal and vertical boundaries at 50 percent. Four equally sized square panels, fine straight central seams no wider than 2 pixels, no wide gutters, no graphic frames, no rounded corners, no lettering, no captions, no watermarks. ONE four-pose grooming sequence in the SAME outfit in every cell, all parts safely framed.
```

## sailor

- 원본: C:/Users/jeoun/.codex/generated_images/01a07f11-3707-75c0-9cbf-6620f96a4e33/exec-9da82bb6-b79f-4ef4-920d-2ed52aa1d111.png
- 프로젝트 파일: assets/motion/wearing/bori/sailor/groom.png
- 입력1: assets/motion/wearing/bori/sailor/pet.png
- 입력2: assets/motion/groom/bori.png
- 결과: 1254×1254, 네 프레임627×627. 원본 검토 승인/등록 완료.

정확한 프롬프트:

```text
Use case: illustration-story.
Asset type: production illustrated cat-care game animation atlas, one square image, exactly four equally sized square frames in a strict 2 by 2 grid.
Input image 1 is the exact Bori identity and garment design reference, showing petting: copy only this cat and its small cream mini sailor collar only: one muted slate-blue edge stripe, short slate tie at the front, no shirt/body/sleeves, the furry orange torso remains visible and the soft collar follows the neck angle. Input image 2 is the original grooming sequence reference: preserve its four grooming poses, cozy room composition and stable camera. There must be NO human hands in this new image.
Primary request: Bori naturally grooming while wearing the exact same sailor accessory or garment throughout all four panels. Illustrate the whole cat, clothing, fur and light as one unified beautiful warm painterly image, never an overlay/sticker/photomontage. The real cloth bends and partially disappears behind the raised foreleg and neck fur as the cat moves; contact shadows and folds match the anatomy.
Four chronological poses: upper left the cat raises its right front paw (viewer left) near its muzzle, about to lick; upper right a small pink tongue actually touches the raised paw, head gently bowed; lower left the SAME paw moves across its cheek up toward the ear in a face-washing sweep, eyes comfortably closed; lower right the paw lowers slightly to chest level and the cat closes its eyes contentedly after the wipe. Keep body scale, rug placement, hind paws, unraised front paw and tail anchors stable while the grooming paw, tongue, face and clothing contact naturally change.
Subject invariants: same orange tabby Bori, amber eyes, delicate white chin/chest/toe tips, pink nose, original face markings and ringed curved tail. One complete cat per panel with both ears, all paws and entire tail inside safe margins. Anatomically coherent raised paw, no duplicate limbs, no extra ears, no human.
Scene: same warm sunlit cream sofa, muted sage and peach pillows, pale woven rug, leafy shadows and soft plant-filled living room from reference 2. Stable background, fixed medium full-body camera. Sophisticated gently painted realistic storybook game art, detailed fur and fine fabric with shared warm sunlight; calm, tactile, no plastic or 3D render look.
Composition: square output; exact horizontal and vertical boundaries at 50 percent. Four equally sized square panels, fine straight central seams no wider than 2 pixels, no wide gutters, no graphic frames, no rounded corners, no lettering, no captions, no watermarks. ONE four-pose grooming sequence in the SAME outfit in every cell, all parts safely framed.
```
