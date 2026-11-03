import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { TopBar } from '@/components/TopBar';
import { Nav } from '@/components/Nav';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import { WhatsAppFab } from '@/components/WhatsAppFab';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ProductImg } from '@/components/ProductImg';
import { PRODUCTS } from '@/lib/data';
import { CATEGORIES, getCategory } from '@/lib/categories';
import { SITE, waLink, WA_MESSAGES } from '@/lib/site';

type Params = { params: Promise<{ cat: string }> };

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ cat: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const c = getCategory((await params).cat);
  if (!c) return {};
  const title = `${c.heading} in India`;
  const url = `/products/category/${c.slug}`;
  return {
    title,
    description: c.metaDesc,
    alternates: { canonical: url },
    openGraph: { type: 'website', url, title, description: c.metaDesc },
  };
}

export default async function CategoryPage({ params }: Params) {
  const c = getCategory((await params).cat);
  if (!c) notFound();

  const products = PRODUCTS.filter((p) => p.cat === c.cat);
  const url = `${SITE.url}/products/category/${c.slug}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${url}#page`,
        url,
        name: `${c.heading} — ${SITE.name}`,
        description: c.metaDesc,
        isPartOf: { '@id': `${SITE.url}/#website` },
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: products.length,
          itemListElement: products.map((p, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            url: `${SITE.url}/products/${p.slug}`,
            name: p.name,
          })),
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
          { '@type': 'ListItem', position: 2, name: 'Products', item: `${SITE.url}/products` },
          { '@type': 'ListItem', position: 3, name: c.cat, item: url },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: c.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <TopBar />
      <Nav />
      <main>
        <section className="sec subpage catpage">
          <div className="wrap">
            <nav aria-label="Breadcrumb">
              <ol className="crumbs">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/products">Products</Link></li>
                <li aria-current="page">{c.cat}</li>
              </ol>
            </nav>

            <header className="cathero">
              <span className="eyebrow">{c.cat}</span>
              <h1>{c.heading}</h1>
              {c.intro.map((t) => (
                <p key={t.slice(0, 24)}>{t}</p>
              ))}
              <div className="cathero__cta">
                <a className="btn btn--blue" href={waLink(WA_MESSAGES.generic)} target="_blank" rel="noopener">Get a Quote</a>
                <a className="btn btn--line" href={`tel:${SITE.phoneHref}`}>Call {SITE.phoneDisplay}</a>
              </div>
            </header>

            <div className="catsec__grid">
              {products.map((p, i) => (
                <Link className="pmtile" key={p.slug} href={`/products/${p.slug}`}>
                  <div className="pmtile__media">
                    <ProductImg src={p.img} alt={`${p.name} — ${c.cat} by ${SITE.name}`} priority={i < 4} />
                  </div>
                  <h2 className="pmtile__h">{p.name}</h2>
                  <span className="pmtile__more">View details →</span>
                </Link>
              ))}
            </div>

            <div className="catinfo">
              <div>
                <h2>Ideal for</h2>
                <ul className="catuses">
                  {c.uses.map((u) => (
                    <li key={u.label}>{u.label}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2>Frequently asked questions</h2>
                <div className="catfaq">
                  {c.faqs.map((f) => (
                    <details key={f.q}>
                      <summary>{f.q}</summary>
                      <p>{f.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            </div>

            <nav className="catother" aria-label="Other product categories">
              <h2>Other categories</h2>
              <ul>
                {CATEGORIES.filter((o) => o.slug !== c.slug).map((o) => (
                  <li key={o.slug}><Link href={`/products/category/${o.slug}`}>{o.cat} →</Link></li>
                ))}
              </ul>
            </nav>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppFab />
      <ScrollReveal />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
