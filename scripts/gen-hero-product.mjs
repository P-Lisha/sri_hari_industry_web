/* Builds "product spotlight" hero backgrounds: brand-navy gradient on the left
   (where the headline/CTA sit) + a clean white panel on the right holding a
   product render — so the hero matches the shiny product-catalogue style.
   Output: public/images/hero-1/2/3.webp (1920x1080). No markup change needed —
   the existing full-bleed hero + left dark-gradient overlay still apply.
   Run:  node scripts/gen-hero-product.mjs */
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const HOME = process.env.USERPROFILE || process.env.HOME;
const DL = join(HOME, 'Downloads');
const OUT = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'images');

const W = 1920, H = 1080;
const PANEL_X = 1066;          // white panel starts here (≈55%)
const PANEL_W = W - PANEL_X;
const PAD = 120;               // product padding inside panel

// slide -> product render source (high-res originals from the client's folders)
const SLIDES = [
  { out: 'hero-1', src: join(DL, 'SHI EQUIPMENTS 02', 'CHINESE RANGE.png') },
  { out: 'hero-2', src: join(DL, 'SHI EQUIPMENTS', 'SHI EQUIPMENTS', '4 BURNER CONTINENTAL.png') },
  { out: 'hero-3', src: join(DL, 'SHI EQUIPMENTS', 'SHI EQUIPMENTS', 'BULK COOKER.png') },
];

const bg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="nav" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#20417e"/>
      <stop offset="0.5" stop-color="#132c58"/>
      <stop offset="1" stop-color="#0a1830"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.28" cy="0.32" r="0.6">
      <stop offset="0" stop-color="#2a53a5" stop-opacity="0.45"/>
      <stop offset="1" stop-color="#2a53a5" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="seam" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#05102a" stop-opacity="0"/>
      <stop offset="1" stop-color="#05102a" stop-opacity="0.5"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#nav)"/>
  <rect width="${PANEL_X}" height="${H}" fill="url(#glow)"/>
  <rect x="${PANEL_X - 70}" y="0" width="70" height="${H}" fill="url(#seam)"/>
  <rect x="${PANEL_X}" y="0" width="${PANEL_W}" height="${H}" fill="#ffffff"/>
  <rect x="${PANEL_X - 6}" y="0" width="6" height="${H}" fill="#f6b21b"/>
</svg>`);

for (const { out, src } of SLIDES) {
  // trim the white margin, then fit the product inside the white panel
  const product = await sharp(src)
    .trim({ threshold: 12 })
    .resize({
      width: PANEL_W - PAD * 2,
      height: H - PAD * 2,
      fit: 'inside',
      withoutEnlargement: false,
      background: '#ffffff',
    })
    .flatten({ background: '#ffffff' })
    .toBuffer();
  const pm = await sharp(product).metadata();
  const left = Math.round(PANEL_X + (PANEL_W - pm.width) / 2);
  const top = Math.round((H - pm.height) / 2);

  const info = await sharp(bg)
    .composite([{ input: product, left, top }])
    .webp({ quality: 82 })
    .toFile(join(OUT, `${out}.webp`));
  console.log(`✓ ${out}.webp  ${info.width}x${info.height}  ${Math.round(info.size / 1024)}KB`);
}
