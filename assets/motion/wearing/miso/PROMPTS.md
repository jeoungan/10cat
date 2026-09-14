# miso — 의상을 입은 머리 쓰다듬기

제작 도구: built-in image_gen. 네 착장 각각 하나의 정사각형 원본에 실제 서로 다른 네 자세를 생성했습니다. 런타임은 원본 프레임을 표시하며, 의상을 고정 레이어로 합성하거나 다른 동작으로 이름만 바꾸지 않습니다.

## ribbon

프로젝트 파일: `assets/motion/wearing/miso/ribbon/pet.png`

참조 이미지:
- `assets/motion/pet/miso.png`: 고양이 정체성, 기존 네 동작, 손, 카메라, 거실
- `assets/wardrobe-v2/miso.png`: 해당 착장의 의상 모양과 재질

정확한 최초 프롬프트:

```text
Use case: identity-preserve. Asset type: premium 2D illustrated cat-care game animation atlas, square image, exactly four equal square panels in a strict 2 by 2 grid. Image 1 is the existing four-frame interaction that must preserve the cat identity, body and paw anchors, hand movements, camera and sunlit living room. Image 2 is ONLY the approved outfit reference: use its UPPER LEFT small dusty-rose cotton ribbon collar, not the other three outfits. Repaint the cat in EACH of all four panels wearing the same small muted rose side bow with narrow soft band and short ribbon ends, partly tucked into neck fur. This must be a fully unified naturally painted illustration, not an overlay. Neck fur occludes portions of the soft collar and the bow follows the actual neck angle and changing contact shadows. Preserve the real four sequential poses in image 1: hand approaching, forehead being stroked, eyes peacefully closing while being stroked behind the ear, head leaning into the hand. Keep cat anatomy, face markings, eye color, hand anatomy, background, lighting and paw anchors consistent. Same small side bow on every panel, never switch outfits. Delicate warm window light, detailed soft fur, matte tactile fabric and unified painterly edges. Human hand enters from upper right, no person. Cat ears, four paws and entire tail safely inside each cell; no cropped cat extremities. Strict square canvas, exact central vertical and horizontal boundaries at 50 percent, no borders/gutters wider than 2 pixels, no text, captions, watermark, or overlays. Keep the complete body and tail comfortably framed. Preserve the original character fully. Cat identity is miso; use the same cat in both references, never Bori.
```

최초 생성 원본: `C:\Users\jeoun\.codex\generated_images\01a07f11-846c-7e71-98f8-897385bb07c4\exec-c94e3ac0-8bde-4630-80b8-6b48e605c7f6.png`

추가 수정 이유: 목끈이 옷장 기준보다 굵어 보이는 문제를 수정해 얇고 부드러운 면 리본으로 맞췄습니다.

정확한 수정 프롬프트:

```text
Use case: precise-object-edit. Image 1 is the finished four-pose petting sequence; image 2 is the clothing design reference. Change ONLY the rose collar's neck band in all FOUR panels of image 1. Make its band 45 percent narrower and softer, muted dusty rose matte cotton matching the UPPER-LEFT ribbon in image 2. Thin delicate band with slight fur occlusion, never shiny or a thick harness ring. Preserve the small side bow shape/size and short ribbon ends. Preserve every other detail exactly: same Bengal cat and rosette markings, eyes, all four different poses, hands, rug, sofa, lighting, body scale, camera, exact2by2frame arrangement. Do not change background or crop; no words or borders.
```

최종 수정 원본: `C:\Users\jeoun\.codex\generated_images\01a07f11-846c-7e71-98f8-897385bb07c4\exec-38df4a5c-22d3-4ac0-a8a1-c57a9bfa7a81.png`

검수: 제작 담당이 네 자세의 옷 유지, 목·털 접점, 손 해부학, 고양이 정체성 및 전신 여백을 확인했습니다. 독립 담당 wardrobe_redesign_art가 같은 원본을 읽고 승인했습니다. 오레오 리본/미소 리본/미소 스카프는 수정 후 재검토와 명시적 재승인까지 완료했습니다.

## bandana

프로젝트 파일: `assets/motion/wearing/miso/bandana/pet.png`

