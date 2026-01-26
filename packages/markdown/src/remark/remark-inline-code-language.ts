// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function remarkInlineCodeLanguageCreator(): Promise<() => (tree: any) => void> {
  const { visit } = await import('unist-util-visit');
  const { escapeHtml } = await import('@cutting/util');

  return function remarkInlineCodeLanguage() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (tree: any): void =>
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      visit(tree, 'inlineCode', (node: any) => {
        const match = node.value.match(/^(\w+)\s+(.+)$/s);
        const language = match ? match[1] : 'typescript';
        const code = match ? match[2] : node.value;

        node.type = 'html';
        node.value = `<code class="language-${language} cutting-inline">${escapeHtml(code)}</code>`;
      });
  };
}
