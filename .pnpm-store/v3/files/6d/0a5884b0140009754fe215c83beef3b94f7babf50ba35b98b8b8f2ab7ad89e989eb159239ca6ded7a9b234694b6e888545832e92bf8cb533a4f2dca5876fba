"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvePackage = exports.readModulePackageJson = exports.createResolveLocationFn = exports.resolvePackageJsonLocation = exports.resolvePackageRoot = exports.resolvePackageCore = void 0;
const upath2_1 = require("upath2");
const pkg_dir_1 = require("pkg-dir");
function resolvePackageCore(moduleName, options) {
    let entryPointLocation;
    try {
        entryPointLocation = require.resolve(moduleName, options);
    }
    catch (e) {
        entryPointLocation = require.resolve(moduleName + '/package.json', options);
    }
    const pkgRoot = (0, pkg_dir_1.sync)(entryPointLocation);
    return {
        name: moduleName,
        pkgRoot,
        entryPointLocation,
    };
}
exports.resolvePackageCore = resolvePackageCore;
function resolvePackageRoot(moduleName, options) {
    return resolvePackageCore(moduleName, options).pkgRoot;
}
exports.resolvePackageRoot = resolvePackageRoot;
function resolvePackageJsonLocation(moduleName, options) {
    return (0, upath2_1.resolve)(resolvePackageCore(moduleName, options).pkgRoot, 'package.json');
}
exports.resolvePackageJsonLocation = resolvePackageJsonLocation;
function createResolveLocationFn(moduleName, options) {
    const { pkgRoot } = resolvePackageCore(moduleName, options);
    return (path, ...paths) => (0, upath2_1.resolve)(pkgRoot, path, ...paths);
}
exports.createResolveLocationFn = createResolveLocationFn;
function readModulePackageJson(moduleName, options) {
    return require(resolvePackageJsonLocation(moduleName, options));
}
exports.readModulePackageJson = readModulePackageJson;
function resolvePackage(moduleName, options) {
    const _ = resolvePackageCore(moduleName, options);
    const { pkgRoot } = _;
    const pkgJsonLocation = (0, upath2_1.resolve)(pkgRoot, 'package.json');
    return {
        ..._,
        pkg: require(pkgJsonLocation),
        pkgJsonLocation,
        resolveLocation(path, ...paths) {
            return (0, upath2_1.resolve)(pkgRoot, path, ...paths);
        },
    };
}
exports.resolvePackage = resolvePackage;
exports.default = resolvePackage;
//# sourceMappingURL=index.js.map