"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isEmpty2 = _interopRequireDefault(require("lodash/isEmpty"));

var _assign2 = _interopRequireDefault(require("lodash/assign"));

var _defaults2 = _interopRequireDefault(require("lodash/defaults"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _victoryCore = require("victory-core");

var _victorySharedEvents = require("victory-shared-events");

var _victoryAxis = require("victory-axis");

var _victoryPolarAxis = require("victory-polar-axis");

var _helperMethods = require("./helper-methods");

var _reactFastCompare = _interopRequireDefault(require("react-fast-compare"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var fallbackProps = {
  width: 450,
  height: 300,
  padding: 50
};

var VictoryChart = function (initialProps) {
  var role = "chart";

  var _Hooks$useAnimationSt = _victoryCore.Hooks.useAnimationState(),
      getAnimationProps = _Hooks$useAnimationSt.getAnimationProps,
      setAnimationState = _Hooks$useAnimationSt.setAnimationState,
      getProps = _Hooks$useAnimationSt.getProps;

  var props = getProps(initialProps);

  var modifiedProps = _victoryCore.Helpers.modifyProps(props, fallbackProps, role);

  var eventKey = modifiedProps.eventKey,
      containerComponent = modifiedProps.containerComponent,
      standalone = modifiedProps.standalone,
      groupComponent = modifiedProps.groupComponent,
      externalEventMutations = modifiedProps.externalEventMutations,
      width = modifiedProps.width,
      height = modifiedProps.height,
      theme = modifiedProps.theme,
      polar = modifiedProps.polar,
      name = modifiedProps.name;
  var axes = props.polar ? modifiedProps.defaultPolarAxes : modifiedProps.defaultAxes;

  var childComponents = _react.default.useMemo(function () {
    return (0, _helperMethods.getChildComponents)(modifiedProps, axes);
  }, [modifiedProps, axes]);

  var calculatedProps = _react.default.useMemo(function () {
    return (0, _helperMethods.getCalculatedProps)(modifiedProps, childComponents);
  }, [modifiedProps, childComponents]);

  var domain = calculatedProps.domain,
      scale = calculatedProps.scale,
      style = calculatedProps.style,
      origin = calculatedProps.origin,
      radius = calculatedProps.radius,
      horizontal = calculatedProps.horizontal;

  var newChildren = _react.default.useMemo(function () {
    var children = (0, _helperMethods.getChildren)(props, childComponents, calculatedProps);
    var mappedChildren = children.map(function (child, index) {
      var childProps = (0, _assign2.default)({
        animate: getAnimationProps(props, child, index, "victory chart")
      }, child.props);
      return _react.default.cloneElement(child, childProps);
    });

    if (props.style && props.style.background) {
      var backgroundComponent = (0, _helperMethods.getBackgroundWithProps)(props, calculatedProps);
      mappedChildren.unshift(backgroundComponent);
    }

    return mappedChildren;
  }, [getAnimationProps, childComponents, props, calculatedProps]);

  var containerProps = _react.default.useMemo(function () {
    if (standalone) {
      return {
        domain: domain,
        scale: scale,
        width: width,
        height: height,
        standalone: standalone,
        theme: theme,
        style: style.parent,
        horizontal: horizontal,
        name: name,
        polar: polar,
        radius: radius,
        origin: polar ? origin : undefined
      };
    }

    return {};
  }, [domain, scale, width, height, standalone, theme, style, horizontal, name, polar, radius, origin]);

  var container = _react.default.useMemo(function () {
    if (standalone) {
      var defaultContainerProps = (0, _defaults2.default)({}, containerComponent.props, containerProps);
      return _react.default.cloneElement(containerComponent, defaultContainerProps);
    }

    return groupComponent;
  }, [groupComponent, standalone, containerComponent, containerProps]);

  var events = _react.default.useMemo(function () {
    return _victoryCore.Wrapper.getAllEvents(props);
  }, [props]);

  var previousProps = _victoryCore.Hooks.usePreviousProps(initialProps);

  _react.default.useEffect(function () {
    // This is called before dismount to keep state in sync
    return function () {
      if (initialProps.animate) {
        setAnimationState(previousProps, initialProps);
      }
    };
  }, [setAnimationState, previousProps, initialProps]);

  if (!(0, _isEmpty2.default)(events)) {
    return _react.default.createElement(_victorySharedEvents.VictorySharedEvents, {
      container: container,
      eventKey: eventKey,
      events: events,
      externalEventMutations: externalEventMutations
    }, newChildren);
  }

  return _react.default.cloneElement(container, container.props, newChildren);
};

VictoryChart.propTypes = _objectSpread({}, _victoryCore.CommonProps.baseProps, {
  backgroundComponent: _propTypes.default.element,
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node]),
  defaultAxes: _propTypes.default.shape({
    independent: _propTypes.default.element,
    dependent: _propTypes.default.element
  }),
  defaultPolarAxes: _propTypes.default.shape({
    independent: _propTypes.default.element,
    dependent: _propTypes.default.element
  }),
  endAngle: _propTypes.default.number,
  innerRadius: _victoryCore.PropTypes.nonNegative,
  prependDefaultAxes: _propTypes.default.bool,
  startAngle: _propTypes.default.number
});
VictoryChart.defaultProps = {
  backgroundComponent: _react.default.createElement(_victoryCore.Background, null),
  containerComponent: _react.default.createElement(_victoryCore.VictoryContainer, null),
  defaultAxes: {
    independent: _react.default.createElement(_victoryAxis.VictoryAxis, null),
    dependent: _react.default.createElement(_victoryAxis.VictoryAxis, {
      dependentAxis: true
    })
  },
  defaultPolarAxes: {
    independent: _react.default.createElement(_victoryPolarAxis.VictoryPolarAxis, null),
    dependent: _react.default.createElement(_victoryPolarAxis.VictoryPolarAxis, {
      dependentAxis: true
    })
  },
  groupComponent: _react.default.createElement("g", null),
  standalone: true,
  theme: _victoryCore.VictoryTheme.grayscale
};

var VictoryChartMemo = _react.default.memo(VictoryChart, _reactFastCompare.default);

VictoryChartMemo.displayName = "VictoryChart";
VictoryChartMemo.expectedComponents = ["groupComponent", "containerComponent"];
var _default = VictoryChartMemo;
exports.default = _default;