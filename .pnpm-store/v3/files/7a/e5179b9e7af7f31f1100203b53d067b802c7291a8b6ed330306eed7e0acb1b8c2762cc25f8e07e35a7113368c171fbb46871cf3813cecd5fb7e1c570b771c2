"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._fix_special = void 0;
function _fix_special(who, path, returnOldIfNoPreset) {
    var _a;
    let m;
    if ((_a = (m = path === null || path === void 0 ? void 0 : path.match(/^(\w+:)(?:\.[\/\\]?)?$/))) === null || _a === void 0 ? void 0 : _a.length) {
        return m[1] + who.sep;
    }
    else if (returnOldIfNoPreset === true) {
        return path;
    }
}
exports._fix_special = _fix_special;
//# sourceMappingURL=fix.js.map