'use strict';

const decamelize = str =>
  str.replace(/([a-z\d])([A-Z])/g, '$1_$2').toLowerCase();

const dasherize = str => decamelize(str).replace(/[ _]/g, '-');

module.exports = {
  dasherize,
  decamelize
};
