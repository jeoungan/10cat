# Wardrobe v2 — Mochi, Luna, Nabi

Built-in image_gen only, exact generated PNGs copied without raster postprocessing. All original cat identity references and approved Bori design inspected before generation. Four cells TL rose ribbon / TR sage kerchief / BL lilac knit vest / BR small ivory sailor collar. Source originals retained under CODEX_HOME. Independent wardrobe_visual_review approved garment designs; final alpha and actual UI separately rechecked.

Final files are all1254×1254 Format32bppArgb,627×627 per quadrant. Middle vertical boundary has maxalpha0 on all; middle horizontal maxalpha1/1/0 for Mochi/Luna/Nabi. More space was generated for Mochi and Luna because first alpha extraction packed ears and paws across the midpoint. Alpha1/255 background speckles are nearly transparent; actual UI checked separately.

| Cat | Corner alpha | Sample alpha0 / alpha>250 (4pxstep) | SHA256 |
|---|---:|---:|---|
| mochi |0|55351 /34008|E8A8E59B566AC37A52B1401F83BAF307CF70093646F068B8C032BE025462FCD0|
| luna |0|63526 /30879|18877ED7FAE1A12E1556EED0AF0248FFB8BFDEB416E36A02C31507DB3FFFAE52|
| nabi |1|60105 /31224|678336CD373B834E765E8ED5D275FBEB2AED7C5D368E9245569D53A34F123D2D|

## mochi

Workspace: `assets/wardrobe-v2/mochi.png`. First references: `assets/cats/mochi.png` identity, `assets/wardrobe-v2/bori-design.png` approved garment design. Each subsequent edit uses the immediately preceding output except rejected extraction candidates explicitly noted above.

### Generated design

Original: `C:\Users\jeoun\.codex\generated_images\01a07f10-d352-79a2-8cbf-4a1a36cd9f9f\exec-6b7eba56-189d-4439-976a-4c4719318b7f.png`

Exact prompt:

Use case: identity-preserve. Create one transparent PNG 2 by 2 wardrobe atlas for a cozy illustrated cat care game. Image 1 is the exact cat identity and seated full-body pose; image 2 is the approved wardrobe design reference and arrangement. Replace the orange cat in each design-reference cell with Mochi, the fluffy ivory-white Persian kitten with golden amber eyes, tiny pink nose, round cheeks, soft luxuriant white coat and fluffy tail curling across the foreground on the left, preserving the cat in image 1: identical face, eye color, fur markings, original paw placement, head tilt and tail location. Use exactly the four small naturally worn clothes from image 2, same design/colors/materials: top left small off-center dusty-rose matte cotton bow on a narrow collar nestled in fur; top right small pale-sage light gauze kerchief; bottom left thin relaxed pale-lilac fine-knit sleeveless vest with very thin hems and natural fur tufts overlapping neckline, foreleg openings and bottom hem; bottom right ONLY a small rounded ivory sailor COLLAR with one fine muted blue line and a tiny tie, no shirt, no sleeves. Garments follow this cat's actual body and fur, with subtle soft contact shadows, delicate draped wrinkles and the same warm painterly brushwork as the cat, never a cut-out geometric bib or stiff human shoulder shape. Keep the four cats at the same scale, complete ears/whiskers/paws/tails each independently centered inside its equal square quadrant with clear blank margins of at least 8 percent; no part crosses the row or column midpoint. Preserve the true transparent alpha background as in reference2; all space outside cats has alpha zero. NOT a visual checkerboard pattern. No floor, background, ground shadow, detached fur fragments, lettering, grid or labels. Whole square atlas, requested 2048x2048.

### Wrap vest around torso

Original: `C:\Users\jeoun\.codex\generated_images\01a07f10-d352-79a2-8cbf-4a1a36cd9f9f\exec-26caf4a2-c777-4c75-94ce-97339d7a78c9.png`

Exact prompt:

