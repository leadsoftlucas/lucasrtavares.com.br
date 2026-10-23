// "The Raven Child", Avantasia: musica favorita do Lucas (ver Content/06 Site/10 Musica Favorita).
export const music = {
  trackId: '76zg1a9DvGpEHVVQh7Yuv1',
} as const;

export const spotifyTrackUrl = `https://open.spotify.com/track/${music.trackId}`;
// Sem o parametro `si=` (identifica a origem do compartilhamento) e sem autoplay.
export const spotifyEmbedUrl = `https://open.spotify.com/embed/track/${music.trackId}?utm_source=generator&theme=0`;
