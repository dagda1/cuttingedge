"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _assign2 = _interopRequireDefault(require("lodash/assign"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _victoryCore = require("victory-core");

var _barHelperMethods = require("./bar-helper-methods");

var _pathHelperMethods = require("./path-helper-methods");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  var style = (0, _barHelperMethods.getStyle)(props.style, props);
  var barWidth = (0, _barHelperMethods.getBarWidth)(props.barWidth, (0, _assign2.default)({}, props, {
    style: style
  }));
  var cornerRadius = (0, _barHelperMethods.getCornerRadius)(props.cornerRadius, (0, _assign2.default)({}, props, {
    style: style,
    barWidth: barWidth
  }));

  var ariaLabel = _victoryCore.Helpers.evaluateProp(props.ariaLabel, props);

  var desc = _victoryCore.Helpers.evaluateProp(props.desc, props);

  var id = _victoryCore.Helpers.evaluateProp(props.id, props);

  var tabIndex = _victoryCore.Helpers.evaluateProp(props.tabIndex, props);

  return (0, _assign2.default)({}, props, {
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
  var path = polar ? (0, _pathHelperMethods.getPolarBarPath)(props, cornerRadius) : (0, _pathHelperMethods.getBarPath)(props, barWidth, cornerRadius);
  var defaultTransform = polar && origin ? "translate(".concat(origin.x, ", ").concat(origin.y, ")") : undefined;
  return _react.default.cloneElement(props.pathComponent, _objectSpread({}, props.events, {
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

Bar.propTypes = _objectSpread({}, _victoryCore.CommonProps.primitiveProps, {
  alignment: _propTypes.default.oneOf(["start", "middle", "end"]),
  barRatio: _propTypes.default.number,
  barWidth: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.func]),
  cornerRadius: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.func, _propTypes.default.shape({
    top: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.func]),
    topLeft: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.func]),
    topRight: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.func]),
    bottom: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.func]),
    bottomLeft: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.func]),
    bottomRight: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.func])
  })]),
  datum: _propTypes.default.object,
  getPath: _propTypes.default.func,
  horizontal: _propTypes.default.bool,
  pathComponent: _propTypes.default.element,
  width: _propTypes.default.number,
  x: _propTypes.default.number,
  y: _propTypes.default.number,
  y0: _propTypes.default.number
});
Bar.defaultProps = {
  defaultBarWidth: 8,
  pathComponent: _react.default.createElement(_victoryCore.Path, null),
  role: "presentation",
  shapeRendering: "auto"
};
var _default = Bar;
exports.default = _default;