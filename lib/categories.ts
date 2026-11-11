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
    cat: 'Cooking Equipment',
    heading: 'Commercial Cooking Equipment Manufacturer',
    metaDesc: 'Commercial cooking ranges, Indian & Chinese burners, tandoor, grills and fryers made in Coimbatore. Custom sizes, pan-India delivery & installation.',
    intro: [
      'Sri Hari Industries manufactures commercial cooking equipment in Coimbatore — single, two and three burner ranges, Indian and continental ranges, Chinese wok ranges, bulk cooking ranges, tandoors, grills, shawarma machines and fryers.',
      'Every range is fabricated in our own workshop for daily high-volume use in hotels, restaurants, canteens and marriage halls. Ranges are built to your vessel sizes and kitchen layout, and we deliver, install and service them all over India.',
    ],
    uses: [
      { icon: 'i-store', label: 'Hotels' },
      { icon: 'i-utensils', label: 'Restaurants' },
      { icon: 'i-pot', label: 'Canteens' },
      { icon: 'i-sparkles', label: 'Marriage halls' },
      { icon: 'i-cross', label: 'Hospitals' },
      { icon: 'i-hat', label: 'Cloud kitchens' },
    ],
    faqs: [
      { q: 'Can you make a cooking range in a custom size?', a: 'Yes. Our cooking ranges are fabricated in our Coimbatore workshop, so the number of burners, the size of the range and the under-shelf can be made to suit your vessels and kitchen layout.' },
      { q: 'Do you install cooking ranges outside Tamil Nadu?', a: 'Yes. We deliver, install and service our commercial cooking equipment all over India.' },
      { q: 'How do I get a quote for a cooking range?', a: 'Send us your requirement on WhatsApp or through the enquiry form — the type of range, number of burners and your kitchen size — and we will share a quote.' },
    ],
  },
  {
    cat: 'Indian Range & Automakers',
    heading: 'Idli, Dosa & Chapati Machine Manufacturer',
    metaDesc: 'Steam boilers, idli plants and automatic dosa, chapati and vada machines for canteens and hostels. Made in Coimbatore, delivered all over India.',
    intro: [
      'For kitchens that serve South-Indian food in volume, Sri Hari Industries builds steam boilers, rice and dhal vessels, Janatha idli plants, idiyappam machines and automatic dosa, chapati and vada making machines.',
      'These machines raise output and keep every idli, dosa and chapati consistent while cutting manpower — ideal for industrial canteens, college and hostel messes, marriage halls and large hotels.',
    ],
    uses: [
      { icon: 'i-pot', label: 'Industrial canteens' },
      { icon: 'i-cap', label: 'Colleges & hostels' },
      { icon: 'i-sparkles', label: 'Marriage halls' },
      { icon: 'i-store', label: 'Hotels' },
      { icon: 'i-factory', label: 'Factories' },
      { icon: 'i-cross', label: 'Hospitals' },
    ],
    faqs: [
      { q: 'Which automatic machines do you make?', a: 'We make automatic chapati making machines, dosa making machines, vada making machines, ball cutting and ball pressing machines, idiyappam machines and paniyaram and rumali ranges.' },
      { q: 'Do you supply steam boilers for idli and rice cooking?', a: 'Yes. We supply steam boilers together with idli plants and rice / dhal vessels for bulk steam cooking.' },
      { q: 'Is installation and training included?', a: 'We install the machines at your site and show your team how to operate them. Contact us for the details for your order.' },
    ],
  },
  {
    cat: 'Food Processing Machinery',
    heading: 'Commercial Food Processing Machinery',
    metaDesc: 'Wet grinders, pulverizers, vegetable cutters, potato, onion & garlic peelers, coconut scrapers and dough kneaders for commercial kitchens. Made in Coimbatore.',
    intro: [
      'Preparation is where a busy kitchen loses the most time. Sri Hari Industries supplies commercial food processing machines that take over the slowest jobs — wet and tilting grinders, pulverizers and masala grinders, vegetable cutting machines, potato, onion and garlic peelers, coconut scrapers, rice washers and dough kneaders.',
      'Each machine is chosen for continuous commercial use and food-safe contact parts, and is supplied with installation and after-sales service all over India.',
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
      // { q: 'Do you have machines for peeling vegetables?', a: 'Yes — potato peelers, onion peelers and garlic peelers, plus vegetable cutting machines for slicing and dicing.' },
      { q: 'Do you provide service for these machines?', a: 'Yes. We provide after-sales service for the food processing machinery we supply.' },
    ],
  },
  {
    cat: 'Tables, Sinks & Racks',
    heading: 'Stainless Steel Work Tables, Sinks & Racks',
    metaDesc: 'SS work tables, preparation tables, sink units, hand wash sinks, dish racks, plate racks and pot racks made to size in Coimbatore. Delivered all over India.',
    intro: [
      'Stainless steel fabrication is the backbone of every commercial kitchen. Sri Hari Industries fabricates work tables (plain, with sink, with shelves, under-shelf and backsplash), preparation, kneading, batter and chute tables, single, two and three bowl sink units, hand wash sinks, and dish, plate, pot and vegetable racks.',
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
      { q: 'Do you make 2-sink and 3-sink dishwash units?', a: 'Yes. We make single, two-bowl and three-bowl sink units, with drain boards and under-shelves as required.' },
    ],
  },
  {
    cat: 'Dining & Service',
    heading: 'Bain-Marie Counters, Hot Cases & Dining Tables',
    metaDesc: 'Bain-marie counters, hot cases, plate warmers and SS dining tables (4, 6 & 8 seater) for canteens, hostels and food courts. Made in Coimbatore.',
    intro: [
      'The service line decides how fast a canteen can feed people. Sri Hari Industries makes bain-marie counters and hot cases that keep food hot at serving temperature, plate warmers, and stainless-steel dining tables with attached stools in 4, 6 and 8 seater sizes.',
      'Our dining and service equipment is built for heavy daily use in industrial canteens, college and hostel messes, hospitals and food courts, and is delivered and installed all over India.',
    ],
    uses: [
      { icon: 'i-pot', label: 'Industrial canteens' },
      { icon: 'i-cap', label: 'Colleges & hostels' },
      { icon: 'i-cross', label: 'Hospitals' },
      { icon: 'i-utensils', label: 'Food courts' },
      { icon: 'i-sparkles', label: 'Marriage halls' },
      { icon: 'i-factory', label: 'Factories' },
    ],
    faqs: [
      { q: 'What sizes of dining tables do you make?', a: 'We make stainless-steel dining tables with attached stools in 4 seater, 6 seater and 8 seater sizes, and can fabricate other sizes on request.' },
      { q: 'What is the difference between a bain-marie and a hot case?', a: 'A bain-marie counter keeps food warm in serving pans along a counter. Our hot case has lidded round wells that keep sambar, rasam, curries and rice hot.' },
      { q: 'Can you set up a complete canteen service line?', a: 'Yes. We supply and install complete service lines — bain-marie counters, hot cases, plate warmers and dining tables — as part of turnkey canteen projects.' },
    ],
  },
  {
    cat: 'Cold Room & Refrigeration',
    heading: 'Cold Room & Commercial Refrigeration',
    metaDesc: 'Modular walk-in cold rooms and under-counter worktop freezers for hotels, hospitals and catering. Supplied and installed all over India from Coimbatore.',
    intro: [
      'Fresh ingredients need reliable cold storage. Sri Hari Industries supplies modular walk-in cold rooms for bulk storage of vegetables, dairy, meat and frozen goods, and under-counter worktop freezers that double as a chilled prep surface.',
      'Cold rooms are planned to the space and storage you need, and are supplied and installed all over India as part of a complete kitchen or on their own.',
    ],
    uses: [
      { icon: 'i-store', label: 'Hotels' },
      { icon: 'i-cross', label: 'Hospitals' },
      { icon: 'i-truck', label: 'Catering units' },
      { icon: 'i-bag', label: 'Supermarkets' },
      { icon: 'i-utensils', label: 'Restaurants' },
      { icon: 'i-factory', label: 'Food factories' },
    ],
    faqs: [
      { q: 'Can a cold room be built to fit my space?', a: 'Yes. Our walk-in cold rooms are modular, so the size is planned to your available space and storage needs.' },
      { q: 'What can be stored in a walk-in cold room?', a: 'Vegetables, dairy, meat and frozen goods — depending on the temperature the cold room is set up for.' },
      { q: 'Do you install cold rooms outside Tamil Nadu?', a: 'Yes. We supply and install cold rooms all over India.' },
    ],
  },
  {
    cat: 'Trolleys & Storage',
    heading: 'Stainless Steel Kitchen Trolleys & Storage',
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

/** "Tables, Sinks & Racks" → "tables-sinks-racks" */
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
