"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.copyPublicFolder = exports.copyRecursiveSync = void 0;
var fs_extra_1 = __importDefault(require("fs-extra"));
var paths_1 = require("../../config/paths");
var path_1 = __importDefault(require("path"));
var copyRecursiveSync = function copyRecursiveSync(src, dest) {
    fs_extra_1.default.copySync(src, dest);
    fs_extra_1.default.readdirSync(src)
        .map(function (name) { return name; })
        .filter(function (dir) { return fs_extra_1.default.lstatSync(path_1.default.join(src, dir)).isDirectory(); })
        .forEach(function (dir) {
        copyRecursiveSync(path_1.default.join(src, dir), path_1.default.join(dest, dir));
    });
};
exports.copyRecursiveSync = copyRecursiveSync;
var copyPublicFolder = function () {
    if (!fs_extra_1.default.existsSync(paths_1.paths.appPublic)) {
        return;
    }
    if (!fs_extra_1.default.existsSync(paths_1.paths.appBuildPublic)) {
        fs_extra_1.default.mkdirSync(paths_1.paths.appBuildPublic);
    }
    exports.copyRecursiveSync(paths_1.paths.appPublic, paths_1.paths.appBuildPublic);
};
exports.copyPublicFolder = copyPublicFolder;
//# sourceMappingURL=copy-public-folder.js.map