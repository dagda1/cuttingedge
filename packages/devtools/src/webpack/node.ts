import merge from 'webpack-merge';
import webpack, { Configuration } from 'webpack';
import { NodeBuildConfig } from 'src/types/config';
import nodeExternals from 'webpack-node-externals';
import { paths } from '../config/paths';
import WriteFilePlugin from 'write-file-webpack-plugin';
import { configureCommon } from './common';
import { getEnvironment } from './getEnvironment';
import { isPlugin } from './guards';

const getExternals = (modulesDir: string) => {
  return [
    nodeExternals(),
    nodeExternals({
      modulesDir,
      whitelist: [/^@cutting/].filter((x) => x),
    }),
  ];
};

export const configure = (options: NodeBuildConfig): Configuration => {
  const common = configureCommon({ ...options, isWeb: false });

  const { modulesDir } = options;

  const { isDevelopment, isProduction } = getEnvironment();

  const entries = Array.isArray(options.entries) ? options.entries : [options.entries];

  const config: Configuration = merge(common, {
    name: 'api',
    target: 'node',
    externals: getExternals(modulesDir),
    entry: isDevelopment ? [...entries] : entries,
    devtool: !isDevelopment && 'cheap-module-source-map',
    output: {
      path: paths.appBuild,
      filename: options.filename,
      libraryTarget: 'commonjs2',
    },
    plugins: [
      new WriteFilePlugin(),
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      }),
      isProduction && new webpack.optimize.ModuleConcatenationPlugin(),
    ].filter(isPlugin),
  });

  return config;
};
