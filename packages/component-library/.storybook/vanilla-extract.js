const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  webpackFinal(baseConfig, options) {
    const { module = {}, plugins = {} } = baseConfig;

    const cssRule = module.rules.find((rule) => rule?.test?.test('test.css'));
    cssRule.test = /.*(?<!\.vanilla)\.css$/;
    
    // const tsxRule = module.rules.find((rule) => rule?.test?.test('test.tsx'))
 
    
    // // tsxRule.use[0].options.plugins.push(require.resolve('@vanilla-extract/babel-plugin'));

    // for(const rule of module.rules) {
    //   if(Array.isArray(rule.use) && typeof rule.use[0].options !== 'undefined' && Array.isArray(rule.use[0].options.plugins)) {
    //     rule.use[0].options.plugins.push(require.resolve('@vanilla-extract/babel-plugin'))
    //   }
    // }

    // console.dir({r: module.rules}, {depth: 33})

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