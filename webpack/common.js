const paths = require('../config/paths');

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  loaders: [
    {
      test: /\.tsx?$/,
      loader: 'awesome-typescript-loader',
      include: '/src',
      exclude: /node_modules/
    }
  ]
};
