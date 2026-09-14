# 나비 착용 그루밍 생성 기록 — 2026-09-08 15:38 회차

제작: review_art_1538. Built-in `image_gen` 사용. 범위는 나비 4착장의 신규 `groom.png` 4장/16자세. 기존 pet 및 의상 원본은 변경하지 않는다. 각 참조 원본을 `view_image`로 직접 확인했다. 승인된 루나 스카프 그루밍은 같은 앞발로 같은 쪽을 닦는 해부/동작만 참조한다.

중앙 50% 분할, 같은 카메라, 전신 여백, 초록눈·삼색 얼굴배치·오른쪽으로 말린 흰끝 한 꼬리·착장 고정을 검수한다. 1~2px 격자선은 runtime sourceInset 2에서 빠지는지 실제 화면으로 확인한 뒤 수정 필요를 판단한다.

## ribbon — 최초 생성

- 종류: 새 시퀀스 생성 (참조 기반).
- 참조 1 (나비 정체성·착장·배경): `C:/Users/jeoun/OneDrive/바탕 화면/고양이양이/assets/motion/wearing/nabi/ribbon/pet.png`
- 참조 2 (동작·해부만): `C:/Users/jeoun/OneDrive/바탕 화면/고양이양이/assets/motion/wearing/luna/bandana/groom.png`
- 대상: `assets/motion/wearing/nabi/ribbon/groom.png`

### 정확한 프롬프트

```text
Use case: illustration-story.
Asset type: production sprite-sheet of four consecutive grooming poses for a cozy cat game, wearing outfit ribbon.
Create one new square high-resolution image, 1254 x 1254 pixels or larger, composed as a STRICT 2 x 2 sprite sheet. There are exactly four equal square panels, with the vertical and horizontal boundaries at the exact image center (50%, 50%). At 1254 pixels this means each panel is precisely 627 x 627. Each panel is a separate complete scene from one locked camera. Do not make unequal panels, a collage, shared panorama, gutters, frames, border lines, lettering, numbers or marks.
Input Image 1 is the sole reference for NABI'S identity, this specific garment, and the warm living-room background/material/light. Input Image 2 is ONLY the approved grooming action and anatomical sequence reference: lift the viewer-right front paw, lick this paw, wipe the viewer-right cheek with this same paw, then put it down. DO NOT copy the gray cat, amber eyes, body shape, gray fur or left-side tail from Image 2.
Subject identity in ALL FOUR panels: Nabi is the exact slim healthy calico cat in Image 1. Keep green eyes; orange fur on the viewer-left face and ear; black fur on the viewer-right face and ear; the white central forehead blaze, white muzzle around pink nose and mouth, white chest and white front paws. Keep the same orange/black/white body patches. Nabi has exactly ONE banded calico tail, curling upward at VIEWER-RIGHT with a WHITE TIP, in the same silhouette and position in every panel. Never mirror the cat or swap face colors or tail side. Natural feline paws, not human hands.
Garment in ALL FOUR panels: the exact narrow coral cotton ribbon collar and small coral bow at viewer-right side of Nabi's neck from Image 1, with tiny subtle stitch accents; keep the bow small, the collar slim, and white chest fur visible. Draw the cat and clothing together: individual fur overlapping edges, soft contact shadows below the fabric, convincing body-conforming drape and small movement-dependent creases. The garment stays worn throughout, with no pasted sticker effect, no floating fabric, no redesign, no added accessory, no sleeves unless originally present.
Four actual visibly different sequential poses, read top-left, top-right, bottom-left, bottom-right:
1. Top-left: Nabi is sitting upright and raises its WHITE VIEWER-RIGHT FOREPAW toward its mouth; eyes open, calm anticipation. Its viewer-left front paw stays planted on the rug.
2. Top-right: head dips a little and a small pink tongue actually touches the SAME raised white viewer-right front paw. The other front paw remains planted.
3. Bottom-left: eyes comfortably closed; the SAME viewer-right front leg bends naturally and that white paw is placed against the VIEWER-RIGHT BLACK CHEEK near the base of the viewer-right ear, washing that SAME side of the face. Keep the arm on viewer-right without crossing the chest or reaching across the nose. Show the anatomically connected elbow/foreleg and the other front leg planted.
4. Bottom-right: Nabi lowers the grooming paw onto the rug so both front paws are naturally grounded again, opens its green eyes and returns to a relaxed sitting pose.
Camera/composition: same fixed front three-quarter view, cat scale, rug ground line, background arrangement, lighting and framing across all four independent panels. Full cat with both ear tips, grounded paws, haunches and entire up-curled white-tipped tail fully inside each own panel, with at least 20 pixels of clear margin to all panel edges. Make the cat slightly smaller than the original pet reference if needed to retain the margins. Preserve the sunlit cream sofa, sage cushion/throw, plants, framed wall art, sheer left window and woven warm rug from Image 1. Detailed soft semi-realistic illustration matching Image 1.
Avoid: humans, human hands or arms, duplicated paws, extra limbs, missing limbs, multiple tails, changed eye color, switched calico pattern, costume changes, cropped ears/paws/tail, panel boundary crossing, speech bubbles, text, logos, watermarks, arrows, checkmarks, separator lines.
```

