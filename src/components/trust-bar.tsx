'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Download, Star, ShieldCheck, BadgeCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface TrustItem {
  key: string;
  value: string;
  icon: LucideIcon;
}

const trustItems: TrustItem[] = [
  { key: 'downloads', value: '10,000+', icon: Download },
  { key: 'rating', value: '4.8/5 ★', icon: Star },
  { key: 'safe', value: '100%', icon: ShieldCheck },
  { key: 'guarantee', value: '∞', icon: BadgeCheck },
];

export function TrustBar() {
  const t = useTranslations('trustBar');

  return (
    <section className="bg-muted/50 dark:bg-muted/30 py-6 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16"
        >
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <Icon className="h-5 w-5 text-brand-500 shrink-0" />
                <div className="flex flex-col">
                  <span className="font-bold text-foreground text-sm">
                    {item.value}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {t(item.key)}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
