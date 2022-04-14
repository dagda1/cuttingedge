"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkPanel = void 0;
var theming_1 = require("@storybook/theming");
var components_1 = require("@storybook/components");
exports.LinkPanel = function (_a) {
    var _b, _c, _d;
    var config = _a.config;
    return (theming_1.jsx("div", { css: $container },
        theming_1.jsx(components_1.Link, { cancel: false, href: config.url, target: (_b = config.target) !== null && _b !== void 0 ? _b : '_blank', rel: (_c = config.rel) !== null && _c !== void 0 ? _c : 'noopener', withArrow: (_d = config.showArrow) !== null && _d !== void 0 ? _d : true }, config.label || config.url)));
};
exports.default = exports.LinkPanel;
var $container = theming_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"], ["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));
var templateObject_1;