## bandana — 최초 생성

- 종류: 새 시퀀스 생성 (참조 기반).
- 참조 1 (나비 정체성·착장·배경): `C:/Users/jeoun/OneDrive/바탕 화면/고양이양이/assets/motion/wearing/nabi/bandana/pet.png`
- 참조 2 (동작·해부만): `C:/Users/jeoun/OneDrive/바탕 화면/고양이양이/assets/motion/wearing/luna/bandana/groom.png`
- 대상: `assets/motion/wearing/nabi/bandana/groom.png`

### 정확한 프롬프트

```text
Use case: illustration-story.
Asset type: production sprite-sheet of four consecutive grooming poses for a cozy cat game, wearing outfit bandana.
Create one new square high-resolution image, 1254 x 1254 pixels or larger, composed as a STRICT 2 x 2 sprite sheet. There are exactly four equal square panels, with the vertical and horizontal boundaries at the exact image center (50%, 50%). At 1254 pixels this means each panel is precisely 627 x 627. Each panel is a separate complete scene from one locked camera. Do not make unequal panels, a collage, shared panorama, gutters, frames, border lines, lettering, numbers or marks.
Input Image 1 is the sole reference for NABI'S identity, this specific garment, and the warm living-room background/material/light. Input Image 2 is ONLY the approved grooming action and anatomical sequence reference: lift the viewer-right front paw, lick this paw, wipe the viewer-right cheek with this same paw, then put it down. DO NOT copy the gray cat, amber eyes, body shape, gray fur or left-side tail from Image 2.
Subject identity in ALL FOUR panels: Nabi is the exact slim healthy calico cat in Image 1. Keep green eyes; orange fur on the viewer-left face and ear; black fur on the viewer-right face and ear; the white central forehead blaze, white muzzle around pink nose and mouth, white chest and white front paws. Keep the same orange/black/white body patches. Nabi has exactly ONE banded calico tail, curling upward at VIEWER-RIGHT with a WHITE TIP, in the same silhouette and position in every panel. Never mirror the cat or swap face colors or tail side. Natural feline paws, not human hands.
Garment in ALL FOUR panels: the exact sage green cotton triangular bandana from Image 1, loosely wrapped around the neck with its little knot and fabric tails on viewer-right; preserve the same muted sage fabric, subtle hems and light creases. Draw the cat and clothing together: individual fur overlapping edges, soft contact shadows below the fabric, convincing body-conforming drape and small movement-dependent creases. The garment stays worn throughout, with no pasted sticker effect, no floating fabric, no redesign, no added accessory, no sleeves unless originally present.
Four actual visibly different sequential poses, read top-left, top-right, bottom-left, bottom-right:
1. Top-left: Nabi is sitting upright and raises its WHITE VIEWER-RIGHT FOREPAW toward its mouth; eyes open, calm anticipation. Its viewer-left front paw stays planted on the rug.
2. Top-right: head dips a little and a small pink tongue actually touches the SAME raised white viewer-right front paw. The other front paw remains planted.
3. Bottom-left: eyes comfortably closed; the SAME viewer-right front leg bends naturally and that white paw is placed against the VIEWER-RIGHT BLACK CHEEK near the base of the viewer-right ear, washing that SAME side of the face. Keep the arm on viewer-right without crossing the chest or reaching across the nose. Show the anatomically connected elbow/foreleg and the other front leg planted.
4. Bottom-right: Nabi lowers the grooming paw onto the rug so both front paws are naturally grounded again, opens its green eyes and returns to a relaxed sitting pose.
Camera/composition: same fixed front three-quarter view, cat scale, rug ground line, background arrangement, lighting and framing across all four independent panels. Full cat with both ear tips, grounded paws, haunches and entire up-curled white-tipped tail fully inside each own panel, with at least 20 pixels of clear margin to all panel edges. Make the cat slightly smaller than the original pet reference if needed to retain the margins. Preserve the sunlit cream sofa, sage cushion/throw, plants, framed wall art, sheer left window and woven warm rug from Image 1. Detailed soft semi-realistic illustration matching Image 1.
Avoid: humans, human hands or arms, duplicated paws, extra limbs, missing limbs, multiple tails, changed eye color, switched calico pattern, costume changes, cropped ears/paws/tail, panel boundary crossing, speech bubbles, text, logos, watermarks, arrows, checkmarks, separator lines.
```