참조 이미지:
- `assets/motion/wearing/miso/ribbon/pet.png`: 고양이 정체성, 기존 네 동작, 손, 카메라, 거실
- `assets/wardrobe-v2/miso.png`: 해당 착장의 의상 모양과 재질

정확한 최초 프롬프트:

```text
Use case: precise-object-edit. Image 1 is an approved four-pose cat petting animation atlas, and is the edit target. Image 2 is the approved four-outfit wardrobe design reference for the same cat. Change ONLY the clothing in ALL FOUR panels of image 1. Use ONLY the UPPER-RIGHT small sage scarf in image 2. Replace the ribbon collar completely with that short matte sage gauze scarf, narrow light fabric and a small off-center knot/point. Its folds drape with gravity around the neck and are partially hidden under fur. No ribbon collar remains. The same chosen outfit appears in all four poses, naturally following each changing neck/body angle and subtle contact shadows. Preserve exactly the cat's identity and markings, fur, eyes, paw anchors, complete tail, facial expressions, four distinct sequential hand positions, hand anatomy, body scale, camera, sunlit cream sofa, rug and warm natural lighting of image1. Unified soft detailed painterly fur and cloth, never a sticker/overlay, no shiny plastic. Keep existing safe rug margins below every paw and around all ears and tails. In particular do NOT zoom in or move paws toward any grid edge. Same square canvas and strict equal2by2 grid, central borders at50percent, no borders wider than2pixels, no words, labels or watermark. Character miso, outfit bandana.
```

최초 생성 원본: `C:\Users\jeoun\.codex\generated_images\01a07f11-846c-7e71-98f8-897385bb07c4\exec-b31d69dc-8510-451b-b6aa-57878b1ac6d2.png`

추가 수정 이유: 첫 프레임에 잘못 생성된 배 쪽 중복 스카프 하나만 제거하고 원래 고양이 털과 다리를 복원했습니다.

정확한 수정 프롬프트:

```text
Use case: precise-object-edit. Fix ONE unwanted duplicated object in this four-panel illustration. In the UPPER LEFT panel ONLY, the Bengal cat has an extra small green scarf wrapped around its belly/lower chest between its front legs. Remove that lower belly scarf completely and restore the natural Bengal rosette fur and front-leg anatomy behind it. Keep the correct green scarf around the NECK in that same upper-left panel exactly unchanged. All four cats must wear exactly ONE scarf each, located only at the neck. Keep the other three panels absolutely unchanged. Preserve the exact cat identity, face, all four poses, hands, room, lighting, camera, crop, fur details and square2by2grid. No new clothes or objects. Remove only the duplicate belly scarf in top-left; do not remove or redesign any neck scarf.
```

최종 수정 원본: `C:\Users\jeoun\.codex\generated_images\01a07f11-846c-7e71-98f8-897385bb07c4\exec-d4e46eda-044c-4f68-b555-c247d7f32026.png`

검수: 제작 담당이 네 자세의 옷 유지, 목·털 접점, 손 해부학, 고양이 정체성 및 전신 여백을 확인했습니다. 독립 담당 wardrobe_redesign_art가 같은 원본을 읽고 승인했습니다. 오레오 리본/미소 리본/미소 스카프는 수정 후 재검토와 명시적 재승인까지 완료했습니다.

## vest

프로젝트 파일: `assets/motion/wearing/miso/vest/pet.png`

참조 이미지:
- `assets/motion/wearing/miso/ribbon/pet.png`: 고양이 정체성, 기존 네 동작, 손, 카메라, 거실
- `assets/wardrobe-v2/miso.png`: 해당 착장의 의상 모양과 재질

정확한 최초 프롬프트:

