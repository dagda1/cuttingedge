import type { Plugin } from 'esbuild';

export const jsxPluginReact17 = (): Plugin => ({
  name: 'jsx-react-17',
  setup(build) {
    const fs = require('fs');
    const babel = require('@babel/core');
    const plugin = require('@babel/plugin-transform-react-jsx').default({}, { runtime: 'automatic' });

    build.onLoad({ filter: /\.tsx$/ }, async (args) => {
      const jsx = await fs.promises.readFile(args.path, 'utf8');
      const result = babel.transformSync(jsx, { plugins: [plugin] });
      return { contents: result.code };
    });
  },
});
