/* ===========================================================
   SRI HARI INDUSTRIES — Our Clients section
   --------------------------------------------------------
   EDIT CONTENT HERE.

   CLIENTS — the real brands / establishments you supply,
   shown as name cards (name + sector line of business)
   running in two auto-scrolling rows (opposite directions,
   pause on hover) — the "trust wall" look common on
   commercial kitchen equipment sites.
   No logos, no icons, no invented quotes/testimonials.

   To ADD / EDIT a client: change the CLIENTS list below —
   the two rows and the screen-reader list update automatically.

   (The kinds of kitchens we serve live in the separate
   "Industries We Serve" section — Services.tsx.)
   =========================================================== */

// ---- Real clients (name + line of business) ----
const CLIENTS: { name: string; sector: string }[] = [
  { name: 'Amrita Viswapeedam', sector: 'Education' },
  { name: 'Mahindra', sector: 'Automotive' },
  { name: 'BorgWarner', sector: 'Automotive' },
  { name: 'Orbinox', sector: 'Engineering' },
  { name: 'Suguna Foods', sector: 'Food Processing' },
  { name: 'SE Forge', sector: 'Wind Energy' },
  { name: 'Hotel Tamara', sector: 'Hospitality' },
  { name: 'Madras Regimental Centre', sector: 'Defence' },
  { name: 'Royal Care Hospital', sector: 'Healthcare' },
  { name: 'Metamorphosis Brewing', sector: 'Microbrewery' },
  { name: 'Pancon Knits', sector: 'Textiles' },
  { name: 'Nila Sea Foods', sector: 'Seafood Exports' },
  { name: 'Kerala Nut Food', sector: 'Food Products' },
  { name: 'Icon International School', sector: 'Education' },
  { name: 'Yellow Train', sector: 'Education' },
  { name: 'The Lotus Social Club', sector: 'Social Club' },
];

const ROW_A = CLIENTS.slice(0, Math.ceil(CLIENTS.length / 2));
const ROW_B = CLIENTS.slice(Math.ceil(CLIENTS.length / 2));

function ClientRow({ items, reverse }: { items: typeof CLIENTS; reverse?: boolean }) {
  const looped = [...items, ...items];
  return (
    <div className={`clientmarq__row${reverse ? ' clientmarq__row--rev' : ''}`}>
      <div className="clientmarq__track">
        {looped.map((c, i) => (
          <div className="logocard" key={`${c.name}-${i}`} title={c.name}>
            <span className="logocard__name">{c.name}</span>
            <span className="logocard__sector">{c.sector}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Clients() {
  return (
    <section className="sec clientstrip" id="clients">
      <div className="wrap">
        <div className="clientstrip__head reveal">
          <span className="eyebrow eyebrow--y">Our Clients</span>
          <h2>Trusted by leading restaurants, hotels &amp; institutions across India</h2>
          <p>
            {CLIENTS.length}+ organisations — from defence messes and hospitals to
            microbreweries — run their kitchens on our equipment.
          </p>
        </div>

        {/* Real, un-duplicated list for screen readers / SEO — the marquee below is decorative. */}
        <ul className="sr-only">
          {CLIENTS.map((c) => (
            <li key={c.name}>
              {c.name} ({c.sector})
            </li>
          ))}
        </ul>

        <div className="clientmarq reveal" aria-hidden="true">
          <ClientRow items={ROW_A} />
          <ClientRow items={ROW_B} reverse />
        </div>
      </div>
    </section>
  );
}
