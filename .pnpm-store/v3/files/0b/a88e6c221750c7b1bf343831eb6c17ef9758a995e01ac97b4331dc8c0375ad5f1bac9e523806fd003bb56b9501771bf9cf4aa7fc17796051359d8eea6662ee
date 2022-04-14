"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePreviousProps = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var usePreviousProps = function (props) {
  var ref = _react.default.useRef();

  _react.default.useEffect(function () {
    ref.current = props;
  });

  return ref.current || {};
};

exports.usePreviousProps = usePreviousProps;