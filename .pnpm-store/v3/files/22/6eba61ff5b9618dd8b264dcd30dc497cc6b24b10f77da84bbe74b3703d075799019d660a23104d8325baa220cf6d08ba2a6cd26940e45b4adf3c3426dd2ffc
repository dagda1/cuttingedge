(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["VictoryCursorContainer"] = factory(require("react"));
	else
		root["VictoryCursorContainer"] = factory(root["React"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./cursor-helpers.js":
/*!***************************!*\
  !*** ./cursor-helpers.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_mapValues__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/mapValues */ "../../../node_modules/lodash/mapValues.js");
/* harmony import */ var lodash_mapValues__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_mapValues__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isFunction */ "../../../node_modules/lodash/isFunction.js");
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/throttle */ "../../../node_modules/lodash/throttle.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var victory_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! victory-core */ "../../victory-core/es/victory-util/selection.js");




function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var ON_MOUSE_MOVE_THROTTLE_MS = 16;
var CursorHelpers = {
  getDimension: function (props) {
    var horizontal = props.horizontal,
        cursorDimension = props.cursorDimension;

    if (!horizontal || !cursorDimension) {
      return cursorDimension;
    }

    return cursorDimension === "x" ? "y" : "x";
  },
  withinBounds: function (point, bounds) {
    var _mapValues2 = lodash_mapValues__WEBPACK_IMPORTED_MODULE_0___default()(bounds, Number),
        x1 = _mapValues2.x1,
        x2 = _mapValues2.x2,
        y1 = _mapValues2.y1,
        y2 = _mapValues2.y2;

    var _mapValues3 = lodash_mapValues__WEBPACK_IMPORTED_MODULE_0___default()(point, Number),
        x = _mapValues3.x,
        y = _mapValues3.y;

    return x >= Math.min(x1, x2) && x <= Math.max(x1, x2) && y >= Math.min(y1, y2) && y <= Math.max(y1, y2);
  },
  onMouseMove: function (evt, targetProps) {
    var onCursorChange = targetProps.onCursorChange,
        domain = targetProps.domain;
    var cursorDimension = this.getDimension(targetProps);
    var parentSVG = targetProps.parentSVG || victory_core__WEBPACK_IMPORTED_MODULE_3__.getParentSVG(evt);
    var cursorSVGPosition = victory_core__WEBPACK_IMPORTED_MODULE_3__.getSVGEventCoordinates(evt, parentSVG);
    var cursorValue = victory_core__WEBPACK_IMPORTED_MODULE_3__.getDataCoordinates(targetProps, targetProps.scale, cursorSVGPosition.x, cursorSVGPosition.y);
    var inBounds = this.withinBounds(cursorValue, {
      x1: domain.x[0],
      x2: domain.x[1],
      y1: domain.y[0],
      y2: domain.y[1]
    });

    if (!inBounds) {
      cursorValue = null;
    }

    if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_1___default()(onCursorChange)) {
      if (inBounds) {
        var value = cursorDimension ? cursorValue[cursorDimension] : cursorValue;
        onCursorChange(value, targetProps);
      } else if (cursorValue !== targetProps.cursorValue) {
        onCursorChange(targetProps.defaultCursorValue || null, targetProps);
      }
    }

    return [{
      target: "parent",
      eventKey: "parent",
      mutation: function () {
        return {
          cursorValue: cursorValue,
          parentSVG: parentSVG
        };
      }
    }];
  },
  onTouchEnd: function (evt, targetProps) {
    var onCursorChange = targetProps.onCursorChange;

    if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_1___default()(targetProps.onCursorChange)) {
      onCursorChange(null, targetProps);
    }

    return [{
      target: "parent",
      eventKey: "parent",
      mutation: function () {
        return {
          cursorValue: null
        };
      }
    }];
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_objectSpread({}, CursorHelpers, {
  onMouseMove: lodash_throttle__WEBPACK_IMPORTED_MODULE_2___default()(CursorHelpers.onMouseMove.bind(CursorHelpers), ON_MOUSE_MOVE_THROTTLE_MS, {
    leading: true,
    trailing: false
  }),
  onMouseLeave: CursorHelpers.onMouseMove.bind(CursorHelpers),
  onTouchEnd: CursorHelpers.onTouchEnd.bind(CursorHelpers)
}));

/***/ }),

/***/ "./victory-cursor-container.js":
/*!*************************************!*\
  !*** ./victory-cursor-container.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cursorContainerMixin": () => (/* binding */ cursorContainerMixin),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isObject */ "../../../node_modules/lodash/isObject.js");
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/assign */ "../../../node_modules/lodash/assign.js");
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_defaults__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/defaults */ "../../../node_modules/lodash/defaults.js");
/* harmony import */ var lodash_defaults__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_defaults__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var victory_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! victory-core */ "../../victory-core/es/victory-util/helpers.js");
/* harmony import */ var victory_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! victory-core */ "../../victory-core/es/victory-container/victory-container.js");
/* harmony import */ var victory_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! victory-core */ "../../victory-core/es/victory-label/victory-label.js");
/* harmony import */ var victory_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! victory-core */ "../../victory-core/es/victory-primitives/line-segment.js");
/* harmony import */ var _cursor_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cursor-helpers */ "./cursor-helpers.js");




function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var cursorContainerMixin = function (base) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_base) {
    _inherits(VictoryCursorContainer, _base);

    function VictoryCursorContainer() {
      _classCallCheck(this, VictoryCursorContainer);

      return _possibleConstructorReturn(this, (VictoryCursorContainer.__proto__ || Object.getPrototypeOf(VictoryCursorContainer)).apply(this, arguments));
    }

    _createClass(VictoryCursorContainer, [{
      key: "getCursorPosition",
      value: function getCursorPosition(props) {
        var cursorValue = props.cursorValue,
            defaultCursorValue = props.defaultCursorValue,
            domain = props.domain,
            cursorDimension = props.cursorDimension;

        if (cursorValue) {
          return cursorValue;
        }

        if (typeof defaultCursorValue === "number") {
          return _defineProperty({
            x: (domain.x[0] + domain.x[1]) / 2,
            y: (domain.y[0] + domain.y[1]) / 2
          }, cursorDimension, defaultCursorValue);
        }

        return defaultCursorValue;
      }
    }, {
      key: "getCursorLabelOffset",
      value: function getCursorLabelOffset(props) {
        var cursorLabelOffset = props.cursorLabelOffset;

        if (typeof cursorLabelOffset === "number") {
          return {
            x: cursorLabelOffset,
            y: cursorLabelOffset
          };
        }

        return cursorLabelOffset;
      }
    }, {
      key: "getPadding",
      value: function getPadding(props) {
        if (props.padding === undefined) {
          var child = props.children.find(function (c) {
            return lodash_isObject__WEBPACK_IMPORTED_MODULE_0___default()(c.props) && c.props.padding !== undefined;
          });
          return victory_core__WEBPACK_IMPORTED_MODULE_5__.getPadding(child.props);
        } else {
          return victory_core__WEBPACK_IMPORTED_MODULE_5__.getPadding(props);
        }
      }
    }, {
      key: "getCursorElements",
      value: function getCursorElements(props) {
        // eslint-disable-line max-statements
        var scale = props.scale,
            cursorLabelComponent = props.cursorLabelComponent,
            cursorLabel = props.cursorLabel,
            cursorComponent = props.cursorComponent,
            width = props.width,
            height = props.height,
            name = props.name,
            horizontal = props.horizontal,
            theme = props.theme;
        var cursorDimension = _cursor_helpers__WEBPACK_IMPORTED_MODULE_6__["default"].getDimension(props);
        var cursorValue = this.getCursorPosition(props);
        var cursorLabelOffset = this.getCursorLabelOffset(props);

        if (!cursorValue) {
          return [];
        }

        var newElements = [];
        var padding = this.getPadding(props);
        var cursorCoordinates = {
          x: horizontal ? scale.y(cursorValue.y) : scale.x(cursorValue.x),
          y: horizontal ? scale.x(cursorValue.x) : scale.y(cursorValue.y)
        };

        if (cursorLabel) {
          var labelProps = lodash_defaults__WEBPACK_IMPORTED_MODULE_2___default()({
            active: true
          }, cursorLabelComponent.props, {
            x: cursorCoordinates.x + cursorLabelOffset.x,
            y: cursorCoordinates.y + cursorLabelOffset.y,
            datum: cursorValue,
            active: true,
            key: "".concat(name, "-cursor-label")
          });

          if (victory_core__WEBPACK_IMPORTED_MODULE_5__.isTooltip(cursorLabelComponent)) {
            var tooltipTheme = theme && theme.tooltip || {};
            labelProps = lodash_defaults__WEBPACK_IMPORTED_MODULE_2___default()({}, labelProps, tooltipTheme);
          }

          newElements.push(react__WEBPACK_IMPORTED_MODULE_4___default().cloneElement(cursorLabelComponent, lodash_defaults__WEBPACK_IMPORTED_MODULE_2___default()({}, labelProps, {
            text: victory_core__WEBPACK_IMPORTED_MODULE_5__.evaluateProp(cursorLabel, labelProps)
          })));
        }

        var cursorStyle = lodash_assign__WEBPACK_IMPORTED_MODULE_1___default()({
          stroke: "black"
        }, cursorComponent.props.style);

        if (cursorDimension === "x" || cursorDimension === undefined) {
          newElements.push(react__WEBPACK_IMPORTED_MODULE_4___default().cloneElement(cursorComponent, {
            key: "".concat(name, "-x-cursor"),
            x1: cursorCoordinates.x,
            x2: cursorCoordinates.x,
            y1: padding.top,
            y2: height - padding.bottom,
            style: cursorStyle
          }));
        }

        if (cursorDimension === "y" || cursorDimension === undefined) {
          newElements.push(react__WEBPACK_IMPORTED_MODULE_4___default().cloneElement(cursorComponent, {
            key: "".concat(name, "-y-cursor"),
            x1: padding.left,
            x2: width - padding.right,
            y1: cursorCoordinates.y,
            y2: cursorCoordinates.y,
            style: cursorStyle
          }));
        }

        return newElements;
      } // Overrides method in VictoryContainer

    }, {
      key: "getChildren",
      value: function getChildren(props) {
        return _toConsumableArray(react__WEBPACK_IMPORTED_MODULE_4___default().Children.toArray(props.children)).concat(_toConsumableArray(this.getCursorElements(props)));
      }
    }]);

    return VictoryCursorContainer;
  }(base), Object.defineProperty(_class, "displayName", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: "VictoryCursorContainer"
  }), Object.defineProperty(_class, "propTypes", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: _objectSpread({}, victory_core__WEBPACK_IMPORTED_MODULE_7__["default"].propTypes, {
      cursorDimension: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(["x", "y"]),
      cursorLabel: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
      cursorLabelComponent: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().element),
      cursorLabelOffset: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
        x: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
        y: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number)
      })]),
      defaultCursorValue: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
        x: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
        y: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number)
      })]),
      disable: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
      onCursorChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func)
    })
  }), Object.defineProperty(_class, "defaultProps", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: _objectSpread({}, victory_core__WEBPACK_IMPORTED_MODULE_7__["default"].defaultProps, {
      cursorLabelComponent: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(victory_core__WEBPACK_IMPORTED_MODULE_8__["default"], null),
      cursorLabelOffset: {
        x: 5,
        y: -10
      },
      cursorComponent: react__WEBPACK_IMPORTED_MODULE_4___default().createElement(victory_core__WEBPACK_IMPORTED_MODULE_9__["default"], null)
    })
  }), Object.defineProperty(_class, "defaultEvents", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function (props) {
      return [{
        target: "parent",
        eventHandlers: {
          onMouseLeave: function (evt, targetProps) {
            return props.disable ? {} : _cursor_helpers__WEBPACK_IMPORTED_MODULE_6__["default"].onMouseLeave(evt, targetProps);
          },
          onTouchCancel: function () {
            return [];
          },
          onMouseMove: function (evt, targetProps) {
            return props.disable ? {} : _cursor_helpers__WEBPACK_IMPORTED_MODULE_6__["default"].onMouseMove(evt, targetProps);
          },
          onTouchMove: function (evt, targetProps) {
            return props.disable ? {} : _cursor_helpers__WEBPACK_IMPORTED_MODULE_6__["default"].onMouseMove(evt, targetProps);
          }
        }
      }];
    }
  }), _temp;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cursorContainerMixin(victory_core__WEBPACK_IMPORTED_MODULE_7__["default"]));

/***/ }),

/***/ "../../../node_modules/d3-timer/src/timer.js":
/*!***************************************************!*\
  !*** ../../../node_modules/d3-timer/src/timer.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "now": () => (/* binding */ now),
/* harmony export */   "Timer": () => (/* binding */ Timer),
/* harmony export */   "timer": () => (/* binding */ timer),
/* harmony export */   "timerFlush": () => (/* binding */ timerFlush)
/* harmony export */ });
var frame = 0, // is an animation frame pending?
    timeout = 0, // is a timeout pending?
    interval = 0, // are any timers active?
    pokeDelay = 1000, // how frequently we check for clock skew
    taskHead,
    taskTail,
    clockLast = 0,
    clockNow = 0,
    clockSkew = 0,
    clock = typeof performance === "object" && performance.now ? performance : Date,
    setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) { setTimeout(f, 17); };

function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}

function clearNow() {
  clockNow = 0;
}

function Timer() {
  this._call =
  this._time =
  this._next = null;
}

Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;
      else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};

function timer(callback, delay, time) {
  var t = new Timer;
  t.restart(callback, delay, time);
  return t;
}

function timerFlush() {
  now(); // Get the current time, if not already set.
  ++frame; // Pretend we’ve set an alarm, if we haven’t already.
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(null, e);
    t = t._next;
  }
  --frame;
}

function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}

function poke() {
  var now = clock.now(), delay = now - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}

function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}

function sleep(time) {
  if (frame) return; // Soonest alarm already set, or will be.
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
  if (delay > 24) {
    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}


/***/ }),

/***/ "../../../node_modules/lodash/_SetCache.js":
/*!*************************************************!*\
  !*** ../../../node_modules/lodash/_SetCache.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArray = __webpack_require__(/*! ./isArray */ "../../../node_modules/lodash/isArray.js");

/**
 * Casts `value` as an array if it's not one.
 *
 * @static
 * @memberOf _
 * @since 4.4.0
 * @category Lang
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast array.
 * @example
 *
 * _.castArray(1);
 * // => [1]
 *
 * _.castArray({ 'a': 1 });
 * // => [{ 'a': 1 }]
 *
 * _.castArray('abc');
 * // => ['abc']
 *
 * _.castArray(null);
 * // => [null]
 *
 * _.castArray(undefined);
 * // => [undefined]
 *
 * _.castArray();
 * // => []
 *
 * var array = [1, 2, 3];
 * console.log(_.castArray(array) === array);
 * // => true
 */
function castArray() {
  if (!arguments.length) {
    return [];
  }
  var value = arguments[0];
  return isArray(value) ? value : [value];
}

module.exports = castArray;


/***/ }),

/***/ "../../../node_modules/lodash/_Stack.js":
/*!**********************************************!*\
  !*** ../../../node_modules/lodash/_Stack.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "../../../node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "../../../node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "../../../node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "../../../node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "../../../node_modules/lodash/_listCacheSet.js");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "../../../node_modules/lodash/_Symbol.js":
/*!***********************************************!*\
  !*** ../../../node_modules/lodash/_Symbol.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "../../../node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "../../../node_modules/lodash/_apply.js":
/*!**********************************************!*\
  !*** ../../../node_modules/lodash/_apply.js ***!
  \**********************************************/
/***/ ((module) => {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),

/***/ "../../../node_modules/lodash/_arrayMap.js":
/*!*************************************************!*\
  !*** ../../../node_modules/lodash/_arrayMap.js ***!
  \*************************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ "../../../node_modules/lodash/_arrayPush.js":
/*!**************************************************!*\
  !*** ../../../node_modules/lodash/_arrayPush.js ***!
  \**************************************************/
/***/ ((module) => {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ "../../../node_modules/lodash/_arraySome.js":
/*!**************************************************!*\
  !*** ../../../node_modules/lodash/_arraySome.js ***!
  \**************************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),

/***/ "../../../node_modules/lodash/_assignValue.js":
/*!****************************************************!*\
  !*** ../../../node_modules/lodash/_assignValue.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "../../../node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "../../../node_modules/lodash/eq.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ "../../../node_modules/lodash/_assocIndexOf.js":
/*!*****************************************************!*\
  !*** ../../../node_modules/lodash/_assocIndexOf.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var eq = __webpack_require__(/*! ./eq */ "../../../node_modules/lodash/eq.js");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "../../../node_modules/lodash/_baseAssignValue.js":
/*!********************************************************!*\
  !*** ../../../node_modules/lodash/_baseAssignValue.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defineProperty = __webpack_require__(/*! ./_defineProperty */ "../../../node_modules/lodash/_defineProperty.js");

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ "../../../node_modules/lodash/_baseFindIndex.js":
/*!******************************************************!*\
  !*** ../../../node_modules/lodash/_baseFindIndex.js ***!
  \******************************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),

/***/ "../../../node_modules/lodash/_baseFlatten.js":
/*!****************************************************!*\
  !*** ../../../node_modules/lodash/_baseFlatten.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "../../../node_modules/lodash/_arrayPush.js"),
    isFlattenable = __webpack_require__(/*! ./_isFlattenable */ "../../../node_modules/lodash/_isFlattenable.js");

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),

/***/ "../../../node_modules/lodash/_baseFor.js":
/*!************************************************!*\
  !*** ../../../node_modules/lodash/_baseFor.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ "../../../node_modules/lodash/_createBaseFor.js");

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),

/***/ "../../../node_modules/lodash/_baseForOwn.js":
/*!***************************************************!*\
  !*** ../../../node_modules/lodash/_baseForOwn.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFor = __webpack_require__(/*! ./_baseFor */ "../../../node_modules/lodash/_baseFor.js"),
    keys = __webpack_require__(/*! ./keys */ "../../../node_modules/lodash/keys.js");

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),

/***/ "../../../node_modules/lodash/_baseGet.js":
/*!************************************************!*\
  !*** ../../../node_modules/lodash/_baseGet.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var castPath = __webpack_require__(/*! ./_castPath */ "../../../node_modules/lodash/_castPath.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "../../../node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),

/***/ "../../../node_modules/lodash/_baseGetTag.js":
/*!***************************************************!*\
  !*** ../../../node_modules/lodash/_baseGetTag.js ***!
  \***************************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "../../../node_modules/lodash/_baseHasIn.js":
/*!**************************************************!*\
  !*** ../../../node_modules/lodash/_baseHasIn.js ***!
  \**************************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),

/***/ "../../../node_modules/lodash/_baseIndexOf.js":
/*!****************************************************!*\
  !*** ../../../node_modules/lodash/_baseIndexOf.js ***!
  \****************************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),

/***/ "../../../node_modules/lodash/_baseIsEqual.js":
/*!****************************************************!*\
  !*** ../../../node_modules/lodash/_baseIsEqual.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsEqualDeep = __webpack_require__(/*! ./_baseIsEqualDeep */ "../../../node_modules/lodash/_baseIsEqualDeep.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../../../node_modules/lodash/isObjectLike.js");

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),

/***/ "../../../node_modules/lodash/_baseIsEqualDeep.js":
/*!********************************************************!*\
  !*** ../../../node_modules/lodash/_baseIsEqualDeep.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(/*! ./_Stack */ "../../../node_modules/lodash/_Stack.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "../../../node_modules/lodash/_equalArrays.js"),
    equalByTag = __webpack_require__(/*! ./_equalByTag */ "../../../node_modules/lodash/_equalByTag.js"),
    equalObjects = __webpack_require__(/*! ./_equalObjects */ "../../../node_modules/lodash/_equalObjects.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "../../../node_modules/lodash/_getTag.js"),
    isArray = __webpack_require__(/*! ./isArray */ "../../../node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "../../../node_modules/lodash/isBuffer.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "../../../node_modules/lodash/isTypedArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),

/***/ "../../../node_modules/lodash/_baseIsMatch.js":
/*!****************************************************!*\
  !*** ../../../node_modules/lodash/_baseIsMatch.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(/*! ./_Stack */ "../../../node_modules/lodash/_Stack.js"),
    baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "../../../node_modules/lodash/_baseIsEqual.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),

/***/ "../../../node_modules/lodash/_baseIsRegExp.js":
/*!*****************************************************!*\
  !*** ../../../node_modules/lodash/_baseIsRegExp.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../../../node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../../../node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var regexpTag = '[object RegExp]';

/**
 * The base implementation of `_.isRegExp` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
 */
function baseIsRegExp(value) {
  return isObjectLike(value) && baseGetTag(value) == regexpTag;
}

module.exports = baseIsRegExp;


/***/ }),

/***/ "../../../node_modules/lodash/_baseIteratee.js":
/*!*****************************************************!*\
  !*** ../../../node_modules/lodash/_baseIteratee.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseMatches = __webpack_require__(/*! ./_baseMatches */ "../../../node_modules/lodash/_baseMatches.js"),
    baseMatchesProperty = __webpack_require__(/*! ./_baseMatchesProperty */ "../../../node_modules/lodash/_baseMatchesProperty.js"),
    identity = __webpack_require__(/*! ./identity */ "../../../node_modules/lodash/identity.js"),
    isArray = __webpack_require__(/*! ./isArray */ "../../../node_modules/lodash/isArray.js"),
    property = __webpack_require__(/*! ./property */ "../../../node_modules/lodash/property.js");

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),

/***/ "../../../node_modules/lodash/_baseKeys.js":
/*!*************************************************!*\
  !*** ../../../node_modules/lodash/_baseKeys.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(/*! ./_overArg */ "../../../node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "../../../node_modules/lodash/_baseMatches.js":
/*!****************************************************!*\
  !*** ../../../node_modules/lodash/_baseMatches.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsMatch = __webpack_require__(/*! ./_baseIsMatch */ "../../../node_modules/lodash/_baseIsMatch.js"),
    getMatchData = __webpack_require__(/*! ./_getMatchData */ "../../../node_modules/lodash/_getMatchData.js"),
    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ "../../../node_modules/lodash/_matchesStrictComparable.js");

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),

/***/ "../../../node_modules/lodash/_baseMatchesProperty.js":
/*!************************************************************!*\
  !*** ../../../node_modules/lodash/_baseMatchesProperty.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "../../../node_modules/lodash/_baseIsEqual.js"),
    get = __webpack_require__(/*! ./get */ "../../../node_modules/lodash/get.js"),
    hasIn = __webpack_require__(/*! ./hasIn */ "../../../node_modules/lodash/hasIn.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "../../../node_modules/lodash/_isKey.js"),
    isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ "../../../node_modules/lodash/_isStrictComparable.js"),
    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ "../../../node_modules/lodash/_matchesStrictComparable.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "../../../node_modules/lodash/_toKey.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),

/***/ "../../../node_modules/lodash/_basePick.js":
/*!*************************************************!*\
  !*** ../../../node_modules/lodash/_basePick.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var basePickBy = __webpack_require__(/*! ./_basePickBy */ "../../../node_modules/lodash/_basePickBy.js"),
    hasIn = __webpack_require__(/*! ./hasIn */ "../../../node_modules/lodash/hasIn.js");

/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @returns {Object} Returns the new object.
 */
function basePick(object, paths) {
  return basePickBy(object, paths, function(value, path) {
    return hasIn(object, path);
  });
}

