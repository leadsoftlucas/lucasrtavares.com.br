// Dados independentes de idioma, portados do index.html legado. Os textos ficam em src/i18n/*.ts (mesma ordem).

export interface VideoData {
  /** ID do video no YouTube. */
  id: string;
}

/** Na ordem dos textos em i18n (videos). */
export const videos: VideoData[] = [
  {
    id: '6wBQ2GiSmv8',
  },
  {
    id: '-d7VeJ-Cqoo',
  },
  {
    id: 'u3ePP_5KBT8',
  },
  {
    id: 'Z7dCb-jei80',
  },
];

export const youtubeWatchUrl = (id: string) => 'https://www.youtube.com/watch?v=' + id;
export const youtubeThumbUrl = (id: string) => 'https://i.ytimg.com/vi/' + id + '/hqdefault.jpg';
export const youtubeEmbedUrl = (id: string) => 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0';

/** Entrevistas do processo seletivo (canal do Lucas), informadas por ele em 24/10/2026. `start` e o ponto de inicio do link. */
export interface InterviewVideo {
  id: string;
  start?: number;
  label: { pt: string; en: string };
  /** Titulo original do video no YouTube. */
  title: string;
}
export const interviewVideos: InterviewVideo[] = [
  {
    id: 'ZsEvm4Dl1jI',
    start: 4,
    label: { pt: 'RavenDB vs PostgreSQL, parte 1: instalação do servidor', en: 'RavenDB vs PostgreSQL, part 1: server setup' },
    title: 'RavenDB vs PostgreSQL - Part 1: Server setup experience',
  },
  {
    id: 'Y8hXso9qCf4',
    start: 3,
    label: {
      pt: 'RavenDB vs PostgreSQL, parte 2: carga em massa, busca textual e contadores',
      en: 'RavenDB vs PostgreSQL, part 2: bulk insert, full-text search and counters',
    },
    title: 'RavenDB vs PostgreSQL - Part 2: Bulk Insert, Full-text Search and Counters',
  },
  {
    id: 'hOlWLPmd1RU',
    label: {
      pt: 'RavenDB vs PostgreSQL, parte 3: busca vetorial e registro de agente de IA',
      en: 'RavenDB vs PostgreSQL, part 3: vector search and AI agent registration',
    },
    title: 'RavenDB vs PostgreSQL - Part 3: VectorSearch and AI agent registration with dynamic model',
  },
  {
    id: 'u3ePP_5KBT8',
    start: 30,
    label: { pt: '5 motivos para usar o RavenDB como o banco do seu produto', en: '5 reasons to use RavenDB as THE database of your product' },
    title: '5 reasons to use RavenDB as THE database of your product',
  },
];
export const interviewUrl = (v: InterviewVideo) =>
  youtubeWatchUrl(v.id) + (v.start ? `&t=${v.start}s` : '');
