// Facto-style 3-feature row: three cards below the hero/stats, the middle
// one filled solid bronze to draw the eye. Plain, crawlable markup.

const FEATURES = [
  {
    title: 'Food-Grade SS 304',
    text: 'Every unit built from hygienic, rust-free stainless steel — made to outlast the kitchen around it.',
  },
  {
    title: 'Own Manufacturing Unit',
    text: 'Cut, welded and finished in our own ISO 9001:2015 Coimbatore workshop — no middlemen, no excuses.',
    highlight: true,
  },
  {
    title: 'Service & AMC, 24/7',
    text: 'Pan-India delivery, installation and annual maintenance — one team from design to after-sales.',
  },
];

export function FeatureRow() {
  return (
    <section className="sec featrow-sec" aria-label="Why choose Sri Hari">
      <div className="wrap">
        <div className="featrow reveal">
          {FEATURES.map((f) => (
            <div
              className={`featcard${f.highlight ? ' featcard--on' : ''}`}
              key={f.title}
            >
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
