import type { Metadata } from 'next';

/**
 * İndirme/kurulum istatistikleri paneli. Sayfanın kendisi client bileşeni
 * olduğu için metadata'yı buradan veriyoruz. robots.ts ayrıca /myadmin/ yolunu
 * taramaya kapatıyor; bu da zaten dizine girmişse çıkması içindir
 * (Disallow taranmayı durdurur, dizinden düşürmeyi garanti etmez).
 */
export const metadata: Metadata = {
  robots: { index: false, follow: false, nocache: true },
};

export default function MyAdminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
