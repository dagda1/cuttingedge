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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var FontData_js_1 = require("../common/FontData.js");
var lengths_js_1 = require("../../util/lengths.js");
var Options_js_1 = require("../../util/Options.js");
__export(require("../common/FontData.js"));
;
;
var CHTMLFontData = (function (_super) {
    __extends(CHTMLFontData, _super);
    function CHTMLFontData(options) {
        if (options === void 0) { options = null; }
        var _this = _super.call(this) || this;
        _this.cssRoot = '';
        var CLASS = _this.constructor;
        _this.options = Options_js_1.userOptions(Options_js_1.defaultOptions({}, CLASS.OPTIONS), options);
        try {
            for (var _a = __values(Object.keys(CLASS.defaultVariantClasses)), _b = _a.next(); !_b.done; _b = _a.next()) {
                var name_1 = _b.value;
                _this.variant[name_1].classes = CLASS.defaultVariantClasses[name_1];
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return _this;
        var e_1, _c;
    }
    CHTMLFontData.prototype.adaptiveCSS = function (adapt) {
        this.options.adaptiveCSS = adapt;
    };
    CHTMLFontData.prototype.clearCache = function () {
        if (!this.options.adaptiveCSS)
            return;
        try {
            for (var _a = __values(Object.keys(this.delimiters)), _b = _a.next(); !_b.done; _b = _a.next()) {
                var n = _b.value;
                this.delimiters[parseInt(n)].used = false;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_2) throw e_2.error; }
        }
        try {
            for (var _d = __values(Object.keys(this.variant)), _e = _d.next(); !_e.done; _e = _d.next()) {
                var name_2 = _e.value;
                var chars = this.variant[name_2].chars;
                try {
                    for (var _f = __values(Object.keys(chars)), _g = _f.next(); !_g.done; _g = _f.next()) {
                        var n = _g.value;
                        var options = chars[parseInt(n)][3];
                        if (options) {
                            options.used = false;
                        }
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (_g && !_g.done && (_h = _f.return)) _h.call(_f);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_e && !_e.done && (_j = _d.return)) _j.call(_d);
            }
            finally { if (e_4) throw e_4.error; }
        }
        var e_2, _c, e_4, _j, e_3, _h;
    };
    Object.defineProperty(CHTMLFontData.prototype, "styles", {
        get: function () {
            var CLASS = this.constructor;
            var styles = __assign({}, CLASS.defaultStyles);
            this.addFontURLs(styles, CLASS.defaultFonts, this.options.fontURL);
            try {
                for (var _a = __values(Object.keys(this.delimiters)), _b = _a.next(); !_b.done; _b = _a.next()) {
                    var n = _b.value;
                    var N = parseInt(n);
                    this.addDelimiterStyles(styles, N, this.delimiters[N]);
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                }
                finally { if (e_5) throw e_5.error; }
            }
            this.addVariantChars(styles);
            return styles;
            var e_5, _c;
        },
        enumerable: true,
        configurable: true
    });
    CHTMLFontData.prototype.addVariantChars = function (styles) {
        var charUsed = new Map();
        try {
            for (var _a = __values(Object.keys(this.variant)), _b = _a.next(); !_b.done; _b = _a.next()) {
                var name_3 = _b.value;
                var variant = this.variant[name_3];
                var vclass = (name_3 === 'normal' ? '' : '.' + variant.classes.replace(/ /g, '.'));
                try {
                    for (var _c = __values(Object.keys(variant.chars)), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var n = _d.value;
                        var N = parseInt(n);
                        if (variant.chars[N].length === 4) {
                            this.addCharStyles(styles, vclass, N, variant.chars[N], charUsed);
                        }
                    }
                }
                catch (e_6_1) { e_6 = { error: e_6_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_e = _c.return)) _e.call(_c);
                    }
                    finally { if (e_6) throw e_6.error; }
                }
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_f = _a.return)) _f.call(_a);
            }
            finally { if (e_7) throw e_7.error; }
        }
        var e_7, _f, e_6, _e;
    };
    CHTMLFontData.prototype.addFontURLs = function (styles, fonts, url) {
        try {
            for (var _a = __values(Object.keys(fonts)), _b = _a.next(); !_b.done; _b = _a.next()) {
                var name_4 = _b.value;
                var font = __assign({}, fonts[name_4]);
                font.src = font.src.replace(/%%URL%%/, url);
                styles[name_4] = font;
            }
        }
        catch (e_8_1) { e_8 = { error: e_8_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_8) throw e_8.error; }
        }
        var e_8, _c;
    };
    CHTMLFontData.prototype.addDelimiterStyles = function (styles, n, data) {
        if (this.options.adaptiveCSS && !data.used)
            return;
        var c = this.charSelector(n);
        if (data.c && data.c !== n) {
            styles[this.cssRoot + '.mjx-stretched mjx-c' + c + '::before'] = {
                content: this.charContent(data.c)
            };
        }
        if (!data.stretch)
            return;
        if (data.dir === 1) {
            this.addDelimiterVStyles(styles, c, data);
        }
        else {
            this.addDelimiterHStyles(styles, c, data);
        }
    };
    CHTMLFontData.prototype.addDelimiterVStyles = function (styles, c, data) {
        var W = data.HDW[2];
        var _a = __read(data.stretch, 4), beg = _a[0], ext = _a[1], end = _a[2], mid = _a[3];
        var Hb = this.addDelimiterVPart(styles, c, W, 'beg', beg);
        this.addDelimiterVPart(styles, c, W, 'ext', ext);
        var He = this.addDelimiterVPart(styles, c, W, 'end', end);
        var css = {};
        var root = this.cssRoot;
        if (mid) {
            var Hm = this.addDelimiterVPart(styles, c, W, 'mid', mid);
            css.height = '50%';
            styles[root + 'mjx-stretchy-v' + c + ' > mjx-mid'] = {
                'margin-top': this.em(-Hm / 2),
                'margin-bottom': this.em(-Hm / 2)
            };
        }
        if (Hb) {
            css['border-top-width'] = this.em0(Hb - .03);
        }
        if (He) {
            css['border-bottom-width'] = this.em0(He - .03);
            styles[root + 'mjx-stretchy-v' + c + ' > mjx-end'] = { 'margin-top': this.em(-He) };
        }
        if (Object.keys(css).length) {
            styles[root + 'mjx-stretchy-v' + c + ' > mjx-ext'] = css;
        }
    };
    CHTMLFontData.prototype.addDelimiterVPart = function (styles, c, W, part, n) {
        if (!n)
            return 0;
        var data = this.getDelimiterData(n);
        var dw = (W - data[2]) / 2;
        var css = { content: this.charContent(n) };
        if (part !== 'ext') {
            css.padding = this.padding(data, dw);
        }
        else if (dw) {
            css['padding-left'] = this.em0(dw);
        }
        styles[this.cssRoot + 'mjx-stretchy-v' + c + ' mjx-' + part + ' mjx-c::before'] = css;
        return data[0] + data[1];
    };
    CHTMLFontData.prototype.addDelimiterHStyles = function (styles, c, data) {
        var _a = __read(data.stretch, 4), beg = _a[0], ext = _a[1], end = _a[2], mid = _a[3];
        this.addDelimiterHPart(styles, c, 'beg', beg);
        this.addDelimiterHPart(styles, c, 'ext', ext, !(beg || end));
        this.addDelimiterHPart(styles, c, 'end', end);
        if (mid) {
            this.addDelimiterHPart(styles, c, 'mid', mid);
            styles[this.cssRoot + 'mjx-stretchy-h' + c + ' > mjx-ext'] = { width: '50%' };
        }
    };
    CHTMLFontData.prototype.addDelimiterHPart = function (styles, c, part, n, force) {
        if (force === void 0) { force = false; }
        if (!n) {
            return 0;
        }
        var data = this.getDelimiterData(n);
        var options = data[3];
        var css = { content: (options && options.c ? '"' + options.c + '"' : this.charContent(n)) };
        if (part !== 'ext' || force) {
            css.padding = this.padding(data, 0, -data[2]);
        }
        styles[this.cssRoot + 'mjx-stretchy-h' + c + ' mjx-' + part + ' mjx-c::before'] = css;
    };
    CHTMLFontData.prototype.addCharStyles = function (styles, vclass, n, data, charUsed) {
        var _a = __read(data, 4), h = _a[0], d = _a[1], w = _a[2], options = _a[3];
        if (this.options.adaptiveCSS && !options.used)
            return;
        var css = {};
        var selector = 'mjx-c' + this.charSelector(n);
        var root = this.cssRoot;
        css.padding = this.padding(data, 0, options.ic || 0);
        var content = (options.c ? '"' + options.c + '"' : this.charContent(n));
        if (charUsed.get(n) !== content) {
            if (!charUsed.has(n) && !options.c) {
                styles[root + selector + '::before'] = { content: content };
                charUsed.set(n, content);
            }
            else {
                styles[root + vclass + ' ' + selector + '::before'] = { content: content };
            }
        }
        if (options.f !== undefined) {
            css['font-family'] = 'MJXZERO, MJXTEX' + (options.f ? '-' + options.f : '');
        }
        var char = (vclass ? vclass + ' ' : '') + selector;
        styles[root + char] = css;
        if (options.ic) {
            var _b = __read([root + 'mjx-', '[noIC]' + char + ':last-child'], 2), MJX = _b[0], noIC = _b[1];
            styles[MJX + 'mi' + noIC] =
                styles[MJX + 'mo' + noIC] = {
                    'padding-right': this.em(w)
                };
        }
    };
    CHTMLFontData.prototype.getDelimiterData = function (n) {
        return this.getChar('-smallop', n);
    };
    CHTMLFontData.charOptions = function (font, n) {
        return _super.charOptions.call(this, font, n);
    };
    CHTMLFontData.prototype.em = function (n) {
        return lengths_js_1.em(n);
    };
    CHTMLFontData.prototype.em0 = function (n) {
        return lengths_js_1.em(Math.max(0, n));
    };
    CHTMLFontData.prototype.padding = function (_a, dw, ic) {
        var _b = __read(_a, 3), h = _b[0], d = _b[1], w = _b[2];
        if (dw === void 0) { dw = 0; }
        if (ic === void 0) { ic = 0; }
        return [h, w + ic, d, dw].map(this.em0).join(' ');
    };
    CHTMLFontData.prototype.charContent = function (n) {
        return '"' + (n >= 0x20 && n <= 0x7E && n !== 0x22 && n !== 0x27 && n !== 0x5C ?
            String.fromCharCode(n) : '\\' + n.toString(16).toUpperCase()) + '"';
    };
    CHTMLFontData.prototype.charSelector = function (n) {
        return '.mjx-c' + n.toString(16).toUpperCase();
    };
    return CHTMLFontData;
}(FontData_js_1.FontData));
CHTMLFontData.OPTIONS = {
    fontURL: 'mathjax3-ts/output/chtml/fonts/tex-woff-v2'
};
CHTMLFontData.defaultVariantClasses = {};
CHTMLFontData.defaultStyles = {
    'mjx-c::before': {
        display: 'inline-block',
        width: 0
    }
};
CHTMLFontData.defaultFonts = {
    '@font-face /* 0 */': {
        'font-family': 'MJXZERO',
        src: 'url("%%URL%%/MathJax_Zero.woff") format("woff")'
    }
};
exports.CHTMLFontData = CHTMLFontData;
function AddCSS(font, options) {
    try {
        for (var _a = __values(Object.keys(options)), _b = _a.next(); !_b.done; _b = _a.next()) {
            var c = _b.value;
            var n = parseInt(c);
            Object.assign(FontData_js_1.FontData.charOptions(font, n), options[n]);
        }
    }
    catch (e_9_1) { e_9 = { error: e_9_1 }; }
    finally {
        try {
            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
        }
        finally { if (e_9) throw e_9.error; }
    }
    return font;
    var e_9, _c;
}
exports.AddCSS = AddCSS;
//# sourceMappingURL=FontData.js.map