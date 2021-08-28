const { paths } = require('@cutting/devtools/tools/config/paths');
const path = require('path');

module.exports = {
  client: {
    entries: process.env.NODE_ENV === 'development' ? paths.devDir : [paths.appSrc, path.join(paths.appSrc, 'style')],
    publicDir: paths.devDirPublic,
    ssrBuild: false,
    isStaticBuild: true,
  },
};
