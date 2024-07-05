module.exports = {
  globals: {
    MyGlobal: true,
  },
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  plugins: ['@typescript-eslint', 'simple-import-sort', 'import'],
  rules: {
    '@typescript-eslint/no-parameter-properties': ['off'],
    '@typescript-eslint/no-namespace': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': ['error', { allowArgumentsExplicitlyTypedAsAny: true }],
    '@typescript-eslint/consistent-type-imports': 'error',
    'no-var': 'warn',
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          '{}': {
            message: 'Use Record<string, unknown> instead',
            fixWith: 'Record<string, unknown>',
          },
        },
      },
    ],
    curly: 'error',
    eqeqeq: ['error', 'always'],
    'prefer-const': 'warn',
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        singleQuote: true,
        semi: true,
        tabWidth: 2,
        trailingComma: 'all',
      },
    ],
    semi: ['error', 'always'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/no-unresolved': 'off',
    'import/consistent-type-specifier-style': 'off',
  },
  overrides: [
    {
      files: ['**/*.js'],
      rules: {
        'prettier/prettier': [
          'error',
          {
            printWidth: 140,
            singleQuote: true,
            semi: true,
            tabWidth: 2,
            trailingComma: 'none',
          },
        ],
        semi: ['error', 'always'],
        '@typescript-eslint/no-use-before-define': ['off'],
        '@typescript-eslint/camelcase': ['off'],
        '@typescript-eslint/no-var-requires': ['off'],
        'no-var': ['off'],
      },
    },
  ],
};
