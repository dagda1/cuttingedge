import { Logger } from "./logging";
export declare const npmRegistryHostName = "registry.npmjs.org";
export declare const npmRegistry: string;
export declare const npmApi = "api.npmjs.org";
export declare type NpmInfoCache = ReadonlyMap<string, NpmInfo>;
export interface NpmInfoRaw {
    readonly "dist-tags": {
        readonly [tag: string]: string;
    };
    readonly versions: NpmInfoRawVersions;
    readonly time: {
        readonly [s: string]: string;
    };
    readonly homepage: string;
}
export interface NpmInfoRawVersions {
    readonly [version: string]: NpmInfoVersion;
}
export interface NpmInfo {
    readonly distTags: Map<string, string>;
    readonly versions: Map<string, NpmInfoVersion>;
    readonly time: Map<string, string>;
    readonly homepage: string;
}
export interface NpmInfoVersion {
    readonly typesPublisherContentHash?: string;
    readonly deprecated?: string;
}
export interface CachedNpmInfoClient {
    getNpmInfoFromCache(escapedPackageName: string): NpmInfo | undefined;
    fetchAndCacheNpmInfo(escapedPackageName: string): Promise<NpmInfo | undefined>;
}
export declare function withNpmCache<T>(uncachedClient: UncachedNpmInfoClient, cb: (client: CachedNpmInfoClient) => Promise<T>, cacheDir?: string): Promise<T>;
export declare class UncachedNpmInfoClient {
    private readonly fetcher;
    fetchNpmInfo(escapedPackageName: string): Promise<NpmInfo | undefined>;
    fetchRawNpmInfo(escapedPackageName: string): Promise<NpmInfoRaw | undefined>;
    getDownloads(packageNames: readonly string[]): Promise<readonly number[]>;
}
declare type NeedToFixNpmRegistryClientTypings = any;
export declare class NpmPublishClient {
    private readonly client;
    private readonly auth;
    private readonly registry;
    static create(token: string, config?: NeedToFixNpmRegistryClientTypings): Promise<NpmPublishClient>;
    private constructor();
    publish(publishedDirectory: string, packageJson: {}, dry: boolean, log: Logger): Promise<void>;
    tag(packageName: string, version: string, distTag: string, dry: boolean, log: Logger): Promise<void>;
    deprecate(packageName: string, version: string, message: string): Promise<void>;
}
export {};
