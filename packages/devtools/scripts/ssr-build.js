const { build } = require('./build');

(async () => {
  await build({ buildClient: true, buildServer: true, buildNode: false });
})();
