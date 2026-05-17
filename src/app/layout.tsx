import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { getLocale } from 'next-intl/server';
import { ThemeProvider } from '@/components/theme-provider';
import { GoogleAnalytics } from '@/components/google-analytics';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Disk Mop — Windows ve Mac için Akıllı Disk Temizleyici',
  description:
    'Disk Mop ile gigabaytlarca yer aç, sistemini ilk günkü gibi hızlandır. Büyük dosyalar, yinelenenler, cache temizliği ve daha fazlası.',
  keywords: [
    'disk temizleme',
    'disk cleaner',
    'yer açma',
    'cache temizleme',
    'büyük dosya bulucu',
    'yinelenen dosya',
    'Windows disk temizleyici',
    'Mac disk temizleyici',
  ],
  authors: [{ name: 'Disk Mop' }],
  openGraph: {
    title: 'Disk Mop — Windows ve Mac için Akıllı Disk Temizleyici',
    description:
      'Gigabaytlarca yer aç, sistemini ilk günkü gibi hızlandır. Tek tıkla, dakikalar içinde.',
    url: 'https://diskmop.com',
    siteName: 'Disk Mop',
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Disk Mop — Akıllı Disk Temizleyici',
    description: 'Gigabaytlarca yer aç, sistemini hızlandır.',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/brand/icon.png',
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'Disk Mop',
              operatingSystem: 'Windows 10, Windows 11, macOS 12+',
              applicationCategory: 'UtilitiesApplication',
              offers: {
                '@type': 'Offer',
                price: '19.90',
                priceCurrency: 'USD',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.8',
                ratingCount: '10000',
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
