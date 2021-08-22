import { RuleSetRule } from 'webpack';

export const createAssetsLoader = (): RuleSetRule => ({
  test: /\.(woff|woff2|eot|ttf|otf)$/i,
  type: 'asset/resource',
});
