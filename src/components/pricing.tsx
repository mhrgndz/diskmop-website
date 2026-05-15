'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const features = [
  'features.0',
  'features.1',
  'features.2',
  'features.3',
  'features.4',
  'features.5',
  'features.6',
  'features.7',
] as const;

export function Pricing() {
  const t = useTranslations('pricing');

  const checkoutUrl =
    process.env.NEXT_PUBLIC_POLAR_CHECKOUT_URL || '#';

  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            {t('title')}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Card Container */}
        <div className="flex justify-center">
          {/* Main Pricing Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative w-full max-w-lg bg-card rounded-3xl p-8 border-2 border-brand-500 shadow-2xl shadow-brand-500/10 overflow-hidden"
          >
            {/* Popular Badge */}
            <div className="absolute -right-8 top-6 rotate-45 bg-brand-600 text-white text-xs px-8 py-1 font-medium">
              {t('plan.badge')}
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-foreground">
              {t('plan.name')}
            </h3>

            {/* Price */}
            <div className="mt-6">
              <span className="text-5xl font-bold text-foreground">$19.90</span>
              <p className="mt-1 text-muted-foreground text-sm">
                {t('plan.period')}
              </p>
            </div>

            {/* Features */}
            <ul className="mt-8 space-y-3">
              {features.map((key) => (
                <li key={key} className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-500 shrink-0" />
                  <span className="text-sm text-foreground">{t(key)}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href={checkoutUrl}
              className="mt-8 block w-full bg-brand-600 hover:bg-brand-700 text-white rounded-xl py-4 text-lg font-semibold shadow-lg shadow-brand-600/25 text-center transition-colors"
            >
              {t('plan.cta')}
            </a>

            {/* Payment Trust */}
            <p className="mt-4 text-center text-xs text-muted-foreground">
              {t('plan.paymentTrust')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
