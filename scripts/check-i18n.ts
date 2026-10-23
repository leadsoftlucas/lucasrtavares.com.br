// Checagem automatica da M2: PT e EN com as mesmas chaves, sem textos vazios,
// e listas de texto com o mesmo tamanho das listas de dados (src/data).
// Uso: npm run check:i18n
import { pt } from '../src/i18n/pt.ts';
import { en } from '../src/i18n/en.ts';
import { articles } from '../src/data/articles.ts';
import { events } from '../src/data/events.ts';
import { packages } from '../src/data/packages.ts';
import { videos } from '../src/data/videos.ts';

const problems: string[] = [];
let leaves = 0;

function walk(a: unknown, b: unknown, path: string) {
  if (a !== null && typeof a === 'object') {
    if (b === null || typeof b !== 'object' || Array.isArray(a) !== Array.isArray(b)) {
      problems.push(`forma diferente: ${path}`);
      return;
    }
    const ka = Object.keys(a);
    const kb = Object.keys(b);
    for (const k of new Set([...ka, ...kb])) {
      if (!(k in a)) problems.push(`falta em PT: ${path}.${k}`);
      else if (!(k in b)) problems.push(`falta em EN: ${path}.${k}`);
      else walk((a as Record<string, unknown>)[k], (b as Record<string, unknown>)[k], `${path}.${k}`);
    }
    return;
  }
  leaves++;
  if (typeof a !== typeof b) problems.push(`tipo diferente: ${path}`);
  else if (typeof a === 'string' && (a.trim() === '' || (b as string).trim() === '')) problems.push(`texto vazio: ${path}`);
}

walk(pt, en, 'dict');

const lengths: Array<[string, number, number, number]> = [
  ['articles', articles.length, pt.articles.length, en.articles.length],
  ['events', events.length, pt.events.length, en.events.length],
  ['videos', videos.length, pt.videos.length, en.videos.length],
  ['packages', packages.length, pt.packageDescriptions.length, en.packageDescriptions.length],
];
for (const [name, data, p, e] of lengths) {
  if (data !== p || data !== e) problems.push(`tamanho de ${name}: data=${data} pt=${p} en=${e}`);
}

if (problems.length) {
  console.error(problems.join('\n'));
  process.exit(1);
}
console.log(`i18n ok: ${leaves} textos, ${Object.keys(pt).length} chaves de primeiro nivel, PT e EN equivalentes.`);
