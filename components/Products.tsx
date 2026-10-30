import Link from 'next/link';
import { PRODUCTS, PRODUCTS_BY_CAT, PCATS, CATMETA } from '@/lib/data';
import { ProductImg } from './ProductImg';
import { catSlug } from '@/lib/categories';

/** Anchor id for a category section on this page. */
const catId = (cat: string) => 'cat-' + catSlug(cat);

/** /products page body: one card style, one section per category, all crawlable links. */
export function Products() {
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

        <nav className="catnav" aria-label="Product categories">
          {PRODUCTS_BY_CAT.map((g) => (
            <Link key={g.cat} href={`/products/category/${catSlug(g.cat)}`}>
              {g.cat} <span>{g.products.length}</span>
            </Link>
          ))}
        </nav>

        {PRODUCTS_BY_CAT.map((group) => (
          <section className="catsec" key={group.cat} id={catId(group.cat)} aria-labelledby={`${catId(group.cat)}-h`}>
            <header className="catsec__head">
              <h2 id={`${catId(group.cat)}-h`}>
                <Link href={`/products/category/${catSlug(group.cat)}`}>{group.cat}</Link>
              </h2>
              <p>
                {CATMETA[group.cat]?.blurb} <span>· {group.products.length} models</span>{" "}
                <Link className="catsec__all" href={`/products/category/${catSlug(group.cat)}`}>View all →</Link>
              </p>
            </header>
            <div className="catsec__grid">
              {group.products.map((p) => (
                <Link className="pmtile" key={p.slug} href={`/products/${p.slug}`}>
                  <div className="pmtile__media">
                    <ProductImg src={p.img} alt={`${p.name} — ${group.cat}`} />
                  </div>
                  <h3 className="pmtile__h">{p.name}</h3>
                  <span className="pmtile__more">View details →</span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
