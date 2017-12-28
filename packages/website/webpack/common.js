const path = require('path');
const webpack = require('webpack');

const isDevelopment = (module.exports.isDevelopment = process.env.NODE_ENV === 'development');
const staticAssetName = (module.exports.staticAssetName = isDevelopment
  ? '[path][name].[ext]?[hash:8]'
  : '[hash:8].[ext]');

module.exports = {
  output: {
    path: path.join(__dirname, '../public/assets'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        exclude: [
          /\.html$/,
          /\.jsx?$/,
          /\.jsx?$/,
          /\.tsx?$/,
          /\.css$/,
          /\.json$/,
          /\.bmp$/,
          /\.gif$/,
          /\.jpe?g$/,
          /\.png$/,
          /\.scss$/,
          /\.woff2?$/,
          /\.eot$/,
          /\.ttf$/,
          /\.svg$/,
          /\.csv$/,
          /\.md$/
        ],
        loader: require.resolve('file-loader'),
        options: {
          name: staticAssetName
        }
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          name: staticAssetName,
          limit: 10000
        }
      },
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        options: {
          sourceMap: true,
          useBabel: false,
          useCache: false
        },
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ]
};
