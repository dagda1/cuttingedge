import fs from 'fs';
import path from 'path';

const MaxTries = 10;
const ModulesDirName = 'node_modules';

export const find = (cwd: string, predicate: (dir: string) => boolean, tries = 0): string | boolean => {
  if (tries === MaxTries) {
    return false;
  }

  if (predicate(cwd)) {
    return cwd;
  }

  return find(path.resolve(cwd, '..'), predicate, ++tries);
};

export const findFile = (cwd: string, fileName: string): string | boolean => {
  const dir = find(cwd, (dir) => fs.existsSync(path.resolve(dir, fileName)));

  if (typeof dir !== 'string') {
    return false;
  }

  return path.resolve(dir, fileName);
};

export const findAppNodeModules = (cwd: string, packageName = 'typescript'): string | boolean => {
  const dir = find(cwd, (dir) => fs.existsSync(path.resolve(dir, ModulesDirName, packageName)));

  if (typeof dir !== 'string') {
    return false;
  }

  return path.join(dir, ModulesDirName);
};
