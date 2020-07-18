"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUrlParts = void 0;
var assert_1 = require("../assert/assert");
var WebpackDevServerUtils_1 = require("react-dev-utils/WebpackDevServerUtils");
exports.getUrlParts = function () {
    var rawPort = process.env.PORT_DEV || process.env.PORT;
    assert_1.assert(!!rawPort, 'No port number on PORT or PORT_DEV');
    var port = Number(rawPort);
    var protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
    var host = process.env.HOST || 'localhost';
    var urls = WebpackDevServerUtils_1.prepareUrls(protocol, host, port);
    var sockPort = Number(process.env.WDS_SOCKET_PORT || port);
    var sockHost = process.env.WDS_SOCKET_HOST;
    var sockPath = process.env.WDS_SOCKET_PATH;
    return {
        port: port,
        protocol: protocol,
        host: host,
        urls: urls,
        sockPort: sockPort,
        sockHost: sockHost,
        sockPath: sockPath,
    };
};
//# sourceMappingURL=getUrlParts.js.map