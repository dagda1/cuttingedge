process.env.NODE_ENV = 'development';
import fs from 'fs-extra';
import webpack from 'webpack';
import { paths } from '../config/paths.js';
import devServer from 'webpack-dev-server';
import printErrors from './printErrors';
import { logger } from './logger.js';
import { merge } from 'webpack-merge';
import { configure as configureWebpackClient } from '../webpack/client';
import { configure as configureWebpackServer } from '../webpack/server';
import { config as globalBuildConfig } from '../config/build.config';
import { getUrlParts } from '../webpack/getUrlParts';
import { emptyBuildDir } from './empty-build-dir';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
process.noDeprecation = true;
function compile(config) {
    let compiler;
    try {
        compiler = webpack(config);
    }
    catch (e) {
        if (e instanceof Error) {
            printErrors('Failed to compile.', [e]);
        }
        process.exit(1);
    }
    return compiler;
}
// Capture any --inspect or --inspect-brk flags (with optional values) so that we
// can pass them when we invoke nodejs
process.env.INSPECT_BRK = process.argv.find((arg) => arg.match(/--inspect-brk(=|$)/)) || '';
process.env.INSPECT = process.argv.find((arg) => arg.match(/--inspect(=|$)/)) || '';
function main() {
    return new Promise((resolve) => {
        logger.start('Compiling...');
        fs.removeSync(paths.appManifest);
        const localBuildConfig = require(paths.localBuildConfig);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const buildConfig = merge(globalBuildConfig, localBuildConfig);
        const { port } = getUrlParts({ ssrBuild: true, isProduction: false });
        const clientConfig = configureWebpackClient({ ...buildConfig.client, isStaticBuild: false });
        const serverConfig = configureWebpackServer(buildConfig.server);
        const clientCompiler = compile(clientConfig);
        const serverCompiler = compile(serverConfig);
        let watching;
        clientCompiler.hooks.done.tap('cutting', () => {
            watching = serverCompiler.watch({}, 
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            (stats) => ({}));
        });
        /**
         * Create a new instance of Webpack-dev-server for assets only
         * This will actually run on a different port than the main app.
         */
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const clientDevServer = new devServer(clientConfig.devServer, clientCompiler);
        clientDevServer.listen(port, clientConfig.devServer?.host, (err) => {
            if (err) {
                logger.error(err);
            }
        });
        ['SIGINT', 'SIGTERM'].forEach((sig) => {
            process.on(sig, () => {
                if (clientDevServer) {
                    clientDevServer.close();
                }
                if (watching) {
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    watching.close((err, _result) => {
                        if (err) {
                            logger.error(err);
                            process.exit(1);
                        }
                    });
                }
            });
        });
        resolve();
    });
}
(async () => {
    emptyBuildDir();
    await main();
})();
//# sourceMappingURL=ssr-start.js.map