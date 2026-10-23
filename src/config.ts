// Ponto unico das variaveis PUBLIC_* (ver .env.example). Nao ha segredos aqui.
const env = import.meta.env;

export const config = {
  siteUrl: env.PUBLIC_SITE_URL ?? 'https://lucasrtavares.com.br',
  gtmId: env.PUBLIC_GTM_ID ?? '',
  gaId: env.PUBLIC_GA_ID ?? '',
  whatsappRavendb: env.PUBLIC_WHATSAPP_RAVENDB ?? '',
  whatsappLeadsoft: env.PUBLIC_WHATSAPP_LEADSOFT ?? '',
  emailRavendb: env.PUBLIC_EMAIL_RAVENDB ?? '',
  emailPersonal: env.PUBLIC_EMAIL_PERSONAL ?? '',
} as const;
