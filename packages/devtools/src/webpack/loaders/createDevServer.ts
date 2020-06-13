
import { paths } from '../../config/paths';
import ignoredFiles from 'react-dev-utils/ignoredFiles';
import fs from 'fs';
import evalSourceMapMiddleware from 'react-dev-utils/evalSourceMapMiddleware';
import errorOverlayMiddleware from 'react-dev-utils/errorOverlayMiddleware';
import redirectServedPath from 'react-dev-utils/redirectServedPathMiddleware';
import { Configuration, ProxyConfigArray, ProxyConfigMap } from 'webpack-dev-server';

export const createDevServer = ({
  protocol,
  host,
  sockPort,
  proxy,
}: {
  protocol: 'http' | 'https';
  host: string;
  sockPort: string;
  proxy?: ProxyConfigMap | ProxyConfigArray;
}): Configuration => {
  const sockHost = process.env.WDS_SOCKET_HOST;
  const sockPath = process.env.WDS_SOCKET_PATH;

  const devServerConifg: Configuration = {
    disableHostCheck: true,
    clientLogLevel: 'none',
    contentBase: paths.appPublic,
    compress: true,
    liveReload: false,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    hot: true,
    hotOnly: true,
    transportMode: 'ws',
    injectClient: false,
    sockHost,
    sockPath,
    sockPort,
    publicPath: paths.publicUrlOrPath.slice(0, -1),
    quiet: true,
    host,
    https: protocol === 'https',
    watchContentBase: true,
    noInfo: true,
    overlay: false,
    historyApiFallback: {
      disableDotRule: true,
      index: paths.publicUrlOrPath,
    },
    proxy,
    watchOptions: {
      ignored: ignoredFiles(paths.appSrc),
    },
    before(app, server) {
      app.use(evalSourceMapMiddleware(server));

      if (fs.existsSync(paths.proxySetup)) {
        require(paths.proxySetup)(app);
      }
    },
    after(app) {
      app.use(redirectServedPath(paths.publicUrlOrPath));
    },
  };

  return devServerConifg;
};
