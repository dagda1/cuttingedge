const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssOptions = require('../postCssoptions');

const cssLoaders = (isDevelopment, isNode, getLocalIdent) => [
  isDevelopment && require.resolve('css-hot-loader'),
  {
    loader: MiniCssExtractPlugin.loader,
    options: {
      hmr: isDevelopment,
    },
  },
  {
    loader: 'css-loader',
    options: {
      importLoaders: isNode ? 1 : 2,
      sourceMap: isDevelopment,
      modules: getLocalIdent
        ? {
            getLocalIdent: getLocalIdent,
          }
        : undefined,
    },
  },
  { loader: 'postcss-loader', options: postcssOptions },
];

module.exports = {
  cssLoaders,
};
