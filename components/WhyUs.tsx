/* ===========================================================
   SRI HARI INDUSTRIES — "What Makes Us Unique" (why-choose-us)
   -----------------------------------------------------------
   Premium pattern (Middleby stats + Siemens hairline grid):
   intro column left (eyebrow, heading, copy, trust ticks, gold
   CTA); right side = one navy "lead" card (Assured Quality /
   SS 304), a 2×2 big-number stats grid separated by hairlines,
   and a slim trust bar (warranty / AMC / factory-direct).
   Navy is the single accent; gold only on the CTA.
   Styling lives in globals.css under #why-us (.wb).
   EDIT CONTENT HERE.
   =========================================================== */

import { SITE, waLink, WA_MESSAGES } from '@/lib/site';

const STATS: { num: string; label: string }[] = [
  { num: '15+', label: 'Years of manufacturing' },
  { num: '300+', label: 'Projects delivered' },
  { num: '500+', label: 'Happy clients' },
  { num: '24/7', label: 'Service support' },
];

const TRUST: string[] = ['1 Year Warranty', 'AMC Available', 'Factory-Direct Pricing'];

export function WhyUs() {
  return (
    <section className="sec soft wb" id="why-us">
      <div className="wrap wb__cols">
        <div className="wb__intro reveal">
          <span className="eyebrow">Why Choose Us</span>
          <h2>
            What Makes Us <em className="wb__em">Unique</em>
          </h2>
          <p>
            Every equipment we ship is fabricated in our own Coimbatore workshop —
            and that is exactly why we can stand behind every number here.
          </p>
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

        <div className="wb__panel reveal">
          <div className="wb__lead">
            <span className="wb__leadtag">SS 304</span>
            <b>Assured Quality</b>
            <p>
              Food-grade SS 304 with strict quality checks at every weld and polish —
              hygienic, rust-free and built to outlast the kitchen around it.
            </p>
          </div>

          <dl className="wb__stats">
            {STATS.map((s) => (
              <div className="wb__stat" key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.num}</dd>
              </div>
            ))}
          </dl>

          <ul className="wb__trust">
            {TRUST.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
