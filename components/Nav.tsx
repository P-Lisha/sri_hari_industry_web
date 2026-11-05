'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const LINKS = [
  ['/', 'Home'],
  ['/products', 'Products'],
  ['/#process', 'Process'],
  ['/about', 'About'],
  ['/#contact', 'Contact'],
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Highlight the menu item for the page we're on. Hash links (/#process,
  // /#contact) are home-page sections, not pages — leave those un-highlighted.
  const isActive = (href: string) => {
    if (href.includes('#')) return false;
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}`} id="nav">
      <div className="wrap">
        <a className="brand" href="/" aria-label="Sri Hari Industries — Mfrs. of Commercial Kitchen Equipment">
          <span className="brand__mark" aria-hidden="true" />
          <span className="brand__txt">
            <b><span className="g">Sri</span> Hari <span className="g">Industries</span></b>
            <i>Kitchen Consultancy &amp; Designs</i>
          </span>
        </a>
        <button
          className={`burger${open ? ' x' : ''}`}
          aria-label="Toggle menu"
          aria-controls="menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
        <nav className={`menu${open ? ' open' : ''}`} id="menu">
          {LINKS.map(([href, label]) => {
            const active = isActive(href);
            return (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={active ? 'active' : undefined}
                aria-current={active ? 'page' : undefined}
              >
                {label}
              </a>
            );
          })}
        </nav>
        <a className="btn btn--blue navcta" href="/#contact">Get a Quote</a>
      </div>
    </header>
  );
}
