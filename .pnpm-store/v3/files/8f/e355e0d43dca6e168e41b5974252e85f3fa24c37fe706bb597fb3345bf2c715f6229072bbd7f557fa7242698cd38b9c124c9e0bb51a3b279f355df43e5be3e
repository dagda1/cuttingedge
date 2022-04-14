#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const header_parser_1 = require("@definitelytyped/header-parser");
const typescript_versions_1 = require("@definitelytyped/typescript-versions");
const assert = require("assert");
const fs_extra_1 = require("fs-extra");
const path_1 = require("path");
const utils_1 = require("@definitelytyped/utils");
const checks_1 = require("./checks");
const lint_1 = require("./lint");
const util_1 = require("./util");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const args = process.argv.slice(2);
        let dirPath = process.cwd();
        let onlyTestTsNext = false;
        let expectOnly = false;
        let shouldListen = false;
        let lookingForTsLocal = false;
        let tsLocal;
        for (const arg of args) {
            if (lookingForTsLocal) {
                if (arg.startsWith("--")) {
                    throw new Error("Looking for local path for TS, but got " + arg);
                }
                tsLocal = (0, path_1.resolve)(arg);
                lookingForTsLocal = false;
                continue;
            }
            switch (arg) {
                case "--installAll":
                    console.log("Cleaning old installs and installing for all TypeScript versions...");
                    console.log("Working...");
                    yield (0, utils_1.cleanTypeScriptInstalls)();
                    yield (0, utils_1.installAllTypeScriptVersions)();
                    return;
                case "--localTs":
                    lookingForTsLocal = true;
                    break;
                case "--version":
                    console.log(require("../package.json").version);
                    return;
                case "--expectOnly":
                    expectOnly = true;
                    break;
                case "--onlyTestTsNext":
                    onlyTestTsNext = true;
                    break;
                // Only for use by types-publisher.
                // Listens for { path, onlyTestTsNext } messages and ouputs { path, status }.
                case "--listen":
                    shouldListen = true;
                    break;
                default: {
                    if (arg.startsWith("--")) {
                        console.error(`Unknown option '${arg}'`);
                        usage();
                        process.exit(1);
                    }
                    const path = arg.indexOf("@") === 0 && arg.indexOf("/") !== -1
                        // we have a scoped module, e.g. @bla/foo
                        // which should be converted to   bla__foo
                        ? arg.substr(1).replace("/", "__")
                        : arg;
                    dirPath = (0, path_1.join)(dirPath, path);
                }
            }
        }
        if (lookingForTsLocal) {
            throw new Error("Path for --localTs was not provided.");
        }
        if (shouldListen) {
            listen(dirPath, tsLocal, onlyTestTsNext);
        }
        else {
            yield installTypeScriptAsNeeded(tsLocal, onlyTestTsNext);
            yield runTests(dirPath, onlyTestTsNext, expectOnly, tsLocal);
        }
    });
}
function installTypeScriptAsNeeded(tsLocal, onlyTestTsNext) {
    return __awaiter(this, void 0, void 0, function* () {
        if (tsLocal)
            return;
        if (onlyTestTsNext) {
            return (0, utils_1.installTypeScriptNext)();
        }
        return (0, utils_1.installAllTypeScriptVersions)();
    });
}
function usage() {
    console.error("Usage: dtslint [--version] [--installAll] [--onlyTestTsNext] [--expectOnly] [--localTs path]");
    console.error("Args:");
    console.error("  --version        Print version and exit.");
    console.error("  --installAll     Cleans and installs all TypeScript versions.");
    console.error("  --expectOnly     Run only the ExpectType lint rule.");
    console.error("  --onlyTestTsNext Only run with `typescript@next`, not with the minimum version.");
    console.error("  --localTs path   Run with *path* as the latest version of TS.");
    console.error("");
    console.error("onlyTestTsNext and localTs are (1) mutually exclusive and (2) test a single version of TS");
}
function listen(dirPath, tsLocal, alwaysOnlyTestTsNext) {
    // Don't await this here to ensure that messages sent during installation aren't dropped.
    const installationPromise = installTypeScriptAsNeeded(tsLocal, alwaysOnlyTestTsNext);
    process.on("message", (message) => __awaiter(this, void 0, void 0, function* () {
        const { path, onlyTestTsNext, expectOnly } = message;
        yield installationPromise;
        runTests((0, path_1.join)(dirPath, path), onlyTestTsNext, !!expectOnly, tsLocal)
            .catch(e => e.stack)
            .then(maybeError => {
            process.send({ path, status: maybeError === undefined ? "OK" : maybeError });
        })
            .catch(e => console.error(e.stack));
    }));
}
function runTests(dirPath, onlyTestTsNext, expectOnly, tsLocal) {
    return __awaiter(this, void 0, void 0, function* () {
        const isOlderVersion = /^v(0\.)?\d+$/.test((0, path_1.basename)(dirPath));
        const indexText = yield (0, fs_extra_1.readFile)((0, path_1.join)(dirPath, "index.d.ts"), "utf-8");
        // If this *is* on DefinitelyTyped, types-publisher will fail if it can't parse the header.
        const dt = indexText.includes("// Type definitions for");
        if (dt) {
            // Someone may have copied text from DefinitelyTyped to their type definition and included a header,
            // so assert that we're really on DefinitelyTyped.
            assertPathIsInDefinitelyTyped(dirPath);
            assertPathIsNotBanned(dirPath);
        }
        const typesVersions = yield (0, util_1.mapDefinedAsync)(yield (0, fs_extra_1.readdir)(dirPath), (name) => __awaiter(this, void 0, void 0, function* () {
            if (name === "tsconfig.json" || name === "tslint.json" || name === "tsutils") {
                return undefined;
            }
            const version = (0, util_1.withoutPrefix)(name, "ts");
            if (version === undefined || !(yield (0, fs_extra_1.stat)((0, path_1.join)(dirPath, name))).isDirectory()) {
                return undefined;
            }
            if (!typescript_versions_1.TypeScriptVersion.isTypeScriptVersion(version)) {
                throw new Error(`There is an entry named ${name}, but ${version} is not a valid TypeScript version.`);
            }
            if (!typescript_versions_1.TypeScriptVersion.isRedirectable(version)) {
                throw new Error(`At ${dirPath}/${name}: TypeScript version directories only available starting with ts3.1.`);
            }
            return version;
        }));
        if (dt) {
            yield (0, checks_1.checkPackageJson)(dirPath, typesVersions);
        }
        const minVersion = maxVersion(getMinimumTypeScriptVersionFromComment(indexText), typescript_versions_1.TypeScriptVersion.lowest);
        if (onlyTestTsNext || tsLocal) {
            const tsVersion = tsLocal ? "local" : typescript_versions_1.TypeScriptVersion.latest;
            yield testTypesVersion(dirPath, tsVersion, tsVersion, isOlderVersion, dt, expectOnly, tsLocal, /*isLatest*/ true);
        }
        else {
            // For example, typesVersions of [3.2, 3.5, 3.6] will have
            // associated ts3.2, ts3.5, ts3.6 directories, for
            // <=3.2, <=3.5, <=3.6 respectively; the root level is for 3.7 and above.
            // so this code needs to generate ranges [lowest-3.2, 3.3-3.5, 3.6-3.6, 3.7-latest]
            const lows = [typescript_versions_1.TypeScriptVersion.lowest, ...typesVersions.map(next)];
            const his = [...typesVersions, typescript_versions_1.TypeScriptVersion.latest];
            assert.strictEqual(lows.length, his.length);
            for (let i = 0; i < lows.length; i++) {
                const low = maxVersion(minVersion, lows[i]);
                const hi = his[i];
                assert(parseFloat(hi) >= parseFloat(low), `'// Minimum TypeScript Version: ${minVersion}' in header skips ts${hi} folder.`);
                const isLatest = hi === typescript_versions_1.TypeScriptVersion.latest;
                const versionPath = isLatest ? dirPath : (0, path_1.join)(dirPath, `ts${hi}`);
                if (lows.length > 1) {
                    console.log("testing from", low, "to", hi, "in", versionPath);
                }
                yield testTypesVersion(versionPath, low, hi, isOlderVersion, dt, expectOnly, undefined, isLatest);
            }
        }
    });
}
function maxVersion(v1, v2) {
    if (!v1)
        return v2;
    if (!v2)
        return v1;
    if (parseFloat(v1) >= parseFloat(v2))
        return v1;
    return v2;
}
function next(v) {
    const index = typescript_versions_1.TypeScriptVersion.supported.indexOf(v);
    assert.notStrictEqual(index, -1);
    assert(index < typescript_versions_1.TypeScriptVersion.supported.length);
    return typescript_versions_1.TypeScriptVersion.supported[index + 1];
}
function testTypesVersion(dirPath, lowVersion, hiVersion, isOlderVersion, dt, expectOnly, tsLocal, isLatest) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, lint_1.checkTslintJson)(dirPath, dt);
        yield (0, checks_1.checkTsconfig)(dirPath, dt
            ? { relativeBaseUrl: ".." + (isOlderVersion ? "/.." : "") + (isLatest ? "" : "/..") + "/" }
            : undefined);
        const err = yield (0, lint_1.lint)(dirPath, lowVersion, hiVersion, isLatest, expectOnly, tsLocal);
        if (err) {
            throw new Error(err);
        }
    });
}
function assertPathIsInDefinitelyTyped(dirPath) {
    const parent = (0, path_1.dirname)(dirPath);
    const types = /^v\d+(\.\d+)?$/.test((0, path_1.basename)(dirPath)) ? (0, path_1.dirname)(parent) : parent;
    // TODO: It's not clear whether this assertion makes sense, and it's broken on Azure Pipelines
    // Re-enable it later if it makes sense.
    // const dt = dirname(types);
    // if (basename(dt) !== "DefinitelyTyped" || basename(types) !== "types") {
    if ((0, path_1.basename)(types) !== "types") {
        throw new Error("Since this type definition includes a header (a comment starting with `// Type definitions for`), "
            + "assumed this was a DefinitelyTyped package.\n"
            + "But it is not in a `DefinitelyTyped/types/xxx` directory: "
            + dirPath);
    }
}
function assertPathIsNotBanned(dirPath) {
    const basedir = (0, path_1.basename)(dirPath);
    if (/(^|\W)download($|\W)/.test(basedir) &&
        basedir !== "download" &&
        basedir !== "downloadjs" &&
        basedir !== "s3-download-stream") {
        // Since npm won't release their banned-words list, we'll have to manually add to this list.
        throw new Error(`${dirPath}: Contains the word 'download', which is banned by npm.`);
    }
}
function getMinimumTypeScriptVersionFromComment(text) {
    const match = text.match(/\/\/ (?:Minimum )?TypeScript Version: /);
    if (!match) {
        return undefined;
    }
    let line = text.slice(match.index, text.indexOf("\n", match.index));
    if (line.endsWith("\r")) {
        line = line.slice(0, line.length - 1);
    }
    return (0, header_parser_1.parseTypeScriptVersionLine)(line);
}
if (!module.parent) {
    main().catch(err => {
        console.error(err.stack);
        process.exit(1);
    });
}
//# sourceMappingURL=index.js.map