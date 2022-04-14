(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["VictoryLegend"] = factory(require("react"));
	else
		root["VictoryLegend"] = factory(root["React"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./helper-methods.js":
/*!***************************!*\
  !*** ./helper-methods.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDimensions": () => (/* binding */ getDimensions),
/* harmony export */   "getBaseProps": () => (/* binding */ getBaseProps)
/* harmony export */ });
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isNil */ "../../../node_modules/lodash/isNil.js");
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_range__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/range */ "../../../node_modules/lodash/range.js");
/* harmony import */ var lodash_range__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_range__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_sum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/sum */ "../../../node_modules/lodash/sum.js");
/* harmony import */ var lodash_sum__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_sum__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/keys */ "../../../node_modules/lodash/keys.js");
/* harmony import */ var lodash_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_keys__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_groupBy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/groupBy */ "../../../node_modules/lodash/groupBy.js");
/* harmony import */ var lodash_groupBy__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_groupBy__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/assign */ "../../../node_modules/lodash/assign.js");
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_assign__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_defaults__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/defaults */ "../../../node_modules/lodash/defaults.js");
/* harmony import */ var lodash_defaults__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_defaults__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var victory_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! victory-core */ "../../victory-core/es/victory-util/style.js");
/* harmony import */ var victory_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! victory-core */ "../../victory-core/es/victory-util/helpers.js");
/* harmony import */ var victory_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! victory-core */ "../../victory-core/es/victory-util/textsize.js");








function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var getColorScale = function (props) {
  var colorScale = props.colorScale;
  return typeof colorScale === "string" ? victory_core__WEBPACK_IMPORTED_MODULE_7__.getColorScale(colorScale) : colorScale || [];
};

var getLabelStyles = function (props) {
  var data = props.data,
      style = props.style;
  return data.map(function (datum, index) {
    var baseLabelStyles = lodash_defaults__WEBPACK_IMPORTED_MODULE_6___default()({}, datum.labels, style.labels);

    return victory_core__WEBPACK_IMPORTED_MODULE_8__.evaluateStyle(baseLabelStyles, {
      datum: datum,
      index: index,
      data: data
    });
  });
};

var getStyles = function (props, styleObject) {
  var style = props.style || {};
  styleObject = styleObject || {};
  var parentStyleProps = {
    height: "100%",
    width: "100%"
  };
  return {
    parent: lodash_defaults__WEBPACK_IMPORTED_MODULE_6___default()(style.parent, styleObject.parent, parentStyleProps),
    data: lodash_defaults__WEBPACK_IMPORTED_MODULE_6___default()({}, style.data, styleObject.data),
    labels: lodash_defaults__WEBPACK_IMPORTED_MODULE_6___default()({}, style.labels, styleObject.labels),
    border: lodash_defaults__WEBPACK_IMPORTED_MODULE_6___default()({}, style.border, styleObject.border),
    title: lodash_defaults__WEBPACK_IMPORTED_MODULE_6___default()({}, style.title, styleObject.title)
  };
};

var getCalculatedValues = function (props) {
  var orientation = props.orientation,
      theme = props.theme;
  var defaultStyles = theme && theme.legend && theme.legend.style ? theme.legend.style : {};
  var style = getStyles(props, defaultStyles);
  var colorScale = getColorScale(props);
  var isHorizontal = orientation === "horizontal";
  var borderPadding = victory_core__WEBPACK_IMPORTED_MODULE_8__.getPadding({
    padding: props.borderPadding
  });
  return lodash_assign__WEBPACK_IMPORTED_MODULE_5___default()({}, props, {
    style: style,
    isHorizontal: isHorizontal,
    colorScale: colorScale,
    borderPadding: borderPadding
  });
};

var getColumn = function (props, index) {
  var itemsPerRow = props.itemsPerRow,
      isHorizontal = props.isHorizontal;

  if (!itemsPerRow) {
    return isHorizontal ? index : 0;
  }

  return isHorizontal ? index % itemsPerRow : Math.floor(index / itemsPerRow);
};

var getRow = function (props, index) {
  var itemsPerRow = props.itemsPerRow,
      isHorizontal = props.isHorizontal;

  if (!itemsPerRow) {
    return isHorizontal ? 0 : index;
  }

  return isHorizontal ? Math.floor(index / itemsPerRow) : index % itemsPerRow;
};

var groupData = function (props) {
  var data = props.data;
  var style = props.style && props.style.data || {};
  var labelStyles = getLabelStyles(props);
  return data.map(function (datum, index) {
    var symbol = datum.symbol || {};
    var fontSize = labelStyles[index].fontSize; // eslint-disable-next-line no-magic-numbers

    var size = symbol.size || style.size || fontSize / 2.5;
    var symbolSpacer = props.symbolSpacer || Math.max(size, fontSize);
    return _objectSpread({}, datum, {
      size: size,
      symbolSpacer: symbolSpacer,
      fontSize: fontSize,
      textSize: victory_core__WEBPACK_IMPORTED_MODULE_9__.approximateTextSize(datum.name, labelStyles[index]),
      column: getColumn(props, index),
      row: getRow(props, index)
    });
  });
};

var getColumnWidths = function (props, data) {
  var gutter = props.gutter || {};
  var gutterWidth = typeof gutter === "object" ? (gutter.left || 0) + (gutter.right || 0) : gutter || 0;

  var dataByColumn = lodash_groupBy__WEBPACK_IMPORTED_MODULE_4___default()(data, "column");

  var columns = lodash_keys__WEBPACK_IMPORTED_MODULE_3___default()(dataByColumn);

  return columns.reduce(function (memo, curr, index) {
    var lengths = dataByColumn[curr].map(function (d) {
      return d.textSize.width + d.size + d.symbolSpacer + gutterWidth;
    });
    memo[index] = Math.max.apply(Math, _toConsumableArray(lengths));
    return memo;
  }, []);
};

var getRowHeights = function (props, data) {
  var gutter = props.rowGutter || {};
  var gutterHeight = typeof gutter === "object" ? (gutter.top || 0) + (gutter.bottom || 0) : gutter || 0;

  var dataByRow = lodash_groupBy__WEBPACK_IMPORTED_MODULE_4___default()(data, "row");

  return lodash_keys__WEBPACK_IMPORTED_MODULE_3___default()(dataByRow).reduce(function (memo, curr, index) {
    var rows = dataByRow[curr];
    var lengths = rows.map(function (d) {
      return d.textSize.height + d.symbolSpacer + gutterHeight;
    });
    memo[index] = Math.max.apply(Math, _toConsumableArray(lengths));
    return memo;
  }, []);
};

var getTitleDimensions = function (props) {
  var style = props.style && props.style.title || {};
  var textSize = victory_core__WEBPACK_IMPORTED_MODULE_9__.approximateTextSize(props.title, style);
  var padding = style.padding || 0;
  return {
    height: textSize.height + 2 * padding || 0,
    width: textSize.width + 2 * padding || 0
  };
};

var getOffset = function (datum, rowHeights, columnWidths) {
  var column = datum.column,
      row = datum.row;
  return {
    x: lodash_range__WEBPACK_IMPORTED_MODULE_1___default()(column).reduce(function (memo, curr) {
      memo += columnWidths[curr];
      return memo;
    }, 0),
    y: lodash_range__WEBPACK_IMPORTED_MODULE_1___default()(row).reduce(function (memo, curr) {
      memo += rowHeights[curr];
      return memo;
    }, 0)
  };
};

var getAnchors = function (titleOrientation, centerTitle) {
  var standardAnchors = {
    textAnchor: titleOrientation === "right" ? "end" : "start",
    verticalAnchor: titleOrientation === "bottom" ? "end" : "start"
  };

  if (centerTitle) {
    var horizontal = titleOrientation === "top" || titleOrientation === "bottom";
    return {
      textAnchor: horizontal ? "middle" : standardAnchors.textAnchor,
      verticalAnchor: horizontal ? standardAnchors.verticalAnchor : "middle"
    };
  } else {
    return standardAnchors;
  }
};

var getTitleStyle = function (props) {
  var titleOrientation = props.titleOrientation,
      centerTitle = props.centerTitle,
      titleComponent = props.titleComponent;
  var baseStyle = props.style && props.style.title || {};
  var componentStyle = titleComponent.props && titleComponent.props.style || {};
  var anchors = getAnchors(titleOrientation, centerTitle);
  return Array.isArray(componentStyle) ? componentStyle.map(function (obj) {
    return lodash_defaults__WEBPACK_IMPORTED_MODULE_6___default()({}, obj, baseStyle, anchors);
  }) : lodash_defaults__WEBPACK_IMPORTED_MODULE_6___default()({}, componentStyle, baseStyle, anchors);
}; // eslint-disable-next-line complexity


var getTitleProps = function (props, borderProps) {
  var title = props.title,
      titleOrientation = props.titleOrientation,
      centerTitle = props.centerTitle,
      borderPadding = props.borderPadding;
  var height = borderProps.height,
      width = borderProps.width;
  var style = getTitleStyle(props);
  var padding = Array.isArray(style) ? style[0].padding : style.padding;
  var horizontal = titleOrientation === "top" || titleOrientation === "bottom";
  var xOrientation = titleOrientation === "bottom" ? "bottom" : "top";
  var yOrientation = titleOrientation === "right" ? "right" : "left";
  var standardPadding = {
    x: centerTitle ? width / 2 : borderPadding[xOrientation] + (padding || 0),
    y: centerTitle ? height / 2 : borderPadding[yOrientation] + (padding || 0)
  };

  var getPadding = function () {
    return borderPadding[titleOrientation] + (padding || 0);
  };

  var xOffset = horizontal ? standardPadding.x : getPadding();
  var yOffset = horizontal ? getPadding() : standardPadding.y;
  return {
    x: titleOrientation === "right" ? props.x + width - xOffset : props.x + xOffset,
    y: titleOrientation === "bottom" ? props.y + height - yOffset : props.y + yOffset,
    style: style,
    text: title
  };
};

var getBorderProps = function (props, contentHeight, contentWidth) {
  var x = props.x,
      y = props.y,
      borderPadding = props.borderPadding,
      style = props.style;
  var height = (contentHeight || 0) + borderPadding.top + borderPadding.bottom;
  var width = (contentWidth || 0) + borderPadding.left + borderPadding.right;
  return {
    x: x,
    y: y,
    height: height,
    width: width,
    style: lodash_assign__WEBPACK_IMPORTED_MODULE_5___default()({
      fill: "none"
    }, style.border)
  };
};

var getDimensions = function (props, fallbackProps) {
  var modifiedProps = victory_core__WEBPACK_IMPORTED_MODULE_8__.modifyProps(props, fallbackProps, "legend");
  props = lodash_assign__WEBPACK_IMPORTED_MODULE_5___default()({}, modifiedProps, getCalculatedValues(modifiedProps));
  var _props = props,
      title = _props.title,
      titleOrientation = _props.titleOrientation;
  var groupedData = groupData(props);
  var columnWidths = getColumnWidths(props, groupedData);
  var rowHeights = getRowHeights(props, groupedData);
  var titleDimensions = title ? getTitleDimensions(props) : {
    height: 0,
    width: 0
  };
  return {
    height: titleOrientation === "left" || titleOrientation === "right" ? Math.max(lodash_sum__WEBPACK_IMPORTED_MODULE_2___default()(rowHeights), titleDimensions.height) : lodash_sum__WEBPACK_IMPORTED_MODULE_2___default()(rowHeights) + titleDimensions.height,
    width: titleOrientation === "left" || titleOrientation === "right" ? lodash_sum__WEBPACK_IMPORTED_MODULE_2___default()(columnWidths) + titleDimensions.width : Math.max(lodash_sum__WEBPACK_IMPORTED_MODULE_2___default()(columnWidths), titleDimensions.width)
  };
};
var getBaseProps = function (props, fallbackProps) {
  var modifiedProps = victory_core__WEBPACK_IMPORTED_MODULE_8__.modifyProps(props, fallbackProps, "legend");
  props = lodash_assign__WEBPACK_IMPORTED_MODULE_5___default()({}, modifiedProps, getCalculatedValues(modifiedProps));
  var _props2 = props,
      data = _props2.data,
      standalone = _props2.standalone,
      theme = _props2.theme,
      padding = _props2.padding,
      style = _props2.style,
      colorScale = _props2.colorScale,
      gutter = _props2.gutter,
      rowGutter = _props2.rowGutter,
      borderPadding = _props2.borderPadding,
      title = _props2.title,
      titleOrientation = _props2.titleOrientation,
      name = _props2.name,
      _props2$x = _props2.x,
      x = _props2$x === void 0 ? 0 : _props2$x,
      _props2$y = _props2.y,
      y = _props2$y === void 0 ? 0 : _props2$y;
  var groupedData = groupData(props);
  var columnWidths = getColumnWidths(props, groupedData);
  var rowHeights = getRowHeights(props, groupedData);
  var labelStyles = getLabelStyles(props);
  var titleDimensions = title ? getTitleDimensions(props) : {
    height: 0,
    width: 0
  };
  var titleOffset = {
    x: titleOrientation === "left" ? titleDimensions.width : 0,
    y: titleOrientation === "top" ? titleDimensions.height : 0
  };
  var gutterOffset = {
    x: gutter && typeof gutter === "object" ? gutter.left || 0 : 0,
    y: rowGutter && typeof rowGutter === "object" ? rowGutter.top || 0 : 0
  };

  var _getDimensions = getDimensions(props, fallbackProps),
      height = _getDimensions.height,
      width = _getDimensions.width;

  var borderProps = getBorderProps(props, height, width);
  var titleProps = getTitleProps(props, borderProps);
  var initialProps = {
    parent: {
      data: data,
      standalone: standalone,
      theme: theme,
      padding: padding,
      name: name,
      height: props.height,
      width: props.width,
      style: style.parent
    },
    all: {
      border: borderProps,
      title: titleProps
    }
  };
  return groupedData.reduce(function (childProps, datum, i) {
    var color = colorScale[i % colorScale.length];

    var dataStyle = lodash_defaults__WEBPACK_IMPORTED_MODULE_6___default()({}, datum.symbol, style.data, {
      fill: color
    });

    var eventKey = !lodash_isNil__WEBPACK_IMPORTED_MODULE_0___default()(datum.eventKey) ? datum.eventKey : i;
    var offset = getOffset(datum, rowHeights, columnWidths);
    var originY = y + borderPadding.top + datum.symbolSpacer;
    var originX = x + borderPadding.left + datum.symbolSpacer;
    var dataProps = {
      index: i,
      data: data,
      datum: datum,
      symbol: dataStyle.type || dataStyle.symbol || "circle",
      size: datum.size,
      style: dataStyle,
      y: originY + offset.y + titleOffset.y + gutterOffset.y,
      x: originX + offset.x + titleOffset.x + gutterOffset.x
    };
    var labelProps = {
      datum: datum,
      data: data,
      text: datum.name,
      style: labelStyles[i],
      y: dataProps.y,
      x: dataProps.x + datum.symbolSpacer + datum.size / 2
    };
    childProps[eventKey] = {
      data: dataProps,
      labels: labelProps
    };
    return childProps;
  }, initialProps);
};

/***/ }),

/***/ "./victory-legend.js":
/*!***************************!*\
  !*** ./victory-legend.js ***!
  \***************************/
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
/* harmony import */ var _helper_methods__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helper-methods */ "./helper-methods.js");
/* harmony import */ var victory_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! victory-core */ "../../victory-core/es/victory-util/helpers.js");
/* harmony import */ var victory_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! victory-core */ "../../victory-core/es/victory-util/prop-types.js");
/* harmony import */ var victory_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! victory-core */ "../../victory-core/es/victory-primitives/border.js");
/* harmony import */ var victory_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! victory-core */ "../../victory-core/es/victory-container/victory-container.js");
/* harmony import */ var victory_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! victory-core */ "../../victory-core/es/victory-primitives/point.js");
/* harmony import */ var victory_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! victory-core */ "../../victory-core/es/victory-label/victory-label.js");
/* harmony import */ var victory_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! victory-core */ "../../victory-core/es/victory-theme/victory-theme.js");
/* harmony import */ var victory_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! victory-core */ "../../victory-core/es/victory-util/add-events.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var fallbackProps = {
  orientation: "vertical",
  titleOrientation: "top",
  width: 450,
  height: 300,
  x: 0,
  y: 0
};
var defaultLegendData = [{
  name: "Series 1"
}, {
  name: "Series 2"
}];

var VictoryLegend =
/*#__PURE__*/
function (_React$Component) {
  _inherits(VictoryLegend, _React$Component);

  function VictoryLegend() {
    _classCallCheck(this, VictoryLegend);

    return _possibleConstructorReturn(this, (VictoryLegend.__proto__ || Object.getPrototypeOf(VictoryLegend)).apply(this, arguments));
  }

  _createClass(VictoryLegend, [{
    key: "renderChildren",
    value: function renderChildren(props) {
      var _this = this;

      var dataComponent = props.dataComponent,
          labelComponent = props.labelComponent,
          title = props.title;
      var dataComponents = this.dataKeys.map(function (_dataKey, index) {
        if (_dataKey === "all") {
          return undefined;
        }

        var dataProps = _this.getComponentProps(dataComponent, "data", index);

        return react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(dataComponent, dataProps);
      }).filter(Boolean);
      var labelComponents = this.dataKeys.map(function (_dataKey, index) {
        if (_dataKey === "all") {
          return undefined;
        }

        var labelProps = _this.getComponentProps(labelComponent, "labels", index);

        if (labelProps.text !== undefined && labelProps.text !== null) {
          return react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(labelComponent, labelProps);
        }

        return undefined;
      }).filter(Boolean);
      var borderProps = this.getComponentProps(props.borderComponent, "border", "all");
      var borderComponent = react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(props.borderComponent, borderProps);

      if (title) {
        var titleProps = this.getComponentProps(props.title, "title", "all");
        var titleComponent = react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(props.titleComponent, titleProps);
        return [borderComponent].concat(_toConsumableArray(dataComponents), [titleComponent], _toConsumableArray(labelComponents));
      }

      return [borderComponent].concat(_toConsumableArray(dataComponents), _toConsumableArray(labelComponents));
    }
  }, {
    key: "render",
    value: function render() {
      var role = this.constructor.role;
      var props = victory_core__WEBPACK_IMPORTED_MODULE_2__.modifyProps(this.props, fallbackProps, role);
      var children = [this.renderChildren(props)];
      return props.standalone ? this.renderContainer(props.containerComponent, children) : react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(props.groupComponent, {}, children);
    }
  }]);

  return VictoryLegend;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

Object.defineProperty(VictoryLegend, "displayName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: "VictoryLegend"
});
Object.defineProperty(VictoryLegend, "role", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: "legend"
});
Object.defineProperty(VictoryLegend, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    borderComponent: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().element),
    borderPadding: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().number), prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
      top: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
      bottom: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
      left: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
      right: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
    })]),
    centerTitle: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    colorScale: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)), prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["grayscale", "qualitative", "heatmap", "warm", "cool", "red", "green", "blue"])]),
    containerComponent: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().element),
    data: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
      name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
      label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
      symbol: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
    })),
    dataComponent: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().element),
    eventKey: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().func), victory_core__WEBPACK_IMPORTED_MODULE_3__.allOfType([victory_core__WEBPACK_IMPORTED_MODULE_3__.integer, victory_core__WEBPACK_IMPORTED_MODULE_3__.nonNegative]), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)]),
    events: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
      target: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["data", "labels", "parent"]),
      eventKey: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().array), victory_core__WEBPACK_IMPORTED_MODULE_3__.allOfType([victory_core__WEBPACK_IMPORTED_MODULE_3__.integer, victory_core__WEBPACK_IMPORTED_MODULE_3__.nonNegative]), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)]),
      eventHandlers: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
    })),
    externalEventMutations: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
      callback: (prop_types__WEBPACK_IMPORTED_MODULE_1___default()["function"]),
      childName: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array)]),
      eventKey: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().array), victory_core__WEBPACK_IMPORTED_MODULE_3__.allOfType([victory_core__WEBPACK_IMPORTED_MODULE_3__.integer, victory_core__WEBPACK_IMPORTED_MODULE_3__.nonNegative]), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)]),
      mutation: (prop_types__WEBPACK_IMPORTED_MODULE_1___default()["function"]),
      target: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array)])
    })),
    groupComponent: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().element),
    gutter: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().number), prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
      left: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
      right: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
    })]),
    height: victory_core__WEBPACK_IMPORTED_MODULE_3__.nonNegative,
    itemsPerRow: victory_core__WEBPACK_IMPORTED_MODULE_3__.nonNegative,
    labelComponent: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().element),
    name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    orientation: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["horizontal", "vertical"]),
    padding: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().number), prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
      top: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
      bottom: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
      left: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
      right: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
    })]),
    rowGutter: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().number), prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
      top: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
      bottom: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
    })]),
    sharedEvents: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
      events: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
      getEventState: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
    }),
    standalone: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    style: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
      border: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
      data: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
      labels: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
      parent: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
      title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
    }),
    symbolSpacer: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
    theme: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
    title: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array)]),
    titleComponent: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().element),
    titleOrientation: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["top", "bottom", "left", "right"]),
    width: victory_core__WEBPACK_IMPORTED_MODULE_3__.nonNegative,
    x: victory_core__WEBPACK_IMPORTED_MODULE_3__.nonNegative,
    y: victory_core__WEBPACK_IMPORTED_MODULE_3__.nonNegative
  }
});
Object.defineProperty(VictoryLegend, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    borderComponent: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(victory_core__WEBPACK_IMPORTED_MODULE_4__["default"], null),
    data: defaultLegendData,
    containerComponent: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(victory_core__WEBPACK_IMPORTED_MODULE_5__["default"], null),
    dataComponent: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(victory_core__WEBPACK_IMPORTED_MODULE_6__["default"], null),
    groupComponent: react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null),
    labelComponent: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(victory_core__WEBPACK_IMPORTED_MODULE_7__["default"], null),
    standalone: true,
    theme: victory_core__WEBPACK_IMPORTED_MODULE_8__["default"].grayscale,
    titleComponent: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(victory_core__WEBPACK_IMPORTED_MODULE_7__["default"], null)
  }
});
Object.defineProperty(VictoryLegend, "getBaseProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function (props) {
    return (0,_helper_methods__WEBPACK_IMPORTED_MODULE_9__.getBaseProps)(props, fallbackProps);
  }
});
Object.defineProperty(VictoryLegend, "getDimensions", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function (props) {
    return (0,_helper_methods__WEBPACK_IMPORTED_MODULE_9__.getDimensions)(props, fallbackProps);
  }
});
Object.defineProperty(VictoryLegend, "expectedComponents", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ["borderComponent", "containerComponent", "dataComponent", "groupComponent", "labelComponent", "titleComponent"]
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,victory_core__WEBPACK_IMPORTED_MODULE_10__["default"])(VictoryLegend));

