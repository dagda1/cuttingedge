import type { AddFetch, FetchClient } from '../types';
import { v4 } from 'uuid';

const getJobKey = (info: RequestInfo) => {
  return JSON.stringify(info);
};

export const createFetchClient = <D, R>(
  addFetch: string | string[] | AddFetch<D, R>,
  abortController: AbortController,
): FetchClient<D, R> => {
  let fetchClient: FetchClient<D, R> = {
    jobs: [],
    addFetchRequest(
      this: FetchClient<D, R>,
      info,
      { initialData, onQueryError, onQuerySuccess, contentType = 'json', method = 'GET', ...rest } = {},
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
          initialData,
          onQueryError: onQueryError as (e: Error) => void,
          onQuerySuccess: onQuerySuccess as (t?: D) => void,
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
