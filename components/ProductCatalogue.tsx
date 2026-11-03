'use client';

import { useMemo, useState } from 'react';
import { PCATS, PRODUCTS, type Product } from '@/lib/data';
import { Icon } from './Icons';
import { ProductCard } from './ProductCard';

const CAT_NAMES = ['All', ...PCATS.map((c) => c.cat)];

export function ProductCatalogue() {
  const [q, setQ] = useState('');
  const [cat, setCat] = useState('All');

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    return PRODUCTS.filter((p: Product) => {
      const inCat = cat === 'All' || p.cat === cat;
      const inSearch = !term || p.name.toLowerCase().includes(term) || p.cat.toLowerCase().includes(term);
      return inCat && inSearch;
    });
  }, [q, cat]);

  return (
    <>
      <div className="catbar reveal">
        <div className="catsearch">
          <Icon name="i-search" />
          <input
            type="search"
            placeholder="Search products — e.g. cold room, dosa, work table…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            aria-label="Search products"
          />
        </div>
        <div className="pfilters catfilters">
          {CAT_NAMES.map((c) => (
            <button
              key={c}
              type="button"
              className={`pfilter${cat === c ? ' on' : ''}`}
              onClick={() => setCat(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {results.length > 0 ? (
        <>
          <div className="prodgrid reveal">
            {results.map((p) => (
              <ProductCard key={p.slug} p={p} />
            ))}
          </div>
          <p className="catcount">
            Showing {results.length} of {PRODUCTS.length} products
          </p>
        </>
      ) : (
        <p className="catempty">No products match &ldquo;{q}&rdquo;. Try a different search or category.</p>
      )}
    </>
  );
}
