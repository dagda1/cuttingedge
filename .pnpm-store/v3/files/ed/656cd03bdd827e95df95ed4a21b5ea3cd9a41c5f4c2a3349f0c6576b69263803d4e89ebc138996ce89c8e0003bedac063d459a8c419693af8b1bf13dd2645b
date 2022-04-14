import _assign from "lodash/assign";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from "react";
import PropTypes from "prop-types";
import { Helpers, CommonProps, PointPathHelpers } from "victory-core";
import { useCanvasContext } from "./hooks/use-canvas-context";

var getPath = function (props) {
  var x = props.x,
      y = props.y,
      size = props.size,
      symbol = props.symbol;

  if (props.getPath) {
    return props.getPath(x, y, size);
  }

  var pathFunctions = {
    circle: PointPathHelpers.circle,
    square: PointPathHelpers.square,
    diamond: PointPathHelpers.diamond,
    triangleDown: PointPathHelpers.triangleDown,
    triangleUp: PointPathHelpers.triangleUp,
    plus: PointPathHelpers.plus,
    minus: PointPathHelpers.minus,
    star: PointPathHelpers.star,
    cross: PointPathHelpers.cross
  };
  var symbolFunction = typeof pathFunctions[symbol] === "function" ? pathFunctions[symbol] : pathFunctions.circle;
  return symbolFunction(x, y, size);
};

var evaluateProps = function (props) {
  /**
   * Potential evaluated props are:
   * `size`
   * `style`
   * `symbol`
   */
  var size = Helpers.evaluateProp(props.size, props);
  var style = Helpers.evaluateStyle(props.style, props);
  var symbol = Helpers.evaluateProp(props.symbol, props);
  return _assign({}, props, {
    size: size,
    style: style,
    symbol: symbol
  });
};

var CanvasPoint = function (initialProps) {
  var _useCanvasContext = useCanvasContext(),
      canvasRef = _useCanvasContext.canvasRef;

  var props = evaluateProps(initialProps);
  var draw = React.useCallback(function (ctx) {
    var style = props.style;
    var path = getPath(props);
    ctx.fillStyle = style.fill; // eslint-disable-next-line no-undef

    var path2d = new Path2D(path);
    ctx.fill(path2d);
  }, [props]);
  React.useEffect(function () {
    var ctx = canvasRef.current.getContext("2d");
    draw(ctx); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
};

CanvasPoint.propTypes = _objectSpread({}, CommonProps.primitiveProps, {
  datum: PropTypes.object,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
  x: PropTypes.number,
  y: PropTypes.number
});
export default CanvasPoint;