export const createSVGLoader = () => ({
  test: /\.svg/,
  use: {
    loader: 'svg-url-loader',
    options: {},
  },
});
