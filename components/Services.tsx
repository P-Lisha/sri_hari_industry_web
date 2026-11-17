/* ===========================================================
   SRI HARI INDUSTRIES — Industries We Serve
   --------------------------------------------------------
   Premium numbered hairline grid (Siemens / NKR pattern — no
   photos here; "Kitchens We've Built" owns the photography):
   · 6 featured sectors as plain hairline cells (sector name +
     capability note — informational, not clickable)
   · remaining sectors as a slim "Also serving" text row
   · 1 navy CTA card ("Don't see your sector?") — the only
     WhatsApp entry point in this section.
   Split header: copy left, live fact chips right.
   Styling lives in globals.css under #industries / .indcell.
   EDIT CONTENT HERE.
   =========================================================== */

import { waLink, WA_MESSAGES } from '@/lib/site';

// Featured sectors — our 6 biggest segments, with a one-line capability note.
const FEATURED: { label: string; note: string }[] = [
  { label: 'Marriage Halls & Convention Centres', note: 'Bulk cooking lines for 1000+ plates a sitting' },
  { label: 'Hotels & Resorts', note: 'Multi-cuisine kitchens, buffet and banquet lines' },
  { label: 'Industrial & Corporate Canteens', note: 'High-output lines that run three shifts' },
  { label: 'Restaurants & Cafés', note: 'Compact layouts that maximise every square foot' },
  { label: 'Hospitals & Healthcare', note: 'Hygiene-first SS 304 diet kitchens' },
  { label: 'Educational Institutions', note: 'Hostel and mess kitchens built for daily volume' },
];

// Specialist sectors — compact text links below the photo grid.
const MORE: string[] = [
  'Catering Services',
  'Microbreweries & Bars',
  'Bakeries & Sweet Shops',
  'Food Processing Units',
  'Defence & Government',
  'Social & Recreation Clubs',
];

export function Services() {
  return (
    <section className="sec" id="industries">
      <div className="wrap">
        <div className="indhead reveal">
          <div className="indhead__txt">
            <span className="eyebrow">Who We Serve</span>
            <h2>
              Industries We <em>Serve</em>
            </h2>
            <p>
              From single cooking units to full turnkey builds — high-output, food-grade
              SS 304 equipment trusted by marriage halls, hotels, canteens and institutions
              all over India — from Tamil Nadu, Kerala, Karnataka and Andhra Pradesh to every other state.
            </p>
          </div>
          <div className="indhead__facts">
            <div className="fact">
              <b>12+</b>
              <span>Industries</span>
            </div>
            <div className="fact">
              <b>24/7</b>
              <span>Support</span>
            </div>
          </div>
        </div>

        <div className="indgrid reveal">
          {FEATURED.map((s) => (
            <div className="indcell" key={s.label}>
              <span className="indcell__body">
                <b>{s.label}</b>
                <small>{s.note}</small>
              </span>
            </div>
          ))}
        </div>

        <div className="indmore reveal" aria-label="More sectors we serve">
          <span className="indmore__label">Also serving</span>
          {MORE.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>

        <div className="bcta reveal">
          <div className="bcta__txt">
            <b>Don&rsquo;t see your sector?</b>
            <p>
              Every piece is custom-fabricated to your menu, volume and layout — tell us
              what you run.
            </p>
          </div>
          <a
            className="btn btn--ghost"
            href={waLink(WA_MESSAGES.turnkey)}
            target="_blank"
            rel="noopener"
          >
            Talk to Our Team
          </a>
        </div>
      </div>
    </section>
  );
}
