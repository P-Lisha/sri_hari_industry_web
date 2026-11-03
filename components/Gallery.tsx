'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getProduct } from '@/lib/data';

/** A delivered project. `type`, `city` and `equipment` are optional — fill them in
    as the client confirms each project; the sector filter tabs and the
    "TYPE · CITY" line appear automatically once they exist. */
interface Project {
  img: string;
  /** work area shown as the small tag, e.g. 'Cooking Line' */
  area: string;
  title: string;
  desc: string;
  alt: string;
  type?: string; // e.g. 'Hospitals', 'Hotels', 'Colleges & Hostels'
  city?: string; // e.g. 'Coimbatore'
  equipment?: string; // e.g. 'Cooking line, steam boiler, 3-sink unit'
  /** catalogue slugs clearly visible in the photo — linked as 'Equipment in this kitchen' */
  products?: string[];
}

const PROJECTS: Project[] = [
  { img: '/images/work-1.webp', products: ['work-table', 'work-table-shelf'], area: 'Complete Kitchen', title: 'Cooking & Prep Line', desc: 'A full kitchen line: cooking ranges, SS prep tables and a single exhaust hood running the length of the room.', alt: 'Commercial kitchen with cooking line, prep tables and exhaust hood' },
  { img: '/images/work-2.webp', products: ['four-burner-continental', 'work-table', 'sink'], area: 'Cooking Line', title: 'Cooking Range Island', desc: 'Island cooking range with an overhead utensil rail, so chefs work from both sides.', alt: 'Island cooking range with overhead utensil rail' },
  { img: '/images/work-6.webp', products: ['chinese-range', 'two-burner', 'sink'], area: 'Indian & Chinese Cooking', title: 'Chinese Range, Burner & Sink', desc: 'A two-wok Chinese range with water taps, a two-burner range and an SS sink under one exhaust hood.', alt: 'Chinese wok range, two-burner range and stainless-steel sink under an exhaust hood' },
  { img: '/images/work-7.webp', products: ['four-burner-continental', 'deep-fryer', 'work-table-shelf'], area: 'Cooking Line', title: 'Continental Cooking Line', desc: 'Continental line with ranges and a salamander under a full-length hood.', alt: 'Continental cooking line with salamander and exhaust hood' },
  { img: '/images/work-8.webp', products: ['work-table'], area: 'Bulk Cooking', title: 'Tilting Pans & Prep', desc: 'A tilting bratt pan and tilting kettles beside a long SS prep table, built for high-volume bulk cooking.', alt: 'Tilting bratt pans and prep table for bulk cooking' },
  { img: '/images/work-9.webp', products: ['four-burner-continental', 'deep-fryer'], area: 'Cooking Line', title: 'Range, Fryer & Hood Line', desc: 'Six-burner range with oven, deep fryer and an overhead pot shelf under a lit exhaust hood.', alt: 'Six-burner range, deep fryer and pot shelf under a lit exhaust hood' },
];

/** Small rail thumbnail for a full-size image: /images/work-9.webp → /images/work-9-thumb.webp */
const thumbOf = (img: string) => img.replace(/\.webp$/, '-thumb.webp');

const ALL = 'All';

export function Gallery() {
  const [filter, setFilter] = useState(ALL);
  const [open, setOpen] = useState<number | null>(null);

  const types = [...new Set(PROJECTS.map((p) => p.type).filter((t): t is string => Boolean(t)))];
  const shown = filter === ALL ? PROJECTS : PROJECTS.filter((p) => p.type === filter);
  const [active, setActive] = useState(0);
  const cur = shown[active] ?? shown[0];

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null);
      if (e.key === 'ArrowRight') setOpen((i) => (i === null ? i : (i + 1) % shown.length));
      if (e.key === 'ArrowLeft') setOpen((i) => (i === null ? i : (i - 1 + shown.length) % shown.length));
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, shown.length]);

  return (
    <section className="sec soft" id="gallery">
      <div className="wrap">
        <div className="projhead reveal">
          <div>
            <span className="eyebrow">Our Work</span>
            <h2>Kitchens We&apos;ve Built</h2>
            <p>Real commercial kitchens designed, fabricated and installed by our team across India.</p>
          </div>
          <a className="btn btn--line" href="#contact">Plan Your Kitchen →</a>
        </div>

        {types.length > 1 && (
          <div className="projtabs" role="tablist" aria-label="Filter projects by sector">
            {[ALL, ...types].map((t) => (
              <button key={t} role="tab" aria-selected={filter === t} className={filter === t ? 'on' : ''}
                onClick={() => { setFilter(t); setActive(0); setOpen(null); }}>
                {t}
              </button>
            ))}
          </div>
        )}

        {cur && (
          <div className="showcase reveal">
            <button className="showcase__main" type="button" onClick={() => setOpen(active)} aria-label={`Enlarge ${cur.title}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img key={cur.img} src={cur.img} alt={cur.alt} decoding="async" />
            </button>
            <div className="showcase__info">
              <span className="showcase__tag">{cur.type && cur.city ? `${cur.type} · ${cur.city}` : cur.area}</span>
              <h3>{cur.title}</h3>
              <p>{cur.desc}</p>
              {cur.equipment && <p className="showcase__eq"><b>Supplied:</b> {cur.equipment}</p>}
              {cur.products && cur.products.length > 0 && (
                <div className="showcase__prods">
                  <b>Equipment in this kitchen</b>
                  <ul>
                    {cur.products.map((slug) => {
                      const p = getProduct(slug);
                      return p ? <li key={slug}><Link href={`/products/${slug}`}>{p.name} →</Link></li> : null;
                    })}
                  </ul>
                </div>
              )}
              <div className="showcase__nav">
                <button type="button" aria-label="Previous kitchen" onClick={() => setActive((active - 1 + shown.length) % shown.length)}>←</button>
                <span>{String(active + 1).padStart(2, '0')} / {String(shown.length).padStart(2, '0')}</span>
                <button type="button" aria-label="Next kitchen" onClick={() => setActive((active + 1) % shown.length)}>→</button>
              </div>
            </div>
            <div className="showcase__thumbs">
              {shown.map((p, i) => (
                <button key={p.img} type="button" className={i === active ? 'on' : ''} onClick={() => setActive(i)} aria-label={`Show ${p.title}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={thumbOf(p.img)} alt="" loading="lazy" decoding="async" />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {open !== null && shown[open] && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={shown[open].title} onClick={() => setOpen(null)}>
          <button className="lightbox__close" aria-label="Close">×</button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={shown[open].img} alt={shown[open].alt} onClick={(e) => e.stopPropagation()} />
          <p className="lightbox__cap">{shown[open].title} · {open + 1} / {shown.length}</p>
        </div>
      )}
    </section>
  );
}
