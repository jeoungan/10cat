# 보리 · 의상을 입은 쓰다듬기

제작 도구: built-in image_gen. 4착장 × 한 장의 2×2시트 = 4개 시퀀스/16자세. 모든 원본은 생성 출력 그대로 프로젝트에 복사, 확대/그림 합성/수동 래스터 편집 없음. 새 시트 중앙 경계가 1–2px이므로 런타임 sourceInset은 2px.

검토: wardrobe_visual_review가 네 원본을 독립 육안 확인하고 명시 승인. 같은 의상·목선과 털 가림·보리의 얼굴/무늬·전신 프레이밍이 유지되고 손 접근→이마→귀 뒤→손에 기대기의 실제 자세 변화가 구분됨. 승인 후 카탈로그 등록. 보리 두 동작 총8시퀀스는 실제 Chrome에서32개 자세의 픽셀 변화·착용 소스 격리·자동재생·움직임 줄이기 검사를 통과. 근거 output/wearing-motion-qa/bori-eight-sequences.png 및 sequences-result.json.

## ribbon

- 원본: C:/Users/jeoun/.codex/generated_images/01a07f11-3707-75c0-9cbf-6620f96a4e33/exec-c3076803-9b29-4133-8967-3767a954b07b.png
- 프로젝트 파일: assets/motion/wearing/bori/ribbon/pet.png
- 입력1: assets/wardrobe-v2/bori-design.png
- 입력2: assets/motion/pet/bori.png
- 결과: 1254×1254, 네 프레임627×627. 원본 검토 승인/등록 완료.

정확한 프롬프트:

```text
Use case: illustration-story.
Asset type: production 2D illustrated cat-care game animation atlas, one square image with exactly four equally sized square panels in a strict 2 by 2 grid.
Input image 1 is the outfit design reference only: use ONLY its upper-left dusty rose ribbon collar, on the same orange tabby Bori. Ignore the other three outfits. Input image 2 is the pose, hand, camera and warm living-room reference.
Primary request: redraw a beautifully unified full illustration of Bori being gently stroked while wearing that exact small muted rose grosgrain bow collar. The collar must be physically wrapped around the neck, partly nestled under soft neck fur, with subtle contact shadow, a narrow soft band, a restrained bow just on the cat's left side (viewer right), short ribbon ends. It is not an overlay, sticker, giant bow or a hard plastic accessory. Bow, fur, hand and room have the same delicate painterly natural-light rendering.
The four images show sequential real changes: upper left relaxed upright cat looking at a human hand approaching above the head; upper right fingers gently stroking the forehead, eyelids softening; lower left eyes completely closed while hand caresses behind the ear; lower right the cat leans its head gently into the fingers with content closed eyes. Bow and band follow the neck's changed angle and fur occlusion in each pose. Subtle actual changes in neck, head, ear and hand anatomy, keeping body scale, paw anchors and camera stable.
Subject invariants: Bori is an orange tabby with amber eyes, delicate white chin/chest/toe tips, pink nose, original face markings and ringed curved tail. Each panel shows one complete cat with both ears, paws and entire tail safely inside the cell. No duplicated limbs or fingers. Human hand enters from upper right of every panel, without a person in the frame.
Scene: same warm sunlit cream sofa, sage pillows, pale woven rug, soft leafy shadows as reference 2, fixed camera and background across all four frames. Sophisticated gently painted realistic storybook game art, detailed fur and fabric, soft warm light; beautiful, calm, tactile, no 3D/plastic/photomontage look.
Composition: square output; exact central horizontal and vertical boundaries at 50 percent. Four equally sized square panels, no gutters wider than 2 pixels, no graphic frame, no rounded corners, no captions, no text, no watermark. Cat and hand comfortably framed with safe ear and tail margins. High-detail individual panels. This is ONE four-pose sequence wearing the SAME rose ribbon collar in EVERY panel.
```

## bandana

- 원본: C:/Users/jeoun/.codex/generated_images/01a07f11-3707-75c0-9cbf-6620f96a4e33/exec-60d7a72a-54cd-4892-845d-caf6abc2cb98.png
- 프로젝트 파일: assets/motion/wearing/bori/bandana/pet.png
- 입력1: assets/wardrobe-v2/bori-design.png
- 입력2: assets/motion/wearing/bori/ribbon/pet.png
- 결과: 1254×1254, 네 프레임627×627. 원본 검토 승인/등록 완료.

