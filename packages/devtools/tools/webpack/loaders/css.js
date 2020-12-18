"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
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
exports.cssLoaders = function (isDevelopment, isProduction, isNode, _a) {
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
        isProduction && { loader: 'postcss-loader', options: createPostCssoptions_1.createPostCssOptions() },
    ].filter(Boolean);
};
exports.createCSSLoaders = function (_a) {
    var isDevelopment = _a.isDevelopment, isProduction = _a.isProduction, isNode = _a.isNode;
    return [
        {
            test: constants_1.cssRegex,
            use: exports.cssLoaders(isDevelopment, isProduction, isNode, { modules: false, importLoaders: 1 }).filter(Boolean),
        },
        {
            test: constants_1.sassRegex,
            exclude: constants_1.sassModuleRegex,
            use: __spreadArrays(exports.cssLoaders(isDevelopment, isProduction, isNode, { modules: false, importLoaders: 2 }), [
                { loader: 'sass-loader' },
            ]).filter(Boolean),
        },
        {
            test: constants_1.sassModuleRegex,
            use: __spreadArrays(exports.cssLoaders(isDevelopment, isProduction, isNode, { modules: true, importLoaders: 2 }), [
                { loader: 'sass-loader' },
            ]).filter(Boolean),
        },
    ];
};
//# sourceMappingURL=css.js.map