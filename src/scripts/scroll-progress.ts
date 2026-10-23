// Barra de progresso de leitura no cabecalho: preenche conforme a rolagem da pagina.
const bar = document.querySelector<HTMLElement>('[data-scroll-progress]');

if (bar) {
  let ticking = false;
  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    bar.style.setProperty('--p', p.toFixed(4));
    bar.setAttribute('aria-valuenow', String(Math.round(p * 100)));
    ticking = false;
  };
  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  update();
}

export {};
