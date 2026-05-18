'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  const t = useTranslations('notFound');

  return (
    <>
      <Navigation />
      <main className="min-h-[70vh] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-lg"
        >
          <div className="text-8xl font-bold bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">
            404
          </div>
          <h1 className="mt-4 text-2xl font-bold text-foreground">
            {t('title')}
          </h1>
          <p className="mt-3 text-muted-foreground">
            {t('description')}
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button asChild variant="default" size="lg" className="gap-2">
              <Link href="/">
                <Home className="h-4 w-4" />
                {t('home')}
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2"
              onClick={() => history.back()}
            >
              <ArrowLeft className="h-4 w-4" />
              {t('back')}
            </Button>
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