module.exports = basePick;


/***/ }),

/***/ "../../../node_modules/lodash/_basePickBy.js":
/*!***************************************************!*\
  !*** ../../../node_modules/lodash/_basePickBy.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGet = __webpack_require__(/*! ./_baseGet */ "../../../node_modules/lodash/_baseGet.js"),
    baseSet = __webpack_require__(/*! ./_baseSet */ "../../../node_modules/lodash/_baseSet.js"),
    castPath = __webpack_require__(/*! ./_castPath */ "../../../node_modules/lodash/_castPath.js");

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, paths, predicate) {
  var index = -1,
      length = paths.length,
      result = {};

  while (++index < length) {
    var path = paths[index],
        value = baseGet(object, path);

    if (predicate(value, path)) {
      baseSet(result, castPath(path, object), value);
    }
  }
  return result;
}

module.exports = basePickBy;


/***/ }),

/***/ "../../../node_modules/lodash/_baseProperty.js":
/*!*****************************************************!*\
  !*** ../../../node_modules/lodash/_baseProperty.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),

/***/ "../../../node_modules/lodash/_basePropertyDeep.js":
/*!*********************************************************!*\
  !*** ../../../node_modules/lodash/_basePropertyDeep.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGet = __webpack_require__(/*! ./_baseGet */ "../../../node_modules/lodash/_baseGet.js");

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),

/***/ "../../../node_modules/lodash/_baseRest.js":
/*!*************************************************!*\
  !*** ../../../node_modules/lodash/_baseRest.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var identity = __webpack_require__(/*! ./identity */ "../../../node_modules/lodash/identity.js"),
    overRest = __webpack_require__(/*! ./_overRest */ "../../../node_modules/lodash/_overRest.js"),
    setToString = __webpack_require__(/*! ./_setToString */ "../../../node_modules/lodash/_setToString.js");

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),

/***/ "../../../node_modules/lodash/_baseSet.js":
/*!************************************************!*\
  !*** ../../../node_modules/lodash/_baseSet.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assignValue = __webpack_require__(/*! ./_assignValue */ "../../../node_modules/lodash/_assignValue.js"),
    castPath = __webpack_require__(/*! ./_castPath */ "../../../node_modules/lodash/_castPath.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "../../../node_modules/lodash/_isIndex.js"),
    isObject = __webpack_require__(/*! ./isObject */ "../../../node_modules/lodash/isObject.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "../../../node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
      return object;
    }

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

module.exports = baseSet;


/***/ }),

/***/ "../../../node_modules/lodash/_baseToString.js":
/*!*****************************************************!*\
  !*** ../../../node_modules/lodash/_baseToString.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "../../../node_modules/lodash/_Symbol.js"),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ "../../../node_modules/lodash/_arrayMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "../../../node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "../../../node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ "../../../node_modules/lodash/_baseUnary.js":
/*!**************************************************!*\
  !*** ../../../node_modules/lodash/_baseUnary.js ***!
  \**************************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "../../../node_modules/lodash/_cacheHas.js":
/*!*************************************************!*\
  !*** ../../../node_modules/lodash/_cacheHas.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIndexOf = __webpack_require__(/*! ./_baseIndexOf */ "../../../node_modules/lodash/_baseIndexOf.js");

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),

/***/ "../../../node_modules/lodash/_castPath.js":
/*!*************************************************!*\
  !*** ../../../node_modules/lodash/_castPath.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArray = __webpack_require__(/*! ./isArray */ "../../../node_modules/lodash/isArray.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "../../../node_modules/lodash/_isKey.js"),
    stringToPath = __webpack_require__(/*! ./_stringToPath */ "../../../node_modules/lodash/_stringToPath.js"),
    toString = __webpack_require__(/*! ./toString */ "../../../node_modules/lodash/toString.js");

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),

/***/ "../../../node_modules/lodash/_copyObject.js":
/*!***************************************************!*\
  !*** ../../../node_modules/lodash/_copyObject.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assignValue = __webpack_require__(/*! ./_assignValue */ "../../../node_modules/lodash/_assignValue.js"),
    baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "../../../node_modules/lodash/_baseAssignValue.js");

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),

/***/ "../../../node_modules/lodash/_createAssigner.js":
/*!*******************************************************!*\
  !*** ../../../node_modules/lodash/_createAssigner.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseRest = __webpack_require__(/*! ./_baseRest */ "../../../node_modules/lodash/_baseRest.js"),
    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ "../../../node_modules/lodash/_isIterateeCall.js");

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),

/***/ "../../../node_modules/lodash/_createBaseFor.js":
/*!******************************************************!*\
  !*** ../../../node_modules/lodash/_createBaseFor.js ***!
  \******************************************************/
/***/ ((module) => {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),

/***/ "../../../node_modules/lodash/_createFind.js":
/*!***************************************************!*\
  !*** ../../../node_modules/lodash/_createFind.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "../../../node_modules/lodash/_baseIteratee.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "../../../node_modules/lodash/isArrayLike.js"),
    keys = __webpack_require__(/*! ./keys */ "../../../node_modules/lodash/keys.js");

/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */
function createFind(findIndexFunc) {
  return function(collection, predicate, fromIndex) {
    var iterable = Object(collection);
    if (!isArrayLike(collection)) {
      var iteratee = baseIteratee(predicate, 3);
      collection = keys(collection);
      predicate = function(key) { return iteratee(iterable[key], key, iterable); };
    }
    var index = findIndexFunc(collection, predicate, fromIndex);
    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
  };
}

module.exports = createFind;


/***/ }),

/***/ "../../../node_modules/lodash/_defineProperty.js":
/*!*******************************************************!*\
  !*** ../../../node_modules/lodash/_defineProperty.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "../../../node_modules/lodash/_getNative.js");

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ "../../../node_modules/lodash/_equalArrays.js":
/*!****************************************************!*\
  !*** ../../../node_modules/lodash/_equalArrays.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var SetCache = __webpack_require__(/*! ./_SetCache */ "../../../node_modules/lodash/_SetCache.js"),
    arraySome = __webpack_require__(/*! ./_arraySome */ "../../../node_modules/lodash/_arraySome.js"),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ "../../../node_modules/lodash/_cacheHas.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),

/***/ "../../../node_modules/lodash/_equalByTag.js":
/*!***************************************************!*\
  !*** ../../../node_modules/lodash/_equalByTag.js ***!
  \***************************************************/
/***/ ((module) => {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "../../../node_modules/lodash/_equalObjects.js":
/*!*****************************************************!*\
  !*** ../../../node_modules/lodash/_equalObjects.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "../../../node_modules/lodash/_getAllKeys.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),

/***/ "../../../node_modules/lodash/_flatRest.js":
/*!*************************************************!*\
  !*** ../../../node_modules/lodash/_flatRest.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var flatten = __webpack_require__(/*! ./flatten */ "../../../node_modules/lodash/flatten.js"),
    overRest = __webpack_require__(/*! ./_overRest */ "../../../node_modules/lodash/_overRest.js"),
    setToString = __webpack_require__(/*! ./_setToString */ "../../../node_modules/lodash/_setToString.js");

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return setToString(overRest(func, undefined, flatten), func + '');
}

module.exports = flatRest;


/***/ }),

/***/ "../../../node_modules/lodash/_freeGlobal.js":
/*!***************************************************!*\
  !*** ../../../node_modules/lodash/_freeGlobal.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

module.exports = freeGlobal;


/***/ }),

/***/ "../../../node_modules/lodash/_getAllKeys.js":
/*!***************************************************!*\
  !*** ../../../node_modules/lodash/_getAllKeys.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(/*! ./_overArg */ "../../../node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "../../../node_modules/lodash/_getMatchData.js":
/*!*****************************************************!*\
  !*** ../../../node_modules/lodash/_getMatchData.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ "../../../node_modules/lodash/_isStrictComparable.js"),
    keys = __webpack_require__(/*! ./keys */ "../../../node_modules/lodash/keys.js");

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),

/***/ "../../../node_modules/lodash/_getNative.js":
/*!**************************************************!*\
  !*** ../../../node_modules/lodash/_getNative.js ***!
  \**************************************************/
