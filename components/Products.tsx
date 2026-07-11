'use client';

import { useCallback, useEffect, useState } from 'react';
import {
  HOME_FEATURED, PRODUCTS, PRODUCTS_BY_CAT, PCATS, APPLICATIONS, type Product,
} from '@/lib/data';
import { waLink, WA_MESSAGES } from '@/lib/site';
import { Icon } from './Icons';
import { ProductImg } from './ProductImg';
import { ProductCard } from './ProductCard';

function enquiry(p: Product) {
  return waLink(WA_MESSAGES.product(p.name));
}

/** Featured products + full catalogue, all shown in popups (no separate pages). */
export function Products() {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<'list' | 'detail'>('detail');
  const [current, setCurrent] = useState<Product | null>(null);
  const [from, setFrom] = useState<'' | 'catalogue'>('');

  // lock body scroll while the modal is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const openDetail = useCallback((p: Product, origin: '' | 'catalogue' = '') => {
    setCurrent(p);
    setFrom(origin);
    setView('detail');
    setOpen(true);
  }, []);

  const openCatalogue = useCallback(() => {
    setFrom('catalogue');
    setView('list');
    setOpen(true);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  const back = useCallback(() => {
    if (from === 'catalogue') setView('list');
    else close();
  }, [from, close]);

  // Esc closes the modal
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) close();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, close]);

  return (
    <>
      <section className="sec" id="products">
        <div className="wrap">
          <div className="head reveal">
            <span className="eyebrow">Our Products</span>
            <h2>Premium Commercial Kitchen Equipment</h2>
            <p>
              Food-grade stainless-steel equipment built for hotels, restaurants, hospitals and
              institutional kitchens. Tap any product for full details &amp; a quick quote.
            </p>
          </div>

          <div className="prodgrid prodgrid--home reveal">
            {HOME_FEATURED.map((p) => (
              <ProductCard
                key={p.slug}
                p={p}
                bestseller={p.bestseller}
                material={p.material}
                onOpen={openDetail}
              />
            ))}
          </div>

          <div className="ptools reveal">
            <button className="btn btn--blue" type="button" onClick={openCatalogue}>
              View All Products →
            </button>
          </div>
        </div>
      </section>

      {/* ---- Catalogue + detail popup ---- */}
      <div className={`modal${open ? ' open' : ''}`} aria-hidden={!open}>
        <div className="modal__bg" onClick={close} />
        <div className={`pmodal__box${view === 'detail' ? ' pmodal__box--wide' : ''}`} role="dialog" aria-modal="true">
          <button className="modal__close" onClick={close} aria-label="Close">
            ×
          </button>

          {view === 'list' && (
            <div>
              <div className="pmodal__head">
                <span className="pmodal__ico">
                  <Icon name="i-pot" />
                </span>
                <div>
                  <span className="eyebrow">Full Catalogue</span>
                  <h3>All Products</h3>
                  <p>
                    All {PRODUCTS.length} models across {PCATS.length} categories — tap any product for details.
                  </p>
                </div>
              </div>
              <div className="pmgrid">
                {PRODUCTS_BY_CAT.map((group) => (
                  <div key={group.cat} style={{ display: 'contents' }}>
                    <h4 className="pmcat-h">
                      <Icon name={group.ico} />
                      {group.cat}
                    </h4>
                    {group.products.map((p) => (
                      <button
                        className="pmtile"
                        key={p.slug}
                        aria-label={p.name}
                        onClick={() => openDetail(p, 'catalogue')}
                      >
                        <div className="pmtile__media">
                          <ProductImg src={p.img} alt={p.name} />
                        </div>
                        <h4>{p.name}</h4>
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}

          {view === 'detail' && current && (
            <div>
              {from === 'catalogue' && (
                <button className="pmback" onClick={back}>
                  <svg className="ic" viewBox="0 0 24 24">
                    <path d="M19 12H5M11 18l-6-6 6-6" />
                  </svg>
                  <span>Back to Catalogue</span>
                </button>
              )}

              <div className="pdp pdp--modal">
                <div className="pdp__media">
                  <span className="pdp__mat">SS304</span>
                  <ProductImg key={current.slug} src={current.img} alt={current.name} className="pdp__img" />
                </div>

                <div className="pdp__info">
                  <span className="eyebrow">{current.cat}</span>
                  <h3>{current.name}</h3>
                  <div className="pdp__stars" aria-label="Rated 5 out of 5">
                    <span aria-hidden="true">★★★★★</span>
                    <small>Trusted commercial-grade quality</small>
                  </div>
                  <p className="pdp__lead">{current.desc}</p>

                  <h4 className="pdp__h">Specifications</h4>
                  <ul className="pdp__specs">
                    {current.feat.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>

                  <h4 className="pdp__h pdp__h--apps">Applications</h4>
                  <div className="pdp__apps pdp__apps--block">
                    {APPLICATIONS.map((a) => (
                      <span className="pdp__app" key={a.label}>
                        <i aria-hidden="true">{a.icon}</i>
                        {a.label}
                      </span>
                    ))}
                  </div>

                  <div className="pdp__actions">
                    <a className="btn btn--g" href={enquiry(current)} target="_blank" rel="noopener">
                      WhatsApp Enquiry
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
