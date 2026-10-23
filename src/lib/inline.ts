// Markdown minimo para textos do site: [texto](https://url), [texto](mailto:x), **negrito** e *enfase*.
// Escapa o HTML antes, entao so estes padroes viram marcacao.
// Marcadores de pendencia ([adicionar], [LINK a informar], [confirmar]) viram <span class="todo">
// para o `npm run check:placeholders` achar tudo que ainda depende do Lucas.
const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const TODO_PATTERN =
  /\[(?:adicionar|LINKS? a informar|confirmar|add|add result|link to be provided|links to be provided|confirm)[^\]]*\]/gi;

export function renderInline(text: string): string {
  return escapeHtml(text)
    .replace(/\[([^\]]+)\]\(mailto:([^)\s]+)\)/g, '<a href="mailto:$2">$1</a>')
    .replace(
      /\[([^\]]+)\]\((https:\/\/[^)\s]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener">$1</a>',
    )
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(TODO_PATTERN, (m) => `<span class="todo">${m}</span>`);
}
