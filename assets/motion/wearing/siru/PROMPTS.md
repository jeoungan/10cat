# siru — 의상을 입은 머리 쓰다듬기

제작 도구: built-in image_gen. 네 착장 각각 하나의 정사각형 원본에 실제 서로 다른 네 자세를 생성했습니다. 런타임은 원본 프레임을 표시하며, 의상을 고정 레이어로 합성하거나 다른 동작으로 이름만 바꾸지 않습니다.

## ribbon

프로젝트 파일: `assets/motion/wearing/siru/ribbon/pet.png`

참조 이미지:
- `assets/motion/pet/siru.png`: 고양이 정체성, 기존 네 동작, 손, 카메라, 거실
- `assets/wardrobe-v2/siru.png`: 해당 착장의 의상 모양과 재질

정확한 최초 프롬프트:

```text
Use case: identity-preserve. Asset type: premium 2D illustrated cat-care game animation atlas, square image, exactly four equal square panels in a strict 2 by 2 grid. Image 1 is the existing four-frame interaction that must preserve the cat identity, body and paw anchors, hand movements, camera and sunlit living room. Image 2 is ONLY the approved outfit reference: use its UPPER LEFT small dusty-rose cotton ribbon collar, not the other three outfits. Repaint the cat in EACH of all four panels wearing the same small muted rose side bow with narrow soft band and short ribbon ends, partly tucked into neck fur. This must be a fully unified naturally painted illustration, not an overlay. Neck fur occludes portions of the soft collar and the bow follows the actual neck angle and changing contact shadows. Preserve the real four sequential poses in image 1: hand approaching, forehead being stroked, eyes peacefully closing while being stroked behind the ear, head leaning into the hand. Keep cat anatomy, face markings, eye color, hand anatomy, background, lighting and paw anchors consistent. Same small side bow on every panel, never switch outfits. Delicate warm window light, detailed soft fur, matte tactile fabric and unified painterly edges. Human hand enters from upper right, no person. Cat ears, four paws and entire tail safely inside each cell; no cropped cat extremities. Strict square canvas, exact central vertical and horizontal boundaries at 50 percent, no borders/gutters wider than 2 pixels, no text, captions, watermark, or overlays. Keep the complete body and tail comfortably framed. Preserve the original character fully. Cat identity is siru; use the same cat in both references, never Bori.
```

최초 생성 원본: `C:\Users\jeoun\.codex\generated_images\01a07f11-846c-7e71-98f8-897385bb07c4\exec-5a96a05d-c32e-47c9-855a-2022ab1efc99.png`

검수: 제작 담당이 네 자세의 옷 유지, 목·털 접점, 손 해부학, 고양이 정체성 및 전신 여백을 확인했습니다. 독립 담당 wardrobe_redesign_art가 같은 원본을 읽고 승인했습니다. 오레오 리본/미소 리본/미소 스카프는 수정 후 재검토와 명시적 재승인까지 완료했습니다.

## bandana

프로젝트 파일: `assets/motion/wearing/siru/bandana/pet.png`

참조 이미지:
- `assets/motion/wearing/siru/ribbon/pet.png`: 고양이 정체성, 기존 네 동작, 손, 카메라, 거실
- `assets/wardrobe-v2/siru.png`: 해당 착장의 의상 모양과 재질

정확한 최초 프롬프트:

```text
Use case: precise-object-edit. Image 1 is an approved four-pose cat petting animation atlas, and is the edit target. Image 2 is the approved four-outfit wardrobe design reference for the same cat. Change ONLY the clothing in ALL FOUR panels of image 1. Use ONLY the UPPER-RIGHT small sage scarf in image 2. Replace the ribbon collar completely with that short matte sage gauze scarf, narrow light fabric and a small off-center knot/point. Its folds drape with gravity around the neck and are partially hidden under fur. No ribbon collar remains. The same chosen outfit appears in all four poses, naturally following each changing neck/body angle and subtle contact shadows. Preserve exactly the cat's identity and markings, fur, eyes, paw anchors, complete tail, facial expressions, four distinct sequential hand positions, hand anatomy, body scale, camera, sunlit cream sofa, rug and warm natural lighting of image1. Unified soft detailed painterly fur and cloth, never a sticker/overlay, no shiny plastic. Keep existing safe rug margins below every paw and around all ears and tails. In particular do NOT zoom in or move paws toward any grid edge. Same square canvas and strict equal2by2 grid, central borders at50percent, no borders wider than2pixels, no words, labels or watermark. Character siru, outfit bandana.
```

최초 생성 원본: `C:\Users\jeoun\.codex\generated_images\01a07f11-846c-7e71-98f8-897385bb07c4\exec-3c7fd00f-e69c-416e-9e91-d6f33486fc36.png`

검수: 제작 담당이 네 자세의 옷 유지, 목·털 접점, 손 해부학, 고양이 정체성 및 전신 여백을 확인했습니다. 독립 담당 wardrobe_redesign_art가 같은 원본을 읽고 승인했습니다. 오레오 리본/미소 리본/미소 스카프는 수정 후 재검토와 명시적 재승인까지 완료했습니다.

