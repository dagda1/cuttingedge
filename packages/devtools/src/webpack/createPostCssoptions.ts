export const createPostCssOptions = (): {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  postcssOptions: { parser: string; sourceMap: boolean; plugins: any[] };
} => ({
  postcssOptions: {
    parser: 'postcss-scss',
    plugins: [
      'postcss-flexbugs-fixes',
      [
        'postcss-preset-env',
        {
          autoprefixer: {
            flexbox: 'no-2009',
          },
          stage: 3,
          features: {
            'custom-properties': false,
          },
        },
      ],
    ],
    sourceMap: true,
  },
});
