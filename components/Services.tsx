/* ===========================================================
   SRI HARI INDUSTRIES — Industries We Serve (flat sector list)
   --------------------------------------------------------
   WHO we serve — a plain, monochrome list so this reads as a
   premium B2B capability list rather than a colourful app grid:
   · 12 uniform sector rows — one icon colour, name, arrow cue
   · 1 navy CTA card ("Don't see your sector?") spanning the row
   Split header: copy left, live fact chips right.
   Every row opens a pre-filled WhatsApp enquiry.
   Styling lives in globals.css under #industries / .itile.
   EDIT CONTENT HERE.
   =========================================================== */

import { Icon } from './Icons';
import { waLink, WA_MESSAGES } from '@/lib/site';

// The sectors we build for. `ico` references an Icons sprite id.
// Ordered by real presence in our client base — marriage halls & convention
// centres (our largest segment) first, down to specialist sectors.
const SECTORS: { label: string; ico: string }[] = [
  { label: 'Marriage Halls & Convention Centres', ico: 'i-sparkles' },
  { label: 'Hotels & Resorts', ico: 'i-store' },
  { label: 'Industrial & Corporate Canteens', ico: 'i-factory' },
  { label: 'Restaurants & Cafés', ico: 'i-hat' },
  { label: 'Educational Institutions', ico: 'i-cap' },
  { label: 'Hospitals & Healthcare', ico: 'i-cross' },
  { label: 'Catering Services', ico: 'i-truck' },
  { label: 'Microbreweries & Bars', ico: 'i-cup' },
  { label: 'Bakeries & Sweet Shops', ico: 'i-flame' },
  { label: 'Food Processing Units', ico: 'i-pot' },
  { label: 'Defence & Government', ico: 'i-shield' },
  { label: 'Social & Recreation Clubs', ico: 'i-utensils' },
];

const enquiry = (sector: string) => waLink(WA_MESSAGES.sector(sector));

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
              across Tamil Nadu, Kerala, Karnataka, Andhra Pradesh &amp; beyond.
            </p>
          </div>
          <div className="indhead__facts">
            <div className="fact">
              <b>12+</b>
              <span>Industries</span>
            </div>
            <div className="fact">
              <b>150+</b>
              <span>Projects</span>
            </div>
            <div className="fact">
              <b>10+</b>
              <span>Years</span>
            </div>
            <div className="fact">
              <b>24/7</b>
              <span>Support</span>
            </div>
          </div>
        </div>

        <div className="bento reveal">
          {SECTORS.map((s) => (
            <a
              className="itile"
              key={s.label}
              href={enquiry(s.label)}
              target="_blank"
              rel="noopener"
              aria-label={`Enquire about kitchen equipment for ${s.label}`}
            >
              <Icon name={s.ico} className="itile__ico" />
              <span className="itile__label">{s.label}</span>
              <Icon name="i-arrow" className="itile__arrow" />
            </a>
          ))}

          <div className="bcta">
            <div className="bcta__txt">
              <b>Don&rsquo;t see your sector?</b>
              <p>
                Every piece is custom-fabricated to your menu, volume and layout — tell us
                what you run.
              </p>
            </div>
            <a
              className="btn btn--y"
              href={waLink(WA_MESSAGES.turnkey)}
              target="_blank"
              rel="noopener"
            >
              Talk to Our Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
