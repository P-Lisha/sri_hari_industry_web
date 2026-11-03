/* Generates optimized WebP hero backgrounds from public/images/hero-N.jpg sources.
   Writes hero-N.webp at 1920w (quality 78) — full-bleed hero banner.
   Run:  node scripts/gen-hero-images.mjs
   Re-run after replacing any hero-N.jpg source photo.
   Current heroes — SHI's own completed commercial-kitchen projects (full-room
   stainless-steel installations), copied from public/images/work-1/2/3.jpg:
     hero-1 = work-1 (cooking & prep line).
   hero-2 = work-3 (same own-kitchen photo series as slide 1, so the two match in tone/style;
   "Food Processing & Kitchen Machinery" slide). hero-3 = Unsplash rO6709B116E (bright
   all-stainless warewashing facility, Ricardo Gomez Angel; Unsplash License). */
import sharp from 'sharp';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const DIR = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'images');

for (const n of [1, 2, 3]) {
  const src = join(DIR, `hero-${n}.jpg`);
  if (!existsSync(src)) continue;
  const info = await sharp(src)
    .resize({ width: 1920, withoutEnlargement: true })
    .webp({ quality: 78 })
    .toFile(join(DIR, `hero-${n}.webp`));
  console.log(`wrote hero-${n}.webp`, `${info.width}x${info.height}`, `${Math.round(info.size / 1024)}KB`);
}
