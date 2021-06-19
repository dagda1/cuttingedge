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
    configFile: isProduction ? paths.tsConfigProduction : paths.tsConfig,
    transpileOnly: isDevelopment,
    happyPackMode: isDevelopment,
    projectReferences: paths.projectReferences,
    compilerOptions: {
      sourceMap: true,
    },
  };

  return [
    {
      test: /\.tsx$/,
      enforce: 'pre',
      exclude: /\/node_modules\//,
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
      exclude: {
        test: /node_modules/,
        not: [/^@babel/, /^@loadable/, /^@cutting/],
      },
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
