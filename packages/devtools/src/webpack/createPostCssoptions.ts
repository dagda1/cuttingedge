export const createPostCssOptions = (): {
  postcssOptions: {
    ident: string;
    syntax: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    plugins: any[];
    sourceMap: boolean;
  };
} => ({
  postcssOptions: {
    ident: 'postcss',
    syntax: 'postcss-scss',
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
