import { paths } from '@cutting/devtools/paths.js';

export default {
  client: {
    entries: { client: paths.appClientIndexJs },
    ssrBuild: true,
    hotReloading: true,
  },
};
