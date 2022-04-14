"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImagePreview = void 0;
var react_1 = require("react");
var theming_1 = require("@storybook/theming");
var components_1 = require("@storybook/components");
var Pan_1 = require("./Pan");
var ZoomButtons_1 = require("./ZoomButtons");
var useZoom_1 = require("./hooks/useZoom");
exports.ImagePreview = function (_a) {
    var config = _a.config;
    var zoom = useZoom_1.useZoom(config.scale || 1, [config.scale]);
    var imageStyles = react_1.useMemo(function () { return ({
        transform: "scale(" + zoom.scale + ")"
    }); }, [zoom.scale]);
    return (theming_1.jsx("div", { css: $container },
        theming_1.jsx(components_1.FlexBar, { border: true },
            theming_1.jsx(react_1.Fragment, { key: "left" },
                theming_1.jsx("p", null,
                    theming_1.jsx("b", null, "Image")),
                theming_1.jsx(components_1.Separator, null),
                theming_1.jsx(ZoomButtons_1.ZoomButtons, { onReset: zoom.resetZoom, onZoomIn: zoom.zoomIn, onZoomOut: zoom.zoomOut }))),
        theming_1.jsx(Pan_1.Pan, { css: $preview, defaultValue: config.offset },
            theming_1.jsx("img", { css: $image, src: config.url, style: imageStyles }))));
};
exports.default = exports.ImagePreview;
var $container = theming_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n"], ["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n"])));
var $preview = theming_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  flex-grow: 1;\n"], ["\n  flex-grow: 1;\n"])));
var $image = theming_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n\n  pointer-events: none;\n  border-radius: 1px;\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);\n"], ["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n\n  pointer-events: none;\n  border-radius: 1px;\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);\n"])));
var templateObject_1, templateObject_2, templateObject_3;
