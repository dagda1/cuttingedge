const paths = require('../config/paths');

const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = !isDevelopment;

module.exports =  {
  outputStyle: 'expanded',
  sourceMap: isDevelopment,
  includePaths: [paths.appSrc],
  minimize: isProduction
};