// Pagina /imprensa/ e /en/press/. Texto de Content/06 Site/05 Pagina Imprensa e Bio Kit.md.
// Sem telefone: o contato e o e-mail e os botoes de WhatsApp do site.
import type { Lang } from '../i18n';

export interface PressContent {
  meta: { title: string; description: string };
  h1: string;
  lead: string;
  factsTitle: string;
  facts: Array<{ k: string; v: string }>;
  contactNote: string;
  biosTitle: string;
  bios: Array<{ id: string; label: string; text: string }>;
  copy: string;
  copied: string;
  talksTitle: string;
  talksHead: [string, string, string];
  talks: Array<{ title: string; summary: string; format: string; g1?: boolean }>;
  introTitle: string;
  intro: string;
  materialsTitle: string;
  materials: Array<{ label: string; url: string }>;
  materialsTodo: string;
  rulesTitle: string;
  rules: string[];
  ctaTitle: string;
  ctaNote: string;
}

const photos = (lang: Lang) => [
  { label: lang === 'pt' ? 'Foto (alta resolução)' : 'Photo (high resolution)', url: '/assets/lucas-tavares.png' },
  { label: lang === 'pt' ? 'Foto (620 px)' : 'Photo (620 px)', url: '/assets/lucas-tavares-620.png' },
  { label: 'Avatar', url: '/assets/avatar-front.png' },
  { label: lang === 'pt' ? 'Capa social (1200×630)' : 'Social cover (1200×630)', url: '/assets/og-cover-v2.jpg' },
  { label: lang === 'pt' ? 'Logo pessoal (lambda)' : 'Personal logo (lambda)', url: '/assets/lambda.svg' },
];

