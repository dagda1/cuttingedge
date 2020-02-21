const paths = require('./paths');

module.exports = () => {
  let c2Config;

  try {
    c2Config = require(paths.appC2Config);
  } catch (e) {
    c2Config = require(paths.jsBuildConfigPath);
  }

  return c2Config;
};
