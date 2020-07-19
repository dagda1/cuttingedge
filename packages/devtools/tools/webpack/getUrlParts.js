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
    return {
        port: port,
        protocol: protocol,
        host: host,
        urls: urls,
    };
};
//# sourceMappingURL=getUrlParts.js.map