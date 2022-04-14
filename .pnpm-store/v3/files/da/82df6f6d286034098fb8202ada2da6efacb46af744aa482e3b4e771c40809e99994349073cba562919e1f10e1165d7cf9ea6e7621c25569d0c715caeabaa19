"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _assign2 = _interopRequireDefault(require("lodash/assign"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _victoryCore = require("victory-core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var evaluateProps = function (props) {
  /**
   * Potential evaluated props are:
   * `ariaLabel`
   * `id`
   * `style`
   * `tabIndex`
   */
  var ariaLabel = _victoryCore.Helpers.evaluateProp(props.ariaLabel, props);

  var id = _victoryCore.Helpers.evaluateProp(props.id, props);

  var style = _victoryCore.Helpers.evaluateStyle((0, _assign2.default)({
    fill: "none",
    stroke: "black"
  }, props.style), props);

  var tabIndex = _victoryCore.Helpers.evaluateProp(props.tabIndex, props);

  return (0, _assign2.default)({}, props, {
    ariaLabel: ariaLabel,
    id: id,
    style: style,
    tabIndex: tabIndex
  });
};

var Curve = function (props) {
  props = evaluateProps(props);
  var _props = props,
      polar = _props.polar,
      origin = _props.origin;

  var lineFunction = _victoryCore.LineHelpers.getLineFunction(props);

  var defaultTransform = polar && origin ? "translate(".concat(origin.x, ", ").concat(origin.y, ")") : undefined;
  return _react.default.cloneElement(props.pathComponent, _objectSpread({}, props.events, {
    "aria-label": props.ariaLabel,
    d: lineFunction(props.data),
    style: props.style,
    transform: props.transform || defaultTransform,
    className: props.className,
    role: props.role,
    shapeRendering: props.shapeRendering,
    clipPath: props.clipPath,
    tabIndex: props.tabIndex
  }));
};

Curve.propTypes = _objectSpread({}, _victoryCore.CommonProps.primitiveProps, {
  interpolation: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]),
  openCurve: _propTypes.default.bool,
  origin: _propTypes.default.object,
  pathComponent: _propTypes.default.element,
  polar: _propTypes.default.bool
});
Curve.defaultProps = {
  pathComponent: _react.default.createElement(_victoryCore.Path, null),
  role: "presentation",
  shapeRendering: "auto"
};
var _default = Curve;
exports.default = _default;