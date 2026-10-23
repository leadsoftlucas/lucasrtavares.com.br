// Markdown minimo para textos dos dicionarios: [texto](https://url) e *enfase*.
// Escapa o HTML antes, entao so estes dois padroes viram marcacao.
const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function renderInline(text: string): string {
  return escapeHtml(text)
    .replace(
      /\[([^\]]+)\]\((https:\/\/[^)\s]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener">$1</a>',
    )
    .replace(/\*([^*]+)\*/g, '<em>$1</em>');
}
