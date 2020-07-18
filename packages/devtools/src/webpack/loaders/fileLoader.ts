export const createFileLoader = ({ staticAssetName, isWeb }: { staticAssetName: string; isWeb: boolean }) => ({
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
  ],
  loader: 'file-loader',
  options: { name: staticAssetName, emitFile: isWeb },
});
