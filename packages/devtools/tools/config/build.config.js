"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
var paths_1 = require("./paths");
exports.config = {
    client: {
        entries: paths_1.paths.appClientIndexJs,
        hotReloading: true,
        publicPath: '/',
        isNode: false,
    },
    server: {
        entries: paths_1.paths.appServerIndexJs,
        filename: 'server.js',
        bail: true,
        progress: true,
    },
    ts: {
        tsconfig: paths_1.paths.tsConfig,
        src: ['src/**/*.ts', 'src/**/*.tsx'],
        options: {
            verbose: true,
            outDir: 'dist',
        },
    },
    node: {
        entries: paths_1.paths.appSrc,
        filename: 'index.js',
        externals: [],
    },
    devServer: {
        entries: paths_1.paths.appSrc,
        devServer: true,
        isStaticBuild: true,
        publicDir: paths_1.paths.appPublic,
        publicPath: '/',
        typescriptOptions: {},
    },
};
//# sourceMappingURL=build.config.js.map