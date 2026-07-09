'use client';

import type { Product } from '@/lib/data';
import { ProductImg } from './ProductImg';

/** Compact product card. Clicking it opens the detail popup (no navigation). */
export function ProductCard({
  p, bestseller = false, material = 'SS304', onOpen,
}: {
  p: Product;
  bestseller?: boolean;
  material?: string;
  onOpen: (p: Product) => void;
}) {
  return (
    <button className="procard" type="button" aria-label={p.name} onClick={() => onOpen(p)}>
      <div className="procard__media">
        {bestseller && <span className="procard__badge procard__badge--star">★ Bestseller</span>}
        <span className="procard__badge procard__badge--mat">{material}</span>
        <ProductImg src={p.img} alt={p.name} className="procard__img" />
      </div>
      <div className="procard__body">
        <span className="procard__cat">{p.cat}</span>
        <h3 className="procard__name">{p.name}</h3>
        <span className="procard__btn">
          View Details
          <i className="procard__arrow" aria-hidden="true">→</i>
        </span>
      </div>
    </button>
  );
}
