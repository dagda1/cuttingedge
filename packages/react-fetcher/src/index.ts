declare const __BROWSER__: boolean;

export type { AddFetch, FetchClient, FetchJob, UseFetcherOptions, QueryResult } from './types';
export { useFetcher } from './react-fetcher';

if (!__BROWSER__) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (global as any).fetch = require('node-fetch');
  require('abortcontroller-polyfill/dist/polyfill-patch-fetch');
}
