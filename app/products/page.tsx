import type { Metadata } from 'next';
import { TopBar } from '@/components/TopBar';
import { Nav } from '@/components/Nav';
import { Products } from '@/components/Products';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import { WhatsAppFab } from '@/components/WhatsAppFab';
import { ScrollReveal } from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Commercial Kitchen Equipment Products',
  description: 'Commercial kitchen equipment made in Coimbatore by Sri Hari Industries — cooking ranges, kitchen machines, SS tables and trolleys, delivered all over India.',
  alternates: { canonical: '/products' },
};

export default function Page() {
  return (
    <>
      <TopBar />
      <Nav />
      <main>
        <Products />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppFab />
      <ScrollReveal />
    </>
  );
}