Use case: precise-object-edit. Edit ONLY the lower-left white cat's pale lilac knitted vest. Its current pointy triangular front looks like a pasted bib; instead paint a comfortable thin knitted vest wrapping the actual fluffy torso. Continue visible fabric around the flank on the viewer's right and around the left side beneath the foreleg; a gently curved short hem, never a triangular point. Keep roomy foreleg openings but replace raised rigid piping with soft thin knit hems. Several natural white fur tufts overlap the neckline, armhole edges and hem with subtle contact shadows, same soft painterly brushwork as the cat. Preserve the entire original cat face, eyes, fur volume, body pose, paws, fluffy left tail, and sheet layout. All other three cats and their garments remain exactly unchanged. Do not enlarge or reshape heads, do not add sleeves or human shoulders. The garment must physically wrap the cat and retain its feline outline. Also replace the drawn checkerboard with REAL alpha transparency in the PNG; preserve opaque white fur, remove only background. No new objects, backgrounds, text or borders.

### First extraction: cramped rows; rejected

Original: `C:\Users\jeoun\.codex\generated_images\01a07f10-d352-79a2-8cbf-4a1a36cd9f9f\exec-8d8ca5f4-f23d-4220-b8ec-385fa7a794f9.png`

Exact prompt:

Use case: background-extraction. Remove the entire checkerboard background from the supplied four-cat wardrobe sheet. Output a PNG with REAL TRANSPARENCY in the alpha channel: every pixel outside the four cats is transparent. Keep only the four cats and their clothing. Preserve exact faces, fur, garment details, warm colors, complete ears/whiskers/paws/tails, positions, scale and square 2x2 arrangement. No restyling, no new drawing, no flat backdrop, no checkerboard, no floor, no cast shadow, no halo or residue.

### Widen spacing

Original: `C:\Users\jeoun\.codex\generated_images\01a07f10-d352-79a2-8cbf-4a1a36cd9f9f\exec-5ea187df-f8cb-43b3-8736-7d43d2f01b2b.png`

Exact prompt:

Use case: precise-object-edit. Fix only the spacing of the four white Persian cat cutouts in this transparent PNG atlas. Preserve every cat, exact face, pose, fluffy tail, all four garments and their colors. The upper cats' tails/paws are touching the lower cats' ears: separate them. Scale all four complete cats uniformly down to leave generous empty transparent space, centered one per exact square quadrant. In each quadrant keep at least 40 pixels of clear transparent margin above the tallest ear and below the lowest tail/paw. Absolutely no subject may touch or cross the exact horizontal midpoint or vertical midpoint of the square image. There must be a continuous clearly empty transparent horizontal strip at least 80 pixels tall across the entire middle of the image, and a clear vertical transparent strip between columns. Do not trim the resulting transparent canvas or pack the cats tightly afterwards. Remove all detached white scraps outside the four cats, but preserve full opaque white fur and fine whiskers. Keep actual PNG alpha transparency, not a checkerboard or white background. No redrawing the cat design, no text or props. Output the full uncropped transparent square atlas.

### Accepted alpha

Original: `C:\Users\jeoun\.codex\generated_images\01a07f10-d352-79a2-8cbf-4a1a36cd9f9f\exec-7055bcd7-602a-42f8-8f88-78c1125a80d2.png`

Exact prompt:

Remove the checkerboard background entirely and return a transparent PNG with a real alpha channel. Keep only the four dressed cats. Preserve all four positions and the wide empty gap between the rows and columns. Do not crop, resize, enlarge, repack, or move the cats. Keep the full square canvas and every complete ear, paw, tail and whisker. No white backdrop or drawn checkerboard. Background must be alpha zero, white fur remains opaque.

## luna

Workspace: `assets/wardrobe-v2/luna.png`. First references: `assets/cats/luna.png` identity, `assets/wardrobe-v2/bori-design.png` approved garment design. Each subsequent edit uses the immediately preceding output except rejected extraction candidates explicitly noted above.

### Generated design

Original: `C:\Users\jeoun\.codex\generated_images\01a07f10-d352-79a2-8cbf-4a1a36cd9f9f\exec-2dd42e59-fc0a-481e-b2b6-a222bc318480.png`

Exact prompt:

