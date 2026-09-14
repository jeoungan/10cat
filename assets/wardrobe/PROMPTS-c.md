# Expansion art — group C

Final Art C signoff (2026-09-08): APPROVED after independently rendering and visually inspecting all 16 wardrobe variants for Miso, Hodu, Byeol and Bam. Hodu's complementary source polygons preserve full ears and tail without neighboring fragments. Miso's final staircase uses local x250 (not the initial x200), low y628 and high y630; the last small dot under ribbon/bandana is removed and the lower cats' ear tips remain intact. Byeol's column split and Bam's row split remove neighboring remnants while preserving native proportions. Browser page errors: none. Final screenshots: `output/expansion-qa/art-c-final-{cat}-{outfit}.png`. No further asset or code changes are required by this review.

## Final atlas integration review

The original RGBA files remain final. The runtime uses measured native source rectangles rather than assuming exact equal halves after alpha extraction. Miso row split is 628 px (its last upper-tail row needs a small silhouette-preserving boundary clip); Byeol column split is 665 px; Bam row split is 591 px. Hodu requires a source SVG clipping polygon: left-half separator follows y603 for local x0–310 and y650 for x310–615; right-half separator follows y603 for local x0–290 and y650 for x290–615. This was measured from alpha >= 16 connected components. It preserves lower-ear pixels from y617 and upper-tail pixels through y645 without raster alterations. The source PNGs and all original output files remain unchanged.

Browser evidence: `output/expansion-qa/art-c-miso.png`, `art-c-hodu.png`, `art-c-byeol.png`, `art-c-bam.png` document the initial boundary issue; `art-c-*-verified.png` captures the corrected metadata review. Bam native aspect 1312/1199 was confirmed in rendered SVG. No page errors in the independent four-cat browser run.

### Rejected padding candidates

A padding edit was already running for all four cats when the coordinator narrowed regeneration to Hodu. None of the padding candidates replaced the final files. Hodu's attempted alpha extraction either retained an RGB checkerboard or introduced a colored semitransparent halo, so it was rejected; runtime source clipping is used instead.

Candidate miso: `C:\Users\jeoun\.codex\generated_images\01a07e93-ddb7-7691-8252-6e847ebf44c0\exec-2da49998-ff62-449a-8b10-134ef5f9eb0c.png`

Prompt (verbatim):

```text
Edit this transparent game sprite sheet. Keep the four illustrated cats and their clothes exactly as supplied, without changing any face, fur, pose or garment. Reposition and uniformly scale down EACH complete cat into its own quadrant of a precise equal 2 by 2 grid on a square transparent PNG canvas. Crucial: each cat must have at least TEN PERCENT transparent margin above ears, below paws/tail, left and right within its own quadrant. No part may touch or cross the center dividing lines. Thus a generous clear transparent cross separates the four cats and there is transparent space around the outer edges too. Make all four cats the same apparent scale. TOP LEFT rose ribbon, TOP RIGHT green bandana, BOTTOM LEFT lilac vest, BOTTOM RIGHT cream sailor shirt. Return actual alpha transparency. Do not draw grid lines, a checkerboard, shadows or any background. This is a padded production sprite atlas, not a tightly cropped image.
```

Candidate hodu: `C:\Users\jeoun\.codex\generated_images\01a07e93-ddb7-7691-8252-6e847ebf44c0\exec-623bae5a-ba54-4077-81cb-b1e81f4bcccb.png`

Prompt (verbatim):

```text
Edit this transparent game sprite sheet. Keep the four illustrated cats and their clothes exactly as supplied, without changing any face, fur, pose or garment. Reposition and uniformly scale down EACH complete cat into its own quadrant of a precise equal 2 by 2 grid on a square transparent PNG canvas. Crucial: each cat must have at least TEN PERCENT transparent margin above ears, below paws/tail, left and right within its own quadrant. No part may touch or cross the center dividing lines. Thus a generous clear transparent cross separates the four cats and there is transparent space around the outer edges too. Make all four cats the same apparent scale. TOP LEFT rose ribbon, TOP RIGHT green bandana, BOTTOM LEFT lilac vest, BOTTOM RIGHT cream sailor shirt. Return actual alpha transparency. Do not draw grid lines, a checkerboard, shadows or any background. This is a padded production sprite atlas, not a tightly cropped image.
```

