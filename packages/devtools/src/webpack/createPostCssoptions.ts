export const createPostCssOptions = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isProduction,
}: {
  isProduction: boolean;
}): {
  sourceMap: boolean;
  parser: string;
<<<<<<< HEAD
  ident: string;
=======
>>>>>>> 0b78c7e7... revert postcss config
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  plugins: any[];
} => ({
  sourceMap: true,
<<<<<<< HEAD
  ident: 'postcss',
  parser: 'postcss-scss',
  plugins: [require('postcss-import'), require('autoprefixer'), require('postcss-flexbugs-fixes')].filter(Boolean),
=======
  parser: 'postcss-scss',
  plugins: [
    require('postcss-import'),
    require('autoprefixer'),
    require('tailwindcss')(paths.tailwindcssConfig),
    // isProduction && require('postcss-flexbugs-fixes'),
    // [
    //   require('postcss-preset-env'),
    //   {
    //     autoprefixer: {
    //       flexbox: 'no-2009',
    //     },
    //     stage: 3,
    //   },
    // ],
    // If you comment out the purgecss section, everything works fine.
    // require('@fullhuman/postcss-purgecss')({
    //   content: [`${paths.appSrc}/**/*/tsx`, paths.appHtml],
    //   extractors: [
    //     {
    //       extractor: TailwindExtractor,
    //       extensions: ['html', 'tsx'],
    //     },
    //   ],
    // }),
  ].filter(Boolean),
>>>>>>> 0b78c7e7... revert postcss config
});
