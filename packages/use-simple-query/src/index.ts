declare const __BROWSER__: boolean;

export type { AddFetch, FetchClient, FetchJob, UseAbortOptions, UseAbortResult } from './types';
export { useSimpleQuery } from './useSimpleQuery';

if (!__BROWSER__) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (global as any).fetch = require('node-fetch');
  require('abortcontroller-polyfill/dist/polyfill-patch-fetch');
}
