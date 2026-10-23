// Filtro por categoria dos pacotes NuGet (todos os cards ja estao no HTML; aqui so alternamos `hidden`).
document.querySelectorAll<HTMLElement>('[data-package-filter]').forEach((root) => {
  const chips = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-filter]'));
  const cards = Array.from(root.querySelectorAll<HTMLElement>('[data-category]'));

  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      const key = chip.dataset.filter;
      chips.forEach((c) => {
        const active = c === chip;
        c.classList.toggle('active', active);
        c.setAttribute('aria-pressed', String(active));
      });
      cards.forEach((card) => {
        card.hidden = key !== 'all' && card.dataset.category !== key;
      });
    });
  });
});

export {};
