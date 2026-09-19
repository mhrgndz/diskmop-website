import { articles } from "@/content/articles";

export const dynamic = "force-static";

export async function GET() {
  const baseUrl = "https://diskmop.com";

  const sortedArticles = [...articles].sort(
    (a, b) =>
      new Date(b.updated || b.date).getTime() -
      new Date(a.updated || a.date).getTime(),
  );

  const rssItems = sortedArticles
    .map((article) => {
      const enContent = article.content["en"] || article.content["tr"];
      const pubDate = new Date(article.updated || article.date).toUTCString();
      const link = `${baseUrl}/blog/${article.slug}`;

      return `    <item>
      <title><![CDATA[${enContent.title}]]></title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <description><![CDATA[${enContent.metaDescription}]]></description>
      <pubDate>${pubDate}</pubDate>
      <category>${article.category || "Storage"}</category>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Disk Mop Engineering &amp; Storage Blog</title>
    <link>${baseUrl}/blog</link>
    <description>Expert guides, deep-dives, and benchmarks on disk space optimization, SSD health, and system performance.</description>
    <language>en-US</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
${rssItems}
  </channel>
</rss>`;

  return new Response(xml.trim(), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
