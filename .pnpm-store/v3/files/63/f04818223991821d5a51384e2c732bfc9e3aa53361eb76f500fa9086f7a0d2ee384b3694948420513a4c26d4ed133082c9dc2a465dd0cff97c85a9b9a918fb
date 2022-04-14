"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAnimationState = void 0;

var _some2 = _interopRequireDefault(require("lodash/some"));

var _defaults2 = _interopRequireDefault(require("lodash/defaults"));

var _react = _interopRequireDefault(require("react"));

var Collection = _interopRequireWildcard(require("../collection"));

var Transitions = _interopRequireWildcard(require("../transitions"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var INITIAL_STATE = {
  nodesShouldLoad: false,
  nodesDoneLoad: false,
  animating: true
};

var useAnimationState = function () {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;

  var _React$useState = _react.default.useState(initialState),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      state = _React$useState2[0],
      _setState = _React$useState2[1]; // This allows us to use a state object and maintain the same API as this.setState


  var setState = _react.default.useCallback(function (newState) {
    _setState(function (oldState) {
      return _objectSpread({}, oldState, newState);
    });
  }, [_setState]); // This is a copy of Wrapper.getAnimationProps


  var getAnimationProps = _react.default.useCallback(function (props, child, index) {
    if (!props.animate) {
      return child.props.animate;
    }

    var getFilteredState = function () {
      var childrenTransitions = state && state.childrenTransitions;
      childrenTransitions = Collection.isArrayOfArrays(childrenTransitions) ? childrenTransitions[index] : childrenTransitions;
      return (0, _defaults2.default)({
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

    return (0, _defaults2.default)({
      getTransitions: getTransitions,
      parentState: parentState
    }, props.animate, child.props.animate);
  }, [state, setState]); // This is a copy of Wrapper.setAnimationState


  var setAnimationState = _react.default.useCallback(function (props, nextProps) {
    if (!props.animate) {
      return;
    }

    if (props.animate.parentState) {
      var nodesWillExit = props.animate.parentState.nodesWillExit;
      var oldProps = nodesWillExit ? props : null;
      var newState = (0, _defaults2.default)({
        oldProps: oldProps,
        nextProps: nextProps
      }, props.animate.parentState);
      setState(newState);
    } else {
      var oldChildren = _react.default.Children.toArray(props.children);

      var nextChildren = _react.default.Children.toArray(nextProps.children);

      var isContinuous = function (child) {
        var check = function (c) {
          return c.type && c.type.continuous;
        };

        return Array.isArray(child) ? (0, _some2.default)(child, check) : check(child);
      };

      var continuous = !props.polar && (0, _some2.default)(oldChildren, function (child) {
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

  var getProps = _react.default.useCallback(function (initialProps) {
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

exports.useAnimationState = useAnimationState;