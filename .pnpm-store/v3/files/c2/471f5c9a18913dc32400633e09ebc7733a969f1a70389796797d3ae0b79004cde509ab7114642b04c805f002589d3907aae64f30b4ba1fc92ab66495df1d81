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
  padding: 50,
  offset: 0
};

var VictoryGroup = function (initialProps) {
  // eslint-disable-next-line no-use-before-define
  var role = VictoryGroupMemo.role;

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
    return children.map(function (child, index) {
      var childProps = (0, _assign2.default)({
        animate: getAnimationProps(props, child, index, "victory-group")
      }, child.props);
      return _react.default.cloneElement(child, childProps);
    });
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
        setAnimationState(previousProps, props);
      }
    };
  }, [setAnimationState, previousProps, initialProps, props]);

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

VictoryGroup.propTypes = _objectSpread({}, _victoryCore.CommonProps.baseProps, _victoryCore.CommonProps.dataProps, {
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node]),
  color: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]),
  colorScale: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.string), _propTypes.default.oneOf(["grayscale", "qualitative", "heatmap", "warm", "cool", "red", "green", "blue"])]),
  horizontal: _propTypes.default.bool,
  offset: _propTypes.default.number
});
VictoryGroup.defaultProps = {
  containerComponent: _react.default.createElement(_victoryCore.VictoryContainer, null),
  groupComponent: _react.default.createElement("g", null),
  samples: 50,
  sortOrder: "ascending",
  standalone: true,
  theme: _victoryCore.VictoryTheme.grayscale
}; // We need to attatch the static properties to the memoized version, or else
// VictoryChart will not be able to get this component's role type

var VictoryGroupMemo = _react.default.memo(VictoryGroup, _reactFastCompare.default);

VictoryGroupMemo.displayName = "VictoryGroup";
VictoryGroupMemo.role = "group";
VictoryGroupMemo.expectedComponents = ["groupComponent", "containerComponent", "labelComponent"];
VictoryGroupMemo.getChildren = _helperMethods.getChildren;
var _default = VictoryGroupMemo;
exports.default = _default;