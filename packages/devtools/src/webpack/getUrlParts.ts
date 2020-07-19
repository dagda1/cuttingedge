import { assert } from '../assert/assert';
import { prepareUrls } from 'react-dev-utils/WebpackDevServerUtils';

export const getUrlParts = () => {
  const rawPort = process.env.PORT_DEV || process.env.PORT;

  assert(!!rawPort, 'No port number on PORT or PORT_DEV');

  const port = Number(rawPort);
  const protocol = process.env.HTTPS === 'true' ? ('https' as const) : ('http' as const);
  const host = process.env.HOST || 'localhost';
  const urls = prepareUrls(protocol, host, port);

  return {
    port,
    protocol,
    host,
    urls,
  };
};
