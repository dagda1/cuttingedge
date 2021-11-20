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
exports.createWebpackOptimisation = void 0;
var terser_webpack_plugin_1 = __importDefault(require("terser-webpack-plugin"));
var crypto_1 = __importDefault(require("crypto"));
var path_1 = __importDefault(require("path"));
// import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
var FRAMEWORK_BUNDLES = ['react', 'react-dom'];
var isModuleCSS = function (module) {
    return (module.type === "css/mini-extract" ||
        module.type === "css/extract-chunks" ||
        module.type === "css/extract-css-chunks");
};
var createWebpackOptimisation = function (_a) {
    var optimization = _a.optimization, isProduction = _a.isProduction;
    return (__assign(__assign({}, optimization), {
        minimize: isProduction,
        concatenateModules: isProduction,
        emitOnErrors: true,
        minimizer: [new terser_webpack_plugin_1.default({ extractComments: false })],
        splitChunks: {
            chunks: 'all',
            automaticNameDelimiter: '-',
            maxSize: 245760,
            cacheGroups: {
                default: false,
                vendors: false,
                framework: {
                    name: 'framework',
                    chunks: 'all',
                    test: new RegExp("(?<!node_modules.*)[\\\\/]node_modules[\\\\/](".concat(FRAMEWORK_BUNDLES.join("|"), ")[\\\\/]")),
                    priority: 40,
                    enforce: true,
                },
                commons: {
                    name: 'commons',
                    minChunks: 5,
                    priority: 20,
                },
                lib: {
                    // eslint-disable-next-line @typescript-eslint/ban-types
                    test: function (module) {
                        return module.size() > 160000 && /node_modules[/\\]/.test(module.identifier());
                    },
                    // eslint-disable-next-line @typescript-eslint/ban-types
                    name: function (module) {
                        var hash = crypto_1.default.createHash('sha1');
                        if (isModuleCSS(module)) {
                            module.updateHash(hash);
                        }
                        else {
                            if (!module.libIdent) {
                                throw new Error("Encountered unknown module type: ".concat(module.type, ". Please open an issue."));
                            }
                            hash.update(module.libIdent({ context: path_1.default.resolve('.') }));
                        }
                        return hash.digest('hex').substring(0, 8);
                    },
                    priority: 30,
                    minChunks: 1,
                    reuseExistingChunk: true,
                },
                shared: {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    name: function (module, chunks) {
                        return (crypto_1.default
                            .createHash('sha1')
                            .update(chunks.reduce(function (acc, chunk) {
                            return acc + chunk.name;
                        }, ''))
                            .digest('hex') + (isModuleCSS(module) ? '_CSS' : ''));
                    },
                    priority: 10,
                    minChunks: 2,
                    reuseExistingChunk: true,
                },
            },
            maxInitialRequests: 25,
            minSize: 20000,
        },
    }));
};
exports.createWebpackOptimisation = createWebpackOptimisation;
//# sourceMappingURL=createWebpackOptimisation.js.map