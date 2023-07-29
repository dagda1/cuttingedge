export async function remarkInlineCodeLanguageCreator() {
  const { visit } = await import('unist-util-visit');
  const { escapeHtml } = await import('@cutting/util');

  return function remarkInlineCodeLanguage() {
    return (tree: any): void =>
      visit(tree, 'inlineCode', (node: any) => {
        const className = `language-typescript`;

        node.type = 'html';
        node.value = `<code class="${className} cutting-inline">${escapeHtml(node.value)}</code>`;
      });
  };
}
