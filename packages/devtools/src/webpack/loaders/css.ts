import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { createPostCssOptions } from '../createPostCssoptions';

import { getLocalIdent } from '../getLocalIdent';
import { cssRegex, sassRegex, sassModuleRegex } from '../constants';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const cssLoaders = (
  isDevelopment: boolean,
  isProduction: boolean,
  isNode: boolean,
  { modules }: { modules: boolean },
) =>
  [
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
        sourceMap: true,
        modules:
          modules && getLocalIdent
            ? {
                getLocalIdent: getLocalIdent,
              }
            : undefined,
      },
    },
    isProduction && { loader: 'postcss-loader', options: createPostCssOptions() },
  ].filter(Boolean);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createCSSLoaders = ({
  isDevelopment,
  isProduction,
  isNode,
}: {
  isDevelopment: boolean;
  isProduction: boolean;
  isNode: boolean;
}) => [
  {
    test: cssRegex,
    use: cssLoaders(isDevelopment, isProduction, isNode, { modules: false }).filter(Boolean),
  },
  {
    test: sassRegex,
    exclude: sassModuleRegex,
    use: [...cssLoaders(isDevelopment, isProduction, isNode, { modules: false }), { loader: 'sass-loader' }].filter(
      Boolean,
    ),
  },
  {
    test: sassModuleRegex,
    use: [...cssLoaders(isDevelopment, isProduction, isNode, { modules: true }), { loader: 'sass-loader' }].filter(
      Boolean,
    ),
  },
];
