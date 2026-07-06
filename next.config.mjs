/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    // Site uses pre-optimised static JPG/WEBP/PNG assets in /public.
    // Disable the Image Optimisation API so plain <img> + static export both work
    // on any host (Vercel, static, shared hosting).
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: '/images/:all*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
