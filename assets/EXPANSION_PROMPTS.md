# 상호작용과 옷장 확장 — 원본 및 프롬프트

## 현재 의상과 착용 동작 · 2026-09-08 재작업

현재 게임은 `wardrobe-v2/`의 자연스럽게 다시 그린 40착장을 사용합니다. 아래 초기 의상 파일은 제작 이력으로 보존합니다.

- 보리·모찌·루나·나비 의상: [정확한 프롬프트와 원본](wardrobe-v2/PROMPTS.md)
- 시루·오레오·미소 의상: [정확한 프롬프트와 원본](wardrobe-v2/PROMPTS-review-group.md)
- 호두·별이·밤이 의상: [정확한 프롬프트와 원본](wardrobe-v2/PROMPTS-root-group.md)
- 보리 착용 쓰다듬기·그루밍: `motion/wearing/bori/`의 프롬프트 기록
- 모찌 네 착장의 그루밍: [정확한 생성·동작 교정·원본 기록](motion/wearing/mochi/PROMPTS-groom.md)
- 루나 네 착장의 그루밍: [정확한 생성·분할 교정·원본 기록](motion/wearing/luna/PROMPTS-groom.md)
- 나비 네 착장의 그루밍: [정확한 생성·참조·원본 기록](motion/wearing/nabi/PROMPTS-groom.md)
- 모찌·루나·나비·시루·오레오·미소 착용 쓰다듬기: `motion/wearing/{cat}/PROMPTS.md`
- 호두·별이·밤이 착용 쓰다듬기: `motion/wearing/{cat}/{outfit}/PROMPT.md`, 후속 교정 기록은 해당 고양이 폴더에 보존
- 최종 등록 시퀀스 치수·해시·자세 수: [착용 동작 manifest](motion/wearing/manifest.json)
- 실제 투명 의상 원본·프레임·개별 clip: [현재 의상 manifest](wardrobe/manifest.json)

모든 창작·배경 제거·동작 보완은 내장 `image_gen`을 사용했습니다. PNG 픽셀을 외부 도구로 수정하지 않았습니다. 투명도 측정, 원본 해시, 브라우저의 SVG·Canvas 프레임 표시와 실제 UI 스크린샷은 읽기·표시·검증 과정입니다.

## 초기 상호작용과 의상 제작 이력

이번 확장은 내장 `image_gen`으로 제작했습니다. 원본 생성물을 프로젝트에 복사했으며, 실제 투명 배경이 필요한 의상 시트는 같은 도구의 배경 제거 편집으로 보완했습니다. 각 로그에 최종 생성 경로, 정확한 프롬프트, 재시도, 실제 치수와 시각 검토를 기록합니다.

| 담당 고양이 | 먹기 | 물 마시기 | 기지개 | 네 가지 의상 |
|---|---|---|---|---|
| 보리·모찌·루나 | [프롬프트](motion/feed/PROMPTS-a.md) | [프롬프트](motion/drink/PROMPTS-a.md) | [프롬프트](motion/stretch/PROMPTS-a.md) | [프롬프트](wardrobe/PROMPTS-a.md) |
| 나비·시루·오레오 | [프롬프트](motion/feed/PROMPTS-b.md) | [프롬프트](motion/drink/PROMPTS-b.md) | [프롬프트](motion/stretch/PROMPTS-b.md) | [프롬프트](wardrobe/PROMPTS-b.md) |
| 미소·호두·별이·밤이 | [프롬프트](motion/feed/PROMPTS-c.md) | [프롬프트](motion/drink/PROMPTS-c.md) | [프롬프트](motion/stretch/PROMPTS-c.md) | [프롬프트](wardrobe/PROMPTS-c.md) |

컷신 최종 PNG는 `motion/{feed,drink,stretch}/{catId}.png`, 의상 최종 PNG는 `wardrobe/{catId}.png`입니다. 30개 새 동작 시트는 각각4자세, 의상10개 시트는 각각4착용 모습입니다. 의상 순서는 왼쪽 위 리본 목걸이 → 오른쪽 위 스카프 → 왼쪽 아래 니트 베스트 → 오른쪽 아래 세일러 셔츠입니다.

전체 파일의 실제 크기와 SHA-256은 [컷신 manifest](motion/manifest.json), [의상 manifest](wardrobe/manifest.json)에 있습니다. 의상은 원본 시트의 실제 투명 간격에 맞춘 프레임 좌표도 기록합니다. 런타임 SVG는 이 좌표와 원본 비율을 사용하며 귀·꼬리를 자르거나 인접 그림을 표시하지 않습니다.
