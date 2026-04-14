# 배포 전 성능 개선 체크리스트

> 배포(push/build) 전 반드시 이 파일을 확인하고 통과한 항목만 배포합니다.

---

## 1. 이미지 최적화

- [ ] 새로 추가한 이미지가 있다면 WebP로 변환 (`node scripts/convert-to-webp.js`)
- [ ] 원본 PNG/JPG 파일 삭제 확인 (`public/images/` 안에 `.png`, `.jpg` 잔존 여부)
- [ ] `<img>` 태그에 `loading="lazy"` 적용 여부 확인 (히어로 이미지 제외)
- [ ] 히어로/LCP 이미지 `<link rel="preload">` 설정 확인 (`index.html`)
- [ ] 이미지 경로가 `../../public/` 하드코딩이 아닌 `/images/` 절대경로 사용 확인

## 2. 폰트 최적화

- [ ] `fonts.css`에 Google Fonts `@import` 없음 확인 (HTML `<link>`로만 로드)
- [ ] 새 폰트 추가 시 `font-display: swap` 포함 여부 확인
- [ ] 실제 사용하지 않는 font-weight 요청 없음 확인

## 3. JS 번들

- [ ] 새 외부 라이브러리 추가 시 `vite.config.js`의 `manualChunks`에 vendor 청크 등록
- [ ] 새 페이지/모달 컴포넌트는 `React.lazy()`로 동적 임포트 확인
- [ ] `npm run build` 실행 후 에러 없음 확인

## 4. GSAP

- [ ] `useEffect`/`useLayoutEffect` 내 GSAP 애니메이션에 cleanup(`ctx.revert()` 또는 `.kill()`) 존재 여부 확인
- [ ] `ScrollTrigger.getAll().kill()` 사용 금지 — 반드시 `gsap.context()` 또는 개별 인스턴스 kill 사용
- [ ] `gsap.registerPlugin()` 중복 호출 없음 확인 (`main.jsx`에서 1회만)

## 5. 보안

- [ ] API 키, 시크릿 값이 소스 코드에 하드코딩되지 않음 확인
- [ ] 민감한 값은 `.env`에만 존재하고, `.gitignore`에 `.env` 등록 확인
- [ ] `git status`로 `.env` 파일이 스테이징에 포함되지 않음 확인

## 6. HTML / SEO

- [ ] `<title>` 태그 내용이 "React App" 등 기본값이 아님 확인
- [ ] `<meta name="description">` 존재 확인
- [ ] `lang="ko"` 설정 확인

## 7. 최종 빌드 확인

```bash
npm run build
```

- [ ] 빌드 성공 (에러 없음)
- [ ] `dist/` 폴더 내 이미지가 WebP인지 확인
- [ ] 번들 크기 이상 증가 없음 확인 (gzip 기준: index.js < 15KB, vendor 총합 < 200KB)

---

## 참고: 현재 번들 기준선 (2026-04-14)

| 파일 | gzip 크기 |
|------|-----------|
| index.js | ~10.7 KB |
| vendor-react | ~87 KB |
| vendor-gsap | ~53 KB |
| vendor-fa | ~28 KB |
| vendor-emailjs | ~1.5 KB |
| CSS | ~7 KB |
| 이미지 총합 | ~6 MB |
