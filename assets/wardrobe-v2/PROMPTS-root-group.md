# Natural wardrobe v2 · Hodu, Byeol, Bam

Built-in image_gen only. Existing wardrobe assets remain preserved. Accepted PNGs are copied unchanged to assets/wardrobe-v2/{hodu,byeol,bam}.png. All three are 1254×1254 RGBA. Each contains four independently painted full-cat outfits in ribbon/bandana/vest/sailor order.

Hodu: separate garment design and background extraction calls. The final long tail and lower ears use a measured transparent seam at runtime (wardrobe-seams.js); no bitmap editing. Opaque crossings at alpha > 8 = 0 along both seams. Byeol: measured split X646/Y639. Bam: first alpha failed because upper paws touched lower ears; spacing redraw and alpha extraction fixed the gap. Final normal627-square cells are clear. See output/wardrobe-v2-review for native PNG/actual UI inspections. Hodu/Byeol independent art design approved by wardrobe_redesign_art; final UI reviews recorded in REVIEW_LOG.md.

## hodu

Generated source: C:/Users/jeoun/.codex/generated_images/01a07e26-4ff3-7ad3-8821-d7f963dcc351/exec-69faa075-dae9-456d-ae95-477f2990c24d.png

References:
- C:/Users/jeoun/.codex/generated_images/01a07f10-d352-79a2-8cbf-4a1a36cd9f9f/exec-95e8812f-1710-4035-a05d-eb4536e261f9.png
- C:/Users/jeoun/OneDrive/바탕 화면/고양이양이/assets/cats/hodu.png

Exact prompt:

Use case: identity-preserve. Create a high-quality painterly 2D cat game wardrobe sheet: EXACTLY four full-body illustrations of Hodu the large brown tabby Maine Coon from reference 2, wearing four refined natural cozy garments matching reference 1's approved four designs. Reference 1 = garment design sheet ONLY; reference 2 = Hodu cat identity, tufted ears, amber eyes, long brown cream ruff, broad muzzle and huge fluffy tail, MUST remain Maine Coon (never orange shorthair). Neat 2x2 grid, four equal square cells on true transparent alpha background. 1536x1536 or larger square. Generous empty margins 10% inside each cell on all four sides; no cat, tail, whisker, or fur crosses the central x/y boundaries. Top-left: very small soft dusty rose cotton ribbon tucked into neck fur, tiny asymmetric fabric knot and thin collar. Top-right: short softly draped sage cotton kerchief, tiny side knot, subtle natural asymmetric folds. Bottom-left: thin pale dusty lilac fine-knit sleeveless vest, loose feline torso fit, small soft openings for natural forelegs, chest and shoulder fur overlapping the thin cloth edge, no heavy piping, no tight harness. Bottom-right: small ivory sailor COLLAR only with single desaturated blue trim and short tiny blue tie, chest and body fur exposed, no shirt sleeves, no human shoulders, no bulky garment. Garments follow the curved neck/body volume, natural soft contact shadows and partial fur occlusion, same brushwork/sharpness as fur, quiet natural light from upper left. Beautiful premium Korean illustrated cat-care game, plush painterly fur, gentle expressive eyes, organic elegant design, cat-first silhouette. Preserve cat's species and palette. Keep all paws, ears and tail complete. Actual transparent background, no white matte, no checkerboard pattern, no text, no diagrams, no props, no drop shadow outside cat.

## hodu-alpha

Generated source: C:/Users/jeoun/.codex/generated_images/01a07e26-4ff3-7ad3-8821-d7f963dcc351/exec-06196688-c475-45ac-b7b9-60d0564fc784.png

References:
- C:/Users/jeoun/.codex/generated_images/01a07e26-4ff3-7ad3-8821-d7f963dcc351/exec-69faa075-dae9-456d-ae95-477f2990c24d.png

Exact prompt:

Use case: background-extraction. Edit this four-cat wardrobe sheet. Remove the ENTIRE gray and white checkerboard background into real transparent alpha pixels, keep every fine fur detail and preserve all four cats, garment styles, colors, illumination and painterly quality. Crucial layout adjustment: fit each whole cat including tail and ear tufts a little smaller wholly within its own equal 2x2 quadrant, with a generous 40-pixel transparent gap either side of the horizontal AND vertical centerlines. The top-left fluffy tail currently descends across the centerline next to the bottom cat's ears; separate these by moving and modestly scaling within cells so they cannot be cut off or leak between frames. Four full-body cats, SAME poses and exact approved garments: tiny rose ribbon, sage kerchief, lilac thin vest, ivory blue-trim sailor collar. No redesign. True fully transparent RGBA background; no checker pattern, no white matte, no cast shadow or leftover background pixels. Keep square output and four equal cells. Render polished intact fur edges.

