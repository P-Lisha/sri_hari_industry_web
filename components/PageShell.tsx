import { TopBar } from './TopBar';
import { Nav } from './Nav';
import { Footer } from './Footer';
import { BackToTop } from './BackToTop';
import { WhatsAppFab } from './WhatsAppFab';
import { ScrollReveal } from './ScrollReveal';

/** Shared chrome (top bar, nav, footer, floating actions) for standalone
    sub-pages that live outside the homepage single-page flow. */
export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopBar />
      <Nav />
      <main className="subpage">{children}</main>
      <Footer />
      <BackToTop />
      <WhatsAppFab />
      <ScrollReveal />
    </>
  );
}