Candidate byeol: `C:\Users\jeoun\.codex\generated_images\01a07e93-ddb7-7691-8252-6e847ebf44c0\exec-be624158-62f5-4253-870a-6c221250bfc2.png`

Prompt (verbatim):

```text
Edit this transparent game sprite sheet. Keep the four illustrated cats and their clothes exactly as supplied, without changing any face, fur, pose or garment. Reposition and uniformly scale down EACH complete cat into its own quadrant of a precise equal 2 by 2 grid on a square transparent PNG canvas. Crucial: each cat must have at least TEN PERCENT transparent margin above ears, below paws/tail, left and right within its own quadrant. No part may touch or cross the center dividing lines. Thus a generous clear transparent cross separates the four cats and there is transparent space around the outer edges too. Make all four cats the same apparent scale. TOP LEFT rose ribbon, TOP RIGHT green bandana, BOTTOM LEFT lilac vest, BOTTOM RIGHT cream sailor shirt. Return actual alpha transparency. Do not draw grid lines, a checkerboard, shadows or any background. This is a padded production sprite atlas, not a tightly cropped image.
```

Candidate bam: `C:\Users\jeoun\.codex\generated_images\01a07e93-ddb7-7691-8252-6e847ebf44c0\exec-2781b112-87cf-49be-8200-642abededa1a.png`

Prompt (verbatim):

```text
Edit this transparent game sprite sheet. Keep the four illustrated cats and their clothes exactly as supplied, without changing any face, fur, pose or garment. Reposition and uniformly scale down EACH complete cat into its own quadrant of a precise equal 2 by 2 grid on a square transparent PNG canvas. Crucial: each cat must have at least TEN PERCENT transparent margin above ears, below paws/tail, left and right within its own quadrant. No part may touch or cross the center dividing lines. Thus a generous clear transparent cross separates the four cats and there is transparent space around the outer edges too. Make all four cats the same apparent scale. TOP LEFT rose ribbon, TOP RIGHT green bandana, BOTTOM LEFT lilac vest, BOTTOM RIGHT cream sailor shirt. Return actual alpha transparency. Do not draw grid lines, a checkerboard, shadows or any background. This is a padded production sprite atlas, not a tightly cropped image.
```

Rejected Hodu alpha edit: `C:\Users\jeoun\.codex\generated_images\01a07e93-ddb7-7691-8252-6e847ebf44c0\exec-c9cc7378-4169-4fb2-9918-77ab991ceb3d.png`

Prompt (verbatim):

```text
Remove the checkerboard background from this image. Return a PNG with genuine transparent alpha. Keep all four cats and their clothes, their small sizes and padded positions unchanged. Preserve the entire square canvas and all empty margins. Do not trim or crop to the cats.
```

Rejected Hodu alpha edit: `C:\Users\jeoun\.codex\generated_images\01a07e93-ddb7-7691-8252-6e847ebf44c0\exec-84dadf4c-35fb-4ff9-b761-0c84952fe851.png`

Prompt (verbatim):

```text
Remove the background from this image. The background must be transparent. Keep the four cats and their clothes unchanged.
```

Rejected Hodu alpha edit: `C:\Users\jeoun\.codex\generated_images\01a07e93-ddb7-7691-8252-6e847ebf44c0\exec-a981b6f6-7021-4a4d-bafc-f91a027a5411.png`

Prompt (verbatim):

```text
Use case: background-extraction. Remove ALL checkerboard background from the supplied image, including around and between the cats. Save genuine transparent alpha PNG; the cats must be the only visible opaque pixels. No shadows, no glow, no colored haze, no background of any kind. Preserve the four cats, their clothes, their size and their positions on the original canvas; preserve the big empty margins between them. Do not enlarge them. Do not add anything. Background removal only.
```



Created 2026-09-08 with the built-in `image_gen` tool. No CLI fallback and no image pixel editing or resizing. Original generated files are preserved at their generated-image paths; final originals were copied into this workspace.

The first generation for each cat contained a baked RGB checkerboard and was rejected for runtime use. A targeted built-in background-extraction edit produced the final genuine RGBA asset (Bam required two extraction attempts). The final sheet keeps four outfits in row-major order: dusty rose ribbon collar; sage bandana; pale lilac sleeveless knit vest; ivory sailor shirt with muted navy collar. Each actual sheet is split at its exact half width and half height and must preserve its natural cell aspect ratio. No inset crop is needed. Some ear tips have minimal transparent padding.

