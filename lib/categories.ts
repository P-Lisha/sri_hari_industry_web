/* ===========================================================
   Category landing pages (/products/category/[slug]) — the copy
   Google ranks for category searches ("commercial cooking range
   manufacturer", "SS kitchen trolley", …). Keep every claim true:
   no invented capacities, prices or client names. The FAQ text is
   rendered on the page AND as FAQPage JSON-LD, so they always match.
   =========================================================== */
import { PCATS } from './data';

export interface CategoryInfo {
  cat: string;
  slug: string;
  /** H1 / title keyword phrase */
  heading: string;
  /** ≤155 chars, shown in Google results */
  metaDesc: string;
  intro: string[];
  /** "Ideal for" list — icon is a sprite id from components/Icons */
  uses: { icon: string; label: string }[];
  faqs: { q: string; a: string }[];
}

const INFO: Omit<CategoryInfo, 'slug'>[] = [
  {
    cat: 'Kitchen Equipment for Marriage Hall & Hostel',
    heading: 'Kitchen Equipment for Marriage Halls & Hostels',
    metaDesc: 'Commercial kitchen equipment for marriage halls & hostels — cooking ranges, steam boilers, idli plants, hot cases & cold rooms. Made in Coimbatore.',
    intro: [
      'Sri Hari Industries manufactures commercial kitchen equipment in Coimbatore for marriage halls, hostels and hotels — single, two and three burner ranges, Indian and continental ranges, Chinese wok ranges, bulk cooking ranges, tandoors, grills, shawarma machines and fryers, plus plate warmers, hot cases and bain-marie counters that keep food hot through service.',
      'For bulk steam cooking we build steam boilers, rice and dhal vessels, Janatha idli plants and paniyaram and rumali ranges, and for cold storage we supply walk-in cold rooms and worktop freezers. Every unit is fabricated in our own workshop for daily high-volume use, and we deliver, install and service them all over India.',
    ],
    uses: [
      { icon: 'i-sparkles', label: 'Marriage halls' },
      { icon: 'i-cap', label: 'Hostels & colleges' },
      { icon: 'i-store', label: 'Hotels' },
      { icon: 'i-utensils', label: 'Restaurants' },
      { icon: 'i-pot', label: 'Canteens' },
      { icon: 'i-cross', label: 'Hospitals' },
    ],
    faqs: [
      { q: 'Can you make a cooking range in a custom size?', a: 'Yes. Our cooking ranges are fabricated in our Coimbatore workshop, so the number of burners, the size of the range and the under-shelf can be made to suit your vessels and kitchen layout.' },
      { q: 'Do you supply steam boilers for idli and rice cooking?', a: 'Yes. We supply steam boilers together with idli plants and rice / dhal vessels for bulk steam cooking.' },
      { q: 'What is the difference between a bain-marie and a hot case?', a: 'A bain-marie counter keeps food warm in serving pans along a counter. Our hot case has lidded round wells that keep sambar, rasam, curries and rice hot.' },
      { q: 'Do you install kitchen equipment outside Tamil Nadu?', a: 'Yes. We deliver, install and service our commercial kitchen equipment all over India.' },
    ],
  },
  {
    cat: 'Machineries',
    heading: 'Commercial Kitchen Machinery Manufacturer',
    metaDesc: 'Wet grinders, pulverizers, veg cutters, peelers, dough kneaders, dishwashers and automatic dosa, vada & idiyappam machines. Made in Coimbatore.',
    intro: [
      'Preparation is where a busy kitchen loses the most time. Sri Hari Industries supplies commercial kitchen machineries that take over the slowest jobs — wet and tilting grinders, pulverizers and masala grinders, vegetable cutting machines and veg cutters, onion peelers, coconut scrapers, rice washers, dough kneaders and commercial dishwashers.',
      'For high-volume output we also build automatic making machines — dosa, vada and idiyappam machines, and ball cutting and ball pressing machines — that keep every piece consistent while cutting manpower. Each machine is supplied with installation and after-sales service all over India.',
    ],
    uses: [
      { icon: 'i-store', label: 'Hotels' },
      { icon: 'i-utensils', label: 'Restaurants' },
      { icon: 'i-pot', label: 'Canteens' },
      { icon: 'i-truck', label: 'Catering units' },
      { icon: 'i-cap', label: 'Hostels' },
      { icon: 'i-factory', label: 'Food factories' },
    ],
    faqs: [
      { q: 'What is the difference between a wet grinder and a tilting grinder?', a: 'Both grind idli and dosa batter with granite stones. A tilting grinder has a drum that tilts forward, so batter can be emptied easily in large batches.' },
      // { q: 'Do you have machines for peeling vegetables?', a: 'Yes — potato peelers and onion peelers, plus vegetable cutting machines and veg cutters for slicing, shredding and dicing.' },
      { q: 'Is installation and training included?', a: 'We install the machines at your site and show your team how to operate them. Contact us for the details for your order.' },
      { q: 'Do you provide service for these machines?', a: 'Yes. We provide after-sales service for the kitchen machineries we supply.' },
    ],
  },
  {
    cat: 'Tables & Racks',
    heading: 'Stainless Steel Work Tables, Racks & Dining Tables',
    metaDesc: 'SS work tables, sink units, dish, plate & pot racks and dining tables (4, 6 & 8 seater) made to size in Coimbatore. Delivered all over India.',
    intro: [
      'Stainless steel fabrication is the backbone of every commercial kitchen. Sri Hari Industries fabricates work tables (plain, with sink, with shelves, under-shelf and backsplash), preparation, kneading, batter and chute tables, single, two and three bowl sink units, hand wash sinks, and dish, plate, pot and vegetable racks — plus stainless-steel dining tables with attached stools in 4, 6 and 8 seater sizes.',
      'Everything is made to your measurements in SS 304 food-grade stainless steel — hygienic, rust-free and easy to clean — and delivered and installed all over India.',
    ],
    uses: [
      { icon: 'i-store', label: 'Hotels' },
      { icon: 'i-utensils', label: 'Restaurants' },
      { icon: 'i-cross', label: 'Hospitals' },
      { icon: 'i-pot', label: 'Canteens' },
      { icon: 'i-cup', label: 'Bakeries & cafés' },
      { icon: 'i-cap', label: 'Institutions' },
    ],
    faqs: [
      { q: 'Can work tables and sinks be made to my kitchen size?', a: 'Yes. All our tables, sinks and racks are fabricated to order, so length, width, height, shelves and backsplash can match your kitchen.' },
      { q: 'Which steel do you use for tables and sinks?', a: 'We fabricate tables, sinks and racks in SS 304 food-grade stainless steel, which is hygienic and rust-free.' },
      { q: 'What sizes of dining tables do you make?', a: 'We make stainless-steel dining tables with attached stools in 4 seater, 6 seater and 8 seater sizes, and can fabricate other sizes on request.' },
    ],
  },
  {
    cat: 'Trolleys & Bins',
    heading: 'Stainless Steel Kitchen Trolleys & Bins',
    metaDesc: 'SS service, utility, pickup, snacks, platform, masala and waste trolleys plus onion & potato bins for commercial kitchens. Made in Coimbatore.',
    intro: [
      'Moving food, ware and supplies safely keeps a kitchen running. Sri Hari Industries makes utility, service, pickup, snacks, room service, platform, storage and masala trolleys, waste collecting and cleaning trolleys, and ventilated onion and potato bins.',
      'Trolleys run on smooth castors with heavy load capacity and are made to the sizes you need, with delivery all over India.',
    ],
    uses: [
      { icon: 'i-store', label: 'Hotels' },
      { icon: 'i-cross', label: 'Hospitals' },
      { icon: 'i-pot', label: 'Canteens' },
      { icon: 'i-utensils', label: 'Restaurants' },
      { icon: 'i-factory', label: 'Industries' },
      { icon: 'i-cap', label: 'Institutions' },
    ],
    faqs: [
      { q: 'Which trolleys do you make?', a: 'Utility, service, pickup, snacks, room service, platform, storage and masala trolleys, waste collecting and cleaning trolleys, and onion and potato bins.' },
      { q: 'Can trolleys be made to a custom size?', a: 'Yes. Trolley size, number of shelves and castors can be made to suit your kitchen and loads.' },
      { q: 'Do you deliver trolleys all over India?', a: 'Yes. We deliver our trolleys and storage equipment all over India.' },
    ],
  },
];

/** "Trolleys & Bins" → "trolleys-bins" */
export function catSlug(cat: string): string {
  return cat.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

/** Category info in catalogue order. */
export const CATEGORIES: CategoryInfo[] = PCATS.map((g) => {
  const info = INFO.find((i) => i.cat === g.cat);
  if (!info) throw new Error(`No category page copy for "${g.cat}"`);
  return { ...info, slug: catSlug(g.cat) };
});

export function getCategory(slug: string): CategoryInfo | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function categoryOf(cat: string): CategoryInfo | undefined {
  return CATEGORIES.find((c) => c.cat === cat);
}
