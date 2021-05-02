import type { Builder, FetchClient, FetchRequestInfo } from '../types';
import { v4 } from 'uuid';

const getJobKey = (info: string | FetchRequestInfo) => {
  return JSON.stringify(info);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isRequestInfo = (o: any): o is FetchRequestInfo => Array.isArray(o) === false && typeof o !== 'function';

export function createFetchClient<R, T>(
  builderOrRequestInfos: string | string[] | FetchRequestInfo | FetchRequestInfo[] | Builder<R, T>,
  abortController: AbortController,
): FetchClient<R, T> {
  let fetchClient: FetchClient<R, T> = {
    jobs: [],
    addFetchRequest(
      this: FetchClient<R, T>,
      info,
      { initialState, onQueryError, onQuerySuccess, contentType = 'json', method = 'GET', ...rest } = {},
    ) {
      const key = getJobKey(info);

      if (this.jobs.find((j) => j.key === key)) {
        return this;
      }

      let url: string;
      let init: RequestInit;

      if (typeof info === 'string') {
        url = info;
        init = {};
      } else {
        ({ url, ...init } = info);
      }

      this.jobs.push({
        uuid: v4(),
        key,
        state: 'READY',
        fetch: {
          request: url,
          init: {
            signal: abortController.signal,
            method,
            headers: {
              'Content-Type': `application/${contentType}`,
            },
            ...rest,
            ...init,
          },
          contentType,
          initialState,
          onQueryError: onQueryError as (e: Error) => void,
          onQuerySuccess: onQuerySuccess as (t?: T) => void,
        },
      });

      return this;
    },
  };

  if (isRequestInfo(builderOrRequestInfos)) {
    fetchClient.addFetchRequest(builderOrRequestInfos);
  } else if (Array.isArray(builderOrRequestInfos)) {
    for (const fetchRequestInfo of builderOrRequestInfos) {
      fetchClient.addFetchRequest(fetchRequestInfo);
    }
  } else if (typeof builderOrRequestInfos === 'function') {
    fetchClient = builderOrRequestInfos(fetchClient);
  }

  return fetchClient;
}
