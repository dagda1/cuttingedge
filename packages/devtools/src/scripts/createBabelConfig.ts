import type { Options as PresetOptions } from '@babel/preset-env';
import type { Options as RuntimeOptions } from '@babel/plugin-transform-runtime';
import type { ModuleFormat } from '../types/moduleFormat';
// import { getCacheIdentifier } from '../webpack/loaders/getCacheIdentifier';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createBabelPresets = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isDevelopment,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isProduction,
  moduleFormat,
}: {
  isDevelopment: boolean;
  isProduction: boolean;
  isNode: boolean;
  moduleFormat: ModuleFormat;
}) => {
  const presetOptions: PresetOptions = {
    exclude: ['transform-typeof-symbol'],
    modules: moduleFormat === 'esm' ? false : 'auto',
    useBuiltIns: 'entry',
    corejs: 3,
  };

  return [
    ['@babel/preset-env', { ...presetOptions }],
    [
      require('@babel/preset-react').default,
      {
        runtime: 'automatic',
      },
    ],
  ];
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createBabelConfig = ({
  isDevelopment,
  isProduction,
  isNode,
  moduleFormat,
}: {
  isDevelopment: boolean;
  isProduction: boolean;
  isNode: boolean;
  moduleFormat: ModuleFormat;
}) => {
  const hot = isDevelopment && !isNode;
  return {
    babelrc: false,
    configFile: false,
    presets: createBabelPresets({ isDevelopment, isProduction, isNode, moduleFormat }),
    // cacheDirectory: true,
    // cacheIdentifier: getCacheIdentifier({ isDevelopment, isNode, moduleFormat }),
    sourceType: 'unambiguous',
    plugins: [
      'babel-plugin-macros',
      'babel-plugin-annotate-pure-calls',
      'babel-plugin-dev-expression',
      [
        '@babel/plugin-proposal-class-properties',
        {
          loose: true,
        },
      ],
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      ['@babel/plugin-proposal-private-methods', { loose: true }],
      ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
      '@babel/plugin-proposal-numeric-separator',
      [
        '@babel/plugin-transform-runtime',
        {
          corejs: false,
          helpers: true,
          version: require('@babel/runtime/package.json').version,
          regenerator: true,
          useESModules: moduleFormat === 'esm',
        } as RuntimeOptions,
      ],
      '@babel/plugin-syntax-dynamic-import',
      '@loadable/babel-plugin',
      '@babel/plugin-proposal-optional-chaining',
      '@babel/plugin-proposal-nullish-coalescing-operator',
      '@vanilla-extract/babel-plugin',
      hot && require.resolve('react-refresh/babel'),
    ].filter(Boolean),
  };
};
