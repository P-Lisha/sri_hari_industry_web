/* ===========================================================
   SRI HARI INDUSTRIES — "What Makes Us Unique" (why-choose-us)
   -----------------------------------------------------------
   Compact trust strip: six USP badges (icon + label) the
   client supplied. Deliberately copy-light — a reassurance
   band shown right after the product catalogue.
   Styling lives in globals.css under #why-us / .whyu.
   EDIT CONTENT HERE.
   =========================================================== */

import { Icon } from './Icons';

const USPS: { icon: string; label: string }[] = [
  { icon: 'i-truck', label: 'Quick Delivery' },
  { icon: 'i-check', label: 'Assured Quality' },
  { icon: 'i-coins', label: 'Affordable Price' },
  { icon: 'i-shield', label: '1 Year Warranty' },
  { icon: 'i-wrench', label: 'AMC Available' },
  { icon: 'i-clock', label: '24/7 Service Available' },
];

export function WhyUs() {
  return (
    <section className="sec" id="why-us">
      <div className="wrap">
        <div className="head reveal">
          <span className="eyebrow">Why Choose Us</span>
          <h2>
            What Makes Us <em>Unique</em>
          </h2>
          <p>Six reasons hotels, halls and canteens across India build their kitchens with us.</p>
        </div>

        <ul className="whyu reveal">
          {USPS.map((u) => (
            <li className="whyu__item" key={u.label}>
              <span className="wico">
                <Icon name={u.icon} />
              </span>
              <span className="whyu__label">{u.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
