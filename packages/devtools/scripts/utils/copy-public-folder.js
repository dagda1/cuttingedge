const fs = require('fs-extra');
const path = require('path');
const paths = require('../../config/paths');

const copyRecursiveSync = function copyRecursiveSync(src, dest) {
  fs.copySync(src, dest);

  fs.readdirSync(src)
    .map((name) => name)
    .filter((dir) => fs.lstatSync(path.join(src, dir)).isDirectory())
    .forEach((dir) => {
      copyRecursiveSync(path.join(src, dir), path.join(dest, dir));
    });
};

module.exports.copyPublicFolder = () => {
  if (!fs.existsSync(paths.appPublic)) {
    return;
  }

  fs.mkdirSync(paths.appBuildPublic);

  copyRecursiveSync(paths.appPublic, paths.appBuildPublic);
};
