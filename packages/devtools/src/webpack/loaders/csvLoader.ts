import { RuleSetRule } from 'webpack';

export const createCSVLoader = (): RuleSetRule => ({
  test: /\.csv$/,
  loader: 'csv-loader',
  options: {
    header: true,
    skipEmptyLines: true,
  },
});
