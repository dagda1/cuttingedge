import fs from 'fs-extra';
import { paths } from '../../config/paths';
import path from 'path';

export const copyRecursiveSync = function copyRecursiveSync(src: string, dest: string) {
  fs.copySync(src, dest);

  fs.readdirSync(src)
    .map((name) => name)
    .filter((dir) => fs.lstatSync(path.join(src, dir)).isDirectory())
    .forEach((dir) => {
      copyRecursiveSync(path.join(src, dir), path.join(dest, dir));
    });
};

export const copyPublicFolder = () => {
  if (!fs.existsSync(paths.appPublic)) {
    return;
  }

  fs.mkdirSync(paths.appBuildPublic);

  copyRecursiveSync(paths.appPublic, paths.appBuildPublic);
};
