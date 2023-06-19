import { visit } from 'unist-util-visit';
import { load } from 'js-yaml';

type Tree = Parameters<typeof visit>[0];

export function extractFrontmatter() {
  return (tree: Tree, file: { data: { frontmatter: unknown } }): void => {
    visit(tree, 'yaml', (node: { value: string }) => {
      file.data.frontmatter = load(node.value);
    });
  };
}
