const join = require('path').join;

module.exports = {
  output: {
    path: join(__dirname, '../public/assets'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx'],
    modules: [join(__dirname, '../node_modules'), join(__dirname, '../src')]
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  }
};
