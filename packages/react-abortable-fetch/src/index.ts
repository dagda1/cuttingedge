import 'cross-fetch/polyfill';

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
