const path = require('path');

module.exports = ['util', 'component-library', 'connected-components', 'website'].map((pkg) =>
  path.resolve(process.cwd(), `./packages/${pkg}`)
);
