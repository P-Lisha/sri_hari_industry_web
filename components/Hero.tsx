'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Icon } from './Icons';

// Quick trust/feature badges shown as floating pills inside the hero
// (previously the separate "Pills" strip below the hero).
const FEATURES: [string, string][] = [
  ['i-truck', 'Quick Delivery'],
  ['i-shield', 'Food-Grade SS 304'],
  ['i-wrench', 'AMC Available'],
  ['i-clock', '24/7 Service'],
];

interface Slide {
  img: string;
  alt: string;
  badge: string;
  title: string;
  emphasis: string;
  text: string;
  ctas: { href: string; label: string; cls: string }[];
}

const SLIDES: Slide[] = [
  {
    img: '/images/hero-1.jpg',
    alt: 'Complete commercial kitchen solutions',
    badge: 'Designed for Performance · Built for Excellence',
    title: 'Complete Commercial ',
    emphasis: 'Kitchen Solutions',
    text: 'Premium quality stainless steel equipment manufactured in Coimbatore, built to last — from essential cooking units to complete turnkey kitchen setups across Tamil Nadu.',
    ctas: [
      { href: '#products', label: 'Explore Products', cls: 'btn btn--y' },
      { href: '#contact', label: 'Free Consultation', cls: 'btn btn--ghost' },
    ],
  },
  {
    img: '/images/hero-2.jpg',
    alt: 'Gas cooking equipment range',
    badge: 'Gas Cooking Equipment',
    title: 'All Your Kitchen Needs ',
    emphasis: 'In One Place',
    text: 'Burners, cooking ranges, bratt pans, grills & boiling pans — 100% food-grade stainless steel, engineered for heavy-duty performance.',
    ctas: [
      { href: '#products', label: 'View Range', cls: 'btn btn--y' },
      { href: '#contact', label: 'Enquire Now', cls: 'btn btn--ghost' },
    ],
  },
  {
    img: '/images/hero-3.jpg',
    alt: 'Food processing, exhaust & cold room systems',
    badge: 'Food Processing · Exhaust · Cold Room',
    title: 'End-to-End ',
    emphasis: 'Kitchen Engineering',
    text: 'Food processing machinery, exhaust & fresh-air systems and modular cold rooms — designed, fabricated and installed by one expert team.',
    ctas: [
      { href: '#services', label: 'Turnkey Design', cls: 'btn btn--y' },
      { href: '#contact', label: 'Talk to Us', cls: 'btn btn--ghost' },
    ],
  },
];

export function Hero() {
  const [cur, setCur] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const restart = useCallback(() => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => setCur((c) => (c + 1) % SLIDES.length), 5000);
  }, []);

  useEffect(() => {
    restart();
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [restart]);

  const go = (n: number) => {
    setCur(n);
    restart();
  };

  return (
    <section className="hero" id="home">
      {SLIDES.map((s, i) => (
        <div className={`slide${i === cur ? ' active' : ''}`} key={s.img}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="slide__img" src={s.img} alt={s.alt} fetchPriority={i === 0 ? 'high' : 'auto'} />
          <div className="hero__overlay">
            <div className="wrap">
              <div className="hero__content">
                <span className="hero__badge">{s.badge}</span>
                {i === 0 ? (
                  <h1>
                    {s.title}
                    <span>{s.emphasis}</span>
                  </h1>
                ) : (
                  <h2 className="hero__h">
                    {s.title}
                    <span>{s.emphasis}</span>
                  </h2>
                )}
                <p>{s.text}</p>
                <div className="cta">
                  {s.ctas.map((c) => (
                    <a key={c.label} href={c.href} className={c.cls}>
                      {c.label}
                    </a>
                  ))}
                </div>
                <ul className="hero__features">
                  {FEATURES.map(([ico, label]) => (
                    <li className="hero__feat" key={label}>
                      <Icon name={ico} />
                      {label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="hero__dots" id="dots">
        {SLIDES.map((s, i) => (
          <b
            key={s.img}
            className={i === cur ? 'on' : ''}
            onClick={() => go(i)}
            role="button"
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
      <div className="hero__tagstrip">DESIGNED FOR PERFORMANCE, BUILT FOR EXCELLENCE</div>
    </section>
  );
}
