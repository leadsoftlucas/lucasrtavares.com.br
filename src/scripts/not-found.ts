// 404: mostra o caminho pedido na "consulta", escolhe o idioma e sugere a pagina mais parecida.
interface Known {
  path: string;
  label: string;
}

const pathname = decodeURIComponent(location.pathname);
let saved: string | null = null;
try {
  saved = localStorage.getItem('lrt-lang');
} catch {}
const lang: 'pt' | 'en' = pathname.startsWith('/en/') || saved === 'en' ? 'en' : 'pt';

document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';
if (lang === 'en') document.title = '404 · Document not found · Lucas Resende Tavares';
document.querySelectorAll<HTMLElement>('[data-lang]').forEach((el) => {
  el.hidden = el.dataset.lang !== lang;
});

const target = document.querySelector<HTMLElement>('[data-path]');
if (target) target.textContent = `'${pathname.slice(0, 80)}'`;

// distancia de edicao simples (Levenshtein) para achar a pagina mais parecida
function distance(a: string, b: string) {
  const row = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    let prev = row[0];
    row[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const tmp = row[j];
      row[j] = Math.min(row[j] + 1, row[j - 1] + 1, prev + (a[i - 1] === b[j - 1] ? 0 : 1));
      prev = tmp;
    }
  }
  return row[b.length];
}

const raw = document.getElementById('known-pages')?.textContent;
const pages: Known[] = raw ? JSON.parse(raw) : [];
const pool = pages.filter((p) => (lang === 'en' ? p.path.startsWith('/en/') : !p.path.startsWith('/en/')));
const best = pool
  .map((p) => ({ ...p, d: distance(pathname.replace(/\/$/, ''), p.path.replace(/\/$/, '')) }))
  .sort((a, b) => a.d - b.d)[0];

const box = document.querySelector<HTMLElement>('[data-suggest]');
const link = document.querySelector<HTMLAnchorElement>('[data-suggest-link]');
if (best && box && link && pathname !== '/') {
  link.href = best.path;
  link.textContent = `${best.path} · ${best.label}`;
  box.hidden = false;
}

export {};
