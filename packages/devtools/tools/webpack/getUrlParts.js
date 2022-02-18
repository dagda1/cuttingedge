'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.getUrlParts = void 0;
const assert_ts_1 = require('assert-ts');
const WebpackDevServerUtils_1 = require('react-dev-utils/WebpackDevServerUtils');
const getUrlParts = ({ ssrBuild, isProduction }) => {
  const rawPort = process.env.PORT || 3000;
  (0, assert_ts_1.assert)(!!rawPort, 'No port number on environment variable PORT');
  const portOffset = ssrBuild && !isProduction ? 1 : 0;
  const port = Number(rawPort) + portOffset;
  const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
  const host = process.env.HOST || 'localhost';
  const urls = (0, WebpackDevServerUtils_1.prepareUrls)(protocol, host, port);
  const sockPort = Number(port);
  const publicPath = isProduction ? '/' : `${protocol}://${host}:${port}/`;
  return {
    port,
    protocol,
    host,
    urls,
    publicPath,
    sockPort,
  };
};
exports.getUrlParts = getUrlParts;
//# sourceMappingURL=getUrlParts.js.map
