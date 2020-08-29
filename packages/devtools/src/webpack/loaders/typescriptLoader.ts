import { paths } from '../../config/paths';
const { loadableTransformer } = require('loadable-ts-transformer');
import { Options } from 'ts-loader';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createTypescriptLoader = ({
  isDevelopment,
  isProduction,
  isWeb,
}: {
  isDevelopment: boolean;
  isProduction: boolean;
  isWeb: boolean;
}) => {
  const hot = isDevelopment && isWeb;

  const options: Partial<Options> = {
    silent: isDevelopment,
    configFile: paths.tsConfig,
    transpileOnly: isDevelopment,
    happyPackMode: isDevelopment,
    getCustomTransformers: () => ({ before: [loadableTransformer] }),
    compilerOptions: {
      sourceMap: true,
    },
  };

  return [
    {
      test: /\.tsx$/,
      enforce: 'pre',
      use: [
        {
          loader: 'eslint-loader',
          options: {
            fix: isProduction,
            emitWarning: isDevelopment,
            failOnWarning: isProduction,
            configFile: paths.eslintConfig,
          },
        },
      ],
    },
    {
      test: /\.tsx?$/,
      use: [
        hot && {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              '@babel/plugin-syntax-dynamic-import',
              [
                '@babel/plugin-transform-runtime',
                {
                  regenerator: true,
                },
              ],
              'react-refresh/babel',
            ],
            sourceType: 'unambiguous',
          },
        },
        {
          loader: 'ts-loader',
          options,
        },
      ].filter(Boolean),
    },
  ];
};
