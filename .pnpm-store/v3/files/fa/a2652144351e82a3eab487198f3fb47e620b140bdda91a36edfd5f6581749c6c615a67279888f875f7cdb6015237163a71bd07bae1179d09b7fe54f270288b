"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NpmPublishClient = exports.UncachedNpmInfoClient = exports.withNpmCache = exports.npmApi = exports.npmRegistry = exports.npmRegistryHostName = void 0;
const assert = require("assert");
const fs_extra_1 = require("fs-extra");
const npm_registry_client_1 = __importDefault(require("@qiwi/npm-registry-client"));
const url_1 = require("url");
const fs_1 = require("./fs");
const logging_1 = require("./logging");
const collections_1 = require("./collections");
const io_1 = require("./io");
const miscellany_1 = require("./miscellany");
exports.npmRegistryHostName = "registry.npmjs.org";
exports.npmRegistry = `https://${exports.npmRegistryHostName}/`;
exports.npmApi = "api.npmjs.org";
const defaultCacheDir = (0, fs_1.joinPaths)(__dirname, "..", "cache");
const cacheFileBasename = "npmInfo.json";
async function withNpmCache(uncachedClient, cb, cacheDir = defaultCacheDir) {
    const log = (0, logging_1.loggerWithErrors)()[0];
    const cacheFile = (0, fs_1.joinPaths)(cacheDir, cacheFileBasename);
    let unroll;
    log.info(`Checking for cache file at ${cacheFile}...`);
    const cacheFileExists = await (0, fs_extra_1.pathExists)(cacheFile);
    if (cacheFileExists) {
        log.info("Reading cache file...");
        const cachedJson = (await (0, fs_extra_1.readJson)(cacheFile));
        log.info(`Cache file ${cacheFile} exists, copying to map...`);
        unroll = (0, collections_1.recordToMap)(cachedJson, npmInfoFromJson);
    }
    else {
        log.info("Cache file doesn't exist, using empty map.");
        unroll = new Map();
    }
    const res = await cb({ getNpmInfoFromCache, fetchAndCacheNpmInfo });
    log.info("Writing npm cache.");
    await (0, fs_extra_1.ensureFile)(cacheFile);
    await (0, fs_extra_1.writeJson)(cacheFile, (0, collections_1.mapToRecord)(unroll, jsonFromNpmInfo));
    return res;
    /** May return old info -- caller should check that this looks up-to-date. */
    function getNpmInfoFromCache(escapedPackageName) {
        return unroll.get(escapedPackageName);
    }
    /** Call this when the result of getNpmInfoFromCache looks potentially out-of-date. */
    async function fetchAndCacheNpmInfo(escapedPackageName) {
        const info = await uncachedClient.fetchNpmInfo(escapedPackageName);
        if (info) {
            unroll.set(escapedPackageName, info);
        }
        return info;
    }
}
exports.withNpmCache = withNpmCache;
class UncachedNpmInfoClient {
    constructor() {
        this.fetcher = new io_1.Fetcher();
    }
    async fetchNpmInfo(escapedPackageName) {
        const raw = await this.fetchRawNpmInfo(escapedPackageName);
        await (0, miscellany_1.sleep)(0.01); // If we don't do this, npm resets the connection?
        return raw === undefined ? undefined : npmInfoFromJson(raw);
    }
    async fetchRawNpmInfo(escapedPackageName) {
        const info = (await this.fetcher.fetchJson({
            hostname: exports.npmRegistryHostName,
            path: escapedPackageName,
            retries: true
        }));
        if ("error" in info) {
            if (info.error === "Not found") {
                return undefined;
            }
            throw new Error(`Error getting version at ${escapedPackageName}: ${info.error}`);
        }
        if (!info["dist-tags"] && !info.versions) {
            // Unpublished
            return undefined;
        }
        return info;
    }
    // See https://github.com/npm/download-counts
    async getDownloads(packageNames) {
        // NPM uses a different API if there's only a single name, so ensure there's at least 2 for every batch of 128.
        const names = packageNames.length % 128 === 1 ? [...packageNames, "dummy"] : packageNames;
        const nameGroups = Array.from(splitToFixedSizeGroups(names, 128)); // NPM has a limit of 128 packages at a time.
        const out = [];
        for (const nameGroup of nameGroups) {
            const data = (await this.fetcher.fetchJson({
                hostname: exports.npmApi,
                path: `/downloads/point/last-month/${nameGroup.join(",")}`,
                retries: true
            }));
            if ("error" in data) {
                throw new Error(data.error);
            }
            for (const key of Object.keys(data)) {
                assert(key === names[out.length], `at index ${out.length} of ${Object.keys(data).toString()} : ${key} !== ${names[out.length]}`);
                out.push(data[key] ? data[key].downloads : 0);
            }
        }
        return out;
    }
}
exports.UncachedNpmInfoClient = UncachedNpmInfoClient;
function splitToFixedSizeGroups(names, chunkSize) {
    const out = [];
    for (let i = 0; i < names.length; i += chunkSize) {
        out.push(names.slice(i, i + chunkSize));
    }
    return out;
}
class NpmPublishClient {
    constructor(client, auth, registry) {
        this.client = client;
        this.auth = auth;
        this.registry = registry;
    }
    static async create(token, config) {
        return new NpmPublishClient(new npm_registry_client_1.default(config), { token }, exports.npmRegistry);
    }
    async publish(publishedDirectory, packageJson, dry, log) {
        const readme = await (0, fs_extra_1.readFile)((0, fs_1.joinPaths)(publishedDirectory, "README.md"));
        return new Promise((resolve, reject) => {
            const body = (0, io_1.createTgz)(publishedDirectory, reject);
            const metadata = { readme, ...packageJson };
            if (dry) {
                log(`(dry) Skip publish of ${publishedDirectory} to ${this.registry}`);
            }
            resolve(dry
                ? undefined
                : promisifyVoid(cb => {
                    this.client.publish(this.registry, {
                        access: "public",
                        auth: this.auth,
                        metadata: metadata,
                        body: body
                    }, cb);
                }));
        });
    }
    tag(packageName, version, distTag, dry, log) {
        if (dry) {
            log(`(dry) Skip tag of ${packageName}@${distTag} as ${version}`);
            return Promise.resolve();
        }
        return promisifyVoid(cb => {
            this.client.distTags.add(this.registry, { package: packageName, version, distTag, auth: this.auth }, cb);
        });
    }
    deprecate(packageName, version, message) {
        const url = (0, url_1.resolve)(exports.npmRegistry, packageName.replace("/", "%2f"));
        const params = {
            message,
            version,
            auth: this.auth
        };
        return promisifyVoid(cb => {
            this.client.deprecate(url, params, cb);
        });
    }
}
exports.NpmPublishClient = NpmPublishClient;
function npmInfoFromJson(n) {
    return {
        ...n,
        distTags: (0, collections_1.recordToMap)(n["dist-tags"], miscellany_1.identity),
        // Callback ensures we remove any other properties
        versions: (0, collections_1.recordToMap)(n.versions, ({ typesPublisherContentHash, deprecated }) => ({
            typesPublisherContentHash,
            deprecated
        })),
        time: (0, collections_1.recordToMap)(n.time)
    };
}
function jsonFromNpmInfo(n) {
    return {
        ...n,
        "dist-tags": (0, collections_1.mapToRecord)(n.distTags),
        versions: (0, collections_1.mapToRecord)(n.versions),
        time: (0, collections_1.mapToRecord)(n.time)
    };
}
function promisifyVoid(callsBack) {
    return new Promise((resolve, reject) => {
        callsBack(error => {
            if (error) {
                reject(error);
            }
            else {
                resolve();
            }
        });
    });
}
//# sourceMappingURL=npm.js.map