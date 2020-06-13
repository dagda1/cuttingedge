'use strict';

const decamelize = (str: string) => str.replace(/([a-z\d])([A-Z])/g, '$1_$2').toLowerCase();

const dasherize = (str: string) => decamelize(str).replace(/[ _]/g, '-');

module.exports = {
  dasherize,
  decamelize,
};
