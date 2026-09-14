# Expansion art batch A — wardrobe

Built-in image_gen only. Author: expansion_art_a. 2026-09-08. Generated originals retained under CODEX_HOME; accepted outputs copied to project unchanged. No Python/image postprocessing. Input cat illustrations and living room inspected before generation. Actual square output 1254 × 1254, exact 2 × 2 atlas, 627 × 627 per quadrant; requested 2048 was not the delivered size.

## bori

- Workspace: C:/Users/jeoun/OneDrive/바탕 화면/고양이양이/assets/wardrobe/bori.png
- Accepted source: C:\Users\jeoun\.codex\generated_images\01a07e93-4280-7fd2-b12e-caf2e32bd891\exec-4070e798-052a-4b43-96ff-68eb45615298.png
- References: assets/cats/bori.png
- QA: Visual: original identity and seated pose preserved; four distinct garments, each wholly inside quadrant. Initial output contained drawn checkerboard/RGB and was rejected. Built-in background-extraction retry produced Format32bppArgb with corner/background A=0; accepted alpha retained unchanged.
- Rejected initial source: C:\Users\jeoun\.codex\generated_images\01a07e93-4280-7fd2-b12e-caf2e32bd891\exec-d4c6bbf9-7b15-47f8-ad5b-86e6b1679716.png

### Exact original prompt

Use case: identity-preserve. Asset type: transparent-background cat costume atlas for a cozy 2D game. Reference image is the exact original cat. Create ONE square 2x2 sheet, FOUR EXACT EQUAL SQUARE quadrants each containing the SAME whole cat in the SAME ORIGINAL seated pose and scale from the reference, with identical face, fur pattern, eye color, silhouette, paw placement, tail direction and head tilt. Subject Bori, a warm orange tabby kitten with amber golden eyes, white muzzle, bib and toes, darker ginger stripes, cheerful tilted face and right curled tail. The only difference is the worn garment. TL: small elegant dusty-rose ribbon bow on soft narrow collar, centered under chin. TR: short sage-green triangular linen bandana around neck. BL: pale-lilac light knitted sleeveless vest fitted gently on torso, visible delicate knit texture. BR: ivory lightweight sailor shirt torso with small muted-navy sailor collar, no hat. Make all four garments clearly distinct, comfortable and small enough to preserve cat body anatomy and visible limbs, head and tail. Each FULL CAT independently isolated, centered within its quadrant with transparent safe margin, no overlap across cells, all ears whiskers paws tail fully uncut. Genuine alpha transparent background, NO solid background, NO simulated checkerboard, NO scene, floor, shadows outside cats, borders, separators, props or labels. Same premium softly luminous painterly detailed fur as reference, consistent camera and lighting across cells. Requested square 2048x2048.

### Accepted repair prompt

Use case: background-extraction. Edit the supplied wardrobe cat sheet. Remove the entire drawn gray-white checkerboard background and replace it with REAL TRANSPARENCY encoded in the PNG ALPHA CHANNEL. Output transparent PNG. Keep all four cat illustrations, fur, whiskers, exact poses, garments, shape, colors, positions, scale, four-cell 2x2 layout and image dimensions untouched. Only background becomes alpha=0; edge fur antialias alpha allowed. Do not generate or draw ANY checker pattern, color backdrop, floor, shadow, border, grid or text. This is a cutout image for real runtime compositing, not a visual representation of transparency. Actual transparent background required.


## mochi

- Workspace: C:/Users/jeoun/OneDrive/바탕 화면/고양이양이/assets/wardrobe/mochi.png
- Accepted source: C:\Users\jeoun\.codex\generated_images\01a07e93-4280-7fd2-b12e-caf2e32bd891\exec-49463b41-3195-4b0c-9b40-80230b18478e.png
- References: assets/cats/mochi.png
- QA: Visual: original fluffy white Persian identity and all four garments preserved, centered in four exact quadrants. Initial drawn checkerboard rejected; accepted second background-extraction retry produces actual Format32bppArgb, corners/background A=0. Apparent white speckles in view_image are alpha=1/255 pixels (read-only pixel checks at 550,310 /572,315 /592,334), thus essentially transparent in runtime compositor. Retained square1254 output; later exploratory output non-square rejected.
- Rejected initial source: C:\Users\jeoun\.codex\generated_images\01a07e93-4280-7fd2-b12e-caf2e32bd891\exec-79d29304-6dff-43e8-8905-4483af82bdee.png