## vest — 최초 생성

- 종류: 새 시퀀스 생성 (참조 기반).
- 참조 1 (나비 정체성·착장·배경): `C:/Users/jeoun/OneDrive/바탕 화면/고양이양이/assets/motion/wearing/nabi/vest/pet.png`
- 참조 2 (동작·해부만): `C:/Users/jeoun/OneDrive/바탕 화면/고양이양이/assets/motion/wearing/luna/bandana/groom.png`
- 대상: `assets/motion/wearing/nabi/vest/groom.png`

### 정확한 프롬프트

```text
Use case: illustration-story.
Asset type: production sprite-sheet of four consecutive grooming poses for a cozy cat game, wearing outfit vest.
Create one new square high-resolution image, 1254 x 1254 pixels or larger, composed as a STRICT 2 x 2 sprite sheet. There are exactly four equal square panels, with the vertical and horizontal boundaries at the exact image center (50%, 50%). At 1254 pixels this means each panel is precisely 627 x 627. Each panel is a separate complete scene from one locked camera. Do not make unequal panels, a collage, shared panorama, gutters, frames, border lines, lettering, numbers or marks.
Input Image 1 is the sole reference for NABI'S identity, this specific garment, and the warm living-room background/material/light. Input Image 2 is ONLY the approved grooming action and anatomical sequence reference: lift the viewer-right front paw, lick this paw, wipe the viewer-right cheek with this same paw, then put it down. DO NOT copy the gray cat, amber eyes, body shape, gray fur or left-side tail from Image 2.
Subject identity in ALL FOUR panels: Nabi is the exact slim healthy calico cat in Image 1. Keep green eyes; orange fur on the viewer-left face and ear; black fur on the viewer-right face and ear; the white central forehead blaze, white muzzle around pink nose and mouth, white chest and white front paws. Keep the same orange/black/white body patches. Nabi has exactly ONE banded calico tail, curling upward at VIEWER-RIGHT with a WHITE TIP, in the same silhouette and position in every panel. Never mirror the cat or swap face colors or tail side. Natural feline paws, not human hands.
Garment in ALL FOUR panels: the exact light pinkish lilac sleeveless cable-knit vest from Image 1 with ribbed neck, armhole, and hem; preserve the original pale color, cable pattern, slim weight, short hem, and natural armholes. Draw the cat and clothing together: individual fur overlapping edges, soft contact shadows below the fabric, convincing body-conforming drape and small movement-dependent creases. The garment stays worn throughout, with no pasted sticker effect, no floating fabric, no redesign, no added accessory, no sleeves unless originally present.
Four actual visibly different sequential poses, read top-left, top-right, bottom-left, bottom-right:
1. Top-left: Nabi is sitting upright and raises its WHITE VIEWER-RIGHT FOREPAW toward its mouth; eyes open, calm anticipation. Its viewer-left front paw stays planted on the rug.
2. Top-right: head dips a little and a small pink tongue actually touches the SAME raised white viewer-right front paw. The other front paw remains planted.
3. Bottom-left: eyes comfortably closed; the SAME viewer-right front leg bends naturally and that white paw is placed against the VIEWER-RIGHT BLACK CHEEK near the base of the viewer-right ear, washing that SAME side of the face. Keep the arm on viewer-right without crossing the chest or reaching across the nose. Show the anatomically connected elbow/foreleg and the other front leg planted.
4. Bottom-right: Nabi lowers the grooming paw onto the rug so both front paws are naturally grounded again, opens its green eyes and returns to a relaxed sitting pose.
Camera/composition: same fixed front three-quarter view, cat scale, rug ground line, background arrangement, lighting and framing across all four independent panels. Full cat with both ear tips, grounded paws, haunches and entire up-curled white-tipped tail fully inside each own panel, with at least 20 pixels of clear margin to all panel edges. Make the cat slightly smaller than the original pet reference if needed to retain the margins. Preserve the sunlit cream sofa, sage cushion/throw, plants, framed wall art, sheer left window and woven warm rug from Image 1. Detailed soft semi-realistic illustration matching Image 1.
Avoid: humans, human hands or arms, duplicated paws, extra limbs, missing limbs, multiple tails, changed eye color, switched calico pattern, costume changes, cropped ears/paws/tail, panel boundary crossing, speech bubbles, text, logos, watermarks, arrows, checkmarks, separator lines.
```

