import { Options as PresetOptions } from '@babel/preset-env';
import { Options as RuntimeOptions } from '@babel/plugin-transform-runtime';
import { ModuleFormat } from '../types/moduleFormat';
// import { getCacheIdentifier } from '../webpack/loaders/getCacheIdentifier';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createBabelPresets = ({
  isDevelopment,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isProduction,
  isNode,
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
  };

  if (isNode) {
    presetOptions.targets = { node: '12' };
  } else {
    presetOptions.useBuiltIns = 'entry';
    presetOptions.corejs = 3;

    presetOptions.targets = {
      edge: '17',
      firefox: '60',
      chrome: '67',
      safari: '11.1',
      ie: '11',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any;
  }

  return [
    ['@babel/preset-env', { ...presetOptions }],
    [
      require('@babel/preset-react').default,
      {
        development: isDevelopment,
        useBuiltIns: isDevelopment,
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
      hot && require.resolve('react-refresh/babel'),
    ].filter(Boolean),
  };
};
