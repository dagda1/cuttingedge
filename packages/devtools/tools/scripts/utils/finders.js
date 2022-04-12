"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAppNodeModules = exports.findFile = exports.find = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const MaxTries = 10;
const ModulesDirName = 'node_modules';
const find = (cwd, predicate, tries = 0) => {
    if (tries === MaxTries) {
        return false;
    }
    if (predicate(cwd)) {
        return cwd;
    }
    return (0, exports.find)(path_1.default.resolve(cwd, '..'), predicate, ++tries);
};
exports.find = find;
const findFile = (cwd, fileName) => {
    const dir = (0, exports.find)(cwd, (dir) => fs_1.default.existsSync(path_1.default.resolve(dir, fileName)));
    if (typeof dir !== 'string') {
        return false;
    }
    return path_1.default.resolve(dir, fileName);
};
exports.findFile = findFile;
const findAppNodeModules = (cwd, packageName = 'typescript') => {
    const dir = (0, exports.find)(cwd, (dir) => fs_1.default.existsSync(path_1.default.resolve(dir, ModulesDirName, packageName)));
    if (typeof dir !== 'string') {
        return false;
    }
    return path_1.default.join(dir, ModulesDirName);
};
exports.findAppNodeModules = findAppNodeModules;
//# sourceMappingURL=finders.js.map