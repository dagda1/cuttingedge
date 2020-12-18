import { paths } from '../../config/paths';
import { Options } from 'ts-loader';
import { RuleSetRule } from 'webpack';
import { createBabelConfig } from '../../scripts/createBabelConfig';
import { ModuleFormat } from '../../types/moduleFormat';

export const createTypescriptLoader = ({
  isDevelopment,
  isNode,
  moduleFormat,
}: {
  isDevelopment: boolean;
  isNode: boolean;
  moduleFormat: ModuleFormat;
}): RuleSetRule[] => {
  const isProduction = !isDevelopment;

  const options: Partial<Options> = {
    silent: isDevelopment,
    configFile: paths.tsConfig,
    transpileOnly: isDevelopment,
    happyPackMode: isDevelopment,
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
        {
          loader: 'babel-loader',
          options: createBabelConfig({ isDevelopment, isProduction, isNode, moduleFormat }),
        },
        {
          loader: 'ts-loader',
          options,
        },
      ].filter(Boolean),
    },
  ];
};
