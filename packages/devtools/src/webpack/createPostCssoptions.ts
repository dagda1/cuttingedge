import postcssNormalize from 'postcss-normalize';

export const createPostCssOptions = (): {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  postcssOptions: { ident: string; syntax: string; plugins: any; sourceMap: boolean };
} => ({
  postcssOptions: {
    ident: 'postcss',
    syntax: 'postcss-scss',
    plugins: () => [
      require('postcss-flexbugs-fixes'),
      require('postcss-preset-env')({
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 3,
      }),
      // Adds PostCSS Normalize as the reset css with default options,
      // so that it honors browserslist config in package.json
      // which in turn let's users customize the target behavior as per their needs.
      postcssNormalize(),
    ],
    sourceMap: true,
  },
});
