import { SITE } from '@/lib/site';
import { PCATS, PRODUCTS } from '@/lib/data';
import { SERVICE_AREAS, FAQS } from '@/lib/seo';

/** Schema.org structured data (JSON-LD) for rich results & local SEO. */
export function JsonLd() {
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'LocalBusiness', 'Manufacturer'],
        '@id': `${SITE.url}/#business`,
        name: SITE.name,
        legalName: SITE.legalName,
        url: SITE.url,
        email: SITE.email,
        telephone: SITE.phoneDisplay,
        image: `${SITE.url}/images/hero-1.jpg`,
        logo: `${SITE.url}/images/logo.png`,
        slogan: 'Designed for Performance, Built for Excellence',
        description: SITE.longDesc,
        foundingDate: String(SITE.yearFounded),
        founder: { '@type': 'Person', name: SITE.managingDirector },
        areaServed: [
          { '@type': 'State', name: 'Tamil Nadu' },
          ...SERVICE_AREAS.map((c) => ({ '@type': 'City', name: c })),
        ],
        knowsLanguage: ['en', 'ta'],
        priceRange: '₹₹',
        currenciesAccepted: 'INR',
        paymentAccepted: 'Cash, UPI, Bank Transfer, Cheque',
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '09:00',
            closes: '20:00',
          },
        ],
        keywords:
          'commercial kitchen equipment manufacturers Coimbatore, stainless steel kitchen fabrication, cooking range, automatic chapati machine, idli plant, cold room, bain marie, turnkey kitchen Tamil Nadu',
        address: {
          '@type': 'PostalAddress',
          streetAddress: SITE.address.line,
          addressLocality: SITE.address.locality,
          addressRegion: SITE.address.region,
          postalCode: SITE.address.postalCode,
          addressCountry: SITE.address.country,
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: SITE.geo.lat,
          longitude: SITE.geo.lng,
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: SITE.phoneDisplay,
          contactType: 'sales',
          areaServed: 'IN',
          availableLanguage: ['en', 'ta'],
        },
        // Empty social links are filtered out — only real profiles appear.
        sameAs: [SITE.social.facebook, SITE.social.instagram, SITE.social.youtube].filter(Boolean),
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Commercial Kitchen Equipment',
          itemListElement: PCATS.map((c) => ({
            '@type': 'OfferCatalog',
            name: c.cat,
            itemListElement: c.items.map((it) => {
              const p = PRODUCTS.find((x) => x.slug === it[1]);
              return {
                '@type': 'Offer',
                priceCurrency: 'INR',
                availability: 'https://schema.org/InStock',
                itemCondition: 'https://schema.org/NewCondition',
                seller: { '@id': `${SITE.url}/#business` },
                itemOffered: {
                  '@type': 'Product',
                  name: it[0],
                  ...(p?.desc ? { description: p.desc } : {}),
                  category: c.cat,
                  ...(p ? { image: `${SITE.url}${p.img}` } : {}),
                  brand: { '@id': `${SITE.url}/#business` },
                },
              };
            }),
          })),
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.name,
        publisher: { '@id': `${SITE.url}/#business` },
        inLanguage: 'en-IN',
      },
      {
        '@type': 'WebPage',
        '@id': `${SITE.url}/#webpage`,
        url: SITE.url,
        name: `${SITE.name} — Commercial Kitchen Equipment Manufacturers in Coimbatore`,
        isPartOf: { '@id': `${SITE.url}/#website` },
        about: { '@id': `${SITE.url}/#business` },
        description: SITE.longDesc,
        inLanguage: 'en-IN',
      },
      {
        '@type': 'FAQPage',
        '@id': `${SITE.url}/#faq`,
        mainEntity: FAQS.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${SITE.url}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
          { '@type': 'ListItem', position: 2, name: 'Products', item: `${SITE.url}/#products` },
          { '@type': 'ListItem', position: 3, name: 'Contact', item: `${SITE.url}/#contact` },
        ],
      },
      {
        '@type': 'ItemList',
        '@id': `${SITE.url}/#products`,
        name: 'Our Products',
        numberOfItems: PRODUCTS.length,
        itemListElement: PRODUCTS.map((p, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          item: {
            '@type': 'Product',
            '@id': `${SITE.url}/#product-${p.slug}`,
            name: p.name,
            description: p.desc,
            category: p.cat,
            sku: p.slug,
            image: `${SITE.url}${p.img}`,
            url: `${SITE.url}/#products`,
            material: 'SS 304 food-grade stainless steel',
            brand: { '@type': 'Brand', name: SITE.name },
            manufacturer: { '@id': `${SITE.url}/#business` },
            offers: {
              '@type': 'Offer',
              priceCurrency: 'INR',
              availability: 'https://schema.org/InStock',
              itemCondition: 'https://schema.org/NewCondition',
              seller: { '@id': `${SITE.url}/#business` },
              url: `${SITE.url}/#products`,
            },
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
