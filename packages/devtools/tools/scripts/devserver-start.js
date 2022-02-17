"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';
process.on('unhandledRejection', (err) => {
    throw err;
});
const webpack_dev_server_1 = __importDefault(require("webpack-dev-server"));
const openBrowser_1 = __importDefault(require("react-dev-utils/openBrowser"));
const paths_1 = require("../config/paths");
const logger_1 = require("../scripts/logger");
const WebpackDevServerUtils_1 = require("react-dev-utils/WebpackDevServerUtils");
const webpack_1 = __importDefault(require("webpack"));
const client_1 = require("../webpack/client");
const build_config_1 = require("../config/build.config");
const assert_ts_1 = require("assert-ts");
const fs_extra_1 = __importDefault(require("fs-extra"));
const createScaffold_1 = require("./createScaffold");
const { devServer } = build_config_1.config;
(0, assert_ts_1.assert)(devServer, 'no devServer node');
(0, assert_ts_1.assert)(devServer.publicDir, 'no publicDir');
(0, assert_ts_1.assert)(devServer.entries, 'no devServer entries');
const DEFAULT_PORT = Number(process.env.PORT) || 3000;
const HOST = process.env.HOST || '0.0.0.0';
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!fs_extra_1.default.existsSync(devServer.publicDir) && !fs_extra_1.default.existsSync(paths_1.paths.devDirPublic)) {
            (0, createScaffold_1.scaffold)();
        }
        if (!fs_extra_1.default.existsSync(devServer.publicDir) && fs_extra_1.default.existsSync(paths_1.paths.devDirPublic)) {
            devServer.publicDir = paths_1.paths.devDirPublic;
            devServer.entries = paths_1.paths.devDir;
        }
        const config = (0, client_1.configure)(devServer);
        const port = yield (0, WebpackDevServerUtils_1.choosePort)(HOST, DEFAULT_PORT);
        if (port === null) {
            logger_1.logger.error('We have not found a port.');
            return;
        }
        const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
        const pkg = yield Promise.resolve().then(() => __importStar(require(paths_1.paths.appPackageJson)));
        const { name: appName, proxy: proxySetting } = pkg;
        const urls = (0, WebpackDevServerUtils_1.prepareUrls)(protocol, HOST, port);
        const compiler = (0, WebpackDevServerUtils_1.createCompiler)({ webpack: webpack_1.default, config, appName, urls });
        (0, assert_ts_1.assert)(!!config.devServer, 'no devServer in dev-server-start');
        config.devServer.proxy = (0, WebpackDevServerUtils_1.prepareProxy)(proxySetting, paths_1.paths.appPublic, paths_1.paths.publicUrlOrPath);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const server = new webpack_dev_server_1.default(config.devServer, compiler);
        logger_1.logger.info('Starting the development server...\n');
        server.startCallback(() => {
            (0, openBrowser_1.default)(urls.localUrlForBrowser);
        });
        ['SIGINT', 'SIGTERM'].forEach((sig) => {
            process.on(sig, function () {
                server.close();
                process.exit();
            });
        });
    }
    catch (err) {
        if (err instanceof Error) {
            console.error(err);
            logger_1.logger.error(err.message);
        }
        process.exit(1);
    }
}))();
//# sourceMappingURL=devserver-start.js.map