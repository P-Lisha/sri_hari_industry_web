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
  async redirects() {
    return [
      // Category renamed "Machineries" -> "Machinery"; keep old indexed links alive.
      {
        source: '/products/category/machineries',
        destination: '/products/category/machinery',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/images/:all*',
        headers: [
          {
            key: 'Cache-Control',
            // dev: always revalidate so replaced images show up on plain refresh;
            // prod: 1h browser cache (rename the file when swapping a photo)
            value:
              process.env.NODE_ENV === 'development'
                ? 'no-cache'
                : 'public, max-age=3600, stale-while-revalidate=86400',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
