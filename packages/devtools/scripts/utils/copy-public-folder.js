const fs = require('fs-extra');
const paths = require('../../config/paths');

module.exports.copyPublicFolder = () => {
  if (!fs.existsSync(paths.appPublic)) {
    return;
  }

  fs.copySync(paths.appPublic, paths.appBuild, {
    dereference: true,
    filter: file => file !== paths.appHtml,
  });
};
