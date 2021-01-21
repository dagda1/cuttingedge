"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUrlParts = void 0;
var assert_ts_1 = require("assert-ts");
var WebpackDevServerUtils_1 = require("react-dev-utils/WebpackDevServerUtils");
var getUrlParts = function (_a) {
    var ssrBuild = _a.ssrBuild, isProduction = _a.isProduction;
    var rawPort = process.env.PORT || 3000;
    assert_ts_1.assert(!!rawPort, 'No port number on environment variable PORT');
    var portOffset = ssrBuild && !isProduction ? 1 : 0;
    var port = Number(rawPort) + portOffset;
    var protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
    var host = process.env.HOST || 'localhost';
    var urls = WebpackDevServerUtils_1.prepareUrls(protocol, host, port);
    var sockPort = Number(port);
    var publicPath = isProduction ? '/' : protocol + "://" + host + ":" + port + "/";
    return {
        port: port,
        protocol: protocol,
        host: host,
        urls: urls,
        publicPath: publicPath,
        sockPort: sockPort,
    };
};
exports.getUrlParts = getUrlParts;
//# sourceMappingURL=getUrlParts.js.map