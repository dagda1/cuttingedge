"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IFrame = void 0;
var react_1 = require("react");
var theming_1 = require("@storybook/theming");
var components_1 = require("@storybook/components");
exports.IFrame = function (_a) {
    var config = _a.config, _b = _a.defer, defer = _b === void 0 ? false : _b;
    var _c = react_1.useState(defer ? undefined : config.url), url = _c[0], setUrl = _c[1];
    var _d = react_1.useState(false), loaded = _d[0], setLoaded = _d[1];
    react_1.useEffect(function () {
        if (!defer) {
            return;
        }
        var handle = requestAnimationFrame(function () {
            setUrl(config.url);
        });
        return function () { return cancelAnimationFrame(handle); };
    }, [defer, config.url]);
    react_1.useEffect(function () {
        setLoaded(false);
    }, [url]);
    return (theming_1.jsx("div", { css: $container },
        !loaded && theming_1.jsx(components_1.Placeholder, { css: $loading }, "Loading..."),
        theming_1.jsx("iframe", { css: $iframe, src: url, allowFullScreen: config.allowFullscreen, onLoad: function () { return setLoaded(true); } })));
};
exports.default = exports.IFrame;
var $container = theming_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  overflow: hidden;\n"], ["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  overflow: hidden;\n"])));
var $loading = theming_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n\n  transform: translate(-50%, -50%);\n"], ["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n\n  transform: translate(-50%, -50%);\n"])));
var $iframe = theming_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border: none;\n\n  z-index: 1;\n"], ["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border: none;\n\n  z-index: 1;\n"])));
var templateObject_1, templateObject_2, templateObject_3;
