import type { APIRoute } from 'astro';
import { config } from '../config';
import { homePath, routes } from '../i18n';

// Cada pagina existe em PT e EN; cada entrada aponta as alternativas (hreflang) e o x-default (PT).
const pages = [
  { pt: homePath.pt, en: homePath.en },
  { pt: routes.story.pt, en: routes.story.en },
  { pt: routes.proof.pt, en: routes.proof.en },
  { pt: routes.press.pt, en: routes.press.en },
];

export const GET: APIRoute = () => {
  const abs = (path: string) => config.siteUrl + path;
  const lastmod = new Date().toISOString().slice(0, 10);
  const entries = pages.flatMap((p) =>
    (['pt', 'en'] as const).map((lang) => {
      const alternates = [
        `    <xhtml:link rel="alternate" hreflang="pt-BR" href="${abs(p.pt)}"/>`,
        `    <xhtml:link rel="alternate" hreflang="en" href="${abs(p.en)}"/>`,
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(p.pt)}"/>`,
      ].join('\n');
      return `  <url>\n    <loc>${abs(p[lang])}</loc>\n    <lastmod>${lastmod}</lastmod>\n${alternates}\n  </url>`;
    }),
  );
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${entries.join('\n')}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
