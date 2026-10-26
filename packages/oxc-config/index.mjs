export default {
  plugins: ['typescript', 'import'],
  jsPlugins: ['eslint-plugin-simple-import-sort'],
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
    'no-array-constructor': 'error',
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
  ],
};
