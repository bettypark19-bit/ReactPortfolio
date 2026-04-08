# 박수빈 포트폴리오 — 고도화 전략 보고서

작성일: 2026-04-08  
작성 기준: 현재 코드 상태 분석 후 우선순위 기반 전략 설계

---

## 1. 현황 분석

### 1-1. 기술 스택 현황

| 항목 | 명세 | 실제 상태 |
|---|---|---|
| React | 19.x | 정상 — 단일 App.jsx에 전 컴포넌트 집중 |
| Vite | 7.x | 정상 |
| React Router | v7 | 설치됨, **미사용** |
| Tailwind CSS | v4 | 설치됨, **미통합** — CSS는 전부 커스텀 |
| FontAwesome | v6 (React 패키지) | 설치됨, **연결 안 됨** — `<i>` 태그 방식(CDN) 사용 중 |

### 1-2. 구조 현황

```
src/
├── app/
│   └── App.jsx          ← 7개 컴포넌트 전부 이 파일 하나에 존재
├── styles/
│   ├── index.css
│   ├── theme.css        ← CSS 변수 정의 (정비 완료)
│   ├── fonts.css        ← Google Fonts + LeferiPoint CDN
│   └── portfolio.css    ← 전체 스타일 (약 800줄)
└── main.jsx
```

### 1-3. 섹션 구성

| 섹션 | 구현 상태 | 비고 |
|---|---|---|
| Navbar | 완성 | 플로팅 pill 디자인 |
| Hero | 완성 | 인물 사진 + 말풍선 + 장식 원 |
| About | 완성 | Introduce / Personalities / Education 3단 그리드 |
| Skills | 완성 | 자격증 + 구글 PM 스페셜라이제이션 |
| Projects | 완성 | 스크롤 스냅 + opacity/scale 효과 |
| Other Works | 완성 | 가로 드래그 스크롤 |
| Footer | 완성 | CTA 카드 + 연락처 |

---

## 2. 발견된 문제점

### 🔴 높음 (즉시 수정 필요)

#### P1. FontAwesome 아이콘 미작동
- **원인**: `<i className="fa-solid fa-file-lines">` 방식은 FontAwesome CDN 스크립트가 필요한 방식. 현재 `index.html`에 CDN 없음.
- **결과**: 이력서/깃허브 말풍선 아이콘이 화면에 표시 안 됨.
- **해결**: React FontAwesome 컴포넌트(`<FontAwesomeIcon>`) 방식으로 전환 또는 `index.html`에 Kit CDN 추가.
- -> FontAwesome 은 npm 설치 방식으로 사용중임. import 문으로 수정할것

#### P2. 콘텐츠 미완성 (플레이스홀더 잔존)
- 프로젝트 설명이 전부 영어 (Figma 원본 텍스트 그대로): "Covivant is a roommate finder app..."

#### P3. index.html 미완성
- 페이지 타이틀: `React App with CSS`
- 파비콘 없음
- Open Graph / SEO 메타태그 없음

### 🟡 중간 (기능·퀄리티 저하)

#### P4. 컴포넌트 분리 안 됨
- CLAUDE.md 규칙: 파일은 `PascalCase` 분리 원칙 → 미준수

#### P5. Tailwind CSS 미활용
- `@tailwindcss/vite` 플러그인 등록까지 완료됐으나 실제 클래스 사용 없음
- JSX에 `mr-2` 클래스 1곳만 사용 (Tailwind 클래스이지만 CSS 로드 안 됨 → 무효)
- Tailwind를 도입하면서 커스텀 CSS와의 역할 분리가 필요

#### P6. 반응형 불완전
- 모바일(max-width: 900px) 미디어쿼리 일부 누락
- Hero 섹션 모바일 레이아웃 미정의
- Other Works 드래그 UX가 터치에서 불안정할 수 있음

### 🟢 낮음 (경험·완성도 향상)

#### P7. 인터랙션 부재
- 스크롤 진입 애니메이션 없음 (About, Skills, Footer 등 정적)
- Navbar 활성 섹션 하이라이트 없음

#### P8. 접근성
- 이미지 `alt` 일부 부정확 ("BTW Academy Project" → 실제는 한국 프로젝트)
- Navbar 버튼에 `aria-label` 없음
- 키보드 네비게이션 미고려

#### P9. 성능
- 이미지 Lazy Loading 미적용
- 폰트 4종 외부 CDN 로드 (구글 폰트 2개 + Pretendard CDN + LeferiPoint CDN)
- `will-change: transform` 외 성능 최적화 없음

---

## 3. 고도화 전략

전략은 **3단계**로 나눔. 각 단계는 독립적으로 진행 가능.

---

### Phase 1 — 기반 정비 (완성도 확보)
> 지금 당장 배포해도 부끄럽지 않은 상태로 만드는 것이 목표

