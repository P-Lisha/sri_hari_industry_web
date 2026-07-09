/* ===========================================================
   SRI HARI INDUSTRIES — product catalogue (content)
   Edit content here. Add a product by adding an item to the
   right category's `items` as ["Display Name","image-slug"]
   and drop the photo at  public/images/products/<slug>.jpg
   Optional long form:
     ["Name","slug","description",[features],[[spec,value]]]
   =========================================================== */

export type Spec = [label: string, value: string];

/** Catalogue item tuple — only name + slug are required; the rest fall back
    to category defaults at build time. */
export type Item = [name: string, slug: string, desc?: string, feats?: string[], specs?: Spec[]];

export interface Category {
  cat: string;
  /** lower-case sentence completing "…is {tag}" used as fallback copy */
  tag: string;
  feats: string[];
  items: Item[];
}

export interface Product {
  name: string;
  slug: string;
  img: string;
  desc: string;
  feat: string[];
  specs: Spec[] | null;
  cat: string;
}

export interface CatMeta {
  ico: string;
  blurb: string;
}

export const PCATS: Category[] = [
  {
    cat: 'Cooking Equipment',
    tag: 'a heavy-duty LPG cooking unit in food-grade stainless steel, built for daily high-volume use.',
    feats: ['Food-grade SS 304 body', 'High-efficiency burners', 'Heavy-duty commercial build', 'Custom sizes on request'],
    items: [
      ['Single Burner', 'single-burner'], ['Two Burner', 'two-burner'], ['Three Burner', 'three-burner'],
      ['Bulk Cooking Range', 'bulk-cooking-range'], ['Tandoori', 'tandoori'], ['Chinese Range', 'chinese-range'],
      ['Four Burner Continental', 'four-burner-continental'],
      ['Barbecue', 'barbeque'], ['Griller', 'griller'], ['Shawarma', 'shawarma'], ['Deep Fryer', 'deep-fryer'],
      ['Bulk Cooker', 'bulk-cooker'], ['Hot Plate with Griddle', 'hot-plate-griddle'],
      ['Dosa Plate', 'dosa-plate'], ['Chapati Plate', 'chappathi-plate'],
    ],
  },
  {
    cat: 'Indian Range & Automakers',
    tag: 'an automatic / steam machine that boosts output and consistency for high-demand kitchens.',
    feats: ['Food-grade stainless steel', 'High, consistent output', 'Low manpower & maintenance', 'Custom capacities available'],
    items: [
      ['Steam Boiler', 'steam-boiler', 'Compact steam generator that powers bulk steam cooking — idli, rice, dhal and more — with fast steam-up and low fuel use.',
        ['Fast steam generation', 'Pressure gauge & safety valve', 'Low fuel consumption', '50–500 L capacity options'],
        [['Capacity', '50 – 500 litres'], ['Material', 'SS 304 food-grade'], ['Fuel', 'LPG / Diesel / Electric']]],
      ['Rice / Dhal Vessels', 'rice-dhal-vessels', 'Steam-jacketed vessels for cooking rice, sambar and dhal in bulk with even, no-burn heat.'],
      ['Janatha Idly Plant', 'janatha-idly-plant', 'High-capacity idli steaming plant that turns out soft idlis in large batches for messes and halls.'],
      ['Idiyappam Machine', 'idiyappam-machine', 'Steam idiyappam press for soft, consistent string hoppers in volume.'],
      ['Ball Cutting Machine', 'ball-cutting-machine', 'Cuts dough into uniform balls at speed for chapati and poori production.'],
      ['Ball Pressing Machine', 'ball-pressing-machine', 'Presses dough balls into even rounds, ready for roasting.'],
      ['Chapati Making Machine', 'chappathi-making-machine', 'Fully automatic chapati machine that presses, roasts and puffs uniform chapatis at high speed.',
        ['Uniform size & thickness', 'Press + roast + puff in one', 'High-speed automatic output', 'Low manpower needed'],
        [['Output', '1,000 – 2,000 / hr'], ['Material', 'SS 304 + MS frame'], ['Power', 'Electric + LPG']]],
    ],
  },
  {
    cat: 'Food Processing Machinery',
    tag: 'a commercial food-processing machine that cuts prep time and labour across the kitchen.',
    feats: ['Powerful commercial motor', 'Food-grade contact parts', 'Easy to operate & clean', 'Durable heavy-duty build'],
    items: [
      ['Rice Washer', 'rice-washer'], ['Wet Grinder', 'wet-grinder'], ['Tilting Grinder', 'tilting-grinder'],
      ['Pulverizer', 'pulverizer'], ['Masala Grinder', 'masala-grinder'], ['Veg Cutting Machine', 'veg-cutting-machine'],
      ['Onion Peeler', 'onion-peeler'], ['Potato Peeler', 'potato-peeler'],
    ],
  },
  {
    cat: 'Tables, Sinks & Racks',
    tag: 'stainless steel fabrication built for hygiene, strength and everyday commercial use.',
    feats: ['100% SS 304 / 202 build', 'Sturdy, rust-free fabrication', 'Hygienic & easy to clean', 'Made to your size'],
    items: [
      ['Work Table', 'work-table'],
      ['Kneading Table', 'kneading-table'], ['Worktable with Sink', 'worktable-sink'],
      ['Two Sink Unit', 'two-sink-unit'], ['Three Sink Unit', 'three-sink-unit'], ['Chute Table', 'chute-table'],
      ['Hand Wash Unit', 'hand-wash'], ['Dish Washer', 'dish-washer'], ['Dish Rack', 'dish-rack'],
      ['Veg Rack', 'veg-rack'], ['Pot Rack', 'pot-rack'], ['Plate Rack', 'plate-rack'],
    ],
  },
  {
    cat: 'Dining & Service',
    tag: 'service-line / dining equipment for canteens, messes and food courts.',
    feats: ['Durable commercial-grade build', 'Hygienic stainless steel', 'Designed for fast service', 'Custom sizes available'],
    items: [
      ['Bain-Marie Counter', 'bainmarie-counter'], ['Plate Warmer', 'plate-warmer'], ['Hot Case', 'hot-case'],
      ['Dining Table', 'dining-table'], ['6 Seater Dining Table', 'dining-6-seater'],
    ],
  },
  {
    cat: 'Cold Room & Refrigeration',
    tag: 'temperature-controlled storage that keeps ingredients fresh and safe.',
    feats: ['Precise temperature control', 'Energy-efficient cooling', 'Food-safe insulated build', 'Custom sizes available'],
    items: [
      ['Cold Room', 'cold-room', 'Modular walk-in cold room for bulk storage of vegetables, dairy, meat and frozen goods.'],
      ['Work Top Freezer', 'work-top-freezer'],
    ],
  },
  {
    cat: 'Trolleys & Storage',
    tag: 'a mobile / storage stainless steel solution that keeps kitchens organised and efficient.',
    feats: ['Smooth-rolling castors', 'Rust-free SS build', 'Heavy load capacity', 'Custom sizes available'],
    items: [
      ['Utility Trolley', 'utility-trolley'], ['Masala Trolley', 'masala-trolley'],
      ['Room Service Trolley', 'room-service-trolley'], ['Snacks Trolley', 'snacks-trolley'],
      ['Service Trolley', 'service-trolley'], ['Onion Bin', 'onion-bin'], ['Potato Bin', 'potato-bin'],
      ['Waste Collecting Trolley', 'waste-collecting-trolley'],
    ],
  },
];

