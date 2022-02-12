import type { RuleSetRule } from 'webpack';

export const createAssetsLoader = (): RuleSetRule => ({
  test: /\.(png|svg|jpg|jpeg|gif|woff|woff2|eot|ttf|otf)$/i,
  type: 'asset/resource',
});
