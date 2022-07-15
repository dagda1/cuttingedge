import MiniCssExtractPlugin from 'mini-css-extract-plugin';
// import { createPostCssOptions } from '../createPostCssoptions';
import { cssRegex } from '../constants.js';
import type { RuleSetRule } from 'webpack';
import { paths } from '../../config/paths.js';
import { assert } from 'assert-ts';
import { fileURLToPath } from 'url';

const cssLoaderUrl = await import.meta.resolve?.('css-loader');

assert(!!cssLoaderUrl, `no css-loader found in ${cssLoaderUrl}`);

const cssLoaderPath = fileURLToPath(cssLoaderUrl);

export const createCSSLoaders = ({
  isNode,
}: {
  isDevelopment: boolean;
  isProduction: boolean;
  isNode: boolean;
}): RuleSetRule[] => {
  return isNode
    ? [
        {
          test: /\.vanilla\.css$/i,
          use: ['css-loader'],
          sideEffects: true,
        },
        {
          test: cssRegex,
          sideEffects: true,
          exclude: /\.vanilla\.css$/i,
          use: [
            {
              loader: cssLoaderPath,
              options: {
                importLoaders: 1,
                // sourceMap: isDevelopment,
                modules: false,
                url: false,
                // esModule: true,
              },
            },
          ],
        },
      ]
    : [
        {
          test: /\.vanilla\.css$/i,
          sideEffects: true,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: paths.publicUrlOrPath,
              },
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: false,
                url: false,
                // url: [Function: url],
                // import: [Function: import]
              },
            },
          ],
        },
        {
          test: cssRegex,
          sideEffects: true,
          exclude: /\.vanilla\.css$/i,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: paths.publicUrlOrPath,
                // esModule: true,
              },
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                // sourceMap: isDevelopment,
                modules: false,
                url: false,
                // esModule: true,
              },
            },
            // TODO: reinstate postcss
            // { loader: 'postcss-loader', options: createPostCssOptions({ isProduction }) },
          ],
        },
      ];
};