## hodu-final-alpha

Generated source: C:/Users/jeoun/.codex/generated_images/01a07e26-4ff3-7ad3-8821-d7f963dcc351/exec-3ca95c6a-c043-443f-9c16-6c00ae1aa595.png

References:
- C:/Users/jeoun/.codex/generated_images/01a07e26-4ff3-7ad3-8821-d7f963dcc351/exec-06196688-c475-45ac-b7b9-60d0564fc784.png

Exact prompt:

Use case: background-extraction. Remove the entire checkerboard background from the supplied four-cat wardrobe sheet. Output a PNG with REAL TRANSPARENCY in the alpha channel: every pixel outside the four cats is transparent. Keep only the four cats and their clothing. Preserve exact faces, fur, garment details, warm colors, complete ears/whiskers/paws/tails, positions, scale and square 2x2 arrangement. No restyling, no new drawing, no flat backdrop, no checkerboard, no floor, no cast shadow, no halo or residue.

## byeol

Generated source: C:/Users/jeoun/.codex/generated_images/01a07e26-4ff3-7ad3-8821-d7f963dcc351/exec-d8b3d4c7-6df6-4706-92e3-ccd140d2be58.png

References:
- assets/wardrobe-v2/bori-design.png
- assets/cats/byeol.png

Exact prompt:

Use case: identity-preserve. Create a high-quality painterly 2D cat game wardrobe sheet: EXACTLY four full-body illustrations of Byeol the slender seal-point Siamese from reference 2, wearing four refined natural cozy garments matching reference 1's approved four designs. Reference 1 = garment design sheet ONLY; reference 2 = Byeol cat identity, large blue eyes, big triangular dark ears, dark seal-brown face mask, paws and slender curled tail, short warm-cream body fur and slim elegant muzzle; MUST remain Siamese, never orange tabby or long-haired. Reclining with front paws extended as in original identity, relaxed feline proportions. Neat 2x2 grid, four equal square cells on true transparent alpha background. 1536x1536 or larger square. Generous empty margins 10% inside each cell on all four sides; no cat, tail, whisker, or fur crosses the central x/y boundaries. Top-left: very small soft dusty rose cotton ribbon tucked into neck fur, tiny asymmetric fabric knot and thin collar. Top-right: short softly draped sage cotton kerchief, tiny side knot, subtle natural asymmetric folds. Bottom-left: thin pale dusty lilac fine-knit sleeveless vest, loose feline torso fit, small soft openings for natural forelegs, chest and shoulder fur overlapping the thin cloth edge, no heavy piping, no tight harness. Bottom-right: small ivory sailor COLLAR only with single desaturated blue trim and short tiny blue tie, chest and body fur exposed, no shirt sleeves, no human shoulders, no bulky garment. Garments follow the curved neck/body volume, natural soft contact shadows and partial fur occlusion, same brushwork/sharpness as fur, quiet natural light from upper left. Beautiful premium Korean illustrated cat-care game, plush painterly fur, gentle expressive eyes, organic elegant design, cat-first slim graceful silhouette. Preserve cat's species and palette. Keep all paws, ears and tail complete. Actual transparent background, no white matte, no checkerboard pattern, no text, no diagrams, no props, no drop shadow outside cat.

## byeol-alpha

Generated source: C:/Users/jeoun/.codex/generated_images/01a07e26-4ff3-7ad3-8821-d7f963dcc351/exec-85c21ef1-4b9e-469b-9ebe-e2e25c18eb96.png

References:
- C:/Users/jeoun/.codex/generated_images/01a07e26-4ff3-7ad3-8821-d7f963dcc351/exec-d8b3d4c7-6df6-4706-92e3-ccd140d2be58.png

Exact prompt:

Use case: background-extraction. Remove the entire checkerboard background from the supplied four-cat wardrobe sheet. Output a PNG with REAL TRANSPARENCY in the alpha channel: every pixel outside the four cats is transparent. Keep only the four cats and their clothing. Preserve exact faces, fur, garment details, warm colors, complete ears/whiskers/paws/tails, positions, scale and square 2x2 arrangement. No restyling, no new drawing, no flat backdrop, no checkerboard, no floor, no cast shadow, no halo or residue.

## bam

Generated source: C:/Users/jeoun/.codex/generated_images/01a07e26-4ff3-7ad3-8821-d7f963dcc351/exec-744ceb02-1710-48b7-8859-743f5afbf86a.png

References:
- C:/Users/jeoun/OneDrive/바탕 화면/고양이양이/assets/wardrobe-v2/bori-design.png
- C:/Users/jeoun/OneDrive/바탕 화면/고양이양이/assets/cats/bam.png

