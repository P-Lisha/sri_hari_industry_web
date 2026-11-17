import { SITE } from '@/lib/site';

const CERTS = [
  { cls: '', label: 'ISO 9001:2015' },
  { cls: 'r', label: 'BNI Member' },
  { cls: 'y', label: 'IndiaMART Trust Seal' },
  { cls: 'b', label: 'TÜV SÜD' },
];

// "Why choose us" value cards shown above the certifications.
const WHY = [
  { stat: 'SS 304', title: 'Food-grade steel', text: 'Hygienic, rust-free stainless steel throughout — built to last.' },
  { stat: '300+', title: 'Projects delivered', text: 'Heavy-duty engineering proven across 300+ kitchens in 15+ years.' },
  { stat: '100%', title: 'Made to your size', text: 'Every piece custom-fabricated to your space, workflow and budget.' },
  { stat: '1 Team', title: 'Design to AMC', text: 'Consultancy, 3D design, manufacturing, installation and AMC — one team.' },
];

export function About() {
  return (
    <section className="sec" id="about">
      <div className="wrap about">
        <div className="about__media reveal">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img loading="lazy" src="/images/factory-front.jpg" alt="Sri Hari Industries commercial kitchen manufacturing facility in Coimbatore" />
          <div className="about__badge">
            <b>15<i>+</i></b>
            <span>Years building<br />commercial kitchens</span>
          </div>
        </div>
        <div className="about__intro reveal">
          <h2>Kitchens engineered to run harder, for longer</h2>
          <p>
            For over 15 years, <strong>Sri Hari Industries</strong> has manufactured commercial kitchen
            equipment in Coimbatore — from a single burner to complete turnkey kitchens. We have
            delivered <strong>300+ projects</strong> for <strong>500+ happy clients</strong>, with
            our equipment running in kitchens across <strong>Tamil Nadu and all over India</strong>.
          </p>
          <p>
            Led by Managing Director <strong>{SITE.managingDirector}</strong>, we treat every
            kitchen as our own — no middlemen and no passed-on accountability, just equipment
            we are proud to put our name on.
          </p>
        </div>
        <div className="about__more reveal">
          <div className="whyx">
            {WHY.map((w) => (
              <div className="whyx__card" key={w.title}>
                <b className="whyx__stat">{w.stat}</b>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </div>
            ))}
          </div>
          <div className="certs">
            {CERTS.map((c) => (
              <div className={`cert${c.cls ? ' ' + c.cls : ''}`} key={c.label}>
                {c.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
