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
exports.configure = exports.getExternals = void 0;
var webpack_merge_1 = require("webpack-merge");
var webpack_1 = __importDefault(require("webpack"));
var webpack_node_externals_1 = __importDefault(require("webpack-node-externals"));
var paths_1 = require("../config/paths");
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
var razzle_start_server_webpack_plugin_1 = __importDefault(require("razzle-start-server-webpack-plugin"));
var common_1 = require("./common");
var getEnvironment_1 = require("./getEnvironment");
var guards_1 = require("./guards");
var getUrlParts_1 = require("./getUrlParts");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var getExternals = function (isDevelopment) {
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
                /^@loadable/,
                /^@cutting/,
                /^@vanilla-extract/,
                /^@capsizecss/,
            ].filter(Boolean),
        }),
    ];
};
exports.getExternals = getExternals;
var configure = function (options, overrides) {
    if (overrides === void 0) { overrides = {}; }
    var common = (0, common_1.configureCommon)(__assign(__assign({}, options), { isNode: true, ssrBuild: true, isWeb: false }), overrides);
    var _a = (0, getEnvironment_1.getEnvironment)(), isDevelopment = _a.isDevelopment, isProduction = _a.isProduction;
    var publicPath = (0, getUrlParts_1.getUrlParts)({ ssrBuild: true, isProduction: isProduction }).publicPath;
    var entries = Array.isArray(options.entries) ? options.entries : [options.entries];
    var nodeArgs;
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
    var config = (0, webpack_merge_1.merge)(common, overrides, {
        name: 'server',
        target: 'node',
        watch: isDevelopment,
        externals: (0, exports.getExternals)(isDevelopment),
        entry: isDevelopment ? __spreadArray(['webpack/hot/poll?300'], __read(entries), false) : entries,
        output: {
            path: paths_1.paths.appBuild,
            filename: options.filename,
            publicPath: publicPath,
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
                    nodeArgs: nodeArgs,
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