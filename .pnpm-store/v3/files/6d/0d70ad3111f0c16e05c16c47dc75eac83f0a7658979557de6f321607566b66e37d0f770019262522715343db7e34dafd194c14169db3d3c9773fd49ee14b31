"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.primitiveProps = exports.baseProps = exports.dataProps = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var CustomPropTypes = _interopRequireWildcard(require("./prop-types"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dataProps = {
  categories: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.string), _propTypes.default.shape({
    x: _propTypes.default.arrayOf(_propTypes.default.string),
    y: _propTypes.default.arrayOf(_propTypes.default.string)
  })]),
  data: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.object]),
  dataComponent: _propTypes.default.element,
  disableInlineStyles: _propTypes.default.bool,
  labelComponent: _propTypes.default.element,
  labels: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.array]),
  samples: CustomPropTypes.nonNegative,
  sortKey: _propTypes.default.oneOfType([_propTypes.default.func, CustomPropTypes.allOfType([CustomPropTypes.integer, CustomPropTypes.nonNegative]), _propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string)]),
  sortOrder: _propTypes.default.oneOf(["ascending", "descending"]),
  style: _propTypes.default.shape({
    parent: _propTypes.default.object,
    data: _propTypes.default.object,
    labels: _propTypes.default.object
  }),
  x: _propTypes.default.oneOfType([_propTypes.default.func, CustomPropTypes.allOfType([CustomPropTypes.integer, CustomPropTypes.nonNegative]), _propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string)]),
  y: _propTypes.default.oneOfType([_propTypes.default.func, CustomPropTypes.allOfType([CustomPropTypes.integer, CustomPropTypes.nonNegative]), _propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string)]),
  y0: _propTypes.default.oneOfType([_propTypes.default.func, CustomPropTypes.allOfType([CustomPropTypes.integer, CustomPropTypes.nonNegative]), _propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string)])
};
exports.dataProps = dataProps;
var baseProps = {
  animate: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.object]),
  containerComponent: _propTypes.default.element,
  domain: _propTypes.default.oneOfType([CustomPropTypes.domain, _propTypes.default.shape({
    x: CustomPropTypes.domain,
    y: CustomPropTypes.domain
  })]),
  maxDomain: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.instanceOf(Date), _propTypes.default.shape({
    x: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.instanceOf(Date)]),
    y: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.instanceOf(Date)])
  })]),
  minDomain: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.instanceOf(Date), _propTypes.default.shape({
    x: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.instanceOf(Date)]),
    y: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.instanceOf(Date)])
  })]),
  domainPadding: _propTypes.default.oneOfType([_propTypes.default.shape({
    x: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.arrayOf(_propTypes.default.number)]),
    y: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.arrayOf(_propTypes.default.number)])
  }), _propTypes.default.number, _propTypes.default.arrayOf(_propTypes.default.number)]),
  eventKey: _propTypes.default.oneOfType([_propTypes.default.func, CustomPropTypes.allOfType([CustomPropTypes.integer, CustomPropTypes.nonNegative]), _propTypes.default.string]),
  events: _propTypes.default.arrayOf(_propTypes.default.shape({
    target: _propTypes.default.oneOf(["data", "labels", "parent"]),
    eventKey: _propTypes.default.oneOfType([_propTypes.default.array, CustomPropTypes.allOfType([CustomPropTypes.integer, CustomPropTypes.nonNegative]), _propTypes.default.string]),
    eventHandlers: _propTypes.default.object
  })),
  externalEventMutations: _propTypes.default.arrayOf(_propTypes.default.shape({
    callback: _propTypes.default.function,
    childName: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.array]),
    eventKey: _propTypes.default.oneOfType([_propTypes.default.array, CustomPropTypes.allOfType([CustomPropTypes.integer, CustomPropTypes.nonNegative]), _propTypes.default.string]),
    mutation: _propTypes.default.function,
    target: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.array])
  })),
  groupComponent: _propTypes.default.element,
  height: CustomPropTypes.nonNegative,
  name: _propTypes.default.string,
  origin: _propTypes.default.shape({
    x: _propTypes.default.number,
    y: _propTypes.default.number
  }),
  padding: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
    top: _propTypes.default.number,
    bottom: _propTypes.default.number,
    left: _propTypes.default.number,
    right: _propTypes.default.number
  })]),
  polar: _propTypes.default.bool,
  range: _propTypes.default.oneOfType([CustomPropTypes.domain, _propTypes.default.shape({
    x: CustomPropTypes.domain,
    y: CustomPropTypes.domain
  })]),
  scale: _propTypes.default.oneOfType([CustomPropTypes.scale, _propTypes.default.shape({
    x: CustomPropTypes.scale,
    y: CustomPropTypes.scale
  })]),
  sharedEvents: _propTypes.default.shape({
    events: _propTypes.default.array,
    getEventState: _propTypes.default.func
  }),
  singleQuadrantDomainPadding: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.shape({
    x: _propTypes.default.oneOfType([_propTypes.default.bool]),
    y: _propTypes.default.oneOfType([_propTypes.default.bool])
  })]),
  standalone: _propTypes.default.bool,
  theme: _propTypes.default.object,
  width: CustomPropTypes.nonNegative
};
exports.baseProps = baseProps;
var primitiveProps = {
  active: _propTypes.default.bool,
  ariaLabel: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]),
  className: _propTypes.default.string,
  clipPath: _propTypes.default.string,
  data: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.object]),
  desc: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]),
  disableInlineStyles: _propTypes.default.bool,
  events: _propTypes.default.object,
  id: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string, _propTypes.default.func]),
  index: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  origin: _propTypes.default.shape({
    x: _propTypes.default.number,
    y: _propTypes.default.number
  }),
  polar: _propTypes.default.bool,
  role: _propTypes.default.string,
  scale: _propTypes.default.oneOfType([CustomPropTypes.scale, _propTypes.default.shape({
    x: CustomPropTypes.scale,
    y: CustomPropTypes.scale
  })]),
  shapeRendering: _propTypes.default.string,
  style: _propTypes.default.object,
  tabIndex: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.func]),
  transform: _propTypes.default.string
};
exports.primitiveProps = primitiveProps;