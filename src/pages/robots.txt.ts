import type { APIRoute } from 'astro';
import { config } from '../config';

// Crawlers de IA liberados explicitamente (um grupo especifico ignora as regras do grupo "*").
const aiCrawlers = [
  'GPTBot',
  'ChatGPT-User',
  'OAI-SearchBot',
  'Google-Extended',
  'ClaudeBot',
  'Claude-User',
  'Claude-SearchBot',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Applebot-Extended',
  'CCBot',
];

export const GET: APIRoute = () => {
  const body = [
    '# robots.txt de lucasrtavares.com.br (gerado no build por src/pages/robots.txt.ts)',
    '',
    'User-agent: *',
    'Allow: /',
    '',
    '# Crawlers de IA: liberados explicitamente.',
    ...aiCrawlers.map((name) => `User-agent: ${name}`),
    'Allow: /',
    '',
    `Sitemap: ${config.siteUrl}/sitemap.xml`,
    '',
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
