'use client';

import { useEffect, useRef, useState } from 'react';

const STATS = [
  { to: 10, label: 'Years of Experience' },
  { to: 500, label: 'Projects Completed' },
  { to: 300, label: 'Happy Clients' },
];

const fmt = (n: number) => n.toLocaleString('en-IN');

function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  // Start at the real figure so SSR / no-JS / reduced-motion show it directly
  // (never a stuck "0+"). JS resets to 0 only to run the count-up animation.
  const [val, setVal] = useState(to);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce =
      typeof matchMedia !== 'undefined' &&
      matchMedia('(prefers-reduced-motion: reduce)').matches;
    // No-animation path: leave the real number in place.
    if (reduce || typeof IntersectionObserver === 'undefined') return;

    // JS + motion OK: reset to 0 and count up when scrolled into view.
    setVal(0);

    const run = () => {
      if (done.current) return;
      done.current = true;
      const dur = 1500;
      const t0 = performance.now();
      const step = (now: number) => {
        const p = Math.min((now - t0) / dur, 1);
        const e = 1 - Math.pow(1 - p, 3);
        setVal(Math.round(to * e));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (en.isIntersecting) {
            run();
            io.unobserve(en.target);
          }
        }),
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to]);

  return <span className="count" ref={ref}>{fmt(val)}</span>;
}

export function Stats() {
  return (
    <section className="stats">
      <div className="wrap">
        {STATS.map((s) => (
          <div className="stat reveal" key={s.label}>
            <b>
              <Counter to={s.to} />
              <i>+</i>
            </b>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
