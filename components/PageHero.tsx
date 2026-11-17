import Link from 'next/link';
import type { ReactNode } from 'react';

/* ===========================================================
   Reusable navy page-hero band for subpages (products, category,
   about, contact). Breadcrumb + eyebrow + H1 + lead + CTA slot.
   Styling: .phero in globals.css.
   =========================================================== */

type Crumb = { label: string; href?: string };

export function PageHero({
  crumbs,
  eyebrow,
  title,
  lead,
  children,
}: {
  crumbs?: Crumb[];
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode; // CTA buttons
}) {
  return (
    <header className="phero">
      <div className="wrap">
        {crumbs && (
          <nav aria-label="Breadcrumb">
            <ol className="crumbs phero__crumbs">
              {crumbs.map((c, i) => (
                <li key={c.label} aria-current={i === crumbs.length - 1 ? 'page' : undefined}>
                  {c.href ? <Link href={c.href}>{c.label}</Link> : c.label}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && <span className="eyebrow phero__eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        {lead && <p className="phero__lead">{lead}</p>}
        {children && <div className="phero__cta">{children}</div>}
      </div>
    </header>
  );
}
