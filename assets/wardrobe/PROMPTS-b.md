# Expansion art B — wardrobe

Date: 2026-09-08. Built-in image_gen only; no CLI/API fallback, no Python or local image postprocessing. All selected originals copied unchanged to this workspace. Original cat and living-room references inspected before generation.

2×2 wardrobe order: top-left rose bow collar, top-right sage bandana, bottom-left lilac knitted vest, bottom-right ivory/navy sailor shirt. Each final sheet is 1536×1024 RGBA (PNG type 6). Nominal cells are 768×512, but the generated horizontal row divider is slightly displaced: read-only alpha scans found clear gap rows 478–501 for Nabi and row 518 for Oreo. Consumers must use appropriate source boundaries to preserve bottom-row ear tips and exclude top-row paw fragments. Keep natural image proportions instead of stretching to a square. Read-only System.Drawing confirmed real transparent pixels (alpha 0) around cats; retained RGB under alpha is not visible in normal browser rendering.

## nabi

Saved: `assets/wardrobe/nabi.png`

Generated original: `C:\Users\jeoun\.codex\generated_images\01a07e93-9535-7032-a9be-792e8068a70e\exec-1c525e4a-2f9a-4c81-99ee-c9d8ca5dd8b2.png`

Reference identity: `assets/cats/nabi.png`.

QA: Targeted background extraction correction, exact outfit content retained. See alpha validation.

discardedSource: `C:\Users\jeoun\.codex\generated_images\01a07e93-9535-7032-a9be-792e8068a70e\exec-f296d5f8-7822-44fc-8534-e85d157d6465.png` (original preserved, not consumed by game).

Exact prompt / correction history:

```text
Use case: identity-preserve. Asset type: transparent cat dress-up game character atlas. Create ONE square RGBA PNG with genuinely TRANSPARENT alpha background, an EXACT 2 by 2 grid of four equal square cells. In EACH cell show the SAME original full-body cat from the reference, exactly the SAME seated pose, face, fur markings, scale, angle, fluffy texture, eyes and tail placement as reference; only outfit changes. Entire ears, tail and paws within each cell with 8 percent safe margins. Painterly high-quality fine fur matching reference. Clothing comfortable and small with head, ears, limbs and tail exposed. TOP LEFT: small dusty-rose ribbon bow on a soft thin collar. TOP RIGHT: small sage-green triangular bandana tied loosely at neck. BOTTOM LEFT: pale-lilac light knitted sleeveless vest fitted gently over torso. BOTTOM RIGHT: ivory cotton sailor shirt on torso, small muted-navy sailor collar. Absolutely no background, no floor, no scenery, no painted checkerboard, no shadows outside cat, no text, no numbers, no borders, no hats, no extra props. Each of four dressed cats is a clean isolated cutout with REAL transparency around it. Character: Nabi, the exact green-eyed calico cat in reference 1, orange patch on viewer-left forehead, black patch on viewer-right head, white face blaze/chest/paws, orange-black-white body and curled tail.

Targeted transparency correction prompt:
Use case: background-extraction. Edit target is the four dressed cat atlas in reference. Remove ONLY the entire gray-white checkerboard background and make it genuinely TRANSPARENT using an actual RGBA alpha channel. Preserve all four cats, clothes, fur edges, positioning, size and exact equal 2x2 layout unchanged. No new background color, no drawn transparency checkerboard, no shadow, no text. Output a PNG with real fully transparent pixels surrounding every cat. The checkerboard is NOT part of the desired image and must be removed.
```

## siru

Saved: `assets/wardrobe/siru.png`

Generated original: `C:\Users\jeoun\.codex\generated_images\01a07e93-9535-7032-a9be-792e8068a70e\exec-87c60c4f-d0fd-4869-b43c-fdd5a05c4d98.png`

Reference identity: `assets/cats/siru.png`.

QA: Final built-in background extraction after correcting landscape composition; inspect actual RGBA and sample alpha.

discardedSource: `C:\Users\jeoun\.codex\generated_images\01a07e93-9535-7032-a9be-792e8068a70e\exec-ab6e26e1-f431-4181-a12a-5b7dddfbe792.png` (original preserved, not consumed by game).

discardedCorrection: `C:\Users\jeoun\.codex\generated_images\01a07e93-9535-7032-a9be-792e8068a70e\exec-19e5badc-4158-4b3a-927a-9afc025a5060.png` (original preserved, not consumed by game).

discardedCorrection2: `C:\Users\jeoun\.codex\generated_images\01a07e93-9535-7032-a9be-792e8068a70e\exec-ab748a53-0a23-42cb-b341-17925be78e12.png` (original preserved, not consumed by game).

discardedLandscape: `C:\Users\jeoun\.codex\generated_images\01a07e93-9535-7032-a9be-792e8068a70e\exec-040ba702-9f90-436e-85d2-6dc4fc27706c.png` (original preserved, not consumed by game).

Exact prompt / correction history:

