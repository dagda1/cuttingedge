import autoprefixer from 'autoprefixer';

const postCssOptions = {
  // Necessary for external CSS imports to work
  // https://github.com/facebookincubator/create-react-app/issues/2677
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
