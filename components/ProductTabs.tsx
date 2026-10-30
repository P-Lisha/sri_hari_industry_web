'use client';

import { useState, type ReactNode } from 'react';

/** Description / Specifications tabs on the product page. Every panel stays in
    the HTML (just `hidden`) so search engines still read all the details. */
export function ProductTabs({ tabs }: { tabs: { label: string; body: ReactNode }[] }) {
  const [on, setOn] = useState(0);
  return (
    <div className="ptabs">
      <div className="ptabs__bar" role="tablist">
        {tabs.map((t, i) => (
          <button
            key={t.label}
            type="button"
            role="tab"
            id={`ptab-${i}`}
            aria-selected={on === i}
            aria-controls={`ppanel-${i}`}
            className={on === i ? 'on' : undefined}
            onClick={() => setOn(i)}
          >
            {t.label}
          </button>
        ))}
      </div>
      {tabs.map((t, i) => (
        <div key={t.label} role="tabpanel" id={`ppanel-${i}`} aria-labelledby={`ptab-${i}`} hidden={on !== i}>
          {t.body}
        </div>
      ))}
    </div>
  );
}
