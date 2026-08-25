/* ===========================================================
   SRI HARI INDUSTRIES — Our Clients section
   --------------------------------------------------------
   EDIT CONTENT HERE.

   CLIENTS — the real brands / establishments you supply,
   shown as NAME chips running in two auto-scrolling rows
   (opposite directions, pause on hover) — the "trust wall"
   look common on commercial kitchen equipment sites.
   Names only — no logos, no icons, no invented quotes/testimonials.

   To ADD / EDIT a client: change the CLIENTS list below —
   the two rows and the screen-reader list update automatically.

   (The kinds of kitchens we serve live in the separate
   "Industries We Serve" section — Services.tsx.)
   =========================================================== */

// ---- Real clients (name chips) ----
const CLIENTS: string[] = [
  'Amrita Vishwa Vidyapeetham',
  'Mahindra',
  'BorgWarner',
  'Orbinox',
  'Suguna Foods',
  'SE Forge',
  'Hotel Tamara',
  'Madras Regimental Centre',
  'Royal Care Hospital',
  'Metamorphosis Brewing',
  'Pancon Knits',
  'Nila Sea Foods',
  'Kerala Nut Food',
  'Icon International School',
  'Yellow Train',
  'The Lotus Social Club',
];

const ROW_A = CLIENTS.slice(0, Math.ceil(CLIENTS.length / 2));
const ROW_B = CLIENTS.slice(Math.ceil(CLIENTS.length / 2));

function ClientRow({ names, reverse }: { names: string[]; reverse?: boolean }) {
  const looped = [...names, ...names];
  return (
    <div className={`clientmarq__row${reverse ? ' clientmarq__row--rev' : ''}`}>
      <div className="clientmarq__track">
        {looped.map((name, i) => (
          <div className="logocard" key={`${name}-${i}`} title={name}>
            <span className="logocard__name">{name}</span>
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
        </div>

        {/* Real, un-duplicated list for screen readers / SEO — the marquee below is decorative. */}
        <ul className="sr-only">
          {CLIENTS.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>

        <div className="clientmarq reveal" aria-hidden="true">
          <ClientRow names={ROW_A} />
          <ClientRow names={ROW_B} reverse />
        </div>
      </div>
    </section>
  );
}
