import Link from 'next/link';
import { FEATURED, PRODUCTS, PRODUCTS_BY_CAT, PCATS, CATMETA } from '@/lib/data';
import { Icon } from './Icons';
import { ProductImg } from './ProductImg';
import { ProductCard } from './ProductCard';

/** /products page body: bestsellers + the full catalogue as crawlable links. */
export function Products() {
  const bestsellers = FEATURED.filter((p) => p.bestseller);

  return (
    <section className="sec subpage catpage" id="products">
      <div className="wrap">
        <div className="head reveal">
          <span className="eyebrow">Our Products</span>
          <h1>Commercial Kitchen Equipment</h1>
          <p>
            {PRODUCTS.length} models across {PCATS.length} categories — food-grade stainless-steel
            equipment built in Coimbatore for hotels, restaurants, hospitals and institutional kitchens.
          </p>
        </div>

        <h2 className="pmcat-h">★ Bestsellers</h2>
        <div className="prodgrid prodgrid--home reveal">
          {bestsellers.map((p) => (
            <ProductCard key={p.slug} p={p} bestseller material={p.material} />
          ))}
        </div>

        <div className="pmgrid pmgrid--page">
          {PRODUCTS_BY_CAT.map((group) => (
            <div key={group.cat} style={{ display: 'contents' }}>
              <h2 className="pmcat-h">
                <Icon name={group.ico} />
                {group.cat}
                <small>
                  {CATMETA[group.cat]?.blurb}
                </small>
              </h2>
              {group.products.map((p) => (
                <Link className="pmtile" key={p.slug} href={`/products/${p.slug}`}>
                  <div className="pmtile__media">
                    <ProductImg src={p.img} alt={`${p.name} — ${group.cat}`} />
                  </div>
                  <h3 className="pmtile__h">{p.name}</h3>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
