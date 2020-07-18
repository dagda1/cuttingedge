"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';
process.on('unhandledRejection', function (err) {
    throw err;
});
var webpack_dev_server_1 = __importDefault(require("webpack-dev-server"));
var clearConsole_1 = __importDefault(require("react-dev-utils/clearConsole"));
var openBrowser_1 = __importDefault(require("react-dev-utils/openBrowser"));
var paths_1 = require("../config/paths");
var fs_1 = __importDefault(require("fs"));
var logger_1 = __importDefault(require("../scripts/logger"));
var WebpackDevServerUtils_1 = require("react-dev-utils/WebpackDevServerUtils");
var webpack_1 = __importDefault(require("webpack"));
var client_1 = require("../webpack/client");
var build_config_1 = require("../config/build.config");
var assert_1 = require("../assert");
var isInteractive = process.stdout.isTTY;
var devServer = build_config_1.config.devServer;
assert_1.assert(devServer, 'no devServer node');
assert_1.assert(devServer.publicDir, 'no publicDir');
assert_1.assert(devServer.entries, 'no devServer entries');
if (!fs_1.default.existsSync(devServer.publicDir)) {
    devServer.publicDir = paths_1.paths.devDirPublic;
    devServer.entries = paths_1.paths.devDir;
}
var config = client_1.configure(devServer);
var DEFAULT_PORT = Number(process.env.PORT) || 3000;
var HOST = process.env.HOST || '0.0.0.0';
WebpackDevServerUtils_1.choosePort(HOST, DEFAULT_PORT)
    .then(function (port) {
    if (port === null) {
        logger_1.default.error('We have not found a port.');
        return;
    }
    var protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
    var appName = require(paths_1.paths.appPackageJson).name;
    var urls = WebpackDevServerUtils_1.prepareUrls(protocol, HOST, port);
    var useYarn = true;
    var compiler = WebpackDevServerUtils_1.createCompiler({ webpack: webpack_1.default, config: config, appName: appName, urls: urls, useYarn: useYarn });
    var proxySetting = require(paths_1.paths.appPackageJson).proxy;
    config.devServer.proxy = WebpackDevServerUtils_1.prepareProxy(proxySetting, paths_1.paths.appPublic, paths_1.paths.publicUrlOrPath);
    var devServer = new webpack_dev_server_1.default(compiler, config.devServer);
    devServer.listen(port, HOST, function (err) {
        if (err) {
            logger_1.default.error(err);
            return;
        }
        if (isInteractive) {
            clearConsole_1.default();
        }
        logger_1.default.info('Starting the development server...\n');
        openBrowser_1.default(urls.localUrlForBrowser);
    });
    ['SIGINT', 'SIGTERM'].forEach(function (sig) {
        process.on(sig, function () {
            devServer.close();
            process.exit();
        });
    });
})
    .catch(function (err) {
    if (err && err.message) {
        logger_1.default.error(err.message);
    }
    process.exit(1);
});
//# sourceMappingURL=devserver-start.js.map