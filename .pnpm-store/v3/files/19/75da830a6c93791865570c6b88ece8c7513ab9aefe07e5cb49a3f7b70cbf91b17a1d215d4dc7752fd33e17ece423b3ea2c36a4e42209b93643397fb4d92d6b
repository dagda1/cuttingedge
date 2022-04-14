import _some from "lodash/some";
import _defaults from "lodash/defaults";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React from "react";
import * as Collection from "../collection";
import * as Transitions from "../transitions";
var INITIAL_STATE = {
  nodesShouldLoad: false,
  nodesDoneLoad: false,
  animating: true
};
export var useAnimationState = function () {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;

  var _React$useState = React.useState(initialState),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      state = _React$useState2[0],
      _setState = _React$useState2[1]; // This allows us to use a state object and maintain the same API as this.setState


  var setState = React.useCallback(function (newState) {
    _setState(function (oldState) {
      return _objectSpread({}, oldState, newState);
    });
  }, [_setState]); // This is a copy of Wrapper.getAnimationProps

  var getAnimationProps = React.useCallback(function (props, child, index) {
    if (!props.animate) {
      return child.props.animate;
    }

    var getFilteredState = function () {
      var childrenTransitions = state && state.childrenTransitions;
      childrenTransitions = Collection.isArrayOfArrays(childrenTransitions) ? childrenTransitions[index] : childrenTransitions;
      return _defaults({
        childrenTransitions: childrenTransitions
      }, state);
    };

    var getTransitions = props.animate && props.animate.getTransitions;
    var filteredState = getFilteredState();
    var parentState = props.animate && props.animate.parentState || filteredState;

    if (!getTransitions) {
      var getTransitionProps = Transitions.getTransitionPropsFactory(props, filteredState, function (newState) {
        return setState(newState);
      });

      getTransitions = function (childComponent) {
        return getTransitionProps(childComponent, index);
      };
    }

    return _defaults({
      getTransitions: getTransitions,
      parentState: parentState
    }, props.animate, child.props.animate);
  }, [state, setState]); // This is a copy of Wrapper.setAnimationState

  var setAnimationState = React.useCallback(function (props, nextProps) {
    if (!props.animate) {
      return;
    }

    if (props.animate.parentState) {
      var nodesWillExit = props.animate.parentState.nodesWillExit;
      var oldProps = nodesWillExit ? props : null;

      var newState = _defaults({
        oldProps: oldProps,
        nextProps: nextProps
      }, props.animate.parentState);

      setState(newState);
    } else {
      var oldChildren = React.Children.toArray(props.children);
      var nextChildren = React.Children.toArray(nextProps.children);

      var isContinuous = function (child) {
        var check = function (c) {
          return c.type && c.type.continuous;
        };

        return Array.isArray(child) ? _some(child, check) : check(child);
      };

      var continuous = !props.polar && _some(oldChildren, function (child) {
        return isContinuous(child) || child.props.children && isContinuous(child.props.children);
      });

      var _Transitions$getIniti = Transitions.getInitialTransitionState(oldChildren, nextChildren),
          _nodesWillExit = _Transitions$getIniti.nodesWillExit,
          nodesWillEnter = _Transitions$getIniti.nodesWillEnter,
          childrenTransitions = _Transitions$getIniti.childrenTransitions,
          nodesShouldEnter = _Transitions$getIniti.nodesShouldEnter;

      setState({
        nodesWillExit: _nodesWillExit,
        nodesWillEnter: nodesWillEnter,
        nodesShouldEnter: nodesShouldEnter,
        childrenTransitions: Collection.isArrayOfArrays(childrenTransitions) ? childrenTransitions[0] : childrenTransitions,
        oldProps: _nodesWillExit ? props : null,
        nextProps: nextProps,
        continuous: continuous
      });
    }
  }, [setState]);
  var getProps = React.useCallback(function (initialProps) {
    return state && state.nodesWillExit ? state.oldProps || initialProps : initialProps;
  }, [state]);
  return {
    state: state,
    setState: setState,
    getAnimationProps: getAnimationProps,
    setAnimationState: setAnimationState,
    getProps: getProps
  };
};