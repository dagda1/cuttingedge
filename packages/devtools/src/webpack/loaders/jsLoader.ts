// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createJsLoader = () => ({
  test: /\.(js|jsx|mjs)$/,
  exclude: /\/node_modules\/core-js\//,
  use: [
    {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        cacheDirectory: true,
      },
    },
  ],
});
