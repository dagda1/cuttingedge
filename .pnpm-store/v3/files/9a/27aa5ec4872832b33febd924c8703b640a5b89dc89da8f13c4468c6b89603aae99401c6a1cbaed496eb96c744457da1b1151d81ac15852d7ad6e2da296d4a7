import _assign from "lodash/assign";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from "react";
import PropTypes from "prop-types";
import * as Helpers from "../victory-util/helpers";
import * as CommonProps from "../victory-util/common-props";
import Rect from "./rect";
import Circle from "./circle";

var evaluateProps = function (props) {
  /**
   * Potential evaluated prop is:
   * `id`
   */
  var id = Helpers.evaluateProp(props.id, props);
  return _assign({}, props, {
    id: id
  });
};

var Background = function (props) {
  props = evaluateProps(props);
  return props.polar ? React.cloneElement(props.circleComponent, _objectSpread({}, props.events, {
    style: props.style,
    role: props.role,
    shapeRendering: props.shapeRendering,
    cx: props.x,
    cy: props.y,
    r: props.height,
    className: props.className
  })) : React.cloneElement(props.rectComponent, _objectSpread({}, props.events, {
    style: props.style,
    role: props.role,
    shapeRendering: props.shapeRendering,
    x: props.x,
    y: props.y,
    rx: props.rx,
    ry: props.ry,
    width: props.width,
    height: props.height,
    className: props.className
  }));
};

Background.propTypes = _objectSpread({}, CommonProps.primitiveProps, {
  circleComponent: PropTypes.element,
  height: PropTypes.number,
  rectComponent: PropTypes.element,
  rx: PropTypes.number,
  ry: PropTypes.number,
  width: PropTypes.number,
  x: PropTypes.number,
  y: PropTypes.number
});
Background.defaultProps = {
  circleComponent: React.createElement(Circle, null),
  rectComponent: React.createElement(Rect, null),
  role: "presentation",
  shapeRendering: "auto"
};
export default Background;