export const press: Record<Lang, PressContent> = {
  pt: {
    meta: {
      title: 'Imprensa e bio kit · Lucas Resende Tavares',
      description:
        'Bios curta, média e longa, temas de palestra e materiais de Lucas Resende Tavares, Sales Engineer na RavenDB.',
    },
    h1: 'Imprensa e bio kit',
    lead: 'Para organizadores de eventos, podcasts, universidades e imprensa. Tudo para copiar e colar.',
    factsTitle: 'Ficha rápida',
    facts: [
      { k: 'Nome', v: '**Lucas Resende Tavares**' },
      { k: 'Cargo', v: 'Sales Engineer e Arquiteto de Soluções na RavenDB' },
      { k: 'Base', v: 'Curitiba, Brasil' },
      { k: 'Idiomas', v: 'Português e inglês' },
      {
        k: 'Especialidades',
        v: 'RavenDB, modelagem de dados, .NET, busca vetorial e IA sobre dados, migração de legado',
      },
      { k: 'Contato', v: '[eu@lucasrtavares.com.br](mailto:eu@lucasrtavares.com.br) · botões de WhatsApp no fim da página' },
      {
        k: 'Redes',
        v: '[LinkedIn](https://www.linkedin.com/in/lucasrtavares/) · [GitHub](https://github.com/leadsoftlucas) · [YouTube](https://www.youtube.com/@LucasResendeTavares) · [NuGet](https://www.nuget.org/profiles/lucastavares)',
      },
    ],
    contactNote: '',
    biosTitle: 'Bios (copiáveis)',
    bios: [
      {
        id: 'curta',
        label: 'Curta (≈ 140 caracteres)',
        text: 'Sales Engineer e Arquiteto de Soluções na RavenDB. Modelagem de dados, .NET e software feito para durar.',
      },
      {
        id: 'media',
        label: 'Média (≈ 400 caracteres)',
        text: 'Lucas Resende Tavares é Sales Engineer e Arquiteto de Soluções na RavenDB e a ponte do banco no Brasil. Programa desde 2007 e projeta software com RavenDB desde 2018. Fundou e liderou a LeadSoft (2018–2025), foi parceiro oficial do RavenDB no Brasil e publicou 17 pacotes .NET open source com mais de 208 mil downloads. Palestrou no TDC São Paulo e na Developer Week, em San Francisco.',
      },
      {
        id: 'longa',
        label: 'Longa (≈ 900 caracteres)',
        text: 'Lucas Resende Tavares nasceu em Belo Horizonte, em 1991, e vive em Curitiba desde 2015. Programa desde 2007 e profissionalmente desde 2009; seu primeiro grande projeto foi um ERP completo, em Delphi, para uma indústria. Em 2018, aprendeu RavenDB em poucas semanas para entregar um sistema a um cliente nos EUA e, desde então, projeta software com esse banco sempre que a escolha é dele (outros bancos só por restrição clara de infraestrutura do cliente). Fundou e liderou a LeadSoft (2018–2025), software house de Curitiba e parceira oficial do RavenDB no Brasil. Em 2025 entrou para o time da RavenDB como Sales Engineer e Arquiteto de Soluções. É autor de 17 pacotes .NET open source (mais de 208 mil downloads), palestrou no TDC São Paulo, na Developer Week, no Microsoft Ignite e no TechEx, e escreve sobre dados, arquitetura e IA. Fora do código, escala, faz trilhas e escreve ficção científica.',
      },
    ],
    copy: 'Copiar',
    copied: 'Copiado!',
    talksTitle: 'Temas de palestra',
    talksHead: ['Título', 'Resumo', 'Formato'],
    talks: [
      {
        title: 'NoSQL: um pequeno passo na modelagem, um grande salto em eficiência',
        summary: 'Como pequenas mudanças de modelagem geram ganhos massivos de performance, com demonstração ao vivo.',
        format: 'Palestra 40–50 min, workshop 2–3 h',
      },
      {
        title: 'IA no legado sem migrar o banco',
        summary:
          'Ligar busca inteligente e agentes sobre um SQL Server antigo, usando CDC com RavenDB, sem tocar no que já existia.',
        format: 'Palestra e demonstração',
      },
      {
        title: 'Software que dura: o custo real da complexidade',
        summary: 'Por que quase toda conta cara de tecnologia é conta de complexidade, e como simplificar com coragem.',
        format: 'Palestra 30–45 min',
      },
      {
        title: 'Busca, vetores e IA na mesma camada de dados',
        summary: 'Full-Text, busca vetorial e IA aplicadas ao conjunto inteiro dos dados com RavenDB.',
        format: 'Palestra, workshop',
      },
      {
        title: 'De arquiteto a Sales Engineer',
        summary:
          'O que muda quando quem projeta passa a ajudar quem decide; lições de vender tecnologia sendo engenheiro.',
        format: 'Palestra curta, podcast',
        g1: true,
      },
    ],
    introTitle: 'Como me apresentar',
    intro:
      '"Lucas Resende Tavares é Sales Engineer e Arquiteto de Soluções na RavenDB. Programa há quase duas décadas e projeta software com RavenDB desde 2018. Hoje ele é a ponte do banco no Brasil."',
    materialsTitle: 'Materiais',
    materials: photos('pt'),
    materialsTodo: '[adicionar: foto em alta, logo e uma página em PDF com a bio, para download]',
    rulesTitle: 'Regras de uso',
    rules: [
      'Use sempre "Lucas Resende Tavares" e o cargo completo.',
      'Cite a RavenDB como empregadora. Este site é pessoal e **não é um canal oficial** da RavenDB.',
      'Para contato, use o e-mail e os botões de WhatsApp do site.',
    ],
    ctaTitle: 'Quer o Lucas no seu evento ou podcast?',
    ctaNote: 'Prefere e-mail? Escreva para',
  },
  en: {
    meta: {
      title: 'Press and bio kit · Lucas Resende Tavares',
      description:
        'Short, medium and long bios, talk topics and materials for Lucas Resende Tavares, Sales Engineer at RavenDB.',
    },
    h1: 'Press and bio kit',
    lead: 'For event organizers, podcasts, universities and the press. Everything ready to copy and paste.',
    factsTitle: 'Quick facts',
    facts: [
      { k: 'Name', v: '**Lucas Resende Tavares**' },
      { k: 'Role', v: 'Sales Engineer and Solutions Architect at RavenDB' },
      { k: 'Based in', v: 'Curitiba, Brazil' },
      { k: 'Languages', v: 'Portuguese and English' },
      {
        k: 'Expertise',
        v: 'RavenDB, data modeling, .NET, vector search and AI over data, legacy migration',
      },
      { k: 'Contact', v: '[eu@lucasrtavares.com.br](mailto:eu@lucasrtavares.com.br) · WhatsApp buttons at the end of the page' },
      {
        k: 'Profiles',
        v: '[LinkedIn](https://www.linkedin.com/in/lucasrtavares/) · [GitHub](https://github.com/leadsoftlucas) · [YouTube](https://www.youtube.com/@LucasResendeTavares) · [NuGet](https://www.nuget.org/profiles/lucastavares)',
      },
    ],
    contactNote: '',
    biosTitle: 'Bios (copy-ready)',
    bios: [
      {
        id: 'short',
        label: 'Short (≈ 140 characters)',
        text: 'Sales Engineer and Solutions Architect at RavenDB. Data modeling, .NET and software built to last.',
      },
      {
        id: 'medium',
        label: 'Medium (≈ 400 characters)',
        text: "Lucas Resende Tavares is a Sales Engineer and Solutions Architect at RavenDB and the database's bridge to Brazil. He has been programming since 2007 and designing software with RavenDB since 2018. He founded and led LeadSoft (2018–2025), was an official RavenDB partner in Brazil and published 17 open-source .NET packages with over 208,000 downloads. He has spoken at TDC São Paulo and Developer Week in San Francisco.",
      },
      {
        id: 'long',
        label: 'Long (≈ 900 characters)',
        text: 'Lucas Resende Tavares was born in Belo Horizonte, Brazil, in 1991 and has lived in Curitiba since 2015. He has been programming since 2007 and professionally since 2009; his first big project was a complete ERP in Delphi for a manufacturer. In 2018 he learned RavenDB in a few weeks to deliver a system to a US client and has since designed software with it whenever the choice was his (other databases only when a client had a clear infrastructure constraint). He founded and led LeadSoft (2018–2025), a Curitiba software house and official RavenDB partner in Brazil. In 2025 he joined the RavenDB team as Sales Engineer and Solutions Architect. He authored 17 open-source .NET packages (200,000+ downloads), has spoken at TDC São Paulo, Developer Week, Microsoft Ignite and TechEx, and writes about data, architecture and AI. Off the keyboard, he climbs, hikes and writes science fiction.',
      },
    ],
    copy: 'Copy',
    copied: 'Copied!',
    talksTitle: 'Talk topics',
    talksHead: ['Title', 'Summary', 'Format'],
    talks: [
      {
        title: 'NoSQL: one small step in modeling, a giant leap in efficiency',
        summary: 'How small modeling changes produce massive performance gains, with a live demonstration.',
        format: 'Talk 40–50 min, workshop 2–3 h',
      },
      {
        title: 'AI on legacy without migrating the database',
        summary:
          'Connecting intelligent search and agents to an old SQL Server, using CDC with RavenDB, without touching what already existed.',
        format: 'Talk and demonstration',
      },
      {
        title: 'Software that lasts: the real cost of complexity',
        summary: 'Why almost every expensive technology bill is a complexity bill, and how to simplify with courage.',
        format: 'Talk 30–45 min',
      },
      {
        title: 'Search, vectors and AI in the same data layer',
        summary: 'Full-text search, vector search and AI applied to the whole dataset with RavenDB.',
        format: 'Talk, workshop',
      },
      {
        title: 'From architect to Sales Engineer',
        summary:
          'What changes when the person who designs starts helping the person who decides; lessons from selling technology as an engineer.',
        format: 'Short talk, podcast',
        g1: true,
      },
    ],
    introTitle: 'How to introduce me',
    intro:
      '"Lucas Resende Tavares is a Sales Engineer and Solutions Architect at RavenDB. He has been programming for almost two decades and designing software with RavenDB since 2018. Today he is the database\'s bridge to Brazil."',
    materialsTitle: 'Materials',
    materials: photos('en'),
    materialsTodo: '[add: high-resolution photo, logo and a one-page PDF with the bio, for download]',
    rulesTitle: 'Usage rules',
    rules: [
      'Always use "Lucas Resende Tavares" and the full job title.',
      'Cite RavenDB as the employer. This site is personal and **not an official RavenDB channel**.',
      'For contact, use the e-mail and the WhatsApp buttons on the site.',
    ],
    ctaTitle: 'Want Lucas at your event or podcast?',
    ctaNote: 'Prefer e-mail? Write to',
  },
};