```text
Use case: precise-object-edit. Image 1 is an approved four-pose cat petting animation atlas, and is the edit target. Image 2 is the approved four-outfit wardrobe design reference for the same cat. Change ONLY the clothing in ALL FOUR panels of image 1. Use ONLY the LOWER-LEFT fine muted dusty lilac knit vest in image 2. Replace the ribbon collar completely with this real sleeveless fitted-but-loose vest wrapping around the cat chest and side/back. Exact understated pale dusty-lilac color, no bright pink. Thin soft edging, portions of the fur overlap the neckline and armhole, short comfortable hem, front legs freely outside. Keep it attached to the body in perspective, never a floating triangular bib or thick rigid harness. No ribbon collar remains. The same chosen outfit appears in all four poses, naturally following each changing neck/body angle and subtle contact shadows. Preserve exactly the cat's identity and markings, fur, eyes, paw anchors, complete tail, facial expressions, four distinct sequential hand positions, hand anatomy, body scale, camera, sunlit cream sofa, rug and warm natural lighting of image1. Unified soft detailed painterly fur and cloth, never a sticker/overlay, no shiny plastic. Keep existing safe rug margins below every paw and around all ears and tails. In particular do NOT zoom in or move paws toward any grid edge. Same square canvas and strict equal2by2 grid, central borders at50percent, no borders wider than2pixels, no words, labels or watermark. Character miso, outfit vest.
```

최초 생성 원본: `C:\Users\jeoun\.codex\generated_images\01a07f11-846c-7e71-98f8-897385bb07c4\exec-6d03a51f-864c-4692-9cf5-be846a2bd1c2.png`

검수: 제작 담당이 네 자세의 옷 유지, 목·털 접점, 손 해부학, 고양이 정체성 및 전신 여백을 확인했습니다. 독립 담당 wardrobe_redesign_art가 같은 원본을 읽고 승인했습니다. 오레오 리본/미소 리본/미소 스카프는 수정 후 재검토와 명시적 재승인까지 완료했습니다.

## sailor

프로젝트 파일: `assets/motion/wearing/miso/sailor/pet.png`

참조 이미지:
- `assets/motion/wearing/miso/ribbon/pet.png`: 고양이 정체성, 기존 네 동작, 손, 카메라, 거실
- `assets/wardrobe-v2/miso.png`: 해당 착장의 의상 모양과 재질

정확한 최초 프롬프트:

```text
Use case: precise-object-edit. Image 1 is an approved four-pose cat petting animation atlas, and is the edit target. Image 2 is the approved four-outfit wardrobe design reference for the same cat. Change ONLY the clothing in ALL FOUR panels of image 1. Use ONLY the LOWER-RIGHT small cream sailor collar in image 2. Replace the ribbon collar completely with that delicate round cream collar, thin soft slate-blue trim and short small tie. It wraps around the neck with fur over parts of the upper edge. This is only a small collar, not a shirt: no sleeves, shoulder cape, costume body or wide human shoulder silhouette. No ribbon collar remains. The same chosen outfit appears in all four poses, naturally following each changing neck/body angle and subtle contact shadows. Preserve exactly the cat's identity and markings, fur, eyes, paw anchors, complete tail, facial expressions, four distinct sequential hand positions, hand anatomy, body scale, camera, sunlit cream sofa, rug and warm natural lighting of image1. Unified soft detailed painterly fur and cloth, never a sticker/overlay, no shiny plastic. Keep existing safe rug margins below every paw and around all ears and tails. In particular do NOT zoom in or move paws toward any grid edge. Same square canvas and strict equal2by2 grid, central borders at50percent, no borders wider than2pixels, no words, labels or watermark. Character miso, outfit sailor.
```

최초 생성 원본: `C:\Users\jeoun\.codex\generated_images\01a07f11-846c-7e71-98f8-897385bb07c4\exec-7297b5d6-0709-4d29-bf4b-66368154a103.png`

검수: 제작 담당이 네 자세의 옷 유지, 목·털 접점, 손 해부학, 고양이 정체성 및 전신 여백을 확인했습니다. 독립 담당 wardrobe_redesign_art가 같은 원본을 읽고 승인했습니다. 오레오 리본/미소 리본/미소 스카프는 수정 후 재검토와 명시적 재승인까지 완료했습니다.

## 통합

모든 파일 1254 × 1254, 네 셀은 각 627 × 627입니다. 착용 동작 카탈로그 담당 wearing_motion_design에게 승인 키를 전달했으며, 최종 프레임 표시에는 2px source inset을 사용합니다. 원본별 변경 내역과 독립 승인 후 등록 순서를 유지했습니다.