## miso

Final file: `C:/Users/jeoun/OneDrive/바탕 화면/고양이양이/assets/wardrobe/miso.png`

Final generated source: `C:\Users\jeoun\.codex\generated_images\01a07e93-ddb7-7691-8252-6e847ebf44c0\exec-f245ab8f-8455-402a-a48e-d66511ed004e.png`

Verified dimensions: 1254 × 1254 px. Format32bppArgb; top-left pixel alpha = 0. Visual inspection: four distinct garments present, no painted background or checkerboard, original fur/eye identity preserved, full cat remains within quadrant with tight ear/tail margins on some poses.

### Initial generation

Generated source: `C:\Users\jeoun\.codex\generated_images\01a07e93-ddb7-7691-8252-6e847ebf44c0\exec-18885929-aed3-4404-af89-5aa443a5f058.png`

Prompt (verbatim):

```text
Use case: illustration-story. Production asset for a high-quality cozy 2D cat life game. Input image 1 is the strict cat identity reference.  Subject: Miso, the reference golden brown Bengal with strong dark rosettes and stripes, golden hazel eyes, short silky coat and curled dark ringed tail. Preserve exact markings, eye color, facial shape, body proportions and tail appearance. Beautiful detailed painterly illustration with fine fur, soft warm light, rich delicate color; no photoreal photographic artifacts. One SQUARE image divided precisely into an equal 2x2 grid, four same-size square panels meeting at exactly half width and half height, no borders, no gaps, no text or labels. Produce a genuinely TRANSPARENT PNG with alpha, NO background, floor, shadows behind cat, scenery, checkerboard, labels or grid lines. Four separate cutout renderings of the SAME complete cat in exactly the original reference seated pose and scale, centered in each quadrant with at least 7% transparent padding around every tip of ears, tail and paws. Only the garment changes: TOP LEFT a small dusty-rose fabric ribbon bow on a soft lightweight collar; TOP RIGHT a soft sage-green triangular bandana; BOTTOM LEFT a pale-lilac lightweight knitted SLEEVELESS vest, clear knit texture and loose comfortable fit; BOTTOM RIGHT an ivory lightweight sailor shirt with muted navy sailor collar. Keep original ears, face, all paws, tail, silhouette proportions, original body pose and fur patterns visible, do not make the cat human-like. Clothing sits naturally on cat anatomy with forelegs, head and tail free. Small refined details, no dangling objects or text. True transparent background is essential.
```

### Background extraction attempt 1

Generated source: `C:\Users\jeoun\.codex\generated_images\01a07e93-ddb7-7691-8252-6e847ebf44c0\exec-f245ab8f-8455-402a-a48e-d66511ed004e.png`

Prompt (verbatim):

```text
Use case: background-extraction. Edit the supplied cat clothing sprite sheet. Remove all the white and gray checkerboard background completely. Return a PNG with real transparent alpha around the four cats, including between whiskers and the four quadrants. Preserve the four illustrated cats, garments, colors, positions, poses, and dimensions exactly. Do not draw or simulate transparency. The output image has transparent pixels, not white pixels or squares. No scene or floor, no labels.
```

## hodu

Final file: `C:/Users/jeoun/OneDrive/바탕 화면/고양이양이/assets/wardrobe/hodu.png`

Final generated source: `C:\Users\jeoun\.codex\generated_images\01a07e93-ddb7-7691-8252-6e847ebf44c0\exec-03d7c7e5-981f-490b-95e9-43e8e38f1b5b.png`

Verified dimensions: 1230 × 1278 px. Format32bppArgb; top-left pixel alpha = 0. Visual inspection: four distinct garments present, no painted background or checkerboard, original fur/eye identity preserved, full cat remains within quadrant with tight ear/tail margins on some poses.

### Initial generation

Generated source: `C:\Users\jeoun\.codex\generated_images\01a07e93-ddb7-7691-8252-6e847ebf44c0\exec-fbac49e4-b0d0-423a-97a4-4bbe439c3ced.png`

Prompt (verbatim):