```text
Use case: identity-preserve. Asset type: transparent cat dress-up game character atlas. Create ONE square RGBA PNG with genuinely TRANSPARENT alpha background, an EXACT 2 by 2 grid of four equal square cells. In EACH cell show the SAME original full-body cat from the reference, exactly the SAME seated pose, face, fur markings, scale, angle, fluffy texture, eyes and tail placement as reference; only outfit changes. Entire ears, tail and paws within each cell with 8 percent safe margins. Painterly high-quality fine fur matching reference. Clothing comfortable and small with head, ears, limbs and tail exposed. TOP LEFT: small dusty-rose ribbon bow on a soft thin collar. TOP RIGHT: small sage-green triangular bandana tied loosely at neck. BOTTOM LEFT: pale-lilac light knitted sleeveless vest fitted gently over torso. BOTTOM RIGHT: ivory cotton sailor shirt on torso, small muted-navy sailor collar. Absolutely no background, no floor, no scenery, no painted checkerboard, no shadows outside cat, no text, no numbers, no borders, no hats, no extra props. Each of four dressed cats is a clean isolated cutout with REAL transparency around it. Character: Siru, the exact blue-eyed fluffy ragdoll cat in reference 1, white inverted-V blaze and chest, cream-white long fur, soft taupe-brown ears face and huge tail. REAL alpha transparent PNG output is mandatory. Do not illustrate a checkerboard to represent transparency.

Targeted transparency correction prompt:
Use case: background-extraction. Edit target is the four dressed cat atlas in reference. Remove ONLY the entire gray-white checkerboard background and make it genuinely TRANSPARENT using an actual RGBA alpha channel. Preserve all four cats, clothes, fur edges, positioning, exact equal 2x2 layout unchanged. Keep whole tails and paws inside each cell. No new background color, no drawn transparency checkerboard, no shadow, no text. Output a PNG with real fully transparent pixels surrounding every cat. The checkerboard is NOT part of the desired image and must be removed.

Second targeted transparency correction prompt:
Remove the background from this image. Return the four dressed cats as clean cutouts on a transparent background. Real transparent PNG alpha, not a checkerboard drawing. Keep all four cats and their outfits in the 2-by-2 arrangement.

Regeneration for alpha:
Create a transparent-background PNG asset, 1536 x 1024 pixels, RGBA. This MUST use actual image transparency, absolutely not a rendered gray checkerboard. Using reference cat as identity, create four full-body cutout cats in a 2 by 2 arrangement. Keep the exact original seated pose, fur, blue eyes and huge tail for all four cats. Upper-left wears a small dusty rose bow collar. Upper-right wears a sage bandana. Lower-left wears a pale lilac sleeveless knitted vest. Lower-right wears an ivory sailor shirt with muted navy collar. Detailed soft fur, painterly high-quality original style. Entire cat in each cell, separated by transparent space. No floor, no scenery, no shadow, no outline, no checkerboard. Output transparent PNG with real alpha channel.

Final extraction prompt:
Remove the checkerboard background. Create a PNG with a transparent background.
```

## oreo

Saved: `assets/wardrobe/oreo.png`

Generated original: `C:\Users\jeoun\.codex\generated_images\01a07e93-9535-7032-a9be-792e8068a70e\exec-66915c0d-0559-467a-a70d-041d92591e50.png`

Reference identity: `assets/cats/oreo.png`.

QA: Built-in background extraction; correct quadrant clothing, tuxedo identity, tail and paws visible. Actual alpha checked with PNG and pixel samples.

discardedSource: `C:\Users\jeoun\.codex\generated_images\01a07e93-9535-7032-a9be-792e8068a70e\exec-b9862874-c3a6-4fdf-834f-0e6813943c42.png` (original preserved, not consumed by game).

Exact prompt / correction history:

```text
Use case: identity-preserve. Asset type: transparent cat dress-up game character atlas. Create ONE square RGBA PNG with genuinely TRANSPARENT alpha background, an EXACT 2 by 2 grid of four equal square cells. In EACH cell show the SAME original full-body cat from the reference, exactly the SAME seated pose, face, fur markings, scale, angle, fluffy texture, eyes and tail placement as reference; only outfit changes. Entire ears, tail and paws within each cell with 8 percent safe margins. Painterly high-quality fine fur matching reference. Clothing comfortable and small with head, ears, limbs and tail exposed. TOP LEFT: small dusty-rose ribbon bow on a soft thin collar. TOP RIGHT: small sage-green triangular bandana tied loosely at neck. BOTTOM LEFT: pale-lilac light knitted sleeveless vest fitted gently over torso. BOTTOM RIGHT: ivory cotton sailor shirt on torso, small muted-navy sailor collar. Absolutely no background, no floor, no scenery, no painted checkerboard, no shadows outside cat, no text, no numbers, no borders, no hats, no extra props. Each of four dressed cats is a clean isolated cutout with REAL transparency around it. Character: Oreo, the exact green-eyed shorthaired black-and-white tuxedo cat in reference 1, asymmetric narrow white nose blaze, white muzzle chest and socks, black body and curled black tail. Real transparent PNG requested.

Background extraction prompt:
Remove the checkerboard background. Create a PNG with a transparent background.
```

