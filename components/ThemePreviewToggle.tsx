'use client';

import { useEffect, useState } from 'react';

/**
 * TEMPORARY client-preview theme switcher. Lets a client compare three looks
 * on the real site before deciding:
 *   'current'   — the live bronze design (no body class)
 *   'reference' — navy + bronze reference-style concept (body.theme-ref)
 *   'orange'    — bright navy + orange industrial (body.theme-orange)
 *
 * The choice is saved so the client can browse pages while previewing.
 * Remove this component + its CSS blocks once the design is decided.
 */
type Mode = 'current' | 'orange' | 'teal' | 'ltteal';

const OPTIONS: { id: Mode; label: string; cls: string }[] = [
  { id: 'current', label: 'Light · Bronze', cls: '' },
  { id: 'ltteal', label: 'Light · Teal', cls: 'theme-ltteal' },
  { id: 'orange', label: 'Dark · Orange', cls: 'theme-orange' },
  { id: 'teal', label: 'Dark · Teal', cls: 'theme-teal' },
];

function apply(mode: Mode) {
  const b = document.body;
  b.classList.remove('theme-orange', 'theme-teal', 'theme-ltteal');
  const o = OPTIONS.find((x) => x.id === mode);
  if (o && o.cls) b.classList.add(o.cls);
}

export function ThemePreviewToggle() {
  const [mode, setMode] = useState<Mode>('current');

  useEffect(() => {
    const saved = (localStorage.getItem('shi-theme') as Mode) || 'current';
    setMode(saved);
    apply(saved);
  }, []);

  const pick = (m: Mode) => {
    setMode(m);
    apply(m);
    localStorage.setItem('shi-theme', m);
  };

  return (
    <div className="themeswitch" role="group" aria-label="Preview a design theme">
      <span className="themeswitch__lbl">Preview&nbsp;theme</span>
      {OPTIONS.map((o) => (
        <button
          key={o.id}
          type="button"
          className={`themeswitch__btn${mode === o.id ? ' on' : ''}`}
          onClick={() => pick(o.id)}
          aria-pressed={mode === o.id}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
