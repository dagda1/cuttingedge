/** Convert a path to use "/" instead of "\\" for consistency. (This affects content hash.) */
export declare function normalizeSlashes(path: string): string;
export declare function hasWindowsSlashes(path: string): boolean;
/** Always use "/" for consistency. (This affects package content hash.) */
export declare function joinPaths(...paths: string[]): string;
/**
 * Readonly filesystem.
 * Paths provided to these methods should be relative to the FS object's root but not start with '/' or './'.
 */
export interface FS {
    /**
     * Alphabetically sorted list of files and subdirectories.
     * If dirPath is missing, reads the root.
     */
    readdir(dirPath?: string): readonly string[];
    readJson(path: string): unknown;
    readFile(path: string): string;
    isDirectory(dirPath: string): boolean;
    exists(path: string): boolean;
    /** FileSystem rooted at a child directory. */
    subDir(path: string): FS;
    /** Representation of current location, for debugging. */
    debugPath(): string;
}
interface ReadonlyDir extends ReadonlyMap<string, ReadonlyDir | string> {
    readonly parent: Dir | undefined;
}
export declare class Dir extends Map<string, Dir | string> implements ReadonlyDir {
    readonly parent: Dir | undefined;
    constructor(parent: Dir | undefined);
    subdir(name: string): Dir;
    finish(): Dir;
}
export declare class InMemoryFS implements FS {
    readonly curDir: ReadonlyDir;
    readonly pathToRoot: string;
    /** pathToRoot is just for debugging */
    constructor(curDir: ReadonlyDir, pathToRoot: string);
    private tryGetEntry;
    private getEntry;
    private getDir;
    readFile(filePath: string): string;
    readdir(dirPath?: string): readonly string[];
    readJson(path: string): unknown;
    isDirectory(path: string): boolean;
    exists(path: string): boolean;
    subDir(path: string): FS;
    debugPath(): string;
}
export declare class DiskFS implements FS {
    private readonly rootPrefix;
    constructor(rootPrefix: string);
    private getPath;
    readdir(dirPath?: string): readonly string[];
    isDirectory(dirPath: string): boolean;
    readJson(path: string): unknown;
    readFile(path: string): string;
    exists(path: string): boolean;
    subDir(path: string): FS;
    debugPath(): string;
}
export {};
