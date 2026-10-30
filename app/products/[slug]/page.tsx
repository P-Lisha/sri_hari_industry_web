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
import { ProductCard } from '@/components/ProductCard';
import { Icon } from '@/components/Icons';
import { ProductTabs } from '@/components/ProductTabs';
import { PRODUCTS, APPLICATIONS, getProduct, isSS304, relatedProducts, techSpecs } from '@/lib/data';
import { SITE, waLink, WA_MESSAGES } from '@/lib/site';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const p = getProduct((await params).slug);
  if (!p) return {};
  const title = `${p.name} Manufacturer in Coimbatore`;
  const description = `${p.desc} Made by ${SITE.name}, Coimbatore — custom sizes, installation & service across Tamil Nadu.`;
  const url = `/products/${p.slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { type: 'website', url, title, description, images: [{ url: p.img, alt: p.name }] },
    twitter: { card: 'summary_large_image', title, description, images: [p.img] },
  };
}

export default async function ProductPage({ params }: Params) {
  const p = getProduct((await params).slug);
  if (!p) notFound();

  const url = `${SITE.url}/products/${p.slug}`;
  const related = relatedProducts(p.slug, 4);
  const specs = techSpecs(p);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Product',
        '@id': `${url}#product`,
        name: p.name,
        description: p.desc,
        image: `${SITE.url}${p.img}`,
        url,
        sku: p.slug,
        category: p.cat,
        ...(isSS304(p) ? { material: 'SS 304 food-grade stainless steel' } : {}),
        brand: { '@type': 'Brand', name: SITE.name },
        manufacturer: { '@type': 'Organization', name: SITE.name, url: SITE.url },
        additionalProperty: specs.map(([name, value]) => ({ '@type': 'PropertyValue', name, value })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
          { '@type': 'ListItem', position: 2, name: 'Products', item: `${SITE.url}/products` },
          { '@type': 'ListItem', position: 3, name: p.name, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <TopBar />
      <Nav />
      <main>
        <section className="sec subpage pdp-wrap">
          <div className="wrap">
            <nav aria-label="Breadcrumb">
              <ol className="crumbs">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/products">Products</Link></li>
                <li aria-current="page">{p.name}</li>
              </ol>
            </nav>

            <div className="pdp">
              <div className="pdp__media">
                {isSS304(p) && <span className="pdp__mat">SS304</span>}
                <ProductImg src={p.img} alt={`${p.name} — ${p.cat} by ${SITE.name}, Coimbatore`} className="pdp__img" />
              </div>

              <div className="pdp__info">
                <span className="eyebrow">{p.cat}</span>
                <h1>{p.name}</h1>
                <p className="pdp__lead">{p.desc}</p>

                <ul className="pdp__quick">
                  {p.feat.slice(0, 4).map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>

                <div className="pdp__actions">
                  <a className="btn btn--g" href={waLink(WA_MESSAGES.product(p.name))} target="_blank" rel="noopener">
                    Get a Quote on WhatsApp
                  </a>
                  <a className="btn btn--line" href={`tel:${SITE.phoneHref}`}>
                    Call {SITE.phoneDisplay}
                  </a>
                </div>

                <dl className="pdp__meta">
                  <div><dt>Category:</dt><dd><Link href="/products">{p.cat}</Link></dd></div>
                  {isSS304(p) && <div><dt>Material:</dt><dd>SS 304 food-grade stainless steel</dd></div>}
                  <div><dt>Sizes:</dt><dd>Standard &amp; custom-made to order</dd></div>
                </dl>
                <p className="pdp__assure">Delivery, installation &amp; after-sales service across Tamil Nadu</p>
              </div>
            </div>

            <ProductTabs
              tabs={[
                {
                  label: 'Description',
                  body: (
                    <div className="pdesc">
                      <div>
                        <h2 className="pdesc__h">Overview</h2>
                        <p>{p.desc}</p>
                        <h3>Key Features</h3>
                        <ul>
                          {p.feat.map((f) => (
                            <li key={f}>{f}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3>Quality</h3>
                        <ul>
                          {isSS304(p) && <li>Body made of food-grade SS 304 stainless steel</li>}
                          <li>Heavy-duty commercial build for daily high-volume use</li>
                          {isSS304(p) && <li>Hygienic, rust-free finish that is easy to clean</li>}
                        </ul>
                        <h3>Ideal For</h3>
                        <ul className="pdesc__apps">
                          {APPLICATIONS.map((a) => (
                            <li key={a.label}>
                              <i aria-hidden="true"><Icon name={a.icon} /></i>
                              {a.label}
                            </li>
                          ))}
                        </ul>
                        <h3>Customisation</h3>
                        <ul>
                          <li>Built to your kitchen size and layout</li>
                          <li>Need a different size or capacity? <a href="#contact">Contact us</a> for a custom build.</li>
                        </ul>
                      </div>
                    </div>
                  ),
                },
                {
                  label: 'Specifications',
                  body: (
                    <div className="pdp__tech">
                      <table>
                        <tbody>
                          {specs.map(([k, v]) => (
                            <tr key={k}>
                              <th scope="row">{k}</th>
                              <td>{v}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ),
                },
              ]}
            />

            {related.length > 0 && (
              <div className="pdp__related">
                <h2 className="pdp__h">Related Products</h2>
                <div className="prodgrid prodgrid--home">
                  {related.map((r) => (
                    <ProductCard key={r.slug} p={r} />
                  ))}
                </div>
              </div>
            )}
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
