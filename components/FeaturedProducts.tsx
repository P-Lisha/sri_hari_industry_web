import Link from 'next/link';
import { HOME_FEATURED } from '@/lib/data';
import { ProductCard } from './ProductCard';

/** Home-page teaser: bestseller cards linking to their product pages. */
export function FeaturedProducts() {
  return (
    <section className="sec" id="products">
      <div className="wrap">
        <div className="head reveal">
          <span className="eyebrow">Our Products</span>
          <h2>Premium Commercial Kitchen Equipment</h2>
          <p>
            Food-grade stainless-steel equipment built for hotels, restaurants, hospitals and
            institutional kitchens.
          </p>
        </div>
        <div className="prodgrid prodgrid--home reveal">
          {HOME_FEATURED.map((p) => (
            <ProductCard key={p.slug} p={p} />
          ))}
        </div>
        <div className="ptools reveal">
          <Link className="btn btn--blue" href="/products">
            View All Products →
          </Link>
        </div>
      </div>
    </section>
  );
}
