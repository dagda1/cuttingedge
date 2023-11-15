/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['@remix-run/eslint-config', '@remix-run/eslint-config/node', 'plugin:prettier/recommended'],
  rules: {
    'react-hooks/rules-of-hooks': [
      'error',
      {
        additionalHooks: '(useIsomorphicLayoutEffect)',
      },
    ],
    'react-hooks/exhaustive-deps': [
      'error',
      {
        additionalHooks: '(useIsomorphicLayoutEffect)',
      },
    ],
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
  },
};
