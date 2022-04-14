import _omit from "lodash/omit";
import _assign from "lodash/assign";
import React from "react";
import { Bar, getBarPath, getBarWidth, getCornerRadius, getPolarBarPath, getStyle } from "victory-bar";
import { useCanvasContext } from "./hooks/use-canvas-context";

var evaluateProps = function (props) {
  /**
   * Potential evaluated props of following must be evaluated in this order:
   * 1) `style`
   * 2) `barWidth`
   * 3) `cornerRadius`
   */
  var style = getStyle(props.style, props);
  var barWidth = getBarWidth(props.barWidth, _assign({}, props, {
    style: style
  }));
  var cornerRadius = getCornerRadius(props.cornerRadius, _assign({}, props, {
    style: style,
    barWidth: barWidth
  }));
  return _assign({}, props, {
    style: style,
    barWidth: barWidth,
    cornerRadius: cornerRadius
  });
};

export var usePreviousValue = function (value) {
  var ref = React.useRef();
  React.useEffect(function () {
    ref.current = value;
  });
  return ref.current;
};

var CanvasBar = function (initialProps) {
  var _useCanvasContext = useCanvasContext(),
      canvasRef = _useCanvasContext.canvasRef;

  var props = evaluateProps(initialProps);
  var polar = props.polar,
      style = props.style,
      barWidth = props.barWidth,
      cornerRadius = props.cornerRadius,
      origin = props.origin;
  var path2d = React.useMemo(function () {
    var p = polar ? getPolarBarPath(props, cornerRadius) : getBarPath(props, barWidth, cornerRadius);
    return new Path2D(p);
  }, [polar, barWidth, cornerRadius, props]);
  var previousPath = usePreviousValue(path2d);
  var draw = React.useCallback(function (ctx, path) {
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

  var clearPreviousPath = React.useCallback(function (ctx) {
    if (previousPath) {
      ctx.save(); // This ensures that the entire shape is erased

      ctx.lineWidth = style.strokeWidth + 2;
      ctx.globalCompositeOperation = "destination-out";
      draw(ctx, previousPath);
      ctx.stroke(previousPath);
      ctx.restore();
    }
  }, [draw, previousPath, style]);
  React.useEffect(function () {
    var ctx = canvasRef.current.getContext("2d");
    clearPreviousPath(ctx);
    draw(ctx, path2d);
  }, [canvasRef, draw, polar, barWidth, cornerRadius, props, path2d, clearPreviousPath]);
  return null;
};

CanvasBar.propTypes = _omit(Bar.propTypes, "pathComponent");
export default CanvasBar;