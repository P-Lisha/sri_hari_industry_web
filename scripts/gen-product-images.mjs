/* Rebuilds public/images/products/<slug>.jpg from the client's official SHI EQUIPMENTS
   render folders. Source photos live OUTSIDE the repo (Downloads) — this is a one-off
   content import, re-run when the client sends updated renders.
   Node >= 18. Uses the `sharp` that ships with Next.
   Run:  node scripts/gen-product-images.mjs */
import sharp from 'sharp';
import { readdirSync, existsSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const HOME = process.env.USERPROFILE || process.env.HOME;
const FOLDERS = [
  join(HOME, 'Downloads', 'SHI EQUIPMENTS 02'),               // newer batch — wins on duplicates
  join(HOME, 'Downloads', 'SHI EQUIPMENTS', 'SHI EQUIPMENTS'),
];
const OUT = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'images', 'products');

/** source file BASENAME (upper-case, no ext) -> product slug */
const MAP = {
  // --- SHI EQUIPMENTS 02 ---
  '3 BURNER INDIAN RANGE': 'three-burner-indian',
  'AUTOMATIC VADA MAKING MACHINE': 'vada-making-machine',
  'BATTER STAND WITH GN PAN': 'batter-table',
  'BBULK COOKING RANGE': 'bulk-cooking-range',
  'CHINESE RANGE': 'chinese-range',
  'COCONUT SCRAPPER': 'coconut-scraper',
  'CORNER SINK': 'corner-sink',
  'DOSA PLATE': 'dosa-plate',
  'DOUBLE BURNER': 'two-burner',
  'ELECTRIC BULK COOKER': 'electric-bulk-cooker',
  'IDIYAPPAM MAKING MACHINE': 'idiyappam-machine',
  'IDLY PLANT': 'janatha-idly-plant',
  'INDUCTION TOP': 'induction-top',
  'KNEADING TABLE': 'kneading-table',
  'MASALA TROLLEY': 'masala-trolley',
  'ONION BIN': 'onion-bin',
  'RICE WASHER': 'rice-washer',
  'SINGLE BURNER': 'single-burner',
  'TANDOORI': 'tandoori',
  'VEG RACK': 'veg-rack',
  'HOT PLATE GRIDDLE': 'hot-plate-griddle',
  'PANIYARAM RANGE': 'paniyaram-range',
  'PLATFORM TROLLEY': 'platform-trolley',
  'PULVERIZER': 'pulverizer',
  'COOK WOK': 'cook-wok',
  'RICE DHAL VESSELS': 'rice-dhal-vessels',
  'AUTOMATIC DOUGH NEEDER WITH BALL CUUTING MACHINE': 'dough-kneader', // combo render
  // --- SHI EQUIPMENTS (nested) ---
  '2 BURNER INDIAN RANGE': 'two-burner-indian',
  '2 SINK UNIT': 'two-sink-unit',
  '3 SINK UNIT': 'three-sink-unit',
  '4 BURNER CONTINENTAL': 'four-burner-continental',
  '4 SEATER DINING TABLE': 'dining-4-seater',
  '6 SEATER DINING TABLE': 'dining-6-seater',
  '8 SEATER DINING TABLE': 'dining-8-seater',
  'BAINMARIE COUNTER': 'bainmarie-counter',
  'BARBEQUE': 'barbeque',
  'BULK COOKER': 'bulk-cooker',
  'CHUTE TABLE': 'chute-table',
  'DEEP FRYER': 'deep-fryer',
  'DINING TABLE': 'dining-table',
  'DISH WASHER': 'dish-washer',
  'GRILLER MACHINE': 'griller',
  'HAND WASH SINK': 'hand-wash',
  'HOT CASE': 'hot-case',
  'IDIYAPPAM MACHINE': 'idiyappam-machine', // dup (02 wins)
  'MASALA GRINDER': 'masala-grinder',
  'MULTI VEG CUTTING MACHINE': 'veg-cutting-machine',
  'ONION PEELER': 'onion-peeler',
  'PICKUP TROLLEY': 'pickup-trolley',
  'PLATE RACK': 'plate-rack',
  'PLATE WARMER': 'plate-warmer',
  'POT RACK': 'pot-rack',
  'ROMALI RANGE': 'romali-range',
  'ROOM SERVICE TROLLEY': 'room-service-trolley',
  'SHAWARMA MACHINE': 'shawarma',
  'TILTING GRINDER': 'tilting-grinder',
  'WASTE COLLECTING TROLLEY': 'waste-collecting-trolley',
  'WORK TABLE WITH OHS': 'work-table-shelf',   // OHS = over-head shelf
  'WORK TABLE WITH SINK': 'worktable-sink',
  'WORK TABLE WITH US': 'work-table-us',       // US = under shelf
  'WORK TOP FREEZER': 'work-top-freezer',
};
/** source basenames intentionally NOT imported (no matching catalogue product) */
const SKIP = new Set(['COCONUT BIN', 'DOG BATH DUB']);

// collect every source image, first folder wins on duplicate slug
const chosen = {}; // slug -> source path
const skipped = [];
for (const dir of FOLDERS) {
  if (!existsSync(dir)) { console.warn('MISSING FOLDER:', dir); continue; }
  for (const f of readdirSync(dir)) {
    if (!/\.(png|jpe?g|webp)$/i.test(f)) continue;
    const base = f.replace(/\.[^.]+$/, '').toUpperCase();
    if (SKIP.has(base)) { skipped.push(f); continue; }
    const slug = MAP[base];
    if (!slug) { skipped.push(f + '  (UNMAPPED)'); continue; }
    if (!chosen[slug]) chosen[slug] = join(dir, f); // 02 listed first → wins
  }
}

let done = 0;
for (const [slug, src] of Object.entries(chosen)) {
  const before = existsSync(join(OUT, `${slug}.jpg`)) ? statSync(join(OUT, `${slug}.jpg`)).size : 0;
  const info = await sharp(src)
    .flatten({ background: '#ffffff' })
    .resize({ width: 1200, withoutEnlargement: true })
    .jpeg({ quality: 85, mozjpeg: true })
    .toFile(join(OUT, `${slug}.jpg`));
  console.log(`✓ ${slug}.jpg  ${info.width}x${info.height}  ${Math.round(info.size / 1024)}KB  (was ${Math.round(before / 1024)}KB)`);
  done++;
}

console.log(`\nImported ${done} product renders from ${FOLDERS.length} folders.`);
if (skipped.length) console.log('Skipped:', skipped.join(', '));
