// Confere no HTML gerado se todo "LeadSoft" no texto visivel leva ao site da empresa.
// Nomes de pacote (LeadSoft.Common...) e o proprio texto de links ja existentes nao contam.
// Uso: npm run build && npm run check:brand
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

let bareTotal = 0;
for (const file of files) {
  const body = fs
    .readFileSync(file, 'utf8')
    .replace(/<script[\s\S]*?<\/script>/g, '')
    .replace(/<style[\s\S]*?<\/style>/g, '')
    .replace(/<head[\s\S]*?<\/head>/, '');
  let depth = 0;
  let linked = 0;
  const bare = [];
  for (const token of body.split(/(<[^>]+>)/)) {
    if (token.startsWith('<')) {
      if (/^<a[\s>]/i.test(token)) {
        depth++;
        if (token.includes('leadsoft.inf.br')) linked++;
      } else if (/^<\/a>/i.test(token)) depth--;
      continue;
    }
    for (const m of token.matchAll(/LeadSoft(?![.\w])/g)) {
      if (depth === 0) bare.push(token.slice(Math.max(0, m.index - 25), m.index + 25).replace(/\s+/g, ' '));
    }
  }
  bareTotal += bare.length;
  console.log(`${path.relative('dist', file).replace(/\\/g, '/').padEnd(26)} links: ${linked}  sem link: ${bare.length}${bare.length ? '  -> ' + bare.join(' | ') : ''}`);
}
if (bareTotal) process.exit(1);
console.log('brand: toda ocorrencia de "LeadSoft" leva a https://leadsoft.inf.br');
