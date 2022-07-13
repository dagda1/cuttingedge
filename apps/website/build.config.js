import { paths } from '@cutting/devtools/tools/config/paths';

export default {
  client: {
    entries: { client: paths.appClientIndexJs },
    ssrBuild: true,
    hotReloading: true,
  },
};
