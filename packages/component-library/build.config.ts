const paths = require('@cutting/devtools/config/paths');

export const config: BuildConfig = {
  devServer: {
    entries: paths.devDir,
    publicDir: paths.devDirPublic,
    ssrBuild: false,
    isStaticBuild: true,
  },
};

export default config;
