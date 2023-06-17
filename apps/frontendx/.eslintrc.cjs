module.exports = {
  root: true,
  extends: ['plugin:@next/next/recommended', '@cutting/eslint-config/react.cjs'],
  rules: {
    '@next/next/no-img-element': ['off'],
    'eslint-disable jest/consistent-test-it': ['off'],
    'no-done-callback': ['off'],
    '@next/next/no-html-link-for-pages': ['error', 'apps/frontenddx/pages/'],
  },
};
