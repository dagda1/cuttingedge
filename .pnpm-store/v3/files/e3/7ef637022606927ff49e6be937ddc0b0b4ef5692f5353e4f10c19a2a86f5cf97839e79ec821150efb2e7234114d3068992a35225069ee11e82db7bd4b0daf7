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
import { Fragment, lazy, Suspense } from 'react';
import { jsx } from '@storybook/theming';
import { Link, Placeholder } from '@storybook/components';
import { Figma } from './Figma';
import { IFrame } from './IFrame';
import { ImagePreview } from './Image';
import { LinkPanel } from './LinkPanel';
import { Tabs } from './Tabs';
var Figspec = lazy(function () { return import('./Figspec'); });
export var Wrapper = function (_a) {
    var config = _a.config;
    if (!config || ('length' in config && config.length === 0)) {
        return (jsx(Placeholder, null,
            jsx(Fragment, null, "No designs found"),
            jsx(Fragment, null,
                "Learn how to",
                ' ',
                jsx(Link, { href: "https://github.com/pocka/storybook-addon-designs#usage", target: "_blank", rel: "noopener", withArrow: true, cancel: false }, "display design preview for the story"))));
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
                return __assign(__assign({}, meta), { content: jsx(IFrame, { config: cfg }) });
            case 'figma':
                return __assign(__assign({}, meta), { content: jsx(Figma, { config: cfg }), offscreen: false });
            case 'figspec':
            case 'experimental-figspec':
                if (cfg.type === 'experimental-figspec') {
                    console.warn('[storybook-addon-designs] `experimental-figspec` is deprecated. We will remove it in v7.0. Please replace it to `figspec` type.');
                }
                return __assign(__assign({}, meta), { content: (jsx(Suspense, { fallback: "Preparing Figspec viewer..." },
                        jsx(Figspec, { config: cfg }))), offscreen: false });
            case 'image':
                return __assign(__assign({}, meta), { content: jsx(ImagePreview, { config: cfg }) });
            case 'link':
                return __assign(__assign({}, meta), { content: jsx(LinkPanel, { config: cfg }) });
        }
        return __assign(__assign({}, meta), { content: (jsx(Placeholder, null,
                jsx(Fragment, null, "Invalid config type"),
                jsx(Fragment, null,
                    "Config type you set is not supported. Please choose one from",
                    ' ',
                    jsx(Link, { href: "https://github.com/pocka/storybook-addon-designs#available-types", target: "_blank", rel: "noopener", withArrow: true, cancel: false }, "available config types")))) });
    });
    if (tabs.length === 1) {
        return jsx("div", null, tabs[0].content);
    }
    return jsx(Tabs, { tabs: tabs });
};
export default Wrapper;
