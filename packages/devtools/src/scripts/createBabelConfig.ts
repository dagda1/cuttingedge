import type { Options as PresetOptions } from '@babel/preset-env';
import type { Options as RuntimeOptions } from '@babel/plugin-transform-runtime';
import type { ModuleFormat } from '../types/moduleFormat';
import { createRequire } from 'module';
// import { getCacheIdentifier } from '../webpack/loaders/getCacheIdentifier';

const require = createRequire(import.meta.url);

export function createBabelPresets(): any[] {
  const presetOptions: PresetOptions = {
    exclude: ['transform-typeof-symbol', '@babel/plugin-transform-regenerator'],
    modules: 'auto',
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
}


// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createBabelConfig = ({
  isDevelopment,
  isNode,
  moduleFormat,
}: {
  isDevelopment: boolean;
  isProduction: boolean;
  isNode: boolean;
  moduleFormat: ModuleFormat;
}) => {
  // const hot = isDevelopment && !isNode;
  return {
    babelrc: false,
    configFile: false,
    presets: createBabelPresets(),
    exclude: [/node_modules\/react/, /\/node_modules\/(core-js)\//],
    // cacheDirectory: true,
    // cacheIdentifier: getCacheIdentifier({ isDevelopment, isNode, moduleFormat }),
    sourceType: 'module',
    plugins: [
      ["replace-import-extension", { "extMapping": { ".js": "" }}],
      'babel-plugin-annotate-pure-calls',
      [
        '@babel/plugin-transform-runtime',
        {
          corejs: false,
          helpers: false,
          version: require('@babel/runtime/package.json').version,
          regenerator: false,
          useESModules: true,
        } as RuntimeOptions,
      ],
      '@babel/plugin-syntax-dynamic-import',
      '@loadable/babel-plugin',
      '@babel/plugin-proposal-optional-chaining',
      '@babel/plugin-proposal-nullish-coalescing-operator',
      '@vanilla-extract/babel-plugin',
      // hot && 'react-refresh/babel',
    ].filter(Boolean),
  };
};
