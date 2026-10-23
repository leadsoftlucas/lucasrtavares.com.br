// Botao "copiar" das bios do bio kit.
document.querySelectorAll<HTMLButtonElement>('[data-copy]').forEach((button) => {
  button.addEventListener('click', async () => {
    const text = button.closest('[data-bio]')?.querySelector('[data-bio-text]')?.textContent?.trim();
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      button.textContent = button.dataset.done ?? 'OK';
      setTimeout(() => (button.textContent = button.dataset.label ?? ''), 1800);
    } catch {
      // Sem permissao de area de transferencia: seleciona o texto para copiar manualmente.
      const node = button.closest('[data-bio]')?.querySelector('[data-bio-text]');
      if (node) getSelection()?.selectAllChildren(node);
    }
  });
});

export {};
