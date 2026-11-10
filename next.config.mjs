import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Yönetim paneli /myadmin/stats'tan /admin'e taşındı; eski adres yeni adrese gider.
  async redirects() {
    return [
      { source: '/myadmin', destination: '/admin', permanent: false },
      { source: '/myadmin/:path*', destination: '/admin', permanent: false },
    ];
  },
};

export default withNextIntl(nextConfig);
