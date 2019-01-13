const path = require('path');
const paths = require('../../config/paths');

const entry = process.env.NODE_ENV === 'production' ? path.join(paths.appSrc, 'start') : paths.appSrc;

module.exports = {
  client: {
    entries: entry,
    ssrBuild: false,
    isStaticBuild: true
  }
};
