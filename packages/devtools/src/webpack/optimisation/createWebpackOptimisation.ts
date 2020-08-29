import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import safePostCssParser from 'postcss-safe-parser';
import { Options } from 'webpack';

export const createWebpackOptimisation = ({
  optimization,
  isDevelopment,
  ssrBuild,
}: {
  optimization: Options.Optimization;
  isDevelopment: boolean;
  ssrBuild: boolean;
}): Options.Optimization => {
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
          sourceMap: true,
        }),
        new OptimizeCSSAssetsPlugin({
          cssProcessorOptions: {
            parser: safePostCssParser,
            map: isDevelopment ? { inline: false, annotation: true } : false,
          },
        }),
      ],
      splitChunks: {
        chunks: ssrBuild ? 'async' : 'all',
        name: false,
      },
      runtimeChunk: ssrBuild
        ? false
        : {
            name: (entrypoint) => `runtime-${entrypoint.name}`,
          },
    },
  };
};
