"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.usePreviousValue = void 0;

var _omit2 = _interopRequireDefault(require("lodash/omit"));

var _assign2 = _interopRequireDefault(require("lodash/assign"));

var _react = _interopRequireDefault(require("react"));

var _victoryBar = require("victory-bar");

var _useCanvasContext2 = require("./hooks/use-canvas-context");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var evaluateProps = function (props) {
  /**
   * Potential evaluated props of following must be evaluated in this order:
   * 1) `style`
   * 2) `barWidth`
   * 3) `cornerRadius`
   */
  var style = (0, _victoryBar.getStyle)(props.style, props);
  var barWidth = (0, _victoryBar.getBarWidth)(props.barWidth, (0, _assign2.default)({}, props, {
    style: style
  }));
  var cornerRadius = (0, _victoryBar.getCornerRadius)(props.cornerRadius, (0, _assign2.default)({}, props, {
    style: style,
    barWidth: barWidth
  }));
  return (0, _assign2.default)({}, props, {
    style: style,
    barWidth: barWidth,
    cornerRadius: cornerRadius
  });
};

var usePreviousValue = function (value) {
  var ref = _react.default.useRef();

  _react.default.useEffect(function () {
    ref.current = value;
  });

  return ref.current;
};

exports.usePreviousValue = usePreviousValue;

var CanvasBar = function (initialProps) {
  var _useCanvasContext = (0, _useCanvasContext2.useCanvasContext)(),
      canvasRef = _useCanvasContext.canvasRef;

  var props = evaluateProps(initialProps);
  var polar = props.polar,
      style = props.style,
      barWidth = props.barWidth,
      cornerRadius = props.cornerRadius,
      origin = props.origin;

  var path2d = _react.default.useMemo(function () {
    var p = polar ? (0, _victoryBar.getPolarBarPath)(props, cornerRadius) : (0, _victoryBar.getBarPath)(props, barWidth, cornerRadius);
    return new Path2D(p);
  }, [polar, barWidth, cornerRadius, props]);

  var previousPath = usePreviousValue(path2d);

  var draw = _react.default.useCallback(function (ctx, path) {
    ctx.fillStyle = style.fill;
    ctx.strokeStyle = style.stroke;
    ctx.globalAlpha = style.fillOpacity;
    ctx.lineWidth = style.strokeWidth;

    if (polar) {
      ctx.translate(origin.x, origin.y);
    }

    ctx.fill(path);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  }, [style, origin, polar]); // This will clear the previous bar without clearing the entire canvas


  var clearPreviousPath = _react.default.useCallback(function (ctx) {
    if (previousPath) {
      ctx.save(); // This ensures that the entire shape is erased

      ctx.lineWidth = style.strokeWidth + 2;
      ctx.globalCompositeOperation = "destination-out";
      draw(ctx, previousPath);
      ctx.stroke(previousPath);
      ctx.restore();
    }
  }, [draw, previousPath, style]);

  _react.default.useEffect(function () {
    var ctx = canvasRef.current.getContext("2d");
    clearPreviousPath(ctx);
    draw(ctx, path2d);
  }, [canvasRef, draw, polar, barWidth, cornerRadius, props, path2d, clearPreviousPath]);

  return null;
};

CanvasBar.propTypes = (0, _omit2.default)(_victoryBar.Bar.propTypes, "pathComponent");
var _default = CanvasBar;
exports.default = _default;