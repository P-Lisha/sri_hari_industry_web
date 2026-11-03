import type { Metadata } from 'next';
import { SITE } from '@/lib/site';
import { PageShell } from '@/components/PageShell';
import { Contact } from '@/components/Contact';

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
      <h1 className="sr-only">Contact {SITE.name}</h1>
      <Contact />
    </PageShell>
  );
}
