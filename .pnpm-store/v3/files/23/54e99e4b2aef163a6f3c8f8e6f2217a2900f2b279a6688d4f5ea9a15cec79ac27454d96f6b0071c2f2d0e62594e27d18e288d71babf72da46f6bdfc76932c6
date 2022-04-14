/**
 * Iterates over package.json file paths recursively found in parent directories, starting from the
 * current working directory. If the current working directory is in a git repository, then package.json
 * files outside of the git repository will not be yielded.
 * Inspired by https://github.com/Septh/rollup-plugin-node-externals/blob/f13ee95c6f1f01d8ba2276bf491aac399adc5482/src/dependencies.ts#L18
 */
export declare const findPackagePaths: () => string[];
/**
 * Return an array of the package.json dependencies that should be excluded from the build.
 */
export declare const findDependencies: (options: {
    packagePaths: string[];
    dependencies: boolean;
    devDependencies: boolean;
    peerDependencies: boolean;
    optionalDependencies: boolean;
    allowList: string[];
}) => string[];
