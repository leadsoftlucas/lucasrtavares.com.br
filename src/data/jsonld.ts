// JSON-LD da home (Content/06 Site/06 SEO, LLM e Dados Estruturados.md, secao 1).
// Sem ProfessionalService e sem priceRange. O telefone do Person e o numero RavenDB-focado ja usado no site;
// o numero pessoal nunca entra e o da LeadSoft nao entra em dados estruturados.
import { config } from '../config';
import { routes, type Lang } from '../i18n';

const site = config.siteUrl;
const telephone = '+55-41-99182-1569';

const text = {
  pt: {
    jobTitle: 'Sales Engineer e Arquiteto de Soluções',
    description:
      'Sales Engineer e Arquiteto de Soluções na RavenDB e a ponte do banco no Brasil. Programa desde 2007 e projeta software com RavenDB desde 2018. Autor de 17 pacotes .NET open source e palestrante no Brasil e nos EUA.',
    knowsAbout: [
      'RavenDB',
      'Bancos de dados NoSQL orientados a documentos',
      'Modelagem de dados',
      'Busca vetorial e Full-Text Search',
      'Inteligência artificial sobre dados corporativos',
      'Change Data Capture (CDC), ETL e replicação de dados',
      'Migração de bancos legados',
      'Arquitetura de software',
      'Desenvolvimento .NET e C#',
      'Performance e otimização de consultas',
    ],
    offerName: 'Desenvolvimento de software (.NET) e consultoria de tecnologia e de produto',
    offerDescription:
      'Disponível sob demanda, sem destaque: APIs em .NET e consultoria de tecnologia e de produto de software.',
    pageName: 'Lucas Resende Tavares — Sales Engineer RavenDB e Arquiteto de Soluções',
  },
  en: {
    jobTitle: 'Sales Engineer and Solutions Architect',
    description:
      "Sales Engineer and Solutions Architect at RavenDB and the database's bridge to Brazil. Programming since 2007 and designing software with RavenDB since 2018. Author of 17 open-source .NET packages and speaker in Brazil and the US.",
    knowsAbout: [
      'RavenDB',
      'Document-oriented NoSQL databases',
      'Data modeling',
      'Vector search and Full-Text Search',
      'Artificial intelligence over corporate data',
      'Change Data Capture (CDC), ETL and data replication',
      'Legacy database migration',
      'Software architecture',
      '.NET and C# development',
      'Query performance and optimization',
    ],
    offerName: 'Software development (.NET) and technology and product consulting',
    offerDescription:
      'Available on request, low-key: .NET APIs and technology and software product consulting.',
    pageName: 'Lucas Resende Tavares — RavenDB Sales Engineer and Solutions Architect',
  },
} as const;

export function homeJsonLd(lang: Lang) {
  const t = text[lang];
  const personId = `${site}/#lucas`;
  const pageUrl = lang === 'pt' ? `${site}/` : `${site}/en/`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': personId,
        name: 'Lucas Resende Tavares',
        givenName: 'Lucas',
        familyName: 'Resende Tavares',
        alternateName: ['Lucas Tavares', 'Lucas R. Tavares'],
        url: `${site}/`,
        image: `${site}/assets/og-cover-v2.jpg`,
        email: config.emailRavendb,
        telephone,
        jobTitle: t.jobTitle,
        description: t.description,
        worksFor: {
          '@type': 'Organization',
          name: 'RavenDB',
          legalName: 'Hibernating Rhinos Ltd.',
          url: 'https://ravendb.net',
          sameAs: ['https://ravendb.net', 'https://www.linkedin.com/company/ravendb/'],
        },
        hasOccupation: {
          '@type': 'Occupation',
          name: 'Sales Engineer',
          occupationLocation: { '@type': 'Country', name: 'Brazil' },
        },
        alumniOf: [
          { '@type': 'EducationalOrganization', name: 'Faculdade Cotemig' },
          { '@type': 'Organization', name: 'LeadSoft Soluções Web', url: 'https://leadsoft.inf.br' },
        ],
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Curitiba',
          addressRegion: 'PR',
          addressCountry: 'BR',
        },
        nationality: { '@type': 'Country', name: 'Brazil' },
        knowsLanguage: ['pt-BR', 'en'],
        knowsAbout: t.knowsAbout,
        sameAs: [
          'https://www.linkedin.com/in/lucasrtavares/',
          'https://github.com/leadsoftlucas',
          'https://www.nuget.org/profiles/lucastavares',
          'https://www.youtube.com/@LucasResendeTavares',
        ],
        makesOffer: {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: t.offerName,
            description: t.offerDescription,
            provider: { '@id': personId },
            availableLanguage: ['pt-BR', 'en'],
          },
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${site}/#website`,
        url: `${site}/`,
        name: 'Lucas Resende Tavares',
        inLanguage: ['pt-BR', 'en'],
        publisher: { '@id': personId },
      },
      {
        '@type': 'ProfilePage',
        '@id': `${pageUrl}#page`,
        url: pageUrl,
        name: t.pageName,
        inLanguage: lang === 'pt' ? 'pt-BR' : 'en',
        mainEntity: { '@id': personId },
        isPartOf: { '@id': `${site}/#website` },
        primaryImageOfPage: `${site}/assets/og-cover-v2.jpg`,
      },
    ],
  };
}

type PageKind = 'story' | 'proof' | 'press';
const pageTypes: Record<PageKind, string> = { story: 'AboutPage', proof: 'CollectionPage', press: 'WebPage' };

/** JSON-LD das paginas internas (doc 06, secao 2). `name` e o titulo da pagina no idioma. */
export function pageJsonLd(kind: PageKind, lang: Lang, name: string) {
  const url = `${site}${routes[kind][lang]}`;
  const personId = `${site}/#lucas`;
  return {
    '@context': 'https://schema.org',
    '@type': pageTypes[kind],
    '@id': `${url}#page`,
    url,
    name,
    inLanguage: lang === 'pt' ? 'pt-BR' : 'en',
    about: { '@id': personId },
    isPartOf: { '@id': `${site}/#website` },
    ...(kind === 'proof' && {
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: lang === 'pt' ? '17 pacotes .NET no NuGet' : '17 .NET packages on NuGet', url: 'https://www.nuget.org/profiles/lucastavares' },
          { '@type': 'ListItem', position: 2, name: 'ravendb-demo', url: 'https://github.com/leadsoftlucas/ravendb-demo' },
          { '@type': 'ListItem', position: 3, name: 'ravendb-sales-assistant-demo', url: 'https://github.com/leadsoftlucas/ravendb-sales-assistant-demo' },
        ],
      },
    }),
  };
}
