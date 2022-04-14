"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nodeExternalsPlugin = void 0;
const utils_1 = require("./utils");
const nodeExternalsPlugin = (paramsOptions = {}) => {
    const options = Object.assign(Object.assign({ dependencies: true, devDependencies: true, peerDependencies: true, optionalDependencies: true, allowList: [] }, paramsOptions), { packagePath: paramsOptions.packagePath && typeof paramsOptions.packagePath === 'string'
            ? [paramsOptions.packagePath]
            : paramsOptions.packagePath });
    const nodeModules = (0, utils_1.findDependencies)({
        packagePaths: options.packagePath
            ? options.packagePath
            : (0, utils_1.findPackagePaths)(),
        dependencies: options.dependencies,
        devDependencies: options.devDependencies,
        peerDependencies: options.peerDependencies,
        optionalDependencies: options.optionalDependencies,
        allowList: options.allowList,
    });
    return {
        name: 'node-externals',
        setup(build) {
            // On every module resolved, we check if the module name should be an external
            build.onResolve({ namespace: 'file', filter: /.*/ }, (args) => {
                // To allow allowList to target sub imports
                if (options.allowList.includes(args.path)) {
                    return null;
                }
                // To allow sub imports from packages we take only the first path to deduct the name
                let moduleName = args.path.split('/')[0];
                // In case of scoped package
                if (args.path.startsWith('@')) {
                    const split = args.path.split('/');
                    moduleName = `${split[0]}/${split[1]}`;
                }
                // Mark the module as external so it is not resolved
                if (nodeModules.includes(moduleName)) {
                    return { path: args.path, external: true };
                }
                return null;
            });
        },
    };
};
exports.nodeExternalsPlugin = nodeExternalsPlugin;
exports.default = exports.nodeExternalsPlugin;
//# sourceMappingURL=index.js.map