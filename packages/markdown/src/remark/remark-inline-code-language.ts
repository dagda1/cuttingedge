// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function remarkInlineCodeLanguageCreator() {
  const { visit } = await import('unist-util-visit');
  const { escapeHtml } = await import('@cutting/util');

  return function remarkInlineCodeLanguage() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (tree: any): void =>
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      visit(tree, 'inlineCode', (node: any) => {
        const className = `language-typescript`;

        node.type = 'html';
        node.value = `<code class="${className} cutting-inline">${escapeHtml(node.value)}</code>`;
      });
  };
}