/***/ }),

/***/ "../../../node_modules/d3-color/src/color.js":
/*!***************************************************!*\
  !*** ../../../node_modules/d3-color/src/color.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Color": () => (/* binding */ Color),
/* harmony export */   "darker": () => (/* binding */ darker),
/* harmony export */   "brighter": () => (/* binding */ brighter),
/* harmony export */   "default": () => (/* binding */ color),
/* harmony export */   "rgbConvert": () => (/* binding */ rgbConvert),
/* harmony export */   "rgb": () => (/* binding */ rgb),
/* harmony export */   "Rgb": () => (/* binding */ Rgb),
/* harmony export */   "hslConvert": () => (/* binding */ hslConvert),
/* harmony export */   "hsl": () => (/* binding */ hsl)
/* harmony export */ });
/* harmony import */ var _define_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./define.js */ "../../../node_modules/d3-color/src/define.js");


function Color() {}

var darker = 0.7;
var brighter = 1 / darker;

var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex = /^#([0-9a-f]{3,8})$/,
    reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
    reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
    reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
    reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
    reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
    reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

(0,_define_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Color, color, {
  copy: function(channels) {
    return Object.assign(new this.constructor, this, channels);
  },
  displayable: function() {
    return this.rgb().displayable();
  },
  hex: color_formatHex, // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});

function color_formatHex() {
  return this.rgb().formatHex();
}

function color_formatHsl() {
  return hslConvert(this).formatHsl();
}

function color_formatRgb() {
  return this.rgb().formatRgb();
}

function color(format) {
  var m, l;
  format = (format + "").trim().toLowerCase();
  return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
      : l === 3 ? new Rgb((m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1) // #f00
      : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
      : l === 4 ? rgba((m >> 12 & 0xf) | (m >> 8 & 0xf0), (m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), (((m & 0xf) << 4) | (m & 0xf)) / 0xff) // #f000
      : null) // invalid hex
      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
      : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
      : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
      : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb;
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

(0,_define_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Rgb, rgb, (0,_define_js__WEBPACK_IMPORTED_MODULE_0__.extend)(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return (-0.5 <= this.r && this.r < 255.5)
        && (-0.5 <= this.g && this.g < 255.5)
        && (-0.5 <= this.b && this.b < 255.5)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex, // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));

function rgb_formatHex() {
  return "#" + hex(this.r) + hex(this.g) + hex(this.b);
}

function rgb_formatRgb() {
  var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
  return (a === 1 ? "rgb(" : "rgba(")
      + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", "
      + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", "
      + Math.max(0, Math.min(255, Math.round(this.b) || 0))
      + (a === 1 ? ")" : ", " + a + ")");
}

function hex(value) {
  value = Math.max(0, Math.min(255, Math.round(value) || 0));
  return (value < 16 ? "0" : "") + value.toString(16);
}

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl;
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

(0,_define_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Hsl, hsl, (0,_define_js__WEBPACK_IMPORTED_MODULE_0__.extend)(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s))
        && (0 <= this.l && this.l <= 1)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl: function() {
    var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "hsl(" : "hsla(")
        + (this.h || 0) + ", "
        + (this.s || 0) * 100 + "%, "
        + (this.l || 0) * 100 + "%"
        + (a === 1 ? ")" : ", " + a + ")");
  }
}));

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60
      : h < 180 ? m2
      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
      : m1) * 255;
}


/***/ }),

/***/ "../../../node_modules/d3-color/src/define.js":
/*!****************************************************!*\
  !*** ../../../node_modules/d3-color/src/define.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "extend": () => (/* binding */ extend)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}

function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}


/***/ }),

/***/ "../../../node_modules/d3-ease/src/back.js":
/*!*************************************************!*\
  !*** ../../../node_modules/d3-ease/src/back.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "backIn": () => (/* binding */ backIn),
/* harmony export */   "backOut": () => (/* binding */ backOut),
/* harmony export */   "backInOut": () => (/* binding */ backInOut)
/* harmony export */ });
var overshoot = 1.70158;

var backIn = (function custom(s) {
  s = +s;

  function backIn(t) {
    return (t = +t) * t * (s * (t - 1) + t);
  }

  backIn.overshoot = custom;

  return backIn;
})(overshoot);

var backOut = (function custom(s) {
  s = +s;

  function backOut(t) {
    return --t * t * ((t + 1) * s + t) + 1;
  }

  backOut.overshoot = custom;

  return backOut;
})(overshoot);

var backInOut = (function custom(s) {
  s = +s;

  function backInOut(t) {
    return ((t *= 2) < 1 ? t * t * ((s + 1) * t - s) : (t -= 2) * t * ((s + 1) * t + s) + 2) / 2;
  }

  backInOut.overshoot = custom;

  return backInOut;
})(overshoot);


/***/ }),

/***/ "../../../node_modules/d3-ease/src/bounce.js":
/*!***************************************************!*\
  !*** ../../../node_modules/d3-ease/src/bounce.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bounceIn": () => (/* binding */ bounceIn),
/* harmony export */   "bounceOut": () => (/* binding */ bounceOut),
/* harmony export */   "bounceInOut": () => (/* binding */ bounceInOut)
/* harmony export */ });
var b1 = 4 / 11,
    b2 = 6 / 11,
    b3 = 8 / 11,
    b4 = 3 / 4,
    b5 = 9 / 11,
    b6 = 10 / 11,
    b7 = 15 / 16,
    b8 = 21 / 22,
    b9 = 63 / 64,
    b0 = 1 / b1 / b1;

function bounceIn(t) {
  return 1 - bounceOut(1 - t);
}

function bounceOut(t) {
  return (t = +t) < b1 ? b0 * t * t : t < b3 ? b0 * (t -= b2) * t + b4 : t < b6 ? b0 * (t -= b5) * t + b7 : b0 * (t -= b8) * t + b9;
}

function bounceInOut(t) {
  return ((t *= 2) <= 1 ? 1 - bounceOut(1 - t) : bounceOut(t - 1) + 1) / 2;
}


/***/ }),

/***/ "../../../node_modules/d3-ease/src/circle.js":
/*!***************************************************!*\
  !*** ../../../node_modules/d3-ease/src/circle.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "circleIn": () => (/* binding */ circleIn),
/* harmony export */   "circleOut": () => (/* binding */ circleOut),
/* harmony export */   "circleInOut": () => (/* binding */ circleInOut)
/* harmony export */ });
function circleIn(t) {
  return 1 - Math.sqrt(1 - t * t);
}

function circleOut(t) {
  return Math.sqrt(1 - --t * t);
}

function circleInOut(t) {
  return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
}


/***/ }),

/***/ "../../../node_modules/d3-ease/src/cubic.js":
/*!**************************************************!*\
  !*** ../../../node_modules/d3-ease/src/cubic.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cubicIn": () => (/* binding */ cubicIn),
/* harmony export */   "cubicOut": () => (/* binding */ cubicOut),
/* harmony export */   "cubicInOut": () => (/* binding */ cubicInOut)
/* harmony export */ });
function cubicIn(t) {
  return t * t * t;
}

function cubicOut(t) {
  return --t * t * t + 1;
}

function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}


/***/ }),

/***/ "../../../node_modules/d3-ease/src/elastic.js":
/*!****************************************************!*\
  !*** ../../../node_modules/d3-ease/src/elastic.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "elasticIn": () => (/* binding */ elasticIn),
/* harmony export */   "elasticOut": () => (/* binding */ elasticOut),
/* harmony export */   "elasticInOut": () => (/* binding */ elasticInOut)
/* harmony export */ });
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math.js */ "../../../node_modules/d3-ease/src/math.js");


var tau = 2 * Math.PI,
    amplitude = 1,
    period = 0.3;

var elasticIn = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticIn(t) {
    return a * (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.tpmt)(-(--t)) * Math.sin((s - t) / p);
  }

  elasticIn.amplitude = function(a) { return custom(a, p * tau); };
  elasticIn.period = function(p) { return custom(a, p); };

  return elasticIn;
})(amplitude, period);

var elasticOut = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticOut(t) {
    return 1 - a * (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.tpmt)(t = +t) * Math.sin((t + s) / p);
  }

  elasticOut.amplitude = function(a) { return custom(a, p * tau); };
  elasticOut.period = function(p) { return custom(a, p); };

  return elasticOut;
})(amplitude, period);

var elasticInOut = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticInOut(t) {
    return ((t = t * 2 - 1) < 0
        ? a * (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.tpmt)(-t) * Math.sin((s - t) / p)
        : 2 - a * (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.tpmt)(t) * Math.sin((s + t) / p)) / 2;
  }

  elasticInOut.amplitude = function(a) { return custom(a, p * tau); };
  elasticInOut.period = function(p) { return custom(a, p); };

  return elasticInOut;
})(amplitude, period);


/***/ }),

/***/ "../../../node_modules/d3-ease/src/exp.js":
/*!************************************************!*\
  !*** ../../../node_modules/d3-ease/src/exp.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "expIn": () => (/* binding */ expIn),
/* harmony export */   "expOut": () => (/* binding */ expOut),
/* harmony export */   "expInOut": () => (/* binding */ expInOut)
/* harmony export */ });
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math.js */ "../../../node_modules/d3-ease/src/math.js");


function expIn(t) {
  return (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.tpmt)(1 - +t);
}

function expOut(t) {
  return 1 - (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.tpmt)(t);
}

function expInOut(t) {
  return ((t *= 2) <= 1 ? (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.tpmt)(1 - t) : 2 - (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.tpmt)(t - 1)) / 2;
}


/***/ }),

/***/ "../../../node_modules/d3-ease/src/index.js":
/*!**************************************************!*\
  !*** ../../../node_modules/d3-ease/src/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "easeLinear": () => (/* reexport safe */ _linear_js__WEBPACK_IMPORTED_MODULE_0__.linear),
/* harmony export */   "easeQuad": () => (/* reexport safe */ _quad_js__WEBPACK_IMPORTED_MODULE_1__.quadInOut),
/* harmony export */   "easeQuadIn": () => (/* reexport safe */ _quad_js__WEBPACK_IMPORTED_MODULE_1__.quadIn),
/* harmony export */   "easeQuadOut": () => (/* reexport safe */ _quad_js__WEBPACK_IMPORTED_MODULE_1__.quadOut),
/* harmony export */   "easeQuadInOut": () => (/* reexport safe */ _quad_js__WEBPACK_IMPORTED_MODULE_1__.quadInOut),
/* harmony export */   "easeCubic": () => (/* reexport safe */ _cubic_js__WEBPACK_IMPORTED_MODULE_2__.cubicInOut),
/* harmony export */   "easeCubicIn": () => (/* reexport safe */ _cubic_js__WEBPACK_IMPORTED_MODULE_2__.cubicIn),
/* harmony export */   "easeCubicOut": () => (/* reexport safe */ _cubic_js__WEBPACK_IMPORTED_MODULE_2__.cubicOut),
/* harmony export */   "easeCubicInOut": () => (/* reexport safe */ _cubic_js__WEBPACK_IMPORTED_MODULE_2__.cubicInOut),
/* harmony export */   "easePoly": () => (/* reexport safe */ _poly_js__WEBPACK_IMPORTED_MODULE_3__.polyInOut),
/* harmony export */   "easePolyIn": () => (/* reexport safe */ _poly_js__WEBPACK_IMPORTED_MODULE_3__.polyIn),
/* harmony export */   "easePolyOut": () => (/* reexport safe */ _poly_js__WEBPACK_IMPORTED_MODULE_3__.polyOut),
/* harmony export */   "easePolyInOut": () => (/* reexport safe */ _poly_js__WEBPACK_IMPORTED_MODULE_3__.polyInOut),
/* harmony export */   "easeSin": () => (/* reexport safe */ _sin_js__WEBPACK_IMPORTED_MODULE_4__.sinInOut),
/* harmony export */   "easeSinIn": () => (/* reexport safe */ _sin_js__WEBPACK_IMPORTED_MODULE_4__.sinIn),
/* harmony export */   "easeSinOut": () => (/* reexport safe */ _sin_js__WEBPACK_IMPORTED_MODULE_4__.sinOut),
/* harmony export */   "easeSinInOut": () => (/* reexport safe */ _sin_js__WEBPACK_IMPORTED_MODULE_4__.sinInOut),
/* harmony export */   "easeExp": () => (/* reexport safe */ _exp_js__WEBPACK_IMPORTED_MODULE_5__.expInOut),
/* harmony export */   "easeExpIn": () => (/* reexport safe */ _exp_js__WEBPACK_IMPORTED_MODULE_5__.expIn),
/* harmony export */   "easeExpOut": () => (/* reexport safe */ _exp_js__WEBPACK_IMPORTED_MODULE_5__.expOut),
/* harmony export */   "easeExpInOut": () => (/* reexport safe */ _exp_js__WEBPACK_IMPORTED_MODULE_5__.expInOut),
/* harmony export */   "easeCircle": () => (/* reexport safe */ _circle_js__WEBPACK_IMPORTED_MODULE_6__.circleInOut),
/* harmony export */   "easeCircleIn": () => (/* reexport safe */ _circle_js__WEBPACK_IMPORTED_MODULE_6__.circleIn),
/* harmony export */   "easeCircleOut": () => (/* reexport safe */ _circle_js__WEBPACK_IMPORTED_MODULE_6__.circleOut),
/* harmony export */   "easeCircleInOut": () => (/* reexport safe */ _circle_js__WEBPACK_IMPORTED_MODULE_6__.circleInOut),
/* harmony export */   "easeBounce": () => (/* reexport safe */ _bounce_js__WEBPACK_IMPORTED_MODULE_7__.bounceOut),
/* harmony export */   "easeBounceIn": () => (/* reexport safe */ _bounce_js__WEBPACK_IMPORTED_MODULE_7__.bounceIn),
/* harmony export */   "easeBounceOut": () => (/* reexport safe */ _bounce_js__WEBPACK_IMPORTED_MODULE_7__.bounceOut),
/* harmony export */   "easeBounceInOut": () => (/* reexport safe */ _bounce_js__WEBPACK_IMPORTED_MODULE_7__.bounceInOut),
/* harmony export */   "easeBack": () => (/* reexport safe */ _back_js__WEBPACK_IMPORTED_MODULE_8__.backInOut),
/* harmony export */   "easeBackIn": () => (/* reexport safe */ _back_js__WEBPACK_IMPORTED_MODULE_8__.backIn),
/* harmony export */   "easeBackOut": () => (/* reexport safe */ _back_js__WEBPACK_IMPORTED_MODULE_8__.backOut),
/* harmony export */   "easeBackInOut": () => (/* reexport safe */ _back_js__WEBPACK_IMPORTED_MODULE_8__.backInOut),
/* harmony export */   "easeElastic": () => (/* reexport safe */ _elastic_js__WEBPACK_IMPORTED_MODULE_9__.elasticOut),
/* harmony export */   "easeElasticIn": () => (/* reexport safe */ _elastic_js__WEBPACK_IMPORTED_MODULE_9__.elasticIn),
/* harmony export */   "easeElasticOut": () => (/* reexport safe */ _elastic_js__WEBPACK_IMPORTED_MODULE_9__.elasticOut),
/* harmony export */   "easeElasticInOut": () => (/* reexport safe */ _elastic_js__WEBPACK_IMPORTED_MODULE_9__.elasticInOut)
/* harmony export */ });
/* harmony import */ var _linear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linear.js */ "../../../node_modules/d3-ease/src/linear.js");
/* harmony import */ var _quad_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quad.js */ "../../../node_modules/d3-ease/src/quad.js");
/* harmony import */ var _cubic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cubic.js */ "../../../node_modules/d3-ease/src/cubic.js");
/* harmony import */ var _poly_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./poly.js */ "../../../node_modules/d3-ease/src/poly.js");
/* harmony import */ var _sin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sin.js */ "../../../node_modules/d3-ease/src/sin.js");
/* harmony import */ var _exp_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exp.js */ "../../../node_modules/d3-ease/src/exp.js");
/* harmony import */ var _circle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./circle.js */ "../../../node_modules/d3-ease/src/circle.js");
/* harmony import */ var _bounce_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bounce.js */ "../../../node_modules/d3-ease/src/bounce.js");
/* harmony import */ var _back_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./back.js */ "../../../node_modules/d3-ease/src/back.js");
/* harmony import */ var _elastic_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./elastic.js */ "../../../node_modules/d3-ease/src/elastic.js");





















/***/ }),

/***/ "../../../node_modules/d3-ease/src/linear.js":
/*!***************************************************!*\
  !*** ../../../node_modules/d3-ease/src/linear.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "linear": () => (/* binding */ linear)
/* harmony export */ });
function linear(t) {
  return +t;
}


/***/ }),

/***/ "../../../node_modules/d3-ease/src/math.js":
/*!*************************************************!*\
  !*** ../../../node_modules/d3-ease/src/math.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tpmt": () => (/* binding */ tpmt)
/* harmony export */ });
// tpmt is two power minus ten times t scaled to [0,1]
function tpmt(x) {
  return (Math.pow(2, -10 * x) - 0.0009765625) * 1.0009775171065494;
}


/***/ }),

/***/ "../../../node_modules/d3-ease/src/poly.js":
/*!*************************************************!*\
  !*** ../../../node_modules/d3-ease/src/poly.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "polyIn": () => (/* binding */ polyIn),
/* harmony export */   "polyOut": () => (/* binding */ polyOut),
/* harmony export */   "polyInOut": () => (/* binding */ polyInOut)
/* harmony export */ });
var exponent = 3;

var polyIn = (function custom(e) {
  e = +e;

  function polyIn(t) {
    return Math.pow(t, e);
  }

  polyIn.exponent = custom;

  return polyIn;
})(exponent);

var polyOut = (function custom(e) {
  e = +e;

  function polyOut(t) {
    return 1 - Math.pow(1 - t, e);
  }

  polyOut.exponent = custom;

  return polyOut;
})(exponent);

var polyInOut = (function custom(e) {
  e = +e;

  function polyInOut(t) {
    return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
  }

  polyInOut.exponent = custom;

  return polyInOut;
})(exponent);


/***/ }),

/***/ "../../../node_modules/d3-ease/src/quad.js":
/*!*************************************************!*\
  !*** ../../../node_modules/d3-ease/src/quad.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "quadIn": () => (/* binding */ quadIn),
/* harmony export */   "quadOut": () => (/* binding */ quadOut),
/* harmony export */   "quadInOut": () => (/* binding */ quadInOut)
/* harmony export */ });
function quadIn(t) {
  return t * t;
}

function quadOut(t) {
  return t * (2 - t);
}

function quadInOut(t) {
  return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
}


/***/ }),

/***/ "../../../node_modules/d3-ease/src/sin.js":
/*!************************************************!*\
  !*** ../../../node_modules/d3-ease/src/sin.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sinIn": () => (/* binding */ sinIn),
/* harmony export */   "sinOut": () => (/* binding */ sinOut),
/* harmony export */   "sinInOut": () => (/* binding */ sinInOut)
/* harmony export */ });
var pi = Math.PI,
    halfPi = pi / 2;

function sinIn(t) {
  return (+t === 1) ? 1 : 1 - Math.cos(t * halfPi);
}

function sinOut(t) {
  return Math.sin(t * halfPi);
}

function sinInOut(t) {
  return (1 - Math.cos(pi * t)) / 2;
}


/***/ }),

/***/ "../../../node_modules/d3-interpolate/src/array.js":
/*!*********************************************************!*\
  !*** ../../../node_modules/d3-interpolate/src/array.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "genericArray": () => (/* binding */ genericArray)
/* harmony export */ });
/* harmony import */ var _value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./value.js */ "../../../node_modules/d3-interpolate/src/value.js");
/* harmony import */ var _numberArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./numberArray.js */ "../../../node_modules/d3-interpolate/src/numberArray.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {
  return ((0,_numberArray_js__WEBPACK_IMPORTED_MODULE_0__.isNumberArray)(b) ? _numberArray_js__WEBPACK_IMPORTED_MODULE_0__["default"] : genericArray)(a, b);
}

function genericArray(a, b) {
  var nb = b ? b.length : 0,
      na = a ? Math.min(nb, a.length) : 0,
      x = new Array(na),
      c = new Array(nb),
      i;

  for (i = 0; i < na; ++i) x[i] = (0,_value_js__WEBPACK_IMPORTED_MODULE_1__["default"])(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];

  return function(t) {
    for (i = 0; i < na; ++i) c[i] = x[i](t);
    return c;
  };
}


/***/ }),

/***/ "../../../node_modules/d3-interpolate/src/basis.js":
/*!*********************************************************!*\
  !*** ../../../node_modules/d3-interpolate/src/basis.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "basis": () => (/* binding */ basis),
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1, t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0
      + (4 - 6 * t2 + 3 * t3) * v1
      + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2
      + t3 * v3) / 6;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? (t = 0) : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
        v1 = values[i],
        v2 = values[i + 1],
        v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
        v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}


/***/ }),