### Exact original prompt

Use case: identity-preserve. Asset type: transparent PNG cat costume atlas, actual alpha required for game compositing. Reference image is the exact original cat. Create ONE square 2x2 sheet, FOUR EXACT EQUAL SQUARE quadrants each containing the SAME whole cat in the SAME ORIGINAL seated pose and scale from the reference, with identical face, eye color, silhouette, paw placement, fluffy tail location and head tilt. Subject Mochi, a fluffy pure ivory-white Persian kitten with amber golden eyes, tiny pink nose, round cheeks and luxurious fluffy tail curled forward on the left. The only difference is the worn garment. TL: small elegant dusty-rose ribbon bow on soft narrow collar centered under chin. TR: short sage-green triangular linen bandana around neck. BL: pale-lilac light knitted sleeveless vest fitted gently on torso, visible knit texture. BR: ivory lightweight sailor shirt on torso with small muted-navy sailor collar, no hat. Four clearly distinct garments, comfortable and small enough to preserve anatomy and visible limbs, head and tail, do not bury the garments in fur. Each FULL CAT independently isolated, centered within its quadrant with transparent safe margin, no overlap across cells, all ears whiskers paws tail fully uncut. Genuine alpha transparent background (pixels outside subject alpha zero), NOT a depicted checkerboard. Do not draw ANY gray white squares, solid background, scene, floor, shadows outside cats, borders, separators, props or labels. Same premium softly luminous painterly detailed fur as reference, consistent camera and lighting across cells. Requested square 2048x2048.

### Accepted repair prompt

Remove the background entirely. Make this a transparent PNG with a real alpha channel. Keep only the four cats and their clothing. Retain every fur edge, exact positions and the square 2x2 layout.

### Additional generation attempts

Source: C:\Users\jeoun\.codex\generated_images\01a07e93-4280-7fd2-b12e-caf2e32bd891\exec-80d7f8e8-71f3-4e5d-bd1e-f6072e27b76d.png

Use case: background-extraction. Edit the supplied wardrobe cat sheet. Remove the entire drawn gray-white checkerboard background and replace it with REAL TRANSPARENCY encoded in the PNG ALPHA CHANNEL. Output transparent PNG. Keep all four white Persian cat illustrations, white fur, whiskers, exact poses, garments, shape, colors, positions, scale, four-cell 2x2 layout and image dimensions untouched. Only background becomes alpha=0; edge fur antialias alpha allowed. Do not generate or draw ANY checker pattern, color backdrop, floor, shadow, border, grid or text. This is a cutout image for real runtime compositing, not a visual representation of transparency. Actual transparent background required. Preserve opaque white cat fur, carefully distinguish pale fur edges from pale backdrop.

Source: C:\Users\jeoun\.codex\generated_images\01a07e93-4280-7fd2-b12e-caf2e32bd891\exec-dff34b65-354a-4b82-8dae-b3c71efda3da.png

Clean the transparent background of this 2x2 white cat wardrobe atlas. There are stray white speckles and isolated background fragments around the cats: remove every disconnected fragment and leave ONLY the four solid cats and clothes with clean soft fur contours. Output a genuine transparent PNG with alpha zero everywhere outside each cat. Keep cat faces, garments, exact positions, body sizes and 2x2 arrangement unchanged. Preserve opaque white fur inside the cat. The result must composite cleanly on any dark background. No floor shadows, halos, backdrop or checkerboard.

Source: C:\Users\jeoun\.codex\generated_images\01a07e93-4280-7fd2-b12e-caf2e32bd891\exec-3df0ad53-0a99-449f-b88a-b127c5b284dc.png

