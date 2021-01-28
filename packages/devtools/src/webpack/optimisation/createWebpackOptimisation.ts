import TerserPlugin from 'terser-webpack-plugin';
import { Options } from 'webpack';
import crypto from 'crypto';
import path from 'path';
import webpack from 'webpack';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

const FRAMEWORK_BUNDLES = ['react', 'react-dom'];

const isModuleCSS = (module: { type: string }): boolean => {
  return (
    module.type === `css/mini-extract` ||
    module.type === `css/extract-chunks` ||
    module.type === `css/extract-css-chunks`
  );
};

export const createWebpackOptimisation = ({
  optimization,
}: {
  optimization?: Options.Optimization;
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
          },
        }),
        new CssMinimizerPlugin({
          sourceMap: true,
          parallel: true,
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
            test: new RegExp(`(?<!node_modules.*)[\\\\/]node_modules[\\\\/](${FRAMEWORK_BUNDLES.join(`|`)})[\\\\/]`),
            priority: 40,
            enforce: true,
          },
          commons: {
            name: 'commons',
            minChunks: 5,
            priority: 20,
          },
          lib: {
            // eslint-disable-next-line @typescript-eslint/ban-types
            test(module: { size: Function; identifier: Function }): boolean {
              return module.size() > 160000 && /node_modules[/\\]/.test(module.identifier());
            },
            // eslint-disable-next-line @typescript-eslint/ban-types
            name(module: { type: string; libIdent?: Function; updateHash: (hash: crypto.Hash) => void }): string {
              const hash = crypto.createHash('sha1');
              if (isModuleCSS(module)) {
                module.updateHash(hash);
              } else {
                if (!module.libIdent) {
                  throw new Error(`Encountered unknown module type: ${module.type}. Please open an issue.`);
                }

                hash.update(module.libIdent({ context: path.resolve('.') }));
              }

              return hash.digest('hex').substring(0, 8);
            },
            priority: 30,
            minChunks: 1,
            reuseExistingChunk: true,
          },
          shared: {
            name(module, chunks) {
              return (
                crypto
                  .createHash('sha1')
                  .update(
                    chunks.reduce((acc: string, chunk: webpack.compilation.Chunk) => {
                      return acc + chunk.name;
                    }, ''),
                  )
                  .digest('hex') + (isModuleCSS(module) ? '_CSS' : '')
              );
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
