/// <reference types="node" />
/**
 * Created by user on 2018/3/30/030.
 */
import { ParsedPath, PlatformPath } from 'path';
export declare type IPathPlatformOrigin = 'win32' | 'posix';
export declare type IPathPlatform = IPathPlatformOrigin | 'upath' | 'node';
export declare const ORIGIN_KEY: unique symbol;
export interface IParse extends Partial<ParsedPath> {
}
export declare type IPathType = PlatformPath | IPath | IPathNode;
export interface IPathNode extends Pick<PlatformPath, 'toNamespacedPath' | 'delimiter' | 'sep' | 'isAbsolute' | 'extname' | 'dirname' | 'format' | 'parse' | 'resolve' | 'relative' | 'normalize' | 'join' | 'basename'> {
    win32?: IPathNode;
    posix?: IPathNode;
}
export interface IPath extends Omit<IPathNode, 'win32' | 'posix' | 'default'> {
    name?: string | IPathPlatform;
    win32?: IPath;
    posix?: IPath;
    upath?: IPath;
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
    fn?: IPath;
    default?: IPath;
    [ORIGIN_KEY]?: IPathType;
}
