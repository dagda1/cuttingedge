import { paths } from '../../config/paths';
const { loadableTransformer } = require('loadable-ts-transformer');

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
          options: {
            configFile: paths.tsConfig,
            transpileOnly: isDevelopment,
            happyPackMode: isDevelopment,
            getCustomTransformers: () => ({ before: [loadableTransformer] }),
          },
        },
      ].filter(Boolean),
    },
  ];
};
