// Ponto unico das variaveis PUBLIC_* (ver .env.example). Nao sao segredos: vao para o HTML publico.
// Os valores padrao sao os do site atual, para um build sem variaveis nao perder analytics nem contato.
const env = import.meta.env;

export const config = {
  siteUrl: (env.PUBLIC_SITE_URL ?? 'https://lucasrtavares.com.br').replace(/\/$/, ''),
  gtmId: env.PUBLIC_GTM_ID || 'GTM-59KJ4PPC',
  gaId: env.PUBLIC_GA_ID || 'G-16LSSW03WS',
  whatsappRavendb: env.PUBLIC_WHATSAPP_RAVENDB || '5541991821569',
  whatsappLeadsoft: env.PUBLIC_WHATSAPP_LEADSOFT || '5541991777488',
  emailRavendb: env.PUBLIC_EMAIL_RAVENDB || 'lucas.tavares@ravendb.net',
  emailPersonal: env.PUBLIC_EMAIL_PERSONAL || 'eu@lucasrtavares.com.br',
  /** GTM/GA4 so carregam no build de producao (nunca no `npm run dev`). */
  analytics: import.meta.env.PROD,
} as const;

export const whatsappLink = (text: string, number: string = config.whatsappRavendb) =>
  `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
