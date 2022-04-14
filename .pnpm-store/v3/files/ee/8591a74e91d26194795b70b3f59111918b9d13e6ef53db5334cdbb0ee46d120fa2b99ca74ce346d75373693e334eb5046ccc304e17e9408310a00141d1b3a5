"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _assign2 = _interopRequireDefault(require("lodash/assign"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var Helpers = _interopRequireWildcard(require("../victory-util/helpers"));

var CommonProps = _interopRequireWildcard(require("../victory-util/common-props"));

var _rect = _interopRequireDefault(require("./rect"));

var _circle = _interopRequireDefault(require("./circle"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var evaluateProps = function (props) {
  /**
   * Potential evaluated prop is:
   * `id`
   */
  var id = Helpers.evaluateProp(props.id, props);
  return (0, _assign2.default)({}, props, {
    id: id
  });
};

var Background = function (props) {
  props = evaluateProps(props);
  return props.polar ? _react.default.cloneElement(props.circleComponent, _objectSpread({}, props.events, {
    style: props.style,
    role: props.role,
    shapeRendering: props.shapeRendering,
    cx: props.x,
    cy: props.y,
    r: props.height,
    className: props.className
  })) : _react.default.cloneElement(props.rectComponent, _objectSpread({}, props.events, {
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
  circleComponent: _propTypes.default.element,
  height: _propTypes.default.number,
  rectComponent: _propTypes.default.element,
  rx: _propTypes.default.number,
  ry: _propTypes.default.number,
  width: _propTypes.default.number,
  x: _propTypes.default.number,
  y: _propTypes.default.number
});
Background.defaultProps = {
  circleComponent: _react.default.createElement(_circle.default, null),
  rectComponent: _react.default.createElement(_rect.default, null),
  role: "presentation",
  shapeRendering: "auto"
};
var _default = Background;
exports.default = _default;