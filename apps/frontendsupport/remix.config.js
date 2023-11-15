import { flatRoutes } from 'remix-flat-routes';

/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ['**/.*', '**/*.css.ts'],
  serverModuleFormat: 'esm',
  serverPlatform: 'node',
  serverBuildPath: 'build/index.mjs',
  // routes: async (defineRoutes) => {
  //   return flatRoutes('routes', defineRoutes, {
  //     ignoredRouteFiles: ['.*', '**/*.css', '**/*.css.ts', '**/*.test.{js,jsx,ts,tsx}', '**/__*.*'],
  //   });
  // },
};
