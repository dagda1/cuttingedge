// import { flatRoutes } from 'remix-flat-routes';

/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ['**/.*', '**/*.css.ts'],
  publicPath: '/_static/build/',
  server: 'server.js',
  serverBuildPath: 'server/index.mjs',
  serverModuleFormat: 'esm',
  serverDependenciesToBundle: [/^gsap.*/],
  tailwind: false,
};
