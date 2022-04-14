"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isEmpty2 = _interopRequireDefault(require("lodash/isEmpty"));

var _defaults2 = _interopRequireDefault(require("lodash/defaults"));

var _assign2 = _interopRequireDefault(require("lodash/assign"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _victoryCore = require("victory-core");

var _victorySharedEvents = require("victory-shared-events");

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

var VictoryStack = function (initialProps) {
  // eslint-disable-next-line no-use-before-define
  var role = VictoryStackMemo.role;

  var _Hooks$useAnimationSt = _victoryCore.Hooks.useAnimationState(),
      setAnimationState = _Hooks$useAnimationSt.setAnimationState,
      getAnimationProps = _Hooks$useAnimationSt.getAnimationProps,
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
      horizontal = modifiedProps.horizontal,
      name = modifiedProps.name;

  var childComponents = _react.default.Children.toArray(modifiedProps.children);

  var calculatedProps = (0, _helperMethods.useMemoizedProps)(modifiedProps);
  var domain = calculatedProps.domain,
      scale = calculatedProps.scale,
      style = calculatedProps.style,
      origin = calculatedProps.origin;

  var newChildren = _react.default.useMemo(function () {
    var children = (0, _helperMethods.getChildren)(props, childComponents, calculatedProps);
    var orderedChildren = children.map(function (child, index) {
      var childProps = (0, _assign2.default)({
        animate: getAnimationProps(props, child, index, "victory-stack")
      }, child.props);
      return _react.default.cloneElement(child, childProps);
    });
    /*
      reverse render order for children of `VictoryStack` so that higher children in the stack
      are rendered behind lower children. This looks nicer for stacked bars with cornerRadius, and
      areas with strokes
    */

    return orderedChildren.reverse();
  }, [props, childComponents, calculatedProps, getAnimationProps]);

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
        polar: polar,
        origin: origin,
        name: name
      };
    }

    return {};
  }, [standalone, domain, scale, width, height, theme, style, horizontal, polar, origin, name]);

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

VictoryStack.propTypes = _objectSpread({}, _victoryCore.CommonProps.baseProps, {
  bins: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.oneOfType([_victoryCore.PropTypes.nonNegative, _propTypes.default.instanceOf(Date)])), _victoryCore.PropTypes.nonNegative]),
  categories: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.string), _propTypes.default.shape({
    x: _propTypes.default.arrayOf(_propTypes.default.string),
    y: _propTypes.default.arrayOf(_propTypes.default.string)
  })]),
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node]),
  colorScale: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.string), _propTypes.default.oneOf(["grayscale", "qualitative", "heatmap", "warm", "cool", "red", "green", "blue"])]),
  fillInMissingData: _propTypes.default.bool,
  horizontal: _propTypes.default.bool,
  labelComponent: _propTypes.default.element,
  labels: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.array]),
  style: _propTypes.default.shape({
    parent: _propTypes.default.object,
    data: _propTypes.default.object,
    labels: _propTypes.default.object
  }),
  xOffset: _propTypes.default.number
});
VictoryStack.defaultProps = {
  containerComponent: _react.default.createElement(_victoryCore.VictoryContainer, null),
  groupComponent: _react.default.createElement("g", null),
  standalone: true,
  theme: _victoryCore.VictoryTheme.grayscale,
  fillInMissingData: true
};

var VictoryStackMemo = _react.default.memo(VictoryStack, _reactFastCompare.default);

VictoryStackMemo.displayName = "VictoryStack";
VictoryStackMemo.role = "stack";
VictoryStackMemo.expectedComponents = ["groupComponent", "containerComponent", "labelComponent"];
VictoryStackMemo.getChildren = _helperMethods.getChildren;
var _default = VictoryStackMemo;
exports.default = _default;