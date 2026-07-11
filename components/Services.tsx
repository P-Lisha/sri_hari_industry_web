/* ===========================================================
   SRI HARI INDUSTRIES — Industries We Serve (premium icon tiles)
   --------------------------------------------------------
   WHO we serve — an image-free, icon-led grid so this section
   reads differently from the many photo-based sections above:
   · 12 uniform sector tiles — tone-coded icon badge, sector
     name and a one-line description; hover reveals an enquire cue
   · 1 navy CTA card ("Don't see your sector?") spanning the row
   Split header: copy left, live fact chips right.
   Every tile opens a pre-filled WhatsApp enquiry.
   Styling lives in globals.css under #industries / .itile.
   EDIT CONTENT HERE.
   =========================================================== */

import { Icon } from './Icons';
import { waLink, WA_MESSAGES } from '@/lib/site';

// The sectors we build for. `tone` cycles the brand colours (blue/green/
// yellow/red) to keep the grid lively; `ico` references an Icons sprite id.
const SECTORS: { label: string; text: string; ico: string; tone: string }[] = [
  { label: 'Hotels & Resorts', text: 'Turnkey multi-cuisine kitchens.', ico: 'i-store', tone: 'blue' },
  { label: 'Restaurants & Cafés', text: 'Cooking lines built to your menu.', ico: 'i-hat', tone: 'green' },
  { label: 'Industrial Canteens', text: 'Bulk cooking for 1,000+ meals a shift.', ico: 'i-factory', tone: 'yellow' },
  { label: 'Cloud Kitchens', text: 'Compact, high-efficiency setups.', ico: 'i-pot', tone: 'red' },
  { label: 'Corporate Cafeterias', text: 'Clean, high-volume staff dining lines.', ico: 'i-cup', tone: 'blue' },
  { label: 'Hospitals', text: 'Hygienic, food-safe cooking & holding.', ico: 'i-cross', tone: 'red' },
  { label: 'Educational Institutions', text: 'Hostel & mess kitchens built to scale.', ico: 'i-cap', tone: 'green' },
  { label: 'Food Courts', text: 'Multi-stall service & holding counters.', ico: 'i-utensils', tone: 'yellow' },
  { label: 'Bakeries', text: 'Baking, proofing & finishing equipment.', ico: 'i-flame', tone: 'red' },
  { label: 'Sweet Shops', text: 'Bulk sweet & namkeen production units.', ico: 'i-bag', tone: 'green' },
  { label: 'Catering Services', text: 'Mobile bulk cooking & transport gear.', ico: 'i-truck', tone: 'blue' },
  { label: 'Marriage Halls', text: 'Banquet-scale cooking & service lines.', ico: 'i-sparkles', tone: 'yellow' },
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
              SS 304 equipment engineered for demanding sectors across Coimbatore and
              Tamil Nadu.
            </p>
          </div>
          <div className="indhead__facts">
            <div className="fact">
              <b>12+</b>
              <span>Sectors Served</span>
            </div>
            <div className="fact">
              <b>500+</b>
              <span>Projects Completed</span>
            </div>
          </div>
        </div>

        <div className="bento reveal">
          {SECTORS.map((s) => (
            <a
              className={`itile itile--${s.tone}`}
              key={s.label}
              href={enquiry(s.label)}
              target="_blank"
              rel="noopener"
              aria-label={`Enquire about kitchen equipment for ${s.label}`}
            >
              <span className="itile__ico" aria-hidden>
                <Icon name={s.ico} />
              </span>
              <span className="itile__body">
                <b>{s.label}</b>
                <span className="itile__sub">{s.text}</span>
              </span>
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