/***/ "../../../node_modules/d3-interpolate/src/basisClosed.js":
/*!***************************************************************!*\
  !*** ../../../node_modules/d3-interpolate/src/basisClosed.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _basis_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basis.js */ "../../../node_modules/d3-interpolate/src/basis.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(values) {
  var n = values.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),
        v0 = values[(i + n - 1) % n],
        v1 = values[i % n],
        v2 = values[(i + 1) % n],
        v3 = values[(i + 2) % n];
    return (0,_basis_js__WEBPACK_IMPORTED_MODULE_0__.basis)((t - i / n) * n, v0, v1, v2, v3);
  };
}


/***/ }),

/***/ "../../../node_modules/d3-interpolate/src/color.js":
/*!*********************************************************!*\
  !*** ../../../node_modules/d3-interpolate/src/color.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hue": () => (/* binding */ hue),
/* harmony export */   "gamma": () => (/* binding */ gamma),
/* harmony export */   "default": () => (/* binding */ nogamma)
/* harmony export */ });
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant.js */ "../../../node_modules/d3-interpolate/src/constant.js");


function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}

function hue(a, b) {
  var d = b - a;
  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(isNaN(a) ? b : a);
}

function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(isNaN(a) ? b : a);
  };
}

function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(isNaN(a) ? b : a);
}


/***/ }),

/***/ "../../../node_modules/d3-interpolate/src/constant.js":
/*!************************************************************!*\
  !*** ../../../node_modules/d3-interpolate/src/constant.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x) {
  return function() {
    return x;
  };
}


/***/ }),

/***/ "../../../node_modules/d3-interpolate/src/date.js":
/*!********************************************************!*\
  !*** ../../../node_modules/d3-interpolate/src/date.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {
  var d = new Date;
  return a = +a, b = +b, function(t) {
    return d.setTime(a * (1 - t) + b * t), d;
  };
}


/***/ }),

/***/ "../../../node_modules/d3-interpolate/src/number.js":
/*!**********************************************************!*\
  !*** ../../../node_modules/d3-interpolate/src/number.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {
  return a = +a, b = +b, function(t) {
    return a * (1 - t) + b * t;
  };
}


/***/ }),

/***/ "../../../node_modules/d3-interpolate/src/numberArray.js":
/*!***************************************************************!*\
  !*** ../../../node_modules/d3-interpolate/src/numberArray.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "isNumberArray": () => (/* binding */ isNumberArray)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {
  if (!b) b = [];
  var n = a ? Math.min(b.length, a.length) : 0,
      c = b.slice(),
      i;
  return function(t) {
    for (i = 0; i < n; ++i) c[i] = a[i] * (1 - t) + b[i] * t;
    return c;
  };
}

function isNumberArray(x) {
  return ArrayBuffer.isView(x) && !(x instanceof DataView);
}


/***/ }),

/***/ "../../../node_modules/d3-interpolate/src/object.js":
/*!**********************************************************!*\
  !*** ../../../node_modules/d3-interpolate/src/object.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./value.js */ "../../../node_modules/d3-interpolate/src/value.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {
  var i = {},
      c = {},
      k;

  if (a === null || typeof a !== "object") a = {};
  if (b === null || typeof b !== "object") b = {};

  for (k in b) {
    if (k in a) {
      i[k] = (0,_value_js__WEBPACK_IMPORTED_MODULE_0__["default"])(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }

  return function(t) {
    for (k in i) c[k] = i[k](t);
    return c;
  };
}


/***/ }),

/***/ "../../../node_modules/d3-interpolate/src/rgb.js":
/*!*******************************************************!*\
  !*** ../../../node_modules/d3-interpolate/src/rgb.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "rgbBasis": () => (/* binding */ rgbBasis),
/* harmony export */   "rgbBasisClosed": () => (/* binding */ rgbBasisClosed)
/* harmony export */ });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-color */ "../../../node_modules/d3-color/src/color.js");
/* harmony import */ var _basis_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basis.js */ "../../../node_modules/d3-interpolate/src/basis.js");
/* harmony import */ var _basisClosed_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basisClosed.js */ "../../../node_modules/d3-interpolate/src/basisClosed.js");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color.js */ "../../../node_modules/d3-interpolate/src/color.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function rgbGamma(y) {
  var color = (0,_color_js__WEBPACK_IMPORTED_MODULE_0__.gamma)(y);

  function rgb(start, end) {
    var r = color((start = (0,d3_color__WEBPACK_IMPORTED_MODULE_1__.rgb)(start)).r, (end = (0,d3_color__WEBPACK_IMPORTED_MODULE_1__.rgb)(end)).r),
        g = color(start.g, end.g),
        b = color(start.b, end.b),
        opacity = (0,_color_js__WEBPACK_IMPORTED_MODULE_0__["default"])(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb.gamma = rgbGamma;

  return rgb;
})(1));

function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length,
        r = new Array(n),
        g = new Array(n),
        b = new Array(n),
        i, color;
    for (i = 0; i < n; ++i) {
      color = (0,d3_color__WEBPACK_IMPORTED_MODULE_1__.rgb)(colors[i]);
      r[i] = color.r || 0;
      g[i] = color.g || 0;
      b[i] = color.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color.opacity = 1;
    return function(t) {
      color.r = r(t);
      color.g = g(t);
      color.b = b(t);
      return color + "";
    };
  };
}

var rgbBasis = rgbSpline(_basis_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
var rgbBasisClosed = rgbSpline(_basisClosed_js__WEBPACK_IMPORTED_MODULE_3__["default"]);


/***/ }),

/***/ "../../../node_modules/d3-interpolate/src/string.js":
/*!**********************************************************!*\
  !*** ../../../node_modules/d3-interpolate/src/string.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number.js */ "../../../node_modules/d3-interpolate/src/number.js");


var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    reB = new RegExp(reA.source, "g");

function zero(b) {
  return function() {
    return b;
  };
}

function one(b) {
  return function(t) {
    return b(t) + "";
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
      am, // current match in a
      bm, // current match in b
      bs, // string preceding current number in b, if any
      i = -1, // index in s
      s = [], // string constants and placeholders
      q = []; // number interpolators

  // Coerce inputs to strings.
  a = a + "", b = b + "";

  // Interpolate pairs of numbers in a & b.
  while ((am = reA.exec(a))
      && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) { // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else { // interpolate non-matching numbers
      s[++i] = null;
      q.push({i: i, x: (0,_number_js__WEBPACK_IMPORTED_MODULE_0__["default"])(am, bm)});
    }
    bi = reB.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2 ? (q[0]
      ? one(q[0].x)
      : zero(b))
      : (b = q.length, function(t) {
          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
          return s.join("");
        });
}


/***/ }),

/***/ "../../../node_modules/d3-interpolate/src/value.js":
/*!*********************************************************!*\
  !*** ../../../node_modules/d3-interpolate/src/value.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-color */ "../../../node_modules/d3-color/src/color.js");
/* harmony import */ var _rgb_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rgb.js */ "../../../node_modules/d3-interpolate/src/rgb.js");
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./array.js */ "../../../node_modules/d3-interpolate/src/array.js");
/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./date.js */ "../../../node_modules/d3-interpolate/src/date.js");
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./number.js */ "../../../node_modules/d3-interpolate/src/number.js");
/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./object.js */ "../../../node_modules/d3-interpolate/src/object.js");
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./string.js */ "../../../node_modules/d3-interpolate/src/string.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant.js */ "../../../node_modules/d3-interpolate/src/constant.js");
/* harmony import */ var _numberArray_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./numberArray.js */ "../../../node_modules/d3-interpolate/src/numberArray.js");










/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(b)
      : (t === "number" ? _number_js__WEBPACK_IMPORTED_MODULE_1__["default"]
      : t === "string" ? ((c = (0,d3_color__WEBPACK_IMPORTED_MODULE_2__["default"])(b)) ? (b = c, _rgb_js__WEBPACK_IMPORTED_MODULE_3__["default"]) : _string_js__WEBPACK_IMPORTED_MODULE_4__["default"])
      : b instanceof d3_color__WEBPACK_IMPORTED_MODULE_2__["default"] ? _rgb_js__WEBPACK_IMPORTED_MODULE_3__["default"]
      : b instanceof Date ? _date_js__WEBPACK_IMPORTED_MODULE_5__["default"]
      : (0,_numberArray_js__WEBPACK_IMPORTED_MODULE_6__.isNumberArray)(b) ? _numberArray_js__WEBPACK_IMPORTED_MODULE_6__["default"]
      : Array.isArray(b) ? _array_js__WEBPACK_IMPORTED_MODULE_7__.genericArray
      : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? _object_js__WEBPACK_IMPORTED_MODULE_8__["default"]
      : _number_js__WEBPACK_IMPORTED_MODULE_1__["default"])(a, b);
}


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

/***/ "../../../node_modules/lodash/_arrayAggregator.js":
/*!********************************************************!*\
  !*** ../../../node_modules/lodash/_arrayAggregator.js ***!
  \********************************************************/
/***/ ((module) => {

/**
 * A specialized version of `baseAggregator` for arrays.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */
function arrayAggregator(array, setter, iteratee, accumulator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    var value = array[index];
    setter(accumulator, value, iteratee(value), array);
  }
  return accumulator;
}

module.exports = arrayAggregator;


/***/ }),

/***/ "../../../node_modules/lodash/_arrayIncludes.js":
/*!******************************************************!*\
  !*** ../../../node_modules/lodash/_arrayIncludes.js ***!
  \******************************************************/
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

/***/ "../../../node_modules/lodash/_arrayIncludesWith.js":
/*!**********************************************************!*\
  !*** ../../../node_modules/lodash/_arrayIncludesWith.js ***!
  \**********************************************************/
/***/ ((module) => {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


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

/***/ "../../../node_modules/lodash/_baseAggregator.js":
/*!*******************************************************!*\
  !*** ../../../node_modules/lodash/_baseAggregator.js ***!
  \*******************************************************/
/***/ ((module) => {

/**
 * A specialized version of `baseAggregator` for arrays.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */
function arrayAggregator(array, setter, iteratee, accumulator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    var value = array[index];
    setter(accumulator, value, iteratee(value), array);
  }
  return accumulator;
}

module.exports = arrayAggregator;


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

/***/ "../../../node_modules/lodash/_baseDifference.js":
/*!*******************************************************!*\
  !*** ../../../node_modules/lodash/_baseDifference.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var SetCache = __webpack_require__(/*! ./_SetCache */ "../../../node_modules/lodash/_SetCache.js"),
    arrayIncludes = __webpack_require__(/*! ./_arrayIncludes */ "../../../node_modules/lodash/_arrayIncludes.js"),
    arrayIncludesWith = __webpack_require__(/*! ./_arrayIncludesWith */ "../../../node_modules/lodash/_arrayIncludesWith.js"),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ "../../../node_modules/lodash/_arrayMap.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "../../../node_modules/lodash/_baseUnary.js"),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ "../../../node_modules/lodash/_cacheHas.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of methods like `_.difference` without support
 * for excluding multiple arrays or iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */
function baseDifference(array, values, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      isCommon = true,
      length = array.length,
      result = [],
      valuesLength = values.length;

  if (!length) {
    return result;
  }
  if (iteratee) {
    values = arrayMap(values, baseUnary(iteratee));
  }
  if (comparator) {
    includes = arrayIncludesWith;
    isCommon = false;
  }
  else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas;
    isCommon = false;
    values = new SetCache(values);
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee == null ? value : iteratee(value);

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var valuesIndex = valuesLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    }
    else if (!includes(values, computed, comparator)) {
      result.push(value);
    }
  }
  return result;
}

module.exports = baseDifference;


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

/***/ "../../../node_modules/lodash/_baseMap.js":
/*!************************************************!*\
  !*** ../../../node_modules/lodash/_baseMap.js ***!
  \************************************************/
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

/***/ "../../../node_modules/lodash/_baseOrderBy.js":
/*!****************************************************!*\
  !*** ../../../node_modules/lodash/_baseOrderBy.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayMap = __webpack_require__(/*! ./_arrayMap */ "../../../node_modules/lodash/_arrayMap.js"),
    baseGet = __webpack_require__(/*! ./_baseGet */ "../../../node_modules/lodash/_baseGet.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "../../../node_modules/lodash/_baseIteratee.js"),
    baseMap = __webpack_require__(/*! ./_baseMap */ "../../../node_modules/lodash/_baseMap.js"),
    baseSortBy = __webpack_require__(/*! ./_baseSortBy */ "../../../node_modules/lodash/_baseSortBy.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "../../../node_modules/lodash/_baseUnary.js"),
    compareMultiple = __webpack_require__(/*! ./_compareMultiple */ "../../../node_modules/lodash/_compareMultiple.js"),
    identity = __webpack_require__(/*! ./identity */ "../../../node_modules/lodash/identity.js"),
    isArray = __webpack_require__(/*! ./isArray */ "../../../node_modules/lodash/isArray.js");

/**
 * The base implementation of `_.orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */
function baseOrderBy(collection, iteratees, orders) {
  if (iteratees.length) {
    iteratees = arrayMap(iteratees, function(iteratee) {
      if (isArray(iteratee)) {
        return function(value) {
          return baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
        }
      }
      return iteratee;
    });
  } else {
    iteratees = [identity];
  }

  var index = -1;
  iteratees = arrayMap(iteratees, baseUnary(baseIteratee));

  var result = baseMap(collection, function(value, key, collection) {
    var criteria = arrayMap(iteratees, function(iteratee) {
      return iteratee(value);
    });
    return { 'criteria': criteria, 'index': ++index, 'value': value };
  });

  return baseSortBy(result, function(object, other) {
    return compareMultiple(object, other, orders);
  });
}

module.exports = baseOrderBy;


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

/***/ "../../../node_modules/lodash/_baseRange.js":
/*!**************************************************!*\
  !*** ../../../node_modules/lodash/_baseRange.js ***!
  \**************************************************/
/***/ ((module) => {

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeCeil = Math.ceil,
    nativeMax = Math.max;

/**
 * The base implementation of `_.range` and `_.rangeRight` which doesn't
 * coerce arguments.
 *
 * @private
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @param {number} step The value to increment or decrement by.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Array} Returns the range of numbers.
 */
function baseRange(start, end, step, fromRight) {
  var index = -1,
      length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
      result = Array(length);

  while (length--) {
    result[fromRight ? length : ++index] = start;
    start += step;
  }
  return result;
}

module.exports = baseRange;


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

/***/ "../../../node_modules/lodash/_baseSortBy.js":
/*!***************************************************!*\
  !*** ../../../node_modules/lodash/_baseSortBy.js ***!
  \***************************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
 *
 * @private
 * @param {Array} array The array to sort.
 * @param {Function} comparer The function to define sort order.
 * @returns {Array} Returns `array`.
 */
function baseSortBy(array, comparer) {
  var length = array.length;

  array.sort(comparer);
  while (length--) {
    array[length] = array[length].value;
  }
  return array;
}

module.exports = baseSortBy;


/***/ }),

/***/ "../../../node_modules/lodash/_baseSum.js":
/*!************************************************!*\
  !*** ../../../node_modules/lodash/_baseSum.js ***!
  \************************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.sum` and `_.sumBy` without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {number} Returns the sum.
 */
function baseSum(array, iteratee) {
  var result,
      index = -1,
      length = array.length;

  while (++index < length) {
    var current = iteratee(array[index]);
    if (current !== undefined) {
      result = result === undefined ? current : (result + current);
    }
  }
  return result;
}

module.exports = baseSum;


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

/***/ "../../../node_modules/lodash/_baseUniq.js":
/*!*************************************************!*\
  !*** ../../../node_modules/lodash/_baseUniq.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var SetCache = __webpack_require__(/*! ./_SetCache */ "../../../node_modules/lodash/_SetCache.js"),
    arrayIncludes = __webpack_require__(/*! ./_arrayIncludes */ "../../../node_modules/lodash/_arrayIncludes.js"),
    arrayIncludesWith = __webpack_require__(/*! ./_arrayIncludesWith */ "../../../node_modules/lodash/_arrayIncludesWith.js"),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ "../../../node_modules/lodash/_cacheHas.js"),
    createSet = __webpack_require__(/*! ./_createSet */ "../../../node_modules/lodash/_createSet.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "../../../node_modules/lodash/_setToArray.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseUniq;


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

/***/ "../../../node_modules/lodash/_compareAscending.js":
/*!*********************************************************!*\
  !*** ../../../node_modules/lodash/_compareAscending.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isSymbol = __webpack_require__(/*! ./isSymbol */ "../../../node_modules/lodash/isSymbol.js");

/**
 * Compares values to sort them in ascending order.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */
function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== undefined,
        valIsNull = value === null,
        valIsReflexive = value === value,
        valIsSymbol = isSymbol(value);

    var othIsDefined = other !== undefined,
        othIsNull = other === null,
        othIsReflexive = other === other,
        othIsSymbol = isSymbol(other);

    if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
        (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
        (valIsNull && othIsDefined && othIsReflexive) ||
        (!valIsDefined && othIsReflexive) ||
        !valIsReflexive) {
      return 1;
    }
    if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
        (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
        (othIsNull && valIsDefined && valIsReflexive) ||
        (!othIsDefined && valIsReflexive) ||
        !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}

module.exports = compareAscending;


/***/ }),

/***/ "../../../node_modules/lodash/_compareMultiple.js":
/*!********************************************************!*\
  !*** ../../../node_modules/lodash/_compareMultiple.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var compareAscending = __webpack_require__(/*! ./_compareAscending */ "../../../node_modules/lodash/_compareAscending.js");

/**
 * Used by `_.orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 *
 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
 * specify an order of "desc" for descending or "asc" for ascending sort order
 * of corresponding values.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {boolean[]|string[]} orders The order to sort by for each property.
 * @returns {number} Returns the sort order indicator for `object`.
 */
function compareMultiple(object, other, orders) {
  var index = -1,
      objCriteria = object.criteria,
      othCriteria = other.criteria,
      length = objCriteria.length,
      ordersLength = orders.length;

  while (++index < length) {
    var result = compareAscending(objCriteria[index], othCriteria[index]);
    if (result) {
      if (index >= ordersLength) {
        return result;
      }
      var order = orders[index];
      return result * (order == 'desc' ? -1 : 1);
    }
  }
  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
  // that causes it, under certain circumstances, to provide the same value for
  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
  // for more details.
  //
  // This also ensures a stable sort in V8 and other engines.
  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
  return object.index - other.index;
}

module.exports = compareMultiple;


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

/***/ "../../../node_modules/lodash/_createAggregator.js":
/*!*********************************************************!*\
  !*** ../../../node_modules/lodash/_createAggregator.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayAggregator = __webpack_require__(/*! ./_arrayAggregator */ "../../../node_modules/lodash/_arrayAggregator.js"),
    baseAggregator = __webpack_require__(/*! ./_baseAggregator */ "../../../node_modules/lodash/_baseAggregator.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "../../../node_modules/lodash/_baseIteratee.js"),
    isArray = __webpack_require__(/*! ./isArray */ "../../../node_modules/lodash/isArray.js");

/**
 * Creates a function like `_.groupBy`.
 *
 * @private
 * @param {Function} setter The function to set accumulator values.
 * @param {Function} [initializer] The accumulator object initializer.
 * @returns {Function} Returns the new aggregator function.
 */
function createAggregator(setter, initializer) {
  return function(collection, iteratee) {
    var func = isArray(collection) ? arrayAggregator : baseAggregator,
        accumulator = initializer ? initializer() : {};

    return func(collection, setter, baseIteratee(iteratee, 2), accumulator);
  };
}

module.exports = createAggregator;


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

/***/ "../../../node_modules/lodash/_createRange.js":
/*!****************************************************!*\
  !*** ../../../node_modules/lodash/_createRange.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseRange = __webpack_require__(/*! ./_baseRange */ "../../../node_modules/lodash/_baseRange.js"),
    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ "../../../node_modules/lodash/_isIterateeCall.js"),
    toFinite = __webpack_require__(/*! ./toFinite */ "../../../node_modules/lodash/toFinite.js");

/**
 * Creates a `_.range` or `_.rangeRight` function.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new range function.
 */
function createRange(fromRight) {
  return function(start, end, step) {
    if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
      end = step = undefined;
    }
    // Ensure the sign of `-0` is preserved.
    start = toFinite(start);
    if (end === undefined) {
      end = start;
      start = 0;
    } else {
      end = toFinite(end);
    }
    step = step === undefined ? (start < end ? 1 : -1) : toFinite(step);
    return baseRange(start, end, step, fromRight);
  };
}

module.exports = createRange;


/***/ }),

/***/ "../../../node_modules/lodash/_createSet.js":
/*!**************************************************!*\
  !*** ../../../node_modules/lodash/_createSet.js ***!
  \**************************************************/
