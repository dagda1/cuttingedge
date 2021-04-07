import type { FetchClient } from '../types';
import { identity } from '@cutting/util';
import { v4 } from 'uuid';

const noOp = () => void 0;

export const createFetchClient = <D, R>(abortController: AbortController): FetchClient<D, R> => {
  const fetchClient: FetchClient<D, R> = {
    jobs: [],
    addFetchRequest(
      this: FetchClient<D, R>,
      info,
      { initialData, onError = noOp, onSuccess = identity, contentType = 'json', method = 'GET', ...rest } = {},
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
          onError,
          onSuccess,
        },
      });

      return this;
    },
  };

  return fetchClient;
};
