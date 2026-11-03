/* Generates optimized WebP for the "Kitchens We've Built" gallery (Gallery.tsx).
   For each public/images/work-N.jpg it writes:
     - work-N.webp        full-size showcase image (max 1280w, quality 80)
     - work-N-thumb.webp  small rail thumbnail    (max 360w,  quality 72)
   Run:  node scripts/gen-work-images.mjs
   Re-run after adding/replacing a work-N.jpg source photo. */
import sharp from 'sharp';
import { readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const DIR = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'images');
const sources = readdirSync(DIR).filter((f) => /^work-\d+\.jpg$/i.test(f));

for (const file of sources) {
  const base = file.replace(/\.jpg$/i, '');
  const src = join(DIR, file);

  await sharp(src)
    .resize({ width: 1280, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(join(DIR, `${base}.webp`));

  await sharp(src)
    .resize({ width: 360, withoutEnlargement: true })
    .webp({ quality: 72 })
    .toFile(join(DIR, `${base}-thumb.webp`));

  console.log('wrote', `${base}.webp`, '+', `${base}-thumb.webp`);
}
