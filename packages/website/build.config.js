const paths = require('@cutting/devtools/config/paths');

module.exports = {
  client: {
    entries: { client: paths.appClientIndexJs },
    ssrBuild: true,
    hotReloading: true
  }
};
