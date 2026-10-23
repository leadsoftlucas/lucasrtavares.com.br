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
