import { RuleSetRule } from 'webpack';

export const createUrlLoader = ({
  staticAssetName,
  isWeb,
}: {
  staticAssetName: string;
  isWeb: boolean;
}): RuleSetRule => ({
  test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
  loader: 'url-loader',
  options: { name: staticAssetName, limit: 10000, emitFile: isWeb },
});