/***/ ((module) => {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


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

/***/ "../../../node_modules/lodash/_getAllKeysIn.js":
/*!*****************************************************!*\
  !*** ../../../node_modules/lodash/_getAllKeysIn.js ***!
  \*****************************************************/
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

/***/ "../../../node_modules/lodash/_getPrototype.js":
/*!*****************************************************!*\
  !*** ../../../node_modules/lodash/_getPrototype.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(/*! ./_overArg */ "../../../node_modules/lodash/_overArg.js");

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


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

/***/ "../../../node_modules/lodash/_setToArray.js":
/*!***************************************************!*\
  !*** ../../../node_modules/lodash/_setToArray.js ***!
  \***************************************************/
/***/ ((module) => {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


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

/***/ "../../../node_modules/lodash/difference.js":
/*!**************************************************!*\
  !*** ../../../node_modules/lodash/difference.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseDifference = __webpack_require__(/*! ./_baseDifference */ "../../../node_modules/lodash/_baseDifference.js"),
    baseFlatten = __webpack_require__(/*! ./_baseFlatten */ "../../../node_modules/lodash/_baseFlatten.js"),
    baseRest = __webpack_require__(/*! ./_baseRest */ "../../../node_modules/lodash/_baseRest.js"),
    isArrayLikeObject = __webpack_require__(/*! ./isArrayLikeObject */ "../../../node_modules/lodash/isArrayLikeObject.js");

/**
 * Creates an array of `array` values not included in the other given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * **Note:** Unlike `_.pullAll`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.without, _.xor
 * @example
 *
 * _.difference([2, 1], [2, 3]);
 * // => [1]
 */
var difference = baseRest(function(array, values) {
  return isArrayLikeObject(array)
    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
    : [];
});

module.exports = difference;


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

/***/ "../../../node_modules/lodash/groupBy.js":
/*!***********************************************!*\
  !*** ../../../node_modules/lodash/groupBy.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "../../../node_modules/lodash/_baseAssignValue.js"),
    createAggregator = __webpack_require__(/*! ./_createAggregator */ "../../../node_modules/lodash/_createAggregator.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an object composed of keys generated from the results of running
 * each element of `collection` thru `iteratee`. The order of grouped values
 * is determined by the order they occur in `collection`. The corresponding
 * value of each key is an array of elements responsible for generating the
 * key. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 * @example
 *
 * _.groupBy([6.1, 4.2, 6.3], Math.floor);
 * // => { '4': [4.2], '6': [6.1, 6.3] }
 *
 * // The `_.property` iteratee shorthand.
 * _.groupBy(['one', 'two', 'three'], 'length');
 * // => { '3': ['one', 'two'], '5': ['three'] }
 */
var groupBy = createAggregator(function(result, value, key) {
  if (hasOwnProperty.call(result, key)) {
    result[key].push(value);
  } else {
    baseAssignValue(result, key, [value]);
  }
});

module.exports = groupBy;


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

/***/ "../../../node_modules/lodash/includes.js":
/*!************************************************!*\
  !*** ../../../node_modules/lodash/includes.js ***!
  \************************************************/
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

/***/ "../../../node_modules/lodash/isArrayLikeObject.js":
/*!*********************************************************!*\
  !*** ../../../node_modules/lodash/isArrayLikeObject.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArrayLike = __webpack_require__(/*! ./isArrayLike */ "../../../node_modules/lodash/isArrayLike.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../../../node_modules/lodash/isObjectLike.js");

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


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

/***/ "../../../node_modules/lodash/isNil.js":
/*!*********************************************!*\
  !*** ../../../node_modules/lodash/isNil.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 * @example
 *
 * _.isNil(null);
 * // => true
 *
 * _.isNil(void 0);
 * // => true
 *
 * _.isNil(NaN);
 * // => false
 */
function isNil(value) {
  return value == null;
}

module.exports = isNil;


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

/***/ "../../../node_modules/lodash/isPlainObject.js":
/*!*****************************************************!*\
  !*** ../../../node_modules/lodash/isPlainObject.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../../../node_modules/lodash/_baseGetTag.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "../../../node_modules/lodash/_getPrototype.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../../../node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


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

/***/ "../../../node_modules/lodash/negate.js":
/*!**********************************************!*\
  !*** ../../../node_modules/lodash/negate.js ***!
  \**********************************************/
/***/ ((module) => {

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that negates the result of the predicate `func`. The
 * `func` predicate is invoked with the `this` binding and arguments of the
 * created function.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {Function} predicate The predicate to negate.
 * @returns {Function} Returns the new negated function.
 * @example
 *
 * function isEven(n) {
 *   return n % 2 == 0;
 * }
 *
 * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
 * // => [1, 3, 5]
 */
function negate(predicate) {
  if (typeof predicate != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  return function() {
    var args = arguments;
    switch (args.length) {
      case 0: return !predicate.call(this);
      case 1: return !predicate.call(this, args[0]);
      case 2: return !predicate.call(this, args[0], args[1]);
      case 3: return !predicate.call(this, args[0], args[1], args[2]);
    }
    return !predicate.apply(this, args);
  };
}

module.exports = negate;


/***/ }),

/***/ "../../../node_modules/lodash/omitBy.js":
/*!**********************************************!*\
  !*** ../../../node_modules/lodash/omitBy.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "../../../node_modules/lodash/_baseIteratee.js"),
    negate = __webpack_require__(/*! ./negate */ "../../../node_modules/lodash/negate.js"),
    pickBy = __webpack_require__(/*! ./pickBy */ "../../../node_modules/lodash/pickBy.js");

/**
 * The opposite of `_.pickBy`; this method creates an object composed of
 * the own and inherited enumerable string keyed properties of `object` that
 * `predicate` doesn't return truthy for. The predicate is invoked with two
 * arguments: (value, key).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The source object.
 * @param {Function} [predicate=_.identity] The function invoked per property.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omitBy(object, _.isNumber);
 * // => { 'b': '2' }
 */
function omitBy(object, predicate) {
  return pickBy(object, negate(baseIteratee(predicate)));
}

module.exports = omitBy;


/***/ }),

/***/ "../../../node_modules/lodash/orderBy.js":
/*!***********************************************!*\
  !*** ../../../node_modules/lodash/orderBy.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseOrderBy = __webpack_require__(/*! ./_baseOrderBy */ "../../../node_modules/lodash/_baseOrderBy.js"),
    isArray = __webpack_require__(/*! ./isArray */ "../../../node_modules/lodash/isArray.js");

/**
 * This method is like `_.sortBy` except that it allows specifying the sort
 * orders of the iteratees to sort by. If `orders` is unspecified, all values
 * are sorted in ascending order. Otherwise, specify an order of "desc" for
 * descending or "asc" for ascending sort order of corresponding values.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @param {string[]} [orders] The sort orders of `iteratees`.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 34 },
 *   { 'user': 'fred',   'age': 40 },
 *   { 'user': 'barney', 'age': 36 }
 * ];
 *
 * // Sort by `user` in ascending order and by `age` in descending order.
 * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
 */
function orderBy(collection, iteratees, orders, guard) {
  if (collection == null) {
    return [];
  }
  if (!isArray(iteratees)) {
    iteratees = iteratees == null ? [] : [iteratees];
  }
  orders = guard ? undefined : orders;
  if (!isArray(orders)) {
    orders = orders == null ? [] : [orders];
  }
  return baseOrderBy(collection, iteratees, orders);
}

module.exports = orderBy;


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

/***/ "../../../node_modules/lodash/pickBy.js":
/*!**********************************************!*\
  !*** ../../../node_modules/lodash/pickBy.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayMap = __webpack_require__(/*! ./_arrayMap */ "../../../node_modules/lodash/_arrayMap.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "../../../node_modules/lodash/_baseIteratee.js"),
    basePickBy = __webpack_require__(/*! ./_basePickBy */ "../../../node_modules/lodash/_basePickBy.js"),
    getAllKeysIn = __webpack_require__(/*! ./_getAllKeysIn */ "../../../node_modules/lodash/_getAllKeysIn.js");

/**
 * Creates an object composed of the `object` properties `predicate` returns
 * truthy for. The predicate is invoked with two arguments: (value, key).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The source object.
 * @param {Function} [predicate=_.identity] The function invoked per property.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pickBy(object, _.isNumber);
 * // => { 'a': 1, 'c': 3 }
 */
function pickBy(object, predicate) {
  if (object == null) {
    return {};
  }
  var props = arrayMap(getAllKeysIn(object), function(prop) {
    return [prop];
  });
  predicate = baseIteratee(predicate);
  return basePickBy(object, props, function(value, path) {
    return predicate(value, path[0]);
  });
}

module.exports = pickBy;


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

/***/ "../../../node_modules/lodash/range.js":
/*!*********************************************!*\
  !*** ../../../node_modules/lodash/range.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var createRange = __webpack_require__(/*! ./_createRange */ "../../../node_modules/lodash/_createRange.js");

/**
 * Creates an array of numbers (positive and/or negative) progressing from
 * `start` up to, but not including, `end`. A step of `-1` is used if a negative
 * `start` is specified without an `end` or `step`. If `end` is not specified,
 * it's set to `start` with `start` then set to `0`.
 *
 * **Note:** JavaScript follows the IEEE-754 standard for resolving
 * floating-point values which can produce unexpected results.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @param {number} [step=1] The value to increment or decrement by.
 * @returns {Array} Returns the range of numbers.
 * @see _.inRange, _.rangeRight
 * @example
 *
 * _.range(4);
 * // => [0, 1, 2, 3]
 *
 * _.range(-4);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 5);
 * // => [1, 2, 3, 4]
 *
 * _.range(0, 20, 5);
 * // => [0, 5, 10, 15]
 *
 * _.range(0, -4, -1);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 4, 0);
 * // => [1, 1, 1]
 *
 * _.range(0);
 * // => []
 */
var range = createRange();

module.exports = range;


/***/ }),

/***/ "../../../node_modules/lodash/sum.js":
/*!*******************************************!*\
  !*** ../../../node_modules/lodash/sum.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseSum = __webpack_require__(/*! ./_baseSum */ "../../../node_modules/lodash/_baseSum.js"),
    identity = __webpack_require__(/*! ./identity */ "../../../node_modules/lodash/identity.js");

/**
 * Computes the sum of the values in `array`.
 *
 * @static
 * @memberOf _
 * @since 3.4.0
 * @category Math
 * @param {Array} array The array to iterate over.
 * @returns {number} Returns the sum.
 * @example
 *
 * _.sum([4, 2, 8, 6]);
 * // => 20
 */
function sum(array) {
  return (array && array.length)
    ? baseSum(array, identity)
    : 0;
}

module.exports = sum;


/***/ }),

/***/ "../../../node_modules/lodash/toFinite.js":
/*!************************************************!*\
  !*** ../../../node_modules/lodash/toFinite.js ***!
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

/***/ "../../../node_modules/lodash/uniq.js":
/*!********************************************!*\
  !*** ../../../node_modules/lodash/uniq.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseUniq = __webpack_require__(/*! ./_baseUniq */ "../../../node_modules/lodash/_baseUniq.js");

/**
 * Creates a duplicate-free version of an array, using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons, in which only the first occurrence of each element
 * is kept. The order of result values is determined by the order they occur
 * in the array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniq([2, 1, 2]);
 * // => [2, 1]
 */
function uniq(array) {
  return (array && array.length) ? baseUniq(array) : [];
}

module.exports = uniq;


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

/***/ "../../../node_modules/lodash/without.js":
/*!***********************************************!*\
  !*** ../../../node_modules/lodash/without.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseDifference = __webpack_require__(/*! ./_baseDifference */ "../../../node_modules/lodash/_baseDifference.js"),
    baseRest = __webpack_require__(/*! ./_baseRest */ "../../../node_modules/lodash/_baseRest.js"),
    isArrayLikeObject = __webpack_require__(/*! ./isArrayLikeObject */ "../../../node_modules/lodash/isArrayLikeObject.js");

/**
 * Creates an array excluding all given values using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * **Note:** Unlike `_.pull`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...*} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.difference, _.xor
 * @example
 *
 * _.without([2, 1, 2, 3], 1, 2);
 * // => [3]
 */
var without = baseRest(function(array, values) {
  return isArrayLikeObject(array)
    ? baseDifference(array, values)
    : [];
});

module.exports = without;


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

/***/ "../../../node_modules/react-fast-compare/index.js":
/*!*********************************************************!*\
  !*** ../../../node_modules/react-fast-compare/index.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


var isArray = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;
var hasElementType = typeof Element !== 'undefined';

function equal(a, b) {
  // fast-deep-equal index.js 2.0.1
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    var arrA = isArray(a)
      , arrB = isArray(b)
      , i
      , length
      , key;

    if (arrA && arrB) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    if (arrA != arrB) return false;

    var dateA = a instanceof Date
      , dateB = b instanceof Date;
    if (dateA != dateB) return false;
    if (dateA && dateB) return a.getTime() == b.getTime();

    var regexpA = a instanceof RegExp
      , regexpB = b instanceof RegExp;
    if (regexpA != regexpB) return false;
    if (regexpA && regexpB) return a.toString() == b.toString();

    var keys = keyList(a);
    length = keys.length;

    if (length !== keyList(b).length)
      return false;

    for (i = length; i-- !== 0;)
      if (!hasProp.call(b, keys[i])) return false;
    // end fast-deep-equal

    // start react-fast-compare
    // custom handling for DOM elements
    if (hasElementType && a instanceof Element && b instanceof Element)
      return a === b;

    // custom handling for React
    for (i = length; i-- !== 0;) {
      key = keys[i];
      if (key === '_owner' && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner.
        //  _owner contains circular references
        // and is not needed when comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of a react element
        continue;
      } else {
        // all other properties should be traversed as usual
        if (!equal(a[key], b[key])) return false;
      }
    }
    // end react-fast-compare

    // fast-deep-equal index.js 2.0.1
    return true;
  }

  return a !== a && b !== b;
}
// end fast-deep-equal

module.exports = function exportedEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if ((error.message && error.message.match(/stack|recursion/i)) || (error.number === -2146828260)) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('Warning: react-fast-compare does not handle circular references.', error.name, error.message);
      return false;
    }
    // some other error. we should definitely know about these
    throw error;
  }
};


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

/***/ "../../victory-core/es/victory-animation/util.js":
/*!*******************************************************!*\
  !*** ../../victory-core/es/victory-animation/util.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isInterpolatable": () => (/* binding */ isInterpolatable),
/* harmony export */   "interpolateImmediate": () => (/* binding */ interpolateImmediate),
/* harmony export */   "interpolateFunction": () => (/* binding */ interpolateFunction),
/* harmony export */   "interpolateObject": () => (/* binding */ interpolateObject),
/* harmony export */   "interpolateString": () => (/* binding */ interpolateString),
/* harmony export */   "victoryInterpolator": () => (/* binding */ victoryInterpolator)
/* harmony export */ });
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/orderBy */ "../../../node_modules/lodash/orderBy.js");
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_orderBy__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isPlainObject */ "../../../node_modules/lodash/isPlainObject.js");
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-interpolate */ "../../../node_modules/d3-interpolate/src/value.js");



var isInterpolatable = function (obj) {
  // d3 turns null into 0 and undefined into NaN, which we don't want.
  if (obj !== null) {
    switch (typeof obj) {
      case "undefined":
        return false;

      case "number":
        // The standard `isNaN` is fine in this case since we already know the
        // type is number.
        return !isNaN(obj) && obj !== Number.POSITIVE_INFINITY && obj !== Number.NEGATIVE_INFINITY;

      case "string":
        // d3 might not *actually* be able to interpolate the string, but it
        // won't cause any issues to let it try.
        return true;

      case "boolean":
        // d3 turns Booleans into integers, which we don't want. Sure, we could
        // interpolate from 0 -> 1, but we'd be sending a non-Boolean to
        // something expecting a Boolean.
        return false;

      case "object":
        // Don't try to interpolate class instances (except Date or Array).
        return obj instanceof Date || Array.isArray(obj) || lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_1___default()(obj);

      case "function":
        // Careful! There may be extra properties on function objects that the
        // component expects to access - for instance, it may be a `d3.scale()`
        // function, which has its own methods attached. We don't know if the
        // component is only going to call the function (in which case it's
        // safely interpolatable) or if it's going to access special properties
        // (in which case our function generated from `interpolateFunction` will
        // most likely cause an error. We could check for enumerable properties
        // on the function object here to see if it's a "plain" function, but
        // let's just require that components prevent such function props from
        // being animated in the first place.
        return true;
    }
  }

  return false;
};
/**
 * Interpolate immediately to the end value at the given step `when`.
 * Some nicer default behavior might be to jump at the halfway point or return
 * `a` if `t` is 0 (instead of always returning `b`). But d3's default
 * interpolator does not do these things:
 *
 *   d3.interpolate('aaa', 'bbb')(0) === 'bbb'
 *
 * ...and things might get wonky if we don't replicate that behavior.
 *
 * @param {any} a - Start value.
 * @param {any} b - End value.
 * @param {Number} when - Step value (0 to 1) at which to jump to `b`.
 * @returns {Function} An interpolation function.
 */

var interpolateImmediate = function (a, b) {
  var when = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  return function (t) {
    return t < when ? a : b;
  };
};
/**
 * Interpolate to or from a function. The interpolated value will be a function
 * that calls `a` (if it's a function) and `b` (if it's a function) and calls
 * `d3.interpolate` on the resulting values. Note that our function won't
 * necessarily be called (that's up to the component this eventually gets
 * passed to) - but if it does get called, it will return an appropriately
 * interpolated value.
 *
 * @param {any} a - Start value.
 * @param {any} b - End value.
 * @returns {Function} An interpolation function.
 */

var interpolateFunction = function (a, b) {
  return function (t) {
    if (t >= 1) {
      return b;
    }

    return function () {
      /* eslint-disable no-invalid-this */
      var aval = typeof a === "function" ? a.apply(this, arguments) : a;
      var bval = typeof b === "function" ? b.apply(this, arguments) : b;
      return (0,d3_interpolate__WEBPACK_IMPORTED_MODULE_2__["default"])(aval, bval)(t);
    };
  };
};
/**
 * Interpolate to or from an object. This method is a modification of the object interpolator in
 * d3-interpolate https://github.com/d3/d3-interpolate/blob/master/src/object.js. This interpolator
 * differs in that it uses our custom interpolators when interpolating the value of each property in
 * an object. This allows the correct interpolation of nested objects, including styles
 *
 * @param {any} a - Start value.
 * @param {any} b - End value.
 * @returns {Function} An interpolation function.
 */

var interpolateObject = function (a, b) {
  var interpolateTypes = function (x, y) {
    if (x === y || !isInterpolatable(x) || !isInterpolatable(y)) {
      return interpolateImmediate(x, y);
    }

    if (typeof x === "function" || typeof y === "function") {
      return interpolateFunction(x, y);
    }

    if (typeof x === "object" && lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_1___default()(x) || typeof y === "object" && lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_1___default()(y)) {
      return interpolateObject(x, y);
    }

    return (0,d3_interpolate__WEBPACK_IMPORTED_MODULE_2__["default"])(x, y);
  }; // When the value is an array, attempt to sort by "key" so that animating nodes may be identified
  // based on "key" instead of index


  var keyData = function (val) {
    return Array.isArray(val) ? lodash_orderBy__WEBPACK_IMPORTED_MODULE_0___default()(val, "key") : val;
  };

  var i = {};
  var c = {};
  var k;

  if (a === null || typeof a !== "object") {
    a = {};
  }

  if (b === null || typeof b !== "object") {
    b = {};
  }

  for (k in b) {
    if (k in a) {
      i[k] = interpolateTypes(keyData(a[k]), keyData(b[k]));
    } else {
      c[k] = b[k];
    }
  }

  return function (t) {
    for (k in i) {
      c[k] = i[k](t);
    }

    return c;
  };
};
var interpolateString = function (a, b) {
  var format = function (val) {
    return typeof val === "string" ? val.replace(/,/g, "") : val;
  };

  return (0,d3_interpolate__WEBPACK_IMPORTED_MODULE_2__["default"])(format(a), format(b));
};
/**
 * By default, the list of interpolators used by `d3.interpolate` has a few
 * downsides:
 *
 * - `null` values get turned into 0.
 * - `undefined`, `function`, and some other value types get turned into NaN.
 * - Boolean types get turned into numbers, which probably will be meaningless
 *   to whatever is consuming them.
 * - It tries to interpolate between identical start and end values, doing
 *   unnecessary calculations that sometimes result in floating point rounding
 *   errors.
 *
 * If only the default interpolators are used, `VictoryAnimation` will happily
 * pass down NaN (and other bad) values as props to the wrapped component.
 * The component will then either use the incorrect values or complain that it
 * was passed props of the incorrect type. This custom interpolator is added
 * using the `d3.interpolators` API, and prevents such cases from happening
 * for most values.
 *
 * @param {any} a - Start value.
 * @param {any} b - End value.
 * @returns {Function|undefined} An interpolation function, if necessary.
 */

var victoryInterpolator = function (a, b) {
  // If the values are strictly equal, or either value is not interpolatable,
  // just use either the start value `a` or end value `b` at every step, as
  // there is no reasonable in-between value.
  if (a === b || !isInterpolatable(a) || !isInterpolatable(b)) {
    return interpolateImmediate(a, b);
  }

  if (typeof a === "function" || typeof b === "function") {
    return interpolateFunction(a, b);
  }

  if (lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_1___default()(a) || lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_1___default()(b)) {
    return interpolateObject(a, b);
  }

  if (typeof a === "string" || typeof b === "string") {
    return interpolateString(a, b);
  }

  return (0,d3_interpolate__WEBPACK_IMPORTED_MODULE_2__["default"])(a, b);
};

/***/ }),

/***/ "../../victory-core/es/victory-animation/victory-animation.js":
/*!********************************************************************!*\
  !*** ../../victory-core/es/victory-animation/victory-animation.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VictoryAnimation)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var d3_ease__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-ease */ "../../../node_modules/d3-ease/src/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util */ "../../victory-core/es/victory-animation/util.js");
/* harmony import */ var _victory_util_timer_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../victory-util/timer-context */ "../../victory-core/es/victory-util/timer-context.js");
/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-fast-compare */ "../../../node_modules/react-fast-compare/index.js");
/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_fast_compare__WEBPACK_IMPORTED_MODULE_2__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/*global setTimeout:false */







