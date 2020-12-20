import { assert } from 'assert-ts';
import { prepareUrls, Urls } from 'react-dev-utils/WebpackDevServerUtils';

export const getUrlParts = ({
  ssrBuild,
  isProduction,
}: {
  ssrBuild: boolean;
  isProduction: boolean;
}): {
  readonly port: number;
  readonly protocol: 'https' | 'http';
  readonly host: string;
  readonly urls: Urls;
  readonly publicPath: string;
  readonly sockPort: number;
} => {
  const rawPort = process.env.PORT || 3000;

  assert(!!rawPort, 'No port number on environment variable PORT');

  const portOffset = ssrBuild && !isProduction ? 1 : 0;

  const port = Number(rawPort) + portOffset;
  const protocol = process.env.HTTPS === 'true' ? ('https' as const) : ('http' as const);
  const host = process.env.HOST || 'localhost';
  const urls = prepareUrls(protocol, host, port);
  const sockPort = Number(port);
  const publicPath = isProduction ? '/' : `${protocol}://${host}:${port}/`;

  return {
    port,
    protocol,
    host,
    urls,
    publicPath,
    sockPort,
  } as const;
};
