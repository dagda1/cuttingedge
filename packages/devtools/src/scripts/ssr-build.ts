import { build } from './build';

(async () => {
  await build({ buildClient: true, buildServer: true, buildNode: false });
})();
