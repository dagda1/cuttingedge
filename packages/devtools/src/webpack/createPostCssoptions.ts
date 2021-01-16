export const createPostCssOptions = (): {
  parser: string;
  sourceMap: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  plugins: any[];
} => ({
  parser: 'postcss-scss',
  plugins: [
    require('postcss-flexbugs-fixes'),
    [
      require('postcss-preset-env')({
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 3,
        features: {
          'custom-properties': false,
        },
      }),
    ],
  ],
  sourceMap: true,
});
