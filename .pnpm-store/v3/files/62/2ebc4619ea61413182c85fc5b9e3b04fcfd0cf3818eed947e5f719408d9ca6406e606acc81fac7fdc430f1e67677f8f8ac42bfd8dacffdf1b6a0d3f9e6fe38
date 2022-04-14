"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiskFS = exports.InMemoryFS = exports.Dir = exports.joinPaths = exports.hasWindowsSlashes = exports.normalizeSlashes = void 0;
const assert_1 = __importDefault(require("assert"));
const assertions_1 = require("./assertions");
const fs_extra_1 = require("fs-extra");
const io_1 = require("./io");
/** Convert a path to use "/" instead of "\\" for consistency. (This affects content hash.) */
function normalizeSlashes(path) {
    return path.replace(/\\/g, "/");
}
exports.normalizeSlashes = normalizeSlashes;
function hasWindowsSlashes(path) {
    return path.includes("\\");
}
exports.hasWindowsSlashes = hasWindowsSlashes;
/** Always use "/" for consistency. (This affects package content hash.) */
function joinPaths(...paths) {
    return paths.join("/");
}
exports.joinPaths = joinPaths;
// Map entries are Dir for directory and string for file.
class Dir extends Map {
    constructor(parent) {
        super();
        this.parent = parent;
    }
    subdir(name) {
        const x = this.get(name);
        if (x !== undefined) {
            if (typeof x === "string") {
                throw new Error(`File ${name} has same name as a directory?`);
            }
            return x;
        }
        const res = new Dir(this);
        this.set(name, res);
        return res;
    }
    finish() {
        const out = new Dir(this.parent);
        for (const key of Array.from(this.keys()).sort()) {
            const subDirOrFile = this.get(key);
            out.set(key, typeof subDirOrFile === "string" ? subDirOrFile : subDirOrFile.finish());
        }
        return out;
    }
}
exports.Dir = Dir;
class InMemoryFS {
    /** pathToRoot is just for debugging */
    constructor(curDir, pathToRoot) {
        this.curDir = curDir;
        this.pathToRoot = pathToRoot;
    }
    tryGetEntry(path) {
        validatePath(path);
        if (path === "") {
            return this.curDir;
        }
        const components = path.split("/");
        const baseName = (0, assertions_1.assertDefined)(components.pop());
        let dir = this.curDir;
        for (const component of components) {
            const entry = component === ".." ? dir.parent : dir.get(component);
            if (entry === undefined) {
                return undefined;
            }
            if (!(entry instanceof Dir)) {
                throw new Error(`No file system entry at ${this.pathToRoot}/${path}. Siblings are: ${Array.from(dir.keys()).toString()}`);
            }
            dir = entry;
        }
        return dir.get(baseName);
    }
    getEntry(path) {
        const entry = this.tryGetEntry(path);
        if (entry === undefined) {
            throw new Error(`No file system entry at ${this.pathToRoot}/${path}`);
        }
        return entry;
    }
    getDir(dirPath) {
        const res = this.getEntry(dirPath);
        if (!(res instanceof Dir)) {
            throw new Error(`${this.pathToRoot}/${dirPath} is a file, not a directory.`);
        }
        return res;
    }
    readFile(filePath) {
        const res = this.getEntry(filePath);
        if (typeof res !== "string") {
            throw new Error(`${this.pathToRoot}/${filePath} is a directory, not a file.`);
        }
        return res;
    }
    readdir(dirPath) {
        return Array.from((dirPath === undefined ? this.curDir : this.getDir(dirPath)).keys());
    }
    readJson(path) {
        return JSON.parse(this.readFile(path));
    }
    isDirectory(path) {
        return typeof this.getEntry(path) !== "string";
    }
    exists(path) {
        return this.tryGetEntry(path) !== undefined;
    }
    subDir(path) {
        return new InMemoryFS(this.getDir(path), joinPaths(this.pathToRoot, path));
    }
    debugPath() {
        return this.pathToRoot;
    }
}
exports.InMemoryFS = InMemoryFS;
class DiskFS {
    constructor(rootPrefix) {
        this.rootPrefix = rootPrefix;
        (0, assert_1.default)(rootPrefix.endsWith("/"));
    }
    getPath(path) {
        if (path === undefined) {
            return this.rootPrefix;
        }
        validatePath(path);
        return this.rootPrefix + path;
    }
    readdir(dirPath) {
        return (0, fs_extra_1.readdirSync)(this.getPath(dirPath))
            .sort()
            .filter(name => name !== ".DS_Store");
    }
    isDirectory(dirPath) {
        return (0, fs_extra_1.statSync)(this.getPath(dirPath)).isDirectory();
    }
    readJson(path) {
        return (0, io_1.readJsonSync)(this.getPath(path));
    }
    readFile(path) {
        return (0, io_1.readFileSync)(this.getPath(path));
    }
    exists(path) {
        return (0, fs_extra_1.pathExistsSync)(this.getPath(path));
    }
    subDir(path) {
        return new DiskFS(`${this.rootPrefix}${path}/`);
    }
    debugPath() {
        return this.rootPrefix.slice(0, this.rootPrefix.length - 1); // remove trailing '/'
    }
}
exports.DiskFS = DiskFS;
/** FS only handles simple paths like `foo/bar` or `../foo`. No `./foo` or `/foo`. */
function validatePath(path) {
    if (path.startsWith(".") && path !== ".editorconfig" && !path.startsWith("../")) {
        throw new Error(`${path}: filesystem doesn't support paths of the form './x'.`);
    }
    if (path.startsWith("/")) {
        throw new Error(`${path}: filesystem doesn't support paths of the form '/xxx'.`);
    }
    if (path.endsWith("/")) {
        throw new Error(`${path}: filesystem doesn't support paths of the form 'xxx/'.`);
    }
}
//# sourceMappingURL=fs.js.map