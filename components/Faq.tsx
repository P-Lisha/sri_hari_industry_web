'use client';

import { useState } from 'react';
import { FAQS } from '@/lib/seo';
import styles from './Faq.module.css';

export function Faq() {
  /* accordion: only one question open at a time */
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="sec" id="faq">
      <div className="wrap">
        <div className="head reveal">
          <span className="eyebrow">Questions &amp; Answers</span>
          <h2>Commercial Kitchen Equipment in Coimbatore — FAQ</h2>
          <p>Common questions about our kitchen equipment, turnkey setup and service from Coimbatore to all over India.</p>
        </div>
        <div className={styles.wrap}>
          {FAQS.map((f, i) => (
            <details className={styles.item} key={f.q} open={open === i}>
              <summary
                className={styles.q}
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(open === i ? null : i);
                }}
              >
                {f.q}
                <span className={styles.icon} aria-hidden="true">+</span>
              </summary>
              <div className={styles.a}>{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
