"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.isMainFile = exports.mapDefinedAsync = exports.assertDefined = exports.last = exports.withoutPrefix = exports.getCompilerOptions = exports.getModuleDeclarationStatements = exports.eachModuleStatement = exports.getCommonDirectoryName = exports.failure = exports.readJson = void 0;
const assert = require("assert");
const fs_extra_1 = require("fs-extra");
const path_1 = require("path");
const stripJsonComments = require("strip-json-comments");
const ts = __importStar(require("typescript"));
function readJson(path) {
    return __awaiter(this, void 0, void 0, function* () {
        const text = yield (0, fs_extra_1.readFile)(path, "utf-8");
        return JSON.parse(stripJsonComments(text));
    });
}
exports.readJson = readJson;
function failure(ruleName, s) {
    return `${s} See: https://github.com/Microsoft/dtslint/blob/master/docs/${ruleName}.md`;
}
exports.failure = failure;
function getCommonDirectoryName(files) {
    let minLen = 999;
    let minDir = "";
    for (const file of files) {
        const dir = (0, path_1.dirname)(file);
        if (dir.length < minLen) {
            minDir = dir;
            minLen = dir.length;
        }
    }
    return (0, path_1.basename)(minDir);
}
exports.getCommonDirectoryName = getCommonDirectoryName;
function eachModuleStatement(sourceFile, action) {
    if (!sourceFile.isDeclarationFile) {
        return;
    }
    for (const node of sourceFile.statements) {
        if (ts.isModuleDeclaration(node)) {
            const statements = getModuleDeclarationStatements(node);
            if (statements) {
                for (const statement of statements) {
                    action(statement);
                }
            }
        }
        else {
            action(node);
        }
    }
}
exports.eachModuleStatement = eachModuleStatement;
function getModuleDeclarationStatements(node) {
    let { body } = node;
    while (body && body.kind === ts.SyntaxKind.ModuleDeclaration) {
        body = body.body;
    }
    return body && ts.isModuleBlock(body) ? body.statements : undefined;
}
exports.getModuleDeclarationStatements = getModuleDeclarationStatements;
function getCompilerOptions(dirPath) {
    return __awaiter(this, void 0, void 0, function* () {
        const tsconfigPath = (0, path_1.join)(dirPath, "tsconfig.json");
        if (!(yield (0, fs_extra_1.pathExists)(tsconfigPath))) {
            throw new Error(`Need a 'tsconfig.json' file in ${dirPath}`);
        }
        return (yield readJson(tsconfigPath)).compilerOptions;
    });
}
exports.getCompilerOptions = getCompilerOptions;
function withoutPrefix(s, prefix) {
    return s.startsWith(prefix) ? s.slice(prefix.length) : undefined;
}
exports.withoutPrefix = withoutPrefix;
function last(a) {
    assert(a.length !== 0);
    return a[a.length - 1];
}
exports.last = last;
function assertDefined(a) {
    if (a === undefined) {
        throw new Error();
    }
    return a;
}
exports.assertDefined = assertDefined;
function mapDefinedAsync(arr, mapper) {
    return __awaiter(this, void 0, void 0, function* () {
        const out = [];
        for (const a of arr) {
            const res = yield mapper(a);
            if (res !== undefined) {
                out.push(res);
            }
        }
        return out;
    });
}
exports.mapDefinedAsync = mapDefinedAsync;
function isMainFile(fileName, allowNested) {
    // Linter may be run with cwd of the package. We want `index.d.ts` but not `submodule/index.d.ts` to match.
    if (fileName === "index.d.ts") {
        return true;
    }
    if ((0, path_1.basename)(fileName) !== "index.d.ts") {
        return false;
    }
    let parent = (0, path_1.dirname)(fileName);
    // May be a directory for an older version, e.g. `v0`.
    // Note a types redirect `foo/ts3.1` should not have its own header.
    if (allowNested && /^v(0\.)?\d+$/.test((0, path_1.basename)(parent))) {
        parent = (0, path_1.dirname)(parent);
    }
    // Allow "types/foo/index.d.ts", not "types/foo/utils/index.d.ts"
    return (0, path_1.basename)((0, path_1.dirname)(parent)) === "types";
}
exports.isMainFile = isMainFile;
//# sourceMappingURL=util.js.map