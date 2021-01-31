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
exports.configure = void 0;
var webpack_merge_1 = require("webpack-merge");
var webpack_1 = __importDefault(require("webpack"));
var webpack_node_externals_1 = __importDefault(require("webpack-node-externals"));
var paths_1 = require("../config/paths");
var write_file_webpack_plugin_1 = __importDefault(require("write-file-webpack-plugin"));
var common_1 = require("./common");
var getEnvironment_1 = require("./getEnvironment");
var guards_1 = require("./guards");
var getExternals = function () {
    return [
        webpack_node_externals_1.default(),
        webpack_node_externals_1.default({
            modulesDir: paths_1.paths.resolvedNodeModules[0],
            allowlist: [/^@cutting/].filter(function (x) { return x; }),
        }),
    ];
};
var configure = function (options, overrides) {
    if (overrides === void 0) { overrides = {}; }
    var common = common_1.configureCommon(__assign(__assign({}, options), { isWeb: false }), overrides);
    var isProduction = getEnvironment_1.getEnvironment().isProduction;
    var entries = Array.isArray(options.entries) ? options.entries : [options.entries];
    var config = webpack_merge_1.merge(common, {
        name: 'api',
        target: 'node',
        externals: getExternals(),
        entry: entries,
        output: {
            path: paths_1.paths.appBuild,
            filename: 'index.cjs',
        },
        plugins: [
            new write_file_webpack_plugin_1.default(),
            new webpack_1.default.optimize.LimitChunkCountPlugin({
                maxChunks: 1,
            }),
            options.hasShebang && new webpack_1.default.BannerPlugin({ banner: '#!/usr/bin/env node', raw: true }),
        ].filter(guards_1.isPlugin),
        optimization: {
            concatenateModules: isProduction,
        },
    });
    return config;
};
exports.configure = configure;
//# sourceMappingURL=node.js.map