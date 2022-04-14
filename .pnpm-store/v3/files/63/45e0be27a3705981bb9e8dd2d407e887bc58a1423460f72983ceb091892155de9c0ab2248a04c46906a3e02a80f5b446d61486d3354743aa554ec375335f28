'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var integration = require('@vanilla-extract/integration');
var loaderUtils = require('loader-utils');

function virtualFileLoader () {
  const {
    source
  } = loaderUtils.getOptions(this);
  const callback = this.async();
  integration.deserializeCss(source).then(deserializedCss => {
    callback(null, deserializedCss);
  });
}

exports["default"] = virtualFileLoader;
