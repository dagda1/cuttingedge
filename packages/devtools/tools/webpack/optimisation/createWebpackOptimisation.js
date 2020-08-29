"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createWebpackOptimisation = void 0;
var optimize_css_assets_webpack_plugin_1 = __importDefault(require("optimize-css-assets-webpack-plugin"));
var terser_webpack_plugin_1 = __importDefault(require("terser-webpack-plugin"));
var postcss_safe_parser_1 = __importDefault(require("postcss-safe-parser"));
exports.createWebpackOptimisation = function (_a) {
    var optimization = _a.optimization, isDevelopment = _a.isDevelopment, ssrBuild = _a.ssrBuild;
    return __assign(__assign({}, optimization), {
        minimize: true,
        minimizer: [
            new terser_webpack_plugin_1.default({
                terserOptions: {
                    parse: {
                        ecma: 8,
                    },
                    compress: {
                        ecma: 5,
                        warnings: false,
                        comparisons: false,
                        inline: 2,
                        dead_code: true,
                    },
                    mangle: {
                        safari10: true,
                    },
                    output: {
                        ecma: 5,
                        comments: 'all',
                        ascii_only: true,
                    },
                },
                parallel: true,
                cache: true,
                sourceMap: true,
            }),
            new optimize_css_assets_webpack_plugin_1.default({
                cssProcessorOptions: {
                    parser: postcss_safe_parser_1.default,
                    map: isDevelopment ? { inline: false, annotation: true } : false,
                },
            }),
        ],
        splitChunks: {
            chunks: ssrBuild ? 'async' : 'all',
            name: false,
        },
        runtimeChunk: ssrBuild
            ? false
            : {
                name: function (entrypoint) { return "runtime-" + entrypoint.name; },
            },
    });
};
//# sourceMappingURL=createWebpackOptimisation.js.map