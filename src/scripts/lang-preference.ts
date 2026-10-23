// Lembra o idioma escolhido (localStorage['lrt-lang']) e leva o visitante recorrente ao idioma salvo.
// Roda so no navegador; rastreadores sem localStorage nunca sao redirecionados.
const KEY = 'lrt-lang';
type Lang = 'pt' | 'en';

const pageLang: Lang = document.documentElement.lang.startsWith('en') ? 'en' : 'pt';

// Usa o href relativo do seletor de idioma (funciona em dev, preview e producao).
function alternate(lang: Lang): string | null {
  return document.querySelector<HTMLAnchorElement>(`a[data-set-lang="${lang}"]`)?.getAttribute('href') ?? null;
}

document.querySelectorAll<HTMLAnchorElement>('[data-set-lang]').forEach((a) => {
  a.addEventListener('click', () => {
    try {
      localStorage.setItem(KEY, a.dataset.setLang as Lang);
    } catch {}
  });
});

try {
  const saved = localStorage.getItem(KEY);
  if ((saved === 'pt' || saved === 'en') && saved !== pageLang) {
    const target = alternate(saved);
    if (target) location.replace(target + location.hash);
  }
} catch {}
