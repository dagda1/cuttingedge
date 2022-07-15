import { paths } from '@cutting/devtools/paths.js';

export default {
  client: {
    entries: process.env.NODE_ENV === 'development' ? paths.devDir : [paths.appSrc],
    publicDir: paths.devDirPublic,
    ssrBuild: false,
    isStaticBuild: true,
  },
};
