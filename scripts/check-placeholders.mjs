// Lista os marcadores de pendencia ([adicionar], [LINK a informar]...) que ainda estao no HTML gerado.
// Uso: npm run build && npm run check:placeholders   (use --strict para falhar o comando se houver algum)
import fs from 'node:fs';
import path from 'node:path';

const strict = process.argv.includes('--strict');
const found = [];
(function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith('.html')) {
      const html = fs.readFileSync(full, 'utf8');
      for (const m of html.matchAll(/<span class="todo">([^<]*)<\/span>/g)) found.push(`${path.relative('dist', full)}: ${m[1]}`);
    }
  }
})('dist');

if (found.length === 0) console.log('placeholders: nenhum marcador pendente no HTML gerado.');
else {
  console.log(`placeholders: ${found.length} marcador(es) pendente(s):\n- ` + found.join('\n- '));
  if (strict) process.exit(1);
}
