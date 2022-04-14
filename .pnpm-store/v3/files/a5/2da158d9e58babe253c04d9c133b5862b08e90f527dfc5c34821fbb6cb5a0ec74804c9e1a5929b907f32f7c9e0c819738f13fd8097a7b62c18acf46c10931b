"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZoomButtons = void 0;
var react_1 = require("react");
var theming_1 = require("@storybook/theming");
var components_1 = require("@storybook/components");
exports.ZoomButtons = function (_a) {
    var onZoomIn = _a.onZoomIn, onZoomOut = _a.onZoomOut, onReset = _a.onReset;
    return (theming_1.jsx(react_1.Fragment, null,
        theming_1.jsx(components_1.IconButton, { onClick: onZoomIn },
            theming_1.jsx(components_1.Icons, { icon: "zoom" })),
        theming_1.jsx(components_1.IconButton, { onClick: onZoomOut },
            theming_1.jsx(components_1.Icons, { icon: "zoomout" })),
        theming_1.jsx(components_1.IconButton, { onClick: onReset },
            theming_1.jsx(components_1.Icons, { icon: "zoomreset" }))));
};
exports.default = exports.ZoomButtons;
