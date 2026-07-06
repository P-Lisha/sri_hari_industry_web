/* ===========================================================
   Generate web/app/globals.css from the `main` branch stylesheet.
   The main branch IS the desired Blue + Gold + Green professional
   glass theme — so we only rewrite asset paths and font families
   for Next.js; colours are kept exactly as-is.

   Regenerate the source first:
     git show main:css/style.css > web/scripts/main-style.css
   then: node scripts/theme.js
   =========================================================== */
const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, 'main-style.css');
if (!fs.existsSync(srcPath)) {
  console.error('Missing scripts/main-style.css. Run: git show main:css/style.css > web/scripts/main-style.css');
  process.exit(1);
}
let out = fs.readFileSync(srcPath, 'utf8');

const reps = [
  // assets are served from /public root in Next.js
  ['../images/', '/images/'],
  // wire font families to next/font CSS variables
  ["'Outfit',sans-serif", 'var(--font-outfit),system-ui,sans-serif'],
  ["'Poppins',sans-serif", 'var(--font-poppins),system-ui,sans-serif'],
  ["'Poppins'", 'var(--font-poppins)'],
  ["'Outfit'", 'var(--font-outfit)'],
];
for (const [from, to] of reps) out = out.split(from).join(to);

// Footer height reduction (user request) — appended as an override.
const footerTrim = `

/* ===========================================================
   FOOTER — compact height (tight padding / gaps / margins)
   =========================================================== */
.foot{padding:1rem 0 0;font-size:.86rem}
.fcols{gap:.65rem 1.6rem;padding-bottom:.6rem}
.foot h4{margin-bottom:.3rem;font-size:.88rem}
.foot a{margin-bottom:.18rem}
.fabout{margin-bottom:.4rem;line-height:1.4}
.fbrand{margin-bottom:.4rem}
.fbrand__mark{height:34px;width:21px;background-size:auto 34px}
.fcert{margin-top:.35rem;padding:.3rem .65rem}
.fcontact li{margin-bottom:.26rem;line-height:1.35}
.social{gap:.45rem}
.social a{width:31px;height:31px}
.social svg{width:15px;height:15px}
.fbar{padding:.45rem 0;font-size:.76rem}
@media(max-width:900px){.foot{padding:.85rem 0 0}.fcols{gap:.6rem 1.2rem;padding-bottom:.55rem}}

/* ===========================================================
   SEO — hero slides 2 & 3 use <h2.hero__h> (single H1 per page);
   style them identically to the hero <h1>.
   =========================================================== */
.hero .hero__h{font-family:var(--font-poppins),system-ui,sans-serif;font-size:clamp(2rem,5vw,3.4rem);font-weight:800;line-height:1.14;letter-spacing:-.02em;text-shadow:0 2px 20px rgba(0,0,0,.3)}
.hero .hero__h span{color:var(--yellow)}
`;

const header =
  '/* ===========================================================\n' +
  '   AUTO-GENERATED from the `main` branch css/style.css.\n' +
  '   Blue + Gold + Green professional glass theme. Fonts wired\n' +
  '   to next/font vars; asset paths rewritten for /public.\n' +
  '   Regenerate: node scripts/theme.js  (see file header).\n' +
  '   =========================================================== */\n';

fs.writeFileSync(path.join(__dirname, '..', 'app', 'globals.css'), header + out + footerTrim, 'utf8');
console.log('globals.css written -', (header + out + footerTrim).length, 'bytes');
