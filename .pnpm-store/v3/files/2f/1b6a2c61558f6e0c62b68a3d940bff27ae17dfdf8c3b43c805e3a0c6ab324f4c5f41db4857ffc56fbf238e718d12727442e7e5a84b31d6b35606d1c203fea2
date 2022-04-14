import { createThemeContract, style, composeStyles, assignVars } from '@vanilla-extract/css';
import { createStyleObject, precomputeValues } from '@capsizecss/core';
export { precomputeValues } from '@capsizecss/core';
import * as __vanilla_filescope__ from '@vanilla-extract/css/fileScope';

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

__vanilla_filescope__.setFileScope("packages/vanilla-extract/src/capsize.css.ts", "capsize");
var capsizeVars = createThemeContract({
  fontSize: null,
  lineHeight: null,
  capHeightTrim: null,
  baselineTrim: null
});
var capsizeStyle = style(createStyleObject({
  fontSize: capsizeVars.fontSize,
  lineHeight: capsizeVars.lineHeight,
  capHeightTrim: capsizeVars.capHeightTrim,
  baselineTrim: capsizeVars.baselineTrim
}), "capsizeStyle");

__vanilla_filescope__.endFileScope();

var createVanillaStyle = function createVanillaStyle(_ref) {
  var values = _ref.values,
      mediaQueries = _ref.mediaQueries,
      debugId = _ref.debugId;
  var vars = {
    vars: assignVars(capsizeVars, values)
  };

  if (typeof mediaQueries !== 'undefined') {
    var mqs = {};
    Object.entries(mediaQueries['@media']).forEach(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
          mq = _ref3[0],
          val = _ref3[1];

      var builtValues = 'capHeightTrim' in val ? val : precomputeValues(val);
      mqs[mq] = {
        vars: assignVars(capsizeVars, builtValues)
      };
    });
    vars['@media'] = mqs;
  }

  return composeStyles(capsizeStyle, style(vars, debugId));
};

function createTextStyle() {
  var hasMediaQueries = typeof (arguments.length <= 1 ? undefined : arguments[1]) !== 'undefined' && typeof (arguments.length <= 1 ? undefined : arguments[1]) !== 'string';
  var debugId = hasMediaQueries ? arguments.length <= 2 ? undefined : arguments[2] : arguments.length <= 1 ? undefined : arguments[1];
  var mediaQueries = hasMediaQueries ? arguments.length <= 1 ? undefined : arguments[1] : undefined;

  if ('capHeightTrim' in (arguments.length <= 0 ? undefined : arguments[0])) {
    return createVanillaStyle({
      values: arguments.length <= 0 ? undefined : arguments[0],
      mediaQueries: mediaQueries,
      debugId: debugId
    });
  }

  return createVanillaStyle({
    values: precomputeValues(arguments.length <= 0 ? undefined : arguments[0]),
    mediaQueries: mediaQueries,
    debugId: debugId
  });
}

export { createTextStyle };
