const WORK = [
  ['/images/work-1.jpg', 'Cooking Range Line', 'Commercial cooking range line'],
  ['/images/work-2.jpg', 'Bulk Cooking Setup', 'Bulk cooking setup'],
  ['/images/work-3.jpg', 'Exhaust & Ventilation', 'Exhaust and ventilation system'],
  ['/images/work-4.jpg', 'Preparation Area', 'Kitchen preparation area'],
  ['/images/work-5.jpg', 'Washing Section', 'Washing section'],
  ['/images/work-6.jpg', 'Service Counter', 'Service counter'],
  ['/images/work-7.jpg', 'Steam Cooking Unit', 'Steam cooking unit'],
  ['/images/work-8.jpg', 'Storage & Racks', 'Storage and racks'],
  ['/images/work-9.jpg', 'Complete Kitchen', 'Complete commercial kitchen'],
];

export function Gallery() {
  return (
    <section className="sec soft" id="gallery">
      <div className="wrap">
        <div className="head reveal">
          <span className="eyebrow eyebrow--g">Our Work</span>
          <h2>Kitchens We&apos;ve Built</h2>
          <p>A glimpse of real commercial kitchens delivered across Tamil Nadu.</p>
        </div>
      </div>
      <div className="marq reveal">
        <div className="marq__track">
          {WORK.map(([src, label, alt]) => (
            <div className="marq__item" key={src}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {/* NOT loading="lazy": these live in an animated marquee whose items
                  are laid out off-screen, so lazy-loading never fires and the
                  images stay blank. Eager + async decode keeps them light. */}
              <img src={src} alt={alt} decoding="async" />
              <span>{label}</span>
            </div>
          ))}
          {/* duplicate set for seamless infinite scroll */}
          {WORK.map(([src, label]) => (
            <div className="marq__item" aria-hidden="true" key={`dup-${src}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="" decoding="async" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
