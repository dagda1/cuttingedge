// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createSVGLoader = () => ({
  test: /\.svg/,
  use: {
    loader: 'svg-url-loader',
    options: {},
  },
});
