import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';
import { PRODUCTS } from '@/lib/data';
import { CATEGORIES } from '@/lib/categories';

/** Date the site content last really changed. Bump it when pages change —
    a build-time `new Date()` told Google every page changed on every deploy,
    which teaches it to ignore lastmod. */
const UPDATED = new Date('2026-10-30');

export default function sitemap(): MetadataRoute.Sitemap {
  const page = (path: string, priority: number): MetadataRoute.Sitemap[number] => ({
    url: `${SITE.url}${path}`,
    lastModified: UPDATED,
    changeFrequency: 'monthly',
    priority,
  });
  return [
    page('', 1),
    page('/products', 0.9),
    ...CATEGORIES.map((c) => page(`/products/category/${c.slug}`, 0.9)),
    ...PRODUCTS.map((p) => page(`/products/${p.slug}`, 0.8)),
    page('/about', 0.7),
  ];
}
