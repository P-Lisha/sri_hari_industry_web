/* Professional line-icon sprite (referenced via <use href="#i-…">) and a
   small <Icon> helper. Rendered once near the top of <body>. */

export function IconSprite() {
  return (
    <svg className="svg-defs" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
      <symbol id="i-phone" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" /></symbol>
      <symbol id="i-mail" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></symbol>
      <symbol id="i-pin" viewBox="0 0 24 24"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></symbol>
      <symbol id="i-factory" viewBox="0 0 24 24"><path d="M2 20a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V9l-7 4V9l-7 4V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1Z" /><path d="M6 18h.01M10 18h.01M14 18h.01M18 18h.01" /></symbol>
      <symbol id="i-store" viewBox="0 0 24 24"><path d="m3 8 1.4-4.2A1 1 0 0 1 5.35 3h13.3a1 1 0 0 1 .95.8L21 8" /><path d="M5 8v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8" /><path d="M3 8h18" /><path d="M9.5 20v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5" /></symbol>
      <symbol id="i-truck" viewBox="0 0 24 24"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" /><path d="M15 18H9" /><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14" /><circle cx="7" cy="18" r="2" /><circle cx="17" cy="18" r="2" /></symbol>
      <symbol id="i-utensils" viewBox="0 0 24 24"><path d="M6 3v6a2 2 0 0 0 4 0V3" /><path d="M8 9v12" /><path d="M17 3c-1.7 0-3 2.2-3 5.5 0 2.5.8 3.8 3 4.5" /><path d="M17 3v18" /></symbol>
      <symbol id="i-cap" viewBox="0 0 24 24"><path d="M22 10 12 5 2 10l10 5 10-5Z" /><path d="M6 12v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5" /></symbol>
      <symbol id="i-sparkles" viewBox="0 0 24 24"><path d="M12 3.5 13.9 9 19.5 10 13.9 11 12 16.5 10.1 11 4.5 10 10.1 9Z" /><path d="M18 5.5v2M5 16v2M19 17h1.5" /></symbol>
      <symbol id="i-cross" viewBox="0 0 24 24"><path d="M10 3a1 1 0 0 0-1 1v4H5a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h4v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4h4a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-4V4a1 1 0 0 0-1-1Z" /></symbol>
      <symbol id="i-hat" viewBox="0 0 24 24"><path d="M6 13.9A4 4 0 0 1 7.4 6 5 5 0 0 1 16.6 6 4 4 0 0 1 18 13.9V20a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1Z" /><path d="M6 17h12" /></symbol>
      <symbol id="i-cup" viewBox="0 0 24 24"><path d="M5 8h11v6a5 5 0 0 1-5 5h-1a5 5 0 0 1-5-5Z" /><path d="M16 9h2a2.5 2.5 0 0 1 0 5h-2" /><path d="M8 2.5v2M12 2.5v2" /></symbol>
      <symbol id="i-bag" viewBox="0 0 24 24"><path d="M6 2 3 6.5V20a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V6.5L18 2Z" /><path d="M3 6.5h18" /><path d="M16 10a4 4 0 0 1-8 0" /></symbol>
      <symbol id="i-shield" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></symbol>
      <symbol id="i-clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></symbol>
      <symbol id="i-wrench" viewBox="0 0 24 24"><path d="M15 6.5a4 4 0 0 0-5.4 5.1L3.5 17.7a1.8 1.8 0 0 0 2.5 2.5l6.1-6.1A4 4 0 0 0 17.5 9l-2.3 2.3-2.1-.4-.4-2.1Z" /></symbol>
      <symbol id="i-flame" viewBox="0 0 24 24"><path d="M12 22a7 7 0 0 0 7-7c0-3-2-5-3.5-7.5-.7 1.4-1.7 2-2.5 2 .5-2.5-.5-5-3.5-7 0 3-2 4.2-3.2 6A7.7 7.7 0 0 0 5 15a7 7 0 0 0 7 7Z" /><path d="M12 22a3 3 0 0 0 3-3c0-1.4-1-2.4-1.6-3.4-.7.9-1.4.9-2 .6.2-1.4-.6-2.5-1.6-3.2 0 1.4-1 1.8-1.5 2.6A3.4 3.4 0 0 0 9 19a3 3 0 0 0 3 3Z" /></symbol>
      <symbol id="i-image" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.6" /><path d="m21 15-4.5-4.5a2 2 0 0 0-2.8 0L4 20" /></symbol>
      <symbol id="i-pot" viewBox="0 0 24 24"><path d="M4 9h16v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4Z" /><path d="M3 9h18" /><path d="M7 9V6M12 9V5M17 9V6" /><path d="M2 12h2M20 12h2" /></symbol>
      <symbol id="i-search" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></symbol>
      <symbol id="i-snow" viewBox="0 0 24 24"><path d="M12 2v20M4.5 7 19.5 17M19.5 7 4.5 17" /><path d="m9 4 3 3 3-3M9 20l3-3 3 3M4 9.5 7.2 12 4 14.5M20 9.5 16.8 12 20 14.5" /></symbol>
      <symbol id="i-wind" viewBox="0 0 24 24"><path d="M3 8h10a3 3 0 1 0-3-3" /><path d="M3 12h16a3 3 0 1 1-3 3" /><path d="M3 16h7a2.5 2.5 0 1 1-2.5 2.5" /></symbol>
      <symbol id="i-arrow" viewBox="0 0 24 24"><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></symbol>
    </svg>
  );
}

/** Inline line icon that references a sprite symbol by name (e.g. "i-phone"). */
export function Icon({ name, className = 'ic' }: { name: string; className?: string }) {
  return (
    <svg className={className} aria-hidden="true">
      <use href={`#${name}`} />
    </svg>
  );
}
