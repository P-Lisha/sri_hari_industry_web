/* ===========================================================
   SRI HARI INDUSTRIES — product catalogue (content)
   Every product below is backed by a real photo from the
   client's own SHI EQUIPMENTS photo set (see public/images/products).
   Add a product by adding an item to the right category's `items`
   as ["Display Name","image-slug"] and drop the photo at
   public/images/products/<slug>.jpg
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
      // Ordered to match the printed SHI brochure (Marriage Hall → Hotels pages); items not in the brochure follow.
      ['Single Burner', 'single-burner',
        'Single high-pressure LPG burner range in food-grade stainless steel — ideal for boiling, frying and everyday à-la-carte cooking.'],
      ['Two Burner', 'two-burner',
        'Twin high-pressure burner range on a sturdy SS body — cook two vessels side by side for busy South-Indian kitchens.'],
      ['Three Burner', 'three-burner',
        'Three-burner commercial gas range that keeps rice, curry and gravy going at once without slowing service.'],
      ['Bulk Cooking Range', 'bulk-cooking-range',
        'Heavy-duty three-burner bulk cooking range with water taps and a reinforced under-frame for big vessels — made for canteens, messes and catering.'],
      ['Dosa Plate', 'dosa-plate',
        'Flat SS dosa hot-plate (tawa) with even heat spread across the surface for crisp dosa, uttapam and roti.'],
      ['Chapati Plate', 'chappathi-plate', 'Gas-heated SS chapati plate (tawa) on a stand with a wide, even-heat surface for roti, chapati and parotta in bulk.'],
      ['Tandoori', 'tandoori',
        'Stainless-steel tandoor with a clay-lined drum for authentic naan, roti and tandoori grilling at high heat.',
        ['Clay-lined drum', 'Insulated SS outer body', 'High-heat charcoal / gas', 'Skewer set included']],
      ['Chinese Range', 'chinese-range',
        'High-flame Chinese cooking range with a water-cooled top and foot-operated taps, built for fast wok tossing and continuous stir-fry.',
        ['Water-cooled work top', 'Foot-operated water taps', 'High-pressure jet burners', 'Heavy SS 304 fabrication']],
      ['Two Burner Indian Range', 'two-burner-indian', 'Two-burner Indian-style gas range with heavy cast-iron burners and an under-shelf, built for large South-Indian cooking vessels.'],
      ['Three Burner Indian Range', 'three-burner-indian', 'Three-burner Indian-style gas range with an under-shelf, keeping rice, sambar and gravy going side by side.'],
      ['Four Burner Continental', 'four-burner-continental',
        'Four-burner continental range with an open under-shelf — a European-style cooking line for hotels and multi-cuisine kitchens.'],
      ['Barbecue Grill', 'barbeque',
        'Heavy-duty charcoal barbecue grill with an adjustable grate and side shelf for kebabs, tikka and grilled meats.',
        ['Adjustable grill grate', 'Charcoal tray', 'Heavy-duty painted body', 'Open-air commercial grilling']],
      ['Charcoal Griller', 'griller', 'Stainless-steel charcoal griller with a slotted grill grate for kebabs, tikka and barbecue on a tall stand.'],
      ['Shawarma', 'shawarma',
        'Vertical gas shawarma machine with a rotating spit and multiple burners for even roasting of chicken and mutton shawarma.',
        ['Rotating vertical spit', 'Multiple gas burners', 'Adjustable heat zones', 'Drip tray & SS body']],
      ['Deep Fryer', 'deep-fryer',
        'Single-tank electric deep fryer with a wire basket and thermostat control — steady oil temperature for bhaji, fries and fried snacks.',
        ['Stainless-steel oil tank', 'Wire frying basket', 'Thermostat temperature control', 'Countertop electric unit']],
      ['Tilting Bulk Cooker', 'bulk-cooker', 'Tilting bulk cooking kettle with a hand-wheel tilt for easy pouring — cooks rice, sambar and curries in large batches.'],
      ['Hot Plate Griddle', 'hot-plate-griddle', 'Flat-top gas griddle with independent burner controls for dosa, omelette, parotta and grilled sandwiches.'],
      ['Cooking Wok', 'cook-wok',
        'Deep stainless-steel cooking wok on a dedicated high-flame burner — for bulk gravies, biryani and Chinese cooking.'],
      ['Electric Bulk Cooker', 'electric-bulk-cooker', 'Electric steam-jacketed bulk cooking kettle with a hinged lid, control panel and tilt — cooks rice, sambar and curries in large batches with even, flameless heat.',
        ['Steam-jacketed even heating', 'Hinged lid & tilt pour', 'Electric — no open flame', 'SS 304 food-grade build']],
      ['Induction Top', 'induction-top', 'Flat-top commercial induction range with digital temperature control and a backsplash — fast, flameless and energy-efficient cooking for modern commercial kitchens.',
        ['Digital temperature control', 'Flameless & energy-efficient', 'Flat SS cooking top', 'Heavy-duty commercial build']],
    ],
  },
  {
    cat: 'Indian Range & Automakers',
    tag: 'an automatic / steam machine that boosts output and consistency for high-demand kitchens.',
    feats: ['Food-grade stainless steel', 'High, consistent output', 'Low manpower & maintenance', 'Custom capacities available'],
    items: [
      // Ordered to match the printed SHI brochure; items not in the brochure follow.
      ['Steam Boiler', 'steam-boiler', 'Compact steam generator that powers bulk steam cooking — idli, rice, dhal and more — with fast steam-up and low fuel use.',
        ['Fast steam generation', 'Pressure gauge & safety valve', 'Low fuel consumption', '50–500 L capacity options'],
        [['Capacity', '50 – 500 litres'], ['Material', 'SS 304 food-grade'], ['Fuel', 'LPG / Diesel / Electric']]],
      ['Rice / Dhal Vessels', 'rice-dhal-vessels', 'Steam-jacketed vessels for cooking rice, sambar and dhal in bulk with even, no-burn heat.'],
      ['Paniyaram Range', 'paniyaram-range', 'Gas paniyaram (kuzhi paniyaram) range with multiple deep moulds for making round paniyarams and appams in bulk.',
        ['Multiple deep moulds', 'Even gas heating', 'Bulk paniyaram & appam', 'Sturdy SS build']],
      ['Rumali Range', 'romali-range', 'Dome-top rumali roti range that gives the high, even heat needed to cook thin, soft rumali rotis quickly.',
        ['Dome-top high-heat plate', 'Even surface temperature', 'Thin rumali roti in seconds', 'Sturdy SS build']],
      ['Janatha Idli Plant', 'janatha-idly-plant', 'High-capacity idli steaming plant that turns out soft idlis in large batches for messes and halls.'],
      ['Idiyappam Machine', 'idiyappam-machine', 'Steam idiyappam press for soft, consistent string hoppers in volume.'],
      ['Ball Cutting Machine', 'ball-cutting-machine', 'Cuts dough into uniform balls at speed for chapati and poori production.'],
      ['Ball Pressing Machine', 'ball-pressing-machine', 'Dough ball pressing machine that flattens dough balls evenly for chapati and poori production lines.'],
      ['Chapati Making Machine', 'chappathi-making-machine', 'Fully automatic chapati machine that presses, roasts and puffs uniform chapatis at high speed.',
        ['Uniform size & thickness', 'Press + roast + puff in one', 'High-speed automatic output', 'Low manpower needed'],
        [['Output', '1,000 – 2,000 / hr'], ['Material', 'SS 304 + MS frame'], ['Power', 'Electric + LPG']]],
      ['Dosa Making Machine', 'dosa-making-machine', 'Automatic dosa making machine that batters, spreads and roasts uniform dosas continuously — high output with minimal manpower.',
        ['Continuous automatic output', 'Uniform size & thickness', 'Batter spreader + roaster', 'Low manpower operation']],
      ['Vada Making Machine', 'vada-making-machine', 'Vada making machine that shapes perfectly round medu-vadas with a centre hole and drops them for frying — consistent size at speed.',
        ['Round vadas with centre hole', 'Adjustable vada size', 'Direct drop into fryer', 'Fast, consistent output']],
    ],
  },
  {
    cat: 'Food Processing Machinery',
    tag: 'a commercial food-processing machine that cuts prep time and labour across the kitchen.',
    feats: ['Powerful commercial motor', 'Food-grade contact parts', 'Easy to operate & clean', 'Durable heavy-duty build'],
    items: [
      // Ordered to match the printed SHI brochure (Machinaries page); items not in the brochure follow.
      ['Rice Washer', 'rice-washer', 'Stainless-steel rice washing machine that rinses and drains bulk rice quickly, saving water and manpower before cooking.'],
      ['Wet Grinder', 'wet-grinder', 'Heavy-duty wet grinder with granite stones on an SS base cabinet with drain tap — smooth idli / dosa batter in large volumes.',
        ['Granite grinding stones', 'SS base cabinet with drain tap', 'Smooth batter output', 'Heavy-duty motor']],
      ['Tilting Grinder', 'tilting-grinder', 'Tilting-drum wet grinder that empties batter easily — high-capacity grinding for busy hotels and mess halls.',
        ['Granite grinding stones', 'Tilting drum for easy emptying', 'High-capacity grinding', 'Heavy-duty motor']],
      ['Pulverizer', 'pulverizer', 'Commercial pulverizer for grinding dry spices, grains and masala into fine powder with a powerful motor.'],
      ['Masala Grinder', 'masala-grinder', 'Heavy-duty masala grinder for grinding wet and dry masala, chutney and spice pastes in bulk.'],
      ['Vegetable Cutting Machine', 'veg-cutting-machine', 'Multi-blade vegetable cutting machine that slices, dices and shreds vegetables fast for bulk prep.'],
      ['Onion Peeler', 'onion-peeler', 'Commercial onion peeling machine that peels onions in batches, saving hours of manual prep.'],
      ['Potato Peeler', 'potato-peeler', 'Rotary potato peeling machine that peels a full batch of potatoes in minutes with an abrasive drum and water rinse.',
        ['Abrasive peeling drum', 'Water rinse while peeling', 'Peels a full batch in minutes', 'Stainless-steel build']],
      ['Dough Kneader', 'dough-kneader', 'Dough kneading machine with a stainless-steel mixing trough that mixes soft, uniform dough for chapati, poori and bakery in large batches.',
        ['SS mixing trough', 'Soft, uniform dough', 'Large batch capacity', 'Heavy-duty motor']],
      ['Garlic Peeler', 'garlic-peeler', 'Dry garlic peeling machine that separates clove skins quickly without crushing — clean, ready-to-use garlic in bulk.',
        ['Dry peeling — no water', 'Peels without crushing', 'Fast batch peeling', 'Food-grade contact parts']],
      ['Coconut Scraper', 'coconut-scraper', 'Motorised coconut scraper that grates fresh coconut fast and evenly for chutney, curries and sweets.',
        ['Fast, even scraping', 'Powerful commercial motor', 'Stainless-steel blade & body', 'Easy to clean']],
    ],
  },
  {
    cat: 'Tables, Sinks & Racks',
    tag: 'stainless steel fabrication built for hygiene, strength and everyday commercial use.',
    feats: ['100% SS 304 / 202 build', 'Sturdy, rust-free fabrication', 'Hygienic & easy to clean', 'Made to your size'],
    items: [
      // Ordered to match the printed SHI brochure (Hotels & Tables/Racks pages); items not in the brochure follow.
      ['Hand Wash Sink', 'hand-wash', 'Wall-mounted SS hand wash sink with taps for staff hygiene at kitchen entries and prep areas.'],
      ['Work Table with Sink', 'worktable-sink', 'Work table with a built-in sink bowl and drain board — a combined prep and wash station in one unit.'],
      ['2-Sink Unit', 'two-sink-unit', 'Two-bowl stainless-steel sink unit with an under-shelf — separate wash and rinse bowls in one station.'],
      ['3-Sink Dishwash Unit', 'three-sink-unit', 'Three-bowl stainless-steel dishwashing unit for wash–rinse–sanitise, with drain boards for high-volume ware washing.',
        ['Three deep wash bowls', 'Wash · rinse · sanitise', 'Drain boards on both sides', 'Rust-free SS 304']],
      ['Chute Table', 'chute-table', 'SS chute table with a waste chute cut-out that lets staff scrape plates straight into a bin while clearing.'],
      ['Dishwasher', 'dish-washer', 'Undercounter commercial dishwasher that washes and sanitises plates, glasses and trays in a fast cycle — high-volume ware washing with minimal manpower and water.',
        ['Fast wash & sanitise cycle', 'Undercounter SS body', 'Rack-based plate & glass washing', 'Low water & manpower']],
      ['Work Table', 'work-table', 'Plain SS 304 work table with a sturdy top and legs — the everyday prep surface for any commercial kitchen.'],
      ['Work Table with Shelves', 'work-table-shelf', 'Work table with overhead and under-shelves for extra storage — keeps utensils and ingredients within reach at the prep line.'],
      ['Work Table with Under Shelf', 'work-table-us', 'SS work table with a full-length under-shelf for storing vessels and provisions below the prep surface.'],
      ['Kneading Table', 'kneading-table', 'Sturdy SS kneading table with a smooth top and under-shelf for dough work in chapati and bakery sections.'],
      ['Preparation Table', 'preparation-table', 'Heavy-duty SS preparation table with a backsplash and two under-shelves for busy prep sections.'],
      ['Dish Rack', 'dish-rack', 'Multi-tier SS dish rack for draining and storing plates, bowls and utensils hygienically after washing.'],
      ['Vegetable Rack', 'veg-rack', 'Ventilated SS storage rack that keeps vegetables and provisions organised and off the floor.'],
      ['Pot Rack', 'pot-rack', 'Four-tier slatted SS pot rack for storing heavy vessels, pots and pans off the floor.'],
      ['Plate Rack', 'plate-rack', 'Multi-tier SS plate rack that stores and air-dries plates upright after washing.'],
      ['Batter Table', 'batter-table', 'Batter table with lidded SS batter containers set into the top — keeps idli / dosa batter covered, fermenting and hygienic.'],
      ['SS Sink', 'sink', 'Single-bowl stainless-steel sink unit with tap point and drain — a durable, rust-free washing station.'],
      ['Corner Sink', 'corner-sink', 'Space-saving stainless-steel corner sink unit with a backsplash — fits snugly into a corner to make the most of tight kitchen layouts.'],
      ['Work Table with Backsplash', 'work-table-backsplash', 'SS work table with a raised backsplash that keeps the wall clean behind the prep area.'],
    ],
  },
  {
    cat: 'Dining & Service',
    tag: 'service-line / dining equipment for canteens, messes and food courts.',
    feats: ['Durable commercial-grade build', 'Hygienic stainless steel', 'Designed for fast service', 'Custom sizes available'],
    items: [
      // Ordered to match the printed SHI brochure.
      ['Dining Table', 'dining-table', 'Compact SS dining table for canteens and messes — hygienic, rust-free and easy to clean.'],
      ['Plate Warmer', 'plate-warmer', 'Stainless-steel plate warming cabinet that holds plates at serving temperature for smooth, fast service.'],
      ['Hot Case', 'hot-case', 'Heated SS hot case with lidded round wells that keep sambar, rasam, curries and rice hot at the service counter.'],
      ['Bain-Marie Counter', 'bainmarie-counter', 'Hot bain-marie service counter that keeps cooked food warm and ready to serve on a buffet or canteen line.',
        ['Hot water / dry warming wells', 'Keeps food at serving temp', 'GN-pan compatible', 'Stainless-steel counter']],
      ['Dining Table (4 Seater)', 'dining-4-seater', 'Four-seater SS dining table with attached stools for canteens and messes — sturdy and easy to clean.'],
      ['Dining Table (6 Seater)', 'dining-6-seater', 'Six-seater stainless-steel dining table for canteens and food courts — sturdy, seamless and wipe-clean.'],
      ['Dining Table (8 Seater)', 'dining-8-seater', 'Eight-seater SS dining table with attached stools for high-capacity canteens and dining halls.'],
    ],
  },
  {
    cat: 'Cold Room & Refrigeration',
    tag: 'temperature-controlled storage that keeps ingredients fresh and safe.',
    feats: ['Precise temperature control', 'Energy-efficient cooling', 'Food-safe insulated build', 'Custom sizes available'],
    items: [
      // Ordered to match the printed SHI brochure.
      ['Work Top Freezer', 'work-top-freezer', 'Under-counter worktop freezer that doubles as a chilled prep surface — cold storage right where you cook.',
        ['Chilled worktop surface', 'Under-counter freezer storage', 'Energy-efficient cooling', 'SS 304 food-safe build']],
      ['Cold Room', 'cold-room', 'Modular walk-in cold room for bulk storage of vegetables, dairy, meat and frozen goods.'],
    ],
  },
  {
    cat: 'Trolleys & Storage',
    tag: 'a mobile / storage stainless steel solution that keeps kitchens organised and efficient.',
    feats: ['Smooth-rolling castors', 'Rust-free SS build', 'Heavy load capacity', 'Custom sizes available'],
    items: [
      // Ordered to match the printed SHI brochure (Trolleys & Bins page).
      ['Utility Trolley', 'utility-trolley', 'Multi-shelf stainless-steel utility trolley on castors for moving food, utensils and supplies around the kitchen.'],
      ['Pickup Trolley', 'pickup-trolley', 'Three-tier SS pickup trolley for clearing plates and ware from dining areas quickly.'],
      ['Masala Trolley', 'masala-trolley', 'Masala trolley with compartments for holding spices, oils and prep bowls close to the cooking range.'],
      ['Platform Trolley', 'platform-trolley', 'Heavy-duty platform trolley for shifting bulk vessels, sacks and equipment across the kitchen and stores.'],
      ['Room Service Trolley', 'room-service-trolley', 'Wire-cage SS trolley on castors for carrying linen, supplies and goods safely around hotels and kitchens.'],
      ['Snacks Trolley', 'snacks-trolley', 'SS snacks trolley with tray slides for carrying snacks, sweets and trays to the service line.'],
      ['Service Trolley', 'service-trolley', 'Three-shelf SS service trolley on castors for moving food, plates and utensils between kitchen and dining.'],
      ['Onion & Potato Bin', 'onion-bin', 'Ventilated SS storage bin for onions and potatoes that keeps them dry, aired and easy to dispense.'],
      ['Waste Collecting Trolley', 'waste-collecting-trolley', 'Twin-bin waste collecting trolley on wheels for segregated, hygienic waste handling in kitchens.'],
      ['Cleaning Trolley', 'cleaning-trolley', 'SS frame trolley carrying two plastic crates — for moving cleaning supplies, washed ware or waste around the kitchen.'],
      ['Storage Trolley', 'storage-trolley', 'Open three-shelf SS storage trolley on castors for organising and moving provisions and utensils.'],
    ],
  },
];

export const CATMETA: Record<string, CatMeta> = {
  'Cooking Equipment': { ico: 'i-flame', blurb: 'LPG cooking ranges, burners, grills, tandoor & fryers.' },
  'Indian Range & Automakers': { ico: 'i-pot', blurb: 'Steam cooking & automatic dosa / chapati / vada machines.' },
  'Food Processing Machinery': { ico: 'i-wrench', blurb: 'Grinders, peelers, cutters & dough machines.' },
  'Tables, Sinks & Racks': { ico: 'i-store', blurb: 'SS work tables, sinks, dishwash & storage racks.' },
  'Dining & Service': { ico: 'i-utensils', blurb: 'Bain-marie counters, plate warmers & dining tables.' },
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

/** Featured products spread across the filter groups so every tab shows real
    results. Only products that have a real photo are listed here. */
