/* ===========================================================
   SRI HARI INDUSTRIES — Industries We Serve
   --------------------------------------------------------
   WHO we serve — customer sectors, each shown as an icon card
   on a distinct dark-blue band.
   EDIT CONTENT HERE.
   =========================================================== */

import { Icon } from './Icons';
import { waLink } from '@/lib/site';

// WHO we serve — customer sectors, each shown as an icon tile.
// `tone` cycles the four brand colours for the icon badge + hover accent.
const INDUSTRIES: { label: string; ico: string; tone: string }[] = [
  { label: 'Hotels & Resorts', ico: 'i-store', tone: 'blue' },
  { label: 'Restaurants & Cafés', ico: 'i-hat', tone: 'green' },
  { label: 'Cloud Kitchens', ico: 'i-pot', tone: 'yellow' },
  { label: 'Industrial Canteens', ico: 'i-factory', tone: 'red' },
  { label: 'Corporate Cafeterias', ico: 'i-utensils', tone: 'green' },
  { label: 'Hospitals', ico: 'i-cross', tone: 'red' },
  { label: 'Educational Institutions', ico: 'i-cap', tone: 'blue' },
  { label: 'Food Courts', ico: 'i-store', tone: 'yellow' },
  { label: 'Bakeries', ico: 'i-flame', tone: 'yellow' },
  { label: 'Sweet Shops', ico: 'i-bag', tone: 'red' },
  { label: 'Catering Services', ico: 'i-truck', tone: 'blue' },
  { label: 'Marriage Halls', ico: 'i-sparkles', tone: 'green' },
];

export function Services() {
  return (
    <section className="sec soft" id="industries">
      <div className="wrap">
        <div className="head reveal">
          <span className="eyebrow">Who We Serve</span>
          <h2>Industries We Serve</h2>
          <p>
            From single cooking units to full turnkey builds, we engineer high-output,
            food-grade SS 304 equipment for demanding sectors across Coimbatore and Tamil Nadu.
          </p>
        </div>
        <div className="inds reveal">
          {INDUSTRIES.map((it) => (
            <a
              className={`indtile indtile--${it.tone}`}
              key={it.label}
              href={waLink(
                `Hi, I'm looking for commercial kitchen equipment for the ${it.label} sector. Please share details and a quote.`
              )}
              target="_blank"
              rel="noopener"
              aria-label={`Enquire about kitchen equipment for ${it.label}`}
            >
              <span className="indtile__ico">
                <Icon name={it.ico} />
              </span>
              <b>{it.label}</b>
              <span className="indtile__cue">Enquire →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