var VictoryAnimation =
/*#__PURE__*/
function (_React$Component) {
  _inherits(VictoryAnimation, _React$Component);

  function VictoryAnimation(props, context) {
    var _this;

    _classCallCheck(this, VictoryAnimation);

    _this = _possibleConstructorReturn(this, (VictoryAnimation.__proto__ || Object.getPrototypeOf(VictoryAnimation)).call(this, props, context));
    /* defaults */

    _this.state = {
      data: Array.isArray(_this.props.data) ? _this.props.data[0] : _this.props.data,
      animationInfo: {
        progress: 0,
        animating: false
      }
    };
    _this.interpolator = null;
    _this.queue = Array.isArray(_this.props.data) ? _this.props.data.slice(1) : [];
    /* build easing function */

    _this.ease = d3_ease__WEBPACK_IMPORTED_MODULE_3__[_this.toNewName(_this.props.easing)];
    /*
      There is no autobinding of this in ES6 classes
      so we bind functionToBeRunEachFrame to current instance of victory animation class
    */

    _this.functionToBeRunEachFrame = _this.functionToBeRunEachFrame.bind(_assertThisInitialized(_this));
    _this.timer = _this.context.animationTimer;
    return _this;
  }

  _createClass(VictoryAnimation, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Length check prevents us from triggering `onEnd` in `traverseQueue`.
      if (this.queue.length) {
        this.traverseQueue();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var equalProps = react_fast_compare__WEBPACK_IMPORTED_MODULE_2___default()(this.props, prevProps);

      if (!equalProps) {
        /* If the previous animation didn't finish, force it to complete before starting a new one */
        if (this.interpolator && this.state.animationInfo && this.state.animationInfo.progress < 1) {
          // eslint-disable-next-line react/no-did-update-set-state
          this.setState({
            data: this.interpolator(1),
            animationInfo: {
              progress: 1,
              animating: false,
              terminating: true
            }
          });
        } else {
          /* cancel existing loop if it exists */
          this.timer.unsubscribe(this.loopID);
          /* If an object was supplied */

          if (!Array.isArray(this.props.data)) {
            // Replace the tween queue. Could set `this.queue = [nextProps.data]`,
            // but let's reuse the same array.
            this.queue.length = 0;
            this.queue.push(this.props.data);
            /* If an array was supplied */
          } else {
            var _queue;

            /* Extend the tween queue */
            (_queue = this.queue).push.apply(_queue, _toConsumableArray(this.props.data));
          }
          /* Start traversing the tween queue */


          this.traverseQueue();
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.loopID) {
        this.timer.unsubscribe(this.loopID);
      } else {
        this.timer.stop();
      }
    }
  }, {
    key: "toNewName",
    value: function toNewName(ease) {
      // d3-ease changed the naming scheme for ease from "linear" -> "easeLinear" etc.
      var capitalize = function (s) {
        return s && s[0].toUpperCase() + s.slice(1);
      };

      return "ease".concat(capitalize(ease));
    }
    /* Traverse the tween queue */

  }, {
    key: "traverseQueue",
    value: function traverseQueue() {
      var _this2 = this;

      if (this.queue.length) {
        /* Get the next index */
        var data = this.queue[0];
        /* compare cached version to next props */

        this.interpolator = (0,_util__WEBPACK_IMPORTED_MODULE_4__.victoryInterpolator)(this.state.data, data);
        /* reset step to zero */

        if (this.props.delay) {
          setTimeout(function () {
            _this2.loopID = _this2.timer.subscribe(_this2.functionToBeRunEachFrame, _this2.props.duration);
          }, this.props.delay);
        } else {
          this.loopID = this.timer.subscribe(this.functionToBeRunEachFrame, this.props.duration);
        }
      } else if (this.props.onEnd) {
        this.props.onEnd();
      }
    }
    /* every frame we... */

  }, {
    key: "functionToBeRunEachFrame",
    value: function functionToBeRunEachFrame(elapsed, duration) {
      /*
        step can generate imprecise values, sometimes greater than 1
        if this happens set the state to 1 and return, cancelling the timer
      */
      duration = duration !== undefined ? duration : this.props.duration;
      var step = duration ? elapsed / duration : 1;

      if (step >= 1) {
        this.setState({
          data: this.interpolator(1),
          animationInfo: {
            progress: 1,
            animating: false,
            terminating: true
          }
        });

        if (this.loopID) {
          this.timer.unsubscribe(this.loopID);
        }

        this.queue.shift();
        this.traverseQueue();
        return;
      }
      /*
        if we're not at the end of the timer, set the state by passing
        current step value that's transformed by the ease function to the
        interpolator, which is cached for performance whenever props are received
      */


      this.setState({
        data: this.interpolator(this.ease(step)),
        animationInfo: {
          progress: step,
          animating: step < 1
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children(this.state.data, this.state.animationInfo);
    }
  }]);

  return VictoryAnimation;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

Object.defineProperty(VictoryAnimation, "displayName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: "VictoryAnimation"
});
Object.defineProperty(VictoryAnimation, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
    data: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array)]),
    delay: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
    duration: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
    easing: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["back", "backIn", "backOut", "backInOut", "bounce", "bounceIn", "bounceOut", "bounceInOut", "circle", "circleIn", "circleOut", "circleInOut", "linear", "linearIn", "linearOut", "linearInOut", "cubic", "cubicIn", "cubicOut", "cubicInOut", "elastic", "elasticIn", "elasticOut", "elasticInOut", "exp", "expIn", "expOut", "expInOut", "poly", "polyIn", "polyOut", "polyInOut", "quad", "quadIn", "quadOut", "quadInOut", "sin", "sinIn", "sinOut", "sinInOut"]),
    onEnd: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
  }
});
Object.defineProperty(VictoryAnimation, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    data: {},
    delay: 0,
    duration: 1000,
    easing: "quadInOut"
  }
});
Object.defineProperty(VictoryAnimation, "contextType", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: _victory_util_timer_context__WEBPACK_IMPORTED_MODULE_5__["default"]
});


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

/***/ "../../victory-core/es/victory-primitives/border.js":
/*!**********************************************************!*\
  !*** ../../victory-core/es/victory-primitives/border.js ***!
  \**********************************************************/
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
/* harmony import */ var _rect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rect */ "../../victory-core/es/victory-primitives/rect.js");


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
    fill: "none"
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

var Border = function (props) {
  props = evaluateProps(props);
  return react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(props.rectComponent, _objectSpread({}, props.events, {
    "aria-label": props.ariaLabel,
    style: props.style,
    desc: props.desc,
    tabIndex: props.tabIndex,
    transform: props.transform,
    className: props.className,
    role: props.role,
    shapeRendering: props.shapeRendering,
    x: props.x,
    y: props.y,
    width: props.width,
    height: props.height,
    clipPath: props.clipPath
  }));
};

Border.propTypes = _objectSpread({}, _victory_util_common_props__WEBPACK_IMPORTED_MODULE_4__.primitiveProps, {
  height: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
  rectComponent: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().element),
  width: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
  x: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
  y: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number)
});
Border.defaultProps = {
  rectComponent: react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_rect__WEBPACK_IMPORTED_MODULE_5__["default"], null),
  role: "presentation",
  shapeRendering: "auto"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Border);

/***/ }),

/***/ "../../victory-core/es/victory-primitives/path.js":
/*!********************************************************!*\
  !*** ../../victory-core/es/victory-primitives/path.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }



var Path = function (props) {
  // eslint-disable-next-line react/prop-types
  var desc = props.desc,
      rest = _objectWithoutProperties(props, ["desc"]);

  return desc ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", rest, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("desc", null, desc)) : react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", rest);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Path);

/***/ }),

/***/ "../../victory-core/es/victory-primitives/point.js":
/*!*********************************************************!*\
  !*** ../../victory-core/es/victory-primitives/point.js ***!
  \*********************************************************/
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
/* harmony import */ var _victory_util_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../victory-util/helpers */ "../../victory-core/es/victory-util/helpers.js");
/* harmony import */ var _victory_util_point_path_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../victory-util/point-path-helpers */ "../../victory-core/es/victory-util/point-path-helpers.js");
/* harmony import */ var _victory_util_common_props__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../victory-util/common-props */ "../../victory-core/es/victory-util/common-props.js");
/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./path */ "../../victory-core/es/victory-primitives/path.js");


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
    circle: _victory_util_point_path_helpers__WEBPACK_IMPORTED_MODULE_3__["default"].circle,
    square: _victory_util_point_path_helpers__WEBPACK_IMPORTED_MODULE_3__["default"].square,
    diamond: _victory_util_point_path_helpers__WEBPACK_IMPORTED_MODULE_3__["default"].diamond,
    triangleDown: _victory_util_point_path_helpers__WEBPACK_IMPORTED_MODULE_3__["default"].triangleDown,
    triangleUp: _victory_util_point_path_helpers__WEBPACK_IMPORTED_MODULE_3__["default"].triangleUp,
    plus: _victory_util_point_path_helpers__WEBPACK_IMPORTED_MODULE_3__["default"].plus,
    minus: _victory_util_point_path_helpers__WEBPACK_IMPORTED_MODULE_3__["default"].minus,
    star: _victory_util_point_path_helpers__WEBPACK_IMPORTED_MODULE_3__["default"].star,
    cross: _victory_util_point_path_helpers__WEBPACK_IMPORTED_MODULE_3__["default"].cross
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
  var ariaLabel = _victory_util_helpers__WEBPACK_IMPORTED_MODULE_4__.evaluateProp(props.ariaLabel, props);
  var desc = _victory_util_helpers__WEBPACK_IMPORTED_MODULE_4__.evaluateProp(props.desc, props);
  var id = _victory_util_helpers__WEBPACK_IMPORTED_MODULE_4__.evaluateProp(props.id, props);
  var size = _victory_util_helpers__WEBPACK_IMPORTED_MODULE_4__.evaluateProp(props.size, props);
  var style = _victory_util_helpers__WEBPACK_IMPORTED_MODULE_4__.evaluateStyle(props.style, props);
  var symbol = _victory_util_helpers__WEBPACK_IMPORTED_MODULE_4__.evaluateProp(props.symbol, props);
  var tabIndex = _victory_util_helpers__WEBPACK_IMPORTED_MODULE_4__.evaluateProp(props.tabIndex, props);
  return lodash_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
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
  return react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(props.pathComponent, _objectSpread({}, props.events, {
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

Point.propTypes = _objectSpread({}, _victory_util_common_props__WEBPACK_IMPORTED_MODULE_5__.primitiveProps, {
  datum: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  getPath: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  pathComponent: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().element),
  size: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)]),
  symbol: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["circle", "cross", "diamond", "plus", "minus", "square", "star", "triangleDown", "triangleUp"]), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)]),
  x: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
  y: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number)
});
Point.defaultProps = {
  pathComponent: react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_path__WEBPACK_IMPORTED_MODULE_6__["default"], null),
  role: "presentation",
  shapeRendering: "auto"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Point);

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

/***/ "../../victory-core/es/victory-theme/grayscale.js":
/*!********************************************************!*\
  !*** ../../victory-core/es/victory-theme/grayscale.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/assign */ "../../../node_modules/lodash/assign.js");
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_assign__WEBPACK_IMPORTED_MODULE_0__);

// *
// * Colors
// *
var colors = ["#252525", "#525252", "#737373", "#969696", "#bdbdbd", "#d9d9d9", "#f0f0f0"];
var charcoal = "#252525";
var grey = "#969696"; // *
// * Typography
// *

var sansSerif = "'Gill Sans', 'Seravek', 'Trebuchet MS', sans-serif";
var letterSpacing = "normal";
var fontSize = 14; // *
// * Layout
// *

var baseProps = {
  width: 450,
  height: 300,
  padding: 50,
  colorScale: colors
}; // *
// * Labels
// *

var baseLabelStyles = {
  fontFamily: sansSerif,
  fontSize: fontSize,
  letterSpacing: letterSpacing,
  padding: 10,
  fill: charcoal,
  stroke: "transparent"
};

var centeredLabelStyles = lodash_assign__WEBPACK_IMPORTED_MODULE_0___default()({
  textAnchor: "middle"
}, baseLabelStyles); // *
// * Strokes
// *


var strokeLinecap = "round";
var strokeLinejoin = "round";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  area: lodash_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    style: {
      data: {
        fill: charcoal
      },
      labels: baseLabelStyles
    }
  }, baseProps),
  axis: lodash_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    style: {
      axis: {
        fill: "transparent",
        stroke: charcoal,
        strokeWidth: 1,
        strokeLinecap: strokeLinecap,
        strokeLinejoin: strokeLinejoin
      },
      axisLabel: lodash_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, centeredLabelStyles, {
        padding: 25
      }),
      grid: {
        fill: "none",
        stroke: "none",
        pointerEvents: "painted"
      },
      ticks: {
        fill: "transparent",
        size: 1,
        stroke: "transparent"
      },
      tickLabels: baseLabelStyles
    }
  }, baseProps),
  bar: lodash_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    style: {
      data: {
        fill: charcoal,
        padding: 8,
        strokeWidth: 0
      },
      labels: baseLabelStyles
    }
  }, baseProps),
  boxplot: lodash_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    style: {
      max: {
        padding: 8,
        stroke: charcoal,
        strokeWidth: 1
      },
      maxLabels: lodash_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, baseLabelStyles, {
        padding: 3
      }),
      median: {
        padding: 8,
        stroke: charcoal,
        strokeWidth: 1
      },
      medianLabels: lodash_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, baseLabelStyles, {
        padding: 3
      }),
      min: {
        padding: 8,
        stroke: charcoal,
        strokeWidth: 1
      },
      minLabels: lodash_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, baseLabelStyles, {
        padding: 3
      }),
      q1: {
        padding: 8,
        fill: grey
      },
      q1Labels: lodash_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, baseLabelStyles, {
        padding: 3
      }),
      q3: {
        padding: 8,
        fill: grey
      },
      q3Labels: lodash_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, baseLabelStyles, {
        padding: 3
      })
    },
    boxWidth: 20
  }, baseProps),
  candlestick: lodash_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    style: {
      data: {
        stroke: charcoal,
        strokeWidth: 1
      },
      labels: lodash_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, baseLabelStyles, {
        padding: 5
      })
    },
    candleColors: {
      positive: "#ffffff",
      negative: charcoal
    }
  }, baseProps),
  chart: baseProps,
  errorbar: lodash_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    borderWidth: 8,
    style: {
      data: {
        fill: "transparent",
        stroke: charcoal,
        strokeWidth: 2
      },
      labels: baseLabelStyles
    }
  }, baseProps),
  group: lodash_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    colorScale: colors
  }, baseProps),
  histogram: lodash_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    style: {
      data: {
        fill: grey,
        stroke: charcoal,
        strokeWidth: 2
      },
      labels: baseLabelStyles
    }
  }, baseProps),
  legend: {
    colorScale: colors,
    gutter: 10,
    orientation: "vertical",
    titleOrientation: "top",
    style: {
      data: {
        type: "circle"
      },
      labels: baseLabelStyles,
      title: lodash_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, baseLabelStyles, {
        padding: 5
      })
    }
  },
  line: lodash_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    style: {
      data: {
        fill: "transparent",
        stroke: charcoal,
        strokeWidth: 2
      },
      labels: baseLabelStyles
    }
  }, baseProps),
  pie: {
    style: {
      data: {
        padding: 10,
        stroke: "transparent",
        strokeWidth: 1
      },
      labels: lodash_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, baseLabelStyles, {
        padding: 20
      })
    },
    colorScale: colors,
    width: 400,
    height: 400,
    padding: 50
  },
  scatter: lodash_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    style: {
      data: {
        fill: charcoal,
        stroke: "transparent",
        strokeWidth: 0
      },
      labels: baseLabelStyles
    }
  }, baseProps),
  stack: lodash_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    colorScale: colors
  }, baseProps),
  tooltip: {
    style: lodash_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, baseLabelStyles, {
      padding: 0,
      pointerEvents: "none"
    }),
    flyoutStyle: {
      stroke: charcoal,
      strokeWidth: 1,
      fill: "#f0f0f0",
      pointerEvents: "none"
    },
    flyoutPadding: 5,
    cornerRadius: 5,
    pointerLength: 10
  },
  voronoi: lodash_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    style: {
      data: {
        fill: "transparent",
        stroke: "transparent",
        strokeWidth: 0
      },
      labels: lodash_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, baseLabelStyles, {
        padding: 5,
        pointerEvents: "none"
      }),
      flyout: {
        stroke: charcoal,
        strokeWidth: 1,
        fill: "#f0f0f0",
        pointerEvents: "none"
      }
    }
  }, baseProps)
});

/***/ }),

/***/ "../../victory-core/es/victory-theme/material.js":
/*!*******************************************************!*\
  !*** ../../victory-core/es/victory-theme/material.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/assign */ "../../../node_modules/lodash/assign.js");
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_assign__WEBPACK_IMPORTED_MODULE_0__);

// *
// * Colors
// *
var yellow200 = "#FFF59D";
var deepOrange600 = "#F4511E";
var lime300 = "#DCE775";
var lightGreen500 = "#8BC34A";
var teal700 = "#00796B";
var cyan900 = "#006064";
var colors = [deepOrange600, yellow200, lime300, lightGreen500, teal700, cyan900];
var blueGrey50 = "#ECEFF1";
var blueGrey300 = "#90A4AE";
var blueGrey700 = "#455A64";
var grey900 = "#212121"; // *
// * Typography
// *

var sansSerif = "'Helvetica Neue', 'Helvetica', sans-serif";
var letterSpacing = "normal";
var fontSize = 12; // *
// * Layout
// *

var padding = 8;
var baseProps = {
  width: 350,
  height: 350,
  padding: 50
}; // *
// * Labels
// *

var baseLabelStyles = {
  fontFamily: sansSerif,
  fontSize: fontSize,
  letterSpacing: letterSpacing,
  padding: padding,
  fill: blueGrey700,
  stroke: "transparent",
  strokeWidth: 0
};

var centeredLabelStyles = lodash_assign__WEBPACK_IMPORTED_MODULE_0___default()({
  textAnchor: "middle"
}, baseLabelStyles); // *
// * Strokes
// *


var strokeDasharray = "10, 5";
var strokeLinecap = "round";
var strokeLinejoin = "round";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  area: lodash_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    style: {
      data: {
        fill: grey900
      },
      labels: baseLabelStyles
    }
  }, baseProps),
  axis: lodash_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    style: {
      axis: {
        fill: "transparent",
        stroke: blueGrey300,
        strokeWidth: 2,
        strokeLinecap: strokeLinecap,
        strokeLinejoin: strokeLinejoin
      },
      axisLabel: lodash_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, centeredLabelStyles, {
        padding: padding,
        stroke: "transparent"
      }),
      grid: {
        fill: "none",
        stroke: blueGrey50,
        strokeDasharray: strokeDasharray,
        strokeLinecap: strokeLinecap,
        strokeLinejoin: strokeLinejoin,
        pointerEvents: "painted"
      },
      ticks: {
        fill: "transparent",
        size: 5,
        stroke: blueGrey300,
        strokeWidth: 1,
        strokeLinecap: strokeLinecap,
        strokeLinejoin: strokeLinejoin
      },
      tickLabels: lodash_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, baseLabelStyles, {
        fill: blueGrey700
      })
    }
  }, baseProps),
  polarDependentAxis: lodash_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    style: {
      ticks: {
        fill: "transparent",
        size: 1,
        stroke: "transparent"
      }
    }
  }),
  bar: lodash_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    style: {
      data: {
        fill: blueGrey700,
        padding: padding,
        strokeWidth: 0
      },
      labels: baseLabelStyles
    }
  }, baseProps),
  boxplot: lodash_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    style: {
      max: {
        padding: padding,
        stroke: blueGrey700,
        strokeWidth: 1
      },
      maxLabels: lodash_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, baseLabelStyles, {
        padding: 3
      }),
      median: {
        padding: padding,
        stroke: blueGrey700,
        strokeWidth: 1
      },
      medianLabels: lodash_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, baseLabelStyles, {
        padding: 3
      }),
      min: {
        padding: padding,
        stroke: blueGrey700,
        strokeWidth: 1
      },
      minLabels: lodash_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, baseLabelStyles, {
        padding: 3
      }),
      q1: {
        padding: padding,
        fill: blueGrey700
      },
      q1Labels: lodash_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, baseLabelStyles, {
        padding: 3
      }),
      q3: {
        padding: padding,
        fill: blueGrey700
      },
      q3Labels: lodash_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, baseLabelStyles, {
        padding: 3
      })
    },
    boxWidth: 20
  }, baseProps),
  candlestick: lodash_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    style: {
      data: {
        stroke: blueGrey700
      },
      labels: lodash_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, baseLabelStyles, {
        padding: 5
      })
    },
    candleColors: {
      positive: "#ffffff",
      negative: blueGrey700
    }
  }, baseProps),
  chart: baseProps,
  errorbar: lodash_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    borderWidth: 8,
    style: {
      data: {
        fill: "transparent",
        opacity: 1,
        stroke: blueGrey700,
        strokeWidth: 2
      },
      labels: baseLabelStyles
    }
  }, baseProps),
  group: lodash_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    colorScale: colors
  }, baseProps),
  histogram: lodash_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    style: {
      data: {
        fill: blueGrey700,
        stroke: grey900,
        strokeWidth: 2
      },
      labels: baseLabelStyles
    }
  }, baseProps),
  legend: {
    colorScale: colors,
    gutter: 10,
    orientation: "vertical",
    titleOrientation: "top",
    style: {
      data: {
        type: "circle"
      },
      labels: baseLabelStyles,
      title: lodash_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, baseLabelStyles, {
        padding: 5
      })
    }
  },
  line: lodash_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    style: {
      data: {
        fill: "transparent",
        opacity: 1,
        stroke: blueGrey700,
        strokeWidth: 2
      },
      labels: baseLabelStyles
    }
  }, baseProps),
  pie: lodash_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    colorScale: colors,
    style: {
      data: {
        padding: padding,
        stroke: blueGrey50,
        strokeWidth: 1
      },
      labels: lodash_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, baseLabelStyles, {
        padding: 20
      })
    }
  }, baseProps),
  scatter: lodash_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    style: {
      data: {
        fill: blueGrey700,
        opacity: 1,
        stroke: "transparent",
        strokeWidth: 0
      },
      labels: baseLabelStyles
    }
  }, baseProps),
  stack: lodash_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    colorScale: colors
  }, baseProps),
  tooltip: {
    style: lodash_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, baseLabelStyles, {
      padding: 0,
      pointerEvents: "none"
    }),
    flyoutStyle: {
      stroke: grey900,
      strokeWidth: 1,
      fill: "#f0f0f0",
      pointerEvents: "none"
    },
    flyoutPadding: 5,
    cornerRadius: 5,
    pointerLength: 10
  },
  voronoi: lodash_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    style: {
      data: {
        fill: "transparent",
        stroke: "transparent",
        strokeWidth: 0
      },
      labels: lodash_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, baseLabelStyles, {
        padding: 5,
        pointerEvents: "none"
      }),
      flyout: {
        stroke: grey900,
        strokeWidth: 1,
        fill: "#f0f0f0",
        pointerEvents: "none"
      }
    }
  }, baseProps)
});

