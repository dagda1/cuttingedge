import { paths } from '../../config/paths.js';
import type { Options } from 'ts-loader';
import type { RuleSetRule } from 'webpack';
import { createBabelConfig } from '../../scripts/createBabelConfig.js';
import type { ModuleFormat } from '../../types/moduleFormat.js';

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
    compilerOptions: {},
    logLevel: 'WARN',
  };

  return [
    {
      test: /\.tsx?$/,
      exclude: /\/node_modules\//,
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
