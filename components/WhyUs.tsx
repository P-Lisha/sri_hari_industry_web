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

const USPS: { icon: string; label: string; text: string }[] = [
  { icon: 'i-truck', label: 'Quick Delivery', text: 'On-time manufacturing and dispatch on every order.' },
  { icon: 'i-check', label: 'Assured Quality', text: 'Food-grade SS 304 with strict quality checks.' },
  { icon: 'i-coins', label: 'Affordable Price', text: 'Factory-direct rates — no middlemen, no markups.' },
  { icon: 'i-shield', label: '1 Year Warranty', text: 'Every equipment covered for a full year.' },
  { icon: 'i-wrench', label: 'AMC Available', text: 'Annual maintenance contracts to keep you running.' },
  { icon: 'i-clock', label: '24/7 Service Available', text: 'Support whenever your kitchen needs it.' },
];

export function WhyUs() {
  return (
    <section className="sec bluesoft" id="why-us">
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
              <div className="whyu__body">
                <span className="whyu__label">{u.label}</span>
                <p className="whyu__text">{u.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
