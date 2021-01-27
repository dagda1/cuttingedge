export const createPostCssOptions = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isProduction,
}: {
  isProduction: boolean;
}): {
  sourceMap: boolean;
  parser: string;
  ident: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  plugins: any[];
} => ({
  sourceMap: true,
  ident: 'postcss',
  parser: 'postcss-scss',
  plugins: [require('postcss-import'), require('autoprefixer'), require('postcss-flexbugs-fixes')].filter(Boolean),
});
