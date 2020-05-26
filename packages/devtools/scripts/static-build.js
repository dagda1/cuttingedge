const { build } = require('./build');

(async () => {
  await build({ buildClient: true, buildServer: false, buildNode: false });
})();
