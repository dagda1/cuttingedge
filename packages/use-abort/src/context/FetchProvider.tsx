import type { FetchState, Runnable } from '../types';
import type { Slice } from '@effection/atom';
import { FC, useEffect, useState } from 'react';
import { Task } from 'effection';
import { createAtom } from '@effection/atom';
import { createContext } from 'react';
import { createEffects } from 'src/effects/create-effects';



export function createFetchClient<T>(): Runnable<FetchClient<T>> {
  return {
    run(scope) {
      const atom = createAtom({ jobs: {} });

      createEffects(atom);

      return {
        scope,
        atom,
      };
    },
  };
}

const FetchContext = createContext<FetchClient<unknown> | undefined>(undefined);

export function useFetchContext<T>(): FetchClient<T> {}

export const FetchProvider: FC = ({ children }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [fetchClient, setFetchClient] = useState<FetchClient<any>>();

  useEffect(() => {
    if (!!fetchClient) {
      return;
    }
  }, []);

  if (typeof fetchClient === 'undefined') {
    return null;
  }
  return <FetchContext.Provider value={fetchClient}>{children}</FetchContext.Provider>;
};
