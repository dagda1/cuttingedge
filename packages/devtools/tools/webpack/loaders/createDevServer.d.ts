import { Configuration, ProxyConfigArray, ProxyConfigMap } from 'webpack-dev-server';
export declare const createDevServer: ({ protocol, host, sockPort, proxy, port, }: {
    protocol: 'http' | 'https';
    host: string;
    port: number;
    sockPort: number;
    proxy?: ProxyConfigMap | ProxyConfigArray | undefined;
}) => Configuration;
//# sourceMappingURL=createDevServer.d.ts.map