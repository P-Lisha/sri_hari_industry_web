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
    instagram: 'https://www.instagram.com/srihariindustriesads',
    facebook: 'https://facebook.com',
    youtube: 'https://youtube.com',
  },
} as const;

/**
 * Enquiry form delivery — both routes send the enquiry to plisha38@gmail.com.
 *
 * Primary: FormSubmit.co (free, no account). One-time step: the first
 * submission triggers an "Activate Form" email to the inbox — click the
 * link once and all later submissions deliver normally.
 *
 * Fallback: Web3Forms. Used automatically when FormSubmit is unreachable.
 * Web3Forms sits behind strict Cloudflare bot protection that blocks some
 * networks/ISPs outright (browser fetch dies with a network error), which is
 * why it can no longer be the only route.
 *
 * To route enquiries to a different inbox later: change the email in the
 * FormSubmit URL below (re-activation email will arrive on first submit)
 * and create a fresh Web3Forms key for it at https://web3forms.com.
 */
export const FORMSUBMIT_ENDPOINT = 'https://formsubmit.co/ajax/plisha38@gmail.com';
export const WEB3FORMS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? 'c9ef760e-200a-44fd-9ab5-bc7de71b1952';

/**
 * Build a wa.me click-to-chat deep-link with a pre-filled message.
 * SITE.whatsapp is already in WhatsApp's required format — country code, no
 * leading zero, no '+', spaces or dashes — and encodeURIComponent safely
 * encodes spaces, emoji and the newlines (%0A) inside the templates below.
 */
export function waLink(message: string): string {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

/*
 * Pre-filled WhatsApp enquiry messages — one consistent voice for the whole
 * site. These follow the standard click-to-chat pattern: a short, friendly
 * one-liner that names the business and the exact product, so the customer can
 * send it with one tap. (Deliberately no blank "Name / Location" fields —
 * pre-filled links are meant to stay short; use a form to collect details.)
 */
const WA_HI = `Hi ${SITE.name},`;

export const WA_MESSAGES = {
  generic: `${WA_HI} I'd like a quote for commercial kitchen equipment. Can you share the details?`,
  product: (name: string) =>
    `${WA_HI} I'm interested in the ${name}. Can you share full details and a price quote?`,
  sector: (sector: string) =>
    `${WA_HI} I'm looking for commercial kitchen equipment for the ${sector} sector. Can you share details and a quote?`,
  turnkey: `${WA_HI} I run a food business and need a custom / turnkey commercial kitchen. Can you guide me?`,
} as const;

export const WA_GENERIC = waLink(WA_MESSAGES.generic);
