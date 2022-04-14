'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function normaliseOptions(options) {
  if ('leading' in options && 'lineGap' in options) {
    throw new Error('Only a single line height style can be provided. Please pass either `lineGap` OR `leading`.');
  }

  if ('capHeight' in options && 'fontSize' in options) {
    throw new Error('Please pass either `capHeight` OR `fontSize`, not both.');
  }

  var fontMetrics = options.fontMetrics;
  var capHeightScale = fontMetrics.capHeight / fontMetrics.unitsPerEm;
  var specifiedFontSize;
  var specifiedCapHeight;

  if ('capHeight' in options) {
    specifiedFontSize = options.capHeight / capHeightScale;
    specifiedCapHeight = options.capHeight;
  } else if ('fontSize' in options) {
    specifiedFontSize = options.fontSize;
    specifiedCapHeight = options.fontSize * capHeightScale;
  } else {
    throw new Error('Please pass either `capHeight` OR `fontSize`.');
  }

  var specifiedLineHeight;

  if ('lineGap' in options) {
    specifiedLineHeight = specifiedCapHeight + options.lineGap;
  } else if ('leading' in options) {
    specifiedLineHeight = options.leading;
  }

  return {
    fontSize: specifiedFontSize,
    lineHeight: specifiedLineHeight,
    fontMetrics: fontMetrics
  };
}

/*
   Rounding all values to a precision of `4` based on discovering that browser
   implementations of layout units fall between 1/60th and 1/64th of a pixel.

   Reference: https://trac.webkit.org/wiki/LayoutUnit
   (above wiki also mentions Mozilla - https://trac.webkit.org/wiki/LayoutUnit#Notes)
*/
var round = function round(value) {
  return parseFloat(value.toFixed(4));
};

function precomputeValues(options) {
  var _normaliseOptions = normaliseOptions(options),
      fontSize = _normaliseOptions.fontSize,
      lineHeight = _normaliseOptions.lineHeight,
      fontMetrics = _normaliseOptions.fontMetrics;

  var absoluteDescent = Math.abs(fontMetrics.descent);
  var capHeightScale = fontMetrics.capHeight / fontMetrics.unitsPerEm;
  var descentScale = absoluteDescent / fontMetrics.unitsPerEm;
  var ascentScale = fontMetrics.ascent / fontMetrics.unitsPerEm;
  var lineGapScale = fontMetrics.lineGap / fontMetrics.unitsPerEm;
  var contentArea = fontMetrics.ascent + fontMetrics.lineGap + absoluteDescent;
  var lineHeightScale = contentArea / fontMetrics.unitsPerEm;
  var lineHeightNormal = lineHeightScale * fontSize;

  var allowForLineHeight = function allowForLineHeight(trim) {
    if (lineHeight) {
      var specifiedLineHeightOffset = (lineHeightNormal - lineHeight) / 2;
      return trim - specifiedLineHeightOffset / fontSize;
    }

    return trim;
  };

  var capHeightTrim = allowForLineHeight(ascentScale - capHeightScale + lineGapScale / 2) * -1;
  var baselineTrim = allowForLineHeight(descentScale + lineGapScale / 2) * -1;
  return {
    fontSize: "".concat(round(fontSize), "px"),
    lineHeight: lineHeight ? "".concat(round(lineHeight), "px") : 'normal',
    capHeightTrim: "".concat(round(capHeightTrim), "em"),
    baselineTrim: "".concat(round(baselineTrim), "em")
  };
}

var _createStyleObject = function _createStyleObject(_ref) {
  var lineHeight = _ref.lineHeight,
      fontSize = _ref.fontSize,
      capHeightTrim = _ref.capHeightTrim,
      baselineTrim = _ref.baselineTrim;
  return {
    fontSize: fontSize,
    lineHeight: lineHeight,
    '::before': {
      content: "''",
      marginBottom: capHeightTrim,
      display: 'table'
    },
    '::after': {
      content: "''",
      marginTop: baselineTrim,
      display: 'table'
    }
  };
};

function createStyleObject(args) {
  if ('capHeightTrim' in args) {
    return _createStyleObject(args);
  }

  return _createStyleObject(precomputeValues(args));
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var _excluded = ["::before", "::after"];
function createStyleString(ruleName, options) {
  var _createStyleObject = createStyleObject(options),
      beforePseudo = _createStyleObject['::before'],
      afterPseudo = _createStyleObject['::after'],
      rootStyles = _objectWithoutProperties(_createStyleObject, _excluded);

  var objToCSSRules = function objToCSSRules(stylesObj, psuedoName) {
    return "\n.".concat(ruleName).concat(psuedoName ? "::".concat(psuedoName) : '', " {\n").concat(Object.keys(stylesObj).map(function (property) {
      return "  ".concat(property.replace(/[A-Z]/g, '-$&').toLowerCase(), ": ").concat(stylesObj[property].replace(/'/g, '"'));
    }).join(';\n'), ";\n}");
  };

  return [objToCSSRules(rootStyles), objToCSSRules(beforePseudo, 'before'), objToCSSRules(afterPseudo, 'after')].join('\n');
}

var getCapHeight = function getCapHeight(_ref) {
  var fontSize = _ref.fontSize,
      fontMetrics = _ref.fontMetrics;
  return round(fontSize * fontMetrics.capHeight / fontMetrics.unitsPerEm);
};

exports.createStyleObject = createStyleObject;
exports.createStyleString = createStyleString;
exports.getCapHeight = getCapHeight;
exports.precomputeValues = precomputeValues;
