import { assert } from '@cutting/util';
import { prepareUrls } from 'react-dev-utils/WebpackDevServerUtils';

export const getUrlParts = () => {
  const rawPort = process.env.PORT_DEV || process.env.PORT;

  assert(!!rawPort, 'No port number on PORT or PORT_DEV');

  const port = Number(rawPort);
  const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
  const host = process.env.HOST || 'localhost';
  const urls = prepareUrls(protocol, host, port);
  const sockPort = process.env.WDS_SOCKET_PORT || port;
  const sockHost = process.env.WDS_SOCKET_HOST;
  const sockPath = process.env.WDS_SOCKET_PATH;

  return {
    port,
    protocol,
    host,
    urls,
    sockPort,
    sockHost,
    sockPath,
  };
};
