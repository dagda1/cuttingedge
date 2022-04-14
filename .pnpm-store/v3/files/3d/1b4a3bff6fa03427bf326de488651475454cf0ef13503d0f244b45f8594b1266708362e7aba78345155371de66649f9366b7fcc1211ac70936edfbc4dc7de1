import _isEmpty from "lodash/isEmpty";
import _defaults from "lodash/defaults";
import _assign from "lodash/assign";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import PropTypes from "prop-types";
import React from "react";
import { Helpers, VictoryContainer, VictoryTheme, CommonProps, Wrapper, Hooks } from "victory-core";
import { VictorySharedEvents } from "victory-shared-events";
import { getChildren, useMemoizedProps } from "./helper-methods";
import isEqual from "react-fast-compare";
var fallbackProps = {
  width: 450,
  height: 300,
  padding: 50,
  offset: 0
};

var VictoryGroup = function (initialProps) {
  // eslint-disable-next-line no-use-before-define
  var role = VictoryGroupMemo.role;

  var _Hooks$useAnimationSt = Hooks.useAnimationState(),
      getAnimationProps = _Hooks$useAnimationSt.getAnimationProps,
      setAnimationState = _Hooks$useAnimationSt.setAnimationState,
      getProps = _Hooks$useAnimationSt.getProps;

  var props = getProps(initialProps);
  var modifiedProps = Helpers.modifyProps(props, fallbackProps, role);
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
  var childComponents = React.Children.toArray(modifiedProps.children);
  var calculatedProps = useMemoizedProps(modifiedProps);
  var domain = calculatedProps.domain,
      scale = calculatedProps.scale,
      style = calculatedProps.style,
      origin = calculatedProps.origin;
  var newChildren = React.useMemo(function () {
    var children = getChildren(props, childComponents, calculatedProps);
    return children.map(function (child, index) {
      var childProps = _assign({
        animate: getAnimationProps(props, child, index, "victory-group")
      }, child.props);

      return React.cloneElement(child, childProps);
    });
  }, [props, childComponents, calculatedProps, getAnimationProps]);
  var containerProps = React.useMemo(function () {
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
  var container = React.useMemo(function () {
    if (standalone) {
      var defaultContainerProps = _defaults({}, containerComponent.props, containerProps);

      return React.cloneElement(containerComponent, defaultContainerProps);
    }

    return groupComponent;
  }, [groupComponent, standalone, containerComponent, containerProps]);
  var events = React.useMemo(function () {
    return Wrapper.getAllEvents(props);
  }, [props]);
  var previousProps = Hooks.usePreviousProps(initialProps);
  React.useEffect(function () {
    // This is called before dismount to keep state in sync
    return function () {
      if (initialProps.animate) {
        setAnimationState(previousProps, props);
      }
    };
  }, [setAnimationState, previousProps, initialProps, props]);

  if (!_isEmpty(events)) {
    return React.createElement(VictorySharedEvents, {
      container: container,
      eventKey: eventKey,
      events: events,
      externalEventMutations: externalEventMutations
    }, newChildren);
  }

  return React.cloneElement(container, container.props, newChildren);
};

VictoryGroup.propTypes = _objectSpread({}, CommonProps.baseProps, CommonProps.dataProps, {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  colorScale: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.oneOf(["grayscale", "qualitative", "heatmap", "warm", "cool", "red", "green", "blue"])]),
  horizontal: PropTypes.bool,
  offset: PropTypes.number
});
VictoryGroup.defaultProps = {
  containerComponent: React.createElement(VictoryContainer, null),
  groupComponent: React.createElement("g", null),
  samples: 50,
  sortOrder: "ascending",
  standalone: true,
  theme: VictoryTheme.grayscale
}; // We need to attatch the static properties to the memoized version, or else
// VictoryChart will not be able to get this component's role type

var VictoryGroupMemo = React.memo(VictoryGroup, isEqual);
VictoryGroupMemo.displayName = "VictoryGroup";
VictoryGroupMemo.role = "group";
VictoryGroupMemo.expectedComponents = ["groupComponent", "containerComponent", "labelComponent"];
VictoryGroupMemo.getChildren = getChildren;
export default VictoryGroupMemo;