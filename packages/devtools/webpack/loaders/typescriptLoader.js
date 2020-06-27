const paths = require('../../config/paths');
const { loadableTransformer } = require('loadable-ts-transformer');

const createTypescriptLoader = ({ isDevelopment, isProduction, isWeb }) => (
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
    use: [
      isDevelopment && {
        loader: 'babel-loader',
        options: { plugins: isDevelopment && isWeb ? ['react-refresh/babel'] : [] },
      },
      {
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
      },
    ].filter(Boolean),
  }
);

module.exports = {
  createTypescriptLoader,
};