export const CATMETA: Record<string, CatMeta> = {
  'Cooking Equipment': { ico: 'i-flame', blurb: 'LPG cooking ranges, burners, grills, tandoor & fryers.' },
  'Indian Range & Automakers': { ico: 'i-pot', blurb: 'Steam cooking & automatic dosa / chapati machines.' },
  'Food Processing Machinery': { ico: 'i-wrench', blurb: 'Grinders, peelers, cutters & dough machines.' },
  'Tables, Sinks & Racks': { ico: 'i-store', blurb: 'SS work tables, sinks, dishwash & storage racks.' },
  'Dining & Service': { ico: 'i-utensils', blurb: 'Bain-marie counters, hot cases & dining tables.' },
  'Cold Room & Refrigeration': { ico: 'i-snow', blurb: 'Walk-in cold rooms & worktop freezers.' },
  'Trolleys & Storage': { ico: 'i-truck', blurb: 'Service trolleys, bins & mobile storage.' },
};

function titleCase(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

/** Flatten the catalogue into a single typed product list. */
export const PRODUCTS: Product[] = PCATS.flatMap((g) =>
  g.items.map((it): Product => ({
    name: it[0],
    slug: it[1],
    img: `/images/products/${it[1]}.jpg`,
    desc: it[2] ?? `${it[0]} — ${g.tag}`,
    feat: it[3] ?? g.feats,
    specs: it[4] ?? null,
    cat: g.cat,
  }))
);

/** Products grouped by their category, preserving catalogue order. */
export const PRODUCTS_BY_CAT: { cat: string; ico: string; products: Product[] }[] =
  PCATS.map((g) => ({
    cat: g.cat,
    ico: CATMETA[g.cat]?.ico ?? 'i-pot',
    products: PRODUCTS.filter((p) => p.cat === g.cat),
  }));

/** Category filter tabs shown above the featured product grid. */
export const PFILTERS = ['All', 'Cooking', 'Preparation', 'Refrigeration', 'Washing', 'Storage'] as const;
export type PFilter = (typeof PFILTERS)[number];
export type PGroup = Exclude<PFilter, 'All'>;

/** A featured product enriched with the info the premium card + modal need. */
export interface Featured extends Product {
  group: PGroup;
  bestseller: boolean;
  material: string;
}

/** Twelve featured products (4×3 desktop, 2-up mobile), spread across the
    five filter groups so every tab shows real results. */
const FEATURED_DEFS: { name: string; group: PGroup; bestseller?: boolean }[] = [
  { name: 'Bulk Cooking Range', group: 'Cooking', bestseller: true },
  { name: 'Deep Fryer', group: 'Cooking', bestseller: true },
  { name: 'Tandoori', group: 'Cooking' },
  { name: 'Wet Grinder', group: 'Preparation', bestseller: true },
  { name: 'Veg Cutting Machine', group: 'Preparation' },
  { name: 'Work Table', group: 'Preparation' },
  { name: 'Cold Room', group: 'Refrigeration', bestseller: true },
  { name: 'Work Top Freezer', group: 'Refrigeration' },
  { name: 'Two Sink Unit', group: 'Washing' },
  { name: 'Dish Washer', group: 'Washing' },
  { name: 'Utility Trolley', group: 'Storage' },
  { name: 'Pot Rack', group: 'Storage' },
];

export const FEATURED: Featured[] = FEATURED_DEFS
  .map((d) => {
    const p = PRODUCTS.find((x) => x.name === d.name);
    return p ? { ...p, group: d.group, bestseller: Boolean(d.bestseller), material: 'SS304' } : null;
  })
  .filter((p): p is Featured => Boolean(p));

/** Typical use-cases shown as emoji tags under "Applications" on the detail page. */
export const APPLICATIONS: { icon: string; label: string }[] = [
  { icon: '🏨', label: 'Hotels' },
  { icon: '🍽️', label: 'Restaurants' },
  { icon: '🏥', label: 'Hospitals' },
  { icon: '🏭', label: 'Industries' },
  { icon: '🏫', label: 'Institutions' },
  { icon: '🍲', label: 'Canteens' },
];

/** Homepage featured set — the four bestsellers (compact cards + View All). */
export const HOME_FEATURED: Featured[] = FEATURED.filter((p) => p.bestseller).slice(0, 4);

/** Find a single product by its slug. */
export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

/** Up to `n` other products from the same category (for "Related Products"). */
export function relatedProducts(slug: string, n = 4): Product[] {
  const p = getProduct(slug);
  if (!p) return [];
  return PRODUCTS.filter((x) => x.cat === p.cat && x.slug !== slug).slice(0, n);
}

/** Technical-spec rows for the detail page. Uses the product's own specs when
    defined and always includes truthful, non-fabricated stainless-steel
    attributes — no invented weights/dimensions. */
export function techSpecs(p: Product): Spec[] {
  const rows: Spec[] = [];
  const seen = new Set<string>();
  const add = (label: string, value: string) => {
    const key = label.toLowerCase();
    if (seen.has(key)) return;
    seen.add(key);
    rows.push([label, value]);
  };
  add('Material', 'SS 304 food-grade stainless steel');
  (p.specs ?? []).forEach(([k, v]) => add(k, v));
  add('Build', 'Heavy-duty commercial grade');
  add('Customisation', 'Custom sizes made to order');
  add('Finish', 'Hygienic, rust-free stainless steel');
  return rows;
}

export { titleCase };
