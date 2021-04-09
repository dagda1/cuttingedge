import type { FetchClient } from '../types';
import { v4 } from 'uuid';

export const createFetchClient = <D, R>(abortController: AbortController): FetchClient<D, R> => {
  const fetchClient: FetchClient<D, R> = {
    jobs: [],
    addFetchRequest(
      this: FetchClient<D, R>,
      info,
      { initialData, onQueryError, onQuerySuccess, contentType = 'json', method = 'GET', ...rest } = {},
    ) {
      fetchClient.jobs.push({
        uuid: v4(),
        fetch: {
          request: info,
          init: {
            signal: abortController.signal,
            method,
            headers: {
              'Content-Type': `application/${contentType}`,
            },
            ...rest,
          },
          contentType,
          initialData,
          onQueryError: onQueryError as (e: Error) => void,
          onQuerySuccess: onQuerySuccess as (t?: D) => void,
        },
      });

      return this;
    },
  };

  return fetchClient;
};
