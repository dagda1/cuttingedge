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
