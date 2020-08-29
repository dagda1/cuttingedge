import fs from 'fs';

const writeToPackage = <D>(filename: string, data: D) =>
  fs.writeFile(filename, JSON.stringify(data, null, 2), function (err) {
    if (err) {
      throw err;
    }
  });

const copyDependencies = (destination: Record<string, unknown>, oldVersion: string, version: string) => {
  if (!destination) {
    return;
  }

  Object.keys(destination).forEach(
    (prop) => (destination[prop] = /@ds/g.test(prop) && destination[prop] === oldVersion ? version : destination[prop]),
  );
};

export const updateVersion = (filename: string, oldVersion: string, version: string): void => {
  const pkg = require(filename);

  pkg.version = version;

  copyDependencies(pkg.dependencies, oldVersion, version);
  copyDependencies(pkg.devDependencies, oldVersion, version);
  writeToPackage(filename, pkg);
};
