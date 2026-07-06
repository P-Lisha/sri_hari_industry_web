import { SITE } from '@/lib/site';
import { PCATS, PRODUCTS } from '@/lib/data';
import { SERVICE_AREAS } from '@/lib/seo';

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
        sameAs: [SITE.social.facebook, SITE.social.instagram, SITE.social.youtube],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Commercial Kitchen Equipment',
          itemListElement: PCATS.map((c) => ({
            '@type': 'OfferCatalog',
            name: c.cat,
            itemListElement: c.items.map((it) => ({
              '@type': 'Offer',
              itemOffered: { '@type': 'Product', name: it[0] },
            })),
          })),
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          reviewCount: '300',
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
            name: p.name,
            category: p.cat,
            image: `${SITE.url}${p.img}`,
            brand: { '@type': 'Brand', name: SITE.name },
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
