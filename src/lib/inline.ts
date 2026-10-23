// Markdown minimo para textos do site: [texto](https://url), [texto](mailto:x), **negrito** e *enfase*.
// Escapa o HTML antes, entao so estes padroes viram marcacao.
// Marcadores de pendencia ([adicionar], [LINK a informar], [confirmar]) viram <span class="todo">
// para o `npm run check:placeholders` achar tudo que ainda depende do Lucas.
const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const TODO_PATTERN =
  /\[(?:adicionar|LINKS? a informar|confirmar|add|add result|link to be provided|links to be provided|confirm)[^\]]*\]/gi;

export const LEADSOFT_URL = 'https://leadsoft.inf.br';

/** Liga cada "LeadSoft" que ainda nao esta dentro de um link (nomes de pacote como LeadSoft.Common ficam de fora). */
function linkBrands(html: string): string {
  let depth = 0;
  return html
    .split(/(<[^>]+>)/)
    .map((token) => {
      if (token.startsWith('<')) {
        if (/^<a[\s>]/i.test(token)) depth++;
        else if (/^<\/a>/i.test(token)) depth--;
        return token;
      }
      if (depth > 0) return token;
      return token.replace(
        /\bLeadSoft\b(?!\.[A-Za-z])/gi,
        (name) => `<a href="${LEADSOFT_URL}" target="_blank" rel="noopener" class="brand-link">${name}</a>`,
      );
    })
    .join('');
}

/** Em producao os marcadores pendentes ([adicionar], [LINK a informar]...) somem; no dev ficam em amarelo. */
const hideTodos = import.meta.env.PROD && import.meta.env.PUBLIC_SHOW_TODO !== 'true';

export function renderInline(text: string): string {
  return linkBrands(escapeHtml(text)
    .replace(/\[([^\]]+)\]\(mailto:([^)\s]+)\)/g, '<a href="mailto:$2">$1</a>')
    .replace(
      /\[([^\]]+)\]\((https:\/\/[^)\s]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener">$1</a>',
    )
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(TODO_PATTERN, (m) => (hideTodos ? '' : `<span class="todo">${m}</span>`))
    .trim());
}
