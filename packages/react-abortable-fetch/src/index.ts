export type { Builder, FetchClient, FetchJob, useFetchOptions, QueryResult } from './types';
export { useFetch } from './react-abortable-fetch';

if (typeof window === 'undefined') {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (global as any).fetch = require('node-fetch');
  require('abortcontroller-polyfill/dist/polyfill-patch-fetch');
}
