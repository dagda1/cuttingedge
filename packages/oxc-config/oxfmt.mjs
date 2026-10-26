export default {
  printWidth: 120,
  singleQuote: true,
  semi: true,
  tabWidth: 2,
  trailingComma: 'all',
  sortPackageJson: false,
  overrides: [
    {
      files: ['*.js'],
      options: {
        printWidth: 140,
        trailingComma: 'none',
      },
    },
  ],
};
