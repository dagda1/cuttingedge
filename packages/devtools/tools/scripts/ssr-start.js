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
    return new Promise(function (resolve) {
        var _a;
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
        var watching;
        clientCompiler.hooks.done.tap('cutting', function () {
            watching = serverCompiler.watch({}, 
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            function (stats) { return ({}); });
        });
        /**
         * Create a new instance of Webpack-dev-server for assets only
         * This will actually run on a different port than the main app.
         */
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var clientDevServer = new webpack_dev_server_1.default(clientConfig.devServer, clientCompiler);
        clientDevServer.listen(port, (_a = clientConfig.devServer) === null || _a === void 0 ? void 0 : _a.host, function (err) {
            if (err) {
                logger_1.logger.error(err);
            }
        });
        ['SIGINT', 'SIGTERM'].forEach(function (sig) {
            process.on(sig, function () {
                if (clientDevServer) {
                    clientDevServer.close();
                }
                if (watching) {
                    watching.close(function (err) {
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
(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                empty_build_dir_1.emptyBuildDir();
                return [4 /*yield*/, main()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); })();
//# sourceMappingURL=ssr-start.js.map