const FEATURED_DEFS: { name: string; group: PGroup; bestseller?: boolean }[] = [
  { name: 'Bulk Cooking Range', group: 'Cooking', bestseller: true },
  { name: 'Chinese Range', group: 'Cooking', bestseller: true },
  { name: 'Barbecue Grill', group: 'Cooking' },
  { name: 'Deep Fryer', group: 'Cooking' },
  { name: 'Potato Peeler', group: 'Preparation', bestseller: true },
  { name: 'Chapati Making Machine', group: 'Preparation', bestseller: true },
  { name: 'Wet Grinder', group: 'Preparation' },
  { name: 'Dough Kneader', group: 'Preparation' },
  { name: 'Cold Room', group: 'Refrigeration' },
  { name: 'Work Top Freezer', group: 'Refrigeration' },
  { name: '3-Sink Dishwash Unit', group: 'Washing' },
  { name: 'Utility Trolley', group: 'Storage' },
];

export const FEATURED: Featured[] = FEATURED_DEFS
  .map((d) => {
    const p = PRODUCTS.find((x) => x.name === d.name);
    return p ? { ...p, group: d.group, bestseller: Boolean(d.bestseller), material: 'SS304' } : null;
  })
  .filter((p): p is Featured => Boolean(p));

/** Typical use-cases shown under "Applications" on the detail page (icon = sprite id). */
export const APPLICATIONS: { icon: string; label: string }[] = [
  { icon: 'i-store', label: 'Hotels' },
  { icon: 'i-utensils', label: 'Restaurants' },
  { icon: 'i-cross', label: 'Hospitals' },
  { icon: 'i-factory', label: 'Industries' },
  { icon: 'i-cap', label: 'Institutions' },
  { icon: 'i-pot', label: 'Canteens' },
];

