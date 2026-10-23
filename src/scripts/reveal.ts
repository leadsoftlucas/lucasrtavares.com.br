// Entrada suave das secoes (portada do mountReveal do site legado).
// Sem JavaScript, ou com prefers-reduced-motion, tudo aparece normalmente.
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target as HTMLElement;
        const delay = Number(el.getAttribute('data-reveal-delay') || 0);
        setTimeout(() => {
          el.style.opacity = '1';
          el.style.transform = 'none';
          setTimeout(() => {
            el.style.removeProperty('will-change');
            el.style.removeProperty('transition');
          }, 700);
        }, delay);
        io.unobserve(el);
      });
    },
    { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
  );

  const skipSection = (sec: HTMLElement) => sec.id === 'top' || sec.contains(document.activeElement);
  const pick = new Set<HTMLElement>();
  document.querySelectorAll<HTMLElement>('main section').forEach((sec) => {
    if (skipSection(sec)) return;
    sec
      .querySelectorAll<HTMLElement>(':scope > div > p, :scope > div > h2, :scope > div > div > p, :scope > div > div > h2')
      .forEach((el) => pick.add(el));
    sec.querySelectorAll<HTMLElement>('div').forEach((grid) => {
      if (getComputedStyle(grid).display !== 'grid') return;
      Array.from(grid.children).forEach((child) => pick.add(child as HTMLElement));
    });
  });

  pick.forEach((el) => {
    if (el.hasAttribute('data-reveal')) return;
    const cs = el.style;
    const computed = getComputedStyle(el);
    if (computed.position === 'absolute' || computed.position === 'fixed') return;
    const parent = el.parentElement;
    const idx = parent ? Array.prototype.indexOf.call(parent.children, el) : 0;
    el.setAttribute('data-reveal', '');
    el.setAttribute('data-reveal-delay', String(Math.min(idx, 5) * 70));
    cs.opacity = '0';
    cs.transform = 'translateY(20px)';
    cs.transition = 'opacity .62s cubic-bezier(.2,.7,.2,1), transform .62s cubic-bezier(.2,.7,.2,1)';
    cs.willChange = 'opacity, transform';
    io.observe(el);
  });
}

export {};
