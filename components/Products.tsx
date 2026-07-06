'use client';

import { useCallback, useEffect, useState } from 'react';
import { FEATURED, PRODUCTS, PRODUCTS_BY_CAT, PCATS, type Product } from '@/lib/data';
import { waLink } from '@/lib/site';
import { Icon } from './Icons';

function enquiry(p: Product) {
  return waLink(`Hi, I am interested in the ${p.name}. Please share details & a quote.`);
}

/* ---- image with graceful placeholder fallback ---- */
function FallbackImg({
  src, alt, className,
}: { src: string; alt: string; className?: string }) {
  const [err, setErr] = useState(false);
  if (err) return null;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setErr(true)}
    />
  );
}

export function Products() {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<'list' | 'detail'>('detail');
  const [current, setCurrent] = useState<Product | null>(null);
  const [from, setFrom] = useState<'' | 'catalogue'>('');
  const [zoom, setZoom] = useState(false);

  // lock body scroll while any overlay is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const openDetail = useCallback((p: Product, origin: '' | 'catalogue') => {
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

  const close = useCallback(() => {
    setOpen(false);
    setZoom(false);
  }, []);

  const back = useCallback(() => {
    if (from === 'catalogue') setView('list');
    else close();
  }, [from, close]);

  // Esc closes zoom first, then the modal
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      if (zoom) setZoom(false);
      else if (open) close();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [zoom, open, close]);

  return (
    <>
      <section className="sec" id="products">
        <div className="wrap">
          <div className="head reveal">
            <span className="eyebrow">What We Manufacture</span>
            <h2>Our Products</h2>
            <p>Tap any product for full details &amp; a quick WhatsApp quote.</p>
          </div>

          <div className="pcat" id="pcatalog">
            {FEATURED.map((p) => (
              <button
                className="pcard"
                key={p.slug}
                aria-label={p.name}
                onClick={() => openDetail(p, '')}
              >
                <div className="pcard__media">
                  <span className="pcard__tag">{p.cat}</span>
                  <div className="pcard__ph">
                    <Icon name="i-image" />
                    <span>Photo coming soon</span>
                  </div>
                  <FallbackImg src={p.img} alt={p.name} />
                </div>
                <div className="pcard__body">
                  <h3>{p.name}</h3>
                  <p className="pcard__desc">{p.desc}</p>
                  <span className="pcard__btn">View Details</span>
                </div>
              </button>
            ))}
          </div>

          <div className="ptools reveal">
            <button className="btn btn--blue" type="button" onClick={openCatalogue}>
              View Full Catalogue →
            </button>
          </div>
        </div>
      </section>

      {/* ---- Catalogue / detail modal ---- */}
      <div className={`modal${open ? ' open' : ''}`} aria-hidden={!open}>
        <div className="modal__bg" onClick={close} />
        <div className="pmodal__box" role="dialog" aria-modal="true">
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
                  <span className="eyebrow">Product Category</span>
                  <h3>Full Product Catalogue</h3>
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
                          <div className="pmtile__ph">
                            <Icon name="i-image" />
                          </div>
                          <FallbackImg src={p.img} alt={p.name} />
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
              <button className="pmback" onClick={back}>
                <svg className="ic" viewBox="0 0 24 24">
                  <path d="M19 12H5M11 18l-6-6 6-6" />
                </svg>
                <span>{from === 'catalogue' ? 'Back to Catalogue' : 'Back'}</span>
              </button>
              <div className="pmdetail">
                <div
                  className="pmdetail__img"
                  title="Click to zoom"
                  onClick={() => setZoom(true)}
                >
                  <div className="pmdetail__ph">
                    <Icon name="i-image" />
                    <span>Product photo</span>
                  </div>
                  <FallbackImg key={current.slug} src={current.img} alt={current.name} />
                  <span className="pmdetail__zoom" aria-hidden="true">
                    <svg className="ic" viewBox="0 0 24 24">
                      <circle cx="11" cy="11" r="7" />
                      <path d="M21 21l-4.35-4.35M11 8.5v5M8.5 11h5" />
                    </svg>
                  </span>
                </div>
                <div className="pmdetail__info">
                  <span className="eyebrow">{current.cat}</span>
                  <h3>{current.name}</h3>
                  <p>{current.desc}</p>
                  {current.specs && current.specs.length > 0 && (
                    <div className="mspecs" style={{ display: 'grid' }}>
                      {current.specs.map(([k, v]) => (
                        <div key={k}>
                          <span>{k}</span>
                          <b>{v}</b>
                        </div>
                      ))}
                    </div>
                  )}
                  <h4 className="pmspectitle">Specifications</h4>
                  <ul className="pmfeat">
                    {current.feat.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <div className="modal__cta">
                    <a
                      className="btn btn--g"
                      href={enquiry(current)}
                      target="_blank"
                      rel="noopener"
                    >
                      WhatsApp Enquiry
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ---- Image zoom lightbox ---- */}
      <div
        className={`pzoom${zoom ? ' open' : ''}`}
        aria-hidden={!zoom}
        onClick={() => setZoom(false)}
      >
        <button className="pzoom__close" aria-label="Close" onClick={() => setZoom(false)}>
          ×
        </button>
        {zoom && current && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={current.img} alt={current.name} onClick={(e) => e.stopPropagation()} />
        )}
      </div>
    </>
  );
}
