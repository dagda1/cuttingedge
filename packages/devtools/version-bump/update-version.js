const fs = require('fs');
const path = require('path');

const writeToPackage = (filename, data) =>
  fs.writeFile(filename, JSON.stringify(data, null, 2), function(err) {
    if (err) throw err;
  });

const copyDependencies = (destination, version) => {
  if (!destination) {
    return;
  }

  Object.keys(destination).forEach(prop => (destination[prop] = /@cutting/g.test(prop) ? version : destination[prop]));
};

const updateVersion = (filename, version, updateDsDepVersion = true) => {
  const package = require(path.resolve(filename));

  package.version = version;

  if (!updateDsDepVersion) {
    writeToPackage(filename, package);
    return;
  }

  copyDependencies(package.dependencies, version);
  copyDependencies(package.devDependencies, version);
  writeToPackage(filename, package);
};

module.exports = updateVersion;
