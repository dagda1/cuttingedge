import path from 'path';
import fs from 'fs';

const MaxTries = 10;
const ModulesDirName = 'node_modules';

export const find = (cwd: string, predicate: (dir: string) => boolean, tries = 0): string => {
  if (tries === MaxTries) {
    throw new Error(`cannot find in ${cwd}`);
  }

  if (predicate(cwd)) {
    return cwd;
  }

  return find(path.resolve(cwd, '..'), predicate, ++tries);
};

export const findFile = (cwd: string, fileName: string) => {
  const dir = find(cwd, (dir) => fs.existsSync(path.resolve(dir, fileName)));

  return path.resolve(dir, fileName);
};

export const findAppNodeModules = (cwd: string, packageName = 'typescript') => {
  const dir = find(cwd, (dir) => fs.existsSync(path.resolve(dir, ModulesDirName, packageName)));

  return path.join(dir, ModulesDirName);
};
