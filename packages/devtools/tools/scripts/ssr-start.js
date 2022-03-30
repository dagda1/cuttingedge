"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
process.env.NODE_ENV = 'development';
const fs_extra_1 = __importDefault(require("fs-extra"));
const webpack_1 = __importDefault(require("webpack"));
const paths_1 = require("../config/paths");
const webpack_dev_server_1 = __importDefault(require("webpack-dev-server"));
const printErrors_1 = __importDefault(require("./printErrors"));
const logger_1 = require("./logger");
const webpack_merge_1 = require("webpack-merge");
const client_1 = require("../webpack/client");
const server_1 = require("../webpack/server");
const build_config_1 = require("../config/build.config");
const getUrlParts_1 = require("../webpack/getUrlParts");
const empty_build_dir_1 = require("./empty-build-dir");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
process.noDeprecation = true;
function compile(config) {
    let compiler;
    try {
        compiler = (0, webpack_1.default)(config);
    }
    catch (e) {
        if (e instanceof Error) {
            (0, printErrors_1.default)('Failed to compile.', [e]);
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
        var _a;
        logger_1.logger.start('Compiling...');
        fs_extra_1.default.removeSync(paths_1.paths.appManifest);
        const localBuildConfig = require(paths_1.paths.localBuildConfig);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const buildConfig = (0, webpack_merge_1.merge)(build_config_1.config, localBuildConfig);
        const { port } = (0, getUrlParts_1.getUrlParts)({ ssrBuild: true, isProduction: false });
        const clientConfig = (0, client_1.configure)(Object.assign(Object.assign({}, buildConfig.client), { isStaticBuild: false }));
        const serverConfig = (0, server_1.configure)(buildConfig.server);
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
        const clientDevServer = new webpack_dev_server_1.default(clientConfig.devServer, clientCompiler);
        clientDevServer.listen(port, (_a = clientConfig.devServer) === null || _a === void 0 ? void 0 : _a.host, (err) => {
            if (err) {
                logger_1.logger.error(err);
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
                            logger_1.logger.error(err);
                            process.exit(1);
                        }
                    });
                }
            });
        });
        resolve();
    });
}
(() => __awaiter(void 0, void 0, void 0, function* () {
    (0, empty_build_dir_1.emptyBuildDir)();
    yield main();
}))();
//# sourceMappingURL=ssr-start.js.map