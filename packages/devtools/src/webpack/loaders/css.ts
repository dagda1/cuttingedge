import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import postcssOptions from '../postCssoptions';
<<<<<<< HEAD:packages/devtools/src/webpack/loaders/css.ts
import { getLocalIdent } from '../getLocalIdent';

const cssLoaders = (isDevelopment: boolean, isNode: boolean, { modules }: { modules: boolean }) => [
=======
import { GetLocalIdent } from '../getLocalIdent';

const cssLoaders = (isDevelopment: boolean, isNode: boolean, { modules }: { modules: boolean }) => [
  isDevelopment && require.resolve('css-hot-loader'),
>>>>>>> more ts:packages/devtools/src/webpack/loaders/css.ts
  {
    loader: MiniCssExtractPlugin.loader,
    options: {
      hmr: isDevelopment,
    },
  },
  {
    loader: 'css-loader',
    options: {
      importLoaders: isNode ? 1 : 2,
      sourceMap: isDevelopment,
      modules:
        modules && getLocalIdent
          ? {
              getLocalIdent: getLocalIdent,
            }
          : undefined,
    },
  },
  { loader: 'postcss-loader', options: postcssOptions },
];

const createCSSLoaders = ({ isDevelopment, isNode }) => [
  {
    test: cssRegex,
    use: cssLoaders(isDevelopment, isNode, { modules: false }).filter(Boolean),
  },
  {
    test: sassRegex,
    exclude: sassModuleRegex,
    use: [...cssLoaders(isDevelopment, isNode, { modules: false }), { loader: 'sass-loader' }].filter(Boolean),
  },
  {
    test: sassModuleRegex,
    use: [...cssLoaders(isDevelopment, isNode, { modules: true }), { loader: 'sass-loader' }].filter(Boolean),
  },
];

module.exports = {
  createCSSLoaders,
  cssLoaders,
};
