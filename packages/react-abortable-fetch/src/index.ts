export type {
  Builder,
  FetchClient,
  FetchTask,
  UseFetchOptions,
  QueryResult,
  FetchStates,
  FetchActionTypes,
  ContentType,
  Accumulator,
} from './types';
export { useFetch } from './react-abortable-fetch';

if (typeof window === 'undefined') {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (global as any).fetch = require('cross-fetch');
  require('abortcontroller-polyfill/dist/polyfill-patch-fetch');
}
