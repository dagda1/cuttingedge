// import { flatRoutes } from 'remix-flat-routes';

/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ['**/*'],
  publicPath: '/_static/build/',
  server: './server.mjs',
  serverBuildPath: 'server/index.mjs',
  serverMainFields: ['main', 'module'],
  serverMinify: false,
  serverModuleFormat: 'esm',
  serverPlatform: 'node',
  // routes: async (defineRoutes) => {
  //   return flatRoutes('routes', defineRoutes, {
  //     ignoredRouteFiles: ['.*', '**/*.css', '**/*.css.ts', '**/*.test.{js,jsx,ts,tsx}', '**/__*.*'],
  //   });
  // },
};
