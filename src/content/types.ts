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

export interface ArticleContent {
  title: string;
  metaDescription: string;
  subtitle: string;
  intro: string[];
  diskmopPros: string[];
  diskmopCons: string[];
  competitorPros: string[];
  competitorCons: string[];
  sections: ArticleSection[];
  verdict: string[];
  ctaText: string;
}

export interface GuideContent {
  title: string;
  metaDescription: string;
  subtitle: string;
  intro: string[];
  sections: ArticleSection[];
  verdict: string[];
  ctaText: string;
}

export interface Article {
  slug: string;
  type?: 'comparison' | 'guide';
  category?: string;
  date: string;
  readingTime: number;
  competitorName?: string;
  content: Record<string, ArticleContent | GuideContent>;
  comparison?: ComparisonRow[];
}
