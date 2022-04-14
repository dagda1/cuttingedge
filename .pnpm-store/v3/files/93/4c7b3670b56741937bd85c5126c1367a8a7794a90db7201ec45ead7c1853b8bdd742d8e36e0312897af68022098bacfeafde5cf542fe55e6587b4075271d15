import _isEmpty from "lodash/isEmpty";
import _assign from "lodash/assign";
import _defaults from "lodash/defaults";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import PropTypes from "prop-types";
import React from "react";
import { Background, Helpers, VictoryContainer, VictoryTheme, CommonProps, PropTypes as CustomPropTypes, Wrapper, Hooks } from "victory-core";
import { VictorySharedEvents } from "victory-shared-events";
import { VictoryAxis } from "victory-axis";
import { VictoryPolarAxis } from "victory-polar-axis";
import { getBackgroundWithProps, getChildComponents, getCalculatedProps, getChildren } from "./helper-methods";
import isEqual from "react-fast-compare";
var fallbackProps = {
  width: 450,
  height: 300,
  padding: 50
};

var VictoryChart = function (initialProps) {
  var role = "chart";

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
      name = modifiedProps.name;
  var axes = props.polar ? modifiedProps.defaultPolarAxes : modifiedProps.defaultAxes;
  var childComponents = React.useMemo(function () {
    return getChildComponents(modifiedProps, axes);
  }, [modifiedProps, axes]);
  var calculatedProps = React.useMemo(function () {
    return getCalculatedProps(modifiedProps, childComponents);
  }, [modifiedProps, childComponents]);
  var domain = calculatedProps.domain,
      scale = calculatedProps.scale,
      style = calculatedProps.style,
      origin = calculatedProps.origin,
      radius = calculatedProps.radius,
      horizontal = calculatedProps.horizontal;
  var newChildren = React.useMemo(function () {
    var children = getChildren(props, childComponents, calculatedProps);
    var mappedChildren = children.map(function (child, index) {
      var childProps = _assign({
        animate: getAnimationProps(props, child, index, "victory chart")
      }, child.props);

      return React.cloneElement(child, childProps);
    });

    if (props.style && props.style.background) {
      var backgroundComponent = getBackgroundWithProps(props, calculatedProps);
      mappedChildren.unshift(backgroundComponent);
    }

    return mappedChildren;
  }, [getAnimationProps, childComponents, props, calculatedProps]);
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
        name: name,
        polar: polar,
        radius: radius,
        origin: polar ? origin : undefined
      };
    }

    return {};
  }, [domain, scale, width, height, standalone, theme, style, horizontal, name, polar, radius, origin]);
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
        setAnimationState(previousProps, initialProps);
      }
    };
  }, [setAnimationState, previousProps, initialProps]);

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

VictoryChart.propTypes = _objectSpread({}, CommonProps.baseProps, {
  backgroundComponent: PropTypes.element,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  defaultAxes: PropTypes.shape({
    independent: PropTypes.element,
    dependent: PropTypes.element
  }),
  defaultPolarAxes: PropTypes.shape({
    independent: PropTypes.element,
    dependent: PropTypes.element
  }),
  endAngle: PropTypes.number,
  innerRadius: CustomPropTypes.nonNegative,
  prependDefaultAxes: PropTypes.bool,
  startAngle: PropTypes.number
});
VictoryChart.defaultProps = {
  backgroundComponent: React.createElement(Background, null),
  containerComponent: React.createElement(VictoryContainer, null),
  defaultAxes: {
    independent: React.createElement(VictoryAxis, null),
    dependent: React.createElement(VictoryAxis, {
      dependentAxis: true
    })
  },
  defaultPolarAxes: {
    independent: React.createElement(VictoryPolarAxis, null),
    dependent: React.createElement(VictoryPolarAxis, {
      dependentAxis: true
    })
  },
  groupComponent: React.createElement("g", null),
  standalone: true,
  theme: VictoryTheme.grayscale
};
var VictoryChartMemo = React.memo(VictoryChart, isEqual);
VictoryChartMemo.displayName = "VictoryChart";
VictoryChartMemo.expectedComponents = ["groupComponent", "containerComponent"];
export default VictoryChartMemo;