## vest

프로젝트 파일: `assets/motion/wearing/siru/vest/pet.png`

참조 이미지:
- `assets/motion/wearing/siru/ribbon/pet.png`: 고양이 정체성, 기존 네 동작, 손, 카메라, 거실
- `assets/wardrobe-v2/siru.png`: 해당 착장의 의상 모양과 재질

정확한 최초 프롬프트:

```text
Use case: precise-object-edit. Image 1 is an approved four-pose cat petting animation atlas, and is the edit target. Image 2 is the approved four-outfit wardrobe design reference for the same cat. Change ONLY the clothing in ALL FOUR panels of image 1. Use ONLY the LOWER-LEFT fine muted dusty lilac knit vest in image 2. Replace the ribbon collar completely with this real sleeveless fitted-but-loose vest wrapping around the cat chest and side/back. Exact understated pale dusty-lilac color, no bright pink. Thin soft edging, portions of the fur overlap the neckline and armhole, short comfortable hem, front legs freely outside. Keep it attached to the body in perspective, never a floating triangular bib or thick rigid harness. No ribbon collar remains. The same chosen outfit appears in all four poses, naturally following each changing neck/body angle and subtle contact shadows. Preserve exactly the cat's identity and markings, fur, eyes, paw anchors, complete tail, facial expressions, four distinct sequential hand positions, hand anatomy, body scale, camera, sunlit cream sofa, rug and warm natural lighting of image1. Unified soft detailed painterly fur and cloth, never a sticker/overlay, no shiny plastic. Keep existing safe rug margins below every paw and around all ears and tails. In particular do NOT zoom in or move paws toward any grid edge. Same square canvas and strict equal2by2 grid, central borders at50percent, no borders wider than2pixels, no words, labels or watermark. Character siru, outfit vest.
```

최초 생성 원본: `C:\Users\jeoun\.codex\generated_images\01a07f11-846c-7e71-98f8-897385bb07c4\exec-afceb93e-724e-4138-a5d9-64887d2fa0f1.png`

검수: 제작 담당이 네 자세의 옷 유지, 목·털 접점, 손 해부학, 고양이 정체성 및 전신 여백을 확인했습니다. 독립 담당 wardrobe_redesign_art가 같은 원본을 읽고 승인했습니다. 오레오 리본/미소 리본/미소 스카프는 수정 후 재검토와 명시적 재승인까지 완료했습니다.

## sailor

프로젝트 파일: `assets/motion/wearing/siru/sailor/pet.png`

참조 이미지:
- `assets/motion/wearing/siru/ribbon/pet.png`: 고양이 정체성, 기존 네 동작, 손, 카메라, 거실
- `assets/wardrobe-v2/siru.png`: 해당 착장의 의상 모양과 재질

정확한 최초 프롬프트:

```text
Use case: precise-object-edit. Image 1 is an approved four-pose cat petting animation atlas, and is the edit target. Image 2 is the approved four-outfit wardrobe design reference for the same cat. Change ONLY the clothing in ALL FOUR panels of image 1. Use ONLY the LOWER-RIGHT small cream sailor collar in image 2. Replace the ribbon collar completely with that delicate round cream collar, thin soft slate-blue trim and short small tie. It wraps around the neck with fur over parts of the upper edge. This is only a small collar, not a shirt: no sleeves, shoulder cape, costume body or wide human shoulder silhouette. No ribbon collar remains. The same chosen outfit appears in all four poses, naturally following each changing neck/body angle and subtle contact shadows. Preserve exactly the cat's identity and markings, fur, eyes, paw anchors, complete tail, facial expressions, four distinct sequential hand positions, hand anatomy, body scale, camera, sunlit cream sofa, rug and warm natural lighting of image1. Unified soft detailed painterly fur and cloth, never a sticker/overlay, no shiny plastic. Keep existing safe rug margins below every paw and around all ears and tails. In particular do NOT zoom in or move paws toward any grid edge. Same square canvas and strict equal2by2 grid, central borders at50percent, no borders wider than2pixels, no words, labels or watermark. Character siru, outfit sailor.
```

최초 생성 원본: `C:\Users\jeoun\.codex\generated_images\01a07f11-846c-7e71-98f8-897385bb07c4\exec-d857a44c-b232-4456-b294-b4f31f965c69.png`

검수: 제작 담당이 네 자세의 옷 유지, 목·털 접점, 손 해부학, 고양이 정체성 및 전신 여백을 확인했습니다. 독립 담당 wardrobe_redesign_art가 같은 원본을 읽고 승인했습니다. 오레오 리본/미소 리본/미소 스카프는 수정 후 재검토와 명시적 재승인까지 완료했습니다.

## 통합

모든 파일 1254 × 1254, 네 셀은 각 627 × 627입니다. 착용 동작 카탈로그 담당 wearing_motion_design에게 승인 키를 전달했으며, 최종 프레임 표시에는 2px source inset을 사용합니다. 원본별 변경 내역과 독립 승인 후 등록 순서를 유지했습니다.

