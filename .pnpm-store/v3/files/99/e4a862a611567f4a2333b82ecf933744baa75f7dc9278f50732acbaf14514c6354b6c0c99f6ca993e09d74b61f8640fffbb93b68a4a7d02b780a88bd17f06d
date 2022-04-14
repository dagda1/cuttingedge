function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from "react";
import PropTypes from "prop-types";

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
      return desc ? React.createElement("g", {
        "aria-label": this.props["aria-label"],
        "aria-describedby": descId,
        className: className,
        tabIndex: tabIndex
      }, React.createElement("desc", {
        id: descId
      }, desc), children) : React.createElement("g", {
        "aria-label": this.props["aria-label"],
        "aria-describedby": this.props["aria-describedby"],
        className: className,
        tabIndex: tabIndex
      }, children);
    }
  }]);

  return VictoryAccessibleGroup;
}(React.Component);

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
    "aria-describedby": PropTypes.string,
    "aria-label": PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    className: PropTypes.string,
    desc: PropTypes.string,
    tabIndex: PropTypes.number
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
export default VictoryAccessibleGroup;