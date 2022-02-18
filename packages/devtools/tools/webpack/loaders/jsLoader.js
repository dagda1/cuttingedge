'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.createJsLoader = void 0;
const paths_1 = require('../../config/paths');
const createBabelConfig_1 = require('../../scripts/createBabelConfig');
const getCacheIdentifier_1 = require('./getCacheIdentifier');
const createJsLoader = ({ isDevelopment, isProduction, moduleFormat, isNode }) => [
  {
    test: /\.(js|jsx|mjs|cjs)$/,
    include: [paths_1.paths.appSrc],
    use: [
      {
        loader: 'babel-loader',
        options: (0, createBabelConfig_1.createBabelConfig)({ isDevelopment, isProduction, moduleFormat, isNode }),
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
      presets: (0, createBabelConfig_1.createBabelPresets)({ isDevelopment, isProduction, isNode, moduleFormat: 'cjs' }),
      cacheDirectory: true,
      cacheIdentifier: (0, getCacheIdentifier_1.getCacheIdentifier)({ isDevelopment, isNode, moduleFormat }),
      cacheCompression: false,
      sourceMaps: true,
      inputSourceMap: true,
    },
  },
];
exports.createJsLoader = createJsLoader;
//# sourceMappingURL=jsLoader.js.map