Use case: identity-preserve. Create one transparent PNG 2 by 2 wardrobe atlas for a cozy illustrated cat care game. Image 1 is the exact cat identity and seated full-body pose; image 2 is the approved wardrobe design reference and arrangement. Replace the orange cat in each design-reference cell with Luna, the plush solid blue-gray British Shorthair kitten with round copper amber eyes, charcoal nose, rounded cheeks, dense short gray fur and tail curled to the left, preserving the cat in image 1: identical face, eye color, fur markings, original paw placement, head tilt and tail location. Use exactly the four small naturally worn clothes from image 2, same design/colors/materials: top left small off-center dusty-rose matte cotton bow on a narrow collar nestled in fur; top right small pale-sage light gauze kerchief; bottom left thin relaxed pale-lilac fine-knit sleeveless vest with very thin hems and natural fur tufts overlapping neckline, foreleg openings and bottom hem; bottom right ONLY a small rounded ivory sailor COLLAR with one fine muted blue line and a tiny tie, no shirt, no sleeves. Garments follow this cat's actual body and fur, with subtle soft contact shadows, delicate draped wrinkles and the same warm painterly brushwork as the cat, never a cut-out geometric bib or stiff human shoulder shape. Keep the four cats at the same scale, complete ears/whiskers/paws/tails each independently centered inside its equal square quadrant with clear blank margins of at least 8 percent; no part crosses the row or column midpoint. Preserve the true transparent alpha background as in reference2; all space outside cats has alpha zero. NOT a visual checkerboard pattern. No floor, background, ground shadow, detached fur fragments, lettering, grid or labels. Whole square atlas, requested 2048x2048.

### Vest fit and spacing

Original: `C:\Users\jeoun\.codex\generated_images\01a07f10-d352-79a2-8cbf-4a1a36cd9f9f\exec-69603585-9b8d-4210-820b-9f0fed4f58ee.png`

Exact prompt:

Use case: precise-object-edit. Keep these four gray British Shorthair cats and their four existing outfits, exact identity and poses, but fix the lower-left lilac vest: it must wrap around the cat's actual torso and visible side, not form a narrow flat bib hanging between the legs. Continue the thin relaxed knit fabric across the rounded flank on the viewer's left with gentle natural folds and a short softly curved hem. Replace thick continuous raised piping with very thin knitted hems, allowing small gray fur tufts to overlap the neckline and armholes. Preserve the cat's shape; no sleeves, human shoulders or stretched harness shape. Keep the other three outfits exactly the same. Layout correction: uniformly shrink all four complete dressed cats to 85 percent of their current size, then center one in each exact square quadrant. There must be a wide clear gap between upper paws/tails and lower ears, and all subjects fully inside their own quadrant. The square 2x2 layout, complete heads/paws/tails, relative scale, original poses and high quality warm painterly fur remain unchanged. No text, extra objects, background scene or grid lines.

### First extraction: cramped rows; rejected

Original: `C:\Users\jeoun\.codex\generated_images\01a07f10-d352-79a2-8cbf-4a1a36cd9f9f\exec-cf17bb32-f2cf-4ee0-9bad-f11d201158ea.png`

Exact prompt:

Use case: background-extraction. Remove the entire white background from the supplied four-cat wardrobe sheet. Output a PNG with REAL TRANSPARENCY in the alpha channel: every pixel outside the four cats is transparent. Keep only the four cats and their clothing. Preserve exact faces, fur, garment details, warm colors, complete ears/whiskers/paws/tails, positions, scale and square 2x2 arrangement. No restyling, no new drawing, no flat backdrop, no checkerboard, no floor, no cast shadow, no halo or residue.

### Widen spacing and mute knit

Original: `C:\Users\jeoun\.codex\generated_images\01a07f10-d352-79a2-8cbf-4a1a36cd9f9f\exec-6d516881-f125-4bdd-845e-8552897e6a6e.png`

Exact prompt:

Use case: precise-object-edit. Fix only the spacing and slight vest color of the four gray cat cutouts in this transparent PNG atlas. Preserve every cat, exact face, pose, tail, all four garments and their design. The upper paws are touching the lower ears: separate them. Scale all four complete cats uniformly down and place them separately, one centered in each exact square quadrant, with a very wide clear space between the two rows and the two columns. Keep at least 60 pixels clear transparent margin on every side of each complete cat. No subject may touch or cross the horizontal or vertical midpoint of the square image. There must be a completely empty transparent horizontal strip across the entire middle of the sheet. Reduce the bottom-left vest's overly bright pink saturation to a quiet dusty pale lilac knit like the approved design, keep original texture and folds. All other colors unchanged. Remove detached background remnants. Keep actual PNG alpha transparency, not a checkerboard or white backdrop. Full uncropped square canvas, complete ears/paws/tails, no new objects or text.

