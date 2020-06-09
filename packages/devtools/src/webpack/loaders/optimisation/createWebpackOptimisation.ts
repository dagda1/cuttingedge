/* eslint-disable @typescript-eslint/camelcase */
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const safePostCssParser = require('postcss-safe-parser');

export const createWebpackOptimisation = ({ optimization, isDevelopment }) => {
  return {
    ...optimization,
    ...{
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            parse: {
              ecma: 8,
            },
            compress: {
              ecma: 5,
              warnings: false,
              comparisons: false,
              inline: 2,
              dead_code: true,
            },
            mangle: {
              safari10: true,
            },
            output: {
              ecma: 5,
              comments: 'all',
              ascii_only: true,
            },
          },
          parallel: true,
          cache: true,
          sourceMap: isDevelopment,
        }),
        new OptimizeCSSAssetsPlugin({
          cssProcessorOptions: {
            parser: safePostCssParser,
            map: isDevelopment ? { inline: false, annotation: true } : false,
          },
        }),
      ],
      splitChunks: {
        chunks: 'all',
        name: false,
      },
      // Keep the runtime chunk separated to enable long term caching
      // https://twitter.com/wSokra/status/969679223278505985
      // https://github.com/facebook/create-react-app/issues/5358
      runtimeChunk: {
        name: (entrypoint) => `runtime-${entrypoint.name}`,
      },
    },
  };
};
