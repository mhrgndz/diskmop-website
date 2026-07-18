/**
 * Builds a locale-aware absolute path for plain anchors/links.
 * The site uses localePrefix: 'as-needed' — the default locale (en) has no
 * URL prefix, so '/en/...' URLs only work via a middleware redirect and
 * '#section' anchors only exist on the homepage.
 *
 * localeHref('en', '/#platforms') -> '/#platforms'
 * localeHref('tr', '/#platforms') -> '/tr#platforms'
 * localeHref('tr', '/blog')       -> '/tr/blog'
 * localeHref('tr', '/')           -> '/tr'
 */
export function localeHref(locale: string, path: string): string {
  if (locale === 'en') return path;
  if (path === '/') return `/${locale}`;
  if (path.startsWith('/#')) return `/${locale}${path.slice(1)}`;
  return `/${locale}${path}`;
}
