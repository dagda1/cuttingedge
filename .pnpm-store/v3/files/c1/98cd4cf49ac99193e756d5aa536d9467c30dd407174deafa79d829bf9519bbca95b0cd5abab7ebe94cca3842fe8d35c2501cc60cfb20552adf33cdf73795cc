import { useMemo } from 'react';
import { jsx } from '@storybook/theming';
import { IFrame } from './IFrame';
export var figmaURLPattern = /https:\/\/([w.-]+.)?figma.com\/(file|proto)\/([0-9a-zA-Z]{22,128})(?:\/.*)?$/;
export var isFigmaURL = function (url) { return figmaURLPattern.test(url); };
export var Figma = function (_a) {
    var config = _a.config;
    var iframeConfig = useMemo(function () {
        var isValid = isFigmaURL(config.url);
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
    return jsx(IFrame, { defer: true, config: iframeConfig });
};
