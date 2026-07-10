import { TopBar } from '@/components/TopBar';
import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { Products } from '@/components/Products';
import { Process } from '@/components/Process';
import { Services } from '@/components/Services';
import { Clients } from '@/components/Clients';
import { Gallery } from '@/components/Gallery';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
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
        <About />
        <Stats />
        <Products />
        <Process />
        <Services />
        <Gallery />
        <Clients />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppFab />
      <ScrollReveal />
    </>
  );
}