/** Homepage featured set — the four bestsellers (compact cards + View All). */
export const HOME_FEATURED: Featured[] = FEATURED.filter((p) => p.bestseller).slice(0, 4);

/** Products whose body is not SS 304 (painted, insulated-panel or plastic-bin builds) —
    they must not carry the "SS304" badge or the SS 304 material claim. */
const NOT_SS304 = new Set(['barbeque', 'cold-room', 'cleaning-trolley', 'waste-collecting-trolley']);

/** True when the product is built in SS 304 and may show the SS304 badge. */
export function isSS304(p: Product): boolean {
  return !NOT_SS304.has(p.slug);
}

/** Find a single product by its slug. */
export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

/** Up to `n` other products from the same category (for "Related Products").
    Takes the products that FOLLOW this one in catalogue order (wrapping round),
    so every product in a category is linked from some sibling — not just the
    first four. */
export function relatedProducts(slug: string, n = 4): Product[] {
  const p = getProduct(slug);
  if (!p) return [];
  const sib = PRODUCTS.filter((x) => x.cat === p.cat);
  const at = sib.findIndex((x) => x.slug === slug);
  const out: Product[] = [];
  for (let i = 1; i < sib.length && out.length < n; i++) out.push(sib[(at + i) % sib.length]);
  return out;
}

