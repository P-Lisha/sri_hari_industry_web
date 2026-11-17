/* ===========================================================
   SRI HARI INDUSTRIES — "What Makes Us Unique" (why-choose-us)
   -----------------------------------------------------------
   Theme-matched design: soft section background, centred
   header with eyebrow pill, six clean white cards with soft
   brand-colour icon chips (blue / green / gold / red) — same
   card idiom as the rest of the site (.wcard / .wico style).
   Trust row + gold CTA centred below.
   Styling lives in globals.css under #why-us (.wb).
   EDIT CONTENT HERE.
   =========================================================== */

import type { ReactElement } from 'react';
import { SITE, waLink, WA_MESSAGES } from '@/lib/site';

const ICONS: Record<string, ReactElement> = {
  truck: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  tag: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
      <path d="M7.5 7.5h.01" />
    </svg>
  ),
  award: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.48 12.89 17 22l-5-3-5 3 1.52-9.11" />
    </svg>
  ),
  wrench: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  headset: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5a9 9 0 0 1 18 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
    </svg>
  ),
};

/* tone → icon-chip colour: g=green, b=blue, y=gold, r=red (see globals.css) */
const USPS: { icon: string; label: string; text: string; tone: 'g' | 'b' | 'y' | 'r'; tag?: string }[] = [
  {
    icon: 'shield',
    label: 'Assured Quality',
    text: 'Food-grade SS 304 with strict quality checks at every weld and polish.',
    tone: 'g',
    tag: 'SS 304',
  },
  { icon: 'truck', label: 'Quick Delivery', text: 'On-time manufacturing and dispatch on every order.', tone: 'y' },
  { icon: 'tag', label: 'Affordable Price', text: 'Factory-direct rates — no middlemen, no markups.', tone: 'r' },
  { icon: 'award', label: '1 Year Warranty', text: 'Every equipment covered for a full year.', tone: 'b' },
  { icon: 'wrench', label: 'AMC Available', text: 'Annual maintenance contracts to keep you running.', tone: 'g' },
  { icon: 'headset', label: '24/7 Service', text: 'Support whenever your kitchen needs it — day or night.', tone: 'y' },
];

export function WhyUs() {
  return (
    <section className="sec soft wb" id="why-us">
      <div className="wrap">
        <div className="head reveal">
          <span className="eyebrow eyebrow--g">Why Choose Us</span>
          <h2>
            What Makes Us <em className="wb__em">Unique</em>
          </h2>
          <p>
            Every equipment we ship is fabricated in our own Coimbatore workshop —
            and that is exactly why we can stand behind these six promises.
          </p>
        </div>

        <ul className="wb__grid reveal">
          {USPS.map((u) => (
            <li key={u.label} className={`wb__card wb__card--${u.tone}`}>
              <span className="wb__ic">{ICONS[u.icon]}</span>
              {u.tag && <span className="wb__tag">{u.tag}</span>}
              <b>{u.label}</b>
              <p>{u.text}</p>
            </li>
          ))}
        </ul>

        <div className="wb__foot reveal">
          <ul className="wb__badges">
            <li>{SITE.iso} Certified Manufacturer</li>
            <li>Factory-Direct Pricing</li>
            <li>Made in Coimbatore</li>
          </ul>
          <a
            className="btn btn--y wb__cta"
            href={waLink(WA_MESSAGES.turnkey)}
            target="_blank"
            rel="noopener"
          >
            Talk to Our Team →
          </a>
        </div>
      </div>
    </section>
  );
}
