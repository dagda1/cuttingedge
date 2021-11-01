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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
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
var paths_1 = require("../../config/paths");
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
                        // TODO: we want to enable this for better code splitting
                        // mode: 'pure',
                    }
                    : undefined,
            },
        },
        { loader: 'postcss-loader', options: (0, createPostCssoptions_1.createPostCssOptions)({ isProduction: isProduction }) },
    ].filter(Boolean);
};
exports.cssLoaders = cssLoaders;
var createCSSLoaders = function (_a) {
    var isDevelopment = _a.isDevelopment, isProduction = _a.isProduction, isNode = _a.isNode;
    return [
        {
            test: /\.vanilla\.css$/i,
            use: [
                mini_css_extract_plugin_1.default.loader,
                {
                    loader: require.resolve('css-loader'),
                    options: {
                        url: false,
                    },
                },
            ],
        },
        {
            test: constants_1.cssRegex,
            exclude: /\.vanilla\.css$/i,
            use: (0, exports.cssLoaders)(isDevelopment, isProduction, isNode, { modules: false, importLoaders: 1 }).filter(Boolean),
        },
        {
            test: constants_1.sassRegex,
            exclude: constants_1.sassModuleRegex,
            use: __spreadArray(__spreadArray([], __read((0, exports.cssLoaders)(isDevelopment, isProduction, isNode, { modules: false, importLoaders: 2 })), false), [
                { loader: 'sass-loader' },
            ], false).filter(Boolean),
        },
        {
            test: constants_1.sassModuleRegex,
            use: __spreadArray(__spreadArray([], __read((0, exports.cssLoaders)(isDevelopment, isProduction, isNode, { modules: true, importLoaders: 2 })), false), [
                {
                    loader: 'sass-loader',
                    options: {
                        sassOptions: {
                            outputStyle: 'expanded',
                            sourceMap: true,
                            includePaths: __spreadArray([paths_1.paths.appSrc], __read(paths_1.paths.resolvedNodeModules), false),
                            minimize: isProduction,
                        },
                    },
                },
            ], false).filter(Boolean),
        },
    ];
};
exports.createCSSLoaders = createCSSLoaders;
//# sourceMappingURL=css.js.map