## sailor — 최초 생성

- 종류: 새 시퀀스 생성 (참조 기반).
- 참조 1 (나비 정체성·착장·배경): `C:/Users/jeoun/OneDrive/바탕 화면/고양이양이/assets/motion/wearing/nabi/sailor/pet.png`
- 참조 2 (동작·해부만): `C:/Users/jeoun/OneDrive/바탕 화면/고양이양이/assets/motion/wearing/luna/bandana/groom.png`
- 대상: `assets/motion/wearing/nabi/sailor/groom.png`

### 정확한 프롬프트

```text
Use case: illustration-story.
Asset type: production sprite-sheet of four consecutive grooming poses for a cozy cat game, wearing outfit sailor.
Create one new square high-resolution image, 1254 x 1254 pixels or larger, composed as a STRICT 2 x 2 sprite sheet. There are exactly four equal square panels, with the vertical and horizontal boundaries at the exact image center (50%, 50%). At 1254 pixels this means each panel is precisely 627 x 627. Each panel is a separate complete scene from one locked camera. Do not make unequal panels, a collage, shared panorama, gutters, frames, border lines, lettering, numbers or marks.
Input Image 1 is the sole reference for NABI'S identity, this specific garment, and the warm living-room background/material/light. Input Image 2 is ONLY the approved grooming action and anatomical sequence reference: lift the viewer-right front paw, lick this paw, wipe the viewer-right cheek with this same paw, then put it down. DO NOT copy the gray cat, amber eyes, body shape, gray fur or left-side tail from Image 2.
Subject identity in ALL FOUR panels: Nabi is the exact slim healthy calico cat in Image 1. Keep green eyes; orange fur on the viewer-left face and ear; black fur on the viewer-right face and ear; the white central forehead blaze, white muzzle around pink nose and mouth, white chest and white front paws. Keep the same orange/black/white body patches. Nabi has exactly ONE banded calico tail, curling upward at VIEWER-RIGHT with a WHITE TIP, in the same silhouette and position in every panel. Never mirror the cat or swap face colors or tail side. Natural feline paws, not human hands.
Garment in ALL FOUR panels: the exact small cream sailor collar from Image 1, with muted blue-gray double piping and small blue-gray tied front scarf; retain the same small collar proportions, soft cream fabric, seam placement, and tie shape. Draw the cat and clothing together: individual fur overlapping edges, soft contact shadows below the fabric, convincing body-conforming drape and small movement-dependent creases. The garment stays worn throughout, with no pasted sticker effect, no floating fabric, no redesign, no added accessory, no sleeves unless originally present.
Four actual visibly different sequential poses, read top-left, top-right, bottom-left, bottom-right:
1. Top-left: Nabi is sitting upright and raises its WHITE VIEWER-RIGHT FOREPAW toward its mouth; eyes open, calm anticipation. Its viewer-left front paw stays planted on the rug.
2. Top-right: head dips a little and a small pink tongue actually touches the SAME raised white viewer-right front paw. The other front paw remains planted.
3. Bottom-left: eyes comfortably closed; the SAME viewer-right front leg bends naturally and that white paw is placed against the VIEWER-RIGHT BLACK CHEEK near the base of the viewer-right ear, washing that SAME side of the face. Keep the arm on viewer-right without crossing the chest or reaching across the nose. Show the anatomically connected elbow/foreleg and the other front leg planted.
4. Bottom-right: Nabi lowers the grooming paw onto the rug so both front paws are naturally grounded again, opens its green eyes and returns to a relaxed sitting pose.
Camera/composition: same fixed front three-quarter view, cat scale, rug ground line, background arrangement, lighting and framing across all four independent panels. Full cat with both ear tips, grounded paws, haunches and entire up-curled white-tipped tail fully inside each own panel, with at least 20 pixels of clear margin to all panel edges. Make the cat slightly smaller than the original pet reference if needed to retain the margins. Preserve the sunlit cream sofa, sage cushion/throw, plants, framed wall art, sheer left window and woven warm rug from Image 1. Detailed soft semi-realistic illustration matching Image 1.
Avoid: humans, human hands or arms, duplicated paws, extra limbs, missing limbs, multiple tails, changed eye color, switched calico pattern, costume changes, cropped ears/paws/tail, panel boundary crossing, speech bubbles, text, logos, watermarks, arrows, checkmarks, separator lines.
```

