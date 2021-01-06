import { paths } from '@cutting/devtools/tools/config/paths';

module.exports = {
  devServer: {
    entries: paths.devDir,
    publicDir: paths.devDirPublic,
    ssrBuild: false,
    isStaticBuild: true,
  },
};