/***/ }),

/***/ "../../victory-core/es/victory-theme/victory-theme.js":
/*!************************************************************!*\
  !*** ../../victory-core/es/victory-theme/victory-theme.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./material */ "../../victory-core/es/victory-theme/material.js");
/* harmony import */ var _grayscale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grayscale */ "../../victory-core/es/victory-theme/grayscale.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  material: _material__WEBPACK_IMPORTED_MODULE_0__["default"],
  grayscale: _grayscale__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "../../victory-core/es/victory-transition/victory-transition.js":
/*!**********************************************************************!*\
  !*** ../../victory-core/es/victory-transition/victory-transition.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VictoryTransition)
/* harmony export */ });
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isObject */ "../../../node_modules/lodash/isObject.js");
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/pick */ "../../../node_modules/lodash/pick.js");
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isFunction */ "../../../node_modules/lodash/isFunction.js");
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_defaults__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/defaults */ "../../../node_modules/lodash/defaults.js");
/* harmony import */ var lodash_defaults__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_defaults__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _victory_animation_victory_animation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../victory-animation/victory-animation */ "../../victory-core/es/victory-animation/victory-animation.js");
/* harmony import */ var _victory_util_collection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../victory-util/collection */ "../../victory-core/es/victory-util/collection.js");
/* harmony import */ var _victory_util_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../victory-util/helpers */ "../../victory-core/es/victory-util/helpers.js");
/* harmony import */ var _victory_util_timer_context__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../victory-util/timer-context */ "../../victory-core/es/victory-util/timer-context.js");
/* harmony import */ var _victory_util_transitions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../victory-util/transitions */ "../../victory-core/es/victory-util/transitions.js");
/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-fast-compare */ "../../../node_modules/react-fast-compare/index.js");
/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_fast_compare__WEBPACK_IMPORTED_MODULE_6__);





function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }










var VictoryTransition =
/*#__PURE__*/
function (_React$Component) {
  _inherits(VictoryTransition, _React$Component);

  function VictoryTransition(props, context) {
    var _this;

    _classCallCheck(this, VictoryTransition);

    _this = _possibleConstructorReturn(this, (VictoryTransition.__proto__ || Object.getPrototypeOf(VictoryTransition)).call(this, props, context));
    _this.state = {
      nodesShouldLoad: false,
      nodesDoneLoad: false
    };
    var child = _this.props.children;
    var polar = child.props.polar;
    _this.continuous = !polar && child.type && child.type.continuous === true;
    _this.getTransitionState = _this.getTransitionState.bind(_assertThisInitialized(_this));
    _this.timer = _this.context.transitionTimer;
    return _this;
  }

  _createClass(VictoryTransition, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        nodesShouldLoad: true
      }); //eslint-disable-line react/no-did-mount-set-state
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      var _this2 = this;

      if (!react_fast_compare__WEBPACK_IMPORTED_MODULE_6___default()(this.props, nextProps)) {
        this.timer.bypassAnimation();
        this.setState(this.getTransitionState(this.props, nextProps), function () {
          return _this2.timer.resumeAnimation();
        });
      }

      return true;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.timer.stop();
    }
  }, {
    key: "getTransitionState",
    value: function getTransitionState(props, nextProps) {
      var animate = props.animate;

      if (!animate) {
        return {};
      } else if (animate.parentState) {
        var state = animate.parentState;
        var oldProps = state.nodesWillExit ? props : null;
        return {
          oldProps: oldProps,
          nextProps: nextProps
        };
      } else {
        var oldChildren = react__WEBPACK_IMPORTED_MODULE_4___default().Children.toArray(props.children);
        var nextChildren = react__WEBPACK_IMPORTED_MODULE_4___default().Children.toArray(nextProps.children);

        var _Transitions$getIniti = _victory_util_transitions__WEBPACK_IMPORTED_MODULE_7__.getInitialTransitionState(oldChildren, nextChildren),
            nodesWillExit = _Transitions$getIniti.nodesWillExit,
            nodesWillEnter = _Transitions$getIniti.nodesWillEnter,
            childrenTransitions = _Transitions$getIniti.childrenTransitions,
            nodesShouldEnter = _Transitions$getIniti.nodesShouldEnter;

        return {
          nodesWillExit: nodesWillExit,
          nodesWillEnter: nodesWillEnter,
          childrenTransitions: childrenTransitions,
          nodesShouldEnter: nodesShouldEnter,
          oldProps: nodesWillExit ? props : null,
          nextProps: nextProps
        };
      }
    }
  }, {
    key: "getDomainFromChildren",
    value: function getDomainFromChildren(props, axis) {
      var getChildDomains = function (children) {
        return children.reduce(function (memo, child) {
          if (child.type && lodash_isFunction__WEBPACK_IMPORTED_MODULE_2___default()(child.type.getDomain)) {
            var childDomain = child.props && child.type.getDomain(child.props, axis);
            return childDomain ? memo.concat(childDomain) : memo;
          } else if (child.props && child.props.children) {
            return memo.concat(getChildDomains(react__WEBPACK_IMPORTED_MODULE_4___default().Children.toArray(child.props.children)));
          }

          return memo;
        }, []);
      };

      var child = react__WEBPACK_IMPORTED_MODULE_4___default().Children.toArray(props.children)[0];
      var childProps = child.props || {};
      var domain = Array.isArray(childProps.domain) ? childProps.domain : childProps.domain && childProps.domain[axis];

      if (!childProps.children && domain) {
        return domain;
      } else {
        var childDomains = getChildDomains([child]);
        return childDomains.length === 0 ? [0, 1] : [_victory_util_collection__WEBPACK_IMPORTED_MODULE_8__.getMinValue(childDomains), _victory_util_collection__WEBPACK_IMPORTED_MODULE_8__.getMaxValue(childDomains)];
      }
    }
  }, {
    key: "pickProps",
    value: function pickProps() {
      if (!this.state) {
        return this.props;
      }

      return this.state.nodesWillExit ? this.state.oldProps || this.props : this.props;
    }
  }, {
    key: "pickDomainProps",
    value: function pickDomainProps(props) {
      var parentState = lodash_isObject__WEBPACK_IMPORTED_MODULE_0___default()(props.animate) && props.animate.parentState;

      if (parentState && parentState.nodesWillExit) {
        return this.continous || parentState.continuous ? parentState.nextProps || this.state.nextProps || props : props;
      }

      return this.continuous && this.state.nodesWillExit ? this.state.nextProps || props : props;
    }
  }, {
    key: "getClipWidth",
    value: function getClipWidth(props, child) {
      var getDefaultClipWidth = function () {
        var range = _victory_util_helpers__WEBPACK_IMPORTED_MODULE_9__.getRange(child.props, "x");
        return range ? Math.abs(range[1] - range[0]) : props.width;
      };

      var clipWidth = this.transitionProps ? this.transitionProps.clipWidth : undefined;
      return clipWidth !== undefined ? clipWidth : getDefaultClipWidth();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var props = this.pickProps();
      var getTransitionProps = lodash_isObject__WEBPACK_IMPORTED_MODULE_0___default()(this.props.animate) && this.props.animate.getTransitions ? this.props.animate.getTransitions : _victory_util_transitions__WEBPACK_IMPORTED_MODULE_7__.getTransitionPropsFactory(props, this.state, function (newState) {
        return _this3.setState(newState);
      });
      var child = react__WEBPACK_IMPORTED_MODULE_4___default().Children.toArray(props.children)[0];
      var transitionProps = getTransitionProps(child);
      this.transitionProps = transitionProps;
      var domain = {
        x: this.getDomainFromChildren(this.pickDomainProps(props), "x"),
        y: this.getDomainFromChildren(props, "y")
      };
      var clipWidth = this.getClipWidth(props, child);

      var combinedProps = lodash_defaults__WEBPACK_IMPORTED_MODULE_3___default()({
        domain: domain,
        clipWidth: clipWidth
      }, transitionProps, child.props);

      var animationWhitelist = props.animationWhitelist || [];
      var whitelist = animationWhitelist.concat(["clipWidth"]);
      var propsToAnimate = whitelist.length ? lodash_pick__WEBPACK_IMPORTED_MODULE_1___default()(combinedProps, whitelist) : combinedProps;
      return react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_victory_animation_victory_animation__WEBPACK_IMPORTED_MODULE_10__["default"], _extends({}, combinedProps.animate, {
        data: propsToAnimate
      }), function (newProps) {
        if (child.props.groupComponent) {
          var groupComponent = _this3.continuous ? react__WEBPACK_IMPORTED_MODULE_4___default().cloneElement(child.props.groupComponent, {
            clipWidth: newProps.clipWidth || 0
          }) : child.props.groupComponent;
          return react__WEBPACK_IMPORTED_MODULE_4___default().cloneElement(child, lodash_defaults__WEBPACK_IMPORTED_MODULE_3___default()({
            animate: null,
            animating: true,
            groupComponent: groupComponent
          }, newProps, combinedProps));
        }

        return react__WEBPACK_IMPORTED_MODULE_4___default().cloneElement(child, lodash_defaults__WEBPACK_IMPORTED_MODULE_3___default()({
          animate: null,
          animating: true
        }, newProps, combinedProps));
      });
    }
  }]);

  return VictoryTransition;
}((react__WEBPACK_IMPORTED_MODULE_4___default().Component));

Object.defineProperty(VictoryTransition, "displayName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: "VictoryTransition"
});
Object.defineProperty(VictoryTransition, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    animate: prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool), (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object)]),
    animationWhitelist: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().array),
    children: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().node)
  }
});
Object.defineProperty(VictoryTransition, "contextType", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: _victory_util_timer_context__WEBPACK_IMPORTED_MODULE_11__["default"]
});


/***/ }),

/***/ "../../victory-core/es/victory-util/add-events.js":
/*!********************************************************!*\
  !*** ../../victory-core/es/victory-util/add-events.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_difference__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/difference */ "../../../node_modules/lodash/difference.js");
/* harmony import */ var lodash_difference__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_difference__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isNil */ "../../../node_modules/lodash/isNil.js");
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isEmpty */ "../../../node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/without */ "../../../node_modules/lodash/without.js");
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_without__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/pick */ "../../../node_modules/lodash/pick.js");
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/isFunction */ "../../../node_modules/lodash/isFunction.js");
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/keys */ "../../../node_modules/lodash/keys.js");
/* harmony import */ var lodash_keys__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_keys__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/assign */ "../../../node_modules/lodash/assign.js");
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_assign__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_defaults__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/defaults */ "../../../node_modules/lodash/defaults.js");
/* harmony import */ var lodash_defaults__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_defaults__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./events */ "../../victory-core/es/victory-util/events.js");
/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-fast-compare */ "../../../node_modules/react-fast-compare/index.js");
/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_fast_compare__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _victory_transition_victory_transition__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../victory-transition/victory-transition */ "../../victory-core/es/victory-transition/victory-transition.js");










function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/*global window:false */





var datumHasXandY = function (datum) {
  return !lodash_isNil__WEBPACK_IMPORTED_MODULE_1___default()(datum._x) && !lodash_isNil__WEBPACK_IMPORTED_MODULE_1___default()(datum._y);
}; //  used for checking state changes. Expected components can be passed in via options


var defaultComponents = [{
  name: "parent",
  index: "parent"
}, {
  name: "data"
}, {
  name: "labels"
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (WrappedComponent, options) {
  return (
    /*#__PURE__*/
    function (_WrappedComponent) {
      _inherits(addEvents, _WrappedComponent);

      function addEvents(props) {
        var _this;

        _classCallCheck(this, addEvents);

        _this = _possibleConstructorReturn(this, (addEvents.__proto__ || Object.getPrototypeOf(addEvents)).call(this, props));
        var getScopedEvents = _events__WEBPACK_IMPORTED_MODULE_11__.getScopedEvents.bind(_assertThisInitialized(_this));
        var boundGetEvents = _events__WEBPACK_IMPORTED_MODULE_11__.getEvents.bind(_assertThisInitialized(_this));
        _this.state = {};

        _this.getEvents = function (p, target, eventKey) {
          return boundGetEvents(p, target, eventKey, getScopedEvents);
        };

        _this.getEventState = _events__WEBPACK_IMPORTED_MODULE_11__.getEventState.bind(_assertThisInitialized(_this));

        var calculatedValues = _this.getCalculatedValues(props);

        _this.cacheValues(calculatedValues);

        _this.externalMutations = _this.getExternalMutations(props);
        _this.calculatedState = _this.getStateChanges(props);
        _this.globalEvents = {};
        _this.prevGlobalEventKeys = [];
        _this.boundGlobalEvents = {};
        return _this;
      }

      _createClass(addEvents, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
          var externalMutations = this.getExternalMutations(nextProps);
          var animating = this.props.animating || this.props.animate;
          var newMutation = !react_fast_compare__WEBPACK_IMPORTED_MODULE_10___default()(externalMutations, this.externalMutations);

          if (animating || newMutation) {
            this.cacheValues(this.getCalculatedValues(nextProps));
            this.externalMutations = externalMutations;
            this.applyExternalMutations(nextProps, externalMutations);
            return true;
          }

          var calculatedState = this.getStateChanges(nextProps);

          if (!react_fast_compare__WEBPACK_IMPORTED_MODULE_10___default()(this.calculatedState, calculatedState)) {
            this.cacheValues(this.getCalculatedValues(nextProps));
            return true;
          }

          if (!react_fast_compare__WEBPACK_IMPORTED_MODULE_10___default()(this.props, nextProps)) {
            this.cacheValues(this.getCalculatedValues(nextProps));
            return true;
          }

          return false;
        }
      }, {
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this2 = this;

          var globalEventKeys = lodash_keys__WEBPACK_IMPORTED_MODULE_6___default()(this.globalEvents);

          globalEventKeys.forEach(function (key) {
            return _this2.addGlobalListener(key);
          });
          this.prevGlobalEventKeys = globalEventKeys;
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
          var _this3 = this;

          var calculatedState = this.getStateChanges(prevProps);
          this.calculatedState = calculatedState;

          var globalEventKeys = lodash_keys__WEBPACK_IMPORTED_MODULE_6___default()(this.globalEvents);

          var removedGlobalEventKeys = lodash_difference__WEBPACK_IMPORTED_MODULE_0___default()(this.prevGlobalEventKeys, globalEventKeys);

          removedGlobalEventKeys.forEach(function (key) {
            return _this3.removeGlobalListener(key);
          });

          var addedGlobalEventKeys = lodash_difference__WEBPACK_IMPORTED_MODULE_0___default()(globalEventKeys, this.prevGlobalEventKeys);

          addedGlobalEventKeys.forEach(function (key) {
            return _this3.addGlobalListener(key);
          });
          this.prevGlobalEventKeys = globalEventKeys;
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          var _this4 = this;

          this.prevGlobalEventKeys.forEach(function (key) {
            return _this4.removeGlobalListener(key);
          });
        }
      }, {
        key: "addGlobalListener",
        value: function addGlobalListener(key) {
          var _this5 = this;

          var boundListener = function (event) {
            var listener = _this5.globalEvents[key];
            return listener && listener(_events__WEBPACK_IMPORTED_MODULE_11__.emulateReactEvent(event));
          };

          this.boundGlobalEvents[key] = boundListener;
          window.addEventListener(_events__WEBPACK_IMPORTED_MODULE_11__.getGlobalEventNameFromKey(key), boundListener);
        }
      }, {
        key: "removeGlobalListener",
        value: function removeGlobalListener(key) {
          window.removeEventListener(_events__WEBPACK_IMPORTED_MODULE_11__.getGlobalEventNameFromKey(key), this.boundGlobalEvents[key]);
        } // compile all state changes from own and parent state. Order doesn't matter, as any state
        // state change should trigger a re-render

      }, {
        key: "getStateChanges",
        value: function getStateChanges(props) {
          var _this6 = this;

          if (!this.hasEvents) {
            return {};
          }

          var getState = function (key, type) {
            var result = lodash_defaults__WEBPACK_IMPORTED_MODULE_8___default()({}, _this6.getEventState(key, type), _this6.getSharedEventState(key, type));

            return lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()(result) ? undefined : result;
          };

          options = options || {};
          var components = options.components || defaultComponents;
          var stateChanges = components.map(function (component) {
            if (!props.standalone && component.name === "parent") {
              // don't check for changes on parent props for non-standalone components
              return undefined;
            } else {
              return component.index !== undefined ? getState(component.index, component.name) : _this6.dataKeys.map(function (key) {
                return getState(key, component.name);
              }).filter(Boolean);
            }
          }).filter(Boolean);
          return stateChanges;
        }
      }, {
        key: "applyExternalMutations",
        value: function applyExternalMutations(props, externalMutations) {
          if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()(externalMutations)) {
            var callbacks = props.externalEventMutations.reduce(function (memo, mutation) {
              memo = lodash_isFunction__WEBPACK_IMPORTED_MODULE_5___default()(mutation.callback) ? memo.concat(mutation.callback) : memo;
              return memo;
            }, []);
            var compiledCallbacks = callbacks.length ? function () {
              callbacks.forEach(function (c) {
                return c();
              });
            } : undefined;
            this.setState(externalMutations, compiledCallbacks);
          }
        }
      }, {
        key: "getCalculatedValues",
        value: function getCalculatedValues(props) {
          var sharedEvents = props.sharedEvents;
          var components = WrappedComponent.expectedComponents;
          var componentEvents = _events__WEBPACK_IMPORTED_MODULE_11__.getComponentEvents(props, components);
          var getSharedEventState = sharedEvents && lodash_isFunction__WEBPACK_IMPORTED_MODULE_5___default()(sharedEvents.getEventState) ? sharedEvents.getEventState : function () {
            return undefined;
          };
          var baseProps = this.getBaseProps(props, getSharedEventState);

          var dataKeys = lodash_keys__WEBPACK_IMPORTED_MODULE_6___default()(baseProps).filter(function (key) {
            return key !== "parent";
          });

          var hasEvents = props.events || props.sharedEvents || componentEvents;
          var events = this.getAllEvents(props);
          return {
            componentEvents: componentEvents,
            getSharedEventState: getSharedEventState,
            baseProps: baseProps,
            dataKeys: dataKeys,
            hasEvents: hasEvents,
            events: events
          };
        }
      }, {
        key: "getExternalMutations",
        value: function getExternalMutations(props) {
          var sharedEvents = props.sharedEvents,
              externalEventMutations = props.externalEventMutations;
          return lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()(externalEventMutations) || sharedEvents ? undefined : _events__WEBPACK_IMPORTED_MODULE_11__.getExternalMutations(externalEventMutations, this.baseProps, this.state);
        }
      }, {
        key: "cacheValues",
        value: function cacheValues(obj) {
          var _this7 = this;

          lodash_keys__WEBPACK_IMPORTED_MODULE_6___default()(obj).forEach(function (key) {
            _this7[key] = obj[key];
          });
        }
      }, {
        key: "getBaseProps",
        value: function getBaseProps(props, getSharedEventState) {
          getSharedEventState = getSharedEventState || this.getSharedEventState;
          var sharedParentState = getSharedEventState("parent", "parent");
          var parentState = this.getEventState("parent", "parent");

          var baseParentProps = lodash_defaults__WEBPACK_IMPORTED_MODULE_8___default()({}, parentState, sharedParentState);

          var parentPropsList = baseParentProps.parentControlledProps;
          var parentProps = parentPropsList ? lodash_pick__WEBPACK_IMPORTED_MODULE_4___default()(baseParentProps, parentPropsList) : {};

          var modifiedProps = lodash_defaults__WEBPACK_IMPORTED_MODULE_8___default()({}, parentProps, props);

          return lodash_isFunction__WEBPACK_IMPORTED_MODULE_5___default()(WrappedComponent.getBaseProps) ? WrappedComponent.getBaseProps(modifiedProps) : {};
        }
      }, {
        key: "getAllEvents",
        value: function getAllEvents(props) {
          if (Array.isArray(this.componentEvents)) {
            var _componentEvents;

            return Array.isArray(props.events) ? (_componentEvents = this.componentEvents).concat.apply(_componentEvents, _toConsumableArray(props.events)) : this.componentEvents;
          }

          return props.events;
        }
      }, {
        key: "getComponentProps",
        value: function getComponentProps(component, type, index) {
          var name = this.props.name || WrappedComponent.role;
          var key = this.dataKeys && this.dataKeys[index] || index;
          var id = "".concat(name, "-").concat(type, "-").concat(key);
          var baseProps = this.baseProps[key] && this.baseProps[key][type] || this.baseProps[key];

          if (!baseProps && !this.hasEvents) {
            return undefined;
          }

          if (this.hasEvents) {
            var baseEvents = this.getEvents(this.props, type, key);

            var componentProps = lodash_defaults__WEBPACK_IMPORTED_MODULE_8___default()({
              index: index,
              key: id
            }, this.getEventState(key, type), this.getSharedEventState(key, type), component.props, baseProps, {
              id: id
            });

            var events = lodash_defaults__WEBPACK_IMPORTED_MODULE_8___default()({}, _events__WEBPACK_IMPORTED_MODULE_11__.getPartialEvents(baseEvents, key, componentProps), componentProps.events);

            return lodash_assign__WEBPACK_IMPORTED_MODULE_7___default()({}, componentProps, {
              events: events
            });
          }

          return lodash_defaults__WEBPACK_IMPORTED_MODULE_8___default()({
            index: index,
            key: id
          }, component.props, baseProps, {
            id: id
          });
        }
      }, {
        key: "renderContainer",
        value: function renderContainer(component, children) {
          var isContainer = component.type && component.type.role === "container";
          var parentProps = isContainer ? this.getComponentProps(component, "parent", "parent") : {};

          if (parentProps.events) {
            this.globalEvents = _events__WEBPACK_IMPORTED_MODULE_11__.getGlobalEvents(parentProps.events);
            parentProps.events = _events__WEBPACK_IMPORTED_MODULE_11__.omitGlobalEvents(parentProps.events);
          }

          return react__WEBPACK_IMPORTED_MODULE_9___default().cloneElement(component, parentProps, children);
        }
      }, {
        key: "animateComponent",
        value: function animateComponent(props, defaultAnimationWhitelist) {
          var animationWhitelist = props.animate && props.animate.animationWhitelist ? props.animate.animationWhitelist : defaultAnimationWhitelist;
          return react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_victory_transition_victory_transition__WEBPACK_IMPORTED_MODULE_12__["default"], {
            animate: props.animate,
            animationWhitelist: animationWhitelist
          }, react__WEBPACK_IMPORTED_MODULE_9___default().createElement(this.constructor, props));
        } // Used by `VictoryLine` and `VictoryArea`

      }, {
        key: "renderContinuousData",
        value: function renderContinuousData(props) {
          var _this8 = this;

          var dataComponent = props.dataComponent,
              labelComponent = props.labelComponent,
              groupComponent = props.groupComponent;

          var dataKeys = lodash_without__WEBPACK_IMPORTED_MODULE_3___default()(this.dataKeys, "all");

          var labelComponents = dataKeys.reduce(function (memo, key) {
            var labelProps = _this8.getComponentProps(labelComponent, "labels", key);

            if (labelProps && labelProps.text !== undefined && labelProps.text !== null) {
              memo = memo.concat(react__WEBPACK_IMPORTED_MODULE_9___default().cloneElement(labelComponent, labelProps));
            }

            return memo;
          }, []);
          var dataProps = this.getComponentProps(dataComponent, "data", "all");
          var children = [react__WEBPACK_IMPORTED_MODULE_9___default().cloneElement(dataComponent, dataProps)].concat(_toConsumableArray(labelComponents));
          return this.renderContainer(groupComponent, children);
        }
      }, {
        key: "renderData",
        value: function renderData(props) {
          var _this9 = this;

          var shouldRenderDatum = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : datumHasXandY;
          var dataComponent = props.dataComponent,
              labelComponent = props.labelComponent,
              groupComponent = props.groupComponent;
          var dataComponents = this.dataKeys.reduce(function (validDataComponents, _dataKey, index) {
            var dataProps = _this9.getComponentProps(dataComponent, "data", index);

            if (shouldRenderDatum(dataProps.datum)) {
              validDataComponents.push(react__WEBPACK_IMPORTED_MODULE_9___default().cloneElement(dataComponent, dataProps));
            }

            return validDataComponents;
          }, []);
          var labelComponents = this.dataKeys.map(function (_dataKey, index) {
            var labelProps = _this9.getComponentProps(labelComponent, "labels", index);

            if (labelProps.text !== undefined && labelProps.text !== null) {
              return react__WEBPACK_IMPORTED_MODULE_9___default().cloneElement(labelComponent, labelProps);
            }

            return undefined;
          }).filter(Boolean);

          var children = _toConsumableArray(dataComponents).concat(_toConsumableArray(labelComponents));

          return this.renderContainer(groupComponent, children);
        }
      }]);

      return addEvents;
    }(WrappedComponent)
  );
});

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

