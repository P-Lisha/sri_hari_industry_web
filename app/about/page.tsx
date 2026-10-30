import type { Metadata } from 'next';
import { TopBar } from '@/components/TopBar';
import { Nav } from '@/components/Nav';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import { WhatsAppFab } from '@/components/WhatsAppFab';
import { ScrollReveal } from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'About Sri Hari Industries — commercial kitchen equipment manufacturers and kitchen consultants in Coimbatore.',
  alternates: { canonical: '/about' },
};

export default function Page() {
  return (
    <>
      <TopBar />
      <Nav />
      <main>
        <About />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppFab />
      <ScrollReveal />
    </>
  );
}
