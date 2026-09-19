import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { articles } from "@/content/articles";
import { alternatesFor, socialFor } from "@/lib/seo";
import { BlogListClient, type BlogItem } from "@/components/blog-list-client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  const title = `${t("title")} — Disk Mop`;
  const description = t("subtitle");

  return {
    title,
    description,
    alternates: alternatesFor(locale, "/blog"),
    ...socialFor({
      locale,
      path: "/blog",
      title,
      description,
      type: "website",
    }),
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "blog" });

  const blogItems: BlogItem[] = articles.map((article) => {
    const content = article.content[locale] || article.content["en"];
    return {
      slug: article.slug,
      type: article.type,
      category: article.category,
      date: article.date,
      readingTime: article.readingTime,
      competitorName: article.competitorName,
      title: content.title,
      subtitle: content.subtitle,
    };
  });

  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 text-sm font-medium mb-6">
              {t("badge")}
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              {t("title")}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlogListClient
            articles={blogItems}
            locale={locale}
            labels={{
              readingTime: t("readingTime"),
              guide: t("guide"),
              readMore: t("readMore"),
              allPlatforms: t("allPlatforms"),
              categoryWindows: t("categoryWindows"),
              categoryMac: t("categoryMac"),
              categoryIos: t("categoryIos"),
              categoryAndroid: t("categoryAndroid"),
              categoryComparisons: t("categoryComparisons"),
              searchArticles: t("searchArticles"),
              noArticlesFound: t("noArticlesFound"),
              clearSearch: t("clearSearch"),
            }}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
