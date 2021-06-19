import postcssNormalize from 'postcss-normalize';
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
      require('postcss-flexbugs-fixes'),
      [
        require('postcss-preset-env'),
        {
          autoprefixer: {
            flexbox: 'no-2009',
          },
          stage: 3,
        },
      ],
      // Adds PostCSS Normalize as the reset css with default options,
      // so that it honors browserslist config in package.json
      // which in turn let's users customize the target behavior as per their needs.
      postcssNormalize(),
    ],
  },
});
