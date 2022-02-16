"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createWebpackOptimisation = void 0;
const terser_webpack_plugin_1 = __importDefault(require("terser-webpack-plugin"));
const crypto_1 = __importDefault(require("crypto"));
const path_1 = __importDefault(require("path"));
const image_minimizer_webpack_plugin_1 = __importDefault(require("image-minimizer-webpack-plugin"));
// import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
const FRAMEWORK_BUNDLES = ['react', 'react-dom'];
const isModuleCSS = (module) => {
    return (module.type === `css/mini-extract` ||
        module.type === `css/extract-chunks` ||
        module.type === `css/extract-css-chunks`);
};
const createWebpackOptimisation = ({ optimization, isProduction, }) => (Object.assign(Object.assign({}, optimization), {
    minimize: isProduction,
    concatenateModules: isProduction,
    emitOnErrors: true,
    minimizer: [
        new terser_webpack_plugin_1.default({ extractComments: false }),
        new image_minimizer_webpack_plugin_1.default({
            minimizer: {
                implementation: image_minimizer_webpack_plugin_1.default.imageminMinify,
                options: {
                    // Lossless optimization with custom option
                    plugins: [
                        ['gifsicle', { interlaced: true }],
                        ['jpegtran', { progressive: true }],
                        ['optipng', { optimizationLevel: 5 }],
                        [
                            'svgo',
                            {
                                plugins: [
                                    {
                                        removeViewBox: false,
                                    },
                                ],
                            },
                        ],
                    ],
                },
            },
        }),
    ],
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
                test: new RegExp(`(?<!node_modules.*)[\\\\/]node_modules[\\\\/](${FRAMEWORK_BUNDLES.join(`|`)})[\\\\/]`),
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
                test(module) {
                    return module.size() > 160000 && /node_modules[/\\]/.test(module.identifier());
                },
                // eslint-disable-next-line @typescript-eslint/ban-types
                name(module) {
                    const hash = crypto_1.default.createHash('sha1');
                    if (isModuleCSS(module)) {
                        module.updateHash(hash);
                    }
                    else {
                        if (!module.libIdent) {
                            throw new Error(`Encountered unknown module type: ${module.type}. Please open an issue.`);
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
                name(module, chunks) {
                    return (crypto_1.default
                        .createHash('sha1')
                        .update(chunks.reduce((acc, chunk) => {
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
exports.createWebpackOptimisation = createWebpackOptimisation;
//# sourceMappingURL=createWebpackOptimisation.js.map