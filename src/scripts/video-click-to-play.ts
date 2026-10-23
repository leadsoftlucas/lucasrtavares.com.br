// Click-to-play: a miniatura so vira iframe (youtube-nocookie) ao clique, sem cookies de terceiros no carregamento.
document.querySelectorAll<HTMLButtonElement>('[data-embed]').forEach((button) => {
  button.addEventListener('click', () => {
    const frame = button.closest<HTMLElement>('[data-video-frame]');
    if (!frame) return;
    const iframe = document.createElement('iframe');
    iframe.src = button.dataset.embed ?? '';
    iframe.title = button.dataset.title ?? '';
    iframe.allow =
      'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.allowFullscreen = true;
    iframe.loading = 'lazy';
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    iframe.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;border:0;display:block;';
    frame.replaceChildren(iframe);
  });
});

export {};
