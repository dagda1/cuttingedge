import path from 'path';
import { rollup } from 'rollup';
// import walker from 'acorn-walk';
import acorn from 'acorn';
import virtual from '@rollup/plugin-virtual';

export function check(input: string): Promise<{
  shaken: boolean;
}> {
  const resolved = path.resolve(input);

  return rollup({
    input: '__agadoo__',
    plugins: [
      virtual({
        __agadoo__: `import ${JSON.stringify(resolved)}`,
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

      const ast = acorn.parse(code, {
        ecmaVersion: 11,
        sourceType: 'module',
      });

      const nodes = ast.body.filter((node) => {
        return node.type !== 'ImportDeclaration';
      });

      console.log(code);

      return {
        shaken: nodes.length === 0,
      };
    });
}
