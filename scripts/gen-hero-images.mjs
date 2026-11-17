/* Generates optimized WebP hero backgrounds from public/images/<name>.jpg sources.
   Writes <name>-hd.webp at up to 1920w (quality 85) — full-bleed hero banner.
   Small sources (<1600w) are gently upscaled to 1600w + sharpened so the browser
   doesn't do the (blurrier) stretching itself.
   Run:  node scripts/gen-hero-images.mjs
   Re-run after replacing any source photo. IMPORTANT: /images/* is served with a
   1-hour browser cache in production (next.config.mjs), so when swapping a photo
   give it a NEW file name (and update Hero.tsx/layout.tsx/JsonLd.tsx) instead of
   overwriting.
   Current heroes — client-supplied photos (Nov 2026):
     hero-kitchen  = bright all-stainless commercial kitchen aisle.
     hero-workshop = stainless-equipment fabrication workshop floor.
     hero-kettles  = production kitchen with steam kettles & processing machinery. */
import sharp from 'sharp';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const DIR = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'images');

/* per-photo lift so darker/greyer shots match the bright slide-1 kitchen */
const ADJUST = {
  'hero-workshop': { brightness: 1.08, saturation: 1.04 },
  'hero-kettles': { brightness: 1.16, saturation: 1.06 },
};

for (const name of ['hero-kitchen', 'hero-workshop', 'hero-kettles']) {
  const src = join(DIR, `${name}.jpg`);
  if (!existsSync(src)) continue;
  const meta = await sharp(src).metadata();
  const small = (meta.width ?? 0) < 1600;
  let pipe = sharp(src).resize({ width: small ? 1600 : 1920, withoutEnlargement: !small, kernel: 'lanczos3' });
  if (ADJUST[name]) pipe = pipe.modulate(ADJUST[name]);
  if (small) pipe = pipe.sharpen({ sigma: 1 });
  const info = await pipe.webp({ quality: 85 }).toFile(join(DIR, `${name}-hd.webp`));
  console.log(`wrote ${name}-hd.webp`, `${info.width}x${info.height}`, `${Math.round(info.size / 1024)}KB`);
}
