import { build } from './build.js';

(async () => {
  await build({ buildClient: true, buildServer: true, buildNode: false });
})();
