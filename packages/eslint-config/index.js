module.exports = {
  globals: {
    MyGlobal: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:jest-formatting/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-parameter-properties': ['off'],
    '@typescript-eslint/no-namespace': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': ['error', { allowArgumentsExplicitlyTypedAsAny: true }],
    'jest/consistent-test-it': ['error', { fn: 'it' }],
    'jest/expect-expect': ['off'],
    'no-var': 'warn',
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
            trailingComma: 'all',
          },
        ],
        semi: ['error', 'always'],
        '@typescript-eslint/no-use-before-define': ['off'],
        '@typescript-eslint/camelcase': ['off'],
      },
    },
  ],
};
