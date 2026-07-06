# Sri Hari Industries — Website (Next.js + React)

Professional, SEO-optimised marketing site for **Sri Hari Industries**, commercial
kitchen equipment manufacturers in Coimbatore. **Corporate Royal Blue** theme.

## Stack
- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- `next/font` (Outfit + Poppins, self-hosted, no render-blocking)
- Pure CSS design system in `app/globals.css`
- Fully static (prerendered) — deploys anywhere (Vercel / static host)

## Run locally
```bash
cd web
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

> If `npm install` fails with `UNABLE_TO_VERIFY_LEAF_SIGNATURE` (corporate SSL
> proxy), point Node at the system root certificates instead of disabling TLS:
> `export NODE_EXTRA_CA_CERTS=./.certs/win-roots.pem` (a machine-specific bundle;
> not committed). Generate one from the Windows trust store if missing.

## Where things live
| What | File |
|------|------|
| Business / contact details | `lib/site.ts` |
| Product catalogue (add products here) | `lib/data.ts` |
| Page assembly | `app/page.tsx` |
| SEO metadata (title, OG, Twitter, robots) | `app/layout.tsx` |
| Structured data (JSON-LD LocalBusiness) | `components/JsonLd.tsx` |
| Sitemap / robots | `app/sitemap.ts`, `app/robots.ts` |
| Theme (colours) | `app/globals.css` `:root` block |
| UI sections | `components/*.tsx` |
| Images | `public/images/` |

### Add a product
Edit `lib/data.ts` → add `["Display Name", "image-slug"]` to the right category's
`items`, then drop the photo at `public/images/products/<image-slug>.jpg`.
Optional long form: `["Name", "slug", "description", [features], [["Spec","Value"]]]`.

## SEO included
- Per-page `<title>`, meta description, keywords, canonical
- Open Graph + Twitter Card (image: `/images/hero-1.jpg`)
- JSON-LD: `Organization` + `LocalBusiness` + `Manufacturer` with address, geo,
  contact point, offer catalogue and product list
- `sitemap.xml` + `robots.txt`
- `themeColor`, favicon, semantic landmarks, lazy-loaded images

## Before going live
1. Set the real domain in `lib/site.ts` → `SITE.url`.
2. Replace social URLs in `SITE.social` with the real profiles.
3. Add the brochure PDF at `public/brochure/sri-hari-industries-brochure.pdf`.
4. (Optional) Add a dedicated 1200×630 OG image and update `app/layout.tsx`.
