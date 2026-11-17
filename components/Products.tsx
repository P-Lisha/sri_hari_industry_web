import Link from 'next/link';
import { PRODUCTS_BY_CAT, CATMETA } from '@/lib/data';
import { ProductImg } from './ProductImg';
import { catSlug } from '@/lib/categories';
import { PageHero } from './PageHero';
import { SITE, waLink, WA_MESSAGES } from '@/lib/site';

/** Anchor id for a category section on this page. */
const catId = (cat: string) => 'cat-' + catSlug(cat);

/** /products page body: navy page hero, then one card style, one section per category, all crawlable links. */
export function Products() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Products' }]}
        eyebrow="Our Products"
        title="Commercial Kitchen Equipment"
        lead="Food-grade stainless-steel commercial kitchen equipment built in Coimbatore for hotels, restaurants, hospitals and institutional kitchens."
      >
        <a className="btn btn--y" href={waLink(WA_MESSAGES.generic)} target="_blank" rel="noopener">
          Get a Quote
        </a>
        <a className="btn btn--line" href={`tel:${SITE.phoneHref}`}>
          Call {SITE.phoneDisplay}
        </a>
      </PageHero>

      <section className="sec subpage catpage" id="products">
      <div className="wrap">
        <nav className="catnav" aria-label="Product categories">
          {PRODUCTS_BY_CAT.map((g) => (
            <Link key={g.cat} href={`/products/category/${catSlug(g.cat)}`}>
              {g.cat}
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
                {CATMETA[group.cat]?.blurb}{" "}
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
    </>
  );
}
