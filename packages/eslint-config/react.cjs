module.exports = {
  extends: './index.cjs',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['./index.cjs', 'plugin:react/recommended', 'plugin:jsx-a11y/recommended'],
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'react-hooks'],
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
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
  },
};
