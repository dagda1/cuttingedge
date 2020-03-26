const paths = require('@cutting/devtools/config/paths');

module.exports = {
  client: {
    entries: paths.appSrc,
  },
  devServer: {
    entries: paths.appSrc,
    publicDir: paths.publicDir,
    ssrBuild: false,
    isStaticBuild: true,
  },
};
