import type { pt } from './pt';

// M1: so as chaves usadas pelo layout. As demais chaves de `const EN` entram na M2.
export const en: typeof pt = {
  meta: {
    // Descricao e keywords em ingles: traducao do <head> legado (que so existia em PT). Revisao do Lucas (D8).
    title: 'Lucas Resende Tavares — Sales Engineer · RavenDB',
    description:
      'Lucas Resende Tavares — Sales Engineer and Solutions Architect at RavenDB. RavenDB consulting, technology and architecture consulting, software product consulting and .NET backend development, for clients in Brazil and abroad. 17 open-source .NET packages and over 208,000 NuGet downloads.',
    keywords:
      'RavenDB consulting, RavenDB consultant, technology consulting, software architecture consulting, software product consulting, .NET backend development, senior .NET developer, software architect, NoSQL data modeling, document database, vector search, Full-Text Search, CDC, Sales Engineer RavenDB, Lucas Resende Tavares',
    ogDescription:
      'Data, architecture and the real cost of complexity. Sales Engineer at RavenDB, author of 17 open-source .NET packages and speaker in Brazil and the US.',
    twitterDescription:
      'Data, architecture and the real cost of complexity. Sales Engineer at RavenDB and author of 17 open-source .NET packages.',
    ogImageAlt: 'Lucas Resende Tavares — Sales Engineer at RavenDB, your bridge to RavenDB in Brazil',
    ogLocale: 'en_US',
  },
  nav: {
    about: 'About',
    talk: 'Talk to me',
    path: 'Career',
    code: 'Open source',
    stages: 'Stages',
    writing: 'Writing',
    contact: 'Contact',
  },
  brandAlt: "Lambda — Lucas Resende Tavares' personal brand",
  langPt: 'Português',
  langEn: 'English',
  footerNote: 'Sales Engineer at RavenDB · Curitiba, Brazil',
  cookie: {
    text: 'This site uses analytics cookies (Google Analytics/Tag Manager) to understand how visitors arrive and navigate. By continuing, you agree to this use.',
    btn: 'Got it',
  },
};
