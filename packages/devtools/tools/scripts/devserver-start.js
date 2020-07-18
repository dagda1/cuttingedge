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
require('../config/env').getClientEnv();
var webpack_1 = __importDefault(require("webpack"));
var webpack_dev_server_1 = __importDefault(require("webpack-dev-server"));
var clearConsole_1 = __importDefault(require("react-dev-utils/clearConsole"));
var checkRequiredFiles_1 = __importDefault(require("react-dev-utils/checkRequiredFiles"));
var openBrowser_1 = __importDefault(require("react-dev-utils/openBrowser"));
var paths_1 = require("../config/paths");
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var logger_1 = __importDefault(require("../scripts/logger"));
var WebpackDevServerUtils_1 = require("react-dev-utils/WebpackDevServerUtils");
var configureWebpackClient = require('../webpack/client').configure;
var isInteractive = process.stdout.isTTY;
var devServerConfig = require(paths_1.paths.jsBuildConfigPath).devServer;
if (!fs_1.default.existsSync(devServerConfig.publicDir)) {
    devServerConfig.publicDir = paths_1.paths.devDirPublic;
    devServerConfig.entries = paths_1.paths.devDir;
}
var config = configureWebpackClient(devServerConfig);
// Warn and crash if required files are missing
if (!checkRequiredFiles_1.default([path_1.default.join(devServerConfig.publicDir, 'index.html'), devServerConfig.entries])) {
    process.exit(1);
}
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