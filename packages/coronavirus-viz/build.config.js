const paths = require('@cutting/devtools/config/paths');

module.exports = {
  devServer: {
    entries: paths.appSrc,
    publicDir: paths.publicDir,
    ssrBuild: false,
    isStaticBuild: true
  }
};
