"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findDependencies = exports.findPackagePaths = void 0;
const tslib_1 = require("tslib");
const path_1 = (0, tslib_1.__importDefault)(require("path"));
const fs_1 = (0, tslib_1.__importDefault)(require("fs"));
const find_up_1 = (0, tslib_1.__importDefault)(require("find-up"));
/**
 * Determines if the `child` path is under the `parent` path.
 */
const isInDirectory = (parent, child) => {
    const relativePath = path_1.default.relative(parent, child);
    return !relativePath.startsWith('..') && !path_1.default.isAbsolute(relativePath);
};
const isInGitDirectory = (path, gitRootPath) => {
    return gitRootPath === undefined || isInDirectory(gitRootPath, path);
};
/**
 * Iterates over package.json file paths recursively found in parent directories, starting from the
 * current working directory. If the current working directory is in a git repository, then package.json
 * files outside of the git repository will not be yielded.
 * Inspired by https://github.com/Septh/rollup-plugin-node-externals/blob/f13ee95c6f1f01d8ba2276bf491aac399adc5482/src/dependencies.ts#L18
 */
const findPackagePaths = () => {
    // Find git root if in git repository
    const gitDirectoryPath = find_up_1.default.sync('.git', {
        type: 'directory',
    });
    const gitRootPath = gitDirectoryPath === undefined ? undefined : path_1.default.dirname(gitDirectoryPath);
    let cwd = process.cwd();
    let packagePath;
    const packagePaths = [];
    while ((packagePath = find_up_1.default.sync('package.json', { type: 'file', cwd })) &&
        isInGitDirectory(packagePath, gitRootPath)) {
        packagePaths.push(packagePath);
        cwd = path_1.default.dirname(path_1.default.dirname(packagePath));
    }
    return packagePaths;
};
exports.findPackagePaths = findPackagePaths;
/**
 * Return an array of the package.json dependencies that should be excluded from the build.
 */
const findDependencies = (options) => {
    const packageJsonKeys = [
        options.dependencies && 'dependencies',
        options.devDependencies && 'devDependencies',
        options.peerDependencies && 'peerDependencies',
        options.optionalDependencies && 'optionalDependencies',
    ].filter(Boolean);
    const data = options.packagePaths.map((packagePath) => {
        let packageJson;
        try {
            const packageJsonString = fs_1.default.readFileSync(packagePath, 'utf8');
            packageJson = JSON.parse(packageJsonString);
        }
        catch (error) {
            console.error(error);
            throw new Error(`Couldn't process ${packagePath}". Make sure it's a valid JSON.`);
        }
        return packageJsonKeys
            .map((key) => (packageJson[key] ? Object.keys(packageJson[key]) : []))
            .flat(1)
            .filter((packageName) => !options.allowList.includes(packageName));
    });
    return data.flat(1);
};
exports.findDependencies = findDependencies;
//# sourceMappingURL=utils.js.map