# 포트폴리오 스타일 가이드

박수빈 포트폴리오의 디자인 시스템 및 컴포넌트 기준을 정의합니다.

---

## 1. 컬러 시스템

모든 색상은 `src/styles/theme.css`의 CSS 변수로 관리합니다. 하드 코딩 금지.

### 핵심 색상

| 변수명 | HEX | 용도 |
|---|---|---|
| `--color-primary` | `#f0f9ff` | 메인 배경 (sky-50) |
| `--color-text-main` | `#100a27` | 기본 텍스트, 버튼 배경 |
| `--color-accent` | `#3b82f6` | 포인트 블루 (blue-500) |
| `--color-white` | `#ffffff` | 카드 배경, 반전 텍스트 |

### 보조 색상

| 변수명 | HEX | 용도 |
|---|---|---|
| `--color-pink` | `#ffb8d1` | 히어로 장식 블롭 |
| `--color-blue-muted` | `#6eb3c9` | About 섹션 포인트 |
| `--color-blue-200` | `#bfdbfe` | 프로젝트 카드 번호, 버튼 테두리 |

### 텍스트 색상

| 변수명 | HEX | 용도 |
|---|---|---|
| `--color-text-secondary` | `#444444` | 본문 설명 텍스트 |
| `--color-text-muted` | `#666666` | 레이블, 흐린 텍스트 |

### 배경 / 테두리

| 변수명 | HEX | 용도 |
|---|---|---|
| `--color-bg-tag` | `#f4f4f4` | 태그·필 배경, 배너 배경 |
| `--color-bg-placeholder` | `#eeeeee` | 이미지 플레이스홀더 |
| `--color-border` | `#e0e0e0` | 태그·카드 테두리 |
| `--color-navbar-bg` | `rgba(255,255,255,0.75)` | 네비바 반투명 배경 |

### 그래디언트

| 변수명 | 값 | 용도 |
|---|---|---|
| `--gradient-connect-from` | `#d6e7ee` | Connect 버튼 시작색 |
| `--gradient-connect-to` | `#014478` | Connect 버튼 끝색 |

```css
/* Connect 버튼 적용 예시 */
background: linear-gradient(90deg, var(--gradient-connect-from) 5.6%, var(--gradient-connect-to) 105.61%);

/* 네비 로고 적용 예시 */
background: linear-gradient(135deg, var(--color-accent), var(--color-primary));
```

### 히어로 블롭 색상

| 클래스 | 색상 | 크기 |
|---|---|---|
| `.blob-blue` | `#a5e8fc` | 400×400px |
| `.blob-pink` | `#ffd6e4` | 350×350px |
| `.blob-accent` | `var(--color-accent)` | 300×300px |
| `.blob-white` | `#ffffff` | 250×250px |
| `.blob-light` | `#f2f2f2` | 320×320px |

---

## 2. 타이포그래피

모든 폰트는 `src/styles/fonts.css`에서 로드합니다.

### 폰트 패밀리

| 변수명 | 폰트 | 용도 |
|---|---|---|
| `--font-main` | `Instrument Sans`, `Pretendard` | 본문, UI 기본 폰트 |
| `--font-accent` | `LeferiPoint-BlackA` | 섹션 타이틀 (대문자 장식체) |
| `--font-mono` | `Leferi Base Type` | 프로젝트 번호 (모노스페이스) |

> 한국어 보조 폰트: `Noto Sans KR` (About 섹션 히어로 텍스트)

### 크기 체계

| 용도 | 크기 | 폰트 | 굵기 |
|---|---|---|---|
| 섹션 타이틀 (About, Skills, Projects) | `80px` | `--font-accent` | 900 |
| 히어로 타이틀 | `120px` | `Pretendard` | 200 / 800 |
| About 히어로 문구 | `48px` | `Noto Sans KR` | 800 |
| About 하이라이트 | `56px` | `--font-accent` | normal |
| 프로젝트 번호 | `72px` | `--font-mono` | 400 |
| 프로젝트 카드 제목 | `36px` | `--font-main` | 800 |
| 푸터 CTA 타이틀 | `48px` | `--font-main` | 800 |
| 컬럼 소제목 | `32px` | `--font-accent` | 900 |
| 본문 / 설명 | `18px` | `--font-main` | 400–500 |
| 레이블 / 메타 | `16px` | `--font-main` | 700 |
| 소형 레이블 | `14px` | `--font-main` | 700 |

---

## 3. 간격 & 레이아웃

### 기준 패딩 (섹션 수평 여백)

| 구간 | 패딩 |
|---|---|
| 기본 (≥1200px) | `96px` |
| 중간 (≥900px) | `48px` |
| 모바일 (<900px) | `24px` |

### 섹션 수직 패딩

| 섹션 | 패딩 |
|---|---|
| About | `112px 96px` |
| Skills | `100px 0` |
| Projects | `120px 0` |
| Footer | `100px 96px 140px` |

### 반응형 브레이크포인트

| 기준 | 적용 변경 |
|---|---|
| `max-width: 1200px` | 패딩 축소, 이미지 비율 유지 |
| `max-width: 900px` | 네비 링크 숨김, 카드 1열, 폰트 축소 |

---

## 4. 테두리 반지름 (Border Radius)

