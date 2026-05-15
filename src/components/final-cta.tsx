'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export function FinalCTA() {
  const t = useTranslations('finalCta');

  return (
    <section className="py-24">
      <div className="bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900 dark:from-brand-950 dark:via-gray-900 dark:to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white"
          >
            {t('title')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg text-brand-100"
          >
            {t('subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8"
          >
            <a
              href="#platforms"
              className="inline-flex items-center justify-center bg-white text-brand-700 hover:bg-gray-100 rounded-xl px-8 py-4 text-lg font-semibold transition-colors shadow-lg"
            >
              {t('cta')}
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 text-brand-200 text-sm"
          >
            {t('trust')}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
