import type { IPackageJson } from '@ts-type/package-dts';
/**
 * @see RequireResolve
 */
export interface IOptions {
    paths?: string[];
}
export declare function resolvePackageCore(moduleName: string, options?: IOptions): {
    name: string;
    pkgRoot: string;
    entryPointLocation: string;
};
export declare function resolvePackageRoot(moduleName: string, options?: IOptions): string;
export declare function resolvePackageJsonLocation(moduleName: string, options?: IOptions): string;
export declare function createResolveLocationFn(moduleName: string, options?: IOptions): (path: string, ...paths: string[]) => string;
export declare function readModulePackageJson<P extends IPackageJson>(moduleName: string, options?: IOptions): P;
export declare function resolvePackage<P extends IPackageJson>(moduleName: string, options?: IOptions): {
    pkg: P;
    pkgJsonLocation: string;
    resolveLocation(path: string, ...paths: string[]): string;
    name: string;
    pkgRoot: string;
    entryPointLocation: string;
};
export default resolvePackage;
