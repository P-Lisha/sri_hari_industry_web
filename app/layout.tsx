import type { Metadata, Viewport } from 'next';
import { Outfit, Poppins } from 'next/font/google';
import './globals.css';
import { SITE } from '@/lib/site';
import { IconSprite } from '@/components/Icons';
import { JsonLd } from '@/components/JsonLd';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-outfit',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

const TITLE = `${SITE.name} — Commercial Kitchen Equipment Manufacturers | Coimbatore`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: TITLE,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.longDesc,
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  generator: 'Next.js',
  keywords: [
    'commercial kitchen equipment Coimbatore',
    'commercial kitchen equipment manufacturers Coimbatore',
    'kitchen equipment Coimbatore',
    'commercial kitchen equipment manufacturers in Coimbatore',
    'stainless steel kitchen fabrication Coimbatore',
    'cooking range manufacturer Coimbatore',
    'automatic chapati machine',
    'dosa plate manufacturer',
    'idli steam plant',
    'bain marie counter',
    'cold room manufacturer Coimbatore',
    'commercial kitchen equipment Tamil Nadu',
    'turnkey kitchen solutions Coimbatore',
    'hotel kitchen equipment',
    'restaurant kitchen equipment',
    'industrial canteen kitchen equipment',
    'catering kitchen equipment',
    'kitchen equipment dealers Coimbatore',
    'Sri Hari Industries',
  ],
  category: 'business',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE.url,
    siteName: SITE.name,
    title: TITLE,
    description: SITE.longDesc,
    images: [
      {
        url: '/images/hero-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Sri Hari Industries — Complete Commercial Kitchen Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: SITE.shortDesc,
    images: ['/images/hero-1.jpg'],
  },
  icons: {
    icon: [
      { url: '/images/logo.png', type: 'image/png' },
    ],
    apple: [{ url: '/images/logo.png' }],
    shortcut: ['/images/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  formatDetection: { telephone: true, email: true, address: true },
  other: {
    'geo.region': 'IN-TN',
    'geo.placename': 'Coimbatore, Tamil Nadu',
    'geo.position': `${SITE.geo.lat};${SITE.geo.lng}`,
    ICBM: `${SITE.geo.lat}, ${SITE.geo.lng}`,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#2a53a5',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${poppins.variable}`} suppressHydrationWarning>
      <body id="top">
        {/* Mark JS as available BEFORE paint so scroll-reveal only hides
            content when JS can bring it back. No-JS → everything visible. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <IconSprite />
        {children}
        <JsonLd />
      </body>
    </html>
  );
}
