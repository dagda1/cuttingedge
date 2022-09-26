import type { Options as PresetOptions } from '@babel/preset-env';
import type { Options as RuntimeOptions } from '@babel/plugin-transform-runtime';
import type { ModuleFormat } from '../types/moduleFormat';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
      'babel-plugin-annotate-pure-calls',
      [
        '@babel/plugin-transform-runtime',
        {
          corejs: false,
          helpers: true,
          version: require('@babel/runtime/package.json').version,
          regenerator: false,
          // have to set useESModules: false and here is why
          // https://github.com/babel/babel/discussions/14951
          useESModules: false,
        } as RuntimeOptions,
      ],
      '@babel/plugin-syntax-dynamic-import',
      '@loadable/babel-plugin',
      '@babel/plugin-proposal-optional-chaining',
      '@babel/plugin-proposal-nullish-coalescing-operator',
    ].filter(Boolean),
  };
};