/***/ "../../victory-core/es/victory-util/events.js":
/*!****************************************************!*\
  !*** ../../victory-core/es/victory-util/events.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getEvents": () => (/* binding */ getEvents),
/* harmony export */   "getScopedEvents": () => (/* binding */ getScopedEvents),
/* harmony export */   "getPartialEvents": () => (/* binding */ getPartialEvents),
/* harmony export */   "getEventState": () => (/* binding */ getEventState),
/* harmony export */   "getExternalMutationsWithChildren": () => (/* binding */ getExternalMutationsWithChildren),
/* harmony export */   "getExternalMutations": () => (/* binding */ getExternalMutations),
/* harmony export */   "getExternalMutation": () => (/* binding */ getExternalMutation),
/* harmony export */   "getComponentEvents": () => (/* binding */ getComponentEvents),
/* harmony export */   "getGlobalEventNameFromKey": () => (/* binding */ getGlobalEventNameFromKey),
/* harmony export */   "getGlobalEvents": () => (/* binding */ getGlobalEvents),
/* harmony export */   "omitGlobalEvents": () => (/* binding */ omitGlobalEvents),
/* harmony export */   "emulateReactEvent": () => (/* binding */ emulateReactEvent)
/* harmony export */ });
/* harmony import */ var lodash_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/keys */ "../../../node_modules/lodash/keys.js");
/* harmony import */ var lodash_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/includes */ "../../../node_modules/lodash/includes.js");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_uniq__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/uniq */ "../../../node_modules/lodash/uniq.js");
/* harmony import */ var lodash_uniq__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_uniq__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_omitBy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/omitBy */ "../../../node_modules/lodash/omitBy.js");
/* harmony import */ var lodash_omitBy__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_omitBy__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_pickBy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/pickBy */ "../../../node_modules/lodash/pickBy.js");
/* harmony import */ var lodash_pickBy__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_pickBy__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/without */ "../../../node_modules/lodash/without.js");
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_without__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/isFunction */ "../../../node_modules/lodash/isFunction.js");
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/isEmpty */ "../../../node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/assign */ "../../../node_modules/lodash/assign.js");
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_assign__WEBPACK_IMPORTED_MODULE_8__);










function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var GLOBAL_EVENT_REGEX = /^onGlobal(.*)$/;
/* Returns all own and shared events that should be attached to a single target element,
 * i.e. an individual bar specified by target: "data", eventKey: [index].
 * Returned events are scoped to the appropriate state. Either that of the component itself
 * (i.e. VictoryBar) in the case of own events, or that of the parent component
 * (i.e. VictoryChart) in the case of shared events
 */
// eslint-disable-next-line max-params,no-shadow

function getEvents(props, target, eventKey, getScopedEvents) {
  var _this = this;

  // Returns all events that apply to a particular target element
  var getEventsByTarget = function (events) {
    var getSelectedEvents = function () {
      var targetEvents = events.reduce(function (memo, event) {
        if (event.target !== undefined) {
          var matchesTarget = Array.isArray(event.target) ? lodash_includes__WEBPACK_IMPORTED_MODULE_1___default()(event.target, target) : "".concat(event.target) === "".concat(target);
          return matchesTarget ? memo.concat(event) : memo;
        }

        return memo.concat(event);
      }, []);

      if (eventKey !== undefined && target !== "parent") {
        return targetEvents.filter(function (obj) {
          var targetKeys = obj.eventKey;

          var useKey = function (key) {
            return key ? "".concat(key) === "".concat(eventKey) : true;
          };

          return Array.isArray(targetKeys) ? targetKeys.some(function (k) {
            return useKey(k);
          }) : useKey(targetKeys);
        });
      }

      return targetEvents;
    };

    var selectedEvents = getSelectedEvents();
    return Array.isArray(selectedEvents) && selectedEvents.reduce(function (memo, event) {
      return event ? lodash_assign__WEBPACK_IMPORTED_MODULE_8___default()(memo, event.eventHandlers) : memo;
    }, {});
  };
  /* Returns all events from props and defaultEvents from components. Events handlers
   * specified in props will override handlers for the same event if they are also
   * specified in defaultEvents of a sub-component
   */


  var getAllEvents = function () {
    // Mandatory usage: `getEvents.bind(this)`

    /* eslint-disable no-invalid-this */
    if (Array.isArray(_this.componentEvents)) {
      var _this$componentEvents;

      return Array.isArray(props.events) ? (_this$componentEvents = _this.componentEvents).concat.apply(_this$componentEvents, _toConsumableArray(props.events)) : _this.componentEvents;
    }
    /* eslint-enable no-invalid-this */


    return props.events;
  };

  var allEvents = getAllEvents();
  var ownEvents = allEvents && lodash_isFunction__WEBPACK_IMPORTED_MODULE_6___default()(getScopedEvents) ? getScopedEvents(getEventsByTarget(allEvents), target) : undefined;

  if (!props.sharedEvents) {
    return ownEvents;
  }

  var getSharedEvents = props.sharedEvents.getEvents;
  var sharedEvents = props.sharedEvents.events && getSharedEvents(getEventsByTarget(props.sharedEvents.events), target);
  return lodash_assign__WEBPACK_IMPORTED_MODULE_8___default()({}, sharedEvents, ownEvents);
}
/* Returns a modified events object where each event handler is replaced by a new
 * function that calls the original handler and then calls setState with the return
 * of the original event handler assigned to state property that maps to the target
 * element.
 */
// eslint-disable-next-line max-params

function getScopedEvents(events, namespace, childType, baseProps) {
  var _this2 = this;

  if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_7___default()(events)) {
    return {};
  } // Mandatory usage: `getScopedEvents.bind(this)`
  // eslint-disable-next-line no-invalid-this


  baseProps = baseProps || this.baseProps; // returns the original base props or base state of a given target element

  var getTargetProps = function (identifier, type) {
    var childName = identifier.childName,
        target = identifier.target,
        key = identifier.key; // eslint-disable-next-line no-invalid-this

    var baseType = type === "props" ? baseProps : _this2.state || {};
    var base = childName === undefined || childName === null || !baseType[childName] ? baseType : baseType[childName];
    return key === "parent" ? base.parent : base[key] && base[key][target];
  }; // Returns the state object with the mutation caused by a given eventReturn
  // applied to the appropriate property on the state object


  var parseEvent = function (eventReturn, eventKey) {
    var childNames = namespace === "parent" ? eventReturn.childName : eventReturn.childName || childType;
    var target = eventReturn.target || namespace; // returns all eventKeys to modify for a targeted childName

    var getKeys = function (childName) {
      if (target === "parent") {
        return "parent";
      }

      if (eventReturn.eventKey === "all") {
        return baseProps[childName] ? lodash_without__WEBPACK_IMPORTED_MODULE_5___default()(lodash_keys__WEBPACK_IMPORTED_MODULE_0___default()(baseProps[childName]), "parent") : lodash_without__WEBPACK_IMPORTED_MODULE_5___default()(lodash_keys__WEBPACK_IMPORTED_MODULE_0___default()(baseProps), "parent");
      } else if (eventReturn.eventKey === undefined && eventKey === "parent") {
        return baseProps[childName] ? lodash_keys__WEBPACK_IMPORTED_MODULE_0___default()(baseProps[childName]) : lodash_keys__WEBPACK_IMPORTED_MODULE_0___default()(baseProps);
      }

      return eventReturn.eventKey !== undefined ? eventReturn.eventKey : eventKey;
    }; // returns the state object with mutated props applied for a single key


    var getMutationObject = function (key, childName) {
      // eslint-disable-next-line no-invalid-this
      var baseState = _this2.state || {};

      if (!lodash_isFunction__WEBPACK_IMPORTED_MODULE_6___default()(eventReturn.mutation)) {
        return baseState;
      }

      var mutationTargetProps = getTargetProps({
        childName: childName,
        key: key,
        target: target
      }, "props");
      var mutationTargetState = getTargetProps({
        childName: childName,
        key: key,
        target: target
      }, "state");
      var mutatedProps = eventReturn.mutation(lodash_assign__WEBPACK_IMPORTED_MODULE_8___default()({}, mutationTargetProps, mutationTargetState), baseProps);
      var childState = baseState[childName] || {};

      var filterState = function (state) {
        if (state[key] && state[key][target]) {
          delete state[key][target];
        }

        if (state[key] && !lodash_keys__WEBPACK_IMPORTED_MODULE_0___default()(state[key]).length) {
          delete state[key];
        }

        return state;
      };

      var extendState = function (state) {
        return target === "parent" ? lodash_assign__WEBPACK_IMPORTED_MODULE_8___default()(state, _defineProperty({}, key, lodash_assign__WEBPACK_IMPORTED_MODULE_8___default()(state[key], mutatedProps))) : lodash_assign__WEBPACK_IMPORTED_MODULE_8___default()(state, _defineProperty({}, key, lodash_assign__WEBPACK_IMPORTED_MODULE_8___default()(state[key], _defineProperty({}, target, mutatedProps))));
      };

      var updateState = function (state) {
        return mutatedProps ? extendState(state) : filterState(state);
      };

      return childName !== undefined && childName !== null ? lodash_assign__WEBPACK_IMPORTED_MODULE_8___default()(baseState, _defineProperty({}, childName, updateState(childState))) : updateState(baseState);
    }; // returns entire mutated state for a given childName


    var getReturnByChild = function (childName) {
      var mutationKeys = getKeys(childName);
      return Array.isArray(mutationKeys) ? mutationKeys.reduce(function (memo, key) {
        return lodash_assign__WEBPACK_IMPORTED_MODULE_8___default()(memo, getMutationObject(key, childName));
      }, {}) : getMutationObject(mutationKeys, childName);
    }; // returns an entire mutated state for all children


    var allChildNames = childNames === "all" ? lodash_without__WEBPACK_IMPORTED_MODULE_5___default()(lodash_keys__WEBPACK_IMPORTED_MODULE_0___default()(baseProps), "parent") : childNames;
    return Array.isArray(allChildNames) ? allChildNames.reduce(function (memo, childName) {
      return lodash_assign__WEBPACK_IMPORTED_MODULE_8___default()(memo, getReturnByChild(childName));
    }, {}) : getReturnByChild(allChildNames);
  }; // Parses an array of event returns into a single state mutation


  var parseEventReturn = function (eventReturn, eventKey) {
    return Array.isArray(eventReturn) ? eventReturn.reduce(function (memo, props) {
      memo = lodash_assign__WEBPACK_IMPORTED_MODULE_8___default()({}, memo, parseEvent(props, eventKey));
      return memo;
    }, {}) : parseEvent(eventReturn, eventKey);
  };

  var compileCallbacks = function (eventReturn) {
    var getCallback = function (obj) {
      return lodash_isFunction__WEBPACK_IMPORTED_MODULE_6___default()(obj.callback) && obj.callback;
    };

    var callbacks = Array.isArray(eventReturn) ? eventReturn.map(function (evtObj) {
      return getCallback(evtObj);
    }) : [getCallback(eventReturn)];
    var callbackArray = callbacks.filter(function (callback) {
      return callback !== false;
    });
    return callbackArray.length ? function () {
      return callbackArray.forEach(function (callback) {
        return callback();
      });
    } : undefined;
  }; // A function that calls a particular event handler, parses its return
  // into a state mutation, and calls setState
  // eslint-disable-next-line max-params


  var onEvent = function (evt, childProps, eventKey, eventName) {
    // eslint-disable-next-line no-invalid-this
    var eventReturn = events[eventName](evt, childProps, eventKey, _this2);

    if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_7___default()(eventReturn)) {
      var callbacks = compileCallbacks(eventReturn); // eslint-disable-next-line no-invalid-this

      _this2.setState(parseEventReturn(eventReturn, eventKey), callbacks);
    }
  }; // returns a new events object with enhanced event handlers


  return lodash_keys__WEBPACK_IMPORTED_MODULE_0___default()(events).reduce(function (memo, event) {
    memo[event] = onEvent;
    return memo;
  }, {});
}
/* Returns a partially applied event handler for a specific target element
 * This allows event handlers to have access to props controlling each element
 */

function getPartialEvents(events, eventKey, childProps) {
  return events ? lodash_keys__WEBPACK_IMPORTED_MODULE_0___default()(events).reduce(function (memo, eventName) {
    var appliedEvent = function (evt) {
      return events[eventName](evt, childProps, eventKey, eventName);
    };

    memo[eventName] = appliedEvent;
    return memo;
  }, {}) : {};
}
/* Returns the property of the state object corresponding to event changes for
 * a particular element
 */

function getEventState(eventKey, namespace, childType) {
  // Mandatory usage: `getEventState.bind(this)`
  // eslint-disable-next-line no-invalid-this
  var state = this.state || {};

  if (!childType) {
    return eventKey === "parent" ? state[eventKey] && state[eventKey][namespace] || state[eventKey] : state[eventKey] && state[eventKey][namespace];
  }

  return state[childType] && state[childType][eventKey] && state[childType][eventKey][namespace];
}
/**
 * Returns a set of all mutations for shared events
 *
 * @param  {Array} mutations an array of mutations objects
 * @param  {Object} baseProps an object that describes all props for children of VictorySharedEvents
 * @param  {Object} baseState an object that describes state for children of VictorySharedEvents
 * @param  {Array} childNames an array of childNames
 *
 * @return {Object} a object describing all mutations for VictorySharedEvents
 */
// eslint-disable-next-line max-params

function getExternalMutationsWithChildren(mutations, baseProps, baseState, childNames) {
  baseProps = baseProps || {};
  baseState = baseState || {};
  return childNames.reduce(function (memo, childName) {
    var childState = baseState[childName];
    var mutation = getExternalMutations(mutations, baseProps[childName], baseState[childName], childName);
    memo[childName] = mutation ? mutation : childState;
    return lodash_pickBy__WEBPACK_IMPORTED_MODULE_4___default()(memo, function (v) {
      return !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_7___default()(v);
    });
  }, {});
}
/**
 * Returns a set of all mutations for a component
 *
 * @param  {Array} mutations an array of mutations objects
 * @param  {Object} baseProps a props object (scoped to a childName when used by shared events)
 * @param  {Object} baseState a state object (scoped to a childName when used by shared events)
 * @param  {String} childName an optional childName
 *
 * @return {Object} a object describing mutations for a given component
 */
// eslint-disable-next-line max-params

function getExternalMutations(mutations, baseProps, baseState, childName) {
  baseProps = baseProps || {};
  baseState = baseState || {};

  var eventKeys = lodash_keys__WEBPACK_IMPORTED_MODULE_0___default()(baseProps);

  return eventKeys.reduce(function (memo, eventKey) {
    var keyState = baseState[eventKey] || {};
    var keyProps = baseProps[eventKey] || {};

    if (eventKey === "parent") {
      var identifier = {
        eventKey: eventKey,
        target: "parent"
      };
      var mutation = getExternalMutation(mutations, keyProps, keyState, identifier);
      memo[eventKey] = mutation !== undefined ? lodash_assign__WEBPACK_IMPORTED_MODULE_8___default()({}, keyState, mutation) : keyState;
    } else {
      // use keys from both state and props so that elements not intially included in baseProps
      // will be used. (i.e. labels)
      var targets = lodash_uniq__WEBPACK_IMPORTED_MODULE_2___default()(lodash_keys__WEBPACK_IMPORTED_MODULE_0___default()(keyProps).concat(lodash_keys__WEBPACK_IMPORTED_MODULE_0___default()(keyState)));

      memo[eventKey] = targets.reduce(function (m, target) {
        var identifier = {
          eventKey: eventKey,
          target: target,
          childName: childName
        };
        var mutation = getExternalMutation(mutations, keyProps[target], keyState[target], identifier);
        m[target] = mutation !== undefined ? lodash_assign__WEBPACK_IMPORTED_MODULE_8___default()({}, keyState[target], mutation) : keyState[target];
        return lodash_pickBy__WEBPACK_IMPORTED_MODULE_4___default()(m, function (v) {
          return !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_7___default()(v);
        });
      }, {});
    }

    return lodash_pickBy__WEBPACK_IMPORTED_MODULE_4___default()(memo, function (v) {
      return !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_7___default()(v);
    });
  }, {});
}
/**
 * Returns a set of mutations for a particular element given scoped baseProps and baseState
 *
 * @param  {Array} mutations an array of mutations objects
 * @param  {Object} baseProps a props object (scoped the element specified by the identifier)
 * @param  {Object} baseState a state object (scoped the element specified by the identifier)
 * @param  {Object} identifier { eventKey, target, childName }
 *
 * @return {Object | undefined} a object describing mutations for a given element, or undefined
 */
// eslint-disable-next-line max-params

function getExternalMutation(mutations, baseProps, baseState, identifier) {
  var filterMutations = function (mutation, type) {
    if (typeof mutation[type] === "string") {
      return mutation[type] === "all" || mutation[type] === identifier[type];
    } else if (Array.isArray(mutation[type])) {
      // coerce arrays to strings before matching
      var stringArray = mutation[type].map(function (m) {
        return "".concat(m);
      });
      return lodash_includes__WEBPACK_IMPORTED_MODULE_1___default()(stringArray, identifier[type]);
    } else {
      return false;
    }
  };

  mutations = Array.isArray(mutations) ? mutations : [mutations];
  var scopedMutations = mutations;

  if (identifier.childName) {
    scopedMutations = mutations.filter(function (m) {
      return filterMutations(m, "childName");
    });
  } // find any mutation objects that match the target


  var targetMutations = scopedMutations.filter(function (m) {
    return filterMutations(m, "target");
  });

  if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_7___default()(targetMutations)) {
    return undefined;
  }

  var keyMutations = targetMutations.filter(function (m) {
    return filterMutations(m, "eventKey");
  });

  if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_7___default()(keyMutations)) {
    return undefined;
  }

  return keyMutations.reduce(function (memo, curr) {
    var mutationFunction = curr && lodash_isFunction__WEBPACK_IMPORTED_MODULE_6___default()(curr.mutation) ? curr.mutation : function () {
      return undefined;
    };
    var currentMutation = mutationFunction(lodash_assign__WEBPACK_IMPORTED_MODULE_8___default()({}, baseProps, baseState));
    return lodash_assign__WEBPACK_IMPORTED_MODULE_8___default()({}, memo, currentMutation);
  }, {});
}
/* Returns an array of defaultEvents from sub-components of a given component.
 * i.e. any static `defaultEvents` on `labelComponent` will be returned
 */

