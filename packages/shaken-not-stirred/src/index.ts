import path from 'path';
import { rollup } from 'rollup';
import { parse } from 'acorn';
import virtual from '@rollup/plugin-virtual';
import { assert } from 'assert-ts';
import type { Node as AstNode } from 'acorn';

export function check(input: string): Promise<{
  shaken: boolean;
}> {
  const resolved = path.resolve(input);

  return rollup({
    input: '__shaken_not_stirred__',
    plugins: [
      virtual({
        __shaken_not_stirred__: `import ${JSON.stringify(resolved)}`,
      }),
    ],
    external: (id: string) => {
      if (id === 'babel-plugin-transform-async-to-promises/helpers') {
        return false;
      }

      return !id.startsWith('.') && !path.isAbsolute(id);
    },
    onwarn: (warning, handle) => {
      if (warning.code !== 'EMPTY_BUNDLE') {
        handle(warning);
      }
    },
  })
    .then((bundle) =>
      bundle.generate({
        format: 'esm',
      }),
    )
    .then((result) => {
      const { code } = result.output[0];

      const ast = parse(code, {
        ecmaVersion: 11,
        sourceType: 'module',
      });

      assert(ast.type === 'Program', `ast not a Program`);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const body = (ast as any).body;

      const nodes = body.filter((node: AstNode) => {
        if (node.type !== 'ImportDeclaration') {
          if (node.type === 'VariableDeclaration') {
            console.log('----------------------------------------');
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            console.log((node as any).declarations);
            console.log('----------------------------------------');
          }
          console.log(code.substring(node.start, node.end));
        }
        return node.type !== 'ImportDeclaration';
      });

      return {
        shaken: nodes.length === 0,
      };
    });
}
