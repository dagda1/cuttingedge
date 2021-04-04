import type { FetchClient } from 'src/types';
import { identity } from '@cutting/util';
import { v4 } from 'uuid';

const noOp = () => void 0;

export const createFetchClient = (abortController: AbortController): FetchClient => {
  const fetchClient: FetchClient = {
    jobs: [],
    addFetchRequest(
      this: FetchClient,
      info,
      { initialData, onError = noOp, onSuccess = identity, contentType = 'json', method = 'GET', ...rest },
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
