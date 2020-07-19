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
exports.configure = void 0;
var webpack_merge_1 = __importDefault(require("webpack-merge"));
var webpack_1 = __importDefault(require("webpack"));
var webpack_node_externals_1 = __importDefault(require("webpack-node-externals"));
var paths_1 = require("../config/paths");
var write_file_webpack_plugin_1 = __importDefault(require("write-file-webpack-plugin"));
var common_1 = require("./common");
var getEnvironment_1 = require("./getEnvironment");
var guards_1 = require("./guards");
var getExternals = function (modulesDir) {
    return [
        webpack_node_externals_1.default(),
        webpack_node_externals_1.default({
            modulesDir: modulesDir,
            whitelist: [/^@cutting/].filter(function (x) { return x; }),
        }),
    ];
};
exports.configure = function (options) {
    var common = common_1.configureCommon(__assign(__assign({}, options), { isWeb: false }));
    var modulesDir = options.modulesDir;
    var _a = getEnvironment_1.getEnvironment(), isDevelopment = _a.isDevelopment, isProduction = _a.isProduction;
    var entries = Array.isArray(options.entries) ? options.entries : [options.entries];
    var config = webpack_merge_1.default(common, {
        name: 'api',
        target: 'node',
        externals: getExternals(modulesDir),
        entry: isDevelopment ? __spreadArrays(entries) : entries,
        devtool: !isDevelopment && 'cheap-module-source-map',
        output: {
            path: paths_1.paths.appBuild,
            filename: options.filename,
            libraryTarget: 'commonjs2',
        },
        plugins: [
            new write_file_webpack_plugin_1.default(),
            new webpack_1.default.optimize.LimitChunkCountPlugin({
                maxChunks: 1,
            }),
            isProduction && new webpack_1.default.optimize.ModuleConcatenationPlugin(),
        ].filter(guards_1.isPlugin),
    });
    return config;
};
//# sourceMappingURL=node.js.map