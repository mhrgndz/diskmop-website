import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Yönetim paneli /myadmin/stats'tan /admin'e taşındı; eski adres yeni adrese gider.
  // www.diskmop.com aynı içeriği 200 ile sunuyordu; Google bazı sayfalarda www'yi
  // asıl sayfa seçip diskmop.com adresini "kopya" saydı. Tek adres: diskmop.com.
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.diskmop.com' }],
        destination: 'https://diskmop.com/:path*',
        permanent: true,
      },
      { source: '/myadmin', destination: '/admin', permanent: false },
      { source: '/myadmin/:path*', destination: '/admin', permanent: false },
    ];
  },
};

export default withNextIntl(nextConfig);
