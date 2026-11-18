import { fileURLToPath } from 'node:url';

import sonarjs from 'eslint-plugin-sonarjs';

const cuttingPlugin = fileURLToPath(new URL('./plugin.mjs', import.meta.url));
const sonarPlugin = fileURLToPath(import.meta.resolve('eslint-plugin-sonarjs'));

const builtInSonarRules = [
  'block-scoped-var',
  'no-control-regex',
  'no-delete-var',
  'no-empty-character-class',
  'no-fallthrough',
  'no-invalid-regexp',
  'no-labels',
  'no-misleading-character-class',
  'no-regex-spaces',
  'no-unused-vars',
  'no-useless-catch',
];

const recommendedSonarRules = Object.entries(sonarjs.configs.recommended.rules);

const sonarRules = Object.fromEntries(
  recommendedSonarRules.map(([rule, severity]) => [
    rule,
    builtInSonarRules.includes(rule.replace('sonarjs/', '')) ? 'off' : severity,
  ]),
);

const builtInSonarReplacements = Object.fromEntries(
  builtInSonarRules.filter((rule) => rule !== 'no-unused-vars').map((rule) => [rule, 'error']),
);

const withoutSonarRules = Object.fromEntries(
  [...recommendedSonarRules.map(([rule]) => rule), ...Object.keys(builtInSonarReplacements)].map((rule) => [
    rule,
    'off',
  ]),
);

export default {
  plugins: ['typescript', 'import'],
  jsPlugins: ['eslint-plugin-simple-import-sort', cuttingPlugin, sonarPlugin],
  categories: {
    correctness: 'off',
  },
  env: {
    builtin: true,
  },
  globals: {
    MyGlobal: 'writable',
  },
  ignorePatterns: ['**/node_modules/**', '**/dist/**', '**/**.d.ts'],
  rules: {
    ...sonarRules,
    ...builtInSonarReplacements,
    'sonarjs/max-lines': 'off',
    'sonarjs/no-nested-template-literals': 'off',
    'sonarjs/no-commented-code': 'off',
    'no-array-constructor': 'error',
    'no-empty': 'error',
    'cutting/no-comments': 'error',
    'no-unused-expressions': 'error',
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'typescript/ban-ts-comment': 'error',
    'typescript/no-duplicate-enum-values': 'error',
    'typescript/no-empty-object-type': 'error',
    'typescript/no-explicit-any': 'error',
    'typescript/no-extra-non-null-assertion': 'error',
    'typescript/no-misused-new': 'error',
    'typescript/no-namespace': 'off',
    'typescript/no-non-null-asserted-optional-chain': 'error',
    'typescript/no-require-imports': 'error',
    'typescript/no-this-alias': 'error',
    'typescript/no-unnecessary-type-constraint': 'error',
    'typescript/no-unsafe-declaration-merging': 'error',
    'typescript/no-unsafe-function-type': 'error',
    'typescript/no-wrapper-object-types': 'error',
    'typescript/prefer-as-const': 'error',
    'typescript/prefer-namespace-keyword': 'error',
    'typescript/triple-slash-reference': 'error',
    'typescript/explicit-module-boundary-types': [
      'error',
      {
        allowArgumentsExplicitlyTypedAsAny: true,
      },
    ],
    'typescript/consistent-type-imports': 'error',
    'no-var': 'warn',
    curly: 'error',
    eqeqeq: ['error', 'always'],
    'prefer-const': 'warn',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/consistent-type-specifier-style': 'off',
  },
  overrides: [
    {
      files: ['**/*.js'],
      rules: {
        'no-use-before-define': 'off',
        'typescript/no-var-requires': 'off',
        'no-var': 'off',
      },
    },
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        'cutting/no-test-code-imports': 'error',
        'max-lines': ['error', { max: 200, skipBlankLines: true, skipComments: true }],
      },
    },
    {
      files: ['**/*.test.ts', '**/*.test.tsx'],
      rules: {
        'cutting/no-browser-storage': 'error',
        'cutting/no-vi-mock': 'error',
      },
    },
    {
      files: ['**/*.test.ts', '**/*.test.tsx', '**/*.stories.tsx', '**/__mocks__/**'],
      rules: {
        ...withoutSonarRules,
        'max-lines': 'off',
      },
    },
    {
      files: ['**/*.test.ts', '**/*.test.tsx', '**/*.stories.tsx', '**/__mocks__/**', '**/.storybook/**'],
      rules: {
        'cutting/no-test-code-imports': 'off',
      },
    },
  ],
};
