import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import safePostCssParser from 'postcss-safe-parser';
import { Options } from 'webpack';
import crypto from 'crypto';

const FRAMEWORK_BUNDLES = ['react', 'react-dom'];

export const createWebpackOptimisation = ({
  optimization,
  isDevelopment,
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
              ecma: 2015,
            },
            compress: {
              ecma: 5,
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
            format: {
              comments: 'all',
            },
          },
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
        automaticNameDelimiter: '-',
        maxSize: 245760, // 240kb
        cacheGroups: {
          default: false,
          vendors: false,
          framework: {
            name: 'framework',
            chunks: 'all',
            // This regex ignores nested copies of framework libraries so they're bundled with their issuer.
            test: new RegExp(`(?<!node_modules.*)[\\\\/]node_modules[\\\\/](${FRAMEWORK_BUNDLES.join(`|`)})[\\\\/]`),
            priority: 40,
            // Don't let webpack eliminate this chunk (prevents this chunk from becoming a part of the commons chunk)
            enforce: true,
          },
          commons: {
            name: 'commons',
            minChunks: 5,
            priority: 20,
          },
          lib: {
            test(module) {
              return module.size() > 160000 && /node_modules[/\\]/.test(module.identifier());
            },
            name(module) {
              const rawRequest = module.rawRequest && module.rawRequest.replace(/^@(\w+)[/\\]/, '$1-');
              if (rawRequest) {
                return `${rawRequest}-lib`;
              }

              const identifier = module.identifier();
              const trimmedIdentifier = /(?:^|[/\\])node_modules[/\\](.*)/.exec(identifier);
              const processedIdentifier = trimmedIdentifier && trimmedIdentifier[1].replace(/^@(\w+)[/\\]/, '$1-');

              return `${processedIdentifier || identifier}-lib`;
            },
            priority: 30,
            minChunks: 1,
            reuseExistingChunk: true,
          },
          shared: {
            name(module, chunks) {
              const cryptoName = crypto
                .createHash('sha1')
                .update(
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  chunks.reduce((acc: string, chunk: any) => {
                    return acc + chunk.name;
                  }, ''),
                )
                .digest('base64')
                .replace(/\//g, '');

              return `shared-${cryptoName}`;
            },
            priority: 10,
            minChunks: 2,
            reuseExistingChunk: true,
          },
        },
        maxInitialRequests: 25,
        minSize: 20000,
      },
    },
  };
};
