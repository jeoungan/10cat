# 밤이 니트 · 첫 자세 꼬리 방향 수정

원본 출력: C:/Users/jeoun/.codex/generated_images/01a07f11-3707-75c0-9cbf-6620f96a4e33/exec-c458b0d8-4491-4f32-b646-48e5e57cc610.png
프로젝트 후보: assets/motion/wearing/bam/vest/pet-v2.png
제작 담당 확인: 상좌 꼬리가 나머지 세 자세와 동일하게 왼쪽으로 수정됨. 얼굴/손/옷/방 구도와 네 자세 차이 유지.

최종 승인: root가 수정 원본을 독립 재검토하고 명시 승인. 네 프레임 꼬리 방향이 일치하며 니트/얼굴/손/발/여백 유지 확인. 이전 원본을 pet-original.png에 보존하고 승인된 pet-v2.png를 pet.png로 복사한 뒤 bam/vest/pet 카탈로그 등록.

제작: built-in image_gen. root가 상좌만 꼬리가 반대방향인 연속성 문제를 발견. 나머지 장면과 같은 왼쪽 꼬리 방향으로 첫 자세만 편집.

입력: assets/motion/wearing/bam/vest/pet.png.

정확한 프롬프트:

```text
Use case: precise-object-edit.
Edit target: this supplied square 2 by 2 petting atlas of Bam, a glossy black cat wearing a fitted lavender knitted vest.
Make ONE targeted continuity correction ONLY in the TOP-LEFT panel: the cat's curved black tail currently sticks out to the VIEWER'S RIGHT. Move that tail to the VIEWER'S LEFT side of the seated cat, with its base behind the left-visible haunch and a small upward-curled tip, matching the tail placement and curve already shown in the TOP-RIGHT, BOTTOM-LEFT and BOTTOM-RIGHT panels. There must be exactly one tail in each panel, and no remaining right-side tail in the top-left. Fill its old position naturally with the existing woven rug.
Keep everything else unchanged as closely as possible: all three other panels including their tails, the top-left cat's face, golden eyes, head tilt, body, paws, lavender knit design/neckline/armholes, human hand approaching above, lighting, sofa, woven rug, plants, camera, scale and framing. The four petting expressions and hand positions must remain distinct. No mirroring of the whole cat or whole panel. Do not move the paws, hand, face or clothing. Do not change the garment color, knit pattern, warmth or black fur.
Return the entire original-style square 2×2 atlas with the exact same centered boundaries, only the top-left tail position corrected to viewer-left for consistent animation. No text, watermark, new objects or extra limbs.
```
