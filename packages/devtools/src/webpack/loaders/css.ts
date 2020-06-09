import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import postcssOptions from '../postCssoptions';

import { getLocalIdent } from '../getLocalIdent';
import { cssRegex, sassRegex, sassModuleRegex } from '../constants';

export const cssLoaders = (isDevelopment: boolean, isNode: boolean, { modules }: { modules: boolean }) => [
  isDevelopment && require.resolve('css-hot-loader'),
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

export const createCSSLoaders = ({ isDevelopment, isNode }) => [
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
