"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var FontData_js_1 = require("../common/FontData.js");
__export(require("../common/FontData.js"));
;
;
var SVGFontData = (function (_super) {
    __extends(SVGFontData, _super);
    function SVGFontData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SVGFontData.charOptions = function (font, n) {
        return _super.charOptions.call(this, font, n);
    };
    return SVGFontData;
}(FontData_js_1.FontData));
exports.SVGFontData = SVGFontData;
function AddPaths(font, paths, content) {
    try {
        for (var _a = __values(Object.keys(paths)), _b = _a.next(); !_b.done; _b = _a.next()) {
            var c = _b.value;
            var n = parseInt(c);
            SVGFontData.charOptions(font, n).p = paths[n];
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
        }
        finally { if (e_1) throw e_1.error; }
    }
    try {
        for (var _d = __values(Object.keys(content)), _e = _d.next(); !_e.done; _e = _d.next()) {
            var c = _e.value;
            var n = parseInt(c);
            SVGFontData.charOptions(font, n).c = content[n];
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (_e && !_e.done && (_f = _d.return)) _f.call(_d);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return font;
    var e_1, _c, e_2, _f;
}
exports.AddPaths = AddPaths;
//# sourceMappingURL=FontData.js.map