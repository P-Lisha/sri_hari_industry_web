'use client';

import { useEffect } from 'react';

/** Soft navy glow that follows the cursor inside spotlight-enabled
    cards (.indcell, .wb__panel). One delegated listener; each card
    gets --sx/--sy CSS vars that the ::after overlay reads.
    Skipped on touch devices and when reduced motion is preferred. */
const TARGETS = '.indcell, .wb__panel';

export function CursorSpotlight() {
  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const onMove = (e: MouseEvent) => {
      const card = (e.target as Element | null)?.closest?.(TARGETS) as HTMLElement | null;
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty('--sx', `${e.clientX - r.left}px`);
      card.style.setProperty('--sy', `${e.clientY - r.top}px`);
    };

    document.addEventListener('mousemove', onMove, { passive: true });
    return () => document.removeEventListener('mousemove', onMove);
  }, []);

  return null;
}
