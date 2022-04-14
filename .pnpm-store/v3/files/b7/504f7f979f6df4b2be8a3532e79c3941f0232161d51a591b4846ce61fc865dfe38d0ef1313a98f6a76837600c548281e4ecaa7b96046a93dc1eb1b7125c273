import _assign from "lodash/assign";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import PropTypes from "prop-types";
import React from "react";
import { CommonProps, Helpers, Path } from "victory-core";
import { getStyle, getBarWidth, getCornerRadius } from "./bar-helper-methods";
import { getPolarBarPath, getBarPath } from "./path-helper-methods";

var evaluateProps = function (props) {
  /**
   * Potential evaluated props of following must be evaluated in this order:
   * 1) `style`
   * 2) `barWidth`
   * 3) `cornerRadius`
   *
   * Everything else does not have to be evaluated in a particular order:
   * `ariaLabel`
   * `desc`
   * `id`
   * `tabIndex`
   */
  var style = getStyle(props.style, props);
  var barWidth = getBarWidth(props.barWidth, _assign({}, props, {
    style: style
  }));
  var cornerRadius = getCornerRadius(props.cornerRadius, _assign({}, props, {
    style: style,
    barWidth: barWidth
  }));
  var ariaLabel = Helpers.evaluateProp(props.ariaLabel, props);
  var desc = Helpers.evaluateProp(props.desc, props);
  var id = Helpers.evaluateProp(props.id, props);
  var tabIndex = Helpers.evaluateProp(props.tabIndex, props);
  return _assign({}, props, {
    ariaLabel: ariaLabel,
    style: style,
    barWidth: barWidth,
    cornerRadius: cornerRadius,
    desc: desc,
    id: id,
    tabIndex: tabIndex
  });
};

var Bar = function (props) {
  props = evaluateProps(props);
  var _props = props,
      polar = _props.polar,
      origin = _props.origin,
      style = _props.style,
      barWidth = _props.barWidth,
      cornerRadius = _props.cornerRadius;
  var path = polar ? getPolarBarPath(props, cornerRadius) : getBarPath(props, barWidth, cornerRadius);
  var defaultTransform = polar && origin ? "translate(".concat(origin.x, ", ").concat(origin.y, ")") : undefined;
  return React.cloneElement(props.pathComponent, _objectSpread({}, props.events, {
    "aria-label": props.ariaLabel,
    style: style,
    d: path,
    className: props.className,
    clipPath: props.clipPath,
    desc: props.desc,
    index: props.index,
    role: props.role,
    shapeRendering: props.shapeRendering,
    transform: props.transform || defaultTransform,
    tabIndex: props.tabIndex
  }));
};

Bar.propTypes = _objectSpread({}, CommonProps.primitiveProps, {
  alignment: PropTypes.oneOf(["start", "middle", "end"]),
  barRatio: PropTypes.number,
  barWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
  cornerRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.func, PropTypes.shape({
    top: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
    topLeft: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
    topRight: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
    bottom: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
    bottomLeft: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
    bottomRight: PropTypes.oneOfType([PropTypes.number, PropTypes.func])
  })]),
  datum: PropTypes.object,
  getPath: PropTypes.func,
  horizontal: PropTypes.bool,
  pathComponent: PropTypes.element,
  width: PropTypes.number,
  x: PropTypes.number,
  y: PropTypes.number,
  y0: PropTypes.number
});
Bar.defaultProps = {
  defaultBarWidth: 8,
  pathComponent: React.createElement(Path, null),
  role: "presentation",
  shapeRendering: "auto"
};
export default Bar;