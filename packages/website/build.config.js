const { paths } = require('@cutting/devtools/tools/config/paths');

module.exports = {
  client: {
    entries: { client: paths.appClientIndexJs },
    ssrBuild: true,
    hotReloading: true,
  },
};
