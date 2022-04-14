"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VictoryAccessibleGroup =
/*#__PURE__*/
function (_React$Component) {
  _inherits(VictoryAccessibleGroup, _React$Component);

  function VictoryAccessibleGroup() {
    _classCallCheck(this, VictoryAccessibleGroup);

    return _possibleConstructorReturn(this, (VictoryAccessibleGroup.__proto__ || Object.getPrototypeOf(VictoryAccessibleGroup)).apply(this, arguments));
  }

  _createClass(VictoryAccessibleGroup, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          desc = _props.desc,
          children = _props.children,
          className = _props.className,
          tabIndex = _props.tabIndex;
      var descId = desc && (this.props["aria-describedby"] || desc.split(" ").join("-"));
      return desc ? _react.default.createElement("g", {
        "aria-label": this.props["aria-label"],
        "aria-describedby": descId,
        className: className,
        tabIndex: tabIndex
      }, _react.default.createElement("desc", {
        id: descId
      }, desc), children) : _react.default.createElement("g", {
        "aria-label": this.props["aria-label"],
        "aria-describedby": this.props["aria-describedby"],
        className: className,
        tabIndex: tabIndex
      }, children);
    }
  }]);

  return VictoryAccessibleGroup;
}(_react.default.Component);

Object.defineProperty(VictoryAccessibleGroup, "displayName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: "VictoryAccessibleGroup"
});
Object.defineProperty(VictoryAccessibleGroup, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    "aria-describedby": _propTypes.default.string,
    "aria-label": _propTypes.default.string,
    children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node]),
    className: _propTypes.default.string,
    desc: _propTypes.default.string,
    tabIndex: _propTypes.default.number
  }
});
Object.defineProperty(VictoryAccessibleGroup, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    className: "VictoryAccessibleGroup"
  }
});
var _default = VictoryAccessibleGroup;
exports.default = _default;