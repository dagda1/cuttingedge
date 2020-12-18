import { build } from './build';
import { copyAssets } from './copy-assets';

(async () => {
  await build({ buildClient: false, buildServer: false, buildNode: true });

  copyAssets();
})();
