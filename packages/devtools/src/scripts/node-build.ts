import { build } from './build';

(async () => {
  await build({ buildClient: false, buildServer: false, buildNode: true });
})();
