import { RuleSetRule } from 'webpack';
import { paths } from '../../config/paths';
import { createBabelPresets, createBabelConfig } from '../../scripts/createBabelConfig';
import { ModuleFormat } from '../../types/moduleFormat';
import { getCacheIdentifier } from './getCacheIdentifier';

export const createJsLoader = ({
  isDevelopment,
  isProduction,
  moduleFormat,
  isNode,
}: {
  isDevelopment: boolean;
  isProduction: boolean;
  moduleFormat: ModuleFormat;
  isNode: boolean;
}): RuleSetRule[] => [
  {
    test: /\.(js|jsx|mjs|cjs)$/,
    include: [paths.appSrc],
    use: [
      {
        loader: 'babel-loader',
        options: createBabelConfig({ isDevelopment, isProduction, moduleFormat, isNode }),
      },
    ],
  },
  {
    test: /\.(js|mjs|cjs)$/,
    exclude: /@babel(?:\/|\\{1,2})runtime/,
    loader: require.resolve('babel-loader'),
    options: {
      babelrc: false,
      configFile: false,
      compact: false,
      presets: createBabelPresets({ isDevelopment, isProduction, isNode, moduleFormat: 'cjs' }),
      cacheDirectory: true,
      cacheIdentifier: getCacheIdentifier({ isDevelopment, isNode, moduleFormat }),
      cacheCompression: false,
      sourceMaps: true,
      inputSourceMap: true,
    },
  },
];
