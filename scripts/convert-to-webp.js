/**
 * PNG/JPG → WebP 일괄 변환 스크립트
 * 실행: node scripts/convert-to-webp.js
 */

import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, dirname, basename } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..', 'public', 'images');

// 파일 위치별 최대 너비 설정 (px)
const MAX_WIDTHS = {
  'detail': 1920,   // 상세 페이지 갤러리
  'default': 1200,  // 썸네일, 프로젝트, 프로필
};

// 변환 품질
const QUALITY = 85;

async function getFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await getFiles(full)));
    } else if (/\.(png|jpg|jpeg)$/i.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

function getMaxWidth(filePath) {
  return filePath.includes('detail') ? MAX_WIDTHS.detail : MAX_WIDTHS.default;
}

function toWebpPath(filePath) {
  return filePath.replace(/\.(png|jpg|jpeg)$/i, '.webp');
}

async function convert(filePath) {
  const maxWidth = getMaxWidth(filePath);
  const webpPath = toWebpPath(filePath);
  const originalStat = await stat(filePath);

  try {
    const image = sharp(filePath);
    const meta = await image.metadata();

    // 원본이 maxWidth보다 크면 리사이즈, 아니면 그냥 변환
    const pipeline = meta.width > maxWidth
      ? image.resize({ width: maxWidth, withoutEnlargement: true })
      : image;

    await pipeline.webp({ quality: QUALITY }).toFile(webpPath);

    const newStat = await stat(webpPath);
    const saved = ((originalStat.size - newStat.size) / originalStat.size * 100).toFixed(1);
    const originalKB = (originalStat.size / 1024).toFixed(0);
    const newKB = (newStat.size / 1024).toFixed(0);

    console.log(`✓ ${basename(filePath).padEnd(25)} ${originalKB.padStart(7)}KB → ${newKB.padStart(6)}KB  (${saved}% 절감)`);
  } catch (err) {
    console.error(`✗ ${filePath}: ${err.message}`);
  }
}

async function main() {
  console.log('WebP 변환 시작...\n');
  const files = await getFiles(ROOT);
  console.log(`총 ${files.length}개 파일 변환 예정\n`);

  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of files) {
    const s = await stat(file);
    totalBefore += s.size;
  }

  for (const file of files) {
    await convert(file);
  }

  for (const file of files) {
    const webp = toWebpPath(file);
    try {
      const s = await stat(webp);
      totalAfter += s.size;
    } catch {}
  }

  console.log('\n========================================');
  console.log(`변환 전 총 용량: ${(totalBefore / 1024 / 1024).toFixed(1)} MB`);
  console.log(`변환 후 총 용량: ${(totalAfter / 1024 / 1024).toFixed(1)} MB`);
  console.log(`총 절감량: ${((totalBefore - totalAfter) / 1024 / 1024).toFixed(1)} MB (${((totalBefore - totalAfter) / totalBefore * 100).toFixed(1)}%)`);
  console.log('========================================');
  console.log('\n원본 PNG/JPG 파일은 삭제하지 않았습니다. 확인 후 수동 삭제하세요.');
}

main();
