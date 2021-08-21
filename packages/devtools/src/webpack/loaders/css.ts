import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { createPostCssOptions } from '../createPostCssoptions';

import { getLocalIdent } from '../getLocalIdent';
import { cssRegex, sassRegex, sassModuleRegex } from '../constants';
import { RuleSetRule } from 'webpack';
import { paths } from '../../config/paths';

interface LoaderItem {
  loader: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options: any;
  ident?: string;
  type?: string;
}

export const cssLoaders = (
  isDevelopment: boolean,
  isProduction: boolean,
  isNode: boolean,
  { modules, importLoaders }: { modules: boolean; importLoaders: number },
): LoaderItem[] =>
  [
    !isNode && {
      loader: MiniCssExtractPlugin.loader,
      options: {},
    },
    {
      loader: 'css-loader',
      options: {
        importLoaders,
        sourceMap: true,
        modules: modules
          ? {
              getLocalIdent,
              exportOnlyLocals: isNode,
              // TODO: we want to enable this for better code splitting
              // mode: 'pure',
            }
          : undefined,
      },
    },
    { loader: 'postcss-loader', options: createPostCssOptions({ isProduction }) },
  ].filter(Boolean) as LoaderItem[];

export const createCSSLoaders = ({
  isDevelopment,
  isProduction,
  isNode,
}: {
  isDevelopment: boolean;
  isProduction: boolean;
  isNode: boolean;
}): RuleSetRule[] => [
  {
    test: cssRegex,
    use: cssLoaders(isDevelopment, isProduction, isNode, { modules: false, importLoaders: 1 }).filter(Boolean),
  },
  {
    test: sassRegex,
    exclude: sassModuleRegex,
    use: [
      ...cssLoaders(isDevelopment, isProduction, isNode, { modules: false, importLoaders: 2 }),
      { loader: 'sass-loader' },
    ].filter(Boolean),
  },
  {
    test: sassModuleRegex,
    use: [
      ...cssLoaders(isDevelopment, isProduction, isNode, { modules: true, importLoaders: 2 }),
      {
        loader: 'sass-loader',
        options: {
          sassOptions: {
            outputStyle: 'expanded',
            sourceMap: true,
            includePaths: [paths.appSrc, ...paths.resolvedNodeModules],
            minimize: isProduction,
          },
        },
      },
    ].filter(Boolean),
  },
];
