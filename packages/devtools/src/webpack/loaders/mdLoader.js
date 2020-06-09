const createMDLoader = () => ({
  test: /\.md$/,
  use: [
    {
      loader: 'html-loader',
    },
    {
      loader: 'markdown-loader',
      options: {},
    },
  ],
});

module.exports = {
  createMDLoader,
};
