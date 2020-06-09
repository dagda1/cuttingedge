const { prepareUrls } = require('react-dev-utils/WebpackDevServerUtils');

function getUrlParts({ isProduction }) {
  const rawPort = process.env.PORT_DEV || process.env.PORT;

  if (!isProduction && !rawPort) {
    throw new Error('No port number on PORT or PORT_DEV');
  }

  const port = parseInt(rawPort, 10);
  const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
  const host = process.env.HOST || 'localhost';
  const urls = prepareUrls(protocol, host, port);
  const sockPort = process.env.WDS_SOCKET_PORT || port;

  return {
    port,
    protocol,
    host,
    urls,
    sockPort,
  };
}

module.exports = {
  getUrlParts,
};
