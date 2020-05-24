const { build } = require('./build');

(async () => {
  await build({ buildClient: false, buildServer: false, buildNode: true });
})();
