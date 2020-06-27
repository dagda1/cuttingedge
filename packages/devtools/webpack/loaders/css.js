const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssOptions = require('../postCssoptions');
const { cssRegex, sassRegex, sassModuleRegex } = require('../constants');
const getLocalIdent = require('../getLocalIdent');

const cssLoaders = (isDevelopment, isNode, { modules }) => [
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
      modules:
        modules && getLocalIdent
          ? {
              getLocalIdent: getLocalIdent,
            }
          : undefined,
    },
  },
  { loader: 'postcss-loader', options: postcssOptions },
];

const createCSSLoaders = ({ isDevelopment, isNode }) => [
  {
    test: cssRegex,
    use: cssLoaders(isDevelopment, isNode, { modules: false }).filter(Boolean),
  },
  {
    test: sassRegex,
    exclude: sassModuleRegex,
    use: [...cssLoaders(isDevelopment, isNode, { modules: false }), { loader: 'sass-loader' }].filter(Boolean),
  },
  {
    test: sassModuleRegex,
    use: [...cssLoaders(isDevelopment, isNode, { modules: true }), { loader: 'sass-loader' }].filter(Boolean),
  },
];

module.exports = {
  createCSSLoaders,
  cssLoaders,
};
