import { escapeHtml } from '@cutting/util';
import { visit } from 'unist-util-visit';
import type { Node } from 'unist';

type Tree = Parameters<typeof visit>[0];

export interface FrontMatterNode extends Node {
  type: string;
  value: string;
}

export function remarkInlineCodeLanguage() {
  return (tree: Tree): void =>
    visit(tree, 'inlineCode', (node: FrontMatterNode) => {
      const className = `language-typescript`;

      node.type = 'html';
      node.value = `<code class="${className}">${escapeHtml(node.value)}</code>`;
    });
}