| 작업 | 파일 | 우선순위 |
|---|---|---|
| FontAwesome `<FontAwesomeIcon>` 컴포넌트로 전환 | App.jsx | 🔴 |
| 프로젝트 설명 한국어로 교체 | App.jsx | 🔴 |
| `index.html` 타이틀, 파비콘, meta 태그 작성 | index.html | 🔴 |
| 이미지 `alt` 텍스트 교정 | App.jsx | 🟡 |

---

### Phase 2 — 구조 개선 (유지보수성 확보)
> 코드가 길어질수록 단일 파일은 병목이 됨. 파일 분리로 협업·수정 용이성 확보.

#### 2-1. 컴포넌트 파일 분리

```
src/
├── app/
│   └── App.jsx              ← 컴포넌트 조합만 담당
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── ExploreSection.jsx
│   └── Footer.jsx
├── data/
│   ├── projects.js          ← projects 배열
│   └── otherWorks.js        ← otherWorksItems 배열
└── styles/
    └── (기존 유지)
```

#### 2-2. Tailwind CSS 역할 정립

두 가지 선택지:

**Option A (권장)** — 레이아웃은 커스텀 CSS, 유틸리티는 Tailwind  
- 복잡한 레이아웃/애니메이션: `portfolio.css` 유지  
- 여백, 텍스트, 색상 유틸리티: Tailwind 클래스 사용  
- `theme.css`의 색상 변수를 `@theme` 블록으로 이전 → `bg-primary`, `text-accent` 등 사용 가능

**Option B** — 전면 Tailwind 전환  
- `portfolio.css`를 점진적으로 Tailwind 클래스로 대체  
- 공수 많음, 복잡한 애니메이션 부분은 CSS 유지 필요

#### 2-3. React Router 활용 (선택적)

현재 단일 페이지 스크롤 구조이므로 라우팅이 필수는 아님.  
단, 프로젝트 상세 페이지를 추가할 계획이라면:

```
/                   → 메인 포트폴리오 페이지
/projects/:id       → 프로젝트 상세 페이지
```

---

### Phase 3 — 퀄리티 강화 (차별화)
> 비슷한 포트폴리오와 차별화되는 인터랙션과 완성도 추가

#### 3-1. 스크롤 진입 애니메이션 (Intersection Observer)

```js
// 예시: 섹션 진입 시 페이드인
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('is-visible');
  });
}, { threshold: 0.15 });
```

대상: About 카드, Skills 필, 푸터 CTA

#### 3-2. Navbar 활성 섹션 하이라이트

스크롤 위치에 따라 현재 섹션의 nav 링크에 active 스타일 적용.  
Intersection Observer로 구현 (라이브러리 없이 가능).

#### 3-3. 프로젝트 상세 모달 또는 페이지

현재 프로젝트 카드가 클릭 불가. 실제 작업물로 연결되는 링크 또는 상세 모달 추가.

#### 3-4. 성능 최적화

```jsx
// 이미지 lazy loading
<img src={proj.image} alt={proj.alt} loading="lazy" />
```

- 폰트: `font-display: swap` 이미 적용됨 (Pretendard CDN)
- LeferiPoint `@font-face`에 `font-display: swap` 추가 필요

#### 3-5. SEO / Open Graph

```html
<!-- index.html -->
<meta name="description" content="주니어 웹퍼블리셔·웹디자이너 박수빈의 포트폴리오" />
<meta property="og:title" content="박수빈 포트폴리오" />
<meta property="og:image" content="/images/og-thumbnail.png" />
```

---

## 4. 작업 우선순위 요약

```
Phase 1 (기반 정비)          → 즉시 진행 권장
  ├─ P1. FontAwesome 연결
  ├─ P2. 콘텐츠 교체
  └─ P3. index.html 완성

Phase 2 (구조 개선)          → Phase 1 완료 후 진행
  ├─ 컴포넌트 파일 분리
  └─ Tailwind 역할 정립 (Option A)

Phase 3 (퀄리티 강화)        → 배포 후 개선
  ├─ 스크롤 애니메이션
  ├─ Navbar 활성 하이라이트
  ├─ 프로젝트 클릭 연결
  ├─ 이미지 lazy loading
  └─ SEO 메타태그
```

---

## 5. 현재 잘 된 것들

- 디자인 방향성 명확 (플로팅 navbar, 말풍선, 스크롤 인터랙션)
- 스크롤 기반 opacity/scale 효과 — 부드럽고 완성도 있음
- 가로 드래그 스크롤 — 터치/마우스 모두 지원, rAF 최적화
- CSS 변수 체계 (theme.css) — 색상 일관성 유지 가능
- 기술 스택 선택 — React 19 + Vite 7 + Tailwind v4 조합은 2026년 기준 적합

---

*이 보고서는 현재 코드 기준으로 작성됨. 콘텐츠(이미지, 텍스트) 업데이트 후 재검토 권장.*
