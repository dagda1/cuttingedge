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
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeScriptPath = exports.cleanTypeScriptInstalls = exports.installTypeScriptNext = exports.installAllTypeScriptVersions = void 0;
const assert = require("assert");
const child_process_1 = require("child_process");
const fs = __importStar(require("fs-extra"));
const os = __importStar(require("os"));
const path = __importStar(require("path"));
const typescript_versions_1 = require("@definitelytyped/typescript-versions");
const installsDir = path.join(os.homedir(), ".dts", "typescript-installs");
async function installAllTypeScriptVersions() {
    for (const v of typescript_versions_1.TypeScriptVersion.shipped) {
        await install(v);
    }
    await installTypeScriptNext();
}
exports.installAllTypeScriptVersions = installAllTypeScriptVersions;
async function installTypeScriptNext() {
    await install("next");
}
exports.installTypeScriptNext = installTypeScriptNext;
async function install(version) {
    if (version === "local") {
        return;
    }
    const dir = installDir(version);
    if (!(await fs.pathExists(dir))) {
        console.log(`Installing to ${dir}...`);
        await fs.mkdirp(dir);
        await fs.writeJson(path.join(dir, "package.json"), packageJson(version));
        await execAndThrowErrors("npm install --ignore-scripts --no-shrinkwrap --no-package-lock --no-bin-links", dir);
        console.log("Installed!");
        console.log("");
    }
}
function cleanTypeScriptInstalls() {
    return fs.remove(installsDir);
}
exports.cleanTypeScriptInstalls = cleanTypeScriptInstalls;
function typeScriptPath(version, tsLocal) {
    if (version === "local") {
        return tsLocal + "/typescript.js";
    }
    return path.join(installDir(version), "node_modules", "typescript");
}
exports.typeScriptPath = typeScriptPath;
function installDir(version) {
    assert(version !== "local");
    if (version === "next")
        version = typescript_versions_1.TypeScriptVersion.latest;
    return path.join(installsDir, version);
}
/** Run a command and return the stdout, or if there was an error, throw. */
async function execAndThrowErrors(cmd, cwd) {
    // tslint:disable-next-line:promise-must-complete
    return new Promise((resolve, reject) => {
        (0, child_process_1.exec)(cmd, { encoding: "utf8", cwd }, (err, _stdout, stderr) => {
            if (stderr) {
                console.error(stderr);
            }
            if (err) {
                reject(err);
            }
            else {
                resolve();
            }
        });
    });
}
function packageJson(version) {
    return {
        description: `Installs typescript@${version}`,
        repository: "N/A",
        license: "MIT",
        dependencies: {
            typescript: version
        }
    };
}
//# sourceMappingURL=typescript-installer.js.map