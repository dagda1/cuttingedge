import { paths } from '@cutting/devtools/tools/config/paths';

export default {
  client: {
    entries: process.env.NODE_ENV === 'development' ? paths.devDir : [paths.appSrc],
    publicDir: paths.devDirPublic,
    ssrBuild: false,
    isStaticBuild: true,
  },
};
