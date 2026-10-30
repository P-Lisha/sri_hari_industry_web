import { TopBar } from '@/components/TopBar';
import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { FeaturedProducts } from '@/components/FeaturedProducts';
import { JsonLd } from '@/components/JsonLd';
import { Process } from '@/components/Process';
import { Services } from '@/components/Services';
import { Clients } from '@/components/Clients';
import { Gallery } from '@/components/Gallery';
import { Contact } from '@/components/Contact';
import { Faq } from '@/components/Faq';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import { WhatsAppFab } from '@/components/WhatsAppFab';
import { ScrollReveal } from '@/components/ScrollReveal';

export default function Home() {
  return (
    <>
      <TopBar />
      <Nav />
      <main>
        <Hero />
        <Stats />
        <FeaturedProducts />
        <Process />
        <Services />
        <Gallery />
        <Clients />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppFab />
      <ScrollReveal />
      <JsonLd />
    </>
  );
}
