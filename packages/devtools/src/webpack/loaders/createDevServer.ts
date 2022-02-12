import { paths } from '../../config/paths';
import ignoredFiles from 'react-dev-utils/ignoredFiles';
import fs from 'fs';
import evalSourceMapMiddleware from 'react-dev-utils/evalSourceMapMiddleware';
import redirectServedPath from 'react-dev-utils/redirectServedPathMiddleware';
import type { ProxyConfigArray, ProxyConfigMap } from 'webpack-dev-server';
import noopServiceWorkerMiddleware from 'react-dev-utils/noopServiceWorkerMiddleware';

export const createDevServer = ({
  protocol,
  host = '0.0.0.0',
  sockPort,
  proxy,
  port,
}: {
  protocol: 'http' | 'https';
  host?: string;
  port: number;
  proxy?: ProxyConfigMap | ProxyConfigArray;
  sockPort?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}): any => {
  const sockPath = process.env.WDS_SOCKET_PATH || '/ws';
  const sockHost =
    process.env.WDS_SOCKET_HOST ?? typeof window !== 'undefined' ? window.location?.hostname : 'localhost';

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
      publicPath: paths.publicUrlOrPath.slice(0, -1),
    },
    host,
    https: protocol === 'https',
    historyApiFallback: {
      disableDotRule: true,
      index: paths.publicUrlOrPath,
    },
    proxy,
    static: {
      directory: paths.appPublic,
      publicPath: [paths.publicUrlOrPath],
      watch: {
        ignored: ignoredFiles(paths.appSrc),
      },
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onBeforeSetupMiddleware(devServer: any) {
      const app = devServer.app;
      app.use(evalSourceMapMiddleware(devServer));

      if (fs.existsSync(paths.proxySetup)) {
        require(paths.proxySetup)(app);
      }
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onAfterSetupMiddleware(devServer: any) {
      const app = devServer.app;
      app.use(redirectServedPath(paths.publicUrlOrPath));

      app.use(noopServiceWorkerMiddleware(paths.publicUrlOrPath));
    },
  };
};