Exact prompt:

Use case: identity-preserve. Create a high-quality painterly 2D cat game wardrobe sheet: EXACTLY four full-body illustrations of Bam the sleek black Bombay from reference 2, wearing four refined natural cozy garments matching reference 1's approved four designs. Reference 1 = garment design sheet ONLY; reference 2 = Bam cat identity, round golden amber eyes, solid inky black short glossy fur with natural warm highlights, slightly tilted round face and gracefully curled black tail, MUST remain solid black Bombay (no white spots, no tabby stripes, no long hair). Neat 2x2 grid, four equal square cells on true transparent alpha background. 1536x1536 or larger square. Generous empty margins 10% inside each cell on all four sides; no cat, tail, whisker, or fur crosses the central x/y boundaries. Top-left: very small soft dusty rose cotton ribbon tucked into neck fur, tiny asymmetric fabric knot and thin collar. Top-right: short softly draped sage cotton kerchief, tiny side knot, subtle natural asymmetric folds. Bottom-left: thin pale dusty lilac fine-knit sleeveless vest, loose feline torso fit, small soft openings for natural forelegs, chest and shoulder fur overlapping the thin cloth edge, no heavy piping, no tight harness. Bottom-right: small ivory sailor COLLAR only with single desaturated blue trim and short tiny blue tie, chest and body fur exposed, no shirt sleeves, no human shoulders, no bulky garment. Garments follow the curved neck/body volume, natural soft contact shadows and partial fur occlusion, same brushwork/sharpness as fur, quiet natural light from upper left. Beautiful premium Korean illustrated cat-care game, plush painterly fur, gentle expressive eyes, organic elegant design, cat-first silhouette. Preserve cat's species and palette. Keep all paws, ears and tail complete. Actual transparent background, no white matte, no checkerboard pattern, no text, no diagrams, no props, no drop shadow outside cat.

## bam-alpha-rejected

Generated source: C:/Users/jeoun/.codex/generated_images/01a07e26-4ff3-7ad3-8821-d7f963dcc351/exec-af3db4e9-e7a1-4e1c-965a-8b9b62f4a9f8.png

References:
- C:/Users/jeoun/.codex/generated_images/01a07e26-4ff3-7ad3-8821-d7f963dcc351/exec-744ceb02-1710-48b7-8859-743f5afbf86a.png

Exact prompt:

Use case: background-extraction. Remove the entire checkerboard background from the supplied four-cat wardrobe sheet. Output a PNG with REAL TRANSPARENCY in the alpha channel: every pixel outside the four cats is transparent. Keep only the four cats and their clothing. Preserve exact faces, fur, garment details, warm colors, complete ears/whiskers/paws/tails, positions, scale and square 2x2 arrangement. No restyling, no new drawing, no flat backdrop, no checkerboard, no floor, no cast shadow, no halo or residue.

## bam-spacing

Generated source: C:/Users/jeoun/.codex/generated_images/01a07e26-4ff3-7ad3-8821-d7f963dcc351/exec-40fa79a1-a72f-46b7-9f3c-63056922082c.png

References:
- C:/Users/jeoun/OneDrive/바탕 화면/고양이양이/assets/wardrobe-v2/bam.png

Exact prompt:

Use case: precise-object-edit. Correct the spacing of these four complete black cats. Keep their lovely black Bombay faces, golden eyes, painterly fur, exact four garments, and seated poses unchanged. Scale all four complete cats uniformly down and place them separately, one centered in each exact square quadrant, with a very wide clear space between the two rows and the two columns. Keep at least 60 pixels clear transparent margin on every side of each complete cat. No subject may touch or cross the horizontal or vertical midpoint of the square image. There must be a completely empty transparent horizontal strip across the entire middle of the sheet. The top cats' paws must be far above the lower cats' ear tips. Exactly four cats in equal 2x2 square cells. Do not change clothing design, anatomy or poses. Whole ears, paws and tail complete. No text.

## bam-final-alpha

Generated source: C:/Users/jeoun/.codex/generated_images/01a07e26-4ff3-7ad3-8821-d7f963dcc351/exec-d3116cb8-0cce-40b5-973d-3d3a21957518.png

References:
- C:/Users/jeoun/.codex/generated_images/01a07e26-4ff3-7ad3-8821-d7f963dcc351/exec-40fa79a1-a72f-46b7-9f3c-63056922082c.png

Exact prompt:

Remove the background entirely. Make this a transparent PNG with a real alpha channel. Keep only the four cats and their clothing. Retain every fur edge and the wide spaces between the cats, exact positions and the full square 2x2 layout. Do not draw a checkerboard.


