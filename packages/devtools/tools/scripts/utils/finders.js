"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAppNodeModules = exports.findFile = exports.find = void 0;
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var MaxTries = 10;
var ModulesDirName = 'node_modules';
exports.find = function (cwd, predicate, tries) {
    if (tries === void 0) { tries = 0; }
    if (tries === MaxTries) {
        throw new Error("cannot find in " + cwd);
    }
    if (predicate(cwd)) {
        return cwd;
    }
    return exports.find(path_1.default.resolve(cwd, '..'), predicate, ++tries);
};
exports.findFile = function (cwd, fileName) {
    var dir = exports.find(cwd, function (dir) { return fs_1.default.existsSync(path_1.default.resolve(dir, fileName)); });
    return path_1.default.resolve(dir, fileName);
};
exports.findAppNodeModules = function (cwd, packageName) {
    if (packageName === void 0) { packageName = 'typescript'; }
    var dir = exports.find(cwd, function (dir) { return fs_1.default.existsSync(path_1.default.resolve(dir, ModulesDirName, packageName)); });
    return path_1.default.join(dir, ModulesDirName);
};
//# sourceMappingURL=finders.js.map