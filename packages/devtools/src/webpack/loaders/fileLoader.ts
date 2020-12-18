import { RuleSetRule } from 'webpack';

export const createFileLoader = ({
  staticAssetName,
  isWeb,
}: {
  staticAssetName: string;
  isWeb: boolean;
}): RuleSetRule => ({
  exclude: [
    /\.html$/,
    /\.jsx?$/,
    /\.jsx?$/,
    /\.tsx?$/,
    /\.css$/,
    /\.json$/,
    /\.bmp$/,
    /\.gif$/,
    /\.jpe?g$/,
    /\.png$/,
    /\.scss$/,
    /\.woff2?$/,
    /\.eot$/,
    /\.ttf$/,
    /\.svg$/,
    /\.csv$/,
    /\.md$/,
    /\.js$/,
    /\.mjs$/,
    /\.cjs$/,
  ],
  loader: 'file-loader',
  options: { name: staticAssetName, emitFile: isWeb },
});
