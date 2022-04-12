"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.copyPublicFolder = exports.copyRecursiveSync = void 0;
const fs_extra_1 = __importDefault(require("fs-extra"));
const paths_1 = require("../../config/paths");
const path_1 = __importDefault(require("path"));
const copyRecursiveSync = function copyRecursiveSync(src, dest) {
    fs_extra_1.default.copySync(src, dest);
    fs_extra_1.default.readdirSync(src)
        .map((name) => name)
        .filter((dir) => fs_extra_1.default.lstatSync(path_1.default.join(src, dir)).isDirectory())
        .forEach((dir) => {
        copyRecursiveSync(path_1.default.join(src, dir), path_1.default.join(dest, dir));
    });
};
exports.copyRecursiveSync = copyRecursiveSync;
const copyPublicFolder = () => {
    if (!fs_extra_1.default.existsSync(paths_1.paths.appPublic)) {
        return;
    }
    if (!fs_extra_1.default.existsSync(paths_1.paths.appBuildPublic)) {
        fs_extra_1.default.mkdirSync(paths_1.paths.appBuildPublic);
    }
    (0, exports.copyRecursiveSync)(paths_1.paths.appPublic, paths_1.paths.appBuildPublic);
};
exports.copyPublicFolder = copyPublicFolder;
//# sourceMappingURL=copy-public-folder.js.map