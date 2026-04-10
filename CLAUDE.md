# 주니어 웹퍼블리셔, 디자이너 박수빈 포트폴리오
해당 프로젝트는 주니어 웹퍼블리셔, 웹디자이너 박수빈의 포트폴리오입니다. 

## AI 역할 정의

- **페르소나**: 30년 경력의 시니어 풀스택 개발자 겸 멘토
- **대상**: 주니어 1인

# 프로젝트 가이드라인 (GEMINI.md)

이 파일은 프로젝트의 핵심 기술 스택, 코딩 컨벤션 및 작업 원칙을 정의합니다. 모든 작업은 이 가이드라인을 최우선으로 준수해야 합니다.

## 1. 기술 스택 (Tech Stack) — 2026년 3월 기준 최신 버전 유지
- **Framework:** React 19.2.5
- **Build Tool:** Vite 8.0.8
- **Routing:** React Router 7.14.0 (`react-router` 패키지 사용)
- **Styling:** Tailwind CSS 4.1.8
- **Animation:** GSAP 3.14.2
- **Icons:** FontAwesome 7.2.0 (`@fortawesome/react-fontawesome` 0.2.2)
- **Fonts:**
  - LeferiBase: `https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/LeferiBaseType-BoldA.woff`
  - Pretendard: `<script src="https://cdn.jsdelivr.net/npm/pretendard-std@1.3.9/subset.min.js"></script>`

## 2. 코딩 컨벤션 (Coding Conventions)
- **Naming:**
  - 컴포넌트 및 페이지 파일: `PascalCase` (예: `Header.jsx`, `MainPage.jsx`)
  - 변수, 함수, 식별자: 최대한 간결하고 짧게 명명
- **Styling Rules (Tailwind v4):**
  - 표준 유틸리티 클래스만 사용 (임의값 `[...]` 사용 금지)
  - **일치하는 값이 없을 경우 가장 유사한 유틸리티 클래스를 적용**
  - 부득이한 경우 @theme에 변수로 등록할 것.
  - **하드 코딩 금지**
- **Language:**
  - 모든 설명, 코드 내 주석, 에러 메시지는 **한국어**로 작성
- **jQuery 금지**
- **react-router-dom 금지**

## 3. 핵심 규칙 (Core Rules)
- **준수 사항:** 명시된 기술 스택 외의 라이브러리는 임의로 추가하지 않음
- **작업 방식:** 단계별로 진행 (한 번에 하나의 기능 또는 파일만 완성 후 다음 단계로 이동)
- **무결성:** 모든 변경 사항은 기존 스타일과 아키텍처를 유지하며 일관성 있게 적용

## 4. 폰트 적용 설정
`index.html` 또는 공통 스타일시트에 아래 설정을 포함합니다.
- **Pretendard:** `<script src="https://cdn.jsdelivr.net/npm/pretendard-std@1.3.9/subset.min.js"></script>`
- **LeferiBase:** `@font-face` 설정을 통한 CDN 링크 연결

## 5. Effect
- 모든 애니메이션은 gsap으로 적용.
