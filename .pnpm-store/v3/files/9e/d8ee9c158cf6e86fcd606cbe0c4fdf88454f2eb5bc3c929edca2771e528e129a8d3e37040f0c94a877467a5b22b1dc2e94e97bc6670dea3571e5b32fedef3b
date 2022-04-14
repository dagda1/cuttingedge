"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _assign2 = _interopRequireDefault(require("lodash/assign"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var Helpers = _interopRequireWildcard(require("../victory-util/helpers"));

var _pointPathHelpers = _interopRequireDefault(require("../victory-util/point-path-helpers"));

var CommonProps = _interopRequireWildcard(require("../victory-util/common-props"));

var _path = _interopRequireDefault(require("./path"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getPath = function (props) {
  var x = props.x,
      y = props.y,
      size = props.size,
      symbol = props.symbol;

  if (props.getPath) {
    return props.getPath(x, y, size);
  }

  var pathFunctions = {
    circle: _pointPathHelpers.default.circle,
    square: _pointPathHelpers.default.square,
    diamond: _pointPathHelpers.default.diamond,
    triangleDown: _pointPathHelpers.default.triangleDown,
    triangleUp: _pointPathHelpers.default.triangleUp,
    plus: _pointPathHelpers.default.plus,
    minus: _pointPathHelpers.default.minus,
    star: _pointPathHelpers.default.star,
    cross: _pointPathHelpers.default.cross
  };
  var symbolFunction = typeof pathFunctions[symbol] === "function" ? pathFunctions[symbol] : pathFunctions.circle;
  return symbolFunction(x, y, size);
};

var evaluateProps = function (props) {
  /**
   * Potential evaluated props are:
   * `ariaLabel`
   * `desc`
   * `id`
   * `size`
   * `style`
   * `symbol`
   * `tabIndex`
   */
  var ariaLabel = Helpers.evaluateProp(props.ariaLabel, props);
  var desc = Helpers.evaluateProp(props.desc, props);
  var id = Helpers.evaluateProp(props.id, props);
  var size = Helpers.evaluateProp(props.size, props);
  var style = Helpers.evaluateStyle(props.style, props);
  var symbol = Helpers.evaluateProp(props.symbol, props);
  var tabIndex = Helpers.evaluateProp(props.tabIndex, props);
  return (0, _assign2.default)({}, props, {
    ariaLabel: ariaLabel,
    desc: desc,
    id: id,
    size: size,
    style: style,
    symbol: symbol,
    tabIndex: tabIndex
  });
};

var Point = function (props) {
  props = evaluateProps(props);
  return _react.default.cloneElement(props.pathComponent, _objectSpread({}, props.events, {
    "aria-label": props.ariaLabel,
    d: getPath(props),
    style: props.style,
    desc: props.desc,
    tabIndex: props.tabIndex,
    role: props.role,
    shapeRendering: props.shapeRendering,
    className: props.className,
    transform: props.transform,
    clipPath: props.clipPath
  }));
};

Point.propTypes = _objectSpread({}, CommonProps.primitiveProps, {
  datum: _propTypes.default.object,
  getPath: _propTypes.default.func,
  pathComponent: _propTypes.default.element,
  size: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.func]),
  symbol: _propTypes.default.oneOfType([_propTypes.default.oneOf(["circle", "cross", "diamond", "plus", "minus", "square", "star", "triangleDown", "triangleUp"]), _propTypes.default.func]),
  x: _propTypes.default.number,
  y: _propTypes.default.number
});
Point.defaultProps = {
  pathComponent: _react.default.createElement(_path.default, null),
  role: "presentation",
  shapeRendering: "auto"
};
var _default = Point;
exports.default = _default;