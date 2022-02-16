"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.configure = exports.getExternals = void 0;
const webpack_merge_1 = require("webpack-merge");
const webpack_1 = __importDefault(require("webpack"));
const webpack_node_externals_1 = __importDefault(require("webpack-node-externals"));
const paths_1 = require("../config/paths");
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const razzle_start_server_webpack_plugin_1 = __importDefault(require("razzle-start-server-webpack-plugin"));
const common_1 = require("./common");
const getEnvironment_1 = require("./getEnvironment");
const guards_1 = require("./guards");
const getUrlParts_1 = require("./getUrlParts");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getExternals = function (isDevelopment) {
    return [
        (0, webpack_node_externals_1.default)(),
        (0, webpack_node_externals_1.default)({
            modulesDir: paths_1.paths.resolvedNodeModules[0],
            allowlist: [
                isDevelopment ? 'webpack/hot/poll?300' : null,
                /\.(eot|woff|woff2|ttf|otf)$/,
                /\.(svg|png|jpg|jpeg|gif|ico)$/,
                /\.(mp4|mp3|ogg|swf|webp)$/,
                /\.(css|scss|sass|sss|less)$/,
                /\.css.ts$/,
                /^mathjax3/,
                /^@babel/,
                /^babel-loader/,
                /^@loadable/,
                /^@cutting/,
                /^@vanilla-extract/,
                /^@capsizecss/,
            ].filter(Boolean),
        }),
    ];
};
exports.getExternals = getExternals;
const configure = (options, overrides = {}) => {
    const common = (0, common_1.configureCommon)(Object.assign(Object.assign({}, options), { isNode: true, ssrBuild: true, isWeb: false }), overrides);
    const { isDevelopment, isProduction } = (0, getEnvironment_1.getEnvironment)();
    const { publicPath } = (0, getUrlParts_1.getUrlParts)({ ssrBuild: true, isProduction });
    const entries = Array.isArray(options.entries) ? options.entries : [options.entries];
    let nodeArgs;
    if (isDevelopment) {
        nodeArgs = ['-r', 'source-map-support/register'];
        // Passthrough --inspect and --inspect-brk flags (with optional [host:port] value) to node
        if (process.env.INSPECT_BRK) {
            nodeArgs.push(process.env.INSPECT_BRK);
        }
        else if (process.env.INSPECT) {
            nodeArgs.push(process.env.INSPECT);
        }
    }
    const config = (0, webpack_merge_1.merge)(common, overrides, {
        name: 'server',
        target: 'node',
        watch: isDevelopment,
        externals: (0, exports.getExternals)(isDevelopment),
        entry: isDevelopment ? ['webpack/hot/poll?300', ...entries] : entries,
        output: {
            path: paths_1.paths.appBuild,
            filename: options.filename,
            publicPath,
            libraryTarget: 'commonjs2',
            library: {
                type: 'commonjs2',
            },
        },
        plugins: [
            new webpack_1.default.optimize.LimitChunkCountPlugin({
                maxChunks: 1,
            }),
            isDevelopment && new webpack_1.default.HotModuleReplacementPlugin(),
            isDevelopment &&
                new razzle_start_server_webpack_plugin_1.default({
                    name: 'server.js',
                    nodeArgs,
                }),
        ].filter(guards_1.isPlugin),
        optimization: {
            minimize: false,
        },
    });
    return config;
};
exports.configure = configure;
//# sourceMappingURL=server.js.map