import Link from 'next/link';
import { TopBar } from '@/components/TopBar';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <TopBar />
      <Nav />
      <main>
        <section className="phero nf">
          <div className="wrap">
            <span className="eyebrow phero__eyebrow">Page Not Found</span>
            <h1>We couldn&rsquo;t find that page</h1>
            <p className="phero__lead">
              The page may have moved or the link is out of date. Head back to the
              homepage or browse our full equipment catalogue.
            </p>
            <div className="phero__cta nf__cta">
              <Link className="btn btn--y" href="/">Go to Homepage</Link>
              <Link className="btn btn--ghost" href="/products">Browse Products</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
