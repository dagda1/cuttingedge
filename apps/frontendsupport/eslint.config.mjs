// import path from 'node:path';
// import { fileURLToPath } from 'node:url';

import defaultConfig from '@cutting/eslint-config/eslint';
// import { FlatCompat } from '@eslint/eslintrc';
// import js from '@eslint/js';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const compat = new FlatCompat({
//   baseDirectory: __dirname,
//   recommendedConfig: js.configs.recommended,
//   allConfig: js.configs.all,
// });

/** @type {import("eslint").Linter.Config} */
export default [
  {
    ignores: [
      '**/.cache/**',
      '**/build/**',
      '**/public/build/**',
      '**/playwright-report/**',
      '**/server/**',
      '**/node_modules/**',
      '**/dist/**',
      '**/src/plugins/**',
    ],
  },
  ...defaultConfig,
];
// export default [{
//     ignores: [".cache", "server/index.js", "public/build", "**/*.map"],
// }, ...compat.extends(
//     "@remix-run/eslint-config",
//     "@remix-run/eslint-config/node",
//     "plugin:prettier/recommended",
// ), {
//     rules: {
//         "react-hooks/rules-of-hooks": ["error"],

//         "react-hooks/exhaustive-deps": ["error"],

//         "prettier/prettier": ["error", {
//             printWidth: 120,
//             singleQuote: true,
//             semi: true,
//             tabWidth: 2,
//             trailingComma: "all",
//         }],
//     },
// }];
