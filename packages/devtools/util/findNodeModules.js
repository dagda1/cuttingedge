const MaxTries = 15;
const ModulesDirName = 'node_modules';
const fs = require('fs-extra');
const path = require('path');

function findAppNodeModules(current, packageName = 'typescript', tries = 0) {
  const modulesDir = path.resolve(current, ModulesDirName, packageName);

  if (tries === MaxTries) {
    throw new Error(`cannot find ${packageName} in ${modulesDir}`);
  }

  if (fs.existsSync(modulesDir)) {
    return path.join(current, ModulesDirName);
  }

  return findAppNodeModules(path.resolve(current, '..'), packageName, ++tries);
}

module.exports = {
  findAppNodeModules,
};
