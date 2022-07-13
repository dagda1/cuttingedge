export type {
  Builder,
  FetchClient,
  FetchTask,
  UseFetchOptions,
  QueryResult,
  FetchStates,
  ContentType,
  Accumulator,
} from './types';
export { useFetch } from './react-abortable-fetch';

if (typeof window === 'undefined') {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (global as any).fetch = await import('cross-fetch');
  // @ts-ignore
  await import('abortcontroller-polyfill/dist/polyfill-patch-fetch');
}
