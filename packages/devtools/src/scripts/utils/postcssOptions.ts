import autoprefixer from 'autoprefixer';

const postCssOptions = {
  ident: 'postcss',
  plugins: () =>
    [
      require('postcss-flexbugs-fixes'),
      autoprefixer({
        flexbox: 'no-2009',
      }),
      require('cssnano'),
    ].filter(Boolean),
} as const;

export default postCssOptions;
