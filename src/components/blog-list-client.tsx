"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  Calendar,
  Clock,
  ArrowRight,
  X,
  Monitor,
  Laptop,
  Smartphone,
  TabletSmartphone,
  Scale,
} from "lucide-react";
import { localeHref } from "@/lib/locale-path";
import { getPlatformForSlug } from "@/lib/related-articles";

export interface BlogItem {
  slug: string;
  type?: "comparison" | "guide";
  category?: string;
  date: string;
  readingTime: number;
  competitorName?: string;
  title: string;
  subtitle: string;
}

interface BlogListClientProps {
  articles: BlogItem[];
  locale: string;
  labels: {
    readingTime: string;
    guide: string;
    readMore: string;
    allPlatforms: string;
    categoryWindows: string;
    categoryMac: string;
    categoryIos: string;
    categoryAndroid: string;
    categoryComparisons: string;
    searchArticles: string;
    noArticlesFound: string;
    clearSearch: string;
  };
}

export function BlogListClient({
  articles,
  locale,
  labels,
}: BlogListClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const articlesWithPlatform = useMemo(() => {
    return articles.map((art) => ({
      ...art,
      platform: getPlatformForSlug(art.slug),
    }));
  }, [articles]);

  const filteredArticles = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return articlesWithPlatform.filter((art) => {
      // Category filter
      if (selectedCategory === "windows" && art.platform !== "windows")
        return false;
      if (selectedCategory === "mac" && art.platform !== "mac") return false;
      if (selectedCategory === "ios" && art.platform !== "ios") return false;
      if (selectedCategory === "android" && art.platform !== "android")
        return false;
      if (selectedCategory === "comparison" && art.type !== "comparison")
        return false;

      // Search query filter
      if (q) {
        const titleMatch = art.title.toLowerCase().includes(q);
        const subtitleMatch = art.subtitle.toLowerCase().includes(q);
        const competitorMatch =
          art.competitorName?.toLowerCase().includes(q) ?? false;
        const categoryMatch = art.category?.toLowerCase().includes(q) ?? false;
        return titleMatch || subtitleMatch || competitorMatch || categoryMatch;
      }

      return true;
    });
  }, [articlesWithPlatform, selectedCategory, searchQuery]);

  const categoryCounts = useMemo(() => {
    return {
      all: articlesWithPlatform.length,
      windows: articlesWithPlatform.filter((a) => a.platform === "windows")
        .length,
      mac: articlesWithPlatform.filter((a) => a.platform === "mac").length,
      ios: articlesWithPlatform.filter((a) => a.platform === "ios").length,
      android: articlesWithPlatform.filter((a) => a.platform === "android")
        .length,
      comparison: articlesWithPlatform.filter((a) => a.type === "comparison")
        .length,
    };
  }, [articlesWithPlatform]);

  return (
    <div>
      {/* Search and Filter Controls */}
      <div className="mb-10 space-y-4">
        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted-foreground">
            <Search className="h-4 w-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={labels.searchArticles}
            className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-border bg-card/80 backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 transition-all text-sm shadow-sm"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          <button
            type="button"
            onClick={() => setSelectedCategory("all")}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
              selectedCategory === "all"
                ? "bg-brand-600 text-white shadow-sm"
                : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-brand-300"
            }`}
          >
            <span>{labels.allPlatforms}</span>
            <span
              className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                selectedCategory === "all"
                  ? "bg-brand-700/60 text-white"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {categoryCounts.all}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedCategory("windows")}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
              selectedCategory === "windows"
                ? "bg-brand-600 text-white shadow-sm"
                : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-brand-300"
            }`}
          >
            <Monitor className="h-3.5 w-3.5" />
            <span>{labels.categoryWindows}</span>
            <span
              className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                selectedCategory === "windows"
                  ? "bg-brand-700/60 text-white"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {categoryCounts.windows}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedCategory("mac")}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
              selectedCategory === "mac"
                ? "bg-brand-600 text-white shadow-sm"
                : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-brand-300"
            }`}
          >
            <Laptop className="h-3.5 w-3.5" />
            <span>{labels.categoryMac}</span>
            <span
              className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                selectedCategory === "mac"
                  ? "bg-brand-700/60 text-white"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {categoryCounts.mac}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedCategory("ios")}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
              selectedCategory === "ios"
                ? "bg-brand-600 text-white shadow-sm"
                : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-brand-300"
            }`}
          >
            <Smartphone className="h-3.5 w-3.5" />
            <span>{labels.categoryIos}</span>
            <span
              className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                selectedCategory === "ios"
                  ? "bg-brand-700/60 text-white"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {categoryCounts.ios}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedCategory("android")}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
              selectedCategory === "android"
                ? "bg-brand-600 text-white shadow-sm"
                : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-brand-300"
            }`}
          >
            <TabletSmartphone className="h-3.5 w-3.5" />
            <span>{labels.categoryAndroid}</span>
            <span
              className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                selectedCategory === "android"
                  ? "bg-brand-700/60 text-white"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {categoryCounts.android}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedCategory("comparison")}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
              selectedCategory === "comparison"
                ? "bg-brand-600 text-white shadow-sm"
                : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-brand-300"
            }`}
          >
            <Scale className="h-3.5 w-3.5" />
            <span>{labels.categoryComparisons}</span>
            <span
              className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                selectedCategory === "comparison"
                  ? "bg-brand-700/60 text-white"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {categoryCounts.comparison}
            </span>
          </button>
        </div>
      </div>

      {/* Articles Grid or Empty State */}
      {filteredArticles.length === 0 ? (
        <div className="text-center py-16 px-4 rounded-2xl border border-dashed border-border bg-card/40">
          <p className="text-muted-foreground mb-4">{labels.noArticlesFound}</p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-600 text-white text-sm font-medium hover:bg-brand-700 transition-colors"
          >
            {labels.clearSearch}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => {
            return (
              <Link
                key={article.slug}
                href={localeHref(locale, `/blog/${article.slug}`)}
                className="group block"
              >
                <article className="h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:border-brand-300 dark:hover:border-brand-700 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {article.readingTime} {labels.readingTime}
                      </span>
                    </div>

                    <div className="inline-block px-2.5 py-1 rounded-md bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400 text-xs font-medium mb-3">
                      {article.type === "guide"
                        ? article.category || labels.guide
                        : `vs ${article.competitorName}`}
                    </div>

                    <h2 className="text-xl font-semibold text-foreground mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors leading-snug">
                      {article.title}
                    </h2>

                    <p className="text-muted-foreground text-sm line-clamp-3 mb-6 leading-relaxed">
                      {article.subtitle}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-sm font-medium text-brand-600 dark:text-brand-400 group-hover:gap-2.5 transition-all pt-4 border-t border-border/50">
                    <span>{labels.readMore}</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
