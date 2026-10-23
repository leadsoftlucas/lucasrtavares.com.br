// Dados independentes de idioma, portados do index.html legado. Os textos ficam em src/i18n/*.ts (mesma ordem).

export interface ArticleData {
  slot: string;
  cover: string;
  url: string;
}

/** Na ordem dos textos em i18n (articles). */
export const articles: ArticleData[] = [
  {
    slot: 'art-1',
    cover: 'assets/cover-ai-legacy.jpg',
    url: 'https://www.linkedin.com/pulse/ningu%C3%A9m-te-disse-que-d%C3%A1-pra-ter-ia-sem-migrar-seu-de-resende-tavares-jrzxf/',
  },
  {
    slot: 'art-2',
    cover: 'assets/cover-segment.jpg',
    url: 'https://www.linkedin.com/pulse/ravendb-ai-segmenta%C3%A7%C3%A3o-unificada-em-tempo-real-e-por-resende-tavares-r7pnf/',
  },
  {
    slot: 'art-3',
    cover: 'assets/cover-pib.jpg',
    url: 'https://www.linkedin.com/pulse/li%C3%A7%C3%B5es-de-quem-processa-4-do-pib-por-que-agilidade-%C3%A9-resende-tavares-4slnf/',
  },
  {
    slot: 'art-4',
    cover: 'assets/cover-simplify.jpg',
    url: 'https://www.linkedin.com/pulse/quando-simplificar-exige-coragem-o-pre%C3%A7o-oculto-das-resende-tavares-kyehf/',
  },
  {
    slot: 'art-5',
    cover: 'assets/cover-csharp.jpg',
    url: 'https://www.linkedin.com/pulse/pare-de-usar-class-para-tudo-c-um-guia-simples-e-que-resende-tavares-tmg4f/',
  },
  {
    slot: 'art-6',
    cover: 'assets/cover-why-raven.jpg',
    url: 'https://www.linkedin.com/pulse/por-qu%C3%AA-falo-tanto-sobre-ravendb-lucas-resende-tavares-96yef/',
  },
];

export const articlesIndexUrl = 'https://www.linkedin.com/in/lucasrtavares/recent-activity/articles/';
