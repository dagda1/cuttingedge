import { paths } from '../../config/paths';
import type { Options } from 'ts-loader';
import type { RuleSetRule } from 'webpack';
import { createBabelConfig } from '../../scripts/createBabelConfig';
import type { ModuleFormat } from '../../types/moduleFormat';

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
    configFile: paths.tsConfigProduction,
    transpileOnly: isDevelopment,
    happyPackMode: isDevelopment,
    projectReferences: paths.projectReferences,
    compilerOptions: {},
    logLevel: 'INFO',
  };

  return [
    {
      test: /\.tsx?$/,
      exclude: [/\/node_modules\//, /\.test.tsx?$/],
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
