/* 이미지 경로 — public/images/ 폴더 참조
   import.meta.env.BASE_URL 사용으로 dev/build 환경 모두 대응 */
const base = import.meta.env.BASE_URL;

export const personPhoto = [
  `${base}images/person.png`,
  `${base}images/person2.png`,
];

export const projectImgs = [
  `${base}images/project-1.png`,
  `${base}images/project-2.png`,
  `${base}images/project-3.png`,
  `${base}images/project-4.png`,
];

export const otherWorksImgs = [
  `${base}images/other-works-1.png`,
  `${base}images/other-works-2.png`,
  `${base}images/other-works-3.png`,
  `${base}images/other-works-4.png`,
  `${base}images/other-works-5.jpg`,
  `${base}images/other-works-6.jpg`,
  `${base}images/other-works-7.jpg`,
  `${base}images/other-works-8.jpg`,
];
