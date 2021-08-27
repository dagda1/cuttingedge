"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFileName = void 0;
var paths_1 = require("../config/paths");
var helpers_1 = require("../rollup/helpers");
var getFileName = function (_a) {
    var isMainChunk = _a.isMainChunk, fileType = _a.fileType, isPackage = _a.isPackage, isProduction = _a.isProduction;
    var packageInfo = require(paths_1.paths.appPackageJson);
    var pkgName = helpers_1.safePackageName(packageInfo.name);
    if (isPackage && isMainChunk) {
        return pkgName;
    }
    var prefix = isPackage ? '' : "static/" + fileType + "/";
    // The client file mask is set to just name in start/dev mode as contenthash
    // is not supported for hot reloading. It can also cause non
    // deterministic snapshots in jest tests.
    if (!isProduction) {
        return prefix + "[name]";
    }
    // Production builds should contain contenthash for optimal file caching
    return prefix + "[name]-[contenthash]";
};
exports.getFileName = getFileName;
//# sourceMappingURL=getFileName.js.map