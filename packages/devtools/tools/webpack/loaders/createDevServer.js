"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDevServer = void 0;
const paths_1 = require("../../config/paths");
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
            logging: 'error',
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
            stats: 'errors-only',
        },
        host,
        https: protocol === 'https',
        historyApiFallback: {
            disableDotRule: true,
            index: paths_1.paths.publicUrlOrPath,
        },
        proxy,
        static: {
            directory: paths_1.paths.devDir,
            publicPath: [paths_1.paths.publicUrlOrPath],
            watch: {
                followSymlinks: true,
                ignored: /node_modules\/(?!@cutting)/,
            },
        },
        setupMiddlewares: (middlewares, devServer) => {
            // This lets us fetch source contents from webpack for the error overlay.
            middlewares.unshift((0, evalSourceMapMiddleware_1.default)(devServer));
            middlewares.push((0, redirectServedPathMiddleware_1.default)(paths_1.paths.publicUrlOrPath));
            middlewares.push((0, noopServiceWorkerMiddleware_1.default)(paths_1.paths.publicUrlOrPath));
            return middlewares;
        },
    };
};
exports.createDevServer = createDevServer;
//# sourceMappingURL=createDevServer.js.map