정확한 프롬프트:

```text
Use case: illustration-story.
Asset type: production 2D illustrated cat-care game animation atlas, one square image with exactly four equally sized square panels in a strict 2 by 2 grid.
Input image 1 is the outfit design reference only: use ONLY its upper-right sage bandana scarf, on the same orange tabby Bori. Ignore the other three outfits. Input image 2 is the approved ribbon-wearing pet sequence; preserve its cat identity, warm scene, camera and four hand/petting poses, but REPLACE the ribbon collar entirely with the requested sage cotton scarf.
Primary request: redraw a beautifully unified full illustration of Bori being gently stroked while wearing a small sage-green soft cotton triangular neckerchief. The thin fabric drapes naturally around the neck and folds down into a shallow triangle at the upper chest, with a small side knot. Neck fur softly overlaps the upper fabric edge; folds and subtle contact shadows change with the neck angle. The chest and legs remain free, no giant bandana or stiff plastic bib. The garment, fur, hand and room must be one naturally painted scene with the same delicate light and rendering, not pasted-on costume art. Do not retain any rose ribbon.
The four images show sequential real changes: upper left relaxed upright cat looking at a human hand approaching above the head; upper right fingers gently stroking the forehead, eyelids softening; lower left eyes completely closed while hand caresses behind the ear; lower right the cat leans its head gently into the fingers with content closed eyes. The same garment follows each changed neck angle, slight shoulder lean, and fur occlusion. Subtle actual changes in neck, head, ear and hand anatomy, keeping body scale, paw anchors and camera stable.
Subject invariants: Bori is an orange tabby with amber eyes, delicate white chin/chest/toe tips, pink nose, original face markings and ringed curved tail. Each panel shows one complete cat with both ears, paws and entire tail safely inside the cell. No duplicated limbs or fingers. Human hand enters from upper right of every panel, without a person in the frame.
Scene: same warm sunlit cream sofa, sage pillows, pale woven rug, soft leafy shadows as reference 2, fixed camera and background across all four frames. Sophisticated gently painted realistic storybook game art, detailed fur and fabric, soft warm light; beautiful, calm, tactile, no 3D/plastic/photomontage look.
Composition: square output; exact central horizontal and vertical boundaries at 50 percent. Four equally sized square panels, no gutters wider than 2 pixels, no graphic frame, no rounded corners, no captions, no text, no watermark. Cat and hand comfortably framed with safe ear and tail margins. High-detail individual panels. This is ONE four-pose sequence wearing the SAME sage cotton scarf in EVERY panel.
```

## vest

- 원본: C:/Users/jeoun/.codex/generated_images/01a07f11-3707-75c0-9cbf-6620f96a4e33/exec-5c8256a9-26a1-4c27-9a58-066203503d00.png
- 프로젝트 파일: assets/motion/wearing/bori/vest/pet.png
- 입력1: assets/wardrobe-v2/bori-design.png
- 입력2: assets/motion/wearing/bori/ribbon/pet.png
- 결과: 1254×1254, 네 프레임627×627. 원본 검토 승인/등록 완료.

정확한 프롬프트:

```text
Use case: illustration-story.
Asset type: production 2D illustrated cat-care game animation atlas, one square image with exactly four equally sized square panels in a strict 2 by 2 grid.
Input image 1 is the outfit design reference only: use ONLY its lower-left light blush-lilac knit vest, on the same orange tabby Bori. Ignore the other three outfits. Input image 2 is the approved ribbon-wearing pet sequence; preserve its cat identity, warm scene, camera and four hand/petting poses, but REPLACE the ribbon collar entirely with the requested blush-lilac knitted vest.
Primary request: redraw a beautifully unified full illustration of Bori being gently stroked while wearing a fine-gauge muted blush-lilac sleeveless knitted vest fitted to the feline torso. It has a small soft ribbed neckline and generous natural arm openings with orange shoulder and underarm fur visible, tiny knit stitches, flexible ribbed hem and gentle folds following the seated body. Neck fur overlaps the neckline. The fabric curves around the chest and ribs, never a boxy human sweater or giant puffy costume. The garment, fur, hand and room must be one naturally painted scene with the same delicate light and rendering, not pasted-on costume art. Do not retain any rose ribbon.
The four images show sequential real changes: upper left relaxed upright cat looking at a human hand approaching above the head; upper right fingers gently stroking the forehead, eyelids softening; lower left eyes completely closed while hand caresses behind the ear; lower right the cat leans its head gently into the fingers with content closed eyes. The same garment follows each changed neck angle, slight shoulder lean, and fur occlusion. Subtle actual changes in neck, head, ear and hand anatomy, keeping body scale, paw anchors and camera stable.
Subject invariants: Bori is an orange tabby with amber eyes, delicate white chin/chest/toe tips, pink nose, original face markings and ringed curved tail. Each panel shows one complete cat with both ears, paws and entire tail safely inside the cell. No duplicated limbs or fingers. Human hand enters from upper right of every panel, without a person in the frame.
Scene: same warm sunlit cream sofa, sage pillows, pale woven rug, soft leafy shadows as reference 2, fixed camera and background across all four frames. Sophisticated gently painted realistic storybook game art, detailed fur and fabric, soft warm light; beautiful, calm, tactile, no 3D/plastic/photomontage look.
Composition: square output; exact central horizontal and vertical boundaries at 50 percent. Four equally sized square panels, no gutters wider than 2 pixels, no graphic frame, no rounded corners, no captions, no text, no watermark. Cat and hand comfortably framed with safe ear and tail margins. High-detail individual panels. This is ONE four-pose sequence wearing the SAME blush-lilac knitted vest in EVERY panel.
```

## sailor

- 원본: C:/Users/jeoun/.codex/generated_images/01a07f11-3707-75c0-9cbf-6620f96a4e33/exec-28c87f5b-a6ea-4314-8f39-559c5778e223.png
- 프로젝트 파일: assets/motion/wearing/bori/sailor/pet.png
- 입력1: assets/wardrobe-v2/bori-design.png
- 입력2: assets/motion/wearing/bori/ribbon/pet.png
- 결과: 1254×1254, 네 프레임627×627. 원본 검토 승인/등록 완료.

정확한 프롬프트:

```text
Use case: illustration-story.
Asset type: production 2D illustrated cat-care game animation atlas, one square image with exactly four equally sized square panels in a strict 2 by 2 grid.
Input image 1 is the outfit design reference only: use ONLY its lower-right small cream sailor collar, on the same orange tabby Bori. Ignore the other three outfits. Input image 2 is the approved ribbon-wearing pet sequence; preserve its cat identity, warm scene, camera and four hand/petting poses, but REPLACE the ribbon collar entirely with the requested cream mini sailor collar.
Primary request: redraw a beautifully unified full illustration of Bori being gently stroked while wearing a very small soft cream sailor collar with one muted slate-blue edge stripe and a short slate necktie at the front, exactly matching the design reference. It is a lightweight collar accessory, NOT a shirt: the orange furry torso and both front legs remain fully visible. The little collar folds and necktie move naturally around the changing neck angle, with fur overlapping the upper edge and delicate contact shadow. The garment, fur, hand and room must be one naturally painted scene with the same delicate light and rendering, not pasted-on costume art. Do not retain any rose ribbon.
The four images show sequential real changes: upper left relaxed upright cat looking at a human hand approaching above the head; upper right fingers gently stroking the forehead, eyelids softening; lower left eyes completely closed while hand caresses behind the ear; lower right the cat leans its head gently into the fingers with content closed eyes. The same garment follows each changed neck angle, slight shoulder lean, and fur occlusion. Subtle actual changes in neck, head, ear and hand anatomy, keeping body scale, paw anchors and camera stable.
Subject invariants: Bori is an orange tabby with amber eyes, delicate white chin/chest/toe tips, pink nose, original face markings and ringed curved tail. Each panel shows one complete cat with both ears, paws and entire tail safely inside the cell. No duplicated limbs or fingers. Human hand enters from upper right of every panel, without a person in the frame.
Scene: same warm sunlit cream sofa, sage pillows, pale woven rug, soft leafy shadows as reference 2, fixed camera and background across all four frames. Sophisticated gently painted realistic storybook game art, detailed fur and fabric, soft warm light; beautiful, calm, tactile, no 3D/plastic/photomontage look.
Composition: square output; exact central horizontal and vertical boundaries at 50 percent. Four equally sized square panels, no gutters wider than 2 pixels, no graphic frame, no rounded corners, no captions, no text, no watermark. Cat and hand comfortably framed with safe ear and tail margins. High-detail individual panels. This is ONE four-pose sequence wearing the SAME cream mini sailor collar in EVERY panel.
```