| 용도 | 값 |
|---|---|
| 네비바 | `128px` |
| Connect 버튼 | `1600px` |
| About / Skills 섹션 | `96px 96px 0 0` / `0 0 96px 96px` |
| 푸터 CTA 카드 | `80px` |
| 프로젝트 카드 | `64px` |
| 프로젝트 이미지 영역 | `32px` |
| 태그 / 필 / 버튼 | `100px` |
| 채팅 버블 (우측) | `40px 40px 40px 4px` |
| 채팅 버블 (좌측) | `40px 50px 4px 40px` |
| About 아바타 이미지 | `24px` |
| Other Works 카드 | `48px` |
| Other Works 이미지 내부 | `24px` |

---

## 5. 그림자

| 변수명 | 값 | 용도 |
|---|---|---|
| `--shadow-navbar` | `0 8px 32px rgba(0,0,0,0.14)` | 네비바 |
| `--shadow-bubble` | `0 12px 32px rgba(0,0,0,0.12)` | 채팅 버블 |

---

## 6. 컴포넌트 레퍼런스

### Navbar
- 화면 하단 중앙 고정 (`position: fixed; bottom: 28px`)
- 배경: `--color-navbar-bg` + `backdrop-filter: blur(8px)`
- 로고: 그래디언트 원형 `40×40px`
- 링크: 기본 텍스트색, hover 시 `opacity: 0.7`
- Connect 버튼: 그래디언트 배경, 흰색 텍스트

### Hero
- 전체 높이 `100vh`, 최소 `900px`
- 배경: 5종 블롭이 GSAP `random` 애니메이션으로 부유
- 타이틀: 얇은(200) + 굵은(800) 조합, 글자 단위 split 애니메이션
- 채팅 버블 3개: 좌우 배치, `rotate` 변형으로 자연스러운 틸트

### About
- 흰색 배경 카드, 상단 `border-radius: 96px`
- 3열 그리드: Introduce / Personalities / Education
- 포인트 색상: `--color-accent` (연도), `--color-blue-muted` (하이라이트 텍스트)
- 태그: `--color-bg-tag` 배경, hover 시 `--color-primary`로 변경

### Skills
- 흰색 배경, 하단 `border-radius: 96px`
- 스킬 필: `--color-bg-tag` 배경, `border-radius: 100px`
- hover 시 `--color-primary` 배경으로 전환

### Projects
- 배경: `--color-primary`
- 카드: 흰색, `position: sticky`로 스택 효과 (GSAP ScrollTrigger)
- 번호: `--color-blue-200`, `--font-mono`, `72px`
- 메타 레이블: `--color-blue-300` (theme에 추가 예정)
- See All 버튼: `--color-blue-200` 테두리·텍스트, hover 시 `--color-accent` 배경

### Footer
- CTA 카드: 흰색 배경, `border-radius: 80px`
- Start 버튼: `--color-text-main` 배경, 흰색 텍스트
- 협업 배너: `--color-bg-tag` 배경
- 저작권: `opacity: 0.6`

---

## 7. 애니메이션 (GSAP)

> 모든 애니메이션은 GSAP으로 구현합니다 (CSS transition 제외: hover 전환 효과).

| 요소 | 기법 | 설정 |
|---|---|---|
| 히어로 블롭 | `gsap.to` random 이동 | `duration: 8–12s`, `yoyo`, `repeat: -1` |
| 히어로 타이틀 | 글자 단위 split, `y: 100→0` 등장 | `stagger: 0.05`, `ease: power4.out` |
| 히어로 타이틀 퇴장 | `y: 0→-100` | `stagger: 0.03`, `ease: power4.in` |
| 프로젝트 카드 스택 | `ScrollTrigger` scrub | 이전 카드 `scale: 0.9`, `opacity: 0.5` |
| Other Works 가로 스크롤 | GSAP 드래그 | cursor grab 전환 |
| 커스텀 커서 | GSAP follower | dot `6px`, follower `20px` |

### hover 전환 (CSS transition)

```css
transition: opacity 0.2s;   /* 링크, 버튼 */
transition: all 0.2s;       /* 태그, 필 */
transition: transform 0.2s; /* Footer 버튼 */
```

---

## 8. 커스텀 커서

```css
.cursor-dot      { width: 6px;  height: 6px;  background: var(--color-accent); }
.cursor-follower { width: 20px; height: 20px; background: rgba(1,138,190,0.2); }
```

- `body`, `a`, `button`, `.link` 모두 `cursor: none` 적용
- GSAP으로 마우스 좌표 추적, follower는 부드럽게 지연 이동

---

## 9. 아이콘

FontAwesome 사용.

```jsx
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
```

---

## 10. 파일 구조 참조

```
src/
├── styles/
│   ├── index.css       # import 진입점
│   ├── fonts.css       # 폰트 로드
│   ├── theme.css       # CSS 변수 (색상, 폰트, 그림자)
│   └── portfolio.css   # 컴포넌트별 스타일
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── ExploreSection.jsx
│   ├── Footer.jsx
│   └── CustomCursor.jsx
└── app/
    └── App.jsx
```

---

> 새 컴포넌트 추가 시: 변수는 `theme.css`에, 스타일은 `portfolio.css`에, 색상 하드 코딩 금지.
