"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
process.env.NODE_ENV = 'development';
var fs_extra_1 = __importDefault(require("fs-extra"));
var webpack_1 = __importDefault(require("webpack"));
var paths_1 = require("../config/paths");
var webpack_dev_server_1 = __importDefault(require("webpack-dev-server"));
var printErrors_1 = __importDefault(require("./printErrors"));
var logger_1 = __importDefault(require("./logger"));
var setPorts_1 = require("./setPorts");
var webpack_merge_1 = __importDefault(require("webpack-merge"));
var client_1 = require("../webpack/client");
var server_1 = require("../webpack/server");
process.noDeprecation = true;
function compile(config) {
    var compiler;
    try {
        compiler = webpack_1.default(config);
    }
    catch (e) {
        printErrors_1.default('Failed to compile.', [e]);
        process.exit(1);
    }
    return compiler;
}
// Capture any --inspect or --inspect-brk flags (with optional values) so that we
// can pass them when we invoke nodejs
process.env.INSPECT_BRK = process.argv.find(function (arg) { return arg.match(/--inspect-brk(=|$)/); }) || '';
process.env.INSPECT = process.argv.find(function (arg) { return arg.match(/--inspect(=|$)/); }) || '';
function main() {
    fs_extra_1.default.emptyDirSync(paths_1.paths.appBuild);
    logger_1.default.start('Compiling...');
    fs_extra_1.default.removeSync(paths_1.paths.appManifest);
    var globalBuildConfig = require(paths_1.paths.jsBuildConfigPath);
    var localBuildConfig = require(paths_1.paths.localBuildConfig);
    var buildConfig = webpack_merge_1.default(globalBuildConfig, localBuildConfig);
    var clientConfig = !!buildConfig.client && client_1.configure(buildConfig.client);
    var serverConfig = !!buildConfig.server && server_1.configure(buildConfig.server);
    var clientCompiler = compile(clientConfig);
    var serverCompiler = compile(serverConfig);
    clientCompiler.plugin('done', function () {
        serverCompiler.watch({}, 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        function (stats) { return ({}); });
    });
    /**
     * Create a new instance of Webpack-dev-server for assets only
     * This will actually run on a different port than the main app.
     */
    var clientDevServer = new webpack_dev_server_1.default(clientCompiler, clientConfig.devServer);
    clientDevServer.listen((process.env.PORT && parseInt(process.env.PORT) + 1) || 3001, function (err) {
        if (err) {
            logger_1.default.error(err);
        }
    });
}
setPorts_1.setPorts().then(main).catch(logger_1.default.error);
//# sourceMappingURL=ssr-start.js.map