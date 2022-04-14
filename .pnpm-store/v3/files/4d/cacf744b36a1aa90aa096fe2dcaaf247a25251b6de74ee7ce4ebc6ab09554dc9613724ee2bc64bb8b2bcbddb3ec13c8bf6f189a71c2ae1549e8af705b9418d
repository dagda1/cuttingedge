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
exports.checkTsconfig = exports.checkPackageJson = void 0;
const header_parser_1 = require("@definitelytyped/header-parser");
const assert = require("assert");
const fs_extra_1 = require("fs-extra");
const path_1 = require("path");
const util_1 = require("./util");
function checkPackageJson(dirPath, typesVersions) {
    return __awaiter(this, void 0, void 0, function* () {
        const pkgJsonPath = (0, path_1.join)(dirPath, "package.json");
        const needsTypesVersions = typesVersions.length !== 0;
        if (!(yield (0, fs_extra_1.pathExists)(pkgJsonPath))) {
            if (needsTypesVersions) {
                throw new Error(`${dirPath}: Must have 'package.json' for "typesVersions"`);
            }
            return;
        }
        const pkgJson = yield (0, util_1.readJson)(pkgJsonPath);
        if (pkgJson.private !== true) {
            throw new Error(`${pkgJsonPath} should set \`"private": true\``);
        }
        if (needsTypesVersions) {
            assert.strictEqual(pkgJson.types, "index", `"types" in '${pkgJsonPath}' should be "index".`);
            const expected = (0, header_parser_1.makeTypesVersionsForPackageJson)(typesVersions);
            assert.deepEqual(pkgJson.typesVersions, expected, `"typesVersions" in '${pkgJsonPath}' is not set right. Should be: ${JSON.stringify(expected, undefined, 4)}`);
        }
        for (const key in pkgJson) { // tslint:disable-line forin
            switch (key) {
                case "private":
                case "dependencies":
                case "license":
                case "imports":
                case "exports":
                case "type":
                    // "private"/"typesVersions"/"types" checked above, "dependencies" / "license" checked by types-publisher,
                    break;
                case "typesVersions":
                case "types":
                    if (!needsTypesVersions) {
                        throw new Error(`${pkgJsonPath} doesn't need to set "${key}" when no 'ts3.x' directories exist.`);
                    }
                    break;
                default:
                    throw new Error(`${pkgJsonPath} should not include field ${key}`);
            }
        }
    });
}
exports.checkPackageJson = checkPackageJson;
function checkTsconfig(dirPath, dt) {
    return __awaiter(this, void 0, void 0, function* () {
        const options = yield (0, util_1.getCompilerOptions)(dirPath);
        if (dt) {
            const { relativeBaseUrl } = dt;
            const mustHave = {
                module: "commonjs",
                noEmit: true,
                forceConsistentCasingInFileNames: true,
                baseUrl: relativeBaseUrl,
                typeRoots: [relativeBaseUrl],
                types: [],
            };
            for (const key of Object.getOwnPropertyNames(mustHave)) {
                const expected = mustHave[key];
                const actual = options[key];
                if (!deepEquals(expected, actual)) {
                    throw new Error(`Expected compilerOptions[${JSON.stringify(key)}] === ${JSON.stringify(expected)}`);
                }
            }
            for (const key in options) { // tslint:disable-line forin
                switch (key) {
                    case "lib":
                    case "noImplicitAny":
                    case "noImplicitThis":
                    case "strict":
                    case "strictNullChecks":
                    case "noUncheckedIndexedAccess":
                    case "strictFunctionTypes":
                    case "esModuleInterop":
                    case "allowSyntheticDefaultImports":
                        // Allow any value
                        break;
                    case "target":
                    case "paths":
                    case "jsx":
                    case "jsxFactory":
                    case "experimentalDecorators":
                    case "noUnusedLocals":
                    case "noUnusedParameters":
                        // OK. "paths" checked further by types-publisher
                        break;
                    default:
                        if (!(key in mustHave)) {
                            throw new Error(`Unexpected compiler option ${key}`);
                        }
                }
            }
        }
        if (!("lib" in options)) {
            throw new Error('Must specify "lib", usually to `"lib": ["es6"]` or `"lib": ["es6", "dom"]`.');
        }
        if ("strict" in options) {
            if (options.strict !== true) {
                throw new Error('When "strict" is present, it must be set to `true`.');
            }
            for (const key of ["noImplicitAny", "noImplicitThis", "strictNullChecks", "strictFunctionTypes"]) {
                if (key in options) {
                    throw new TypeError(`Expected "${key}" to not be set when "strict" is \`true\`.`);
                }
            }
        }
        else {
            for (const key of ["noImplicitAny", "noImplicitThis", "strictNullChecks", "strictFunctionTypes"]) {
                if (!(key in options)) {
                    throw new Error(`Expected \`"${key}": true\` or \`"${key}": false\`.`);
                }
            }
        }
        if (options.types && options.types.length) {
            throw new Error('Use `/// <reference types="..." />` directives in source files and ensure ' +
                'that the "types" field in your tsconfig is an empty array.');
        }
    });
}
exports.checkTsconfig = checkTsconfig;
function deepEquals(expected, actual) {
    if (expected instanceof Array) {
        return actual instanceof Array
            && actual.length === expected.length
            && expected.every((e, i) => deepEquals(e, actual[i]));
    }
    else {
        return expected === actual;
    }
}
//# sourceMappingURL=checks.js.map