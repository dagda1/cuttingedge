// import { flatRoutes } from 'remix-flat-routes';

/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ['**/.*', '**/*.css.ts'],
  publicPath: '/_static/build/',
  server: 'server.ts',
  serverBuildPath: 'server/index.mjs',
  serverModuleFormat: 'esm',
};
