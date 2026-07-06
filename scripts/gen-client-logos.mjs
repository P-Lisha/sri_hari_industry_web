/* Generates placeholder icon+wordmark SVG logos for the Clients section.
   Run:  node scripts/gen-client-logos.mjs
   Replace each generated file in public/images/clients/ with the client's
   REAL logo when you have it (keep the same file name, or update Clients.tsx). */
import { writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const OUT = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'images', 'clients');
mkdirSync(OUT, { recursive: true });

// icon builders (drawn in a 40-wide slot on the left, stroke = brand colour)
const ICONS = {
  peaks: 'M8 40 V16 l10 13 10-13 V40',                        // M / mountain
  bowl: 'M9 24 q11 0 22 0 a11 11 0 0 1 -22 0 Z',              // bowl
  ring: '', // circle handled specially
  square: 'M9 15 h22 v22 h-22 Z',
  triangle: 'M20 13 L33 38 H7 Z',
  hexagon: 'M20 12 L31 18 V34 L20 40 L9 34 V18 Z',
  diamond: 'M20 12 L32 26 L20 40 L8 26 Z',
  plus: 'M20 14 V38 M8 26 H32',
};

// clients: [name, slug, icon, colour]  — EDIT these to your real clients
const CLIENTS = [
  ['Mahindra',   'mahindra',   'peaks',    '#b32424'],
  ['Annapurna',  'annapurna',  'bowl',     '#0d9347'],
  ['Annathanes', 'annathanes', 'plus',     '#e08a1e'],
  ['Sri Krishna','sri-krishna','ring',     '#2a53a5'],
  ['Saravana',   'saravana',   'square',   '#0e8f8a'],
  ['Anandhaas',  'anandhaas',  'triangle', '#7a3fb8'],
  ['Vasanta',    'vasanta',    'hexagon',  '#c0392b'],
  ['Grand',      'grand',      'diamond',  '#c9962b'],
  ['Aryaas',     'aryaas',     'bowl',     '#0d9347'],
  ['Sangeetha',  'sangeetha',  'ring',     '#2a53a5'],
];

const width = (name) => 60 + name.length * 13; // room for icon + wordmark

for (const [name, slug, icon, colour] of CLIENTS) {
  const w = width(name);
  const iconSvg =
    icon === 'ring'
      ? `<circle cx="19" cy="26" r="11" fill="none" stroke="${colour}" stroke-width="3.2"/>`
      : `<path d="${ICONS[icon]}" fill="none" stroke="${colour}" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>`;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="52" viewBox="0 0 ${w} 52" role="img" aria-label="${name}">
  ${iconSvg}
  <text x="42" y="35" font-family="Poppins, Arial, sans-serif" font-size="23" font-weight="700" letter-spacing=".5" fill="#1f2a44">${name}</text>
</svg>
`;
  writeFileSync(join(OUT, `${slug}.svg`), svg);
  console.log('wrote', `${slug}.svg`);
}
