# Wardrobe v2 natural design — Bori, Mochi, Luna, Nabi

Built-in image_gen only. No raster postprocessing. Generated originals preserved, accepted assets copied unchanged into the workspace. 2026-09-08. User asked for clothes that look naturally worn rather than composited and interactions while dressed.

## Bori approved design

Workspace: `assets/wardrobe-v2/bori-design.png`. Reference 1: `assets/cats/bori.png` (identity), reference 2: `assets/motion/pet/bori.png` (warm painterly rendering). Both inspected before generation.

Four styles in TL/TR/BL/BR order: small asymmetrical cotton rose bow, light small sage kerchief, thin relaxed lilac knit vest, small ivory sailor collar with muted blue line. The sailor ID is preserved but the visual is a collar, not a shirt. Visual reviewer wardrobe_visual_review approved design after the third iteration; transparency and runtime integration reviewed separately.

Actual output 1254×1254, genuine RGBA32 alpha. Four627×627cells. Corner alpha0, middle column maxalpha0, middle row maxalpha1. Sample every4px: alpha0=62050, alpha>250=30708. SHA256 `C0FCA2195C78DD9824405F93CA15989CD11675EC48D22C9788A7AA5AB263543B`. Requested2048wasnotdelivered; no artificial resizing. Earlier three candidates have drawn RGB checkerboards and are not used by the app.

### Initial natural design

Source: `C:/Users/jeoun/.codex/generated_images/01a07f10-d352-79a2-8cbf-4a1a36cd9f9f/exec-3d464e83-7660-47b3-a5a5-43daba66d698.png`

Exact prompt:

Use case: identity-preserve. Asset type: four-style costume concept atlas for a premium cozy illustrated cat care game. Input image 1 is the exact cat identity and seated pose. Input image 2 is a reference for the soft warm painterly rendering only; do not copy its background or human hand. Create one square 2 by 2 atlas on genuinely transparent PNG alpha, each equal square cell containing a complete full-body illustration of this same orange tabby kitten Bori, in the same seated pose, golden eyes, white muzzle/chest/toes, original head tilt and tail curling up on the right. Redesign the garments so the complete cat and clothing read as one lovingly painted illustration, not a pasted-on costume. Keep the face, anatomy, markings and warm light consistent in all four cells. Top left: a small asymmetrically tied dusty-rose matte cotton bow on a very narrow soft collar, partially nestled into neck fur, short naturally drooping tails; no glossy satin. Top right: a thin pale-sage gauze kerchief loosely wrapped around the neck, a small soft draped point with subtle uneven folds, only a modest area of chest covered. Bottom left: a very light pale-lilac fine-knit sleeveless cat vest, softly relaxed with little natural folds and roomy openings around the forelegs, short hem draping along the feline torso, minimal fine knit rather than bulky cable knit; no tight harness edges or stiff human bodice. Bottom right: a short lightweight ivory cotton sailor-inspired cat top with a small soft rounded collar edged with one fine muted blue line and tiny short tie; relaxed draping against rounded feline shoulders, absolutely no human shoulder shape or jutting sleeves. For every garment, a few fine tufts of neck and chest fur overlap the cloth edge, soft contact shadows connect the fabric to the body, cloth follows curved animal anatomy, textile and fur share exactly the same warm light and delicate painterly brushwork. Beautiful restrained cozy design, not elaborate fancy dress. Each entire cat including ears, whiskers, paws and tail has a generous clear transparent margin of at least 10 percent of each cell; no part touches or crosses a quadrant boundary. Exactly four distinct complete cats, one outfit per cat, no mixing garments. No ground, backdrop, floor shadow, swatches, props, panels, grid lines, labels, lettering, or watermark. True transparency, not a drawn checkerboard. Requested square 2048 by 2048.

### Reduce garment silhouette

Source: `C:/Users/jeoun/.codex/generated_images/01a07f10-d352-79a2-8cbf-4a1a36cd9f9f/exec-4c790325-9934-4136-b44a-5821bd40bbd8.png`

Exact prompt:

Use case: precise-object-edit. Refine only the clothing in the supplied 2x2 cat sheet so the cats look comfortably dressed, not like cut-out heads on human clothing. Preserve all four original cat faces, expressions, fur patterns, full seated poses, paws, tail shapes, warm painterly lighting, cell positions and scale. Top left bow: keep its delicate muted cotton design, but make the bow and tails about one quarter smaller and let neck fluff naturally overlap the upper collar edge. Top right sage kerchief: reduce the chest coverage by 40 percent; it is a small airy neck scarf, not a large bib, with delicate loose folds and chest fur visible below and brushing over the edge. Bottom left lilac vest: specifically replace the thick raised ribbed piping around neck and foreleg holes with very thin soft knitted hems, paint a few fur tufts naturally overlapping the openings, give the fabric subtle loose folds along the flank instead of a stretched harness shape. Bottom right ivory sailor top: eliminate the broad projecting sleeves entirely and reduce the collar to a small curved sailor-inspired collar; the soft lightweight top follows the cat's narrow rounded shoulders, no wide human shoulders, no horizontal sleeve silhouette. Keep ivory fabric and the one thin gray-blue line and tiny tie. Render clothing and cats together with the same delicate realistic painterly brushwork, natural contact shadows and soft sunlight; retain visible legs and original feline anatomy. Also replace the entire drawn checkerboard with a truly transparent alpha PNG background, only the four complete cats and their clothing remain. Do not change the exact square 2x2 cell arrangement; retain clear empty margins around all cats and between rows. No clipping, background, grid, text or watermark.

### Soften knit contact edges

Source: `C:/Users/jeoun/.codex/generated_images/01a07f10-d352-79a2-8cbf-4a1a36cd9f9f/exec-2a0c1612-ae3f-41a7-9cd6-f643d10fb188.png`

Exact prompt:

Use case: precise-object-edit. In the supplied four-cat costume atlas, change ONLY the lower-left cat's lilac vest neckline and foreleg-hole edges. All four cats, their faces, proportions, poses, position and scale and the other three outfits must remain exactly the same. Make this fine-knit vest look painted together with the cat: remove the thick continuous raised ribbed piping, replace it with a very thin soft knitted hem of the same pale lilac fabric. At five to ten little places around the neckline and visible foreleg opening, paint short natural ginger/cream fur tufts from the cat overlapping the cloth hem, interrupting the boundary organically. Small soft contact shadows and relaxed wrinkles at the side; the fabric should rest loosely on fur, never look like a rigid harness or a pasted geometric bib. Preserve the original feline anatomy and thin knit material. Do not change the bow, sage scarf, or small ivory sailor collar. Preserve the full square sheet, exact 2x2 layout and all complete ears, tails and paws. No new objects, text or borders.

### Accepted transparent extraction

Source: `C:/Users/jeoun/.codex/generated_images/01a07f10-d352-79a2-8cbf-4a1a36cd9f9f/exec-95e8812f-1710-4035-a05d-eb4536e261f9.png`

Exact prompt:

Use case: background-extraction. Remove the entire checkerboard background from the supplied four-cat wardrobe sheet. Output a PNG with REAL TRANSPARENCY in the alpha channel: every pixel outside the four cats is transparent. Keep only the four cats and their clothing. Preserve exact faces, fur, garment details, warm colors, complete ears/whiskers/paws/tails, positions, scale and square 2x2 arrangement. No restyling, no new drawing, no flat backdrop, no checkerboard, no floor, no cast shadow, no halo or residue.

