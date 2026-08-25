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
 * EmailJS — delivers the enquiry form as a fully custom-designed HTML email
 * (branded header, styled customer-details table — see emailjs-template.html
 * at the repo root) instead of a plain provider-default layout. Runs entirely
 * client-side, free tier, no backend needed.
 *
 * One-time setup (~5 minutes) at https://www.emailjs.com :
 *   1. Sign up, then Email Services → Add New Service → connect the Gmail
 *      account srihariindustriescbe@gmail.com. Copy the Service ID.
 *   2. Email Templates → Create New Template → open the "Code Editor" view
 *      and paste in the contents of emailjs-template.html (repo root).
 *      On the same template's Settings tab set: To Email =
 *      srihariindustriescbe@gmail.com, Reply To = {{email}}. Copy the
 *      Template ID.
 *   3. Account → General → copy the Public Key.
 *   4. Paste the three values below (replacing the placeholders), OR set
 *      NEXT_PUBLIC_EMAILJS_SERVICE_ID / _TEMPLATE_ID / _PUBLIC_KEY in a
 *      .env.local file.
 * Until real values are set, the form will show a friendly "try WhatsApp" error.
 */
export const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? 'YOUR_SERVICE_ID';
export const EMAILJS_TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? 'YOUR_TEMPLATE_ID';
export const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? 'YOUR_PUBLIC_KEY';

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
