'use client';

import { useEffect } from 'react';

/** Adds `.in` to every `.reveal` element as it scrolls into view —
    mirrors the original IntersectionObserver behaviour, mounted once. */
export function ScrollReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    if (!els.length) return;

    if (typeof IntersectionObserver === 'undefined') {
      els.forEach((el) => el.classList.add('in'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );

    els.forEach((el, i) => {
      el.style.transitionDelay = `${(i % 3) * 90}ms`;
      io.observe(el);
    });

    return () => io.disconnect();
  }, []);

  return null;
}
