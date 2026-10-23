// Click-to-load do player do Spotify: nenhuma requisicao a open.spotify.com antes do clique
// (Lighthouse e LGPD). Sem JavaScript, o cartao e um link normal para a faixa.
document.querySelectorAll<HTMLAnchorElement>('[data-spotify-frame] [data-spotify-src]').forEach((cover) => {
  cover.addEventListener('click', (event) => {
    event.preventDefault();
    const frame = cover.closest<HTMLElement>('[data-spotify-frame]');
    if (!frame) return;
    const iframe = document.createElement('iframe');
    iframe.src = cover.dataset.spotifySrc ?? '';
    iframe.title = cover.dataset.title ?? '';
    iframe.width = '100%';
    iframe.height = '152';
    iframe.allow = 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture';
    iframe.allowFullscreen = true;
    iframe.loading = 'lazy';
    iframe.style.borderRadius = '12px';
    frame.replaceChildren(iframe);
  });
});

export {};
