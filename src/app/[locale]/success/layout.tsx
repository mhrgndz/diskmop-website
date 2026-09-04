import type { Metadata } from 'next';

/**
 * Ödeme sonrası sayfa: `?checkout_id=` ile gelir ve lisans anahtarını gösterir.
 * Arama sonucunda işi yok, dizine girmemeli.
 */
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function SuccessLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
