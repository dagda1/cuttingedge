import type { Builder, FetchClient } from '../types';
import { v4 } from 'uuid';

const getJobKey = (info: RequestInfo) => {
  return JSON.stringify(info);
};

export const createFetchClient = <A, R>(
  addFetch: string | string[] | Builder<A, R>,
  abortController: AbortController,
): FetchClient<A, R> => {
  let fetchClient: FetchClient<A, R> = {
    jobs: [],
    addFetchRequest(
      this: FetchClient<A, R>,
      info,
      { initialState, onQueryError, onQuerySuccess, contentType = 'json', method = 'GET', ...rest } = {},
    ) {
      const key = getJobKey(info);
      if (this.jobs.find((j) => j.key === key)) {
        return this;
      }

      this.jobs.push({
        uuid: v4(),
        key,
        state: 'READY',
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
          initialState,
          onQueryError: onQueryError as (e: Error) => void,
          onQuerySuccess: onQuerySuccess as (t?: A) => void,
        },
      });

      return this;
    },
  };

  if (typeof addFetch === 'string') {
    fetchClient.addFetchRequest(addFetch);
  } else if (Array.isArray(addFetch)) {
    for (const url of addFetch) {
      fetchClient.addFetchRequest(url);
    }
  } else if (typeof addFetch === 'function') {
    fetchClient = addFetch(fetchClient);
  }

  return fetchClient;
};
