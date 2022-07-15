import fs from 'fs-extra';
import { paths } from '../../config/paths.js';
import path from 'path';
export const copyRecursiveSync = function copyRecursiveSync(src, dest) {
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
    if (!fs.existsSync(paths.appBuildPublic)) {
        fs.mkdirSync(paths.appBuildPublic, { recursive: true });
    }
    copyRecursiveSync(paths.appPublic, paths.appBuildPublic);
};
//# sourceMappingURL=copy-public-folder.js.map