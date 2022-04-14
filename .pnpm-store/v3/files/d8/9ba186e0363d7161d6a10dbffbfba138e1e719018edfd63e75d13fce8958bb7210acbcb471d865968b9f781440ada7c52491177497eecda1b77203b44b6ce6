"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wrapper = void 0;
var react_1 = require("react");
var theming_1 = require("@storybook/theming");
var components_1 = require("@storybook/components");
var Figma_1 = require("./Figma");
var IFrame_1 = require("./IFrame");
var Image_1 = require("./Image");
var LinkPanel_1 = require("./LinkPanel");
var Tabs_1 = require("./Tabs");
var Figspec = react_1.lazy(function () { return Promise.resolve().then(function () { return require('./Figspec'); }); });
exports.Wrapper = function (_a) {
    var config = _a.config;
    if (!config || ('length' in config && config.length === 0)) {
        return (theming_1.jsx(components_1.Placeholder, null,
            theming_1.jsx(react_1.Fragment, null, "No designs found"),
            theming_1.jsx(react_1.Fragment, null,
                "Learn how to",
                ' ',
                theming_1.jsx(components_1.Link, { href: "https://github.com/pocka/storybook-addon-designs#usage", target: "_blank", rel: "noopener", withArrow: true, cancel: false }, "display design preview for the story"))));
    }
    var tabs = __spreadArrays((config instanceof Array ? config : [config])).map(function (cfg, i) {
        var _a;
        var meta = {
            id: JSON.stringify(cfg),
            name: cfg.name || cfg.type.toUpperCase(),
            offscreen: (_a = cfg.offscreen) !== null && _a !== void 0 ? _a : true,
        };
        switch (cfg.type) {
            case 'iframe':
                return __assign(__assign({}, meta), { content: theming_1.jsx(IFrame_1.IFrame, { config: cfg }) });
            case 'figma':
                return __assign(__assign({}, meta), { content: theming_1.jsx(Figma_1.Figma, { config: cfg }), offscreen: false });
            case 'figspec':
            case 'experimental-figspec':
                if (cfg.type === 'experimental-figspec') {
                    console.warn('[storybook-addon-designs] `experimental-figspec` is deprecated. We will remove it in v7.0. Please replace it to `figspec` type.');
                }
                return __assign(__assign({}, meta), { content: (theming_1.jsx(react_1.Suspense, { fallback: "Preparing Figspec viewer..." },
                        theming_1.jsx(Figspec, { config: cfg }))), offscreen: false });
            case 'image':
                return __assign(__assign({}, meta), { content: theming_1.jsx(Image_1.ImagePreview, { config: cfg }) });
            case 'link':
                return __assign(__assign({}, meta), { content: theming_1.jsx(LinkPanel_1.LinkPanel, { config: cfg }) });
        }
        return __assign(__assign({}, meta), { content: (theming_1.jsx(components_1.Placeholder, null,
                theming_1.jsx(react_1.Fragment, null, "Invalid config type"),
                theming_1.jsx(react_1.Fragment, null,
                    "Config type you set is not supported. Please choose one from",
                    ' ',
                    theming_1.jsx(components_1.Link, { href: "https://github.com/pocka/storybook-addon-designs#available-types", target: "_blank", rel: "noopener", withArrow: true, cancel: false }, "available config types")))) });
    });
    if (tabs.length === 1) {
        return theming_1.jsx("div", null, tabs[0].content);
    }
    return theming_1.jsx(Tabs_1.Tabs, { tabs: tabs });
};
exports.default = exports.Wrapper;
