// Confere o HTML gerado em dist/: links e recursos internos existem, 1 H1, lang, canonical e JSON-LD por pagina.
// Uso: npm run build && npm run check:links
import fs from 'node:fs';
import path from 'node:path';

const files = [];
(function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith('.html')) files.push(full);
  }
})('dist');

const problems = [];
let refs = 0;
for (const file of files) {
  const html = fs.readFileSync(file, 'utf8');
  const name = path.relative('dist', file).replace(/\\/g, '/');

  for (const m of html.matchAll(/(?:href|src)="(\/[^"#?]*)(?:#[^"]*)?"/g)) {
    refs++;
    const target = m[1];
    const ok = [path.join('dist', target), path.join('dist', target, 'index.html')].some(
      (c) => fs.existsSync(c) && fs.statSync(c).isFile(),
    );
    if (!ok) problems.push(`${name}: link/recurso quebrado ${target}`);
  }

  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) problems.push(`${name}: ${h1} elementos <h1> (esperado 1)`);
  if (!/<html lang="(pt-BR|en)"/.test(html)) problems.push(`${name}: <html lang> ausente ou inesperado`);
  if (!/rel="canonical" href="https:\/\/[^"]+"/.test(html)) problems.push(`${name}: canonical ausente`);
  const is404 = name === '404.html';
  const ld = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  if (ld.length === 0 && !is404) problems.push(`${name}: sem JSON-LD`);
  for (const block of ld) {
    try {
      JSON.parse(block[1]);
    } catch (e) {
      problems.push(`${name}: JSON-LD invalido (${e.message})`);
    }
  }
  const noAlt = (html.match(/<img\b(?![^>]*\balt=)[^>]*>/g) || []).length;
  if (noAlt) problems.push(`${name}: ${noAlt} <img> sem alt`);
}

console.log(`links: ${files.length} paginas, ${refs} links/recursos internos conferidos.`);
if (problems.length) {
  console.error(problems.join('\n'));
  process.exit(1);
}
console.log('links: tudo certo (H1 unico, lang, canonical, JSON-LD valido, imagens com alt).');
