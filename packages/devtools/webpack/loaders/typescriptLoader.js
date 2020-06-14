const paths = require('../../config/paths');
const { loadableTransformer } = require('loadable-ts-transformer');

const createTypescriptLoader = ({ isDevelopment, isProduction }) => (
  {
    test: /\.tsx$/,
    enforce: 'pre',
    use: [
      {
        loader: 'eslint-loader',
        options: {
          fix: isProduction,
          emitWarning: isDevelopment,
          failOnWarning: isProduction,
          configFile: paths.esLintConfig,
        },
      },
    ],
  },
  {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    loader: 'ts-loader',
    options: {
      configFile: paths.tsConfig,
      transpileOnly: isDevelopment,
      experimentalWatchApi: isDevelopment,
      compilerOptions: {
        sourceMap: isDevelopment,
      },
      getCustomTransformers: () => ({ before: [loadableTransformer] }),
    },
  }
);

module.exports = {
  createTypescriptLoader,
};
