// Confere robots.txt, sitemap.xml e llms.txt gerados em dist/ contra as paginas que realmente existem.
// Uso: npm run build && npm run check:seo
import fs from 'node:fs';
import path from 'node:path';

const problems = [];
const read = (f) => (fs.existsSync(path.join('dist', f)) ? fs.readFileSync(path.join('dist', f), 'utf8') : null);
const pageExists = (urlPath) =>
  fs.existsSync(path.join('dist', urlPath, 'index.html')) || fs.existsSync(path.join('dist', urlPath));

const robots = read('robots.txt');
if (!robots) problems.push('robots.txt ausente');
else {
  if (!/^Sitemap: https:\/\/\S+\/sitemap\.xml$/m.test(robots)) problems.push('robots.txt sem a linha Sitemap');
  if (/Disallow:\s*\/\s*$/m.test(robots)) problems.push('robots.txt bloqueia o site inteiro (Disallow: /)');
  for (const bot of ['GPTBot', 'ClaudeBot', 'PerplexityBot', 'Google-Extended']) {
    if (!robots.includes(`User-agent: ${bot}`)) problems.push(`robots.txt sem o crawler ${bot}`);
  }
}

const sitemap = read('sitemap.xml');
let urls = [];
if (!sitemap) problems.push('sitemap.xml ausente');
else {
  urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  if (urls.length !== 8) problems.push(`sitemap com ${urls.length} URLs (esperado 8: 4 paginas x 2 idiomas)`);
  for (const u of urls) {
    const p = new URL(u).pathname;
    if (!pageExists(p)) problems.push(`sitemap aponta para pagina inexistente: ${u}`);
  }
  const alt = (sitemap.match(/hreflang="x-default"/g) || []).length;
  if (alt !== urls.length) problems.push('nem toda URL do sitemap tem x-default');
}

const llms = read('llms.txt');
if (!llms) problems.push('llms.txt ausente');
else {
  if (!llms.startsWith('# ')) problems.push('llms.txt deve comecar com um titulo H1');
  for (const m of llms.matchAll(/https:\/\/lucasrtavares\.com\.br(\/[^\s)]*)/g)) {
    if (!pageExists(m[1])) problems.push(`llms.txt cita pagina inexistente: ${m[1]}`);
  }
  if (/exclusivamente|consultor aut[ôo]nomo|freelanc/i.test(llms)) problems.push('llms.txt contem termo proibido');
}

if (problems.length) {
  console.error(problems.join('\n'));
  process.exit(1);
}
console.log(`seo: robots.txt, sitemap.xml (${urls.length} URLs) e llms.txt coerentes com as paginas geradas.`);