```text
Output must be a PNG with a genuinely transparent alpha background. Render four fullbody cutout cats directly on transparency. Absolutely no painted white or checkerboard. Use case: illustration-story. Production asset for a high-quality cozy 2D cat life game. Input image 1 is the strict cat identity reference.  Subject: Hodu, the reference large brown tabby Maine Coon with long shaggy brown coat, cream mane, tall lynx-tipped ears, golden eyes and enormous plume tail. Preserve exact markings, eye color, facial shape, body proportions and tail appearance. Beautiful detailed painterly illustration with fine fur, soft warm light, rich delicate color; no photoreal photographic artifacts. One SQUARE image divided precisely into an equal 2x2 grid, four same-size square panels meeting at exactly half width and half height, no borders, no gaps, no text or labels. Produce a genuinely TRANSPARENT PNG with alpha, NO background, floor, shadows behind cat, scenery, checkerboard, labels or grid lines. Four separate cutout renderings of the SAME complete cat in exactly the original reference seated pose and scale, centered in each quadrant with at least 7% transparent padding around every tip of ears, tail and paws. Only the garment changes: TOP LEFT a small dusty-rose fabric ribbon bow on a soft lightweight collar; TOP RIGHT a soft sage-green triangular bandana; BOTTOM LEFT a pale-lilac lightweight knitted SLEEVELESS vest, clear knit texture and loose comfortable fit; BOTTOM RIGHT an ivory lightweight sailor shirt with muted navy sailor collar. Keep original ears, face, all paws, tail, silhouette proportions, original body pose and fur patterns visible, do not make the cat human-like. Clothing sits naturally on cat anatomy with forelegs, head and tail free. Small refined details, no dangling objects or text. True transparent background is essential.
```

### Background extraction attempt 1

Generated source: `C:\Users\jeoun\.codex\generated_images\01a07e93-ddb7-7691-8252-6e847ebf44c0\exec-03d7c7e5-981f-490b-95e9-43e8e38f1b5b.png`

Prompt (verbatim):

```text
Use case: background-extraction. Edit the supplied cat clothing sprite sheet. Remove all the white and gray checkerboard background completely. Return a PNG with real transparent alpha around the four cats, including between whiskers and the four quadrants. Preserve the four illustrated cats, garments, colors, positions, poses, and dimensions exactly. Do not draw or simulate transparency. The output image has transparent pixels, not white pixels or squares. No scene or floor, no labels.
```

## byeol

Final file: `C:/Users/jeoun/OneDrive/바탕 화면/고양이양이/assets/wardrobe/byeol.png`

Final generated source: `C:\Users\jeoun\.codex\generated_images\01a07e93-ddb7-7691-8252-6e847ebf44c0\exec-6c6f0d97-ef97-413e-b54c-599679f323d7.png`

Verified dimensions: 1295 × 1214 px. Format32bppArgb; top-left pixel alpha = 0. Visual inspection: four distinct garments present, no painted background or checkerboard, original fur/eye identity preserved, full cat remains within quadrant with tight ear/tail margins on some poses.

### Initial generation

Generated source: `C:\Users\jeoun\.codex\generated_images\01a07e93-ddb7-7691-8252-6e847ebf44c0\exec-bc12ad52-eb41-47cb-99d8-87fb19722f0e.png`

Prompt (verbatim):

```text
Use case: illustration-story. Production asset for a high-quality cozy 2D cat life game. Input image 1 is the strict cat identity reference.  Subject: Byeol, the reference seal-point Siamese with pale ivory short fur, dark chocolate mask, ears, paws and tail, vivid blue eyes. Preserve exact markings, eye color, facial shape, body proportions and tail appearance. Beautiful detailed painterly illustration with fine fur, soft warm light, rich delicate color; no photoreal photographic artifacts. One SQUARE image divided precisely into an equal 2x2 grid, four same-size square panels meeting at exactly half width and half height, no borders, no gaps, no text or labels. Produce a genuinely TRANSPARENT PNG with alpha, NO background, floor, shadows behind cat, scenery, checkerboard, labels or grid lines. Four separate cutout renderings of the SAME complete cat in exactly the original reference seated pose and scale, centered in each quadrant with at least 7% transparent padding around every tip of ears, tail and paws. Only the garment changes: TOP LEFT a small dusty-rose fabric ribbon bow on a soft lightweight collar; TOP RIGHT a soft sage-green triangular bandana; BOTTOM LEFT a pale-lilac lightweight knitted SLEEVELESS vest, clear knit texture and loose comfortable fit; BOTTOM RIGHT an ivory lightweight sailor shirt with muted navy sailor collar. Keep original ears, face, all paws, tail, silhouette proportions, original body pose and fur patterns visible, do not make the cat human-like. Clothing sits naturally on cat anatomy with forelegs, head and tail free. Small refined details, no dangling objects or text. True transparent background is essential.
```

