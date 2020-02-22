const fs = require('fs-extra');
const paths = require('../../config/paths');
const path = require('path');

module.exports.copyPublicFolder = () => {
  if (!fs.existsSync(paths.appPublic)) {
    return;
  }

  fs.copySync(paths.appPublic, paths.appBuildPublic, {
    dereference: true,
    recursive: true,
    filter: (file) => file !== paths.appHtml
  });

  // fs.move(paths.appFavIco, path.join(paths.appBuild, 'favicon.ico'));
  // fs.move(paths.appHtml, path)
}