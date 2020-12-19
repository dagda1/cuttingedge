const path = require('path');

module.exports = ['util', 'component-library', 'hooks', 'website'].map(pkg =>
  path.resolve(process.cwd(), `./packages/${pkg}`)
);
