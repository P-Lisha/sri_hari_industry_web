/* ===========================================================
   SRI HARI INDUSTRIES — Our Clients section
   --------------------------------------------------------
   EDIT CONTENT HERE.

   CLIENTS — the real brands / establishments you supply,
   shown as simple white NAME chips inside one elegant light
   container. Trust-focused: names only — no logos, no icons,
   no statistics (the 500+/300+ figures already live in the
   Stats band higher up the page).

   To ADD / EDIT a client: change the CLIENTS list below.
   The chips reflow automatically (≈4 per row on desktop,
   2 per row on mobile) and a partial last row stays centred.

   (The kinds of kitchens we serve live in the separate
   "Industries We Serve" section — Services.tsx.)
   =========================================================== */

// ---- Real clients (name chips) ----
const CLIENTS: string[] = [
  'Mahindra',
  'Annapurna',
  'Annathanes',
  'Sri Krishna',
  'Saravana',
  'Anandhaas',
  'Vasanta',
  'Grand',
  'Aryaas',
  'Sangeetha',
];

export function Clients() {
  return (
    <section className="sec clientstrip" id="clients">
      <div className="wrap">
        <div className="clientstrip__head reveal">
          <span className="eyebrow eyebrow--y">Our Clients</span>
          <h2>Trusted by leading restaurants, hotels &amp; institutions across South India</h2>
        </div>

        {/* One elegant container holds every client as a simple white name chip. */}
        <div className="clientbox reveal" aria-label="Some of our clients">
          <div className="clientgrid">
            {CLIENTS.map((name) => (
              <div className="logocard logocard--name" key={name} title={name}>
                <span className="logocard__name">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
