"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateVersion = void 0;
var fs_1 = __importDefault(require("fs"));
var writeToPackage = function (filename, data) {
    return fs_1.default.writeFile(filename, JSON.stringify(data, null, 2), function (err) {
        if (err) {
            throw err;
        }
    });
};
var copyDependencies = function (destination, oldVersion, version) {
    if (!destination) {
        return;
    }
    Object.keys(destination).forEach(function (prop) {
        return (destination[prop] = /@cutting/g.test(prop) && destination[prop] === oldVersion ? version : destination[prop]);
    });
};
exports.updateVersion = function (filename, oldVersion, version) {
    var pkg = require(filename);
    pkg.version = version;
    copyDependencies(pkg.dependencies, oldVersion, version);
    copyDependencies(pkg.devDependencies, oldVersion, version);
    writeToPackage(filename, pkg);
};
//# sourceMappingURL=update-version.js.map