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
  description: 'Browse commercial kitchen equipment by Sri Hari Industries, Coimbatore — cooking ranges, SS tables, bulk cookers and custom fabrication.',
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
