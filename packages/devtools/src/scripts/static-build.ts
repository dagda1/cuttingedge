import { build } from './build';

(async () => {
  await build({ buildClient: true, buildServer: false, buildNode: false });
})();
