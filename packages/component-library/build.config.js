const paths = require('@cutting/devtools/config/paths');

module.exports = {
  client: {
    entries: paths.demoDir,
    publicDir: paths.devDirPublic,
    ssrBuild: false,
    isStaticBuild: true
  }
};