## 결과 및 검수

Built-in `image_gen` 독립 호출 4개로 각 시퀀스를 생성했다. 모든 첫 후보가 제작자 검수를 통과했으며 원본을 그대로 최종 대상에 복사했다. 리사이즈·크롭·재합성·알파 가공·이미지 편집 없음. 교정 0회, 미채택 후보 없음. 각 1254×1254, 엄밀한 2×2 격자와 627×627 장면 4개, 총 4시퀀스/16자세.

| 착장 | 원본 파일 (generated_images/01a07fbe-9f35-7233-a2f1-60e9d575e2f2/) | 치수 | bytes | SHA256 |
| --- | --- | --- | ---: | --- |
| ribbon | exec-d0a3e7f2-c20a-4092-b4ee-bf8e7e6d8945.png | 1254×1254 | 2424044 | 39c40a6259068acb99192157f41e7031f0f3441fd77c1cb522ea3e2d90c7bd10 |
| bandana | exec-9d34ca44-bb40-44cb-b3e0-291d302d3f1c.png | 1254×1254 | 2491821 | 04e9c096c19e07c76432de21e80f70ddbeb15e33fc514e7356e53c4e4d5b2d3c |
| vest | exec-e4d13cca-546f-43fb-baeb-7109b8a1bf96.png | 1254×1254 | 2584455 | 21eeed7522d8b0ab4a2635259b72feff9f167e76bc47156d5aa1ba0134acceb9 |
| sailor | exec-a7378cab-5af0-425d-9801-7d38e05ca4d7.png | 1254×1254 | 2753462 | 4d9889aa392773db389f3e461542b2219233f9e5b4fde20571b9ca326c597aff |

원본 루트의 정확한 절대경로는 `C:/Users/jeoun/.codex/generated_images/01a07fbe-9f35-7233-a2f1-60e9d575e2f2/`. 최종 파일의 정확한 공통 루트는 `C:/Users/jeoun/OneDrive/바탕 화면/고양이양이/assets/motion/wearing/nabi/`, 각 행 착장의 `groom.png`. 최종 PNG 합계는 10,253,782 bytes (약 9.78 MiB).

### 제작자 원화 검수

- 네 파일 16자세를 직접 육안 확인해 명시 승인한다. 나비의 시청자 왼쪽 주황 얼굴/오른쪽 검정 얼굴, 흰 중앙 이마·코입 주변·가슴·앞발, 초록 눈, 몸 삼색 무늬, 시청자 오른쪽으로 위로 말린 한 꼬리와 흰 끝을 모두 유지한다. 루나의 외모나 꼬리 방향을 복사하지 않았다.
- 같은 시청자 오른쪽 앞발을 들고, 실제 혀로 핥고, 같은 쪽 검정 볼/귀 근처를 닦고, 내려놓는 네 실제 자세가 이어진다. 세수 장면의 팔은 같은 쪽 어깨에서 자연스럽게 연결되며 추가 앞발이나 반대쪽 볼로 가로지르는 팔이 없다. 사람 손은 없다.
- 리본의 얇은 목띠와 작은 매듭, 스카프의 얇은 면·세이지색·옆매듭, 니트의 케이블 조직·암홀·짧은 밑단, 세일러의 작은 크림색 칼라·푸른 회색 테두리와 매듭을 유지한다. 옷 아래 접촉 그림자, 가장자리의 털 겹침, 움직임에 따른 작은 주름이 자연스럽다.
- 각 독립 장면 중앙 구도·카메라·방 조명과 바닥 선이 일관되고 귀·앞발·꼬리는 자기 칸 안쪽에 여백을 남긴다. 중앙 격자 경계가 고양이 부위를 자르지 않는다. 두꺼운 구분선·글·숫자·체크·워터마크가 없다.

### 독립 원화 검수

