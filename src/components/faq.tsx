'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

import {
  AccordionRoot,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';

const FAQ_COUNT = 8;

export function FAQ() {
  const t = useTranslations('faq');

  return (
    <section id="faq" className="py-24">
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

        {/* Accordion */}
        <div className="max-w-3xl mx-auto">
          <AccordionRoot type="single" collapsible>
            {Array.from({ length: FAQ_COUNT }, (_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <AccordionItem value={`faq-${index}`}>
                  <AccordionTrigger className="text-left text-base">
                    {t(`items.${index}.question`)}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {t(`items.${index}.answer`)}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </AccordionRoot>
        </div>
      </div>
    </section>
  );
}
