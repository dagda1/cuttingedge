"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeScriptVersion = void 0;
const assert_1 = __importDefault(require("assert"));
var TypeScriptVersion;
(function (TypeScriptVersion) {
    /** Add to this list when a version actually ships.  */
    TypeScriptVersion.shipped = ["3.9", "4.0", "4.1", "4.2", "4.3", "4.4", "4.5", "4.6"];
    /** Add to this list when a version is available as typescript@next */
    TypeScriptVersion.supported = [...TypeScriptVersion.shipped, "4.7"];
    /** Add to this list when it will no longer be supported on Definitely Typed */
    TypeScriptVersion.unsupported = [
        "2.0",
        "2.1",
        "2.2",
        "2.3",
        "2.4",
        "2.5",
        "2.6",
        "2.7",
        "2.8",
        "2.9",
        "3.0",
        "3.1",
        "3.2",
        "3.3",
        "3.4",
        "3.5",
        "3.6",
        "3.7",
        "3.8"
    ];
    TypeScriptVersion.all = [...TypeScriptVersion.unsupported, ...TypeScriptVersion.supported];
    TypeScriptVersion.lowest = TypeScriptVersion.supported[0];
    /** Latest version that may be specified in a `// TypeScript Version:` header. */
    TypeScriptVersion.latest = TypeScriptVersion.supported[TypeScriptVersion.supported.length - 1];
    function isSupported(v) {
        return TypeScriptVersion.supported.indexOf(v) > -1;
    }
    TypeScriptVersion.isSupported = isSupported;
    function range(min) {
        return TypeScriptVersion.supported.filter(v => v >= min);
    }
    TypeScriptVersion.range = range;
    /** List of NPM tags that should be changed to point to the latest version. */
    function tagsToUpdate(v) {
        const idx = TypeScriptVersion.supported.indexOf(v);
        (0, assert_1.default)(idx !== -1);
        return TypeScriptVersion.supported
            .slice(idx)
            .map(v => "ts" + v)
            .concat("latest");
    }
    TypeScriptVersion.tagsToUpdate = tagsToUpdate;
    function previous(v) {
        const index = TypeScriptVersion.supported.indexOf(v);
        (0, assert_1.default)(index !== -1);
        return index === 0 ? undefined : TypeScriptVersion.supported[index - 1];
    }
    TypeScriptVersion.previous = previous;
    function isRedirectable(v) {
        return TypeScriptVersion.all.indexOf(v) >= TypeScriptVersion.all.indexOf("3.1");
    }
    TypeScriptVersion.isRedirectable = isRedirectable;
    function isTypeScriptVersion(str) {
        return TypeScriptVersion.all.includes(str);
    }
    TypeScriptVersion.isTypeScriptVersion = isTypeScriptVersion;
})(TypeScriptVersion = exports.TypeScriptVersion || (exports.TypeScriptVersion = {}));
//# sourceMappingURL=index.js.map