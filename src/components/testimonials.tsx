'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  city: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Ahmet Yilmaz',
    role: 'Yazilim Muhendisi',
    city: 'Istanbul',
    quote:
      'Disk Mop ile bilgisayarimda 50 GB yer actigima inanamadim! Yillardir biriken gecici dosyalar, eski loglar ve cache dosyalari tek tikla temizlendi. Artik depolama alani uyarisi almiyorum.',
  },
  {
    name: 'Elif Demir',
    role: 'Grafik Tasarimci',
    city: 'Ankara',
    quote:
      'Yinelenen dosya bulucu harika! Ayni PSD dosyalarinin farkli klasorlerde kopya kopya birikmis oldugunu fark etmedim bile. Tasarim dosyalarima dokunmadan sadece kopyalari temizledi.',
  },
  {
    name: 'Mehmet Kaya',
    role: 'Universite Ogrencisi',
    city: 'Izmir',
    quote:
      'Eski laptopum artik cok daha hizli aciliyor. Baslangic programlarini yonetmek ve gereksiz dosyalari temizlemek fark yaratmis. Yeni bilgisayar almak yerine bunu denemeni oneririm.',
  },
  {
    name: 'Zeynep Arslan',
    role: 'Muhasebeci',
    city: 'Bursa',
    quote:
      'Bilgisayardan pek anlamam ama Disk Mop kullanimi cok basit. Tek dugmeye basiyorsun, ne silinecegini gosteriyor, onayliyorsun ve temizleniyor. Onemli dosyalarima hic dokunmadi.',
  },
  {
    name: 'Can Ozturk',
    role: 'YouTuber',
    city: 'Antalya',
    quote:
      'Tarayici onbellegi ve indirilenler klasoru tam bir cop yukuymus. Disk Mop ile duzenli temizlik yapiyorum, render sureleri bile kisaldi. Icerik uretici arkadaslarima tavsiye ederim.',
  },
  {
    name: 'Ayse Celik',
    role: 'Ofis Yoneticisi',
    city: 'Eskisehir',
    quote:
      'Ofisteki 12 bilgisayarin hepsini Disk Mop ile yonetiyorum. Baslangic programlarini kontrol etmek ve gecici dosyalari temizlemek is verimliligimizi gozle gorulur sekilde artirdi.',
  },
];

export function Testimonials() {
  const t = useTranslations('testimonials');

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 border"
            >
              {/* Stars */}
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm mt-4 text-foreground leading-relaxed">
                &ldquo;{t(`items.${index}.quote`)}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-6">
                <p className="font-semibold text-foreground">
                  {t(`items.${index}.name`)}
                </p>
                <p className="text-xs text-muted-foreground">
                  {t(`items.${index}.role`)} &middot; {t(`items.${index}.city`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
