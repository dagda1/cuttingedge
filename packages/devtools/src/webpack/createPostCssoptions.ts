export const createPostCssOptions = (): {
  parser: string;
  sourceMap: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  plugins: any[];
} => ({
  parser: 'postcss-scss',
  plugins: [require('postcss-flexbugs-fixes'), require('autoprefixer')],
  sourceMap: true,
});
