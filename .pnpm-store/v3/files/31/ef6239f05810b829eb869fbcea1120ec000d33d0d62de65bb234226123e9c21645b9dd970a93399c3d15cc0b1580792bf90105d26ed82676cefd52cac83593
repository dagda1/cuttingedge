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
exports.checkTslintJson = exports.isExternalDependency = exports.lint = void 0;
const typescript_versions_1 = require("@definitelytyped/typescript-versions");
const utils_1 = require("@definitelytyped/utils");
const assert = require("assert");
const fs_extra_1 = require("fs-extra");
const path_1 = require("path");
const tslint_1 = require("tslint");
const expectRule_1 = require("./rules/expectRule");
const util_1 = require("./util");
function lint(dirPath, minVersion, maxVersion, isLatest, expectOnly, tsLocal) {
    return __awaiter(this, void 0, void 0, function* () {
        const tsconfigPath = (0, path_1.join)(dirPath, "tsconfig.json");
        const lintProgram = tslint_1.Linter.createProgram(tsconfigPath);
        for (const version of [maxVersion, minVersion]) {
            const errors = testDependencies(version, dirPath, lintProgram, tsLocal);
            if (errors) {
                return errors;
            }
        }
        const lintOptions = {
            fix: false,
            formatter: "stylish",
        };
        const linter = new tslint_1.Linter(lintOptions, lintProgram);
        const configPath = expectOnly ? (0, path_1.join)(__dirname, "..", "dtslint-expect-only.json") : getConfigPath(dirPath);
        const config = yield getLintConfig(configPath, tsconfigPath, minVersion, maxVersion, tsLocal);
        for (const file of lintProgram.getSourceFiles()) {
            if (lintProgram.isSourceFileDefaultLibrary(file)) {
                continue;
            }
            const { fileName, text } = file;
            if (!fileName.includes("node_modules")) {
                const err = testNoTsIgnore(text) || testNoTslintDisables(text);
                if (err) {
                    const { pos, message } = err;
                    const place = file.getLineAndCharacterOfPosition(pos);
                    return `At ${fileName}:${JSON.stringify(place)}: ${message}`;
                }
            }
            // External dependencies should have been handled by `testDependencies`;
            // typesVersions should be handled in a separate lint
            if (!isExternalDependency(file, dirPath, lintProgram) &&
                (!isLatest || !isTypesVersionPath(fileName, dirPath))) {
                linter.lint(fileName, text, config);
            }
        }
        const result = linter.getResult();
        return result.failures.length ? result.output : undefined;
    });
}
exports.lint = lint;
function testDependencies(version, dirPath, lintProgram, tsLocal) {
    const tsconfigPath = (0, path_1.join)(dirPath, "tsconfig.json");
    assert(version !== "local" || tsLocal);
    const ts = require((0, utils_1.typeScriptPath)(version, tsLocal));
    const program = (0, expectRule_1.getProgram)(tsconfigPath, ts, version, lintProgram);
    const diagnostics = ts.getPreEmitDiagnostics(program).filter(d => !d.file || isExternalDependency(d.file, dirPath, program));
    if (!diagnostics.length) {
        return undefined;
    }
    const showDiags = ts.formatDiagnostics(diagnostics, {
        getCanonicalFileName: f => f,
        getCurrentDirectory: () => dirPath,
        getNewLine: () => "\n",
    });
    const message = `Errors in typescript@${version} for external dependencies:\n${showDiags}`;
    // Add an edge-case for someone needing to `npm install` in react when they first edit a DT module which depends on it - #226
    const cannotFindDepsDiags = diagnostics.find(d => d.code === 2307 && d.messageText.toString().includes("Cannot find module"));
    if (cannotFindDepsDiags && cannotFindDepsDiags.file) {
        const path = cannotFindDepsDiags.file.fileName;
        const typesFolder = (0, path_1.dirname)(path);
        return `
A module look-up failed, this often occurs when you need to run \`npm install\` on a dependent module before you can lint.

Before you debug, first try running:

   npm install --prefix ${typesFolder}

Then re-run. Full error logs are below.

${message}`;
    }
    else {
        return message;
    }
}
function isExternalDependency(file, dirPath, program) {
    return !startsWithDirectory(file.fileName, dirPath) || program.isSourceFileFromExternalLibrary(file);
}
exports.isExternalDependency = isExternalDependency;
function normalizePath(file) {
    // replaces '\' with '/' and forces all DOS drive letters to be upper-case
    return (0, path_1.normalize)(file)
        .replace(/\\/g, "/")
        .replace(/^[a-z](?=:)/, c => c.toUpperCase());
}
function isTypesVersionPath(fileName, dirPath) {
    const normalFileName = normalizePath(fileName);
    const normalDirPath = normalizePath(dirPath);
    const subdirPath = (0, util_1.withoutPrefix)(normalFileName, normalDirPath);
    return subdirPath && /^\/ts\d+\.\d/.test(subdirPath);
}
function startsWithDirectory(filePath, dirPath) {
    const normalFilePath = normalizePath(filePath);
    const normalDirPath = normalizePath(dirPath).replace(/\/$/, "");
    return normalFilePath.startsWith(normalDirPath + "/") || normalFilePath.startsWith(normalDirPath + "\\");
}
function testNoTsIgnore(text) {
    const tsIgnore = "ts-ignore";
    const pos = text.indexOf(tsIgnore);
    return pos === -1 ? undefined : { pos, message: "'ts-ignore' is forbidden." };
}
function testNoTslintDisables(text) {
    const tslintDisable = "tslint:disable";
    let lastIndex = 0;
    // eslint-disable-next-line no-constant-condition
    while (true) {
        const pos = text.indexOf(tslintDisable, lastIndex);
        if (pos === -1) {
            return undefined;
        }
        const end = pos + tslintDisable.length;
        const nextChar = text.charAt(end);
        if (nextChar !== "-" && nextChar !== ":") {
            const message = "'tslint:disable' is forbidden. " +
                "('tslint:disable:rulename', tslint:disable-line' and 'tslint:disable-next-line' are allowed.)";
            return { pos, message };
        }
        lastIndex = end;
    }
}
function checkTslintJson(dirPath, dt) {
    return __awaiter(this, void 0, void 0, function* () {
        const configPath = getConfigPath(dirPath);
        const shouldExtend = `dtslint/${dt ? "dt" : "dtslint"}.json`;
        const validateExtends = (extend) => extend === shouldExtend || (!dt && Array.isArray(extend) && extend.some(val => val === shouldExtend));
        if (!(yield (0, fs_extra_1.pathExists)(configPath))) {
            if (dt) {
                throw new Error(`On DefinitelyTyped, must include \`tslint.json\` containing \`{ "extends": "${shouldExtend}" }\`.\n` +
                    "This was inferred as a DefinitelyTyped package because it contains a `// Type definitions for` header.");
            }
            return;
        }
        const tslintJson = yield (0, util_1.readJson)(configPath);
        if (!validateExtends(tslintJson.extends)) {
            throw new Error(`If 'tslint.json' is present, it should extend "${shouldExtend}"`);
        }
    });
}
exports.checkTslintJson = checkTslintJson;
function getConfigPath(dirPath) {
    return (0, path_1.join)(dirPath, "tslint.json");
}
function getLintConfig(expectedConfigPath, tsconfigPath, minVersion, maxVersion, tsLocal) {
    return __awaiter(this, void 0, void 0, function* () {
        const configExists = yield (0, fs_extra_1.pathExists)(expectedConfigPath);
        const configPath = configExists ? expectedConfigPath : (0, path_1.join)(__dirname, "..", "dtslint.json");
        // Second param to `findConfiguration` doesn't matter, since config path is provided.
        const config = tslint_1.Configuration.findConfiguration(configPath, "").results;
        if (!config) {
            throw new Error(`Could not load config at ${configPath}`);
        }
        const expectRule = config.rules.get("expect");
        if (!expectRule || expectRule.ruleSeverity !== "error") {
            throw new Error("'expect' rule should be enabled, else compile errors are ignored");
        }
        if (expectRule) {
            const versionsToTest = range(minVersion, maxVersion).map(versionName => ({ versionName, path: (0, utils_1.typeScriptPath)(versionName, tsLocal) }));
            const expectOptions = { tsconfigPath, versionsToTest };
            expectRule.ruleArguments = [expectOptions];
        }
        return config;
    });
}
function range(minVersion, maxVersion) {
    if (minVersion === "local") {
        assert(maxVersion === "local");
        return ["local"];
    }
    if (minVersion === typescript_versions_1.TypeScriptVersion.latest) {
        assert(maxVersion === typescript_versions_1.TypeScriptVersion.latest);
        return [typescript_versions_1.TypeScriptVersion.latest];
    }
    assert(maxVersion !== "local");
    const minIdx = typescript_versions_1.TypeScriptVersion.shipped.indexOf(minVersion);
    assert(minIdx >= 0);
    if (maxVersion === typescript_versions_1.TypeScriptVersion.latest) {
        return [...typescript_versions_1.TypeScriptVersion.shipped.slice(minIdx), typescript_versions_1.TypeScriptVersion.latest];
    }
    const maxIdx = typescript_versions_1.TypeScriptVersion.shipped.indexOf(maxVersion);
    assert(maxIdx >= minIdx);
    return typescript_versions_1.TypeScriptVersion.shipped.slice(minIdx, maxIdx + 1);
}
//# sourceMappingURL=lint.js.map