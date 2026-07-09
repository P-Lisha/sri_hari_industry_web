'use client';

import { useState } from 'react';

/** Product <img> that swaps to a tidy placeholder if the file is missing —
    reused by the home featured cards, the catalogue and the detail page. */
export function ProductImg({
  src, alt, className,
}: { src: string; alt: string; className?: string }) {
  const [err, setErr] = useState(false);

  if (err) {
    return (
      <span className="prodimg-ph" aria-hidden="true">
        <svg className="ic" aria-hidden="true">
          <use href="#i-image" />
        </svg>
        <span>Photo coming soon</span>
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setErr(true)}
    />
  );
}
