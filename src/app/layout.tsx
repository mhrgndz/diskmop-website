import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { getLocale } from 'next-intl/server';
import { ThemeProvider } from '@/components/theme-provider';
import { GoogleAnalytics } from '@/components/google-analytics';
import { SITE_URL } from '@/lib/seo';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

/**
 * Kök metadata YALNIZ site geneli varsayılanları taşır. Sayfaya özel başlık,
 * açıklama, canonical ve hreflang her sayfanın kendi generateMetadata'sından
 * gelir — eskiden burada Türkçe sabit bir başlık vardı ve 8 dilin hepsi onu
 * kullanıyordu.
 *
 * metadataBase şart: OG/Twitter görselleri ve canonical'lar mutlak URL'e
 * ancak bununla çözülür.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // Şablon YOK: sayfa başlıkları zaten marka adını içeriyor, template
  // eklenince "… | Disk Mop" iki kez yazıyordu ve SERP karakteri harcıyordu.
  title: 'Disk Mop',
  applicationName: 'Disk Mop',
  authors: [{ name: 'Lova Software', url: 'https://lovasoftware.com/' }],
  creator: 'Lova Software',
  publisher: 'Lova Software',
  formatDetection: { telephone: false },
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
      <body className={inter.className}>
        <GoogleAnalytics />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
