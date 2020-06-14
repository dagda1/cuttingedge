'use strict';

const Papa = require('papaparse');

// This is a custom Jest transformer turning file imports into filenames.
// http://facebook.github.io/jest/docs/tutorial-webpack.html

module.exports = {
  process(src) {
    const parsed = Papa.parse(src);
    return `module.exports = ${JSON.stringify(parsed.data)};`;
  },
};
