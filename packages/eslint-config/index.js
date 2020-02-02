module.exports = {
  globals: {
    MyGlobal: true
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:jest/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  plugins: ['@typescript-eslint', 'jest', 'jest-formatting'],
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
    'no-var': 'warn',
    'jest/consistent-test-it': ['error', { fn: 'it' }],
    'jest-formatting/padding-before-test-blocks': 2,
    'jest-formatting/padding-before-describe-blocks': 2,
    semi: ['error', 'always'],
    'prefer-const': 'warn',
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        singleQuote: true,
        semi: true,
        tabWidth: 2,
        trailingComma: 'all'
      }
    ]
  }
};
