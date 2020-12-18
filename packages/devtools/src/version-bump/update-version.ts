import { writeToPackage } from '../scripts/write-package';

const copyDependencies = (destination: Record<string, unknown>, oldVersion: string, version: string) => {
  if (!destination) {
    return;
  }

  Object.keys(destination).forEach(
    (prop) =>
      (destination[prop] = /@cutting/g.test(prop) && destination[prop] === oldVersion ? version : destination[prop]),
  );
};

export const updateVersion = async (filename: string, oldVersion: string, version: string): Promise<void> => {
  const { default: pkg } = await import(filename);
  const json = { ...pkg };

  json.version = version;

  copyDependencies(pkg.dependencies, oldVersion, version);
  copyDependencies(pkg.devDependencies, oldVersion, version);
  await writeToPackage(filename, json);
};
