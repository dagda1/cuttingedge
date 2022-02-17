import MiniCssExtractPlugin from 'mini-css-extract-plugin';
// import { createPostCssOptions } from '../createPostCssoptions';
import { cssRegex } from '../constants';
import type { RuleSetRule } from 'webpack';

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
  { importLoaders }: { modules: boolean; importLoaders: number },
): LoaderItem[] =>
  [
    !isNode && {
      loader: MiniCssExtractPlugin.loader,
      options: {
        esModule: false,
      },
    },
    {
      loader: 'css-loader',
      options: {
        importLoaders,
        sourceMap: false,
        modules: false,
        esModule: false,
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
    sideEffects: true,
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
    sideEffects: true,
    exclude: /\.vanilla\.css$/i,
    use: cssLoaders(isDevelopment, isProduction, isNode, { modules: false, importLoaders: 1 }).filter(Boolean),
  },
];
