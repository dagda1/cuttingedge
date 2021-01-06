"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDevServer = void 0;
var paths_1 = require("../../config/paths");
var ignoredFiles_1 = __importDefault(require("react-dev-utils/ignoredFiles"));
var fs_1 = __importDefault(require("fs"));
var evalSourceMapMiddleware_1 = __importDefault(require("react-dev-utils/evalSourceMapMiddleware"));
var redirectServedPathMiddleware_1 = __importDefault(require("react-dev-utils/redirectServedPathMiddleware"));
var stats_1 = require("./stats");
var createDevServer = function (_a) {
    var protocol = _a.protocol, host = _a.host, sockPort = _a.sockPort, proxy = _a.proxy, port = _a.port;
    return {
        disableHostCheck: true,
        contentBase: paths_1.paths.appPublic,
        compress: true,
        liveReload: false,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        port: port,
        clientLogLevel: 'debug',
        writeToDisk: true,
        hot: true,
        hotOnly: true,
        transportMode: 'ws',
        sockPort: sockPort,
        publicPath: paths_1.paths.publicUrlOrPath.slice(0, -1),
        quiet: true,
        host: host,
        https: protocol === 'https',
        noInfo: true,
        overlay: false,
        historyApiFallback: {
            disableDotRule: true,
            index: paths_1.paths.publicUrlOrPath,
        },
        proxy: proxy,
        watchOptions: {
            ignored: ignoredFiles_1.default(paths_1.paths.appSrc),
        },
        before: function (app, server) {
            app.use(evalSourceMapMiddleware_1.default(server));
            if (fs_1.default.existsSync(paths_1.paths.proxySetup)) {
                require(paths_1.paths.proxySetup)(app);
            }
        },
        after: function (app) {
            app.use(redirectServedPathMiddleware_1.default(paths_1.paths.publicUrlOrPath));
        },
        stats: stats_1.stats,
    };
};
exports.createDevServer = createDevServer;
//# sourceMappingURL=createDevServer.js.map