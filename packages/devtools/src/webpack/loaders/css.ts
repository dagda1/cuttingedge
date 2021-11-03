import MiniCssExtractPlugin from 'mini-css-extract-plugin';
// import { createPostCssOptions } from '../createPostCssoptions';
import { getLocalIdent } from '../getLocalIdent';
import { cssRegex } from '../constants';
import { RuleSetRule } from 'webpack';

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
    // TODO: reinstate postcss
    // { loader: 'postcss-loader', options: createPostCssOptions({ isProduction }) },
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
    test: /\.vanilla\.css$/i,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: require.resolve('css-loader'),
        options: {
          url: false,
        },
      },
    ],
  },
  {
    test: cssRegex,
    exclude: /\.vanilla\.css$/i,
    sideEffects: true,
    use: cssLoaders(isDevelopment, isProduction, isNode, { modules: false, importLoaders: 1 }).filter(Boolean),
  },
];
