'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

// Quick trust/feature badges shown as floating pills inside the hero
// (previously the separate "Pills" strip below the hero).
const FEATURES = ['Pan-India Delivery', 'Food-Grade SS 304', 'AMC Available', '24/7 Service'];

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
    img: '/images/hero-kitchen-hd.webp',
    alt: 'Bright all-stainless commercial kitchen with ranges, ovens and prep tables',
    badge: 'Designed for Performance · Built for Excellence',
    title: 'Complete Commercial ',
    emphasis: 'Kitchen Solutions',
    text: 'Premium quality stainless steel equipment manufactured in Coimbatore, built to last — from essential cooking units to complete turnkey kitchen setups all over India.',
    ctas: [
      { href: '/products', label: 'Explore Products', cls: 'btn btn--y' },
      { href: '/#contact', label: 'Free Consultation', cls: 'btn btn--ghost' },
    ],
  },
  {
    img: '/images/fabrication.jpg',
    alt: 'Sri Hari fabricators welding and polishing stainless steel kitchen equipment',
    badge: 'Our Own Manufacturing Unit',
    title: 'Fabricated In-House, ',
    emphasis: 'Built to Last',
    text: 'Every unit is cut, welded and finished by our own team in Coimbatore — food-grade SS 304, ISO 9001:2015 quality, powerful machinery that cuts prep time and labour.',
    ctas: [
      { href: '/products', label: 'View Machines', cls: 'btn btn--y' },
      { href: '/#contact', label: 'Enquire Now', cls: 'btn btn--ghost' },
    ],
  },
  {
    img: '/images/hero-kettles-hd.webp',
    alt: 'Steam kettles and food production machinery in a commercial kitchen',
    badge: 'Food Processing · Exhaust · Cold Room',
    title: 'End-to-End ',
    emphasis: 'Kitchen Engineering',
    text: 'Food processing machinery, exhaust & fresh-air systems and modular cold rooms — designed, fabricated and installed by one expert team.',
    ctas: [
      { href: '/#industries', label: 'Turnkey Design', cls: 'btn btn--y' },
      { href: '/#contact', label: 'Talk to Us', cls: 'btn btn--ghost' },
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
          <img
            className="slide__img"
            src={s.img}
            alt={s.alt}
            fetchPriority={i === 0 ? 'high' : 'low'}
            decoding="async"
          />
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
                  {FEATURES.map((label) => (
                    <li className="hero__feat" key={label}>
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
