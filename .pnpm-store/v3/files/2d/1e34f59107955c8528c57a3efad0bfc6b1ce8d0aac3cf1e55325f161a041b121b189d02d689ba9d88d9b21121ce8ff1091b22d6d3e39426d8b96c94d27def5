"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sleep = exports.hasVersionNumberInMapping = exports.removeVersionFromPackageName = exports.mangleScopedPackage = exports.unmangleScopedPackage = exports.isScopedPackage = exports.computeHash = exports.withoutStart = exports.isObject = exports.identity = exports.parseJson = exports.tryParseJson = void 0;
const crypto_1 = __importDefault(require("crypto"));
function tryParseJson(text, predicate) {
    try {
        return parseJson(text, predicate);
    }
    catch (_a) {
        return undefined;
    }
}
exports.tryParseJson = tryParseJson;
function parseJson(text, predicate = (_) => true) {
    let parsed;
    try {
        parsed = JSON.parse(text);
    }
    catch (err) {
        throw new Error(`${err.message} due to JSON: ${text}`);
    }
    if (!predicate(parsed)) {
        throw new Error("Parsed JSON did not match required form");
    }
    return parsed;
}
exports.parseJson = parseJson;
function identity(t) {
    return t;
}
exports.identity = identity;
function isObject(value) {
    return !!value && typeof value === "object";
}
exports.isObject = isObject;
function withoutStart(s, start) {
    return s.startsWith(start) ? s.slice(start.length) : undefined;
}
exports.withoutStart = withoutStart;
function computeHash(content) {
    // Normalize line endings
    const normalContent = content.replace(/\r\n?/g, "\n");
    const h = crypto_1.default.createHash("sha256");
    h.update(normalContent, "utf8");
    return h.digest("hex");
}
exports.computeHash = computeHash;
function isScopedPackage(packageName) {
    return packageName.startsWith("@");
}
exports.isScopedPackage = isScopedPackage;
// Based on `getPackageNameFromAtTypesDirectory` in TypeScript.
function unmangleScopedPackage(packageName) {
    const separator = "__";
    return packageName.includes(separator) ? `@${packageName.replace(separator, "/")}` : undefined;
}
exports.unmangleScopedPackage = unmangleScopedPackage;
// Reverts unmangleScopedPackage.
function mangleScopedPackage(packageName) {
    return isScopedPackage(packageName) ? packageName.replace(/\//, "__").replace("@", "") : packageName;
}
exports.mangleScopedPackage = mangleScopedPackage;
function removeVersionFromPackageName(packageName) {
    return packageName === null || packageName === void 0 ? void 0 : packageName.replace(/\/v\d+(\.\d+)?(\/\*)?$/, "$2");
}
exports.removeVersionFromPackageName = removeVersionFromPackageName;
function hasVersionNumberInMapping(packageName) {
    return /\/v\d+(\.\d+)?(\/\*)?$/.test(packageName);
}
exports.hasVersionNumberInMapping = hasVersionNumberInMapping;
async function sleep(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}
exports.sleep = sleep;
//# sourceMappingURL=miscellany.js.map