const path = require('path');

module.exports = {
  client: {
    entries: { client: path.join(process.cwd(), 'src/client') },
    ssrBuild: true,
    hotReloading: true
  }
};
