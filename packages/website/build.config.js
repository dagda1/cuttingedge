const paths = require('@cutting/devtools/config/paths');

module.exports = {
  client: {
    entries: paths.appClientIndexJs,
    ssrBuild: true,
    hotReloading: true,
  },
};
