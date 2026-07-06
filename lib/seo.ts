/* ===========================================================
   SEO content — single source of truth for FAQ + service areas.
   The visible FAQ component and the FAQPage JSON-LD both read from
   here so the structured data always matches on-page text (a Google
   requirement for rich results).
   =========================================================== */

/** Localities & nearby cities served — used in copy and LocalBusiness.areaServed. */
export const SERVICE_AREAS = [
  'Coimbatore',
  'Gandhipuram',
  'Peelamedu',
  'Saravanampatti',
  'Singanallur',
  'Ganapathy',
  'Saibaba Colony',
  'Kuniyamuthur',
  'Tirupur',
  'Erode',
  'Salem',
  'Pollachi',
  'Mettupalayam',
];

export interface Faq {
  q: string;
  a: string;
}

export const FAQS: Faq[] = [
  {
    q: 'Who is a trusted commercial kitchen equipment manufacturer in Coimbatore?',
    a: 'Sri Hari Industries is an ISO 9001:2015 certified commercial kitchen equipment manufacturer based in Urumandampalayam, Coimbatore. We manufacture cooking ranges, automatic dosa & chapati machines, exhaust systems, cold rooms and complete stainless steel kitchen fabrication for hotels, restaurants, canteens and marriage halls across Coimbatore and Tamil Nadu.',
  },
  {
    q: 'What commercial kitchen equipment do you manufacture?',
    a: 'We manufacture a full range of commercial kitchen equipment — LPG cooking ranges and burners, bulk cookers, tandoor, grillers and deep fryers, automatic chapati and idli plants, wet grinders and food-processing machinery, stainless steel work tables, sinks and racks, bain-marie service counters, walk-in cold rooms and trolleys. All units are built in food-grade SS 304 stainless steel.',
  },
  {
    q: 'Do you provide turnkey kitchen setup and installation in Coimbatore?',
    a: 'Yes. Sri Hari Industries handles complete A-to-Z turnkey commercial kitchen projects in Coimbatore and across Tamil Nadu — kitchen consultancy and 3D design, manufacturing, exhaust and ventilation planning, on-site installation, plus service and annual maintenance contracts (AMC) after handover.',
  },
  {
    q: 'Is your kitchen equipment ISO certified and food-grade?',
    a: 'Yes. We are an ISO 9001:2015 certified manufacturer and build all contact surfaces in food-grade SS 304 stainless steel for hygiene, strength and long life. We also hold IndiaMART Trust Seal and TÜV SÜD recognition.',
  },
  {
    q: 'How do I get a price quote for commercial kitchen equipment?',
    a: 'The fastest way is WhatsApp or a call to +91 94433 92337. Share your requirement, kitchen size or product list and our team in Coimbatore will send a quotation. You can also email srihariindustriescbe@gmail.com for a free consultation.',
  },
];
