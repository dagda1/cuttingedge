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
var noopServiceWorkerMiddleware_1 = __importDefault(require("react-dev-utils/noopServiceWorkerMiddleware"));
var createDevServer = function (_a) {
    var _b, _c;
    var protocol = _a.protocol, _d = _a.host, host = _d === void 0 ? '0.0.0.0' : _d, sockPort = _a.sockPort, proxy = _a.proxy, port = _a.port;
    var sockPath = process.env.WDS_SOCKET_PATH || '/ws';
    var sockHost = ((_b = process.env.WDS_SOCKET_HOST) !== null && _b !== void 0 ? _b : typeof window !== 'undefined') ? (_c = window.location) === null || _c === void 0 ? void 0 : _c.hostname : 'localhost';
    return {
        allowedHosts: 'all',
        liveReload: false,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        port: port,
        hot: 'only',
        client: {
            logging: 'verbose',
            webSocketURL: {
                // Enable custom sockjs pathname for websocket connection to hot reloading server.
                // Enable custom sockjs hostname, pathname and port for websocket connection
                // to hot reloading server.
                hostname: sockHost,
                pathname: sockPath,
                port: sockPort,
            },
            overlay: false,
            progress: true,
        },
        devMiddleware: {
            publicPath: paths_1.paths.publicUrlOrPath.slice(0, -1),
        },
        host: host,
        https: protocol === 'https',
        historyApiFallback: {
            disableDotRule: true,
            index: paths_1.paths.publicUrlOrPath,
        },
        proxy: proxy,
        static: {
            directory: paths_1.paths.appPublic,
            publicPath: [paths_1.paths.publicUrlOrPath],
            watch: {
                ignored: (0, ignoredFiles_1.default)(paths_1.paths.appSrc),
            },
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onBeforeSetupMiddleware: function (devServer) {
            var app = devServer.app;
            app.use((0, evalSourceMapMiddleware_1.default)(devServer));
            if (fs_1.default.existsSync(paths_1.paths.proxySetup)) {
                require(paths_1.paths.proxySetup)(app);
            }
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onAfterSetupMiddleware: function (devServer) {
            var app = devServer.app;
            app.use((0, redirectServedPathMiddleware_1.default)(paths_1.paths.publicUrlOrPath));
            app.use((0, noopServiceWorkerMiddleware_1.default)(paths_1.paths.publicUrlOrPath));
        },
    };
};
exports.createDevServer = createDevServer;
//# sourceMappingURL=createDevServer.js.map