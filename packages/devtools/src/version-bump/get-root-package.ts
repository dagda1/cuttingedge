import fs from 'fs';
import path from 'path';
import { isMonorepo } from './is-monorepo';
import { find } from '../scripts/utils/finders';

export const getRootPackage = async (cwd: string) => {
  const { monorepo } = await isMonorepo();

  if (monorepo === false) {
    return cwd;
  }

  const rootDir = find(cwd, (dir) => {
    const pkgJsonPath = path.join(dir, 'package.json');

    return fs.existsSync(pkgJsonPath) === true && require(pkgJsonPath).workspaces !== undefined;
  });

  const pkgJsonPath = path.join(rootDir, 'package.json');

  const pkg = require(pkgJsonPath);

  return { rootDir, ...pkg };
};
