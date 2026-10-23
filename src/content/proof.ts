// Pagina /provas/ e /en/proof/. Estrutura e dados de Content/06 Site/04 Pagina Provas.md.
// Regra: so numeros que o Lucas pode sustentar; o que falta fica como [adicionar] / [LINK a informar].
import type { Lang } from '../i18n';
import { links } from '../data/links';

export interface ProofCase {
  name: string;
  period?: string;
  result: string;
  context: string;
}

export interface ProofContent {
  meta: { title: string; description: string };
  h1: string;
  lead: string;
  statsTitle: string;
  stats: Array<{ value: string; label: string }>;
  casesTitle: string;
  cases: ProofCase[];
  codeTitle: string;
  code: Array<{ name: string; url: string; text: string }>;
  videosTitle: string;
  videosExtra: string;
  videoWatch: string;
  articlesTitle: string;
  articleDates: string[];
  articlesNote: string;
  eventsTitle: string;
  eventsHead: [string, string, string, string];
  events: Array<{ date: string; name: string; place: string; role: string }>;
  clientsTitle: string;
  clientsExtra: string[];
  testimonial: string;
  ctaTitle: string;
  ctaNote: string;
  nuget: string;
}

export const proof: Record<Lang, ProofContent> = {
  pt: {
    meta: {
      title: 'Provas: casos, código e palestras · Lucas Resende Tavares',
      description:
        'Casos com números, 17 pacotes .NET open source, demonstrações de RavenDB com IA, vídeos, artigos e palestras de Lucas Resende Tavares.',
    },
    h1: 'Provas: casos, código e palestras',
    lead: '*Não peça para acreditar: confira.* Cada item tem data, resultado e link.',
    statsTitle: 'Resumo em números',
    stats: [
      { value: '17', label: 'pacotes .NET open source' },
      { value: '208 mil+', label: 'downloads no NuGet' },
      { value: '6', label: 'artigos sobre dados, arquitetura e IA' },
      { value: '5', label: 'palcos e comunidades no Brasil e nos EUA (2024–2026)' },
    ],
    casesTitle: 'Casos com número',
    cases: [
      {
        name: 'PetraSync',
        period: '2018–2019',
        result: 'Prazo: 30 dias → 45, entregue em 45',
        context:
          'Sistema crítico para um cliente nos EUA, com RavenDB como requisito. Pedi 45 dias, refiz a arquitetura em documentos e entreguei.',
      },
      {
        name: 'Relatório de previsão de metas',
        period: 'Mastertech',
        result: '≈ 4 h → ≈ 30 s',
        context: 'Repensei a estratégia de consulta e o relatório que ficava para o dia seguinte passou a rodar em segundos.',
      },
      {
        name: 'Procedures críticas',
        result: '4–8 h → 40 s',
        context: 'Reestruturação lógica com *table functions* e eliminação de cursores, sem mudar a modelagem nem criar índices.',
      },
      {
        name: 'DaaS no setor automotivo',
        result: '1,8 min → 600 ms',
        context: 'Recomendação técnica remodelada em RavenDB com Full-Text Search (o tempo inclui a autenticação).',
      },
      {
        name: 'Delphi → .NET',
        period: 'Agrotis, 2018',
        result: 'Equipe treinada em ≈ 6 meses',
        context: 'Liderei a transição de um time inteiro de Delphi para .NET e a integração com SAP.',
      },
      {
        name: 'App para a Castrol Brasil',
        period: '≈ 2023',
        result: 'Novo patamar de clientes',
        context: 'Contrato de aplicativo após a profissionalização da LeadSoft. [adicionar resultado, se autorizado]',
      },
    ],
    codeTitle: 'Código aberto e demonstrações',
    code: [
      {
        name: '17 pacotes NuGet',
        url: links.nugetProfile,
        text: 'Bibliotecas comuns, acesso a dados, adaptadores (BrasilAPI, ViaCEP, IBGE, e-mail, AWS, Azure Entra ID, Google, RavenDB Identity).',
      },
      {
        name: 'ravendb-demo',
        url: 'https://github.com/leadsoftlucas/ravendb-demo',
        text: 'Demonstração prática de RavenDB (fase 1 do processo seletivo).',
      },
      {
        name: 'ravendb-sales-assistant-demo',
        url: 'https://github.com/leadsoftlucas/ravendb-sales-assistant-demo',
        text: 'Assistente de vendas com IA sobre RavenDB (fase 2). [confirmar descrição]',
      },
      {
        name: 'Workshop TDC 2024',
        url: links.tdcWorkshopRepo,
        text: 'Código do workshop de modelagem.',
      },
    ],
    videosTitle: 'Vídeos e palestras',
    videosExtra: 'Entrevistas do processo seletivo (vídeos no meu canal). [LINKS a informar]',
    videoWatch: 'Assistir no YouTube →',
    articlesTitle: 'Artigos',
    articleDates: ['31/08/2026', '12/11/2025', '23/04/2026', '29/04/2026', '20/04/2026', '14/07/2025'],
    articlesNote: 'Publicados no LinkedIn.',
    eventsTitle: 'Onde estive',
    eventsHead: ['Data', 'Evento', 'Local', 'Papel'],
    events: [
      { date: '02/2024', name: 'Developer Week', place: 'San Francisco, EUA', role: 'Encontro com o time RavenDB' },
      { date: '09/2024', name: 'TDC São Paulo', place: 'São Paulo, Brasil', role: 'Palestra e workshop de NoSQL e modelagem' },
      { date: '11/2025', name: 'Microsoft Ignite', place: 'San Francisco, EUA', role: 'Primeira feira no time RavenDB' },
      { date: '05/2026', name: 'TechEx North America', place: 'San Jose, EUA', role: 'Demonstrações ao vivo no estande' },
      { date: '—', name: 'GDG Maringá', place: 'Maringá, Brasil', role: '*The Power of RavenDB* (vídeo)' },
    ],
    clientsTitle: 'Quem já confiou',
    clientsExtra: ['Agrotis', 'Petra Oil (via Inforlube)'],
    testimonial: 'Depoimentos: [adicionar 1 ou 2 frases curtas, assim que houver permissão]',
    ctaTitle: 'Quer conversar sobre o seu caso com RavenDB?',
    ctaNote: 'Prefere e-mail? Escreva para',
    nuget: 'Ver todos os pacotes no NuGet',
  },
  en: {
    meta: {
      title: 'Proof: cases, code and talks · Lucas Resende Tavares',
      description:
        'Cases with numbers, 17 open-source .NET packages, RavenDB demos with AI, videos, articles and talks by Lucas Resende Tavares.',
    },
    h1: 'Proof: cases, code and talks',
    lead: "*Don't take my word for it: check it.* Every item has a date, a result and a link.",
    statsTitle: 'Summary in numbers',
    stats: [
      { value: '17', label: 'open-source .NET packages' },
      { value: '208k+', label: 'NuGet downloads' },
      { value: '6', label: 'articles on data, architecture and AI' },
      { value: '5', label: 'stages and communities in Brazil and the US (2024–2026)' },
    ],
    casesTitle: 'Cases with numbers',
    cases: [
      {
        name: 'PetraSync',
        period: '2018–2019',
        result: 'Deadline: 30 days → 45, delivered in 45',
        context:
          'Critical system for a US client with RavenDB as a requirement. I asked for 45 days, rebuilt the architecture as documents and delivered.',
      },
      {
        name: 'Goals-forecast report',
        period: 'Mastertech',
        result: '≈ 4 h → ≈ 30 s',
        context: 'Rethinking the query strategy turned an overnight report into one that runs in seconds.',
      },
      {
        name: 'Critical stored procedures',
        result: '4–8 h → 40 s',
        context: 'Logical restructuring with table functions and cursor elimination, without changing the model or adding indexes.',
      },
      {
        name: 'DaaS in the automotive sector',
        result: '1.8 min → 600 ms',
        context: 'Technical recommendation remodeled on RavenDB with Full-Text Search (timing includes authentication).',
      },
      {
        name: 'Delphi → .NET',
        period: 'Agrotis, 2018',
        result: 'Team trained in ≈ 6 months',
        context: "Led an entire Delphi team's move to .NET and SAP integration.",
      },
      {
        name: 'App for Castrol Brazil',
        period: '≈ 2023',
        result: 'A new tier of clients',
        context: "App contract after LeadSoft's professionalization. [add result if authorized]",
      },
    ],
    codeTitle: 'Open source and demos',
    code: [
      {
        name: '17 NuGet packages',
        url: links.nugetProfile,
        text: 'Common libraries, data access, adapters (BrasilAPI, ViaCEP, IBGE, e-mail, AWS, Azure Entra ID, Google, RavenDB Identity).',
      },
      {
        name: 'ravendb-demo',
        url: 'https://github.com/leadsoftlucas/ravendb-demo',
        text: 'Hands-on RavenDB demo (phase 1 of the selection process).',
      },
      {
        name: 'ravendb-sales-assistant-demo',
        url: 'https://github.com/leadsoftlucas/ravendb-sales-assistant-demo',
        text: 'AI sales assistant on RavenDB (phase 2). [confirm description]',
      },
      {
        name: 'TDC 2024 workshop',
        url: links.tdcWorkshopRepo,
        text: 'Code from the data modeling workshop.',
      },
    ],
    videosTitle: 'Videos and talks',
    videosExtra: 'Selection-process interviews (videos on my channel). [links to be provided]',
    videoWatch: 'Watch on YouTube →',
    articlesTitle: 'Articles',
    articleDates: ['2026-08-31', '2025-11-12', '2026-04-23', '2026-04-29', '2026-04-20', '2025-07-14'],
    articlesNote: 'Published on LinkedIn (in Portuguese).',
    eventsTitle: 'Where I have been',
    eventsHead: ['Date', 'Event', 'Place', 'Role'],
    events: [
      { date: '2024-02', name: 'Developer Week', place: 'San Francisco, USA', role: 'Meeting the RavenDB team' },
      { date: '2024-09', name: 'TDC São Paulo', place: 'São Paulo, Brazil', role: 'Talk and workshop on NoSQL and data modeling' },
      { date: '2025-11', name: 'Microsoft Ignite', place: 'San Francisco, USA', role: 'First trade show on the RavenDB team' },
      { date: '2026-05', name: 'TechEx North America', place: 'San Jose, USA', role: 'Live demos at the booth' },
      { date: '—', name: 'GDG Maringá', place: 'Maringá, Brazil', role: '*The Power of RavenDB* (video)' },
    ],
    clientsTitle: 'Who has trusted me',
    clientsExtra: ['Agrotis', 'Petra Oil (via Inforlube)'],
    testimonial: 'Testimonials: [add 1 or 2 short sentences once there is permission]',
    ctaTitle: 'Want to talk about your RavenDB case?',
    ctaNote: 'Prefer e-mail? Write to',
    nuget: 'See all packages on NuGet',
  },
};
