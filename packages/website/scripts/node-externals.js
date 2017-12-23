const readdirSync = require('fs').readdirSync;
const join = require('path').join;

module.exports = readdirSync(join(__dirname, '../../../node_modules'))
  .filter(x => !/\.bin|react-universal-component|require-universal-module|webpack-flush-chunks|react-dom/.test(x))
  .reduce((externals, mod) => {
    console.log('-----------');
    console.log(mod);
    console.log('-----------');
    externals[mod] = `commonjs ${mod}`;
    return externals;
  }, {});
