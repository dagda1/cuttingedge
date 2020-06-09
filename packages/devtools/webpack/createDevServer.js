const paths = require('../config/paths');
const ignoredFiles = require('react-dev-utils/ignoredFiles');
const fs = require('fs');
const evalSourceMapMiddleware = require('react-dev-utils/evalSourceMapMiddleware');
const errorOverlayMiddleware = require('react-dev-utils/errorOverlayMiddleware');
const redirectServedPath = require('react-dev-utils/redirectServedPathMiddleware');

const createDevServer = ({ protocol, host, sockPort, proxy }) => {
  const sockHost = process.env.WDS_SOCKET_HOST;
  const sockPath = process.env.WDS_SOCKET_PATH;

  return {
    disableHostCheck: true,
    clientLogLevel: 'none',
    contentBase: paths.appPublic,
    compress: true,
    liveReload: false,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    hot: true,
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
      app.use(errorOverlayMiddleware());

      if (fs.existsSync(paths.proxySetup)) {
        require(paths.proxySetup)(app);
      }
    },
    after(app) {
      app.use(redirectServedPath(paths.publicUrlOrPath));
    },
  };
};

module.exports = {
  createDevServer,
};