function getComponentEvents(props, components) {
  var events = Array.isArray(components) && components.reduce(function (memo, componentName) {
    var _memo;

    var component = props[componentName];
    var defaultEvents = component && component.type && component.type.defaultEvents;
    var componentEvents = lodash_isFunction__WEBPACK_IMPORTED_MODULE_6___default()(defaultEvents) ? defaultEvents(component.props) : defaultEvents;
    memo = Array.isArray(componentEvents) ? (_memo = memo).concat.apply(_memo, _toConsumableArray(componentEvents)) : memo;
    return memo;
  }, []);
  return events && events.length ? events : undefined;
}
function getGlobalEventNameFromKey(key) {
  var match = key.match(GLOBAL_EVENT_REGEX);
  return match && match[1] && match[1].toLowerCase();
}
var getGlobalEvents = function (events) {
  return lodash_pickBy__WEBPACK_IMPORTED_MODULE_4___default()(events, function (_, key) {
    return GLOBAL_EVENT_REGEX.test(key);
  });
};
var omitGlobalEvents = function (events) {
  return lodash_omitBy__WEBPACK_IMPORTED_MODULE_3___default()(events, function (_, key) {
    return GLOBAL_EVENT_REGEX.test(key);
  });
};
var emulateReactEvent = function (event) {
  return lodash_assign__WEBPACK_IMPORTED_MODULE_8___default()(event, {
    nativeEvent: event
  });
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

/***/ "../../victory-core/es/victory-util/point-path-helpers.js":
/*!****************************************************************!*\
  !*** ../../victory-core/es/victory-util/point-path-helpers.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_range__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/range */ "../../../node_modules/lodash/range.js");
/* harmony import */ var lodash_range__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_range__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  circle: function (x, y, size) {
    return "M ".concat(x, ", ").concat(y, "\n      m ").concat(-size, ", 0\n      a ").concat(size, ", ").concat(size, " 0 1,0 ").concat(size * 2, ",0\n      a ").concat(size, ", ").concat(size, " 0 1,0 ").concat(-size * 2, ",0");
  },
  square: function (x, y, size) {
    var baseSize = 0.87 * size; // eslint-disable-line no-magic-numbers

    var x0 = x - baseSize;
    var y1 = y + baseSize;
    var distance = x + baseSize - x0;
    return "M ".concat(x0, ", ").concat(y1, "\n      h").concat(distance, "\n      v-").concat(distance, "\n      h-").concat(distance, "\n      z");
  },
  diamond: function (x, y, size) {
    var baseSize = 0.87 * size; // eslint-disable-line no-magic-numbers

    var length = Math.sqrt(2 * (baseSize * baseSize));
    return "M ".concat(x, ", ").concat(y + length, "\n      l ").concat(length, ", -").concat(length, "\n      l -").concat(length, ", -").concat(length, "\n      l -").concat(length, ", ").concat(length, "\n      l ").concat(length, ", ").concat(length, "\n      z");
  },
  triangleDown: function (x, y, size) {
    var height = size / 2 * Math.sqrt(3);
    var x0 = x - size;
    var x1 = x + size;
    var y0 = y - size;
    var y1 = y + height;
    return "M ".concat(x0, ", ").concat(y0, "\n      L ").concat(x1, ", ").concat(y0, "\n      L ").concat(x, ", ").concat(y1, "\n      z");
  },
  triangleUp: function (x, y, size) {
    var height = size / 2 * Math.sqrt(3);
    var x0 = x - size;
    var x1 = x + size;
    var y0 = y - height;
    var y1 = y + size;
    return "M ".concat(x0, ", ").concat(y1, "\n      L ").concat(x1, ", ").concat(y1, "\n      L ").concat(x, ", ").concat(y0, "\n      z");
  },
  plus: function (x, y, size) {
    var baseSize = 1.1 * size; // eslint-disable-line no-magic-numbers

    var distance = baseSize / 1.5; // eslint-disable-line no-magic-numbers

    return "\n      M ".concat(x - distance / 2, ", ").concat(y + baseSize, "\n      v-").concat(distance, "\n      h-").concat(distance, "\n      v-").concat(distance, "\n      h").concat(distance, "\n      v-").concat(distance, "\n      h").concat(distance, "\n      v").concat(distance, "\n      h").concat(distance, "\n      v").concat(distance, "\n      h-").concat(distance, "\n      v").concat(distance, "\n      z");
  },
  cross: function (x, y, size) {
    var baseSize = 0.8 * size; // eslint-disable-line no-magic-numbers

    var distance = baseSize / 1.5; // eslint-disable-line no-magic-numbers

    return "\n      M ".concat(x - distance / 2, ", ").concat(y + baseSize + distance, "\n      v-").concat(distance * 2, "\n      h-").concat(distance, "\n      v-").concat(distance, "\n      h").concat(distance, "\n      v-").concat(distance, "\n      h").concat(distance, "\n      v").concat(distance, "\n      h").concat(distance, "\n      v").concat(distance, "\n      h-").concat(distance, "\n      v").concat(distance * 2, "\n      z");
  },
  minus: function (x, y, size) {
    var baseSize = 1.1 * size; // eslint-disable-line no-magic-numbers

    var lineHeight = baseSize - baseSize * 0.3; // eslint-disable-line no-magic-numbers

    var x0 = x - baseSize;
    var y1 = y + lineHeight / 2;
    var distance = x + baseSize - x0;
    return "M ".concat(x0, ", ").concat(y1, "\n      h").concat(distance, "\n      v-").concat(lineHeight, "\n      h-").concat(distance, "\n      z");
  },
  star: function (x, y, size) {
    var baseSize = 1.35 * size; // eslint-disable-line no-magic-numbers

    var angle = Math.PI / 5; // eslint-disable-line no-magic-numbers
    // eslint-disable-next-line no-magic-numbers

    var starCoords = lodash_range__WEBPACK_IMPORTED_MODULE_0___default()(10).map(function (index) {
      var length = index % 2 === 0 ? baseSize : baseSize / 2;
      return "".concat(length * Math.sin(angle * (index + 1)) + x, ",\n        ").concat(length * Math.cos(angle * (index + 1)) + y);
    });

    return "M ".concat(starCoords.join("L"), " z");
  }
});

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

/***/ "../../victory-core/es/victory-util/transitions.js":
/*!*********************************************************!*\
  !*** ../../victory-core/es/victory-util/transitions.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getInitialTransitionState": () => (/* binding */ getInitialTransitionState),
/* harmony export */   "getTransitionPropsFactory": () => (/* binding */ getTransitionPropsFactory)
/* harmony export */ });
/* harmony import */ var lodash_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/keys */ "../../../node_modules/lodash/keys.js");
/* harmony import */ var lodash_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/identity */ "../../../node_modules/lodash/identity.js");
/* harmony import */ var lodash_identity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_identity__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_defaults__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/defaults */ "../../../node_modules/lodash/defaults.js");
/* harmony import */ var lodash_defaults__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_defaults__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/assign */ "../../../node_modules/lodash/assign.js");
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_assign__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);






function getDatumKey(datum, idx) {
  return (datum.key || idx).toString();
}

function getKeyedData(data) {
  return data.reduce(function (keyedData, datum, idx) {
    var key = getDatumKey(datum, idx);
    keyedData[key] = datum;
    return keyedData;
  }, {});
}

function getKeyedDataDifference(a, b) {
  var hasDifference = false;

  var difference = lodash_keys__WEBPACK_IMPORTED_MODULE_0___default()(a).reduce(function (_difference, key) {
    if (!(key in b)) {
      hasDifference = true;
      _difference[key] = true;
    }

    return _difference;
  }, {});

  return hasDifference && difference;
}
/**
 * Calculate which data-points exist in oldData and not nextData -
 * these are the `exiting` data-points.  Also calculate which
 * data-points exist in nextData and not oldData - these are the
 * `entering` data-points.
 *
 * @param  {Array} oldData   this.props.data Array
 * @param  {Array} nextData  this.props.data Array
 *
 * @return {Object}          Object with `entering` and `exiting` properties.
 *                           entering[datum.key] will be true if the data is
 *                           entering, and similarly for `exiting`.
 */


function getNodeTransitions(oldData, nextData) {
  var oldDataKeyed = oldData && getKeyedData(oldData);
  var nextDataKeyed = nextData && getKeyedData(nextData);
  return {
    entering: oldDataKeyed && getKeyedDataDifference(nextDataKeyed, oldDataKeyed),
    exiting: nextDataKeyed && getKeyedDataDifference(oldDataKeyed, nextDataKeyed)
  };
}

function getChildData(child) {
  if (child.type && child.type.getData) {
    return child.type.getData(child.props);
  }

  return child.props && child.props.data || false;
}
/**
 * If a parent component has animation enabled, calculate the transitions
 * for any data of any child component that supports data transitions
 * Data transitions are defined as any two datasets where data nodes exist
 * in the first set and not the second, in the second and not the first,
 * or both.
 *
 * @param  {Children}  oldChildren   this.props.children from old props
 * @param  {Children}  nextChildren  this.props.children from next props
 *
 * @return {Object}                  Object with the following properties:
 *                                    - nodesWillExit
 *                                    - nodesWillEnter
 *                                    - childrenTransitions
 *                                    - nodesShouldEnter
 */


function getInitialTransitionState(oldChildren, nextChildren) {
  var nodesWillExit = false;
  var nodesWillEnter = false;

  var getTransition = function (oldChild, newChild) {
    if (!newChild || oldChild.type !== newChild.type) {
      return {};
    }

    var _ref = getNodeTransitions(getChildData(oldChild), getChildData(newChild)) || {},
        entering = _ref.entering,
        exiting = _ref.exiting;

    nodesWillExit = nodesWillExit || !!exiting;
    nodesWillEnter = nodesWillEnter || !!entering;
    return {
      entering: entering || false,
      exiting: exiting || false
    };
  };

  var getTransitionsFromChildren = function (old, next) {
    return old.map(function (child, idx) {
      if (child && child.props && child.props.children && next[idx]) {
        return getTransitionsFromChildren(react__WEBPACK_IMPORTED_MODULE_4___default().Children.toArray(old[idx].props.children), react__WEBPACK_IMPORTED_MODULE_4___default().Children.toArray(next[idx].props.children));
      } // get Transition entering and exiting nodes


      return getTransition(child, next[idx]);
    });
  };

  var childrenTransitions = getTransitionsFromChildren(react__WEBPACK_IMPORTED_MODULE_4___default().Children.toArray(oldChildren), react__WEBPACK_IMPORTED_MODULE_4___default().Children.toArray(nextChildren));
  return {
    nodesWillExit: nodesWillExit,
    nodesWillEnter: nodesWillEnter,
    childrenTransitions: childrenTransitions,
    // TODO: This may need to be refactored for the following situation.
    //       The component receives new props, and the data provided
    //       is a perfect match for the previous data and domain except
    //       for new nodes. In this case, we wouldn't want a delay before
    //       the new nodes appear.
    nodesShouldEnter: false
  };
}

function getInitialChildProps(animate, data) {
  var after = animate.onEnter && animate.onEnter.after ? animate.onEnter.after : (lodash_identity__WEBPACK_IMPORTED_MODULE_1___default());
  return {
    data: data.map(function (datum, idx) {
      return lodash_assign__WEBPACK_IMPORTED_MODULE_3___default()({}, datum, after(datum, idx, data));
    })
  };
} // eslint-disable-next-line max-params


function getChildBeforeLoad(animate, child, data, cb) {
  animate = lodash_assign__WEBPACK_IMPORTED_MODULE_3___default()({}, animate, {
    onEnd: cb
  });

  if (animate && animate.onLoad && !animate.onLoad.duration) {
    return {
      animate: animate,
      data: data
    };
  }

  var before = animate.onLoad && animate.onLoad.before ? animate.onLoad.before : (lodash_identity__WEBPACK_IMPORTED_MODULE_1___default()); // If nodes need to exit, transform them with the provided onLoad.before function.

  data = data.map(function (datum, idx) {
    return lodash_assign__WEBPACK_IMPORTED_MODULE_3___default()({}, datum, before(datum, idx, data));
  });
  return {
    animate: animate,
    data: data,
    clipWidth: 0
  };
} // eslint-disable-next-line max-params


function getChildOnLoad(animate, data, cb) {
  animate = lodash_assign__WEBPACK_IMPORTED_MODULE_3___default()({}, animate, {
    onEnd: cb
  });

  if (animate && animate.onLoad && !animate.onLoad.duration) {
    return {
      animate: animate,
      data: data
    };
  }

  var after = animate.onLoad && animate.onLoad.after ? animate.onLoad.after : (lodash_identity__WEBPACK_IMPORTED_MODULE_1___default()); // If nodes need to exit, transform them with the provided onLoad.after function.

  data = data.map(function (datum, idx) {
    return lodash_assign__WEBPACK_IMPORTED_MODULE_3___default()({}, datum, after(datum, idx, data));
  });
  return {
    animate: animate,
    data: data
  };
} // eslint-disable-next-line max-params, max-len


function getChildPropsOnExit(animate, child, data, exitingNodes, cb) {
  // Whether or not _this_ child has exiting nodes, we want the exit-
  // transition for all children to have the same duration, delay, etc.
  var onExit = animate && animate.onExit;
  animate = lodash_assign__WEBPACK_IMPORTED_MODULE_3___default()({}, animate, onExit);

  if (exitingNodes) {
    // After the exit transition occurs, trigger the animations for
    // nodes that are neither exiting or entering.
    animate.onEnd = cb;
    var before = animate.onExit && animate.onExit.before ? animate.onExit.before : (lodash_identity__WEBPACK_IMPORTED_MODULE_1___default()); // If nodes need to exit, transform them with the provided onExit.before function.

    data = data.map(function (datum, idx) {
      var key = (datum.key || idx).toString();
      return exitingNodes[key] ? lodash_assign__WEBPACK_IMPORTED_MODULE_3___default()({}, datum, before(datum, idx, data)) : datum;
    });
  }

  return {
    animate: animate,
    data: data
  };
} // eslint-disable-next-line max-params,max-len


function getChildPropsBeforeEnter(animate, child, data, enteringNodes, cb) {
  if (enteringNodes) {
    // Perform a normal animation here, except - when it finishes - trigger
    // the transition for entering nodes.
    animate = lodash_assign__WEBPACK_IMPORTED_MODULE_3___default()({}, animate, {
      onEnd: cb
    });
    var before = animate.onEnter && animate.onEnter.before ? animate.onEnter.before : (lodash_identity__WEBPACK_IMPORTED_MODULE_1___default()); // We want the entering nodes to be included in the transition target
    // domain.  However, we may not want these nodes to be displayed initially,
    // so perform the `onEnter.before` transformation on each node.

    data = data.map(function (datum, idx) {
      var key = (datum.key || idx).toString();
      return enteringNodes[key] ? lodash_assign__WEBPACK_IMPORTED_MODULE_3___default()({}, datum, before(datum, idx, data)) : datum;
    });
  }

  return {
    animate: animate,
    data: data
  };
} // eslint-disable-next-line max-params, max-len


function getChildPropsOnEnter(animate, data, enteringNodes, cb) {
  // Whether or not _this_ child has entering nodes, we want the entering-
  // transition for all children to have the same duration, delay, etc.
  var onEnter = animate && animate.onEnter;
  animate = lodash_assign__WEBPACK_IMPORTED_MODULE_3___default()({}, animate, onEnter);

  if (enteringNodes) {
    // Old nodes have been transitioned to their new values, and the
    // domain should encompass the nodes that will now enter. So perform
    // the `onEnter.after` transformation on each node.
    animate.onEnd = cb;
    var after = animate.onEnter && animate.onEnter.after ? animate.onEnter.after : (lodash_identity__WEBPACK_IMPORTED_MODULE_1___default());
    data = data.map(function (datum, idx) {
      var key = getDatumKey(datum, idx);
      return enteringNodes[key] ? lodash_assign__WEBPACK_IMPORTED_MODULE_3___default()({}, datum, after(datum, idx, data)) : datum;
    });
  }

  return {
    animate: animate,
    data: data
  };
}
/**
 * getTransitionPropsFactory - putting the Java in JavaScript.  This will return a
 * function that returns prop transformations for a child, given that child's props
 * and its index in the parent's children array.
 *
 * In particular, this will include an `animate` object that is set appropriately
 * so that each child will be synchoronized for each stage of a transition
 * animation.  It will also include a transformed `data` object, where each datum
 * is transformed by `animate.onExit` and `animate.onEnter` `before` and `after`
 * functions.
 *
 * @param  {Object}  props       `this.props` for the parent component.
 * @param  {Object} state        `this.state` for the parent component.
 * @param  {Function} setState    Function that, when called, will `this.setState` on
 *                                 the parent component with the provided object.
 *
 * @return {Function}              Child-prop transformation function.
 */


function getTransitionPropsFactory(props, state, setState) {
  var nodesWillExit = state && state.nodesWillExit;
  var nodesWillEnter = state && state.nodesWillEnter;
  var nodesShouldEnter = state && state.nodesShouldEnter;
  var nodesShouldLoad = state && state.nodesShouldLoad;
  var nodesDoneLoad = state && state.nodesDoneLoad;
  var childrenTransitions = state && state.childrenTransitions || [];
  var transitionDurations = {
    enter: props.animate && props.animate.onEnter && props.animate.onEnter.duration,
    exit: props.animate && props.animate.onExit && props.animate.onExit.duration,
    load: props.animate && props.animate.onLoad && props.animate.onLoad.duration,
    move: props.animate && props.animate.duration
  };

  var onLoad = function (child, data, animate) {
    if (nodesShouldLoad) {
      return getChildOnLoad(animate, data, function () {
        setState({
          nodesShouldLoad: false,
          nodesDoneLoad: true
        });
      });
    }

    return getChildBeforeLoad(animate, child, data, function () {
      setState({
        nodesDoneLoad: true
      });
    });
  }; // eslint-disable-next-line max-params


  var onExit = function (nodes, child, data, animate) {
    return getChildPropsOnExit(animate, child, data, nodes, function () {
      setState({
        nodesWillExit: false
      });
    });
  }; // eslint-disable-next-line max-params


  var onEnter = function (nodes, child, data, animate) {
    if (nodesShouldEnter) {
      return getChildPropsOnEnter(animate, data, nodes, function () {
        setState({
          nodesWillEnter: false
        });
      });
    }

    return getChildPropsBeforeEnter(animate, child, data, nodes, function () {
      setState({
        nodesShouldEnter: true
      });
    });
  };

  var getChildTransitionDuration = function (child, type) {
    var animate = child.props.animate;

    if (!child.type) {
      return {};
    }

    var defaultTransitions = child.props && child.props.polar ? child.type.defaultPolarTransitions || child.type.defaultTransitions : child.type.defaultTransitions;

    if (defaultTransitions) {
      var animationDuration = animate[type] && animate[type].duration;
      return animationDuration !== undefined ? animationDuration : defaultTransitions[type] && defaultTransitions[type].duration;
    } else {
      return {};
    }
  }; // eslint-disable-next-line max-statements, complexity, max-len


  return function getTransitionProps(child, index) {
    var data = getChildData(child) || [];

    var animate = lodash_defaults__WEBPACK_IMPORTED_MODULE_2___default()({}, props.animate, child.props.animate);

    var defaultTransitions = child.props.polar ? child.type.defaultPolarTransitions || child.type.defaultTransitions : child.type.defaultTransitions;
    animate.onExit = lodash_defaults__WEBPACK_IMPORTED_MODULE_2___default()({}, animate.onExit, defaultTransitions && defaultTransitions.onExit);
    animate.onEnter = lodash_defaults__WEBPACK_IMPORTED_MODULE_2___default()({}, animate.onEnter, defaultTransitions && defaultTransitions.onEnter);
    animate.onLoad = lodash_defaults__WEBPACK_IMPORTED_MODULE_2___default()({}, animate.onLoad, defaultTransitions && defaultTransitions.onLoad);
    var childTransitions = childrenTransitions[index] || childrenTransitions[0];

    if (!nodesDoneLoad) {
      // should do onLoad animation
      var load = transitionDurations.load !== undefined ? transitionDurations.load : getChildTransitionDuration(child, "onLoad");
      var animation = {
        duration: load
      };
      return onLoad(child, data, lodash_assign__WEBPACK_IMPORTED_MODULE_3___default()({}, animate, animation));
    } else if (nodesWillExit) {
      var exitingNodes = childTransitions && childTransitions.exiting;
      var exit = transitionDurations.exit !== undefined ? transitionDurations.exit : getChildTransitionDuration(child, "onExit"); // if nodesWillExit, but this child has no exiting nodes, set a delay instead of a duration

      var _animation = exitingNodes ? {
        duration: exit
      } : {
        delay: exit
      };

      return onExit(exitingNodes, child, data, lodash_assign__WEBPACK_IMPORTED_MODULE_3___default()({}, animate, _animation));
    } else if (nodesWillEnter) {
      var enteringNodes = childTransitions && childTransitions.entering;
      var enter = transitionDurations.enter !== undefined ? transitionDurations.enter : getChildTransitionDuration(child, "onEnter");
      var move = transitionDurations.move !== undefined ? transitionDurations.move : child.props.animate && child.props.animate.duration;
      var _animation2 = {
        duration: nodesShouldEnter && enteringNodes ? enter : move
      };
      return onEnter(enteringNodes, child, data, lodash_assign__WEBPACK_IMPORTED_MODULE_3___default()({}, animate, _animation2));
    } else if (!state && animate && animate.onExit) {
      // This is the initial render, and nodes may enter when props change. Because
      // animation interpolation is determined by old- and next- props, data may need
      // to be augmented with certain properties.
      //
      // For example, it may be desired that exiting nodes go from `opacity: 1` to
      // `opacity: 0`. Without setting this on a per-datum basis, the interpolation
      // might go from `opacity: undefined` to `opacity: 0`, which would result in
      // interpolated `opacity: NaN` values.
      //
      return getInitialChildProps(animate, data);
    }

    return {
      animate: animate,
      data: data
    };
  };
}

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
/* harmony export */   "VictoryLegend": () => (/* reexport safe */ _victory_legend__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _victory_legend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./victory-legend */ "./victory-legend.js");

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});