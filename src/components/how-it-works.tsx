'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Download, Search, Sparkles } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

interface Step {
  number: number;
  icon: LucideIcon;
  titleKey: string;
  descKey: string;
}

const steps: Step[] = [
  { number: 1, icon: Download, titleKey: '0', descKey: '0' },
  { number: 2, icon: Search, titleKey: '1', descKey: '1' },
  { number: 3, icon: Sparkles, titleKey: '2', descKey: '2' },
];

export function HowItWorks() {
  const t = useTranslations('howItWorks');

  return (
    <section className="py-24 bg-muted/30">
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
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Connecting Lines (desktop only) */}
          <div className="hidden md:block absolute top-8 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-0">
            <div className="w-full border-t-2 border-dashed border-brand-300 dark:border-brand-800" />
          </div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step Number Circle */}
                <div
                  className={cn(
                    'relative z-10 w-16 h-16 rounded-full bg-brand-600 text-white',
                    'flex items-center justify-center text-2xl font-bold shadow-lg shadow-brand-600/25'
                  )}
                >
                  {step.number}
                </div>

                {/* Icon (below the number) */}
                <div className="mt-4 w-12 h-12 rounded-xl bg-brand-50 dark:bg-brand-950/50 flex items-center justify-center">
                  <Icon className="h-6 w-6 text-brand-500" />
                </div>

                {/* Title */}
                <h3 className="font-semibold text-xl text-foreground mt-6">
                  {t(`steps.${step.titleKey}.title`)}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mt-2 max-w-xs leading-relaxed">
                  {t(`steps.${step.descKey}.description`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
