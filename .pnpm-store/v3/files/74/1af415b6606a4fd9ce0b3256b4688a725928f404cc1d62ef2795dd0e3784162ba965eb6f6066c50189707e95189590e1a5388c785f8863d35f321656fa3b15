function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import PropTypes from "prop-types";
import React from "react";
import { CommonProps, LineHelpers } from "victory-core";
import { useCanvasContext } from "./hooks/use-canvas-context";

var CanvasCurve = function (props) {
  var _useCanvasContext = useCanvasContext(),
      canvasRef = _useCanvasContext.canvasRef,
      clear = _useCanvasContext.clear,
      clip = _useCanvasContext.clip;

  var style = props.style,
      data = props.data;
  var stroke = style.stroke,
      strokeWidth = style.strokeWidth;
  var draw = React.useCallback(function (ctx) {
    var line = LineHelpers.getLineFunction(props);
    ctx.strokeStyle = stroke;
    ctx.lineWidth = strokeWidth;
    line.context(ctx)(data);
    ctx.stroke();
  }, [data, props, stroke, strokeWidth]);
  React.useEffect(function () {
    var ctx = canvasRef.current.getContext("2d");
    clear(ctx);
    draw(ctx);
    clip(ctx);
  }, [canvasRef, draw, clear, clip]);
  return null;
};

CanvasCurve.propTypes = _objectSpread({}, CommonProps.primitiveProps, {
  interpolation: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  openCurve: PropTypes.bool,
  origin: PropTypes.object,
  polar: PropTypes.bool
});
export default CanvasCurve;