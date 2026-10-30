import Link from 'next/link';
import type { Product } from '@/lib/data';
import { ProductImg } from './ProductImg';

/** Compact product card linking to the product's own page. No badges on cards —
    material is stated once, on the product page. `showCat` is for mixed lists
    (home page); leave it off where every card shares a category (related products). */
export function ProductCard({ p, showCat = true }: { p: Product; showCat?: boolean }) {
  return (
    <Link className="procard" href={`/products/${p.slug}`}>
      <div className="procard__media">
        <ProductImg src={p.img} alt={`${p.name} — commercial kitchen equipment`} className="procard__img" />
      </div>
      <div className="procard__body">
        {showCat && <span className="procard__cat">{p.cat}</span>}
        <h3 className="procard__name">{p.name}</h3>
        <span className="procard__btn">
          View Details
          <i className="procard__arrow" aria-hidden="true">→</i>
        </span>
      </div>
    </Link>
  );
}
