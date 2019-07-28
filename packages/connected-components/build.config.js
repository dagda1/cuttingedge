const paths = require('@cutting/devtools/config/paths');

module.exports = {
  devServer: {
    entries: paths.devDir,
    publicDir: paths.devDirPublic,
    ssrBuild: false,
    isStaticBuild: true
  }
};
