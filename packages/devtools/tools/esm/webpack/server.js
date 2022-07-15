import { merge } from 'webpack-merge';
import webpack from 'webpack';
import nodeExternals from 'webpack-node-externals';
import { paths } from '../config/paths.js';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import StartServerPlugin from 'razzle-start-server-webpack-plugin';
import { configureCommon } from './common.js';
import { getEnvironment } from './getEnvironment.js';
import { isPlugin } from './guards.js';
import { getUrlParts } from './getUrlParts.js';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getExternals = function (isDevelopment) {
    return [
        nodeExternals(),
        nodeExternals({
            modulesDir: paths.monorepoNodeModules,
            allowlist: [
                // isDevelopment ? 'webpack/hot/poll?300' : null,
                /\.(eot|woff|woff2|ttf|otf)$/,
                /\.(svg|png|jpg|jpeg|gif|ico)$/,
                /\.(mp4|mp3|ogg|swf|webp)$/,
                /\.(css|scss|sass|sss|less)$/,
                /\.css.ts$/,
                /^mathjax-full/,
                /^@babel/,
                /^@loadable/,
                /^@cutting/,
                /^@vanilla-extract/,
                /^@capsizecss/,
            ].filter(Boolean),
        }),
    ];
};
export const configure = (options, overrides = {}) => {
    const common = configureCommon({ ...options, isNode: true, ssrBuild: true, isWeb: false }, overrides);
    const { isDevelopment, isProduction } = getEnvironment();
    const { publicPath } = getUrlParts({ ssrBuild: true, isProduction });
    const entries = Array.isArray(options.entries) ? options.entries : [options.entries];
    let nodeArgs;
    if (isDevelopment) {
        nodeArgs = ['-r', 'source-map-support/register'];
        // Passthrough --inspect and --inspect-brk flags (with optional [host:port] value) to node
        if (process.env.INSPECT_BRK) {
            nodeArgs.push(process.env.INSPECT_BRK);
        }
        else if (process.env.INSPECT) {
            nodeArgs.push(process.env.INSPECT);
        }
    }
    const config = merge(common, overrides, {
        name: 'server',
        target: 'node',
        watch: isDevelopment,
        externals: getExternals(isDevelopment),
        entry: entries,
        stats: 'verbose',
        output: {
            path: paths.appBuild,
            filename: options.filename,
            publicPath,
            libraryTarget: 'commonjs2',
        },
        plugins: [
            new webpack.optimize.LimitChunkCountPlugin({
                maxChunks: 1,
            }),
            isDevelopment && new webpack.HotModuleReplacementPlugin(),
            isDevelopment &&
                new StartServerPlugin({
                    name: 'server.js',
                    nodeArgs,
                }),
        ].filter(isPlugin),
        optimization: {
            minimize: false,
        },
    });
    return config;
};
//# sourceMappingURL=server.js.map