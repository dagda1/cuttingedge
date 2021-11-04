const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  webpackFinal(baseConfig, options) {
    const { module = {}, plugins = {} } = baseConfig;

    const cssRule = module.rules.find((rule) => rule?.test?.test('test.css'));
    cssRule.test = /.*(?<!\.vanilla)\.css$/;

    return {
      ...baseConfig,
      plugins: [
        ...plugins,
        new VanillaExtractPlugin(),
        new MiniCssExtractPlugin(),
      ],
      module: {
        ...module,
        rules: [
          ...module.rules,
          {
            test: /\.vanilla\.css$/i,
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: require.resolve('css-loader'),
                options: {
                  url: false,
                },
              },
            ],
          },
        ],
      },
    };
  },
};