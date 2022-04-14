var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { useEffect, useState } from 'react';
import { css, jsx } from '@storybook/theming';
import { Placeholder } from '@storybook/components';
export var IFrame = function (_a) {
    var config = _a.config, _b = _a.defer, defer = _b === void 0 ? false : _b;
    var _c = useState(defer ? undefined : config.url), url = _c[0], setUrl = _c[1];
    var _d = useState(false), loaded = _d[0], setLoaded = _d[1];
    useEffect(function () {
        if (!defer) {
            return;
        }
        var handle = requestAnimationFrame(function () {
            setUrl(config.url);
        });
        return function () { return cancelAnimationFrame(handle); };
    }, [defer, config.url]);
    useEffect(function () {
        setLoaded(false);
    }, [url]);
    return (jsx("div", { css: $container },
        !loaded && jsx(Placeholder, { css: $loading }, "Loading..."),
        jsx("iframe", { css: $iframe, src: url, allowFullScreen: config.allowFullscreen, onLoad: function () { return setLoaded(true); } })));
};
export default IFrame;
var $container = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  overflow: hidden;\n"], ["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  overflow: hidden;\n"])));
var $loading = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n\n  transform: translate(-50%, -50%);\n"], ["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n\n  transform: translate(-50%, -50%);\n"])));
var $iframe = css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border: none;\n\n  z-index: 1;\n"], ["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border: none;\n\n  z-index: 1;\n"])));
var templateObject_1, templateObject_2, templateObject_3;
