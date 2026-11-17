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
    'Sri Hari Industries — manufacturers of commercial kitchen equipment & stainless steel fabrication in Coimbatore, supplying kitchens all over India. Cooking ranges, automatic dosa/chapati makers, exhaust systems, cold rooms & complete turnkey kitchen solutions. ISO 9001:2015 certified.',

  // Live domain.
  url: 'https://srihariindustries.com',

  phoneDisplay: '+91 94433 92337',
  phoneHref: '+919443392337',
  whatsapp: '919443392337',
  email: 'srihariindustriescbe@gmail.com',

  managingDirector: 'Mr. Mahesh Kumar',
  iso: 'ISO 9001:2015',
  // Matches the "15+ years" claim used across the site (2026).
  yearFounded: 2011,

  address: {
    line: '6/23A, Uzhaippalar Road, Urumandampalayam',
    locality: 'Coimbatore',
    region: 'Tamil Nadu',
    postalCode: '641029',
    country: 'IN',
  },
  // Approx geo for Urumandampalayam, Coimbatore (for LocalBusiness JSON-LD).
  geo: { lat: 11.0588, lng: 76.9319 },

  // `ll=` centre-only embed: no Google place card / white overlay at all.
  // The factory spot sits at the exact centre; Contact.tsx draws our own pin.
  mapEmbed:
    'https://maps.google.com/maps?ll=11.0588,76.9319&z=16&output=embed',
  mapDirections:
    'https://www.google.com/maps/dir/?api=1&destination=11.0588,76.9319',

  brochure: '/brochure/sri-hari-industries-brochure.pdf',

  // Only real, verified profiles — leave a value '' to hide its icon and keep
  // it out of the JSON-LD sameAs (never point sameAs at a generic homepage).
  social: {
    instagram: 'https://www.instagram.com/srihariindustriesads',
    facebook: '',
    youtube: '',
  },
} as const;

/**
 * Enquiry form delivery via FormSubmit.co (already activated). Enquiries go to
 * srihariindustriescbe@gmail.com.
 * To change the inbox, edit the email in the URL (re-activation needed).
 */
export const FORMSUBMIT_ENDPOINT = 'https://formsubmit.co/ajax/srihariindustriescbe@gmail.com';

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
