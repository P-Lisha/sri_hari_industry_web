'use client';

import { useEffect, useState } from 'react';
import { ProductImg } from './ProductImg';

/** Product-page media panel: click (or tap) the photo to open a clean
    full-screen lightbox view. Reuses the gallery's .lightbox styling.
    Esc or a click anywhere closes it. */
export function PdpZoom({ src, alt }: { src: string; alt: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="pdp__media pdp__media--zoom"
        onClick={() => setOpen(true)}
        aria-label={`View ${alt} full size`}
      >
        <ProductImg src={src} alt={alt} className="pdp__img" priority />
        <span className="pdp__zoomhint" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <circle cx="11" cy="11" r="7" />
            <path d="m21 21-4.3-4.3M8 11h6M11 8v6" />
          </svg>
        </span>
      </button>

      {open && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={alt} onClick={() => setOpen(false)}>
          <button className="lightbox__close" aria-label="Close">×</button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} onClick={(e) => e.stopPropagation()} />
          <p className="lightbox__cap">{alt}</p>
        </div>
      )}
    </>
  );
}
