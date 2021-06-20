export const createPostCssOptions = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isProduction,
}: {
  isProduction: boolean;
}): {
  postcssOptions: {
    sourceMap: boolean;
    parser: string;
    ident: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    plugins: any[];
  };
} => ({
  postcssOptions: {
    sourceMap: true,
    ident: 'postcss',
    parser: 'postcss-scss',
    plugins: [
      require('postcss-import'),
      require('postcss-url'),
      require('autoprefixer'),
      require('postcss-flexbugs-fixes'),
    ],
  },
});
