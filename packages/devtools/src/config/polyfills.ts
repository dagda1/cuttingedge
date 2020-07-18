'use strict';

if (typeof Promise === 'undefined') {
  // Rejection tracking prevents a common issue where React gets into an
  // inconsistent state due to an error, but it gets swallowed by a Promise,
  // and the user has no idea what causes React's erratic future behavior.
  require('promise/lib/rejection-tracking').enable();
  window.Promise = require('promise/lib/es6-extensions.js');
}

require('whatwg-fetch');

window.requestAnimationFrame =
  window.requestAnimationFrame ||
  function (callback) {
    return window.setTimeout(function () {
      callback(+new Date());
    }, 20);
  };

window.cancelAnimationFrame = window.cancelAnimationFrame || window.clearTimeout;
