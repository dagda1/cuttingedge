module.exports = {
  extends: ['./index', 'plugin:react/recommended'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: ['./index', 'plugin:react/recommended', 'plugin:jsx-a11y/recommended'],
  settings: {
    react: {
      pragma: 'React',
      version: 'detect'
    }
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['react', 'react-hooks', 'jest', 'jest-formatting'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/prop-types': 0
  }
};
