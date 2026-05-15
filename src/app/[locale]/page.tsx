import { setRequestLocale } from 'next-intl/server';
import { Navigation } from '@/components/navigation';
import { Hero } from '@/components/hero';
import { TrustBar } from '@/components/trust-bar';
import { PlatformSelector } from '@/components/platform-selector';
import { FeaturesGrid } from '@/components/features-grid';
import { HowItWorks } from '@/components/how-it-works';
import { ProductShowcase } from '@/components/product-showcase';
import { Stats } from '@/components/stats';
import { Testimonials } from '@/components/testimonials';
import { Pricing } from '@/components/pricing';
import { FAQ } from '@/components/faq';
import { FinalCTA } from '@/components/final-cta';
import { Footer } from '@/components/footer';
import { CookieBanner } from '@/components/cookie-banner';
import { FloatingSupport } from '@/components/floating-support';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <TrustBar />
        <PlatformSelector />
        <FeaturesGrid />
        <HowItWorks />
        <ProductShowcase />
        <Stats />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <CookieBanner />
      <FloatingSupport />
    </>
  );
}
