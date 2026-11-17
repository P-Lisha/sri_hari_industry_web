import type { Metadata } from 'next';
import { SITE, waLink, WA_MESSAGES } from '@/lib/site';
import { PageShell } from '@/components/PageShell';
import { Contact } from '@/components/Contact';
import { PageHero } from '@/components/PageHero';

const TITLE = 'Contact Us — Get a Free Quote';
const DESC = `Get in touch with ${SITE.name} for commercial kitchen equipment & turnkey kitchen solutions in Coimbatore. Call, WhatsApp or send an enquiry — we reply with a quote fast.`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: '/contact' },
  openGraph: {
    title: `${TITLE} | ${SITE.name}`,
    description: DESC,
    url: `${SITE.url}/contact`,
  },
};

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
        eyebrow="Get in Touch"
        title={`Contact ${SITE.name}`}
        lead="Call, WhatsApp or send an enquiry — we reply fast with a quote. Visit our workshop in Coimbatore to see the equipment being built."
      >
        <a className="btn btn--y" href={`tel:${SITE.phoneHref}`}>Call {SITE.phoneDisplay}</a>
        <a className="btn btn--g" href={waLink(WA_MESSAGES.generic)} target="_blank" rel="noopener">WhatsApp Us</a>
        <a className="btn btn--line" href={`mailto:${SITE.email}`}>Email Us</a>
      </PageHero>
      <Contact />
    </PageShell>
  );
}
