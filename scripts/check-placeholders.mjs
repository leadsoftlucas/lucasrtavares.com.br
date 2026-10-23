// Lista os marcadores de pendencia ([adicionar], [LINK a informar]...) que ainda estao no codigo-fonte.
// Em producao eles sao removidos do HTML (src/lib/inline.ts); no dev aparecem em amarelo.
// Uso: npm run check:placeholders   (use --strict para falhar o comando se houver algum)
import fs from 'node:fs';
import path from 'node:path';

const strict = process.argv.includes('--strict');
const PATTERN =
  /\[(?:adicionar|LINKS? a informar|confirmar|add|add result|link to be provided|links to be provided|confirm)[^\]]*\]/gi;
const COMMENT = /^\s*(\/\/|\*|\/\*)/;
const found = [];

(function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (/\.(ts|astro)$/.test(entry.name) && entry.name !== 'inline.ts') {
      fs.readFileSync(full, 'utf8')
        .split('\n')
        .forEach((line, i) => {
          if (COMMENT.test(line)) return; // comentarios de codigo nao contam
          for (const m of line.matchAll(PATTERN)) found.push(`${full.replace(/\\/g, '/')}:${i + 1}: ${m[0]}`);
        });
    }
  }
})('src');

if (found.length === 0) console.log('placeholders: nenhum marcador pendente no codigo-fonte.');
else {
  console.log(`placeholders: ${found.length} marcador(es) pendente(s) (nao aparecem no site publicado):\n- ` + found.join('\n- '));
  if (strict) process.exit(1);
}
