"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.configure = void 0;
const webpack_merge_1 = require("webpack-merge");
const webpack_1 = __importDefault(require("webpack"));
const webpack_node_externals_1 = __importDefault(require("webpack-node-externals"));
const paths_1 = require("../config/paths");
const write_file_webpack_plugin_1 = __importDefault(require("write-file-webpack-plugin"));
const common_1 = require("./common");
const getEnvironment_1 = require("./getEnvironment");
const guards_1 = require("./guards");
const getExternals = () => {
    return [
        (0, webpack_node_externals_1.default)(),
        (0, webpack_node_externals_1.default)({
            modulesDir: paths_1.paths.resolvedNodeModules[0],
            allowlist: [/^@cutting/].filter((x) => x),
        }),
    ];
};
const configure = (options, overrides = {}) => {
    const common = (0, common_1.configureCommon)(Object.assign(Object.assign({}, options), { isWeb: false }), overrides);
    const { isProduction } = (0, getEnvironment_1.getEnvironment)();
    const entries = Array.isArray(options.entries) ? options.entries : [options.entries];
    const config = (0, webpack_merge_1.merge)(common, {
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