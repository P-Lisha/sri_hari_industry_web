/* ===========================================================
   SRI HARI INDUSTRIES — "Our Process" (clean light timeline)
   -----------------------------------------------------------
   Six steps in a single row: a white circle holding a navy line
   icon, a gold step-number badge on the corner, and a title +
   one-line description below — all linked by one thin connector
   line. Light and on-brand (navy + gold), no dark band / glow.
   Styling lives in globals.css under #process / .ptl*.
   EDIT STEP CONTENT in STEPS below.
   =========================================================== */

import type { ReactNode } from 'react';

/* shared attrs for the 24×24 line glyphs inside each circle.
   Two-tone: navy stroke (currentColor) + a gold-filled accent shape
   per icon. Accents set their own fill/stroke inline so the global
   `fill:none` on .ptl__ico svg doesn't flatten them. */
const gAttr = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
};

/* brand gold used for every icon's accent (matches --yellow) */
const GOLD = '#f6b21b';

const STEPS: { title: string; text: string; icon: ReactNode }[] = [
  {
    title: 'Consultation',
    text: 'Understanding your operational requirements and kitchen workflow.',
    icon: (
      <svg {...gAttr}>
        {/* speech bubble with a tail + gold "typing" dots */}
        <path d="M6 4h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-7l-4 3.5V16H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
        <circle cx="9" cy="10" r="1.15" fill={GOLD} stroke="none" />
        <circle cx="12" cy="10" r="1.15" fill={GOLD} stroke="none" />
        <circle cx="15" cy="10" r="1.15" fill={GOLD} stroke="none" />
      </svg>
    ),
  },
  {
    title: 'Design',
    text: 'Planning customised kitchen layouts and equipment configurations.',
    icon: (
      <svg {...gAttr}>
        {/* floor-plan sheet with internal walls + a gold placed unit */}
        <rect x="3.5" y="4" width="17" height="16" rx="2" />
        <path d="M3.5 11h7M10.5 11V4M14 20v-5M14 15h6.5" />
        <rect x="5" y="14.4" width="3.6" height="3.2" rx="0.6" fill={GOLD} stroke="none" />
      </svg>
    ),
  },
  {
    title: 'Manufacturing',
    text: 'Precision fabrication using advanced machinery and quality materials.',
    icon: (
      <svg {...gAttr}>
        {/* gear body with rim teeth + gold hub */}
        <circle cx="12" cy="12" r="6.4" />
        <path d="M12 5.6V3M12 21v-2.6M18.4 12H21M3 12h2.6M16.53 7.47l1.84-1.84M5.63 18.37l1.84-1.84M16.53 16.53l1.84 1.84M5.63 5.63l1.84 1.84" />
        <circle cx="12" cy="12" r="2.5" fill={GOLD} stroke="none" />
      </svg>
    ),
  },
  {
    title: 'Quality Inspection',
    text: 'Every product is thoroughly inspected before dispatch.',
    icon: (
      <svg {...gAttr}>
        {/* shield + gold tick */}
        <path d="M12 2.5 4.5 5.5v5.5c0 4.6 3.2 8.3 7.5 9.5 4.3-1.2 7.5-4.9 7.5-9.5V5.5L12 2.5Z" />
        <path d="M8.4 12.2 11 14.8l4.7-4.9" fill="none" stroke={GOLD} strokeWidth={2.1} />
      </svg>
    ),
  },
  {
    title: 'Delivery & Installation',
    text: 'Safe transportation, professional installation and commissioning.',
    icon: (
      <svg {...gAttr}>
        {/* delivery truck with a gold cargo package inside */}
        <path d="M2.5 7.5h10.5v6.5H2.5z" />
        <path d="M13 10h4l3 3v1h-7z" />
        <circle cx="6" cy="16.2" r="1.7" />
        <circle cx="16" cy="16.2" r="1.7" />
        <rect x="4.6" y="9" width="4" height="3.7" rx="0.5" fill={GOLD} stroke="none" />
      </svg>
    ),
  },
  {
    title: 'After-Sales Support',
    text: 'Prompt maintenance and technical assistance for uninterrupted performance.',
    icon: (
      <svg {...gAttr}>
        {/* wrench + gold service sparkle */}
        <path d="M14.5 6.2a3.8 3.8 0 0 0-5 4.9L3.9 16.7a2 2 0 0 0 2.8 2.8l5.6-5.6a3.8 3.8 0 0 0 4.9-5l-2.6 2.6-2.2-.4-.4-2.2 2.5-2.5Z" />
        <path d="M18.8 15.4c.35 1.5.75 1.9 2.25 2.25-1.5.35-1.9.75-2.25 2.25-.35-1.5-.75-1.9-2.25-2.25 1.5-.35 1.9-.75 2.25-2.25z" fill={GOLD} stroke="none" />
      </svg>
    ),
  },
];

export function Process() {
  return (
    <section className="sec" id="process">
      <div className="wrap">
        <div className="head reveal">
          <span className="eyebrow eyebrow--y">How We Work</span>
          <h2>Our Process</h2>
          <p>From concept to complete kitchen solution.</p>
        </div>

        <ol className="ptl reveal">
          {STEPS.map((s, i) => (
            <li className="ptl__step" key={s.title}>
              <div className="ptl__mark">
                <span className="ptl__ico">{s.icon}</span>
                <b className="ptl__num">{String(i + 1).padStart(2, '0')}</b>
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
