import { RuleSetRule } from 'webpack';

export const createMDLoader = (): RuleSetRule => ({
  test: /\.md$/,
  use: [
    {
      loader: 'html-loader',
    },
    {
      loader: 'markdown-loader',
      options: {},
    },
  ],
});
