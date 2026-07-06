import { FAQS } from '@/lib/seo';
import styles from './Faq.module.css';

export function Faq() {
  return (
    <section className="sec" id="faq">
      <div className="wrap">
        <div className="head reveal">
          <span className="eyebrow">Questions &amp; Answers</span>
          <h2>Commercial Kitchen Equipment in Coimbatore — FAQ</h2>
          <p>Common questions about our kitchen equipment, turnkey setup and service across Coimbatore &amp; Tamil Nadu.</p>
        </div>
        <div className={styles.wrap}>
          {FAQS.map((f) => (
            <details className={styles.item} key={f.q}>
              <summary className={styles.q}>
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
