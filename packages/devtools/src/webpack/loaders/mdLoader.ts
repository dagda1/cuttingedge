// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createMDLoader = () => ({
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
