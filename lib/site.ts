/* ===========================================================
   SRI HARI INDUSTRIES — central site config
   Edit business / contact details here; used across the UI,
   SEO metadata and JSON-LD structured data.
   =========================================================== */

export const SITE = {
  name: 'Sri Hari Industries',
  legalName: 'Sri Hari Industries',
  tagline: 'Kitchen Consultancy & Designs',
  shortDesc:
    'Commercial kitchen equipment & stainless steel fabrication — from cooking units to complete turnkey kitchens.',
  longDesc:
    'Sri Hari Industries — manufacturers of commercial kitchen equipment & stainless steel fabrication in Coimbatore. Cooking ranges, automatic dosa/chapati makers, exhaust systems, cold rooms & complete turnkey kitchen solutions. ISO 9001:2015 certified.',

  // Update this to your live domain before deploying.
  url: 'https://www.srihariindustries.in',

  phoneDisplay: '+91 94433 92337',
  phoneHref: '+919443392337',
  // WhatsApp enquiries route to this number (call/display number above is unchanged).
  whatsapp: '917604960852',
  email: 'srihariindustriescbe@gmail.com',

  managingDirector: 'Mr. Mahesh Kumar',
  iso: 'ISO 9001:2015',
  yearFounded: 2016,

  address: {
    line: '6/23A, Uzhaippalar Road, Urumandampalayam',
    locality: 'Coimbatore',
    region: 'Tamil Nadu',
    postalCode: '641029',
    country: 'IN',
  },
  // Approx geo for Urumandampalayam, Coimbatore (for LocalBusiness JSON-LD).
  geo: { lat: 11.0588, lng: 76.9319 },

  mapEmbed:
    'https://maps.google.com/maps?q=Urumandampalayam%2C%20Coimbatore%20641029&z=14&output=embed',
  mapDirections:
    'https://www.google.com/maps/dir/?api=1&destination=Urumandampalayam%2C+Coimbatore+641029',

  brochure: '/brochure/sri-hari-industries-brochure.pdf',

  social: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    youtube: 'https://youtube.com',
  },
} as const;

/**
 * Web3Forms access key — delivers the enquiry form to plisha38@gmail.com.
 * Get a FREE key in ~1 minute:
 *   1. Go to https://web3forms.com
 *   2. Enter the email  plisha38@gmail.com  and click "Create Access Key"
 *   3. Copy the Access Key it emails you and paste it below (replace the
 *      placeholder), OR set NEXT_PUBLIC_WEB3FORMS_KEY in a .env.local file.
 * Until a real key is set, the form will show a friendly "try WhatsApp" error.
 */
export const WEB3FORMS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? 'c9ef760e-200a-44fd-9ab5-bc7de71b1952';

/** Build a wa.me deep-link with a pre-filled message. */
export function waLink(message: string): string {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const WA_GENERIC = waLink(
  "Hi, I'd like a quote for kitchen equipment"
);
