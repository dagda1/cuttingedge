const fs = require('fs');
const path = require('path');

const MaxTries = 15;
const getPackageInfo = (dir, tries = 0) => {
  if (tries === MaxTries) throw new Error('cannot find root package json file');

  const file = fs.readdirSync(dir).find(file => file === 'package.json');

  // check if parent dirctory is packages &
  // look for package.json at the root of monolithic repo
  if (dir.split('/').includes('packages') | (file === undefined)) {
    return getPackageInfo(path.resolve(dir, '..'), tries++);
  }
  const package = require(path.join(dir, file));

  return { dir, ...package };
};

module.exports = getPackageInfo;
