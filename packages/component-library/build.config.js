const { paths } = require('@cutting/devtools/tools/config/paths');

module.exports = {
  client: {
    entries: process.env.NODE_ENV === 'development' ? paths.devDir : [paths.appSrc],
    publicDir: paths.devDirPublic,
    ssrBuild: false,
    isStaticBuild: true,
  },
};
