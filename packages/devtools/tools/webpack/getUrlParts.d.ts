import { Urls } from 'react-dev-utils/WebpackDevServerUtils';
export declare const getUrlParts: ({ ssrBuild, isProduction, }: {
    ssrBuild: boolean;
    isProduction: boolean;
}) => {
    readonly port: number;
    readonly protocol: 'https' | 'http';
    readonly host: string;
    readonly urls: Urls;
    readonly publicPath: string;
    readonly sockPort: number;
};
//# sourceMappingURL=getUrlParts.d.ts.map