import { paths } from '../../config/paths.js';
import evalSourceMapMiddleware from 'react-dev-utils/evalSourceMapMiddleware.js';
import redirectServedPath from 'react-dev-utils/redirectServedPathMiddleware.js';
import noopServiceWorkerMiddleware from 'react-dev-utils/noopServiceWorkerMiddleware.js';
export const createDevServer = ({ protocol, host = '0.0.0.0', sockPort, proxy, port, }) => {
    const sockPath = process.env.WDS_SOCKET_PATH || '/ws';
    const sockHost = process.env.WDS_SOCKET_HOST ?? typeof window !== 'undefined' ? window.location?.hostname : 'localhost';
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
            publicPath: paths.publicUrlOrPath.slice(0, -1),
            stats: 'errors-only',
        },
        host,
        https: protocol === 'https',
        historyApiFallback: {
            disableDotRule: true,
            index: paths.publicUrlOrPath,
        },
        proxy,
        static: {
            directory: paths.devDir,
            publicPath: [paths.publicUrlOrPath],
            watch: {
                followSymlinks: true,
                ignored: /node_modules\/(?!@cutting)/,
            },
        },
        setupMiddlewares: (middlewares, devServer) => {
            // This lets us fetch source contents from webpack for the error overlay.
            middlewares.unshift(evalSourceMapMiddleware(devServer));
            middlewares.push(redirectServedPath(paths.publicUrlOrPath));
            middlewares.push(noopServiceWorkerMiddleware(paths.publicUrlOrPath));
            return middlewares;
        },
    };
};
//# sourceMappingURL=createDevServer.js.map