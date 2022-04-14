var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { Fragment, useMemo } from 'react';
import { css, jsx } from '@storybook/theming';
import { FlexBar, Separator } from '@storybook/components';
import { Pan } from './Pan';
import { ZoomButtons } from './ZoomButtons';
import { useZoom } from './hooks/useZoom';
export var ImagePreview = function (_a) {
    var config = _a.config;
    var zoom = useZoom(config.scale || 1, [config.scale]);
    var imageStyles = useMemo(function () { return ({
        transform: "scale(" + zoom.scale + ")"
    }); }, [zoom.scale]);
    return (jsx("div", { css: $container },
        jsx(FlexBar, { border: true },
            jsx(Fragment, { key: "left" },
                jsx("p", null,
                    jsx("b", null, "Image")),
                jsx(Separator, null),
                jsx(ZoomButtons, { onReset: zoom.resetZoom, onZoomIn: zoom.zoomIn, onZoomOut: zoom.zoomOut }))),
        jsx(Pan, { css: $preview, defaultValue: config.offset },
            jsx("img", { css: $image, src: config.url, style: imageStyles }))));
};
export default ImagePreview;
var $container = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n"], ["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n"])));
var $preview = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  flex-grow: 1;\n"], ["\n  flex-grow: 1;\n"])));
var $image = css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n\n  pointer-events: none;\n  border-radius: 1px;\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);\n"], ["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n\n  pointer-events: none;\n  border-radius: 1px;\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);\n"])));
var templateObject_1, templateObject_2, templateObject_3;
