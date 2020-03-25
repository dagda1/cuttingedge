const paths = require('../config/paths');

const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = !isDevelopment;

module.exports = {
  sassOptions: {
    outputStyle: 'expanded',
    sourceMap: isDevelopment,
    data: '@import "./styles/_overrides.scss";',
    includePaths: [paths.appSrc],
    minimize: isProduction
  }
};
