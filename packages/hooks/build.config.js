import { paths } from '@cutting/devtools/paths.js';

export default {
  devServer: {
    entries: paths.devDir,
    publicDir: paths.devDirPublic,
    ssrBuild: false,
    isStaticBuild: true,
  },
};
