import { assert } from '../assert/assert';
import { prepareUrls } from 'react-dev-utils/WebpackDevServerUtils';

export const getUrlParts = ({ ssrBuild, isProduction }: { ssrBuild: boolean; isProduction: boolean }) => {
  const rawPort = process.env.PORT_DEV || process.env.PORT;

  assert(!!rawPort, 'No port number on PORT or PORT_DEV');

  const portOffset = ssrBuild ? 0 : 1;

  const port = Number(rawPort) + portOffset;
  const protocol = process.env.HTTPS === 'true' ? ('https' as const) : ('http' as const);
  const host = process.env.HOST || 'localhost';
  const urls = prepareUrls(protocol, host, port);
  const publicPath = isProduction ? '/' : `${protocol}://${host}:${port}/`;

  return {
    port,
    protocol,
    host,
    urls,
    publicPath,
  } as const;
};