- 루트가 ribbon/bandana 두 원본을 직접 열어 얼굴/눈/흰가슴앞발/오른쪽 꼬리·흰끝/네 동작/옷 접점/여백/627중앙분할을 독립 명시 승인했다.
- 루트가 vest/sailor 원화도 직접 열어 같은 흰앞발의 네 동작, 삼색 얼굴배치/초록눈/오른쪽 꼬리·흰끝, 니트 암홀/세일러 칼라 접점, 전신 여백/중앙분할을 독립 명시 승인했다. 네 장 모두 수정 없이 채택. 실제 UI 최종 재확인도 아래 기록대로 완료했다.

### 실제 UI 최종 아트 재승인

제작자는 `output/review-1538/`의 실제 게임 캡처 27장을 `view_image`로 직접 열어 확인했다. 아래 묶음은 중복 없이 27장이다.

- 최초 실제 데스크톱 10장: `ui-nabi-ribbon-1440-frame-{0,1,2,3}.png`, `ui-nabi-{bandana,vest,sailor}-1440-frame-{1,2}.png`.
- 최초 320px 상단 4장: `ui-nabi-{ribbon,bandana,vest,sailor}-320-frame-0.png`.
- 최초 390px 상단 4장: `ui-nabi-{ribbon,bandana,vest,sailor}-390-frame-0.png`.
- 320px 스크롤 하단 2장: `ui-nabi-{ribbon,sailor}-320-bottom.png`.
- 모바일 장식 배지 수정 후 390px 네 착장 세수 4장: `ui-nabi-{ribbon,bandana,vest,sailor}-390-frame-2-clearance-refined.png`.
- 수정 후 데스크톱/320px 리본 대표 재검사 3장: `ui-refined-nabi-ribbon-1440-frame-0.png`, `ui-refined-nabi-ribbon-320-frame-0.png`, `ui-refined-nabi-ribbon-320-bottom.png`.

확인 결과: 실제 캔버스의 모든 검토 자세에서 같은 앞발의 핥기/세수, 삼색 정체성, 각 착장과 작은 초상화/배지의 일치, 귀·앞발·한 꼬리·흰끝 보존, 자연스러운 옷/털 접점, 그림 아래로 분리된 자막을 확인했다. 격자 경계선은 실제 이미지에서 노출되지 않는다. 작은 화면의 본문은 한국어 단어를 보존하며 줄바꿈하고, 하단에는 우리 집 복귀 버튼이 접근 가능한 위치로 나타난다.

아트는 390px 첫 자세에서 배지와 귀끝 사이가 좁고 세수 자세의 귀가 더 높아질 수 있음을 발견해 네 착장 세수 순간 추가 검수를 요청했다. 루트/UI가 실제 리본 세수 화면의 귀끝/장식 배지 겹침을 확인했다. UI 담당이 모바일 `max-width:560px`에서 장식 배지를 숨겼으며, 아트는 위 `*-clearance-refined.png` 4장을 직접 다시 열어 귀끝이 완전히 드러나고 앞발·꼬리·옷·자막이 유지됨을 확인했다. 원화 수정 없이 해결되었다.

제작자 review_art_1538은 **네 신규 그루밍 원화와 최종 수정 화면 7장을 명시 재승인한다.** 390px 네 착장의 세수에서 귀끝 겹침이 해결됐고 1440px/320px 리본 대표 화면에서도 전신·옷·자막·아래 복귀 버튼을 확인했다. 아트 범위의 미해결 지적은 없다. 정확한 UI 자동검사/수정검사 결과는 `output/review-1538/ui-result.json`, `ui-refinement-result.json` 및 `ui-390-motion-clearance-refinement-result.json`에 있다.

### 기존 pet 보존 SHA256

생성 전 기록한 기존 4개 pet SHA256이다. 신규 원화 저장 뒤 다시 계산해 네 값이 모두 동일함을 확인했다.

| 착장 | pet.png SHA256 |
| --- | --- |
| ribbon | 76c6a06b410d674fa7385e2e06b3cff225982f437fd948292c82fdbda54b640d |
| bandana | 5931b6ab17cff285c68da7a131971a3e6ba63c5ca411391398ad88f6bab61afc |
| vest | 793b6694c87c8e53ffe24f45407c9497ee028003bb0161dca796d8783e7790b9 |
| sailor | 265edfcef3b8e80b42811020d562dd6201c7c545a2f06cf79cd0e252365a637a |