### Background extraction attempt 1

Generated source: `C:\Users\jeoun\.codex\generated_images\01a07e93-ddb7-7691-8252-6e847ebf44c0\exec-6c6f0d97-ef97-413e-b54c-599679f323d7.png`

Prompt (verbatim):

```text
Use case: background-extraction. Edit the supplied cat clothing sprite sheet. Remove all the white and gray checkerboard background completely. Return a PNG with real transparent alpha around the four cats, including between whiskers and the four quadrants. Preserve the four illustrated cats, garments, colors, positions, poses, and dimensions exactly. Do not draw or simulate transparency. The output image has transparent pixels, not white pixels or squares. No scene or floor, no labels.
```

## bam

Final file: `C:/Users/jeoun/OneDrive/바탕 화면/고양이양이/assets/wardrobe/bam.png`

Final generated source: `C:\Users\jeoun\.codex\generated_images\01a07e93-ddb7-7691-8252-6e847ebf44c0\exec-b6f1d5e0-fc5b-4da6-940b-fa4182433082.png`

Verified dimensions: 1312 × 1199 px. Format32bppArgb; top-left pixel alpha = 0. Visual inspection: four distinct garments present, no painted background or checkerboard, original fur/eye identity preserved, full cat remains within quadrant with tight ear/tail margins on some poses.

### Initial generation

Generated source: `C:\Users\jeoun\.codex\generated_images\01a07e93-ddb7-7691-8252-6e847ebf44c0\exec-4dd1b1b0-97b5-4029-8d0c-87ea5af71b34.png`

Prompt (verbatim):

```text
Use case: illustration-story. Production asset for a high-quality cozy 2D cat life game. Input image 1 is the strict cat identity reference.  Subject: Bam, the reference pure black Bombay with glossy black short fur, round golden amber eyes and curved black tail. Preserve exact markings, eye color, facial shape, body proportions and tail appearance. Beautiful detailed painterly illustration with fine fur, soft warm light, rich delicate color; no photoreal photographic artifacts. One SQUARE image divided precisely into an equal 2x2 grid, four same-size square panels meeting at exactly half width and half height, no borders, no gaps, no text or labels. Produce a genuinely TRANSPARENT PNG with alpha, NO background, floor, shadows behind cat, scenery, checkerboard, labels or grid lines. Four separate cutout renderings of the SAME complete cat in exactly the original reference seated pose and scale, centered in each quadrant with at least 7% transparent padding around every tip of ears, tail and paws. Only the garment changes: TOP LEFT a small dusty-rose fabric ribbon bow on a soft lightweight collar; TOP RIGHT a soft sage-green triangular bandana; BOTTOM LEFT a pale-lilac lightweight knitted SLEEVELESS vest, clear knit texture and loose comfortable fit; BOTTOM RIGHT an ivory lightweight sailor shirt with muted navy sailor collar. Keep original ears, face, all paws, tail, silhouette proportions, original body pose and fur patterns visible, do not make the cat human-like. Clothing sits naturally on cat anatomy with forelegs, head and tail free. Small refined details, no dangling objects or text. True transparent background is essential.
```

### Background extraction attempt 1

Generated source: `C:\Users\jeoun\.codex\generated_images\01a07e93-ddb7-7691-8252-6e847ebf44c0\exec-496ed311-456a-4383-8377-d30a7eb2daa0.png`

Prompt (verbatim):

```text
Use case: background-extraction. Edit the supplied cat clothing sprite sheet. Remove all the white and gray checkerboard background completely. Return a PNG with real transparent alpha around the four cats, including between whiskers and the four quadrants. Preserve the four illustrated cats, garments, colors, positions, poses, and dimensions exactly. Do not draw or simulate transparency. The output image has transparent pixels, not white pixels or squares. No scene or floor, no labels.
```

### Background extraction attempt 2

Generated source: `C:\Users\jeoun\.codex\generated_images\01a07e93-ddb7-7691-8252-6e847ebf44c0\exec-b6f1d5e0-fc5b-4da6-940b-fa4182433082.png`

Prompt (verbatim):

```text
Remove the background from this image. The background must be transparent. Keep the four cats and their clothes unchanged.
```
