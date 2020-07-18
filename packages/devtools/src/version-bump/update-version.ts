import fs from 'fs';

const writeToPackage = <D>(filename: string, data: D) =>
  fs.writeFile(filename, JSON.stringify(data, null, 2), function (err) {
    if (err) {
      throw err;
    }
  });

const copyDependencies = (destination: string, oldVersion: string, version: string) => {
  if (!destination) {
    return;
  }

  Object.keys(destination).forEach(
    (prop) =>
      (destination[prop] = /@cutting/g.test(prop) && destination[prop] === oldVersion ? version : destination[prop]),
  );
};

export const updateVersion = (filename: string, oldVersion: string, version: string) => {
  const pkg = require(filename);

  pkg.version = version;

  copyDependencies(pkg.dependencies, oldVersion, version);
  copyDependencies(pkg.devDependencies, oldVersion, version);
  writeToPackage(filename, pkg);
};
