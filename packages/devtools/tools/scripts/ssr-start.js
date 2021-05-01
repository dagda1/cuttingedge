"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var logger_1 = require("./logger");
var webpack_merge_1 = require("webpack-merge");
var client_1 = require("../webpack/client");
var server_1 = require("../webpack/server");
var build_config_1 = require("../config/build.config");
var getUrlParts_1 = require("../webpack/getUrlParts");
var empty_build_dir_1 = require("./empty-build-dir");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    empty_build_dir_1.emptyBuildDir();
    logger_1.logger.start('Compiling...');
    fs_extra_1.default.removeSync(paths_1.paths.appManifest);
    var localBuildConfig = require(paths_1.paths.localBuildConfig);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var buildConfig = webpack_merge_1.merge(build_config_1.config, localBuildConfig);
    var port = getUrlParts_1.getUrlParts({ ssrBuild: true, isProduction: false }).port;
    var clientConfig = client_1.configure(__assign(__assign({}, buildConfig.client), { isStaticBuild: false }));
    var serverConfig = server_1.configure(buildConfig.server);
    var clientCompiler = compile(clientConfig);
    var serverCompiler = compile(serverConfig);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    clientDevServer.listen(port, function (err) {
        if (err) {
            logger_1.logger.error(err);
        }
    });
}
main();
//# sourceMappingURL=ssr-start.js.map