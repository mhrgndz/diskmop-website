'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useInView } from 'framer-motion';

interface StatConfig {
  target: number;
  decimals: number;
  prefix: string;
  suffix: string;
  format: 'integer' | 'decimal' | 'comma';
}

const statConfigs: StatConfig[] = [
  { target: 47, decimals: 0, prefix: '', suffix: ' GB', format: 'integer' },
  { target: 32, decimals: 0, prefix: '%', suffix: '', format: 'integer' },
  { target: 10000, decimals: 0, prefix: '', suffix: '+', format: 'comma' },
  { target: 4.8, decimals: 1, prefix: '', suffix: '/5', format: 'decimal' },
];

function formatNumber(value: number, config: StatConfig): string {
  if (config.format === 'comma') {
    return Math.round(value).toLocaleString('tr-TR');
  }
  if (config.format === 'decimal') {
    return value.toFixed(config.decimals);
  }
  return Math.round(value).toString();
}

function useCountUp(target: number, config: StatConfig, shouldStart: boolean): string {
  const [displayValue, setDisplayValue] = useState('0');
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  const animate = useCallback(
    (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const duration = 2000;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentValue = eased * target;

      setDisplayValue(formatNumber(currentValue, config));

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    },
    [target, config]
  );

  useEffect(() => {
    if (!shouldStart) return;

    startTimeRef.current = null;
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [shouldStart, animate]);

  return displayValue;
}

function StatItem({
  config,
  index,
  label,
  isInView,
}: {
  config: StatConfig;
  index: number;
  label: string;
  isInView: boolean;
}) {
  const value = useCountUp(config.target, config, isInView);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="text-center"
    >
      <div className="text-4xl sm:text-5xl font-bold">
        {config.prefix}
        {value}
        {config.suffix}
      </div>
      <div className="text-brand-100 text-sm mt-2">{label}</div>
    </motion.div>
  );
}

export function Stats() {
  const t = useTranslations('stats');
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const items = [
    t('items.0.label'),
    t('items.1.label'),
    t('items.2.label'),
    t('items.3.label'),
  ];

  return (
    <section className="py-24">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-600 dark:bg-brand-950 text-white rounded-3xl p-12 mx-4 sm:mx-6 lg:mx-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {statConfigs.map((config, index) => (
              <StatItem
                key={index}
                config={config}
                index={index}
                label={items[index]}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
