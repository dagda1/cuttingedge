"use strict";
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
;
;
;
function combineConfig(dst, src) {
    try {
        for (var _a = __values(Object.keys(src)), _b = _a.next(); !_b.done; _b = _a.next()) {
            var id = _b.value;
            if (id === '__esModule')
                continue;
            if (typeof dst[id] === 'object' && typeof src[id] === 'object') {
                combineConfig(dst[id], src[id]);
            }
            else if (src[id] !== null && src[id] !== undefined) {
                dst[id] = src[id];
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return dst;
    var e_1, _c;
}
exports.combineConfig = combineConfig;
function combineDefaults(dst, name, src) {
    if (!dst[name]) {
        dst[name] = {};
    }
    dst = dst[name];
    try {
        for (var _a = __values(Object.keys(src)), _b = _a.next(); !_b.done; _b = _a.next()) {
            var id = _b.value;
            if (typeof dst[id] === 'object' && typeof src[id] === 'object') {
                combineDefaults(dst, id, src[id]);
            }
            else if (dst[id] == null && src[id] != null) {
                dst[id] = src[id];
            }
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return dst;
    var e_2, _c;
}
exports.combineDefaults = combineDefaults;
function combineWithMathJax(config) {
    return combineConfig(exports.MathJax, config);
}
exports.combineWithMathJax = combineWithMathJax;
if (typeof global.MathJax === 'undefined') {
    global.MathJax = {};
}
if (!global.MathJax.version) {
    global.MathJax = {
        version: '3.0.0',
        _: {},
        config: global.MathJax
    };
}
exports.MathJax = global.MathJax;
//# sourceMappingURL=global.js.map