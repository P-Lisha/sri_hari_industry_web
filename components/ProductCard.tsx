import Link from 'next/link';
import { isSS304, type Product } from '@/lib/data';
import { ProductImg } from './ProductImg';

/** Compact product card linking to the product's own page. */
export function ProductCard({
  p, bestseller = false, material = 'SS304',
}: {
  p: Product;
  bestseller?: boolean;
  material?: string;
}) {
  return (
    <Link className="procard" href={`/products/${p.slug}`}>
      <div className="procard__media">
        {bestseller && <span className="procard__badge procard__badge--star">★ Bestseller</span>}
        {isSS304(p) && <span className="procard__badge procard__badge--mat">{material}</span>}
        <ProductImg src={p.img} alt={`${p.name} — commercial kitchen equipment`} className="procard__img" />
      </div>
      <div className="procard__body">
        <span className="procard__cat">{p.cat}</span>
        <h3 className="procard__name">{p.name}</h3>
        <span className="procard__btn">
          View Details
          <i className="procard__arrow" aria-hidden="true">→</i>
        </span>
      </div>
    </Link>
  );
}
