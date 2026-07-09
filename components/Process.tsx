/* ===========================================================
   SRI HARI INDUSTRIES — "Our Process" (up/down wave timeline)
   -----------------------------------------------------------
   Six steps in one row; discs alternate high/low and a signal
   pulse races trace-by-trace 1→6. Each step holds a floating
   3D object (public/images/process/*-f.png — cleaned, equal-
   sized isometric renders) that tilts toward the cursor.
   Phones: two per row, the route serpentines down the page.
   Styling lives in globals.css under #process / .pflow / .pstep.
   EDIT STEP CONTENT in STEPS below.
   =========================================================== */
'use client';

import type { CSSProperties, PointerEvent } from 'react';

const STEPS: { title: string; text: string; img: string }[] = [
  {
    title: 'Consultation',
    text: 'Understanding your operational requirements and kitchen workflow.',
    img: '/images/process/meeting-f.png',
  },
  {
    title: 'Design',
    text: 'Planning customised kitchen layouts and equipment configurations.',
    img: '/images/process/cad-f.png',
  },
  {
    title: 'Manufacturing',
    text: 'Precision fabrication using advanced machinery and quality materials.',
    img: '/images/process/laser-cutting-f.png',
  },
  {
    title: 'Quality Inspection',
    text: 'Every product is thoroughly inspected before dispatch.',
    img: '/images/process/inspection-f.png',
  },
  {
    title: 'Delivery & Installation',
    text: 'Safe transportation, professional installation and commissioning.',
    img: '/images/process/installation-f.png',
  },
  {
    title: 'After-Sales Support',
    text: 'Prompt maintenance and technical assistance for uninterrupted performance.',
    img: '/images/process/support-final.png',
  },
];

/* per-step phone connector kind: h = right, v = U-turn down, hl = left */
const M_ARCS = ['h', 'v', 'hl', 'v', 'h'] as const;

const pathProps = {
  fill: 'none',
  strokeLinecap: 'round' as const,
  vectorEffect: 'non-scaling-stroke' as const,
  pathLength: 100,
};

function Arc({ cls, viewBox, d, vias }: { cls: string; viewBox: string; d: string; vias: string }) {
  return (
    <svg className={`parc ${cls}`} viewBox={viewBox} preserveAspectRatio="none" aria-hidden>
      <path className="parc__trace" d={d} {...pathProps} />
      <path className="parc__via" d={vias} fill="none" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
      <path className="parc__run" d={d} {...pathProps} />
    </svg>
  );
}

/* desktop wave: high→low / low→high traces with a rounded mid bend */
const W_HILO = 'M0,10 H38 Q46,10 46,18 V54 Q46,62 54,62 H100';
const W_LOHI = 'M0,62 H38 Q46,62 46,54 V18 Q46,10 54,10 H100';
const W_VIAS = 'M46,18 h.01 M46,54 h.01';
/* phone horizontal jog */
const M_H = 'M0,20 H30 Q36,20 36,14 Q36,8 42,8 H58 Q64,8 64,14 Q64,20 70,20 H100';
const M_H_VIAS = 'M42,8 h.01 M58,8 h.01';
/* phone vertical U-turn */
const M_V = 'M14,0 H60 Q68,0 68,8 V92 Q68,100 60,100 H14';
const M_V_VIAS = 'M68,8 h.01 M68,92 h.01';

/* Tilt the hovered 3D object toward the cursor (mouse only). */
function tilt(e: PointerEvent<HTMLDivElement>) {
  if (e.pointerType !== 'mouse') return;
  const node = e.currentTarget;
  const r = node.getBoundingClientRect();
  const px = (e.clientX - r.left) / r.width; // 0..1
  const py = (e.clientY - r.top) / r.height; // 0..1
  node.style.setProperty('--ry', `${(px - 0.5) * 20}deg`);
  node.style.setProperty('--rx', `${(0.5 - py) * 20}deg`);
}

function reset(e: PointerEvent<HTMLDivElement>) {
  const node = e.currentTarget;
  node.style.setProperty('--rx', '0deg');
  node.style.setProperty('--ry', '0deg');
}

export function Process() {
  return (
    <section className="sec" id="process">
      <div className="wrap">
        <div className="head reveal">
          <span className="eyebrow eyebrow--y">How We Work</span>
          <h2>Our Process</h2>
          <p>From concept to complete kitchen solution.</p>
        </div>

        <ol className="pflow reveal">
          {STEPS.map((s, i) => (
            <li className="pstep" key={s.title} style={{ '--i': i } as CSSProperties}>
              {i < 5 && (
                <>
                  <Arc
                    cls="parc--w"
                    viewBox="0 0 100 72"
                    d={i % 2 === 0 ? W_HILO : W_LOHI}
                    vias={W_VIAS}
                  />
                  <Arc
                    cls={`parc--m parc--m-${M_ARCS[i]}`}
                    viewBox={M_ARCS[i] === 'v' ? '0 0 90 100' : '0 0 100 40'}
                    d={M_ARCS[i] === 'v' ? M_V : M_H}
                    vias={M_ARCS[i] === 'v' ? M_V_VIAS : M_H_VIAS}
                  />
                </>
              )}
              <div className="pstep__node" onPointerMove={tilt} onPointerLeave={reset}>
                <span className="pstep__ring" aria-hidden />
                <span className="pstep__face">
                  {/* decorative: the adjacent <h3> names the step */}
                  <img src={s.img} alt="" loading="lazy" width={480} height={480} />
                </span>
                <b className="pstep__num">{String(i + 1).padStart(2, '0')}</b>
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
