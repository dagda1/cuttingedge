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
          console.log({ node });
        }
        return node.type !== 'ImportDeclaration';
      });

      // console.log(code);

      return {
        shaken: nodes.length === 0,
      };
    });
}
