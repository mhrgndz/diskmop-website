export interface ComparisonRow {
  feature: Record<string, string>;
  diskmop: string;
  competitor: string;
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
