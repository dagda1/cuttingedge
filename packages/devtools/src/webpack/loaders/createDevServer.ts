import { paths } from '../../config/paths';
import ignoredFiles from 'react-dev-utils/ignoredFiles';
import fs from 'fs';
import evalSourceMapMiddleware from 'react-dev-utils/evalSourceMapMiddleware';
import redirectServedPath from 'react-dev-utils/redirectServedPathMiddleware';
import { Configuration, ProxyConfigArray, ProxyConfigMap } from 'webpack-dev-server';
import { stats } from './stats';

export const createDevServer = ({
  protocol,
  host,
  sockPort,
  proxy,
  port,
}: {
  protocol: 'http' | 'https';
  host: string;
  port: number;
  sockPort: number;
  proxy?: ProxyConfigMap | ProxyConfigArray;
}): Configuration => {
  return {
    disableHostCheck: true,
    contentBase: paths.appPublic,
    compress: true,
    liveReload: false,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    port,
    clientLogLevel: 'debug',
    writeToDisk: true,
    hot: true,
    hotOnly: true,
    transportMode: 'ws',
    sockPort,
    publicPath: paths.publicUrlOrPath.slice(0, -1),
    quiet: true,
    host,
    https: protocol === 'https',
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
    stats,
  };
};
