/**
 * Created by user on 2017/12/9/009.
 */
/// <reference types="node" />
import { ParsedPath, PlatformPath } from 'path';
import { IPathNode, IPath, IParse, IPathType, ORIGIN_KEY, IPathPlatform } from './lib/type';
import * as types from './lib/type';
export type { IPathNode, IPath, IParse, IPathType };
export declare class PathWrap implements IPath {
    sep: string;
    name: string | IPathPlatform;
    delimiter: string;
    win32: IPath;
    posix: IPath;
    node: PlatformPath;
    upath: PathWrap;
    default: PathWrap;
    fn: IPath;
    [ORIGIN_KEY]?: IPathType;
    constructor(path: any, id: string);
    join<T = string, U = string>(path: T, ...paths: U[]): string;
    normalize<T extends string = string>(path: T): string;
    relative<T extends string = string, U extends string = string>(from: T, to: U): string;
    resolve<T = string, U = string>(path: T, ...paths: U[]): string;
    parse<T extends string = string>(path: T): ParsedPath;
    format<T = IParse>(pathObject: T): string;
    basename<T extends string = string, U extends string = string>(path: T, ext?: U): string;
    dirname<T extends string = string>(path: T): string;
    extname<T extends string = string>(path: T): string;
    isAbsolute<T extends string = string>(path: T): boolean;
    toNamespacedPath(path: string): any;
}
export declare namespace PathWrap {
    let fn: types.IPath;
    type IPath = types.IPath;
    type IPathNode = types.IPathNode;
    type IParse = types.IParse;
}
export declare const posix: IPath;
export declare const win32: IPath;
export declare type IUPath = PathWrap & {
    default: IUPath;
    upath: IUPath;
    PathWrap: typeof PathWrap;
};
export declare const upath: IUPath;
export declare const fn: IPath;
export default upath;
export declare function _this_origin(who: IPath): Pick<PathWrap, keyof IPathNode>;
