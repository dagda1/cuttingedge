"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
var paths_1 = require("./paths");
var isProduction = process.env.NODE_ENV === 'production';
exports.config = {
    client: {
        entries: paths_1.paths.appSrc,
        hotReloading: true,
        isNode: false,
    },
    server: {
        entries: paths_1.paths.appServerIndexJs,
        filename: 'server.js',
        bail: true,
        ssrBuild: true,
        isNode: true,
    },
    ts: {
        tsconfig: isProduction ? paths_1.paths.tsConfigProduction : paths_1.paths.tsConfig,
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
        isNode: true,
        modulesDir: './node_modules',
    },
    devServer: {
        entries: paths_1.paths.appSrc,
        devServer: true,
        isStaticBuild: true,
        publicDir: paths_1.paths.appPublic,
    },
};
//# sourceMappingURL=build.config.js.map