/** The name Indian buyers actually search for, where it differs from ours
    (checked against Google India search suggestions, Oct 2026). Shown as
    "Also known as", in the page title and as schema alternateName. */
const ALIAS: Record<string, string> = {
  'janatha-idly-plant': 'Idli Steamer',
  'bulk-cooking-range': 'Commercial Gas Stove',
  'four-burner-continental': '4 Burner Gas Range',
  'bulk-cooker': 'Tilting Kettle',
  'worktable-sink': 'SS Sink with Table',
  'dish-washer': 'Commercial Dishwasher',
  'induction-top': 'Induction Cooking Range',
  'electric-bulk-cooker': 'Electric Cooking Kettle',
  'ball-pressing-machine': 'Chapati Pressing Machine',
  'romali-range': 'Rumali Roti Machine',
  'paniyaram-range': 'Paniyaram Machine',
  'tandoori': 'Tandoor Oven',
  'shawarma': 'Shawarma Machine',
  'bainmarie-counter': 'Food Warmer Counter',
  'work-top-freezer': 'Undercounter Freezer',
  'wet-grinder': 'Commercial Wet Grinder',
};

export function aliasOf(p: Product): string | undefined {
  return ALIAS[p.slug];
}

/** Google-sized (≤155 chars) meta description: the product's lead clause plus
    the location / service line that would otherwise be cut off in results. */
export function metaDescription(p: Product): string {
  const tail = ' Made in Coimbatore — pan-India delivery & installation.';
  const max = 150 - tail.length;
  let lead = p.desc.split(' — ')[0].trim();
  if (lead.length > max) lead = lead.slice(0, lead.lastIndexOf(' ', max - 1)).replace(/[,;:]$/, '') + '…';
  else if (!/[.!?]$/.test(lead)) lead += '.';
  return lead + tail;
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
  // product's own specs first, so its real values win over the generic defaults
  (p.specs ?? []).forEach(([k, v]) => add(k, v));
  if (isSS304(p)) add('Material', 'SS 304 food-grade stainless steel');
  add('Build', 'Heavy-duty commercial grade');
  add('Customisation', 'Custom sizes made to order');
  if (isSS304(p)) add('Finish', 'Hygienic, rust-free stainless steel');
  return rows;
}

export { titleCase };
