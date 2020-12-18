import { RuleSetRule } from 'webpack';

export const createSVGLoader = (): RuleSetRule => ({
  test: /\.svg/,
  use: {
    loader: 'svg-url-loader',
    options: {},
  },
});
