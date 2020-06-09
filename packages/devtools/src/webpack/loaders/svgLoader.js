const createSVGLoader = () => ({
  test: /\.svg/,
  use: {
    loader: 'svg-url-loader',
    options: {},
  },
});

module.exports = {
  createSVGLoader,
};
