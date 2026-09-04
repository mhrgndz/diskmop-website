/**
 * Karsilastirma tablosu hucresi.
 * Duz string  = dile bagimsiz deger ('✓', '✗', 'SHA-256' gibi) — cevrilmez.
 * Record      = dil basina metin ('$19.90 (tek seferlik)' gibi ceviri isteyenler).
 * Cozumleme: value[locale] || value['en'] (blog detay sayfasindaki localizedCell).
 */
export type LocalizedText = string | Record<string, string>;

export interface ComparisonRow {
  feature: Record<string, string>;
  diskmop: LocalizedText;
  competitor: LocalizedText;
  winner: 'diskmop' | 'competitor' | 'tie';
}

export interface ArticleSection {
  title: string;
  content: string[];
}

/**
 * GEO (Generative Engine Optimization) alanlari.
 * AI arama motorlari (AI Overviews, ChatGPT, Perplexity, Copilot) bir sayfayi
 * bir butun olarak degil, PARCA PARCA alintilar. Asagidaki alanlar bu parcalari
 * makine tarafindan okunabilir hale getirir:
 *   - keyTakeaways -> sayfanin basinda kendi kendine yeten cevap cumleleri
 *   - faq          -> FAQPage JSON-LD (soru-cevap ciftleri dogrudan alintilanir)
 *   - howTo        -> HowTo JSON-LD (adimli islerde)
 * Hepsi OPSIYONELDIR; eski makaleler dokunulmadan calismaya devam eder.
 */
export interface FaqItem {
  question: string;
  answer: string;
}

export interface HowToStep {
  name: string;
  text: string;
}

export interface HowTo {
  name: string;
  /** Toplam sure, ISO 8601 sure formati. Ornek: 'PT5M' = 5 dakika. */
  totalTime?: string;
  steps: HowToStep[];
}

/**
 * Rehber makalelerde veri tablosu. Karsilastirma tablosundan AYRIDIR:
 * o tablo "Disk Mop vs rakip" icin sabit basliklidir, bu ise serbest sutunlu.
 * AI motorlari tabloyu yuksek alintilanabilirlik sinyali sayar; sayisal
 * karsilastirmalari duz paragraf yerine buraya koy.
 */
export interface DataTable {
  caption?: string;
  columns: string[];
  rows: string[][];
}

interface BaseContent {
  title: string;
  metaDescription: string;
  subtitle: string;
  intro: string[];
  sections: ArticleSection[];
  verdict: string[];
  ctaText: string;
  keyTakeaways?: string[];
  faq?: FaqItem[];
  howTo?: HowTo;
  dataTable?: DataTable;
}

export interface ArticleContent extends BaseContent {
  diskmopPros: string[];
  diskmopCons: string[];
  competitorPros: string[];
  competitorCons: string[];
}

export type GuideContent = BaseContent;

export interface Article {
  slug: string;
  type?: 'comparison' | 'guide';
  category?: string;
  date: string;
  /** Son guncelleme. AI motorlari tazeligi sinyal olarak kullanir. */
  updated?: string;
  readingTime: number;
  competitorName?: string;
  content: Record<string, ArticleContent | GuideContent>;
  comparison?: ComparisonRow[];
}
