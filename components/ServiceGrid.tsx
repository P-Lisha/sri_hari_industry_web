// 6-icon service grid (3×2) — the pattern repeated across every reference
// (DePue, Facto, insurance & electrician templates): icon tile + title +
// one line. Links into the matching product category. Plain, crawlable.

import Link from 'next/link';

const ITEMS: { icon: string; title: string; text: string; href: string }[] = [
  { icon: 'i-flame',    title: 'Cooking Ranges',      text: 'Burners, bulk cookers, Chinese ranges & steam cooking.', href: '/products' },
  { icon: 'i-utensils', title: 'Tables & Racks',      text: 'SS work tables, sinks, storage racks & dining tables.',  href: '/products' },
  { icon: 'i-wrench',   title: 'Kitchen Machinery',   text: 'Grinders, peelers, cutters & automatic making machines.', href: '/products' },
  { icon: 'i-snow',     title: 'Cold Rooms & Chillers', text: 'Modular cold rooms, chillers & refrigeration units.',   href: '/products' },
  { icon: 'i-wind',     title: 'Exhaust & Ventilation', text: 'Hoods, ducting, fresh-air and exhaust systems.',        href: '/products' },
  { icon: 'i-truck',    title: 'Turnkey & Installation', text: 'Design, fabrication, delivery & installation — one team.', href: '/#contact' },
];

export function ServiceGrid() {
  return (
    <section className="sec soft svcgrid-sec" id="what-we-make">
      <div className="wrap">
        <div className="head reveal">
          <span className="eyebrow">What We Make</span>
          <h2>Equipment Built for Every Kitchen</h2>
          <p>From a single burner to a complete turnkey build — food-grade SS 304, made in Coimbatore.</p>
        </div>

        <div className="svcgrid reveal">
          {ITEMS.map((it) => (
            <Link className="svccard" href={it.href} key={it.title}>
              <span className="svccard__ico" aria-hidden="true">
                <svg className="ic"><use href={`#${it.icon}`} /></svg>
              </span>
              <h3>{it.title}</h3>
              <p>{it.text}</p>
              <span className="svccard__more">Explore →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
