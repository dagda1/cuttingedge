"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Figma = exports.isFigmaURL = exports.figmaURLPattern = void 0;
var react_1 = require("react");
var theming_1 = require("@storybook/theming");
var IFrame_1 = require("./IFrame");
exports.figmaURLPattern = /https:\/\/([w.-]+.)?figma.com\/(file|proto)\/([0-9a-zA-Z]{22,128})(?:\/.*)?$/;
exports.isFigmaURL = function (url) { return exports.figmaURLPattern.test(url); };
exports.Figma = function (_a) {
    var config = _a.config;
    var iframeConfig = react_1.useMemo(function () {
        var isValid = exports.isFigmaURL(config.url);
        if (!isValid) {
            console.warn('[storybook-addon-designs] ' +
                'The URL you specified is not valid Figma URL.\n' +
                'The addon fallbacks to normal iframe mode.' +
                'For more detail, please check <https://www.figma.com/developers/embed>.');
            return config;
        }
        var embedHost = config.embedHost || location.hostname;
        var url = "https://www.figma.com/embed?embed_host=" + embedHost + "&url=" + config.url;
        return {
            url: url,
            allowFullscreen: config.allowFullscreen,
        };
    }, [config.url, config.allowFullscreen, config.embedHost]);
    return theming_1.jsx(IFrame_1.IFrame, { defer: true, config: iframeConfig });
};
