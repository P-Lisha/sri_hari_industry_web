# Sri Hari Industries — Website

Static homepage for **Sri Hari Industries** (Commercial Kitchen Equipment Manufacturers, Coimbatore).
Theme: **Royal Blue + Golden Yellow + Green + White** (matches the brand logo).
Built as a single self-contained `index.html` — no build step, no internet needed (all images are local).

---

## 📁 Folder structure

```
static_UI/
├── index.html          ← the whole website (HTML + CSS + JS inline)
├── vercel.json         ← Vercel static-hosting config
├── README.md           ← this file
└── images/             ← all images used by the site
    ├── logo.jpg                ← SHI logo (nav + footer)
    ├── hero-1.jpg              ← Hero slide 1  (Complete Kitchen Solutions poster)
    ├── hero-2.jpg              ← Hero slide 2  (Gas Cooking Equipments poster)
    ├── hero-3.jpg              ← Hero slide 3  (Food Processing / Exhaust / Cold Room poster)
    ├── poster-performance.jpg  ← About section image
    ├── automakers.jpg          ← Automatic Dosa & Chapati section
    ├── work-1.jpg … work-8.jpg ← "Our Work" auto-scrolling gallery (real kitchens)
    └── design-1/2/3.jpg        ← 3D Kitchen Design section
```

---

## 🖼️ Which image goes where (image → content map)

| Place on page | Image file | What it shows |
|---|---|---|
| Navbar / Footer logo | `logo.jpg` | SHI blue-green "S" logo |
| Hero slide 1 (auto) | `hero-1.jpg` | "Complete Kitchen Solutions, Premium Quality" |
| Hero slide 2 (auto) | `hero-2.jpg` | "Gas Cooking Equipments — All your kitchen needs" |
| Hero slide 3 (auto) | `hero-3.jpg` | Food Processing / Exhaust / Cold Room range |
| Our Work gallery (auto-scroll) | `work-1.jpg`–`work-8.jpg` | Real installed commercial kitchens |
| Automatic Dosa/Chapati | `automakers.jpg` | Automaker machines |
| Turnkey Design | `design-1/2/3.jpg` | 3D kitchen + exhaust layouts |
| About | `poster-performance.jpg` | Branded kitchen poster |

### How to add or replace an image
1. Drop the new image into the `images/` folder.
2. Keep the **same file name** to auto-replace (e.g. overwrite `work-3.jpg`), **or**
3. Use a new name and update the matching `src="images/…"` line in `index.html`.
   - Hero slides: search for `class="slide"` (3 of them).
   - Work gallery: search for `marq__item` (each image is listed **twice** — once for the seamless loop, so update both copies).
   - Recommended sizes: hero **1600×900+**, work gallery **700×460+**, design **1000×750+**.

> More extracted images are available in `Downloads/extracted_images/` if you want to swap any in.

---

## 🧱 Product catalog (the single "What We Manufacture" section)

The products section (`id="products"`) is **one unified catalog, split category-wise**
(Cooking Equipment, Indian Range & Automakers, Food Processing Machinery, Tables/Sinks/Racks,
Dining & Service, Cold Room, Trolleys & Storage, Exhaust & Fresh Air). Each category shows a grid
of **individual product cards** using the **real photos cropped from the company brochure**
(`images/products/`). Clicking a card (or the **+**) opens a detail popup with the matching
photo, description, specs and WhatsApp/Quote buttons.

The catalog is **data-driven**. To add / edit / reorder products or categories, open `index.html`,
search for **`const PCATS=`** and edit the list. Each product is a compact row:

```js
["Display Name", "image-slug", "optional description", ["feature","feature"], [["Spec","value"]]]
```
- `image-slug` → the photo at `images/products/<slug>.jpg`. Drop a new `.jpg` with that name to
  set/replace a photo — **no code change**. Missing photos show a tidy "Photo coming soon" tile
  (currently the **Exhaust & Fresh Air** items, since the brochure's exhaust page couldn't be
  cropped cleanly — add `exhaust-hood.jpg`, `fresh-air-system.jpg`, `axial-flow-fan.jpg`,
  `gas-line.jpg` to fill them).
- Leave off `description`/`features` and the card uses the category's default text.
- Best photo: **single product on a plain white background**, ~**800×800px**.

> All ~71 current product photos were auto-extracted from `brochure.pdf` via `extract_images.py`
> (PyMuPDF) and cropped per page. Re-run that workflow if the brochure is updated.

---

## ▶️ Preview locally
Just double-click `index.html`, **or** run a tiny server (better for testing):
```bash
# from inside the static_UI folder
python -m http.server 8000
# then open http://localhost:8000
```

---

## 🚀 Deploy to Vercel
**Option A — drag & drop (easiest)**
1. Go to https://vercel.com → "Add New… → Project".
2. Drag the whole `static_UI` folder in. Vercel serves it as a static site automatically.

**Option B — CLI**
```bash
npm i -g vercel
cd static_UI
vercel        # follow prompts; accept defaults (framework: Other)
vercel --prod # publish to production
```

**Option C — GitHub**
Push this folder to a GitHub repo, then "Import Project" in Vercel. Every push auto-deploys.

No framework / build command is needed — it's plain static HTML.

---

## ✏️ Editing content
All text (phones, email, address, product names, testimonials) lives directly in `index.html`.
Search for the text you want to change and edit it in place.

Key details currently set:
- Phone: +91 94433 92337 · +91 94422 62783 · +91 86083 78881
- Email: srihariindustriescbe@gmail.com
- Address: 6/23A & 6/23B, Uzhaippalar St, Urumandampalayam, Vellakinar, Coimbatore – 641 029
- ISO 9001:2015 · BNI · IndiaMART Trust Seal · TÜV SÜD