### Extraction attempt: RGB checkerboard; rejected

Original: `C:\Users\jeoun\.codex\generated_images\01a07f10-d352-79a2-8cbf-4a1a36cd9f9f\exec-8ae5475d-2ea4-4541-82c5-4c85e09248aa.png`

Exact prompt:

Remove the checkerboard background entirely and return a transparent PNG with a real alpha channel. Keep only the four dressed cats. Preserve all four positions and the wide empty gap between the rows and columns. Do not crop, resize, enlarge, repack, or move the cats. Keep the full square canvas and every complete ear, paw, tail and whisker. No white backdrop or drawn checkerboard. Background must be alpha zero, white fur remains opaque.

### Accepted alpha

Original: `C:\Users\jeoun\.codex\generated_images\01a07f10-d352-79a2-8cbf-4a1a36cd9f9f\exec-d9940c90-7c75-45ac-9c74-c265d6c518c5.png`

Exact prompt:

Remove the background entirely. Make this a transparent PNG with a real alpha channel. Keep only the four cats and their clothing. Retain every fur edge and the wide spaces between the cats, exact positions and the full square 2x2 layout. Do not draw a checkerboard.

## nabi

Workspace: `assets/wardrobe-v2/nabi.png`. First references: `assets/cats/nabi.png` identity, `assets/wardrobe-v2/bori-design.png` approved garment design. Each subsequent edit uses the immediately preceding output except rejected extraction candidates explicitly noted above.

### Generated design

Original: `C:\Users\jeoun\.codex\generated_images\01a07f10-d352-79a2-8cbf-4a1a36cd9f9f\exec-4b8244f8-8aea-4d0a-96c1-e6542dc2b0e2.png`

Exact prompt:

Use case: identity-preserve. Create one transparent PNG 2 by 2 wardrobe atlas for a cozy illustrated cat care game. Image 1 is the exact cat identity and seated full-body pose; image 2 is the approved wardrobe design reference and arrangement. Replace the orange cat in each design-reference cell with Nabi, the calico kitten with green eyes, pink nose, white muzzle and broad white chest and legs, orange fur on the left of her face, black patch on the right of her face, calico body and upward-curled tail to the right, preserving the cat in image 1: identical face, eye color, fur markings, original paw placement, head tilt and tail location. Use exactly the four small naturally worn clothes from image 2, same design/colors/materials: top left small off-center dusty-rose matte cotton bow on a narrow collar nestled in fur; top right small pale-sage light gauze kerchief; bottom left thin relaxed pale-lilac fine-knit sleeveless vest with very thin hems and natural fur tufts overlapping neckline, foreleg openings and bottom hem; bottom right ONLY a small rounded ivory sailor COLLAR with one fine muted blue line and a tiny tie, no shirt, no sleeves. Garments follow this cat's actual body and fur, with subtle soft contact shadows, delicate draped wrinkles and the same warm painterly brushwork as the cat, never a cut-out geometric bib or stiff human shoulder shape. Keep the four cats at the same scale, complete ears/whiskers/paws/tails each independently centered inside its equal square quadrant with clear blank margins of at least 8 percent; no part crosses the row or column midpoint. Preserve the true transparent alpha background as in reference2; all space outside cats has alpha zero. NOT a visual checkerboard pattern. No floor, background, ground shadow, detached fur fragments, lettering, grid or labels. Whole square atlas, requested 2048x2048.

### Accepted alpha

Original: `C:\Users\jeoun\.codex\generated_images\01a07f10-d352-79a2-8cbf-4a1a36cd9f9f\exec-9e32f90b-22ef-449e-b5bd-58fc14779804.png`

Exact prompt:

Use case: background-extraction. Remove the entire checkerboard background from the supplied four-cat wardrobe sheet. Output a PNG with REAL TRANSPARENCY in the alpha channel: every pixel outside the four cats is transparent. Keep only the four cats and their clothing. Preserve exact faces, fur, garment details, warm colors, complete ears/whiskers/paws/tails, positions, scale and square 2x2 arrangement. No restyling, no new drawing, no flat backdrop, no checkerboard, no floor, no cast shadow, no halo or residue.


