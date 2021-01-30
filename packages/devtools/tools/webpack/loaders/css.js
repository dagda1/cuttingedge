"use strict";
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
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCSSLoaders = exports.cssLoaders = void 0;
var mini_css_extract_plugin_1 = __importDefault(require("mini-css-extract-plugin"));
var createPostCssoptions_1 = require("../createPostCssoptions");
var getLocalIdent_1 = require("../getLocalIdent");
var constants_1 = require("../constants");
var cssLoaders = function (isDevelopment, isProduction, isNode, _a) {
    var modules = _a.modules, importLoaders = _a.importLoaders;
    return [
        !isNode && {
            loader: mini_css_extract_plugin_1.default.loader,
            options: {},
        },
        {
            loader: 'css-loader',
            options: {
                importLoaders: importLoaders,
                sourceMap: true,
                modules: modules
                    ? {
                        getLocalIdent: getLocalIdent_1.getLocalIdent,
                        exportOnlyLocals: isNode,
                    }
                    : undefined,
            },
        },
        { loader: 'postcss-loader', options: createPostCssoptions_1.createPostCssOptions({ isProduction: isProduction }) },
    ].filter(Boolean);
};
exports.cssLoaders = cssLoaders;
var createCSSLoaders = function (_a) {
    var isDevelopment = _a.isDevelopment, isProduction = _a.isProduction, isNode = _a.isNode;
    return [
        {
            test: constants_1.cssRegex,
            use: exports.cssLoaders(isDevelopment, isProduction, isNode, { modules: false, importLoaders: 1 }).filter(Boolean),
        },
        {
            test: constants_1.sassRegex,
            exclude: constants_1.sassModuleRegex,
            use: __spread(exports.cssLoaders(isDevelopment, isProduction, isNode, { modules: false, importLoaders: 2 }), [
                { loader: 'sass-loader' },
            ]).filter(Boolean),
        },
        {
            test: constants_1.sassModuleRegex,
            use: __spread(exports.cssLoaders(isDevelopment, isProduction, isNode, { modules: true, importLoaders: 2 }), [
                { loader: 'sass-loader' },
            ]).filter(Boolean),
        },
    ];
};
exports.createCSSLoaders = createCSSLoaders;
//# sourceMappingURL=css.js.map