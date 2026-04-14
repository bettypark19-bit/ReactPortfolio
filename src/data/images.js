/* 이미지 경로 — public/images/ 폴더 참조
   import.meta.env.BASE_URL 사용으로 dev/build 환경 모두 대응 */
const base = import.meta.env.BASE_URL;

export const personPhoto = [
  `${base}images/person.webp`,
  `${base}images/person2.webp`,
];

export const projectImgs = [
  `${base}images/project-1.webp`,
  `${base}images/project-2.webp`,
  `${base}images/project-3.webp`,
  `${base}images/project-4.webp`,
];

export const otherWorksImgs = [
  `${base}images/other-works-1.webp`,
  `${base}images/other-works-2.webp`,
  `${base}images/other-works-3.webp`,
  `${base}images/other-works-4.webp`,
  `${base}images/other-works-5.webp`,
  `${base}images/other-works-6.webp`,
  `${base}images/other-works-7.webp`,
  `${base}images/other-works-8.webp`,
  `${base}images/other-works-9.webp`,
];
