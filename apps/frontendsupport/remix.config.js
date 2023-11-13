import { flatRoutes } from 'remix-flat-routes';

/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ['**/*'],
  serverModuleFormat: 'esm',
  serverPlatform: 'node',
  serverBuildPath: 'server/index.mjs',
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  routes: async (defineRoutes) => {
    return flatRoutes('routes', defineRoutes, {
      ignoredRouteFiles: ['.*', '**/*.css', '**/*.css.ts', '**/*.test.{js,jsx,ts,tsx}', '**/__*.*'],
    });
  },
};
