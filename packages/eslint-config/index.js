module.exports = {
  globals: {
    MyGlobal: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:jest-formatting/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-var-requires': ['off'],
    '@typescript-eslint/explicit-member-accessibility': ['off'],
    '@typescript-eslint/explicit-function-return-type': ['off'],

    // TODO: we really should turn this on
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/no-non-null-assertion': ['off'],
    '@typescript-eslint/no-parameter-properties': ['off'],

    'jest/consistent-test-it': ['error', { fn: 'it' }],
    'jest-formatting/padding-before-test-blocks': 2,
    'jest-formatting/padding-before-describe-blocks': 2,
    'jest/expect-expect': ['off'],

    'no-var': 'warn',
    'curly': 'error',
    'eqeqeq': ["error", "always"],
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
