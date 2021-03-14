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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
var logger_1 = require("../scripts/logger");
var WebpackDevServerUtils_1 = require("react-dev-utils/WebpackDevServerUtils");
var webpack_1 = __importDefault(require("webpack"));
var client_1 = require("../webpack/client");
var build_config_1 = require("../config/build.config");
var assert_ts_1 = require("assert-ts");
var fs_extra_1 = __importDefault(require("fs-extra"));
var createScaffold_1 = require("./createScaffold");
var isInteractive = process.stdout.isTTY;
var devServer = build_config_1.config.devServer;
assert_ts_1.assert(devServer, 'no devServer node');
assert_ts_1.assert(devServer.publicDir, 'no publicDir');
assert_ts_1.assert(devServer.entries, 'no devServer entries');
var DEFAULT_PORT = Number(process.env.PORT) || 3000;
var HOST = process.env.HOST || '0.0.0.0';
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var config, port, protocol, pkg, appName, proxySetting, urls_1, compiler, server_1, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                if (!fs_extra_1.default.existsSync(devServer.publicDir) && !fs_extra_1.default.existsSync(paths_1.paths.devDirPublic)) {
                    createScaffold_1.scaffold();
                }
                if (!fs_extra_1.default.existsSync(devServer.publicDir) && fs_extra_1.default.existsSync(paths_1.paths.devDirPublic)) {
                    devServer.publicDir = paths_1.paths.devDirPublic;
                    devServer.entries = paths_1.paths.devDir;
                }
                config = client_1.configure(devServer);
                return [4 /*yield*/, WebpackDevServerUtils_1.choosePort(HOST, DEFAULT_PORT)];
            case 1:
                port = _a.sent();
                if (port === null) {
                    logger_1.logger.error('We have not found a port.');
                    return [2 /*return*/];
                }
                protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
                return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require(paths_1.paths.appPackageJson)); })];
            case 2:
                pkg = _a.sent();
                appName = pkg.name, proxySetting = pkg.proxy;
                urls_1 = WebpackDevServerUtils_1.prepareUrls(protocol, HOST, port);
                compiler = WebpackDevServerUtils_1.createCompiler({ webpack: webpack_1.default, config: config, appName: appName, urls: urls_1, useYarn: true });
                assert_ts_1.assert(!!config.devServer, 'no devServer in dev-server-start');
                config.devServer.proxy = WebpackDevServerUtils_1.prepareProxy(proxySetting, paths_1.paths.appPublic, paths_1.paths.publicUrlOrPath);
                server_1 = new webpack_dev_server_1.default(compiler, config.devServer);
                server_1.listen(port, HOST, function (err) {
                    if (err) {
                        logger_1.logger.error(err);
                        return;
                    }
                    if (isInteractive) {
                        clearConsole_1.default();
                    }
                    logger_1.logger.info('Starting the development server...\n');
                    openBrowser_1.default(urls_1.localUrlForBrowser);
                });
                ['SIGINT', 'SIGTERM'].forEach(function (sig) {
                    process.on(sig, function () {
                        server_1.close();
                        process.exit();
                    });
                });
                return [3 /*break*/, 4];
            case 3:
                err_1 = _a.sent();
                if (err_1) {
                    logger_1.logger.error(err_1.message);
                }
                process.exit(1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); })();
//# sourceMappingURL=devserver-start.js.map