Create a transparent PNG costume atlas. Use image 1 as the exact white Persian cat identity, and image 2 as the four-costume layout and transparent cutout example. Replace the orange cat in each of the four cells with the white Persian cat from image 1, preserving its original seated pose and left fluffy tail. Four equal square cells arranged 2 by 2: upper left pink small ribbon collar; upper right sage bandana; lower left pale lilac sleeveless knitted vest; lower right ivory sailor shirt with navy collar. All four full cats have the same size and pose, complete tails and paws with clear empty margins. Fine painterly fur details, warm light. Keep the background genuinely transparent, exactly like image 2. Export PNG with alpha channel. No floor, no backdrop.


## luna

- Workspace: C:/Users/jeoun/OneDrive/바탕 화면/고양이양이/assets/wardrobe/luna.png
- Accepted source: C:\Users\jeoun\.codex\generated_images\01a07e93-4280-7fd2-b12e-caf2e32bd891\exec-ab7295d9-0460-43b8-9d77-936db5adf37d.png
- References: assets/cats/luna.png
- QA: Visual: original solid gray British Shorthair identity and four distinct garments preserved. Initial TL stray vest patch removed via built-in edit; drawn checkerboard rejected and extracted to actual Format32bppArgb, corner/background A=0. Cats fill cells tightly but ears, paws and tails remain inside quadrants; source crop should be no more than 2px.
- Rejected initial source: C:\Users\jeoun\.codex\generated_images\01a07e93-4280-7fd2-b12e-caf2e32bd891\exec-d89fdb8d-3595-4068-a213-a4e4c2e00c99.png

### Exact original prompt

Use case: identity-preserve. Asset type: transparent PNG cat costume atlas for a cozy 2D game. Reference image is the exact original cat. Create ONE square 2x2 sheet, FOUR EXACT EQUAL SQUARE quadrants each containing the SAME whole cat in the SAME ORIGINAL seated pose and scale from the reference, with identical face, solid blue-gray plush fur, copper amber eye color, silhouette, paw placement, left curled tail and head tilt. Subject Luna, a plush blue-gray British Shorthair kitten with round copper amber eyes, charcoal nose, rounded face, solid gray dense fur and tail curled to the left. The only difference is the worn garment. TL: small elegant dusty-rose ribbon bow on soft narrow collar centered under chin. TR: short sage-green triangular linen bandana around neck. BL: pale-lilac light knitted sleeveless vest fitted gently on torso, visible knit texture. BR: ivory lightweight sailor shirt on torso with small muted-navy sailor collar, no hat. Four clearly distinct garments, comfortable and small enough to preserve anatomy and visible limbs, head and tail. Each FULL CAT independently isolated, centered within its quadrant with transparent safe margin, no overlap across cells, all ears whiskers paws tail fully uncut. Output transparent PNG with real alpha channel and absolutely no background, no scene, no floor, no outside shadows, no text or lines. Same premium softly luminous painterly detailed fur as reference, consistent camera and lighting across cells. Requested square 2048x2048.

### Accepted repair prompt

Remove the background entirely. Make this a transparent PNG with a real alpha channel. Keep only the four cats and their clothing. Retain every fur edge, exact positions and the square 2x2 layout.

### Additional generation attempts

Source: C:\Users\jeoun\.codex\generated_images\01a07e93-4280-7fd2-b12e-caf2e32bd891\exec-f3620c07-3e4c-4984-ab40-e8ecc53e7473.png

Edit this cat costume atlas: In TOP LEFT quadrant only, remove the stray lilac fabric patch on the torso and restore the cat's plain blue-gray fur there; that cat wears ONLY its dusty-pink ribbon collar. Keep all other three cats and clothes exactly unchanged. Also remove the background entirely and output genuine transparent PNG with real alpha channel; keep only the four complete cats and clothes. Preserve exact 2x2 positions, scale, faces, tails and square canvas.

