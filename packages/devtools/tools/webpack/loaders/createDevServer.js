"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDevServer = void 0;
const paths_1 = require("../../config/paths");
const ignoredFiles_1 = __importDefault(require("react-dev-utils/ignoredFiles"));
const fs_1 = __importDefault(require("fs"));
const evalSourceMapMiddleware_1 = __importDefault(require("react-dev-utils/evalSourceMapMiddleware"));
const redirectServedPathMiddleware_1 = __importDefault(require("react-dev-utils/redirectServedPathMiddleware"));
const noopServiceWorkerMiddleware_1 = __importDefault(require("react-dev-utils/noopServiceWorkerMiddleware"));
const createDevServer = ({ protocol, host = '0.0.0.0', sockPort, proxy, port, }) => {
    var _a, _b;
    const sockPath = process.env.WDS_SOCKET_PATH || '/ws';
    const sockHost = ((_a = process.env.WDS_SOCKET_HOST) !== null && _a !== void 0 ? _a : typeof window !== 'undefined') ? (_b = window.location) === null || _b === void 0 ? void 0 : _b.hostname : 'localhost';
    return {
        allowedHosts: 'all',
        liveReload: false,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        port,
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
        host,
        https: protocol === 'https',
        historyApiFallback: {
            disableDotRule: true,
            index: paths_1.paths.publicUrlOrPath,
        },
        proxy,
        static: {
            directory: paths_1.paths.appPublic,
            publicPath: [paths_1.paths.publicUrlOrPath],
            watch: {
                ignored: (0, ignoredFiles_1.default)(paths_1.paths.appSrc),
            },
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onBeforeSetupMiddleware(devServer) {
            const app = devServer.app;
            app.use((0, evalSourceMapMiddleware_1.default)(devServer));
            if (fs_1.default.existsSync(paths_1.paths.proxySetup)) {
                require(paths_1.paths.proxySetup)(app);
            }
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onAfterSetupMiddleware(devServer) {
            const app = devServer.app;
            app.use((0, redirectServedPathMiddleware_1.default)(paths_1.paths.publicUrlOrPath));
            app.use((0, noopServiceWorkerMiddleware_1.default)(paths_1.paths.publicUrlOrPath));
        },
    };
};
exports.createDevServer = createDevServer;
//# sourceMappingURL=createDevServer.js.map