/***/ ((module) => {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "../../../node_modules/lodash/_getTag.js":
/*!***********************************************!*\
  !*** ../../../node_modules/lodash/_getTag.js ***!
  \***********************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "../../../node_modules/lodash/_hasPath.js":
/*!************************************************!*\
  !*** ../../../node_modules/lodash/_hasPath.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var castPath = __webpack_require__(/*! ./_castPath */ "../../../node_modules/lodash/_castPath.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "../../../node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "../../../node_modules/lodash/isArray.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "../../../node_modules/lodash/_isIndex.js"),
    isLength = __webpack_require__(/*! ./isLength */ "../../../node_modules/lodash/isLength.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "../../../node_modules/lodash/_toKey.js");

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),

/***/ "../../../node_modules/lodash/_isFlattenable.js":
/*!******************************************************!*\
  !*** ../../../node_modules/lodash/_isFlattenable.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "../../../node_modules/lodash/_Symbol.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "../../../node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "../../../node_modules/lodash/isArray.js");

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),

/***/ "../../../node_modules/lodash/_isIndex.js":
/*!************************************************!*\
  !*** ../../../node_modules/lodash/_isIndex.js ***!
  \************************************************/
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "../../../node_modules/lodash/_isIterateeCall.js":
/*!*******************************************************!*\
  !*** ../../../node_modules/lodash/_isIterateeCall.js ***!
  \*******************************************************/
/***/ ((module) => {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "../../../node_modules/lodash/_isKey.js":
/*!**********************************************!*\
  !*** ../../../node_modules/lodash/_isKey.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArray = __webpack_require__(/*! ./isArray */ "../../../node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "../../../node_modules/lodash/isSymbol.js");

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),

/***/ "../../../node_modules/lodash/_isPrototype.js":
/*!****************************************************!*\
  !*** ../../../node_modules/lodash/_isPrototype.js ***!
  \****************************************************/
/***/ ((module) => {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "../../../node_modules/lodash/_isStrictComparable.js":
/*!***********************************************************!*\
  !*** ../../../node_modules/lodash/_isStrictComparable.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./isObject */ "../../../node_modules/lodash/isObject.js");

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),

/***/ "../../../node_modules/lodash/_listCacheClear.js":
/*!*******************************************************!*\
  !*** ../../../node_modules/lodash/_listCacheClear.js ***!
  \*******************************************************/
/***/ ((module) => {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ "../../../node_modules/lodash/_listCacheDelete.js":
/*!********************************************************!*\
  !*** ../../../node_modules/lodash/_listCacheDelete.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "../../../node_modules/lodash/_assocIndexOf.js");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ "../../../node_modules/lodash/_listCacheGet.js":
/*!*****************************************************!*\
  !*** ../../../node_modules/lodash/_listCacheGet.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "../../../node_modules/lodash/_assocIndexOf.js");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "../../../node_modules/lodash/_listCacheHas.js":
/*!*****************************************************!*\
  !*** ../../../node_modules/lodash/_listCacheHas.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "../../../node_modules/lodash/_assocIndexOf.js");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ "../../../node_modules/lodash/_listCacheSet.js":
/*!*****************************************************!*\
  !*** ../../../node_modules/lodash/_listCacheSet.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "../../../node_modules/lodash/_assocIndexOf.js");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "../../../node_modules/lodash/_matchesStrictComparable.js":
/*!****************************************************************!*\
  !*** ../../../node_modules/lodash/_matchesStrictComparable.js ***!
  \****************************************************************/
/***/ ((module) => {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),

/***/ "../../../node_modules/lodash/_memoizeCapped.js":
/*!******************************************************!*\
  !*** ../../../node_modules/lodash/_memoizeCapped.js ***!
  \******************************************************/
/***/ ((module) => {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "../../../node_modules/lodash/_nodeUtil.js":
/*!*************************************************!*\
  !*** ../../../node_modules/lodash/_nodeUtil.js ***!
  \*************************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "../../../node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;


/***/ }),

/***/ "../../../node_modules/lodash/_overArg.js":
/*!************************************************!*\
  !*** ../../../node_modules/lodash/_overArg.js ***!
  \************************************************/
/***/ ((module) => {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "../../../node_modules/lodash/_overRest.js":
/*!*************************************************!*\
  !*** ../../../node_modules/lodash/_overRest.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var apply = __webpack_require__(/*! ./_apply */ "../../../node_modules/lodash/_apply.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),

/***/ "../../../node_modules/lodash/_root.js":
/*!*********************************************!*\
  !*** ../../../node_modules/lodash/_root.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "../../../node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "../../../node_modules/lodash/_setToString.js":
/*!****************************************************!*\
  !*** ../../../node_modules/lodash/_setToString.js ***!
  \****************************************************/
/***/ ((module) => {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "../../../node_modules/lodash/_stringToPath.js":
/*!*****************************************************!*\
  !*** ../../../node_modules/lodash/_stringToPath.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ "../../../node_modules/lodash/_memoizeCapped.js");

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),

/***/ "../../../node_modules/lodash/_toKey.js":
/*!**********************************************!*\
  !*** ../../../node_modules/lodash/_toKey.js ***!
  \**********************************************/
/***/ ((module) => {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "../../../node_modules/lodash/assign.js":
/*!**********************************************!*\
  !*** ../../../node_modules/lodash/assign.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assignValue = __webpack_require__(/*! ./_assignValue */ "../../../node_modules/lodash/_assignValue.js"),
    copyObject = __webpack_require__(/*! ./_copyObject */ "../../../node_modules/lodash/_copyObject.js"),
    createAssigner = __webpack_require__(/*! ./_createAssigner */ "../../../node_modules/lodash/_createAssigner.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "../../../node_modules/lodash/isArrayLike.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "../../../node_modules/lodash/_isPrototype.js"),
    keys = __webpack_require__(/*! ./keys */ "../../../node_modules/lodash/keys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns own enumerable string keyed properties of source objects to the
 * destination object. Source objects are applied from left to right.
 * Subsequent sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object` and is loosely based on
 * [`Object.assign`](https://mdn.io/Object/assign).
 *
 * @static
 * @memberOf _
 * @since 0.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assignIn
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assign({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'c': 3 }
 */
var assign = createAssigner(function(object, source) {
  if (isPrototype(source) || isArrayLike(source)) {
    copyObject(source, keys(source), object);
    return;
  }
  for (var key in source) {
    if (hasOwnProperty.call(source, key)) {
      assignValue(object, key, source[key]);
    }
  }
});

module.exports = assign;


/***/ }),

/***/ "../../../node_modules/lodash/debounce.js":
/*!************************************************!*\
  !*** ../../../node_modules/lodash/debounce.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./isObject */ "../../../node_modules/lodash/isObject.js"),
    now = __webpack_require__(/*! ./now */ "../../../node_modules/lodash/now.js"),
    toNumber = __webpack_require__(/*! ./toNumber */ "../../../node_modules/lodash/toNumber.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ "../../../node_modules/lodash/defaults.js":
/*!************************************************!*\
  !*** ../../../node_modules/lodash/defaults.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseRest = __webpack_require__(/*! ./_baseRest */ "../../../node_modules/lodash/_baseRest.js"),
    eq = __webpack_require__(/*! ./eq */ "../../../node_modules/lodash/eq.js"),
    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ "../../../node_modules/lodash/_isIterateeCall.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "../../../node_modules/lodash/keysIn.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns own and inherited enumerable string keyed properties of source
 * objects to the destination object for all destination properties that
 * resolve to `undefined`. Source objects are applied from left to right.
 * Once a property is set, additional values of the same property are ignored.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaultsDeep
 * @example
 *
 * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var defaults = baseRest(function(object, sources) {
  object = Object(object);

  var index = -1;
  var length = sources.length;
  var guard = length > 2 ? sources[2] : undefined;

  if (guard && isIterateeCall(sources[0], sources[1], guard)) {
    length = 1;
  }

  while (++index < length) {
    var source = sources[index];
    var props = keysIn(source);
    var propsIndex = -1;
    var propsLength = props.length;

    while (++propsIndex < propsLength) {
      var key = props[propsIndex];
      var value = object[key];

      if (value === undefined ||
          (eq(value, objectProto[key]) && !hasOwnProperty.call(object, key))) {
        object[key] = source[key];
      }
    }
  }

  return object;
});

module.exports = defaults;


/***/ }),

/***/ "../../../node_modules/lodash/eq.js":
/*!******************************************!*\
  !*** ../../../node_modules/lodash/eq.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "../../../node_modules/lodash/find.js":
/*!********************************************!*\
  !*** ../../../node_modules/lodash/find.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var createFind = __webpack_require__(/*! ./_createFind */ "../../../node_modules/lodash/_createFind.js"),
    findIndex = __webpack_require__(/*! ./findIndex */ "../../../node_modules/lodash/findIndex.js");

/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.find(users, function(o) { return o.age < 40; });
 * // => object for 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.find(users, { 'age': 1, 'active': true });
 * // => object for 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.find(users, ['active', false]);
 * // => object for 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.find(users, 'active');
 * // => object for 'barney'
 */
var find = createFind(findIndex);

module.exports = find;


/***/ }),

/***/ "../../../node_modules/lodash/findIndex.js":
/*!*************************************************!*\
  !*** ../../../node_modules/lodash/findIndex.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFindIndex = __webpack_require__(/*! ./_baseFindIndex */ "../../../node_modules/lodash/_baseFindIndex.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "../../../node_modules/lodash/_baseIteratee.js"),
    toInteger = __webpack_require__(/*! ./toInteger */ "../../../node_modules/lodash/toInteger.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return baseFindIndex(array, baseIteratee(predicate, 3), index);
}

module.exports = findIndex;


/***/ }),

/***/ "../../../node_modules/lodash/flatten.js":
/*!***********************************************!*\
  !*** ../../../node_modules/lodash/flatten.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFlatten = __webpack_require__(/*! ./_baseFlatten */ "../../../node_modules/lodash/_baseFlatten.js");

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

module.exports = flatten;


/***/ }),

/***/ "../../../node_modules/lodash/get.js":
/*!*******************************************!*\
  !*** ../../../node_modules/lodash/get.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGet = __webpack_require__(/*! ./_baseGet */ "../../../node_modules/lodash/_baseGet.js");

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),

/***/ "../../../node_modules/lodash/hasIn.js":
/*!*********************************************!*\
  !*** ../../../node_modules/lodash/hasIn.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseHasIn = __webpack_require__(/*! ./_baseHasIn */ "../../../node_modules/lodash/_baseHasIn.js"),
    hasPath = __webpack_require__(/*! ./_hasPath */ "../../../node_modules/lodash/_hasPath.js");

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),

/***/ "../../../node_modules/lodash/identity.js":
/*!************************************************!*\
  !*** ../../../node_modules/lodash/identity.js ***!
  \************************************************/
/***/ ((module) => {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "../../../node_modules/lodash/isArguments.js":
/*!***************************************************!*\
  !*** ../../../node_modules/lodash/isArguments.js ***!
  \***************************************************/
/***/ ((module) => {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "../../../node_modules/lodash/isArray.js":
/*!***********************************************!*\
  !*** ../../../node_modules/lodash/isArray.js ***!
  \***********************************************/
/***/ ((module) => {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "../../../node_modules/lodash/isArrayLike.js":
/*!***************************************************!*\
  !*** ../../../node_modules/lodash/isArrayLike.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(/*! ./isFunction */ "../../../node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "../../../node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "../../../node_modules/lodash/isBuffer.js":
/*!************************************************!*\
  !*** ../../../node_modules/lodash/isBuffer.js ***!
  \************************************************/
/***/ ((module) => {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "../../../node_modules/lodash/isEmpty.js":
/*!***********************************************!*\
  !*** ../../../node_modules/lodash/isEmpty.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseKeys = __webpack_require__(/*! ./_baseKeys */ "../../../node_modules/lodash/_baseKeys.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "../../../node_modules/lodash/_getTag.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "../../../node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "../../../node_modules/lodash/isArray.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "../../../node_modules/lodash/isArrayLike.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "../../../node_modules/lodash/isBuffer.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "../../../node_modules/lodash/_isPrototype.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "../../../node_modules/lodash/isTypedArray.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (isArrayLike(value) &&
      (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
        isBuffer(value) || isTypedArray(value) || isArguments(value))) {
    return !value.length;
  }
  var tag = getTag(value);
  if (tag == mapTag || tag == setTag) {
    return !value.size;
  }
  if (isPrototype(value)) {
    return !baseKeys(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}

module.exports = isEmpty;


/***/ }),

/***/ "../../../node_modules/lodash/isFunction.js":
/*!**************************************************!*\
  !*** ../../../node_modules/lodash/isFunction.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../../../node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "../../../node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "../../../node_modules/lodash/isLength.js":
/*!************************************************!*\
  !*** ../../../node_modules/lodash/isLength.js ***!
  \************************************************/
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "../../../node_modules/lodash/isObject.js":
/*!************************************************!*\
  !*** ../../../node_modules/lodash/isObject.js ***!
  \************************************************/
/***/ ((module) => {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "../../../node_modules/lodash/isObjectLike.js":
/*!****************************************************!*\
  !*** ../../../node_modules/lodash/isObjectLike.js ***!
  \****************************************************/
/***/ ((module) => {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "../../../node_modules/lodash/isRegExp.js":
/*!************************************************!*\
  !*** ../../../node_modules/lodash/isRegExp.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsRegExp = __webpack_require__(/*! ./_baseIsRegExp */ "../../../node_modules/lodash/_baseIsRegExp.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "../../../node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "../../../node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsRegExp = nodeUtil && nodeUtil.isRegExp;

/**
 * Checks if `value` is classified as a `RegExp` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
 * @example
 *
 * _.isRegExp(/abc/);
 * // => true
 *
 * _.isRegExp('/abc/');
 * // => false
 */
var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;

module.exports = isRegExp;


/***/ }),

/***/ "../../../node_modules/lodash/isSymbol.js":
/*!************************************************!*\
  !*** ../../../node_modules/lodash/isSymbol.js ***!
  \************************************************/
/***/ ((module) => {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "../../../node_modules/lodash/isTypedArray.js":
/*!****************************************************!*\
  !*** ../../../node_modules/lodash/isTypedArray.js ***!
  \****************************************************/
/***/ ((module) => {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "../../../node_modules/lodash/keys.js":
/*!********************************************!*\
  !*** ../../../node_modules/lodash/keys.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(/*! ./_overArg */ "../../../node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "../../../node_modules/lodash/keysIn.js":
/*!**********************************************!*\
  !*** ../../../node_modules/lodash/keysIn.js ***!
  \**********************************************/
/***/ ((module) => {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),

/***/ "../../../node_modules/lodash/mapValues.js":
/*!*************************************************!*\
  !*** ../../../node_modules/lodash/mapValues.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "../../../node_modules/lodash/_baseAssignValue.js"),
    baseForOwn = __webpack_require__(/*! ./_baseForOwn */ "../../../node_modules/lodash/_baseForOwn.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "../../../node_modules/lodash/_baseIteratee.js");

/**
 * Creates an object with the same keys as `object` and values generated
 * by running each own enumerable string keyed property of `object` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, key, object).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns the new mapped object.
 * @see _.mapKeys
 * @example
 *
 * var users = {
 *   'fred':    { 'user': 'fred',    'age': 40 },
 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
 * };
 *
 * _.mapValues(users, function(o) { return o.age; });
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 *
 * // The `_.property` iteratee shorthand.
 * _.mapValues(users, 'age');
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 */
function mapValues(object, iteratee) {
  var result = {};
  iteratee = baseIteratee(iteratee, 3);

  baseForOwn(object, function(value, key, object) {
    baseAssignValue(result, key, iteratee(value, key, object));
  });
  return result;
}

module.exports = mapValues;


/***/ }),

/***/ "../../../node_modules/lodash/now.js":
/*!*******************************************!*\
  !*** ../../../node_modules/lodash/now.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "../../../node_modules/lodash/_root.js");

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ "../../../node_modules/lodash/pick.js":
/*!********************************************!*\
  !*** ../../../node_modules/lodash/pick.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var basePick = __webpack_require__(/*! ./_basePick */ "../../../node_modules/lodash/_basePick.js"),
    flatRest = __webpack_require__(/*! ./_flatRest */ "../../../node_modules/lodash/_flatRest.js");

/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */
var pick = flatRest(function(object, paths) {
  return object == null ? {} : basePick(object, paths);
});

module.exports = pick;


/***/ }),

/***/ "../../../node_modules/lodash/property.js":
/*!************************************************!*\
  !*** ../../../node_modules/lodash/property.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseProperty = __webpack_require__(/*! ./_baseProperty */ "../../../node_modules/lodash/_baseProperty.js"),
    basePropertyDeep = __webpack_require__(/*! ./_basePropertyDeep */ "../../../node_modules/lodash/_basePropertyDeep.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "../../../node_modules/lodash/_isKey.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "../../../node_modules/lodash/_toKey.js");

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),

/***/ "../../../node_modules/lodash/throttle.js":
/*!************************************************!*\
  !*** ../../../node_modules/lodash/throttle.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var debounce = __webpack_require__(/*! ./debounce */ "../../../node_modules/lodash/debounce.js"),
    isObject = __webpack_require__(/*! ./isObject */ "../../../node_modules/lodash/isObject.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

module.exports = throttle;


/***/ }),

/***/ "../../../node_modules/lodash/toFinite.js":
/*!************************************************!*\
  !*** ../../../node_modules/lodash/toFinite.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toNumber = __webpack_require__(/*! ./toNumber */ "../../../node_modules/lodash/toNumber.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),

/***/ "../../../node_modules/lodash/toInteger.js":
/*!*************************************************!*\
  !*** ../../../node_modules/lodash/toInteger.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toFinite = __webpack_require__(/*! ./toFinite */ "../../../node_modules/lodash/toFinite.js");

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),

/***/ "../../../node_modules/lodash/toNumber.js":
/*!************************************************!*\
  !*** ../../../node_modules/lodash/toNumber.js ***!
  \************************************************/
/***/ ((module) => {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "../../../node_modules/lodash/toString.js":
/*!************************************************!*\
  !*** ../../../node_modules/lodash/toString.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseToString = __webpack_require__(/*! ./_baseToString */ "../../../node_modules/lodash/_baseToString.js");

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ "../../../node_modules/lodash/uniqueId.js":
/*!************************************************!*\
  !*** ../../../node_modules/lodash/uniqueId.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toString = __webpack_require__(/*! ./toString */ "../../../node_modules/lodash/toString.js");

/** Used to generate unique IDs. */
var idCounter = 0;

/**
 * Generates a unique ID. If `prefix` is given, the ID is appended to it.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {string} [prefix=''] The value to prefix the ID with.
 * @returns {string} Returns the unique ID.
 * @example
 *
 * _.uniqueId('contact_');
 * // => 'contact_104'
 *
 * _.uniqueId();
 * // => '105'
 */
function uniqueId(prefix) {
  var id = ++idCounter;
  return toString(prefix) + id;
}

module.exports = uniqueId;


/***/ }),

/***/ "../../../node_modules/object-assign/index.js":
/*!****************************************************!*\
  !*** ../../../node_modules/object-assign/index.js ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "../../../node_modules/prop-types/checkPropTypes.js":
/*!**********************************************************!*\
  !*** ../../../node_modules/prop-types/checkPropTypes.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "../../../node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "../../../node_modules/prop-types/factoryWithTypeCheckers.js":
/*!*******************************************************************!*\
  !*** ../../../node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "../../../node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "../../../node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "../../../node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "../../../node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "../../../node_modules/prop-types/index.js":
/*!*************************************************!*\
  !*** ../../../node_modules/prop-types/index.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "../../../node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "../../../node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "../../../node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!********************************************************************!*\
  !*** ../../../node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "../../../node_modules/react-is/cjs/react-is.development.js":
/*!******************************************************************!*\
  !*** ../../../node_modules/react-is/cjs/react-is.development.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "../../../node_modules/react-is/index.js":
/*!***********************************************!*\
  !*** ../../../node_modules/react-is/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "../../../node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "../../victory-core/es/victory-container/victory-container.js":
/*!********************************************************************!*\
  !*** ../../victory-core/es/victory-container/victory-container.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VictoryContainer)
/* harmony export */ });
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isFunction */ "../../../node_modules/lodash/isFunction.js");
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isObject */ "../../../node_modules/lodash/isObject.js");
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/uniqueId */ "../../../node_modules/lodash/uniqueId.js");
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_defaults__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/defaults */ "../../../node_modules/lodash/defaults.js");
/* harmony import */ var lodash_defaults__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_defaults__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/assign */ "../../../node_modules/lodash/assign.js");
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_assign__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _victory_util_prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../victory-util/prop-types */ "../../victory-core/es/victory-util/prop-types.js");
/* harmony import */ var _victory_portal_portal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../victory-portal/portal */ "../../victory-core/es/victory-portal/portal.js");
/* harmony import */ var _victory_portal_portal_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../victory-portal/portal-context */ "../../victory-core/es/victory-portal/portal-context.js");
/* harmony import */ var _victory_util_timer_context__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../victory-util/timer-context */ "../../victory-core/es/victory-util/timer-context.js");
/* harmony import */ var _victory_util_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../victory-util/helpers */ "../../victory-core/es/victory-util/helpers.js");






function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var VictoryContainer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(VictoryContainer, _React$Component);

  function VictoryContainer(props) {
    var _this;

    _classCallCheck(this, VictoryContainer);

    _this = _possibleConstructorReturn(this, (VictoryContainer.__proto__ || Object.getPrototypeOf(VictoryContainer)).call(this, props));
    _this.containerId = !lodash_isObject__WEBPACK_IMPORTED_MODULE_1___default()(props) || props.containerId === undefined ? lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2___default()("victory-container-") : props.containerId;

    _this.savePortalRef = function (portal) {
      _this.portalRef = portal;
      return portal;
    };

    _this.portalUpdate = function (key, el) {
      return _this.portalRef.portalUpdate(key, el);
    };

    _this.portalRegister = function () {
      return _this.portalRef.portalRegister();
    };

    _this.portalDeregister = function (key) {
      return _this.portalRef.portalDeregister(key);
    };

    _this.saveContainerRef = props && lodash_isFunction__WEBPACK_IMPORTED_MODULE_0___default()(props.containerRef) ? props.containerRef : function (container) {
      _this.containerRef = container;
      return container;
    };
    _this.shouldHandleWheel = props && props.events && props.events.onWheel;

    if (_this.shouldHandleWheel) {
      _this.handleWheel = function (e) {
        return e.preventDefault();
      };
    }

    return _this;
  }

  _createClass(VictoryContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.shouldHandleWheel && this.containerRef) {
        this.containerRef.addEventListener("wheel", this.handleWheel);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.shouldHandleWheel && this.containerRef) {
        this.containerRef.removeEventListener("wheel", this.handleWheel);
      }
    }
  }, {
    key: "getIdForElement",
    value: function getIdForElement(elementName) {
      return "".concat(this.containerId, "-").concat(elementName);
    } // overridden in custom containers

  }, {
    key: "getChildren",
    value: function getChildren(props) {
      return props.children;
    } // Get props defined by the Open UI Automation (OUIA) 1.0-RC spec
    // See https://ouia.readthedocs.io/en/latest/README.html#ouia-component

  }, {
    key: "getOUIAProps",
    value: function getOUIAProps(props) {
      var ouiaId = props.ouiaId,
          ouiaSafe = props.ouiaSafe,
          ouiaType = props.ouiaType;
      return _objectSpread({}, ouiaId && {
        "data-ouia-component-id": ouiaId
      }, ouiaType && {
        "data-ouia-component-type": ouiaType
      }, ouiaSafe !== undefined && {
        "data-ouia-safe": ouiaSafe
      });
    }
  }, {
    key: "renderContainer",
    value: function renderContainer(props, svgProps, style) {
      var title = props.title,
          desc = props.desc,
          portalComponent = props.portalComponent,
          className = props.className,
          width = props.width,
          height = props.height,
          portalZIndex = props.portalZIndex,
          responsive = props.responsive;
      var children = this.getChildren(props);
      var dimensions = responsive ? {
        width: "100%",
        height: "100%"
      } : {
        width: width,
        height: height
      };

      var divStyle = lodash_assign__WEBPACK_IMPORTED_MODULE_4___default()({
        pointerEvents: "none",
        touchAction: "none",
        position: "relative"
      }, dimensions);

      var portalDivStyle = lodash_assign__WEBPACK_IMPORTED_MODULE_4___default()({
        zIndex: portalZIndex,
        position: "absolute",
        top: 0,
        left: 0
      }, dimensions);

      var svgStyle = lodash_assign__WEBPACK_IMPORTED_MODULE_4___default()({
        pointerEvents: "all"
      }, dimensions);

      var portalSvgStyle = lodash_assign__WEBPACK_IMPORTED_MODULE_4___default()({
        overflow: "visible"
      }, dimensions);

      var portalProps = {
        width: width,
        height: height,
        viewBox: svgProps.viewBox,
        preserveAspectRatio: svgProps.preserveAspectRatio,
        style: portalSvgStyle
      };
      return react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_victory_portal_portal_context__WEBPACK_IMPORTED_MODULE_7__["default"].Provider, {
        value: {
          portalUpdate: this.portalUpdate,
          portalRegister: this.portalRegister,
          portalDeregister: this.portalDeregister
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", _extends({
        style: lodash_defaults__WEBPACK_IMPORTED_MODULE_3___default()({}, style, divStyle),
        className: className,
        ref: this.saveContainerRef
      }, this.getOUIAProps(props)), react__WEBPACK_IMPORTED_MODULE_5___default().createElement("svg", _extends({}, svgProps, {
        style: svgStyle
      }), title ? react__WEBPACK_IMPORTED_MODULE_5___default().createElement("title", {
        id: this.getIdForElement("title")
      }, title) : null, desc ? react__WEBPACK_IMPORTED_MODULE_5___default().createElement("desc", {
        id: this.getIdForElement("desc")
      }, desc) : null, children), react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
        style: portalDivStyle
      }, react__WEBPACK_IMPORTED_MODULE_5___default().cloneElement(portalComponent, _objectSpread({}, portalProps, {
        ref: this.savePortalRef
      })))));
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          width = _props.width,
          height = _props.height,
          responsive = _props.responsive,
          events = _props.events,
          title = _props.title,
          desc = _props.desc,
          tabIndex = _props.tabIndex,
          preserveAspectRatio = _props.preserveAspectRatio,
          role = _props.role;
      var style = responsive ? this.props.style : _victory_util_helpers__WEBPACK_IMPORTED_MODULE_8__.omit(this.props.style, ["height", "width"]);

      var svgProps = lodash_assign__WEBPACK_IMPORTED_MODULE_4___default()({
        width: width,
        height: height,
        tabIndex: tabIndex,
        role: role,
        "aria-labelledby": [title && this.getIdForElement("title"), this.props["aria-labelledby"]].filter(Boolean).join(" ") || undefined,
        "aria-describedby": [desc && this.getIdForElement("desc"), this.props["aria-describedby"]].filter(Boolean).join(" ") || undefined,
        viewBox: responsive ? "0 0 ".concat(width, " ").concat(height) : undefined,
        preserveAspectRatio: responsive ? preserveAspectRatio : undefined
      }, events);

      return this.renderContainer(this.props, svgProps, style);
    }
  }]);

  return VictoryContainer;
}((react__WEBPACK_IMPORTED_MODULE_5___default().Component));

Object.defineProperty(VictoryContainer, "displayName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: "VictoryContainer"
});
Object.defineProperty(VictoryContainer, "role", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: "container"
});
Object.defineProperty(VictoryContainer, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    "aria-describedby": (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
    "aria-labelledby": (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
    children: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_6___default().node)), (prop_types__WEBPACK_IMPORTED_MODULE_6___default().node)]),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
    containerId: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_6___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string)]),
    containerRef: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),
    desc: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
    events: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object),
    height: _victory_util_prop_types__WEBPACK_IMPORTED_MODULE_9__.nonNegative,
    name: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
    origin: prop_types__WEBPACK_IMPORTED_MODULE_6___default().shape({
      x: _victory_util_prop_types__WEBPACK_IMPORTED_MODULE_9__.nonNegative,
      y: _victory_util_prop_types__WEBPACK_IMPORTED_MODULE_9__.nonNegative
    }),
    ouiaId: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_6___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string)]),
    ouiaSafe: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
    ouiaType: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
    polar: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
    portalComponent: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().element),
    portalZIndex: _victory_util_prop_types__WEBPACK_IMPORTED_MODULE_9__.integer,
    preserveAspectRatio: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
    responsive: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
    role: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
    style: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object),
    tabIndex: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().number),
    theme: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object),
    title: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
    width: _victory_util_prop_types__WEBPACK_IMPORTED_MODULE_9__.nonNegative
  }
});
Object.defineProperty(VictoryContainer, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    className: "VictoryContainer",
    portalComponent: react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_victory_portal_portal__WEBPACK_IMPORTED_MODULE_10__["default"], null),
    portalZIndex: 99,
    responsive: true,
    role: "img"
  }
});
Object.defineProperty(VictoryContainer, "contextType", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: _victory_util_timer_context__WEBPACK_IMPORTED_MODULE_11__["default"]
});


/***/ }),

/***/ "../../victory-core/es/victory-label/victory-label.js":
/*!************************************************************!*\
  !*** ../../victory-core/es/victory-label/victory-label.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isEmpty */ "../../../node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_defaults__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/defaults */ "../../../node_modules/lodash/defaults.js");
/* harmony import */ var lodash_defaults__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_defaults__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/assign */ "../../../node_modules/lodash/assign.js");
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_assign__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _victory_portal_victory_portal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../victory-portal/victory-portal */ "../../victory-core/es/victory-portal/victory-portal.js");
/* harmony import */ var _victory_primitives_rect__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../victory-primitives/rect */ "../../victory-core/es/victory-primitives/rect.js");
/* harmony import */ var _victory_util_prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../victory-util/prop-types */ "../../victory-core/es/victory-util/prop-types.js");
/* harmony import */ var _victory_util_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../victory-util/helpers */ "../../victory-core/es/victory-util/helpers.js");
/* harmony import */ var _victory_util_label_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../victory-util/label-helpers */ "../../victory-core/es/victory-util/label-helpers.js");
/* harmony import */ var _victory_util_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../victory-util/style */ "../../victory-core/es/victory-util/style.js");
/* harmony import */ var _victory_util_log__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../victory-util/log */ "../../victory-core/es/victory-util/log.js");
/* harmony import */ var _victory_util_textsize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../victory-util/textsize */ "../../victory-core/es/victory-util/textsize.js");
/* harmony import */ var _victory_primitives_tspan__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../victory-primitives/tspan */ "../../victory-core/es/victory-primitives/tspan.js");
/* harmony import */ var _victory_primitives_text__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../victory-primitives/text */ "../../victory-core/es/victory-primitives/text.js");




function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/*eslint no-magic-numbers: ["error", { "ignore": [-0.5, 0.5, 0, 1, 2] }]*/












var defaultStyles = {
  fill: "#252525",
  fontSize: 14,
  fontFamily: "'Gill Sans', 'Gill Sans MT', 'Ser­avek', 'Trebuchet MS', sans-serif",
  stroke: "transparent"
};

var getPosition = function (props, dimension) {
  if (!props.datum) {
    return 0;
  }

  var scaledPoint = _victory_util_helpers__WEBPACK_IMPORTED_MODULE_5__.scalePoint(props, props.datum);
  return scaledPoint[dimension];
};

var getFontSize = function (style) {
  var baseSize = style && style.fontSize;

  if (typeof baseSize === "number") {
    return baseSize;
  } else if (baseSize === undefined || baseSize === null) {
    return defaultStyles.fontSize;
  } else if (typeof baseSize === "string") {
    var fontSize = +baseSize.replace("px", "");

    if (!isNaN(fontSize)) {
      return fontSize;
    } else {
      _victory_util_log__WEBPACK_IMPORTED_MODULE_6__.warn("fontSize should be expressed as a number of pixels");
      return defaultStyles.fontSize;
    }
  }

  return defaultStyles.fontSize;
};

var getSingleValue = function (prop) {
  var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return Array.isArray(prop) ? prop[index] || prop[0] : prop;
};

var shouldUseMultilineBackgrounds = function (props) {
  var backgroundStyle = props.backgroundStyle,
      backgroundPadding = props.backgroundPadding;
  return Array.isArray(backgroundStyle) && !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(backgroundStyle) || Array.isArray(backgroundPadding) && !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(backgroundPadding);
};

var getStyles = function (style, props) {
  if (props.disableInlineStyles) {
    var baseStyles = _victory_util_helpers__WEBPACK_IMPORTED_MODULE_5__.evaluateStyle(style, props);
    return {
      // Font size is necessary to calculate the y position of the label
      fontSize: getFontSize(baseStyles)
    };
  }

  var getSingleStyle = function (s) {
    s = s ? lodash_defaults__WEBPACK_IMPORTED_MODULE_1___default()({}, s, defaultStyles) : defaultStyles;
    var baseStyles = _victory_util_helpers__WEBPACK_IMPORTED_MODULE_5__.evaluateStyle(s, props);
    return lodash_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, baseStyles, {
      fontSize: getFontSize(baseStyles)
    });
  };

  return Array.isArray(style) && !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(style) ? style.map(function (s) {
    return getSingleStyle(s);
  }) : getSingleStyle(style);
};

var getBackgroundStyles = function (style, props) {
  if (!style) {
    return undefined;
  }

  return Array.isArray(style) && !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(style) ? style.map(function (s) {
    return _victory_util_helpers__WEBPACK_IMPORTED_MODULE_5__.evaluateStyle(s, props);
  }) : _victory_util_helpers__WEBPACK_IMPORTED_MODULE_5__.evaluateStyle(style, props);
};

var getBackgroundPadding = function (props) {
  if (props.backgroundPadding && Array.isArray(props.backgroundPadding)) {
    return props.backgroundPadding.map(function (backgroundPadding) {
      var padding = _victory_util_helpers__WEBPACK_IMPORTED_MODULE_5__.evaluateProp(backgroundPadding, props);
      return _victory_util_helpers__WEBPACK_IMPORTED_MODULE_5__.getPadding({
        padding: padding
      });
    });
  } else {
    var padding = _victory_util_helpers__WEBPACK_IMPORTED_MODULE_5__.evaluateProp(props.backgroundPadding, props);
    return _victory_util_helpers__WEBPACK_IMPORTED_MODULE_5__.getPadding({
      padding: padding
    });
  }
};

var getLineHeight = function (props) {
  var lineHeight = _victory_util_helpers__WEBPACK_IMPORTED_MODULE_5__.evaluateProp(props.lineHeight, props);

  if (Array.isArray(lineHeight)) {
    return lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(lineHeight) ? [1] : lineHeight;
  } else {
    return lineHeight;
  }
};

var getContent = function (text, props) {
  if (text === undefined || text === null) {
    return undefined;
  }

  if (Array.isArray(text)) {
    return text.map(function (line) {
      return _victory_util_helpers__WEBPACK_IMPORTED_MODULE_5__.evaluateProp(line, props);
    });
  }

  var child = _victory_util_helpers__WEBPACK_IMPORTED_MODULE_5__.evaluateProp(text, props);

  if (child === undefined || child === null) {
    return undefined;
  }

  return Array.isArray(child) ? child : "".concat(child).split("\n");
};

var getDy = function (props, verticalAnchor, lineHeight) {
  var dy = props.dy ? _victory_util_helpers__WEBPACK_IMPORTED_MODULE_5__.evaluateProp(props.dy, props) : 0;
  var length = props.inline ? 1 : props.text.length;
  var capHeight = _victory_util_helpers__WEBPACK_IMPORTED_MODULE_5__.evaluateProp(props.capHeight, props);
  var anchor = verticalAnchor ? _victory_util_helpers__WEBPACK_IMPORTED_MODULE_5__.evaluateProp(verticalAnchor, props) : "middle";

  var fontSizes = _toConsumableArray(Array(length).keys()).map(function (i) {
    return getSingleValue(props.style, i).fontSize;
  });

  var lineHeights = _toConsumableArray(Array(length).keys()).map(function (i) {
    return getSingleValue(lineHeight, i);
  });

  if (anchor === "start") {
    return dy + (capHeight / 2 + lineHeights[0] / 2) * fontSizes[0];
  } else if (props.inline) {
    return anchor === "end" ? dy + (capHeight / 2 - lineHeights[0] / 2) * fontSizes[0] : dy + capHeight / 2 * fontSizes[0];
  } else if (length === 1) {
    return anchor === "end" ? dy + (capHeight / 2 + (0.5 - length) * lineHeights[0]) * fontSizes[0] : dy + (capHeight / 2 + (0.5 - length / 2) * lineHeights[0]) * fontSizes[0];
  } else {
    var allHeights = _toConsumableArray(Array(length).keys()).reduce(function (memo, i) {
      return memo + (capHeight / 2 + (0.5 - length) * lineHeights[i]) * fontSizes[i] / length;
    }, 0);

    return anchor === "end" ? dy + allHeights : dy + allHeights / 2 + capHeight / 2 * lineHeights[length - 1] * fontSizes[length - 1];
  }
};

var getTransform = function (props, x, y) {
  var polar = props.polar;
  var style = getSingleValue(props.style);
  var defaultAngle = polar ? _victory_util_label_helpers__WEBPACK_IMPORTED_MODULE_7__.getPolarAngle(props) : 0;
  var baseAngle = style.angle === undefined ? _victory_util_helpers__WEBPACK_IMPORTED_MODULE_5__.evaluateProp(props.angle, props) : style.angle;
  var angle = baseAngle === undefined ? defaultAngle : baseAngle;
  var transform = props.transform || style.transform;
  var transformPart = transform && _victory_util_helpers__WEBPACK_IMPORTED_MODULE_5__.evaluateProp(transform, props);
  var rotatePart = angle && {
    rotate: [angle, x, y]
  };
  return transformPart || angle ? _victory_util_style__WEBPACK_IMPORTED_MODULE_8__.toTransformString(transformPart, rotatePart) : undefined;
};

var getXCoordinate = function (calculatedProps, labelSizeWidth) {
  var direction = calculatedProps.direction,
      textAnchor = calculatedProps.textAnchor,
      x = calculatedProps.x,
      dx = calculatedProps.dx;

  if (direction === "rtl") {
    return x - labelSizeWidth;
  }

  switch (textAnchor) {
    case "middle":
      return Math.round(x - labelSizeWidth / 2);

    case "end":
      return Math.round(x - labelSizeWidth);

    default:
      // start
      return x + (dx || 0);
  }
};

var getYCoordinate = function (calculatedProps, textHeight) {
  var verticalAnchor = calculatedProps.verticalAnchor,
      y = calculatedProps.y,
      _calculatedProps$orig = calculatedProps.originalDy,
      originalDy = _calculatedProps$orig === void 0 ? 0 : _calculatedProps$orig;
  var offset = y + originalDy;

  switch (verticalAnchor) {
    case "start":
      return Math.floor(offset);

    case "end":
      return Math.ceil(offset - textHeight);

    default:
      // middle
      return Math.floor(offset - textHeight / 2);
  }
};

var getFullBackground = function (calculatedProps, tspanValues) {
  var _calculatedProps$dx = calculatedProps.dx,
      dx = _calculatedProps$dx === void 0 ? 0 : _calculatedProps$dx,
      transform = calculatedProps.transform,
      backgroundComponent = calculatedProps.backgroundComponent,
      backgroundStyle = calculatedProps.backgroundStyle,
      inline = calculatedProps.inline,
      backgroundPadding = calculatedProps.backgroundPadding,
      capHeight = calculatedProps.capHeight;
  var textSizes = tspanValues.map(function (tspan) {
    return tspan.textSize;
  });
  var height = inline ? Math.max.apply(Math, _toConsumableArray(textSizes.map(function (size) {
    return size.height;
  }))) : textSizes.reduce(function (memo, size, i) {
    var capHeightAdjustment = i ? 0 : capHeight / 2;
    return memo + size.height * (tspanValues[i].lineHeight - capHeightAdjustment);
  }, 0);
  var width = inline ? textSizes.reduce(function (memo, size, index) {
    var offset = index ? dx : 0;
    return memo + size.width + offset;
  }, 0) : Math.max.apply(Math, _toConsumableArray(textSizes.map(function (size) {
    return size.width;
  })));
  var xCoordinate = getXCoordinate(calculatedProps, width);
  var yCoordinate = getYCoordinate(calculatedProps, height);
  var backgroundProps = {
    key: "background",
    height: height + backgroundPadding.top + backgroundPadding.bottom,
    style: backgroundStyle,
    transform: transform,
    width: width + backgroundPadding.left + backgroundPadding.right,
    x: inline ? xCoordinate - backgroundPadding.left : xCoordinate + dx - backgroundPadding.left,
    y: yCoordinate
  };
  return react__WEBPACK_IMPORTED_MODULE_3___default().cloneElement(backgroundComponent, lodash_defaults__WEBPACK_IMPORTED_MODULE_1___default()({}, backgroundComponent.props, backgroundProps));
};

var getInlineXOffset = function (calculatedProps, textElements, index) {
  var textAnchor = calculatedProps.textAnchor;
  var widths = textElements.map(function (t) {
    return t.widthWithPadding;
  });
  var totalWidth = widths.reduce(function (memo, width) {
    return memo + width;
  }, 0);
  var centerOffset = -totalWidth / 2;

  switch (textAnchor) {
    case "start":
      return widths.reduce(function (memo, width, i) {
        memo = i < index ? memo + width : memo;
        return memo;
      }, 0);

    case "end":
      return widths.reduce(function (memo, width, i) {
        memo = i > index ? memo - width : memo;
        return memo;
      }, 0);

    default:
      // middle
      return widths.reduce(function (memo, width, i) {
        var offsetWidth = i < index ? width : 0;
        memo = i === index ? memo + width / 2 : memo + offsetWidth;
        return memo;
      }, centerOffset);
  }
};

var getChildBackgrounds = function (calculatedProps, tspanValues) {
  var dy = calculatedProps.dy,
      dx = calculatedProps.dx,
      transform = calculatedProps.transform,
      backgroundStyle = calculatedProps.backgroundStyle,
      backgroundPadding = calculatedProps.backgroundPadding,
      backgroundComponent = calculatedProps.backgroundComponent,
      inline = calculatedProps.inline,
      y = calculatedProps.y;
  var textElements = tspanValues.map(function (current, i) {
    var previous = getSingleValue(tspanValues, i - 1);
    var labelSize = current.textSize;
    var totalLineHeight = current.fontSize * current.lineHeight;
    var textHeight = Math.ceil(totalLineHeight);
    var padding = getSingleValue(backgroundPadding, i);
    var prevPadding = getSingleValue(backgroundPadding, i - 1);
    var xOffset = inline ? dx || 0 : 0;
    var childDy = i && !inline ? previous.fontSize * previous.lineHeight + prevPadding.top + prevPadding.bottom : dy - totalLineHeight * 0.5 - (current.fontSize - current.capHeight);
    return {
      textHeight: textHeight,
      labelSize: labelSize,
      heightWithPadding: textHeight + padding.top + padding.bottom,
      widthWithPadding: labelSize.width + padding.left + padding.right + xOffset,
      y: y,
      fontSize: current.fontSize,
      dy: childDy
    };
  });
  return textElements.map(function (textElement, i) {
    var xCoordinate = getXCoordinate(calculatedProps, textElement.labelSize.width);
    var yCoordinate = textElements.slice(0, i + 1).reduce(function (prev, curr) {
      return prev + curr.dy;
    }, y);
    var padding = getSingleValue(backgroundPadding, i);
    var height = textElement.heightWithPadding;
    var xCoord = inline ? getInlineXOffset(calculatedProps, textElements, i) + xCoordinate - padding.left : xCoordinate;
    var yCoord = inline ? getYCoordinate(calculatedProps, height) - padding.top : yCoordinate;
    var backgroundProps = {
      key: "tspan-background-".concat(i),
      height: height,
      style: getSingleValue(backgroundStyle, i),
      width: textElement.widthWithPadding,
      transform: transform,
      x: xCoord - padding.left,
      y: yCoord
    };
    return react__WEBPACK_IMPORTED_MODULE_3___default().cloneElement(backgroundComponent, lodash_defaults__WEBPACK_IMPORTED_MODULE_1___default()({}, backgroundComponent.props, backgroundProps));
  });
};

var getBackgroundElement = function (calculatedProps, tspanValues) {
  return shouldUseMultilineBackgrounds(calculatedProps) ? getChildBackgrounds(calculatedProps, tspanValues) : getFullBackground(calculatedProps, tspanValues);
};

var calculateSpanDy = function (tspanValues, i, calculatedProps) {
  var current = getSingleValue(tspanValues, i);
  var previous = getSingleValue(tspanValues, i - 1);
  var previousHeight = previous.fontSize * previous.lineHeight;
  var currentHeight = current.fontSize * current.lineHeight;
  var previousCaps = previous.fontSize - previous.capHeight;
  var currentCaps = current.fontSize - current.capHeight;
  var textHeight = previousHeight - previous.fontSize / 2 + current.fontSize / 2 - previousHeight / 2 + currentHeight / 2 - currentCaps / 2 + previousCaps / 2;
  return shouldUseMultilineBackgrounds(calculatedProps) ? textHeight + current.backgroundPadding.top + previous.backgroundPadding.bottom : textHeight;
};

var getTSpanDy = function (tspanValues, calculatedProps, i) {
  var inline = calculatedProps.inline;
  var current = getSingleValue(tspanValues, i);

  if (i && !inline) {
    return calculateSpanDy(tspanValues, i, calculatedProps);
  } else if (inline) {
    return i === 0 ? current.backgroundPadding.top : undefined;
  } else {
    return current.backgroundPadding.top;
  }
};

var evaluateProps = function (props) {
  /* Potential evaluated props are
    1) text
    2) style
    3) everything else
  */
  var text = getContent(props.text, props);
  var style = getStyles(props.style, lodash_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, props, {
    text: text
  }));
  var backgroundStyle = getBackgroundStyles(props.backgroundStyle, lodash_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, props, {
    text: text,
    style: style
  }));
  var backgroundPadding = getBackgroundPadding(lodash_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, props, {
    text: text,
    style: style,
    backgroundStyle: backgroundStyle
  }));
  var id = _victory_util_helpers__WEBPACK_IMPORTED_MODULE_5__.evaluateProp(props.id, props);
  return lodash_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, props, {
    backgroundStyle: backgroundStyle,
    backgroundPadding: backgroundPadding,
    style: style,
    text: text,
    id: id
  });
};

var getCalculatedProps = function (props) {
  var ariaLabel = _victory_util_helpers__WEBPACK_IMPORTED_MODULE_5__.evaluateProp(props.ariaLabel, props);
  var style = getSingleValue(props.style);
  var lineHeight = getLineHeight(props);
  var direction = props.direction ? _victory_util_helpers__WEBPACK_IMPORTED_MODULE_5__.evaluateProp(props.direction, props) : "inherit";
  var textAnchor = props.textAnchor ? _victory_util_helpers__WEBPACK_IMPORTED_MODULE_5__.evaluateProp(props.textAnchor, props) : style.textAnchor || "start";
  var verticalAnchor = props.verticalAnchor ? _victory_util_helpers__WEBPACK_IMPORTED_MODULE_5__.evaluateProp(props.verticalAnchor, props) : style.verticalAnchor || "middle";
  var dx = props.dx ? _victory_util_helpers__WEBPACK_IMPORTED_MODULE_5__.evaluateProp(props.dx, props) : 0;
  var dy = getDy(props, verticalAnchor, lineHeight);
  var x = props.x !== undefined ? props.x : getPosition(props, "x");
  var y = props.y !== undefined ? props.y : getPosition(props, "y");
  var transform = getTransform(props, x, y);
  return lodash_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, props, {
    ariaLabel: ariaLabel,
    lineHeight: lineHeight,
    direction: direction,
    textAnchor: textAnchor,
    verticalAnchor: verticalAnchor,
    dx: dx,
    dy: dy,
    originalDy: props.dy,
    transform: transform,
    x: x,
    y: y
  });
};

var renderLabel = function (calculatedProps, tspanValues) {
  var ariaLabel = calculatedProps.ariaLabel,
      inline = calculatedProps.inline,
      className = calculatedProps.className,
      title = calculatedProps.title,
      events = calculatedProps.events,
      direction = calculatedProps.direction,
      text = calculatedProps.text,
      textAnchor = calculatedProps.textAnchor,
      dx = calculatedProps.dx,
      dy = calculatedProps.dy,
      transform = calculatedProps.transform,
      x = calculatedProps.x,
      y = calculatedProps.y,
      desc = calculatedProps.desc,
      id = calculatedProps.id,
      tabIndex = calculatedProps.tabIndex,
      tspanComponent = calculatedProps.tspanComponent,
      textComponent = calculatedProps.textComponent;

  var textProps = _objectSpread({
    "aria-label": ariaLabel,
    key: "text"
  }, events, {
    direction: direction,
    dx: dx,
    x: x,
    y: y + dy,
    transform: transform,
    className: className,
    title: title,
    desc: _victory_util_helpers__WEBPACK_IMPORTED_MODULE_5__.evaluateProp(desc, calculatedProps),
    tabIndex: _victory_util_helpers__WEBPACK_IMPORTED_MODULE_5__.evaluateProp(tabIndex, calculatedProps),
    id: id
  });

  var tspans = text.map(function (line, i) {
    var currentStyle = tspanValues[i].style;
    var tspanProps = {
      key: "".concat(id, "-key-").concat(i),
      x: !inline ? x : undefined,
      dx: inline ? dx + tspanValues[i].backgroundPadding.left : dx,
      dy: getTSpanDy(tspanValues, calculatedProps, i),
      textAnchor: currentStyle.textAnchor || textAnchor,
      style: currentStyle,
      children: line
    };
    return react__WEBPACK_IMPORTED_MODULE_3___default().cloneElement(tspanComponent, tspanProps);
  });
  return react__WEBPACK_IMPORTED_MODULE_3___default().cloneElement(textComponent, textProps, tspans);
};

var VictoryLabel = function (props) {
  props = evaluateProps(props);

  if (props.text === null || props.text === undefined) {
    return null;
  }

  var calculatedProps = getCalculatedProps(props);
  var text = calculatedProps.text,
      style = calculatedProps.style,
      capHeight = calculatedProps.capHeight,
      backgroundPadding = calculatedProps.backgroundPadding,
      lineHeight = calculatedProps.lineHeight;
  var tspanValues = text.map(function (line, i) {
    var currentStyle = getSingleValue(style, i);
    var capHeightPx = _victory_util_textsize__WEBPACK_IMPORTED_MODULE_9__.convertLengthToPixels("".concat(capHeight, "em"), currentStyle.fontSize);
    var currentLineHeight = getSingleValue(lineHeight, i);
    return {
      style: currentStyle,
      fontSize: currentStyle.fontSize || defaultStyles.fontSize,
      capHeight: capHeightPx,
      text: line,
      textSize: _victory_util_textsize__WEBPACK_IMPORTED_MODULE_9__.approximateTextSize(line, currentStyle),
      lineHeight: currentLineHeight,
      backgroundPadding: getSingleValue(backgroundPadding, i)
    };
  });
  var label = renderLabel(calculatedProps, tspanValues);

  if (props.backgroundStyle) {
    var backgroundElement = getBackgroundElement(calculatedProps, tspanValues);
    var children = [backgroundElement, label];
    var backgroundWithLabel = react__WEBPACK_IMPORTED_MODULE_3___default().cloneElement(props.groupComponent, {}, children);
    return props.renderInPortal ? react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_victory_portal_victory_portal__WEBPACK_IMPORTED_MODULE_10__["default"], null, backgroundWithLabel) : backgroundWithLabel;
  }

  return props.renderInPortal ? react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_victory_portal_victory_portal__WEBPACK_IMPORTED_MODULE_10__["default"], null, label) : label;
};

VictoryLabel.displayName = "VictoryLabel";
VictoryLabel.role = "label";
VictoryLabel.defaultStyles = defaultStyles;
VictoryLabel.propTypes = {
  active: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
  angle: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func)]),
  ariaLabel: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func)]),
  backgroundComponent: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().element),
  backgroundPadding: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().array)]),
  backgroundStyle: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().array)]),
  capHeight: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().string), _victory_util_prop_types__WEBPACK_IMPORTED_MODULE_11__.nonNegative, (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func)]),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  data: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().array),
  datum: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().any),
  desc: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func)]),
  direction: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(["rtl", "ltr", "inherit"]),
  dx: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func)]),
  dy: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func)]),
  events: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),
  groupComponent: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().element),
  id: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func)]),
  index: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)]),
  inline: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
  labelPlacement: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(["parallel", "perpendicular", "vertical"]),
  lineHeight: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().string), _victory_util_prop_types__WEBPACK_IMPORTED_MODULE_11__.nonNegative, (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().array)]),
  origin: prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({
    x: _victory_util_prop_types__WEBPACK_IMPORTED_MODULE_11__.nonNegative,
    y: _victory_util_prop_types__WEBPACK_IMPORTED_MODULE_11__.nonNegative
  }),
  polar: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
  renderInPortal: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
  scale: prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({
    x: _victory_util_prop_types__WEBPACK_IMPORTED_MODULE_11__.scale,
    y: _victory_util_prop_types__WEBPACK_IMPORTED_MODULE_11__.scale
  }),
  style: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().array)]),
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func)]),
  text: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().array)]),
  textAnchor: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(["start", "middle", "end", "inherit"]), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func)]),
  textComponent: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().element),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  transform: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func)]),
  tspanComponent: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().element),
  verticalAnchor: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(["start", "middle", "end"]), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func)]),
  x: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)]),
  y: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)])
};
VictoryLabel.defaultProps = {
  backgroundComponent: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_victory_primitives_rect__WEBPACK_IMPORTED_MODULE_12__["default"], null),
  groupComponent: react__WEBPACK_IMPORTED_MODULE_3___default().createElement("g", null),
  direction: "inherit",
  textComponent: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_victory_primitives_text__WEBPACK_IMPORTED_MODULE_13__["default"], null),
  tspanComponent: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_victory_primitives_tspan__WEBPACK_IMPORTED_MODULE_14__["default"], null),
  capHeight: 0.71,
  // Magic number from d3.
  lineHeight: 1
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VictoryLabel);

/***/ }),

/***/ "../../victory-core/es/victory-portal/portal-context.js":
/*!**************************************************************!*\
  !*** ../../victory-core/es/victory-portal/portal-context.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * The React context object consumers may use to access the context of the
 * portal.
 */

var PortalContext = react__WEBPACK_IMPORTED_MODULE_0___default().createContext({});
PortalContext.displayName = "PortalContext";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PortalContext);

/***/ }),

/***/ "../../victory-core/es/victory-portal/portal.js":
/*!******************************************************!*\
  !*** ../../victory-core/es/victory-portal/portal.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Portal)
/* harmony export */ });
/* harmony import */ var lodash_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/keys */ "../../../node_modules/lodash/keys.js");
/* harmony import */ var lodash_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _victory_util_prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../victory-util/prop-types */ "../../victory-core/es/victory-util/prop-types.js");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var Portal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Portal, _React$Component);

  function Portal(props) {
    var _this;

    _classCallCheck(this, Portal);

    _this = _possibleConstructorReturn(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).call(this, props));
    _this.map = {};
    _this.index = 1;
    _this.portalUpdate = _this.portalUpdate.bind(_assertThisInitialized(_this));
    _this.portalRegister = _this.portalRegister.bind(_assertThisInitialized(_this));
    _this.portalDeregister = _this.portalDeregister.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Portal, [{
    key: "portalRegister",
    value: function portalRegister() {
      return ++this.index;
    }
  }, {
    key: "portalUpdate",
    value: function portalUpdate(key, element) {
      this.map[key] = element;
      this.forceUpdate();
    }
  }, {
    key: "portalDeregister",
    value: function portalDeregister(key) {
      delete this.map[key];
      this.forceUpdate();
    }
  }, {
    key: "getChildren",
    value: function getChildren() {
      var _this2 = this;

      return lodash_keys__WEBPACK_IMPORTED_MODULE_0___default()(this.map).map(function (key) {
        var el = _this2.map[key];
        return el ? react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(el, {
          key: key
        }) : el;
      });
    } // Overridden in victory-core-native

  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default().createElement("svg", this.props, this.getChildren());
    }
  }]);

  return Portal;
}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));

Object.defineProperty(Portal, "displayName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: "Portal"
});
Object.defineProperty(Portal, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    height: _victory_util_prop_types__WEBPACK_IMPORTED_MODULE_3__.nonNegative,
    style: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
    viewBox: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    width: _victory_util_prop_types__WEBPACK_IMPORTED_MODULE_3__.nonNegative
  }
});


/***/ }),

/***/ "../../victory-core/es/victory-portal/victory-portal.js":
/*!**************************************************************!*\
  !*** ../../victory-core/es/victory-portal/victory-portal.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VictoryPortal)
/* harmony export */ });
/* harmony import */ var lodash_defaults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/defaults */ "../../../node_modules/lodash/defaults.js");
/* harmony import */ var lodash_defaults__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_defaults__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _victory_util_log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../victory-util/log */ "../../victory-core/es/victory-util/log.js");
/* harmony import */ var _victory_util_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../victory-util/helpers */ "../../victory-core/es/victory-util/helpers.js");
/* harmony import */ var _portal_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./portal-context */ "../../victory-core/es/victory-portal/portal-context.js");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var VictoryPortal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(VictoryPortal, _React$Component);

  function VictoryPortal() {
    _classCallCheck(this, VictoryPortal);

    return _possibleConstructorReturn(this, (VictoryPortal.__proto__ || Object.getPrototypeOf(VictoryPortal)).apply(this, arguments));
  }

  _createClass(VictoryPortal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.checkedContext) {
        if (typeof this.context.portalUpdate !== "function") {
          var msg = "`renderInPortal` is not supported outside of `VictoryContainer`. " + "Component will be rendered in place";
          _victory_util_log__WEBPACK_IMPORTED_MODULE_3__.warn(msg);
          this.renderInPlace = true;
        }

        this.checkedContext = true;
      }

      this.forceUpdate();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (!this.renderInPlace) {
        this.portalKey = this.portalKey || this.context.portalRegister();
        this.context.portalUpdate(this.portalKey, this.element);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.context && this.context.portalDeregister) {
        this.context.portalDeregister(this.portalKey);
      }
    } // Overridden in victory-core-native

  }, {
    key: "renderPortal",
    value: function renderPortal(child) {
      if (this.renderInPlace) {
        return child;
      }

      this.element = child;
      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var children = Array.isArray(this.props.children) ? this.props.children[0] : this.props.children;
      var groupComponent = this.props.groupComponent;
      var childProps = children && children.props || {};
      var standardProps = childProps.groupComponent ? {
        groupComponent: groupComponent,
        standalone: false
      } : {};

      var newProps = lodash_defaults__WEBPACK_IMPORTED_MODULE_0___default()(standardProps, childProps, _victory_util_helpers__WEBPACK_IMPORTED_MODULE_4__.omit(this.props, ["children", "groupComponent"]));

      var child = children && react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(children, newProps);
      return this.renderPortal(child);
    }
  }]);

  return VictoryPortal;
}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));

Object.defineProperty(VictoryPortal, "displayName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: "VictoryPortal"
});
Object.defineProperty(VictoryPortal, "role", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: "portal"
});
Object.defineProperty(VictoryPortal, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),
    groupComponent: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().element)
  }
});
Object.defineProperty(VictoryPortal, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    groupComponent: react__WEBPACK_IMPORTED_MODULE_1___default().createElement("g", null)
  }
});
Object.defineProperty(VictoryPortal, "contextType", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: _portal_context__WEBPACK_IMPORTED_MODULE_5__["default"]
});


/***/ }),

/***/ "../../victory-core/es/victory-primitives/line-segment.js":
/*!****************************************************************!*\
  !*** ../../victory-core/es/victory-primitives/line-segment.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/assign */ "../../../node_modules/lodash/assign.js");
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _victory_util_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../victory-util/helpers */ "../../victory-core/es/victory-util/helpers.js");
/* harmony import */ var _victory_util_common_props__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../victory-util/common-props */ "../../victory-core/es/victory-util/common-props.js");
/* harmony import */ var _line__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./line */ "../../victory-core/es/victory-primitives/line.js");


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var evaluateProps = function (props) {
  /**
   * Potential evaluated props are:
   * `ariaLabel`
   * `desc`
   * `id`
   * `style`
   * `tabIndex`
   */
  var ariaLabel = _victory_util_helpers__WEBPACK_IMPORTED_MODULE_3__.evaluateProp(props.ariaLabel, props);
  var desc = _victory_util_helpers__WEBPACK_IMPORTED_MODULE_3__.evaluateProp(props.desc, props);
  var id = _victory_util_helpers__WEBPACK_IMPORTED_MODULE_3__.evaluateProp(props.id, props);
  var style = _victory_util_helpers__WEBPACK_IMPORTED_MODULE_3__.evaluateStyle(lodash_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    stroke: "black"
  }, props.style), props);
  var tabIndex = _victory_util_helpers__WEBPACK_IMPORTED_MODULE_3__.evaluateProp(props.tabIndex, props);
  return lodash_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    ariaLabel: ariaLabel,
    desc: desc,
    id: id,
    style: style,
    tabIndex: tabIndex
  });
};

var LineSegment = function (props) {
  props = evaluateProps(props);
  return react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(props.lineComponent, _objectSpread({}, props.events, {
    "aria-label": props.ariaLabel,
    style: props.style,
    desc: props.desc,
    tabIndex: props.tabIndex,
    className: props.className,
    role: props.role,
    shapeRendering: props.shapeRendering,
    x1: props.x1,
    x2: props.x2,
    y1: props.y1,
    y2: props.y2,
    transform: props.transform,
    clipPath: props.clipPath
  }));
};

LineSegment.propTypes = _objectSpread({}, _victory_util_common_props__WEBPACK_IMPORTED_MODULE_4__.primitiveProps, {
  datum: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().any),
  lineComponent: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().element),
  x1: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
  x2: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
  y1: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
  y2: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number)
});
LineSegment.defaultProps = {
  lineComponent: react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_line__WEBPACK_IMPORTED_MODULE_5__["default"], null),
  role: "presentation",
  shapeRendering: "auto"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LineSegment);

/***/ }),

/***/ "../../victory-core/es/victory-primitives/line.js":
/*!********************************************************!*\
  !*** ../../victory-core/es/victory-primitives/line.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }



var Line = function (props) {
  // eslint-disable-next-line react/prop-types
  var desc = props.desc,
      rest = _objectWithoutProperties(props, ["desc"]);

  return desc ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", _extends({
    vectorEffect: "non-scaling-stroke"
  }, rest), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("desc", null, desc)) : react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", _extends({
    vectorEffect: "non-scaling-stroke"
  }, rest));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Line);

/***/ }),

/***/ "../../victory-core/es/victory-primitives/rect.js":
/*!********************************************************!*\
  !*** ../../victory-core/es/victory-primitives/rect.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }



var Rect = function (props) {
  // eslint-disable-next-line react/prop-types
  var desc = props.desc,
      rest = _objectWithoutProperties(props, ["desc"]);

  return desc ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", _extends({
    vectorEffect: "non-scaling-stroke"
  }, rest), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("desc", null, desc)) : react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", _extends({
    vectorEffect: "non-scaling-stroke"
  }, rest));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Rect);

/***/ }),

/***/ "../../victory-core/es/victory-primitives/text.js":
/*!********************************************************!*\
  !*** ../../victory-core/es/victory-primitives/text.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }




var Text = function (props) {
  var children = props.children,
      title = props.title,
      desc = props.desc,
      rest = _objectWithoutProperties(props, ["children", "title", "desc"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("text", rest, title && react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, title), desc && react__WEBPACK_IMPORTED_MODULE_0___default().createElement("desc", null, desc), children);
};

Text.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),
  desc: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Text);

/***/ }),

/***/ "../../victory-core/es/victory-primitives/tspan.js":
/*!*********************************************************!*\
  !*** ../../victory-core/es/victory-primitives/tspan.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var TSpan = function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tspan", props);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TSpan);

/***/ }),

/***/ "../../victory-core/es/victory-util/collection.js":
/*!********************************************************!*\
  !*** ../../victory-core/es/victory-util/collection.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "containsStrings": () => (/* binding */ containsStrings),
/* harmony export */   "containsDates": () => (/* binding */ containsDates),
/* harmony export */   "containsNumbers": () => (/* binding */ containsNumbers),
/* harmony export */   "containsOnlyStrings": () => (/* binding */ containsOnlyStrings),
/* harmony export */   "isArrayOfArrays": () => (/* binding */ isArrayOfArrays),
/* harmony export */   "removeUndefined": () => (/* binding */ removeUndefined),
/* harmony export */   "getMaxValue": () => (/* binding */ getMaxValue),
/* harmony export */   "getMinValue": () => (/* binding */ getMinValue)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/* eslint-disable func-style */

/* eslint-disable no-use-before-define */
function isNonEmptyArray(collection) {
  return Array.isArray(collection) && collection.length > 0;
}

function containsStrings(collection) {
  return Array.isArray(collection) && collection.some(function (value) {
    return typeof value === "string";
  });
}
function containsDates(collection) {
  return Array.isArray(collection) && collection.some(function (value) {
    return value instanceof Date;
  });
}
function containsNumbers(collection) {
  return Array.isArray(collection) && collection.some(function (value) {
    return typeof value === "number";
  });
}
function containsOnlyStrings(collection) {
  return isNonEmptyArray(collection) && collection.every(function (value) {
    return typeof value === "string";
  });
}
function isArrayOfArrays(collection) {
  return isNonEmptyArray(collection) && collection.every(Array.isArray);
}
function removeUndefined(arr) {
  return arr.filter(function (el) {
    return el !== undefined;
  });
}
function getMaxValue(arr) {
  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  var array = arr.concat(values);
  return containsDates(array) ? new Date(Math.max.apply(Math, _toConsumableArray(array))) : Math.max.apply(Math, _toConsumableArray(array));
}
function getMinValue(arr) {
  for (var _len2 = arguments.length, values = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    values[_key2 - 1] = arguments[_key2];
  }

  var array = arr.concat(values);
  return containsDates(array) ? new Date(Math.min.apply(Math, _toConsumableArray(array))) : Math.min.apply(Math, _toConsumableArray(array));
}

/***/ }),

/***/ "../../victory-core/es/victory-util/common-props.js":
/*!**********************************************************!*\
  !*** ../../victory-core/es/victory-util/common-props.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataProps": () => (/* binding */ dataProps),
/* harmony export */   "baseProps": () => (/* binding */ baseProps),
/* harmony export */   "primitiveProps": () => (/* binding */ primitiveProps)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prop-types */ "../../victory-core/es/victory-util/prop-types.js");


var dataProps = {
  categories: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)), prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
    x: prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)),
    y: prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_0___default().string))
  })]),
  data: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().array), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().object)]),
  dataComponent: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().element),
  disableInlineStyles: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool),
  labelComponent: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().element),
  labels: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().array)]),
  samples: _prop_types__WEBPACK_IMPORTED_MODULE_1__.nonNegative,
  sortKey: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().func), _prop_types__WEBPACK_IMPORTED_MODULE_1__.allOfType([_prop_types__WEBPACK_IMPORTED_MODULE_1__.integer, _prop_types__WEBPACK_IMPORTED_MODULE_1__.nonNegative]), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string), prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_0___default().string))]),
  sortOrder: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOf(["ascending", "descending"]),
  style: prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
    parent: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().object),
    data: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().object),
    labels: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().object)
  }),
  x: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().func), _prop_types__WEBPACK_IMPORTED_MODULE_1__.allOfType([_prop_types__WEBPACK_IMPORTED_MODULE_1__.integer, _prop_types__WEBPACK_IMPORTED_MODULE_1__.nonNegative]), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string), prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_0___default().string))]),
  y: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().func), _prop_types__WEBPACK_IMPORTED_MODULE_1__.allOfType([_prop_types__WEBPACK_IMPORTED_MODULE_1__.integer, _prop_types__WEBPACK_IMPORTED_MODULE_1__.nonNegative]), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string), prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_0___default().string))]),
  y0: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().func), _prop_types__WEBPACK_IMPORTED_MODULE_1__.allOfType([_prop_types__WEBPACK_IMPORTED_MODULE_1__.integer, _prop_types__WEBPACK_IMPORTED_MODULE_1__.nonNegative]), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string), prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_0___default().string))])
};
var baseProps = {
  animate: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().object)]),
  containerComponent: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().element),
  domain: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([_prop_types__WEBPACK_IMPORTED_MODULE_1__.domain, prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
    x: _prop_types__WEBPACK_IMPORTED_MODULE_1__.domain,
    y: _prop_types__WEBPACK_IMPORTED_MODULE_1__.domain
  })]),
  maxDomain: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().number), prop_types__WEBPACK_IMPORTED_MODULE_0___default().instanceOf(Date), prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
    x: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().number), prop_types__WEBPACK_IMPORTED_MODULE_0___default().instanceOf(Date)]),
    y: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().number), prop_types__WEBPACK_IMPORTED_MODULE_0___default().instanceOf(Date)])
  })]),
  minDomain: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().number), prop_types__WEBPACK_IMPORTED_MODULE_0___default().instanceOf(Date), prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
    x: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().number), prop_types__WEBPACK_IMPORTED_MODULE_0___default().instanceOf(Date)]),
    y: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().number), prop_types__WEBPACK_IMPORTED_MODULE_0___default().instanceOf(Date)])
  })]),
  domainPadding: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
    x: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().number), prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_0___default().number))]),
    y: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().number), prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_0___default().number))])
  }), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number), prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_0___default().number))]),
  eventKey: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().func), _prop_types__WEBPACK_IMPORTED_MODULE_1__.allOfType([_prop_types__WEBPACK_IMPORTED_MODULE_1__.integer, _prop_types__WEBPACK_IMPORTED_MODULE_1__.nonNegative]), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)]),
  events: prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
    target: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOf(["data", "labels", "parent"]),
    eventKey: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().array), _prop_types__WEBPACK_IMPORTED_MODULE_1__.allOfType([_prop_types__WEBPACK_IMPORTED_MODULE_1__.integer, _prop_types__WEBPACK_IMPORTED_MODULE_1__.nonNegative]), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)]),
    eventHandlers: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().object)
  })),
  externalEventMutations: prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
    callback: (prop_types__WEBPACK_IMPORTED_MODULE_0___default()["function"]),
    childName: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().array)]),
    eventKey: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().array), _prop_types__WEBPACK_IMPORTED_MODULE_1__.allOfType([_prop_types__WEBPACK_IMPORTED_MODULE_1__.integer, _prop_types__WEBPACK_IMPORTED_MODULE_1__.nonNegative]), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)]),
    mutation: (prop_types__WEBPACK_IMPORTED_MODULE_0___default()["function"]),
    target: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().array)])
  })),
  groupComponent: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().element),
  height: _prop_types__WEBPACK_IMPORTED_MODULE_1__.nonNegative,
  name: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  origin: prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
    x: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
    y: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number)
  }),
  padding: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().number), prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
    top: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
    bottom: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
    left: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
    right: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number)
  })]),
  polar: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool),
  range: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([_prop_types__WEBPACK_IMPORTED_MODULE_1__.domain, prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
    x: _prop_types__WEBPACK_IMPORTED_MODULE_1__.domain,
    y: _prop_types__WEBPACK_IMPORTED_MODULE_1__.domain
  })]),
  scale: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([_prop_types__WEBPACK_IMPORTED_MODULE_1__.scale, prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
    x: _prop_types__WEBPACK_IMPORTED_MODULE_1__.scale,
    y: _prop_types__WEBPACK_IMPORTED_MODULE_1__.scale
  })]),
  sharedEvents: prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
    events: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().array),
    getEventState: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func)
  }),
  singleQuadrantDomainPadding: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool), prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
    x: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool)]),
    y: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool)])
  })]),
  standalone: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool),
  theme: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().object),
  width: _prop_types__WEBPACK_IMPORTED_MODULE_1__.nonNegative
};
var primitiveProps = {
  active: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool),
  ariaLabel: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func)]),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  clipPath: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  data: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().array), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().object)]),
  desc: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func)]),
  disableInlineStyles: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool),
  events: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().object),
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func)]),
  index: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)]),
  origin: prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
    x: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
    y: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number)
  }),
  polar: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool),
  role: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  scale: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([_prop_types__WEBPACK_IMPORTED_MODULE_1__.scale, prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
    x: _prop_types__WEBPACK_IMPORTED_MODULE_1__.scale,
    y: _prop_types__WEBPACK_IMPORTED_MODULE_1__.scale
  })]),
  shapeRendering: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  style: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().object),
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func)]),
  transform: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)
};

/***/ }),

/***/ "../../victory-core/es/victory-util/helpers.js":
/*!*****************************************************!*\
  !*** ../../victory-core/es/victory-util/helpers.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "omit": () => (/* binding */ omit),
/* harmony export */   "getPoint": () => (/* binding */ getPoint),
/* harmony export */   "scalePoint": () => (/* binding */ scalePoint),
/* harmony export */   "getPadding": () => (/* binding */ getPadding),
/* harmony export */   "isTooltip": () => (/* binding */ isTooltip),
/* harmony export */   "getDefaultStyles": () => (/* binding */ getDefaultStyles),
/* harmony export */   "getStyles": () => (/* binding */ getStyles),
/* harmony export */   "evaluateProp": () => (/* binding */ evaluateProp),
/* harmony export */   "evaluateStyle": () => (/* binding */ evaluateStyle),
/* harmony export */   "degreesToRadians": () => (/* binding */ degreesToRadians),
/* harmony export */   "radiansToDegrees": () => (/* binding */ radiansToDegrees),
/* harmony export */   "getRadius": () => (/* binding */ getRadius),
/* harmony export */   "getPolarOrigin": () => (/* binding */ getPolarOrigin),
/* harmony export */   "getRange": () => (/* binding */ getRange),
/* harmony export */   "createAccessor": () => (/* binding */ createAccessor),
/* harmony export */   "modifyProps": () => (/* binding */ modifyProps),
/* harmony export */   "getCurrentAxis": () => (/* binding */ getCurrentAxis),
/* harmony export */   "reduceChildren": () => (/* binding */ reduceChildren),
/* harmony export */   "isHorizontal": () => (/* binding */ isHorizontal)
/* harmony export */ });
/* harmony import */ var lodash_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/keys */ "../../../node_modules/lodash/keys.js");
/* harmony import */ var lodash_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/assign */ "../../../node_modules/lodash/assign.js");
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/pick */ "../../../node_modules/lodash/pick.js");
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_property__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/property */ "../../../node_modules/lodash/property.js");
/* harmony import */ var lodash_property__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_property__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/isFunction */ "../../../node_modules/lodash/isFunction.js");
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_defaults__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/defaults */ "../../../node_modules/lodash/defaults.js");
/* harmony import */ var lodash_defaults__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_defaults__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);







/* eslint-disable func-style */

/* eslint-disable no-use-before-define */


// Private Functions
function getCartesianRange(props, axis) {
  // determine how to lay the axis and what direction positive and negative are
  var vertical = axis !== "x";
  var padding = getPadding(props);

  if (vertical) {
    return [props.height - padding.bottom, padding.top];
  }

  return [padding.left, props.width - padding.right];
}

function getPolarRange(props, axis) {
  if (axis === "x") {
    var startAngle = degreesToRadians(props.startAngle || 0);
    var endAngle = degreesToRadians(props.endAngle || 360);
    return [startAngle, endAngle];
  }

  return [props.innerRadius || 0, getRadius(props)];
} // Exported Functions

/**
 * creates an object with some keys excluded
 * replacement for lodash.omit for performance. does not mimick the entire lodash.omit api
 * @param {Object} originalObject: created object will be based on this object
 * @param {Array<String>} ks: an array of keys to omit from the new object
 * @returns {Object} new object with same properties as originalObject
 */


function omit(originalObject) {
  var ks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  // code based on babel's _objectWithoutProperties
  var newObject = {};

  for (var key in originalObject) {
    if (ks.indexOf(key) >= 0) {
      continue;
    }

    if (!Object.prototype.hasOwnProperty.call(originalObject, key)) {
      continue;
    }

    newObject[key] = originalObject[key];
  }

  return newObject;
}
function getPoint(datum) {
  var exists = function (val) {
    return val !== undefined;
  };

  var _x = datum._x,
      _x1 = datum._x1,
      _x0 = datum._x0,
      _voronoiX = datum._voronoiX,
      _y = datum._y,
      _y1 = datum._y1,
      _y0 = datum._y0,
      _voronoiY = datum._voronoiY;
  var defaultX = exists(_x1) ? _x1 : _x;
  var defaultY = exists(_y1) ? _y1 : _y;
  var point = {
    x: exists(_voronoiX) ? _voronoiX : defaultX,
    x0: exists(_x0) ? _x0 : _x,
    y: exists(_voronoiY) ? _voronoiY : defaultY,
    y0: exists(_y0) ? _y0 : _y
  };
  return lodash_defaults__WEBPACK_IMPORTED_MODULE_5___default()({}, point, datum);
}
function scalePoint(props, datum) {
  var scale = props.scale,
      polar = props.polar,
      horizontal = props.horizontal;
  var d = getPoint(datum);
  var origin = props.origin || {
    x: 0,
    y: 0
  };
  var x = horizontal ? scale.y(d.y) : scale.x(d.x);
  var x0 = horizontal ? scale.y(d.y0) : scale.x(d.x0);
  var y = horizontal ? scale.x(d.x) : scale.y(d.y);
  var y0 = horizontal ? scale.x(d.x0) : scale.y(d.y0);
  return {
    x: polar ? y * Math.cos(x) + origin.x : x,
    x0: polar ? y0 * Math.cos(x0) + origin.x : x0,
    y: polar ? -y * Math.sin(x) + origin.y : y,
    y0: polar ? -y0 * Math.sin(x0) + origin.x : y0
  };
}
function getPadding(props) {
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "padding";
  var padding = props[name];
  var paddingVal = typeof padding === "number" ? padding : 0;
  var paddingObj = typeof padding === "object" ? padding : {};
  return {
    top: paddingObj.top || paddingVal,
    bottom: paddingObj.bottom || paddingVal,
    left: paddingObj.left || paddingVal,
    right: paddingObj.right || paddingVal
  };
}
function isTooltip(component) {
  var labelRole = component && component.type && component.type.role;
  return labelRole === "tooltip";
}
function getDefaultStyles(props, role) {
  var _props$theme = props.theme,
      theme = _props$theme === void 0 ? {} : _props$theme,
      labelComponent = props.labelComponent;
  var defaultStyles = theme[role] && theme[role].style || {};

  if (!isTooltip(labelComponent)) {
    return defaultStyles;
  }

  var tooltipStyle = theme.tooltip && theme.tooltip.style || {};

  var labelStyle = lodash_defaults__WEBPACK_IMPORTED_MODULE_5___default()({}, tooltipStyle, defaultStyles.labels);

  return lodash_defaults__WEBPACK_IMPORTED_MODULE_5___default()({}, {
    labels: labelStyle
  }, defaultStyles);
}
function getStyles(style, defaultStyles) {
  var width = "100%";
  var height = "100%";

  if (!style) {
    return lodash_defaults__WEBPACK_IMPORTED_MODULE_5___default()({
      parent: {
        height: height,
        width: width
      }
    }, defaultStyles);
  }

  var data = style.data,
      labels = style.labels,
      parent = style.parent;
  var defaultParent = defaultStyles && defaultStyles.parent || {};
  var defaultLabels = defaultStyles && defaultStyles.labels || {};
  var defaultData = defaultStyles && defaultStyles.data || {};
  return {
    parent: lodash_defaults__WEBPACK_IMPORTED_MODULE_5___default()({}, parent, defaultParent, {
      width: width,
      height: height
    }),
    labels: lodash_defaults__WEBPACK_IMPORTED_MODULE_5___default()({}, labels, defaultLabels),
    data: lodash_defaults__WEBPACK_IMPORTED_MODULE_5___default()({}, data, defaultData)
  };
}
function evaluateProp(prop, props) {
  return lodash_isFunction__WEBPACK_IMPORTED_MODULE_4___default()(prop) ? prop(props) : prop;
}
function evaluateStyle(style, props) {
  if (props.disableInlineStyles) {
    return {};
  }

  if (!style || !lodash_keys__WEBPACK_IMPORTED_MODULE_0___default()(style).some(function (value) {
    return lodash_isFunction__WEBPACK_IMPORTED_MODULE_4___default()(style[value]);
  })) {
    return style;
  }

  return lodash_keys__WEBPACK_IMPORTED_MODULE_0___default()(style).reduce(function (prev, curr) {
    prev[curr] = evaluateProp(style[curr], props);
    return prev;
  }, {});
}
function degreesToRadians(degrees) {
  return typeof degrees === "number" ? degrees * (Math.PI / 180) : degrees;
}
function radiansToDegrees(radians) {
  return typeof radians === "number" ? radians / (Math.PI / 180) : radians;
}
function getRadius(props) {
  var _getPadding = getPadding(props),
      left = _getPadding.left,
      right = _getPadding.right,
      top = _getPadding.top,
      bottom = _getPadding.bottom;

  var width = props.width,
      height = props.height;
  return Math.min(width - left - right, height - top - bottom) / 2;
}
function getPolarOrigin(props) {
  var width = props.width,
      height = props.height;

  var _getPadding2 = getPadding(props),
      top = _getPadding2.top,
      bottom = _getPadding2.bottom,
      left = _getPadding2.left,
      right = _getPadding2.right;

  var radius = Math.min(width - left - right, height - top - bottom) / 2;
  var offsetWidth = width / 2 + left - right;
  var offsetHeight = height / 2 + top - bottom;
  return {
    x: offsetWidth + radius > width ? radius + left - right : offsetWidth,
    y: offsetHeight + radius > height ? radius + top - bottom : offsetHeight
  };
}
function getRange(props, axis) {
  if (props.range && props.range[axis]) {
    return props.range[axis];
  } else if (props.range && Array.isArray(props.range)) {
    return props.range;
  }

  return props.polar ? getPolarRange(props, axis) : getCartesianRange(props, axis);
}
function createAccessor(key) {
  // creates a data accessor function
  // given a property key, path, array index, or null for identity.
  if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_4___default()(key)) {
    return key;
  } else if (key === null || key === undefined) {
    // null/undefined means "return the data item itself"
    return function (x) {
      return x;
    };
  } // otherwise, assume it is an array index, property key or path (_.property handles all three)


  return lodash_property__WEBPACK_IMPORTED_MODULE_3___default()(key);
}
function modifyProps(props, fallbackProps, role) {
  var theme = props.theme && props.theme[role] ? props.theme[role] : {};
  var themeProps = omit(theme, ["style"]);
  var horizontal = isHorizontal(props);
  var defaultObject = horizontal === undefined ? {} : {
    horizontal: horizontal
  };
  return lodash_defaults__WEBPACK_IMPORTED_MODULE_5___default()(defaultObject, props, themeProps, fallbackProps);
}
/**
 * Returns the given axis or the opposite axis when horizontal
 * @param {string} axis: the given axis, either "x" pr "y"
 * @param {Boolean} horizontal: true when the chart is flipped to the horizontal orientation
 * @returns {String} the dimension appropriate for the axis given its props "x" or "y"
 */

function getCurrentAxis(axis, horizontal) {
  var otherAxis = axis === "x" ? "y" : "x";
  return horizontal ? otherAxis : axis;
}
/**
 * @param {Array} children: an array of child components
 * @param {Function} iteratee: a function with arguments "child", "childName", and "parent"
 * @param {Object} parentProps: props from the parent that are applied to children
 * @param {any}  initialMemo: The object in which the iteration results are combined.
 * @param {Function} combine: Combines the result of the iteratee with the current memo
 *   to the memo for the next iteration step
 * @returns {Array} returns an array of results from calling the iteratee on all nested children
 */

/* eslint-disable max-params */

function reduceChildren(children, iteratee) {
  var parentProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var initialMemo = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var combine = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function (memo, item) {
    return memo.concat(item);
  };
  var sharedProps = ["data", "domain", "categories", "polar", "startAngle", "endAngle", "minDomain", "maxDomain", "horizontal"];

  var traverseChildren = function (childArray, names, parent) {
    return childArray.reduce(function (memo, child, index) {
      var childRole = child.type && child.type.role;
      var childName = child.props.name || "".concat(childRole, "-").concat(names[index]);

      if (child.props && child.props.children) {
        var childProps = lodash_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, child.props, lodash_pick__WEBPACK_IMPORTED_MODULE_2___default()(parentProps, sharedProps));

        var nestedChildren = child.type && child.type.role === "stack" && lodash_isFunction__WEBPACK_IMPORTED_MODULE_4___default()(child.type.getChildren) ? child.type.getChildren(childProps) : react__WEBPACK_IMPORTED_MODULE_6___default().Children.toArray(child.props.children).map(function (c) {
          var nestedChildProps = lodash_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, c.props, lodash_pick__WEBPACK_IMPORTED_MODULE_2___default()(childProps, sharedProps));

          return react__WEBPACK_IMPORTED_MODULE_6___default().cloneElement(c, nestedChildProps);
        });

        var _childNames = nestedChildren.map(function (c, i) {
          return "".concat(childName, "-").concat(i);
        });

        var nestedResults = traverseChildren(nestedChildren, _childNames, child);
        memo = combine(memo, nestedResults);
      } else {
        var result = iteratee(child, childName, parent);

        if (result) {
          memo = combine(memo, result);
        }
      }

      return memo;
    }, initialMemo);
  };

  var childNames = children.map(function (c, i) {
    return i;
  });
  return traverseChildren(children, childNames);
}
/**
 * @param {Object} props: the props object
 * @returns {Boolean} returns true if the props object contains `horizontal: true` of if any
 * children or nested children are hoizontal
 */

function isHorizontal(props) {
  if (props.horizontal !== undefined || !props.children) {
    return props.horizontal;
  }

  var traverseChildren = function (childArray) {
    return childArray.reduce(function (memo, child) {
      var childProps = child.props || {};

      if (memo || childProps.horizontal || !childProps.children) {
        memo = memo || childProps.horizontal;
        return memo;
      }

      return traverseChildren(react__WEBPACK_IMPORTED_MODULE_6___default().Children.toArray(childProps.children));
    }, false);
  };

  return traverseChildren(react__WEBPACK_IMPORTED_MODULE_6___default().Children.toArray(props.children));
}

/***/ }),

/***/ "../../victory-core/es/victory-util/label-helpers.js":
/*!***********************************************************!*\
  !*** ../../victory-core/es/victory-util/label-helpers.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getText": () => (/* binding */ getText),
/* harmony export */   "getPolarTextAnchor": () => (/* binding */ getPolarTextAnchor),
/* harmony export */   "getPolarVerticalAnchor": () => (/* binding */ getPolarVerticalAnchor),
/* harmony export */   "getPolarAngle": () => (/* binding */ getPolarAngle),
/* harmony export */   "getDegrees": () => (/* binding */ getDegrees),
/* harmony export */   "getProps": () => (/* binding */ getProps)
/* harmony export */ });
/* harmony import */ var lodash_defaults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/defaults */ "../../../node_modules/lodash/defaults.js");
/* harmony import */ var lodash_defaults__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_defaults__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "../../victory-core/es/victory-util/helpers.js");


/* eslint-disable func-style */

/* eslint-disable no-use-before-define */


// Private Functions
function getVerticalAnchor(props, datum) {
  datum = datum || {};
  var sign = datum._y >= 0 ? 1 : -1;
  var labelStyle = props.style && props.style.labels || {};

  if (datum.verticalAnchor || labelStyle.verticalAnchor) {
    return datum.verticalAnchor || labelStyle.verticalAnchor;
  } else if (!props.horizontal) {
    return sign >= 0 ? "end" : "start";
  } else {
    return "middle";
  }
}

function getTextAnchor(props, datum) {
  datum = datum || {};
  var style = props.style,
      horizontal = props.horizontal;
  var sign = datum._y >= 0 ? 1 : -1;
  var labelStyle = style && style.labels || {};

  if (datum.verticalAnchor || labelStyle.verticalAnchor) {
    return datum.verticalAnchor || labelStyle.verticalAnchor;
  } else if (!horizontal) {
    return "middle";
  } else {
    return sign >= 0 ? "start" : "end";
  }
}

function getAngle(props, datum) {
  datum = datum || {};
  var labelStyle = props.style && props.style.labels || {};
  return datum.angle === undefined ? labelStyle.angle : datum.angle;
}

function getPadding(props, datum) {
  datum = datum || {};
  var horizontal = props.horizontal,
      style = props.style;
  var labelStyle = style.labels || {};
  var defaultPadding = _helpers__WEBPACK_IMPORTED_MODULE_1__.evaluateProp(labelStyle.padding, props) || 0;
  var sign = datum._y < 0 ? -1 : 1;
  return {
    x: horizontal ? sign * defaultPadding : 0,
    y: horizontal ? 0 : -1 * sign * defaultPadding
  };
}

function getOffset(props, datum) {
  if (props.polar) {
    return {};
  }

  var padding = getPadding(props, datum);
  return {
    dx: padding.x,
    dy: padding.y
  };
}

function getPosition(props, datum) {
  var polar = props.polar;

  var _Helpers$scalePoint = _helpers__WEBPACK_IMPORTED_MODULE_1__.scalePoint(props, datum),
      x = _Helpers$scalePoint.x,
      y = _Helpers$scalePoint.y;

  if (!polar) {
    return {
      x: x,
      y: y
    };
  } else {
    var polarPadding = getPolarPadding(props, datum);
    return {
      x: x + polarPadding.x,
      y: y + polarPadding.y
    };
  }
}

function getPolarPadding(props, datum) {
  var style = props.style;
  var degrees = getDegrees(props, datum);
  var labelStyle = style.labels || {};
  var padding = _helpers__WEBPACK_IMPORTED_MODULE_1__.evaluateProp(labelStyle.padding, props) || 0;
  var angle = _helpers__WEBPACK_IMPORTED_MODULE_1__.degreesToRadians(degrees);
  return {
    x: padding * Math.cos(angle),
    y: -padding * Math.sin(angle)
  };
}

function getLabelPlacement(props) {
  var labelComponent = props.labelComponent,
      labelPlacement = props.labelPlacement,
      polar = props.polar;
  var defaultLabelPlacement = polar ? "perpendicular" : "vertical";
  return labelPlacement ? labelPlacement : labelComponent.props && labelComponent.props.labelPlacement || defaultLabelPlacement;
}

function getPolarOrientation(degrees) {
  // eslint-disable-next-line no-magic-numbers
  if (degrees < 45 || degrees > 315) {
    return "right"; // eslint-disable-next-line no-magic-numbers
  } else if (degrees >= 45 && degrees <= 135) {
    return "top"; // eslint-disable-next-line no-magic-numbers
  } else if (degrees > 135 && degrees < 225) {
    return "left";
  } else {
    return "bottom";
  }
} // Exported Functions


function getText(props, datum, index) {
  datum = datum || {};

  if (datum.label !== undefined) {
    return datum.label;
  }

  return Array.isArray(props.labels) ? props.labels[index] : props.labels;
}
function getPolarTextAnchor(props, degrees) {
  var labelPlacement = getLabelPlacement(props);

  if (labelPlacement === "perpendicular" || labelPlacement === "vertical" && (degrees === 90 || degrees === 270)) {
    return "middle";
  }

  return degrees <= 90 || degrees > 270 ? "start" : "end";
}
function getPolarVerticalAnchor(props, degrees) {
  var labelPlacement = getLabelPlacement(props);
  var orientation = getPolarOrientation(degrees);

  if (labelPlacement === "parallel" || orientation === "left" || orientation === "right") {
    return "middle";
  }

  return orientation === "top" ? "end" : "start";
}
function getPolarAngle(props, baseAngle) {
  var labelPlacement = props.labelPlacement,
      datum = props.datum;

  if (!labelPlacement || labelPlacement === "vertical") {
    return 0;
  }

  var degrees = baseAngle !== undefined ? baseAngle % 360 : getDegrees(props, datum);
  var sign = degrees > 90 && degrees < 180 || degrees > 270 ? 1 : -1;
  var angle = 0;

  if (degrees === 0 || degrees === 180) {
    angle = 90;
  } else if (degrees > 0 && degrees < 180) {
    angle = 90 - degrees;
  } else if (degrees > 180 && degrees < 360) {
    angle = 270 - degrees;
  }

  var labelRotation = labelPlacement === "perpendicular" ? 0 : 90;
  return angle + sign * labelRotation;
}
function getDegrees(props, datum) {
  var _Helpers$getPoint = _helpers__WEBPACK_IMPORTED_MODULE_1__.getPoint(datum),
      x = _Helpers$getPoint.x;

  return _helpers__WEBPACK_IMPORTED_MODULE_1__.radiansToDegrees(props.scale.x(x)) % 360;
}
function getProps(props, index) {
  var scale = props.scale,
      data = props.data,
      style = props.style,
      horizontal = props.horizontal,
      polar = props.polar,
      width = props.width,
      height = props.height,
      theme = props.theme,
      labelComponent = props.labelComponent,
      disableInlineStyles = props.disableInlineStyles;
  var datum = data[index];
  var degrees = getDegrees(props, datum);
  var textAnchor = polar ? getPolarTextAnchor(props, degrees) : getTextAnchor(props, datum);
  var verticalAnchor = polar ? getPolarVerticalAnchor(props, degrees) : getVerticalAnchor(props, datum);
  var angle = getAngle(props, datum);
  var text = getText(props, datum, index);
  var labelPlacement = getLabelPlacement(props);

  var _getPosition = getPosition(props, datum),
      x = _getPosition.x,
      y = _getPosition.y;

  var _getOffset = getOffset(props, datum),
      dx = _getOffset.dx,
      dy = _getOffset.dy;

  var labelProps = {
    angle: angle,
    data: data,
    datum: datum,
    disableInlineStyles: disableInlineStyles,
    horizontal: horizontal,
    index: index,
    polar: polar,
    scale: scale,
    labelPlacement: labelPlacement,
    text: text,
    textAnchor: textAnchor,
    verticalAnchor: verticalAnchor,
    x: x,
    y: y,
    dx: dx,
    dy: dy,
    width: width,
    height: height,
    style: style.labels
  };

  if (!_helpers__WEBPACK_IMPORTED_MODULE_1__.isTooltip(labelComponent)) {
    return labelProps;
  }

  var tooltipTheme = theme && theme.tooltip || {};
  return lodash_defaults__WEBPACK_IMPORTED_MODULE_0___default()({}, labelProps, _helpers__WEBPACK_IMPORTED_MODULE_1__.omit(tooltipTheme, ["style"]));
}

/***/ }),

/***/ "../../victory-core/es/victory-util/log.js":
/*!*************************************************!*\
  !*** ../../victory-core/es/victory-util/log.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "warn": () => (/* binding */ warn)
/* harmony export */ });
/* global console */

/* eslint-disable no-console */
// TODO: Use "warning" npm module like React is switching to.
// eslint-disable-next-line func-style
function warn(message) {
  if (true) {
    if (console && console.warn) {
      console.warn(message);
    }
  }
}

/***/ }),

/***/ "../../victory-core/es/victory-util/prop-types.js":
/*!********************************************************!*\
  !*** ../../victory-core/es/victory-util/prop-types.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deprecated": () => (/* binding */ deprecated),
/* harmony export */   "allOfType": () => (/* binding */ allOfType),
/* harmony export */   "nonNegative": () => (/* binding */ nonNegative),
/* harmony export */   "integer": () => (/* binding */ integer),
/* harmony export */   "greaterThanZero": () => (/* binding */ greaterThanZero),
/* harmony export */   "domain": () => (/* binding */ domain),
/* harmony export */   "scale": () => (/* binding */ scale),
/* harmony export */   "homogeneousArray": () => (/* binding */ homogeneousArray),
/* harmony export */   "matchDataLength": () => (/* binding */ matchDataLength),
/* harmony export */   "regExp": () => (/* binding */ regExp)
/* harmony export */ });
/* harmony import */ var lodash_isRegExp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isRegExp */ "../../../node_modules/lodash/isRegExp.js");
/* harmony import */ var lodash_isRegExp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isRegExp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/find */ "../../../node_modules/lodash/find.js");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isFunction */ "../../../node_modules/lodash/isFunction.js");
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./log */ "../../victory-core/es/victory-util/log.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);




function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/**
 * Return a new validator based on `validator` but with the option to chain
 * `isRequired` onto the validation. This is nearly identical to how React
 * does it internally, but they don't expose their helper for us to use.
 * @param {Function} validator Validation function.
 * @returns {Function} Validator with `isRequired` option.
 */

var makeChainable = function (validator) {
  /* eslint-disable max-params */
  var _chainable = function (isRequired, props, propName, componentName) {
    var value = props[propName];

    if (value === undefined || value === null) {
      if (isRequired) {
        return new Error("Required `".concat(propName, "` was not specified in `").concat(componentName, "`."));
      }

      return null;
    }

    for (var _len = arguments.length, rest = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
      rest[_key - 4] = arguments[_key];
    }

    return validator.apply(void 0, [props, propName, componentName].concat(rest));
  };

  var chainable = _chainable.bind(null, false);

  chainable.isRequired = _chainable.bind(null, true);
  return chainable;
};

var nullConstructor = function () {
  return null;
};

var undefinedConstructor = function () {
  return undefined;
};
/**
 * Get the constructor of `value`. If `value` is null or undefined, return the
 * special singletons `nullConstructor` or `undefinedConstructor`, respectively.
 * @param {*} value Instance to return the constructor of.
 * @returns {Function} Constructor of `value`.
 */


var getConstructor = function (value) {
  if (value === undefined) {
    return undefinedConstructor;
  } else if (value === null) {
    return nullConstructor;
  } else {
    return value.constructor;
  }
};
/**
 * Get the name of the constructor used to create `value`, using
 * `Object.protoype.toString`. If the value is null or undefined, return
 * "null" or "undefined", respectively.
 * @param {*} value Instance to return the constructor name of.
 * @returns {String} Name of the constructor.
 */


var getConstructorName = function (value) {
  if (value === undefined) {
    return "undefined";
  } else if (value === null) {
    return "null";
  }

  return Object.prototype.toString.call(value).slice(8, -1); // eslint-disable-line no-magic-numbers
};
/**
 * Return a new validator based on `propType` but which logs a `console.error`
 * with `explanation` if used.
 * @param {Function} propType The old, deprecated propType.
 * @param {String} explanation The message to provide the user of the deprecated propType.
 * @returns {Function} Validator which logs usage of this propType
 */


function deprecated(propType, explanation) {
  return function (props, propName, componentName) {
    var value = props[propName];

    if (value !== null && value !== undefined) {
      _log__WEBPACK_IMPORTED_MODULE_4__.warn("\"".concat(propName, "\" property of \"").concat(componentName, "\" has been deprecated ").concat(explanation));
    }

    return prop_types__WEBPACK_IMPORTED_MODULE_3___default().checkPropTypes(_defineProperty({}, propName, propType), props, propName, componentName);
  };
}
/**
 * Return a new validator which returns true
 * if and only if all validators passed as arguments return true.
 * Like React.propTypes.oneOfType, except "all" instead of "any"
 * @param {Array} validators Validation functions.
 * @returns {Function} Combined validator function
 */

function allOfType(validators) {
  return makeChainable(function (props, propName, componentName) {
    for (var _len2 = arguments.length, rest = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
      rest[_key2 - 3] = arguments[_key2];
    }

    return validators.reduce(function (result, validator) {
      return result || validator.apply(void 0, [props, propName, componentName].concat(rest));
    }, undefined);
  });
}
/**
 * Check that the value is a non-negative number.
 */

var nonNegative = makeChainable(function (props, propName, componentName) {
  var value = props[propName];

  if (typeof value !== "number" || value < 0) {
    return new Error("`".concat(propName, "` in `").concat(componentName, "` must be a non-negative number."));
  }

  return undefined;
});
/**
 * Check that the value is an integer.
 */

var integer = makeChainable(function (props, propName, componentName) {
  var value = props[propName];

  if (typeof value !== "number" || value % 1 !== 0) {
    return new Error("`".concat(propName, "` in `").concat(componentName, "` must be an integer."));
  }

  return undefined;
});
/**
 * Check that the value is greater than zero.
 */

var greaterThanZero = makeChainable(function (props, propName, componentName) {
  var value = props[propName];

  if (typeof value !== "number" || value <= 0) {
    return new Error("`".concat(propName, "` in `").concat(componentName, "` must be a number greater than zero."));
  }

  return undefined;
});
/**
 * Check that the value is an Array of two unique values.
 */

var domain = makeChainable(function (props, propName, componentName) {
  var value = props[propName];

  if (!Array.isArray(value) || value.length !== 2 || value[1] === value[0]) {
    return new Error("`".concat(propName, "` in `").concat(componentName, "` must be an array of two unique numeric values."));
  }

  return undefined;
});
/**
 * Check that the value looks like a d3 `scale` function.
 */

var scale = makeChainable(function (props, propName, componentName) {
  var supportedScaleStrings = ["linear", "time", "log", "sqrt"];

  var validScale = function (scl) {
    if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_2___default()(scl)) {
      return lodash_isFunction__WEBPACK_IMPORTED_MODULE_2___default()(scl.copy) && lodash_isFunction__WEBPACK_IMPORTED_MODULE_2___default()(scl.domain) && lodash_isFunction__WEBPACK_IMPORTED_MODULE_2___default()(scl.range);
    } else if (typeof scl === "string") {
      return supportedScaleStrings.indexOf(scl) !== -1;
    }

    return false;
  };

  var value = props[propName];

  if (!validScale(value)) {
    return new Error("`".concat(propName, "` in `").concat(componentName, "` must be a d3 scale."));
  }

  return undefined;
});
/**
 * Check that an array contains items of the same type.
 */

var homogeneousArray = makeChainable(function (props, propName, componentName) {
  var values = props[propName];

  if (!Array.isArray(values)) {
    return new Error("`".concat(propName, "` in `").concat(componentName, "` must be an array."));
  }

  if (values.length < 2) {
    return undefined;
  }

  var comparisonConstructor = getConstructor(values[0]);

  var typeMismatchedValue = lodash_find__WEBPACK_IMPORTED_MODULE_1___default()(values, function (value) {
    return comparisonConstructor !== getConstructor(value);
  });

  if (typeMismatchedValue) {
    var constructorName = getConstructorName(values[0]);
    var otherConstructorName = getConstructorName(typeMismatchedValue);
    return new Error("Expected `".concat(propName, "` in `").concat(componentName, "` to be a ") + "homogeneous array, but found types `".concat(constructorName, "` and ") + "`".concat(otherConstructorName, "`."));
  }

  return undefined;
});
/**
 * Check that array prop length matches props.data.length
 */

var matchDataLength = makeChainable(function (props, propName) {
  if (props[propName] && Array.isArray(props[propName]) && props[propName].length !== props.data.length) {
    return new Error("Length of data and ".concat(propName, " arrays must match."));
  }

  return undefined;
});
/**
 * Check that the value is a regular expression
 */

var regExp = makeChainable(function (props, propName, componentName) {
  if (props[propName] && !lodash_isRegExp__WEBPACK_IMPORTED_MODULE_0___default()(props[propName])) {
    return new Error("`".concat(propName, "` in `").concat(componentName, "` must be a regular expression."));
  }

  return undefined;
});

/***/ }),

/***/ "../../victory-core/es/victory-util/selection.js":
/*!*******************************************************!*\
  !*** ../../victory-core/es/victory-util/selection.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getParentSVG": () => (/* binding */ getParentSVG),
/* harmony export */   "getSVGEventCoordinates": () => (/* binding */ getSVGEventCoordinates),
/* harmony export */   "getDomainCoordinates": () => (/* binding */ getDomainCoordinates),
/* harmony export */   "getDataCoordinates": () => (/* binding */ getDataCoordinates),
/* harmony export */   "getBounds": () => (/* binding */ getBounds)
/* harmony export */ });
/* harmony import */ var _collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collection */ "../../victory-core/es/victory-util/collection.js");
/* eslint-disable func-style */

/* eslint-disable no-use-before-define */
 // Private Functions

function transformTarget(target, matrix, dimension) {
  var a = matrix.a,
      d = matrix.d,
      e = matrix.e,
      f = matrix.f;
  return dimension === "y" ? d * target + f : a * target + e;
}

function getTransformationMatrix(svg) {
  return svg.getScreenCTM().inverse();
} // Exported Functions


function getParentSVG(evt) {
  if (evt.nativeEvent && evt.nativeEvent.identifier !== undefined) {
    return undefined;
  }

  var getParent = function (target) {
    if (target.nodeName === "svg") {
      return target;
    } else {
      return target.parentNode ? getParent(target.parentNode) : target;
    }
  };

  return getParent(evt.target);
}
function getSVGEventCoordinates(evt, svg) {
  if (evt.nativeEvent && evt.nativeEvent.identifier !== undefined) {
    // react-native override. relies on the RN.View being the _exact_ same size as its child SVG.
    // this should be fine: the svg is the only child of View and the View shirks to its children
    return {
      x: evt.nativeEvent.locationX,
      y: evt.nativeEvent.locationY
    };
  }

  evt = evt.changedTouches && evt.changedTouches.length ? evt.changedTouches[0] : evt;
  svg = svg || getParentSVG(evt);
  var matrix = getTransformationMatrix(svg);
  return {
    x: transformTarget(evt.clientX, matrix, "x"),
    y: transformTarget(evt.clientY, matrix, "y")
  };
}
function getDomainCoordinates(props, domain) {
  var scale = props.scale,
      horizontal = props.horizontal;
  domain = domain || {
    x: scale.x.domain(),
    y: scale.y.domain()
  };
  return {
    x: horizontal ? [scale.y(domain.y[0]), scale.y(domain.y[1])] : [scale.x(domain.x[0]), scale.x(domain.x[1])],
    y: horizontal ? [scale.x(domain.x[0]), scale.x(domain.x[1])] : [scale.y(domain.y[0]), scale.y(domain.y[1])]
  };
} // eslint-disable-next-line max-params

function getDataCoordinates(props, scale, x, y) {
  var polar = props.polar,
      horizontal = props.horizontal;

  if (!polar) {
    return {
      x: horizontal ? scale.x.invert(y) : scale.x.invert(x),
      y: horizontal ? scale.y.invert(x) : scale.y.invert(y)
    };
  } else {
    var origin = props.origin || {
      x: 0,
      y: 0
    };
    var baseX = x - origin.x;
    var baseY = y - origin.y;
    var radius = Math.abs(baseX * Math.sqrt(1 + Math.pow(-baseY / baseX, 2)));
    var angle = (-Math.atan2(baseY, baseX) + Math.PI * 2) % (Math.PI * 2);
    return {
      x: scale.x.invert(angle),
      y: scale.y.invert(radius)
    };
  }
}
function getBounds(props) {
  var x1 = props.x1,
      x2 = props.x2,
      y1 = props.y1,
      y2 = props.y2,
      scale = props.scale;
  var point1 = getDataCoordinates(props, scale, x1, y1);
  var point2 = getDataCoordinates(props, scale, x2, y2);

  var makeBound = function (a, b) {
    return [_collection__WEBPACK_IMPORTED_MODULE_0__.getMinValue([a, b]), _collection__WEBPACK_IMPORTED_MODULE_0__.getMaxValue([a, b])];
  };

  return {
    x: makeBound(point1.x, point2.x),
    y: makeBound(point1.y, point2.y)
  };
}

/***/ }),

/***/ "../../victory-core/es/victory-util/style.js":
/*!***************************************************!*\
  !*** ../../victory-core/es/victory-util/style.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toTransformString": () => (/* binding */ toTransformString),
/* harmony export */   "getColorScale": () => (/* binding */ getColorScale)
/* harmony export */ });
/* eslint-disable func-style */

/**
 * Given an object with CSS/SVG transform definitions, return the string value
 * for use with the `transform` CSS property or SVG attribute. Note that we
 * can't always guarantee the order will match the author's intended order, so
 * authors should only use the object notation if they know that their transform
 * is commutative or that there is only one.
 * @param {Object} obj An object of transform definitions.
 * @returns {String} The generated transform string.
 */
var toTransformString = function (obj) {
  for (var _len = arguments.length, more = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    more[_key - 1] = arguments[_key];
  }

  if (more.length > 0) {
    return more.reduce(function (memo, currentObj) {
      return [memo, toTransformString(currentObj)].join(" ");
    }, toTransformString(obj)).trim();
  } else {
    if (obj === undefined || obj === null || typeof obj === "string") {
      return obj;
    }

    var transforms = [];

    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        var value = obj[key];
        transforms.push("".concat(key, "(").concat(value, ")"));
      }
    }

    return transforms.join(" ").trim();
  }
};
/**
 * Given the name of a color scale, getColorScale will return an array
 * of 5 hex string values in that color scale. If no 'name' parameter
 * is given, it will return the Victory default grayscale.
 * @param {String} name The name of the color scale to return (optional).
 * @returns {Array} An array of 5 hex string values composing a color scale.
 */

function getColorScale(name) {
  var scales = {
    grayscale: ["#cccccc", "#969696", "#636363", "#252525"],
    qualitative: ["#334D5C", "#45B29D", "#EFC94C", "#E27A3F", "#DF5A49", "#4F7DA1", "#55DBC1", "#EFDA97", "#E2A37F", "#DF948A"],
    heatmap: ["#428517", "#77D200", "#D6D305", "#EC8E19", "#C92B05"],
    warm: ["#940031", "#C43343", "#DC5429", "#FF821D", "#FFAF55"],
    cool: ["#2746B9", "#0B69D4", "#2794DB", "#31BB76", "#60E83B"],
    red: ["#FCAE91", "#FB6A4A", "#DE2D26", "#A50F15", "#750B0E"],
    blue: ["#002C61", "#004B8F", "#006BC9", "#3795E5", "#65B4F4"],
    green: ["#354722", "#466631", "#649146", "#8AB25C", "#A9C97E"]
  };
  return name ? scales[name] : scales.grayscale;
}

/***/ }),

/***/ "../../victory-core/es/victory-util/textsize.js":
/*!******************************************************!*\
  !*** ../../victory-core/es/victory-util/textsize.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertLengthToPixels": () => (/* binding */ convertLengthToPixels),
/* harmony export */   "_approximateTextSizeInternal": () => (/* binding */ _approximateTextSizeInternal),
/* harmony export */   "approximateTextSize": () => (/* binding */ approximateTextSize)
/* harmony export */ });
/* harmony import */ var lodash_defaults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/defaults */ "../../../node_modules/lodash/defaults.js");
/* harmony import */ var lodash_defaults__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_defaults__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/assign */ "../../../node_modules/lodash/assign.js");
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_assign__WEBPACK_IMPORTED_MODULE_1__);



function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// Based on measuring specific character widths
// as in the following example https://bl.ocks.org/tophtucker/62f93a4658387bb61e4510c37e2e97cf
//prettier-ignore
var fonts = {
  "American Typewriter": {
    widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.25, 0.4203125, 0.3296875, 0.6, 0.6375, 0.8015625, 0.8203125, 0.1875, 0.45625, 0.45625, 0.6375, 0.5, 0.2734375, 0.309375, 0.2734375, 0.4390625, 0.6375, 0.6375, 0.6375, 0.6375, 0.6375, 0.6375, 0.6375, 0.6375, 0.6375, 0.6375, 0.2734375, 0.2734375, 0.5, 0.5, 0.5, 0.6, 0.6921875, 0.7640625, 0.6921875, 0.6375, 0.728125, 0.6734375, 0.6203125, 0.7109375, 0.784375, 0.3828125, 0.6421875, 0.7859375, 0.6375, 0.9484375, 0.7640625, 0.65625, 0.6375, 0.65625, 0.7296875, 0.6203125, 0.6375, 0.7109375, 0.740625, 0.940625, 0.784375, 0.7578125, 0.6203125, 0.4375, 0.5, 0.4375, 0.5, 0.5, 0.4921875, 0.5734375, 0.5890625, 0.5109375, 0.6, 0.528125, 0.43125, 0.5578125, 0.6375, 0.3109375, 0.40625, 0.6234375, 0.309375, 0.928125, 0.6375, 0.546875, 0.6, 0.58125, 0.4921875, 0.4921875, 0.4, 0.6203125, 0.625, 0.825, 0.6375, 0.640625, 0.528125, 0.5, 0.5, 0.5, 0.6671875],
    avg: 0.5793421052631578
  },
  Arial: {
    widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.278125, 0.278125, 0.35625, 0.55625, 0.55625, 0.890625, 0.6671875, 0.1921875, 0.334375, 0.334375, 0.390625, 0.584375, 0.278125, 0.334375, 0.278125, 0.278125, 0.55625, 0.55625, 0.55625, 0.55625, 0.55625, 0.55625, 0.55625, 0.55625, 0.55625, 0.55625, 0.278125, 0.278125, 0.584375, 0.584375, 0.584375, 0.55625, 1.015625, 0.6703125, 0.6671875, 0.7234375, 0.7234375, 0.6671875, 0.6109375, 0.778125, 0.7234375, 0.278125, 0.5, 0.6671875, 0.55625, 0.834375, 0.7234375, 0.778125, 0.6671875, 0.778125, 0.7234375, 0.6671875, 0.6109375, 0.7234375, 0.6671875, 0.9453125, 0.6671875, 0.6671875, 0.6109375, 0.278125, 0.278125, 0.278125, 0.4703125, 0.584375, 0.334375, 0.55625, 0.55625, 0.5, 0.55625, 0.55625, 0.3125, 0.55625, 0.55625, 0.2234375, 0.2703125, 0.5, 0.2234375, 0.834375, 0.55625, 0.55625, 0.55625, 0.55625, 0.346875, 0.5, 0.278125, 0.55625, 0.5, 0.7234375, 0.5, 0.5, 0.5, 0.334375, 0.2609375, 0.334375, 0.584375],
    avg: 0.528733552631579
  },
  "Arial Black": {
    widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.33125, 0.334375, 0.5, 0.6609375, 0.6671875, 1, 0.890625, 0.278125, 0.390625, 0.390625, 0.55625, 0.6609375, 0.334375, 0.334375, 0.334375, 0.28125, 0.6671875, 0.6671875, 0.6671875, 0.6671875, 0.6671875, 0.6671875, 0.6671875, 0.6671875, 0.6671875, 0.6671875, 0.334375, 0.334375, 0.6609375, 0.6609375, 0.6609375, 0.6109375, 0.7453125, 0.78125, 0.778125, 0.778125, 0.778125, 0.7234375, 0.6671875, 0.834375, 0.834375, 0.390625, 0.6671875, 0.834375, 0.6671875, 0.9453125, 0.834375, 0.834375, 0.7234375, 0.834375, 0.78125, 0.7234375, 0.7234375, 0.834375, 0.7796875, 1.003125, 0.78125, 0.78125, 0.7234375, 0.390625, 0.28125, 0.390625, 0.6609375, 0.5125, 0.334375, 0.6671875, 0.6671875, 0.6671875, 0.6671875, 0.6671875, 0.41875, 0.6671875, 0.6671875, 0.334375, 0.384375, 0.6671875, 0.334375, 1, 0.6671875, 0.6671875, 0.6671875, 0.6671875, 0.4703125, 0.6109375, 0.4453125, 0.6671875, 0.6140625, 0.946875, 0.6671875, 0.615625, 0.55625, 0.390625, 0.278125, 0.390625, 0.6609375],
    avg: 0.6213157894736842
  },
  Baskerville: {
    widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.25, 0.25, 0.40625, 0.6671875, 0.490625, 0.875, 0.7015625, 0.178125, 0.2453125, 0.246875, 0.4171875, 0.6671875, 0.25, 0.3125, 0.25, 0.521875, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.25, 0.25, 0.6671875, 0.6671875, 0.6671875, 0.396875, 0.9171875, 0.684375, 0.615625, 0.71875, 0.7609375, 0.625, 0.553125, 0.771875, 0.803125, 0.3546875, 0.515625, 0.78125, 0.6046875, 0.928125, 0.75, 0.8234375, 0.5625, 0.96875, 0.7296875, 0.5421875, 0.6984375, 0.771875, 0.7296875, 0.9484375, 0.771875, 0.678125, 0.6359375, 0.3640625, 0.521875, 0.3640625, 0.46875, 0.5125, 0.334375, 0.46875, 0.521875, 0.428125, 0.521875, 0.4375, 0.3890625, 0.4765625, 0.53125, 0.25, 0.359375, 0.4640625, 0.240625, 0.803125, 0.53125, 0.5, 0.521875, 0.521875, 0.365625, 0.334375, 0.2921875, 0.521875, 0.4640625, 0.678125, 0.4796875, 0.465625, 0.428125, 0.4796875, 0.5109375, 0.4796875, 0.6671875],
    avg: 0.5323519736842108
  },
  Courier: {
    widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.5984375, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6078125, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.61875, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.615625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6140625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625],
    avg: 0.6020559210526316
  },
  "Courier New": {
    widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.5984375, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625],
    avg: 0.6015296052631579
  },
  cursive: {
    widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1921875, 0.24375, 0.40625, 0.5671875, 0.3984375, 0.721875, 0.909375, 0.2328125, 0.434375, 0.365625, 0.4734375, 0.5578125, 0.19375, 0.3484375, 0.19375, 0.7734375, 0.503125, 0.4171875, 0.5453125, 0.45, 0.6046875, 0.4703125, 0.5984375, 0.55625, 0.503125, 0.5546875, 0.20625, 0.2, 0.5625, 0.5546875, 0.546875, 0.403125, 0.70625, 0.734375, 0.7078125, 0.64375, 0.85, 0.753125, 0.75, 0.6484375, 1.0765625, 0.44375, 0.5359375, 0.8359375, 0.653125, 1.0109375, 1.1515625, 0.6796875, 0.6984375, 1.0625, 0.8234375, 0.5125, 0.9234375, 0.8546875, 0.70625, 0.9109375, 0.7421875, 0.715625, 0.6015625, 0.4640625, 0.3359375, 0.4109375, 0.5421875, 0.5421875, 0.4328125, 0.5125, 0.5, 0.3859375, 0.7375, 0.359375, 0.75625, 0.540625, 0.5328125, 0.3203125, 0.5296875, 0.5015625, 0.484375, 0.7890625, 0.5640625, 0.4203125, 0.703125, 0.471875, 0.4734375, 0.35, 0.4125, 0.5640625, 0.471875, 0.6484375, 0.5296875, 0.575, 0.4140625, 0.415625, 0.20625, 0.3796875, 0.5421875],
    avg: 0.5604440789473684
  },
  fantasy: {
    widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.215625, 0.2625, 0.3265625, 0.6109375, 0.534375, 0.7625, 0.7828125, 0.2, 0.4359375, 0.4359375, 0.3765625, 0.5109375, 0.2796875, 0.4609375, 0.2796875, 0.5296875, 0.6640625, 0.253125, 0.521875, 0.4765625, 0.6640625, 0.490625, 0.528125, 0.5546875, 0.496875, 0.5421875, 0.2796875, 0.2796875, 0.5625, 0.4609375, 0.5625, 0.4828125, 0.609375, 0.740625, 0.7234375, 0.740625, 0.8265625, 0.7234375, 0.6171875, 0.7359375, 0.765625, 0.240625, 0.5453125, 0.715625, 0.6078125, 0.8640625, 0.653125, 0.9125, 0.6484375, 0.946875, 0.6921875, 0.653125, 0.6953125, 0.8015625, 0.58125, 0.784375, 0.671875, 0.6265625, 0.690625, 0.4359375, 0.5296875, 0.4359375, 0.53125, 0.5, 0.2875, 0.5375, 0.603125, 0.4984375, 0.60625, 0.53125, 0.434375, 0.6421875, 0.56875, 0.209375, 0.4671875, 0.5484375, 0.2203125, 0.709375, 0.55, 0.5984375, 0.6140625, 0.5765625, 0.40625, 0.4734375, 0.3734375, 0.559375, 0.4421875, 0.6421875, 0.4890625, 0.578125, 0.4484375, 0.2546875, 0.2203125, 0.2546875, 0.55],
    avg: 0.536496710526316
  },
  Geneva: {
    widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.3328125, 0.3046875, 0.5, 0.6671875, 0.6671875, 0.90625, 0.728125, 0.3046875, 0.446875, 0.446875, 0.5078125, 0.6671875, 0.3046875, 0.3796875, 0.3046875, 0.5390625, 0.6671875, 0.6671875, 0.6671875, 0.6671875, 0.6671875, 0.6671875, 0.6671875, 0.6671875, 0.6671875, 0.6671875, 0.3046875, 0.3046875, 0.6671875, 0.6671875, 0.6671875, 0.56875, 0.871875, 0.728125, 0.6375, 0.6515625, 0.7015625, 0.5765625, 0.5546875, 0.675, 0.690625, 0.2421875, 0.4921875, 0.6640625, 0.584375, 0.7890625, 0.709375, 0.7359375, 0.584375, 0.78125, 0.60625, 0.60625, 0.640625, 0.6671875, 0.728125, 0.946875, 0.6109375, 0.6109375, 0.5765625, 0.446875, 0.5390625, 0.446875, 0.6671875, 0.6671875, 0.5921875, 0.5546875, 0.6109375, 0.546875, 0.603125, 0.5765625, 0.390625, 0.6109375, 0.584375, 0.2359375, 0.334375, 0.5390625, 0.2359375, 0.8953125, 0.584375, 0.60625, 0.603125, 0.603125, 0.3875, 0.509375, 0.44375, 0.584375, 0.565625, 0.78125, 0.53125, 0.571875, 0.5546875, 0.4515625, 0.246875, 0.4515625, 0.6671875],
    avg: 0.5762664473684211
  },
  Georgia: {
    widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2421875, 0.33125, 0.4125, 0.64375, 0.6109375, 0.81875, 0.7109375, 0.215625, 0.375, 0.375, 0.4734375, 0.64375, 0.2703125, 0.375, 0.2703125, 0.46875, 0.6140625, 0.4296875, 0.559375, 0.553125, 0.565625, 0.5296875, 0.5671875, 0.503125, 0.596875, 0.5671875, 0.3125, 0.3125, 0.64375, 0.64375, 0.64375, 0.4796875, 0.9296875, 0.715625, 0.6546875, 0.6421875, 0.75, 0.6546875, 0.6, 0.7265625, 0.815625, 0.390625, 0.51875, 0.7203125, 0.6046875, 0.928125, 0.7671875, 0.7453125, 0.6109375, 0.7453125, 0.7234375, 0.5625, 0.61875, 0.7578125, 0.70625, 0.99375, 0.7125, 0.6640625, 0.6015625, 0.375, 0.46875, 0.375, 0.64375, 0.65, 0.5, 0.5046875, 0.56875, 0.4546875, 0.575, 0.484375, 0.39375, 0.509375, 0.5828125, 0.29375, 0.3671875, 0.546875, 0.2875, 0.88125, 0.5921875, 0.5390625, 0.571875, 0.5640625, 0.4109375, 0.4328125, 0.3453125, 0.5765625, 0.5203125, 0.75625, 0.50625, 0.5171875, 0.4453125, 0.43125, 0.375, 0.43125, 0.64375],
    avg: 0.5551809210526316
  },
  "Gill Sans": {
    widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2765625, 0.271875, 0.3546875, 0.584375, 0.5421875, 0.6765625, 0.625, 0.1890625, 0.3234375, 0.3234375, 0.4171875, 0.584375, 0.2203125, 0.3234375, 0.2203125, 0.28125, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.2203125, 0.2296875, 0.584375, 0.584375, 0.584375, 0.334375, 1.0109375, 0.6671875, 0.5640625, 0.709375, 0.75, 0.5, 0.4703125, 0.740625, 0.7296875, 0.25, 0.3125, 0.65625, 0.490625, 0.78125, 0.78125, 0.8234375, 0.5109375, 0.8234375, 0.6046875, 0.459375, 0.6046875, 0.709375, 0.6046875, 1.0421875, 0.709375, 0.6046875, 0.646875, 0.334375, 0.28125, 0.334375, 0.4703125, 0.5828125, 0.334375, 0.428125, 0.5, 0.4390625, 0.5109375, 0.4796875, 0.296875, 0.428125, 0.5, 0.2203125, 0.2265625, 0.5, 0.2203125, 0.771875, 0.5, 0.553125, 0.5, 0.5, 0.3984375, 0.3859375, 0.334375, 0.5, 0.4390625, 0.7203125, 0.5, 0.4390625, 0.4171875, 0.334375, 0.2609375, 0.334375, 0.584375],
    avg: 0.4933717105263159
  },
  Helvetica: {
    widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2796875, 0.2765625, 0.3546875, 0.5546875, 0.5546875, 0.8890625, 0.665625, 0.190625, 0.3328125, 0.3328125, 0.3890625, 0.5828125, 0.2765625, 0.3328125, 0.2765625, 0.3015625, 0.5546875, 0.5546875, 0.5546875, 0.5546875, 0.5546875, 0.5546875, 0.5546875, 0.5546875, 0.5546875, 0.5546875, 0.2765625, 0.2765625, 0.584375, 0.5828125, 0.584375, 0.5546875, 1.0140625, 0.665625, 0.665625, 0.721875, 0.721875, 0.665625, 0.609375, 0.7765625, 0.721875, 0.2765625, 0.5, 0.665625, 0.5546875, 0.8328125, 0.721875, 0.7765625, 0.665625, 0.7765625, 0.721875, 0.665625, 0.609375, 0.721875, 0.665625, 0.94375, 0.665625, 0.665625, 0.609375, 0.2765625, 0.3546875, 0.2765625, 0.4765625, 0.5546875, 0.3328125, 0.5546875, 0.5546875, 0.5, 0.5546875, 0.5546875, 0.2765625, 0.5546875, 0.5546875, 0.221875, 0.240625, 0.5, 0.221875, 0.8328125, 0.5546875, 0.5546875, 0.5546875, 0.5546875, 0.3328125, 0.5, 0.2765625, 0.5546875, 0.5, 0.721875, 0.5, 0.5, 0.5, 0.3546875, 0.259375, 0.353125, 0.5890625],
    avg: 0.5279276315789471
  },
  "Helvetica Neue": {
    widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.278125, 0.259375, 0.4265625, 0.55625, 0.55625, 1, 0.6453125, 0.278125, 0.2703125, 0.26875, 0.353125, 0.6, 0.278125, 0.3890625, 0.278125, 0.36875, 0.55625, 0.55625, 0.55625, 0.55625, 0.55625, 0.55625, 0.55625, 0.55625, 0.55625, 0.55625, 0.278125, 0.278125, 0.6, 0.6, 0.6, 0.55625, 0.8, 0.6625, 0.6859375, 0.7234375, 0.7046875, 0.6125, 0.575, 0.759375, 0.7234375, 0.259375, 0.5203125, 0.6703125, 0.55625, 0.871875, 0.7234375, 0.7609375, 0.6484375, 0.7609375, 0.6859375, 0.6484375, 0.575, 0.7234375, 0.6140625, 0.9265625, 0.6125, 0.6484375, 0.6125, 0.259375, 0.36875, 0.259375, 0.6, 0.5, 0.25625, 0.5375, 0.59375, 0.5375, 0.59375, 0.5375, 0.2984375, 0.575, 0.55625, 0.2234375, 0.2375, 0.5203125, 0.2234375, 0.853125, 0.55625, 0.575, 0.59375, 0.59375, 0.334375, 0.5, 0.315625, 0.55625, 0.5, 0.759375, 0.51875, 0.5, 0.48125, 0.334375, 0.2234375, 0.334375, 0.6],
    avg: 0.5279440789473684
  },
  "Hoefler Text": {
    widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2359375, 0.2234375, 0.3921875, 0.7125, 0.49375, 0.8859375, 0.771875, 0.2125, 0.3078125, 0.309375, 0.375, 0.4234375, 0.234375, 0.3125, 0.234375, 0.3, 0.5828125, 0.365625, 0.434375, 0.3921875, 0.5234375, 0.3984375, 0.5125, 0.4328125, 0.46875, 0.5125, 0.234375, 0.234375, 0.515625, 0.4234375, 0.515625, 0.340625, 0.7609375, 0.7359375, 0.6359375, 0.721875, 0.8125, 0.6375, 0.5875, 0.8078125, 0.853125, 0.4296875, 0.503125, 0.78125, 0.609375, 0.9609375, 0.8515625, 0.8140625, 0.6125, 0.8140625, 0.71875, 0.49375, 0.7125, 0.76875, 0.771875, 1.125, 0.7765625, 0.7734375, 0.65625, 0.321875, 0.3078125, 0.321875, 0.3546875, 0.5, 0.3375, 0.446875, 0.5359375, 0.45, 0.5296875, 0.4546875, 0.425, 0.4921875, 0.54375, 0.2671875, 0.240625, 0.5390625, 0.25, 0.815625, 0.5375, 0.5234375, 0.5390625, 0.5421875, 0.365625, 0.36875, 0.35625, 0.5171875, 0.5015625, 0.75, 0.5, 0.509375, 0.44375, 0.2421875, 0.14375, 0.2421875, 0.35],
    avg: 0.5116447368421051
  },
  "Montserrat": {
    widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2625, 0.2609375, 0.3734375, 0.696875, 0.615625, 0.8296875, 0.6703125, 0.203125, 0.3296875, 0.3296875, 0.3875, 0.575, 0.2125, 0.3828125, 0.2125, 0.3953125, 0.6625, 0.3625, 0.56875, 0.5640625, 0.6625, 0.5671875, 0.609375, 0.5890625, 0.6390625, 0.609375, 0.2125, 0.2125, 0.575, 0.575, 0.575, 0.5671875, 1.034375, 0.7171875, 0.7546875, 0.7203125, 0.8265625, 0.6703125, 0.634375, 0.7734375, 0.8140625, 0.303125, 0.5078125, 0.7125, 0.5890625, 0.95625, 0.8140625, 0.8390625, 0.71875, 0.8390625, 0.7234375, 0.615625, 0.575, 0.7921875, 0.6984375, 1.1125, 0.65625, 0.6359375, 0.6515625, 0.31875, 0.396875, 0.31875, 0.5765625, 0.5, 0.6, 0.590625, 0.678125, 0.5640625, 0.678125, 0.6046875, 0.375, 0.6875, 0.678125, 0.2703125, 0.365625, 0.6015625, 0.2703125, 1.0625, 0.678125, 0.628125, 0.678125, 0.678125, 0.4015625, 0.4890625, 0.40625, 0.6734375, 0.5421875, 0.8796875, 0.534375, 0.5671875, 0.5125, 0.334375, 0.2953125, 0.334375, 0.575],
    avg: 0.571792763157895
  },
  monospace: {
    widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.5984375, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6078125, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.61875, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.615625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6140625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625, 0.6015625],
    avg: 0.6020559210526316
  },
  Overpass: {
    widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2296875, 0.2765625, 0.4203125, 0.68125, 0.584375, 0.8515625, 0.7015625, 0.2203125, 0.3453125, 0.3453125, 0.53125, 0.63125, 0.2234375, 0.3953125, 0.2234375, 0.509375, 0.65, 0.4046875, 0.6171875, 0.60625, 0.6484375, 0.60625, 0.6015625, 0.5375, 0.615625, 0.6015625, 0.2234375, 0.2234375, 0.63125, 0.63125, 0.63125, 0.5015625, 0.8203125, 0.696875, 0.6671875, 0.65, 0.6859375, 0.6015625, 0.559375, 0.690625, 0.7078125, 0.2953125, 0.565625, 0.678125, 0.58125, 0.8046875, 0.7109375, 0.740625, 0.6421875, 0.740625, 0.6765625, 0.6046875, 0.590625, 0.696875, 0.6640625, 0.853125, 0.65, 0.6671875, 0.6625, 0.3734375, 0.509375, 0.3734375, 0.63125, 0.5125, 0.4, 0.5328125, 0.5625, 0.51875, 0.5625, 0.546875, 0.3359375, 0.5625, 0.565625, 0.25625, 0.3203125, 0.55, 0.265625, 0.85, 0.565625, 0.5671875, 0.5625, 0.5625, 0.4046875, 0.4765625, 0.3796875, 0.565625, 0.521875, 0.7265625, 0.53125, 0.5390625, 0.5125, 0.3671875, 0.275, 0.3671875, 0.63125],
    avg: 0.5430756578947369
  },
  Palatino: {
    widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.25, 0.278125, 0.371875, 0.60625, 0.5, 0.840625, 0.778125, 0.209375, 0.334375, 0.334375, 0.390625, 0.60625, 0.2578125, 0.334375, 0.25, 0.60625, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.25, 0.25, 0.60625, 0.60625, 0.60625, 0.4453125, 0.7484375, 0.778125, 0.6109375, 0.709375, 0.775, 0.6109375, 0.55625, 0.7640625, 0.8328125, 0.3375, 0.346875, 0.7265625, 0.6109375, 0.946875, 0.83125, 0.7875, 0.6046875, 0.7875, 0.66875, 0.525, 0.6140625, 0.778125, 0.7234375, 1, 0.6671875, 0.6671875, 0.6671875, 0.334375, 0.60625, 0.334375, 0.60625, 0.5, 0.334375, 0.5, 0.565625, 0.4453125, 0.6109375, 0.4796875, 0.340625, 0.55625, 0.5828125, 0.2921875, 0.2671875, 0.5640625, 0.2921875, 0.8828125, 0.5828125, 0.546875, 0.6015625, 0.5609375, 0.3953125, 0.425, 0.3265625, 0.603125, 0.565625, 0.834375, 0.5171875, 0.55625, 0.5, 0.334375, 0.60625, 0.334375, 0.60625],
    avg: 0.5408552631578947
  },
  "RedHatText": {
    widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2328125, 0.2203125, 0.35625, 0.6890625, 0.55, 0.7390625, 0.6703125, 0.2140625, 0.4015625, 0.4015625, 0.4546875, 0.53125, 0.2203125, 0.45625, 0.2203125, 0.515625, 0.6609375, 0.3078125, 0.5484375, 0.5875, 0.61875, 0.5703125, 0.6203125, 0.559375, 0.6140625, 0.6203125, 0.2203125, 0.2234375, 0.465625, 0.534375, 0.465625, 0.5125, 0.7671875, 0.6609375, 0.6703125, 0.7265625, 0.728125, 0.6203125, 0.6109375, 0.8, 0.73125, 0.253125, 0.6, 0.6125, 0.6078125, 0.8625, 0.7390625, 0.8109375, 0.6546875, 0.809375, 0.6484375, 0.6234375, 0.6171875, 0.7125, 0.6609375, 0.8984375, 0.6546875, 0.646875, 0.60625, 0.3625, 0.5203125, 0.3625, 0.540625, 0.4609375, 0.5234375, 0.5265625, 0.584375, 0.509375, 0.5828125, 0.5578125, 0.3703125, 0.5828125, 0.553125, 0.2234375, 0.24375, 0.4890625, 0.2234375, 0.8453125, 0.553125, 0.58125, 0.584375, 0.5828125, 0.353125, 0.453125, 0.378125, 0.553125, 0.5015625, 0.6984375, 0.4875, 0.4984375, 0.459375, 0.3953125, 0.2921875, 0.3953125, 0.58125],
    avg: 0.5341940789473685
  },
  "sans-serif": {
    widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.278125, 0.278125, 0.35625, 0.55625, 0.55625, 0.890625, 0.6671875, 0.1921875, 0.334375, 0.334375, 0.390625, 0.584375, 0.278125, 0.334375, 0.278125, 0.303125, 0.55625, 0.55625, 0.55625, 0.55625, 0.55625, 0.55625, 0.55625, 0.55625, 0.55625, 0.55625, 0.278125, 0.278125, 0.5859375, 0.584375, 0.5859375, 0.55625, 1.015625, 0.6671875, 0.6671875, 0.7234375, 0.7234375, 0.6671875, 0.6109375, 0.778125, 0.7234375, 0.278125, 0.5, 0.6671875, 0.55625, 0.834375, 0.7234375, 0.778125, 0.6671875, 0.778125, 0.7234375, 0.6671875, 0.6109375, 0.7234375, 0.6671875, 0.9453125, 0.6671875, 0.6671875, 0.6109375, 0.278125, 0.35625, 0.278125, 0.478125, 0.55625, 0.334375, 0.55625, 0.55625, 0.5, 0.55625, 0.55625, 0.278125, 0.55625, 0.55625, 0.2234375, 0.2421875, 0.5, 0.2234375, 0.834375, 0.55625, 0.55625, 0.55625, 0.55625, 0.334375, 0.5, 0.278125, 0.55625, 0.5, 0.7234375, 0.5, 0.5, 0.5, 0.35625, 0.2609375, 0.3546875, 0.590625],
    avg: 0.5293256578947368
  },
  Seravek: {
    widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.215625, 0.296875, 0.4171875, 0.6734375, 0.4953125, 0.9125, 0.740625, 0.2421875, 0.3375, 0.3375, 0.409375, 0.60625, 0.2609375, 0.35625, 0.25625, 0.41875, 0.5921875, 0.3515625, 0.475, 0.4875, 0.5375, 0.509375, 0.5484375, 0.4546875, 0.5421875, 0.5484375, 0.25625, 0.2546875, 0.5875, 0.6171875, 0.5875, 0.4578125, 0.8140625, 0.6765625, 0.5703125, 0.6109375, 0.684375, 0.5109375, 0.4953125, 0.678125, 0.6859375, 0.2625, 0.2625, 0.5859375, 0.4734375, 0.846875, 0.709375, 0.740625, 0.509375, 0.740625, 0.584375, 0.5015625, 0.528125, 0.675, 0.5953125, 0.9453125, 0.596875, 0.540625, 0.540625, 0.359375, 0.4203125, 0.359375, 0.5109375, 0.421875, 0.4046875, 0.5015625, 0.5421875, 0.446875, 0.5453125, 0.484375, 0.38125, 0.5140625, 0.5546875, 0.240625, 0.2640625, 0.490625, 0.2765625, 0.8625, 0.5546875, 0.546875, 0.5453125, 0.5453125, 0.3625, 0.41875, 0.3890625, 0.5453125, 0.4703125, 0.7546875, 0.4921875, 0.4609375, 0.453125, 0.4015625, 0.2640625, 0.4015625, 0.58125],
    avg: 0.5044078947368421
  },
  serif: {
    widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2484375, 0.334375, 0.409375, 0.5, 0.5, 0.834375, 0.778125, 0.18125, 0.334375, 0.334375, 0.5, 0.5640625, 0.25, 0.334375, 0.25, 0.278125, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.278125, 0.278125, 0.5640625, 0.5640625, 0.5640625, 0.4453125, 0.921875, 0.7234375, 0.6671875, 0.6671875, 0.7234375, 0.6109375, 0.55625, 0.7234375, 0.7234375, 0.334375, 0.390625, 0.7234375, 0.6109375, 0.890625, 0.7234375, 0.7234375, 0.55625, 0.7234375, 0.6671875, 0.55625, 0.6109375, 0.7234375, 0.7234375, 0.9453125, 0.7234375, 0.7234375, 0.6109375, 0.334375, 0.340625, 0.334375, 0.4703125, 0.5, 0.3453125, 0.4453125, 0.5, 0.4453125, 0.5, 0.4453125, 0.3828125, 0.5, 0.5, 0.278125, 0.3359375, 0.5, 0.278125, 0.778125, 0.5, 0.5, 0.5, 0.5, 0.3375, 0.390625, 0.2796875, 0.5, 0.5, 0.7234375, 0.5, 0.5, 0.4453125, 0.48125, 0.2015625, 0.48125, 0.5421875],
    avg: 0.5126315789473684
  },
  Tahoma: {
    widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.3109375, 0.3328125, 0.4015625, 0.728125, 0.546875, 0.9765625, 0.70625, 0.2109375, 0.3828125, 0.3828125, 0.546875, 0.728125, 0.303125, 0.3640625, 0.303125, 0.3953125, 0.546875, 0.546875, 0.546875, 0.546875, 0.546875, 0.546875, 0.546875, 0.546875, 0.546875, 0.546875, 0.3546875, 0.3546875, 0.728125, 0.728125, 0.728125, 0.475, 0.909375, 0.6109375, 0.590625, 0.6015625, 0.6796875, 0.5625, 0.521875, 0.66875, 0.6765625, 0.3734375, 0.4171875, 0.6046875, 0.4984375, 0.771875, 0.66875, 0.7078125, 0.5515625, 0.7078125, 0.6375, 0.5578125, 0.5875, 0.65625, 0.60625, 0.903125, 0.58125, 0.5890625, 0.559375, 0.3828125, 0.39375, 0.3828125, 0.728125, 0.5625, 0.546875, 0.525, 0.553125, 0.4625, 0.553125, 0.5265625, 0.3546875, 0.553125, 0.5578125, 0.2296875, 0.328125, 0.51875, 0.2296875, 0.840625, 0.5578125, 0.54375, 0.553125, 0.553125, 0.3609375, 0.446875, 0.3359375, 0.5578125, 0.4984375, 0.7421875, 0.4953125, 0.4984375, 0.4453125, 0.48125, 0.3828125, 0.48125, 0.728125],
    avg: 0.5384374999999998
  },
  "Times New Roman": {
    widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2484375, 0.334375, 0.409375, 0.5, 0.5, 0.834375, 0.778125, 0.18125, 0.334375, 0.334375, 0.5, 0.5640625, 0.25, 0.334375, 0.25, 0.28125, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.278125, 0.278125, 0.5640625, 0.5640625, 0.5640625, 0.4453125, 0.921875, 0.7234375, 0.6671875, 0.6671875, 0.7234375, 0.6109375, 0.55625, 0.7234375, 0.7234375, 0.334375, 0.390625, 0.73125, 0.6109375, 0.890625, 0.7375, 0.7234375, 0.55625, 0.7234375, 0.6765625, 0.55625, 0.6109375, 0.7234375, 0.7234375, 0.9453125, 0.7234375, 0.7234375, 0.6109375, 0.334375, 0.28125, 0.334375, 0.4703125, 0.51875, 0.334375, 0.4453125, 0.503125, 0.4453125, 0.503125, 0.4453125, 0.4359375, 0.5, 0.5, 0.278125, 0.35625, 0.50625, 0.278125, 0.778125, 0.5, 0.5, 0.5046875, 0.5, 0.340625, 0.390625, 0.2796875, 0.5, 0.5, 0.7234375, 0.5, 0.5, 0.4453125, 0.48125, 0.2015625, 0.48125, 0.5421875],
    avg: 0.5134375
  },
  "Trebuchet MS": {
    widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.3015625, 0.3671875, 0.325, 0.53125, 0.525, 0.6015625, 0.70625, 0.1609375, 0.3671875, 0.3671875, 0.3671875, 0.525, 0.3671875, 0.3671875, 0.3671875, 0.525, 0.525, 0.525, 0.525, 0.525, 0.525, 0.525, 0.525, 0.525, 0.525, 0.525, 0.3671875, 0.3671875, 0.525, 0.525, 0.525, 0.3671875, 0.771875, 0.590625, 0.5671875, 0.5984375, 0.6140625, 0.5359375, 0.525, 0.6765625, 0.6546875, 0.2796875, 0.4765625, 0.5765625, 0.5078125, 0.7109375, 0.6390625, 0.675, 0.5578125, 0.7421875, 0.5828125, 0.48125, 0.58125, 0.6484375, 0.5875, 0.853125, 0.5578125, 0.5703125, 0.5515625, 0.3671875, 0.3578125, 0.3671875, 0.525, 0.53125, 0.525, 0.5265625, 0.5578125, 0.4953125, 0.5578125, 0.546875, 0.375, 0.503125, 0.546875, 0.2859375, 0.3671875, 0.5046875, 0.2953125, 0.83125, 0.546875, 0.5375, 0.5578125, 0.5578125, 0.3890625, 0.40625, 0.396875, 0.546875, 0.490625, 0.7453125, 0.5015625, 0.49375, 0.475, 0.3671875, 0.525, 0.3671875, 0.525],
    avg: 0.5085197368421052
  },
  Verdana: {
    widths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.35, 0.39375, 0.459375, 0.81875, 0.6359375, 1.0765625, 0.759375, 0.26875, 0.4546875, 0.4546875, 0.6359375, 0.81875, 0.3640625, 0.4546875, 0.3640625, 0.4703125, 0.6359375, 0.6359375, 0.6359375, 0.6359375, 0.6359375, 0.6359375, 0.6359375, 0.6359375, 0.6359375, 0.6359375, 0.4546875, 0.4546875, 0.81875, 0.81875, 0.81875, 0.546875, 1, 0.684375, 0.6859375, 0.6984375, 0.771875, 0.6328125, 0.575, 0.7765625, 0.7515625, 0.421875, 0.4546875, 0.69375, 0.5578125, 0.84375, 0.7484375, 0.7875, 0.603125, 0.7875, 0.7, 0.684375, 0.6171875, 0.7328125, 0.684375, 0.9890625, 0.6859375, 0.615625, 0.6859375, 0.4546875, 0.46875, 0.4546875, 0.81875, 0.6421875, 0.6359375, 0.6015625, 0.6234375, 0.521875, 0.6234375, 0.596875, 0.384375, 0.6234375, 0.6328125, 0.275, 0.3765625, 0.5921875, 0.275, 0.9734375, 0.6328125, 0.6078125, 0.6234375, 0.6234375, 0.43125, 0.521875, 0.3953125, 0.6328125, 0.5921875, 0.81875, 0.5921875, 0.5921875, 0.5265625, 0.6359375, 0.4546875, 0.6359375, 0.81875],
    avg: 0.6171875000000003
  } //https://developer.mozilla.org/en/docs/Web/CSS/length
  // Absolute sizes in pixels for obsolete measurement units.

};
var absoluteMeasurementUnitsToPixels = {
  mm: 3.8,
  sm: 38,
  pt: 1.33,
  pc: 16,
  in: 96,
  px: 1
};
var relativeMeasurementUnitsCoef = {
  em: 1,
  ex: 0.5
};
var coefficients = {
  heightOverlapCoef: 1.05,
  // Coefficient for height value to prevent overlap.
  lineCapitalCoef: 1.15 // Coefficient for height value. Reserve space for capital chars.

};
var defaultStyle = {
  lineHeight: 1,
  letterSpacing: "0px",
  fontSize: 0,
  angle: 0,
  fontFamily: ""
};

var _degreeToRadian = function (angle) {
  return angle * Math.PI / 180;
};

var _getFontData = function (fontFamily) {
  var possibleFonts = fontFamily.split(",").map(function (f) {
    return f.replace(/'|"/g, "");
  });
  var fontMatch = possibleFonts.find(function (f) {
    return fonts[f];
  }) || "Helvetica";
  return fonts[fontMatch];
};

var _splitToLines = function (text) {
  return Array.isArray(text) ? text : text.toString().split(/\r\n|\r|\n/g);
};

var _getSizeWithRotate = function (axisSize, dependentSize, angle) {
  var angleInRadian = _degreeToRadian(angle);

  return Math.abs(Math.cos(angleInRadian) * axisSize) + Math.abs(Math.sin(angleInRadian) * dependentSize);
};
/**
 * Convert length-type parameters from specific measurement units to pixels
 * @param  {string} length Css length string value.
 * @param  {number} fontSize Current text font-size.
 * @returns {number} Approximate Css length in pixels.
 */


var convertLengthToPixels = function (length, fontSize) {
  var attribute = length.match(/[a-zA-Z%]+/) && length.match(/[a-zA-Z%]+/)[0];
  var value = length.match(/[0-9.,]+/);
  var result;

  if (!attribute) {
    result = value || 0;
  } else if (absoluteMeasurementUnitsToPixels.hasOwnProperty(attribute)) {
    result = value * absoluteMeasurementUnitsToPixels[attribute];
  } else if (relativeMeasurementUnitsCoef.hasOwnProperty(attribute)) {
    result = (fontSize ? value * fontSize : value * defaultStyle.fontSize) * relativeMeasurementUnitsCoef[attribute];
  } else {
    result = value;
  }

  return result;
};

var _prepareParams = function (inputStyle, index) {
  var lineStyle = Array.isArray(inputStyle) ? inputStyle[index] : inputStyle;

  var style = lodash_defaults__WEBPACK_IMPORTED_MODULE_0___default()({}, lineStyle, defaultStyle);

  return lodash_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, style, {
    fontFamily: style.fontFamily,
    letterSpacing: typeof style.letterSpacing === "number" ? style.letterSpacing : convertLengthToPixels(String(style.letterSpacing), style.fontSize),
    fontSize: typeof style.fontSize === "number" ? style.fontSize : convertLengthToPixels(String(style.fontSize))
  });
};

var _approximateTextWidthInternal = function (text, style) {
  if (text === undefined || text === "" || text === null) {
    return 0;
  }

  var widths = _splitToLines(text).map(function (line, index) {
    var len = line.toString().length;

    var _prepareParams2 = _prepareParams(style, index),
        fontSize = _prepareParams2.fontSize,
        letterSpacing = _prepareParams2.letterSpacing,
        fontFamily = _prepareParams2.fontFamily;

    var fontData = _getFontData(fontFamily);

    var width = line.toString().split("").map(function (c) {
      return c.charCodeAt(0) < fontData.widths.length ? fontData.widths[c.charCodeAt(0)] : fontData.avg;
    }).reduce(function (cur, acc) {
      return acc + cur;
    }, 0) * fontSize;
    return width + letterSpacing * Math.max(len - 1, 0);
  });

  return Math.max.apply(Math, _toConsumableArray(widths));
};

var _approximateTextHeightInternal = function (text, style) {
  if (text === undefined || text === "" || text === null) {
    return 0;
  }

  return _splitToLines(text).reduce(function (total, line, index) {
    var lineStyle = _prepareParams(style, index);

    var containsCaps = line.toString().match(/[(A-Z)(0-9)]/);
    var height = containsCaps ? lineStyle.fontSize * coefficients.lineCapitalCoef : lineStyle.fontSize;
    return total + lineStyle.lineHeight * height;
  }, 0);
}; // Stubbable implementation.


var _approximateTextSizeInternal = {
  impl: function (text, style) {
    var angle = Array.isArray(style) ? style[0] && style[0].angle : style && style.angle;

    var height = _approximateTextHeightInternal(text, style);

    var width = _approximateTextWidthInternal(text, style);

    var widthWithRotate = angle ? _getSizeWithRotate(width, height, angle) : width;
    var heightWithRotate = angle ? _getSizeWithRotate(height, width, angle) : height;
    return {
      width: widthWithRotate,
      height: heightWithRotate * coefficients.heightOverlapCoef
    };
  }
};
/**
 * Predict text size by font params.
 * @param {string} text Content for width calculation.
 * @param {Object} style Text styles, ,fontFamily, fontSize, etc.
 * @param {string} style.fontFamily Text fontFamily.
 * @param {(number|string)} style.fontSize Text fontSize.
 * @param {number} style.angle Text rotate angle.
 * @param {string} style.letterSpacing Text letterSpacing(space between letters).
 * @param {number} style.lineHeight Line height coefficient.
 * @returns {number} Approximate text label height.
 */

var approximateTextSize = function (text, style) {
  return _approximateTextSizeInternal.impl(text, style);
};

/***/ }),

/***/ "../../victory-core/es/victory-util/timer-context.js":
/*!***********************************************************!*\
  !*** ../../victory-core/es/victory-util/timer-context.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timer */ "../../victory-core/es/victory-util/timer.js");


/**
 * The React context object consumers may use to access or override the global
 * timer.
 */

var TimerContext = react__WEBPACK_IMPORTED_MODULE_0___default().createContext({
  transitionTimer: new _timer__WEBPACK_IMPORTED_MODULE_1__["default"](),
  animationTimer: new _timer__WEBPACK_IMPORTED_MODULE_1__["default"]()
});
TimerContext.displayName = "TimerContext";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TimerContext);

/***/ }),

/***/ "../../victory-core/es/victory-util/timer.js":
/*!***************************************************!*\
  !*** ../../victory-core/es/victory-util/timer.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Timer)
/* harmony export */ });
/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-timer */ "../../../node_modules/d3-timer/src/timer.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Timer =
/*#__PURE__*/
function () {
  function Timer() {
    _classCallCheck(this, Timer);

    this.shouldAnimate = true;
    this.subscribers = [];
    this.loop = this.loop.bind(this);
    this.timer = null;
    this.activeSubscriptions = 0;
  }

  _createClass(Timer, [{
    key: "bypassAnimation",
    value: function bypassAnimation() {
      this.shouldAnimate = false;
    }
  }, {
    key: "resumeAnimation",
    value: function resumeAnimation() {
      this.shouldAnimate = true;
    }
  }, {
    key: "loop",
    value: function loop() {
      this.subscribers.forEach(function (s) {
        s.callback((0,d3_timer__WEBPACK_IMPORTED_MODULE_0__.now)() - s.startTime, s.duration);
      });
    }
  }, {
    key: "start",
    value: function start() {
      if (!this.timer) {
        this.timer = (0,d3_timer__WEBPACK_IMPORTED_MODULE_0__.timer)(this.loop);
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.timer) {
        this.timer.stop();
        this.timer = null;
      }
    }
  }, {
    key: "subscribe",
    value: function subscribe(callback, duration) {
      duration = this.shouldAnimate ? duration : 0;
      var subscriptionID = this.subscribers.push({
        startTime: (0,d3_timer__WEBPACK_IMPORTED_MODULE_0__.now)(),
        callback: callback,
        duration: duration
      });
      this.activeSubscriptions++;
      this.start();
      return subscriptionID;
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(id) {
      if (id !== null && this.subscribers[id - 1]) {
        delete this.subscribers[id - 1];
        this.activeSubscriptions--;
      }

      if (this.activeSubscriptions === 0) {
        this.stop();
      }
    }
  }]);

  return Timer;
}();



/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cursorContainerMixin": () => (/* reexport safe */ _victory_cursor_container__WEBPACK_IMPORTED_MODULE_0__.cursorContainerMixin),
/* harmony export */   "VictoryCursorContainer": () => (/* reexport safe */ _victory_cursor_container__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "CursorHelpers": () => (/* reexport safe */ _cursor_helpers__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _victory_cursor_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./victory-cursor-container */ "./victory-cursor-container.js");
/* harmony import */ var _cursor_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cursor-helpers */ "./cursor-helpers.js");


})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});