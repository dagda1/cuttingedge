export const createUrlLoader = ({ staticAssetName, isWeb }: { staticAssetName: boolean; isWeb: boolean }) => ({
  test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.woff$/, /\.woff2$/, /\.eot$/, /\.eot$/, /\.ttf$/],
  loader: 'url-loader',
  options: { name: staticAssetName, limit: 10000, emitFile: isWeb },
});

module.exports = {
  createUrlLoader,
};
