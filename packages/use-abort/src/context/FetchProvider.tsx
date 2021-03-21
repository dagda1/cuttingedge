import type { FetchState, Runnable } from '../types';
import type { Slice } from '@effection/atom';
import { FC, useEffect, useState } from 'react';
import { Task } from 'effection';
import { createAtom } from '@effection/atom';
import { createContext } from 'react';
import { run } from 'effection';
import { createEffects } from 'src/effects/create-effects';

export interface FetchClient {
  atom: Slice<FetchState>;
  scope: Task;
}

export function createFetchClient(): Runnable<FetchClient> {
  return {
    run(scope) {
      const atom = createAtom({ jobs: {} });

      createEffects

      return {
        scope,
        atom,
      };
    },
  };
}

const FetchContext = createContext<FetchClient | undefined>(undefined);

export const useFetchContext = (): FetchClient => {};

export const FetchProvider: FC = ({ children }) => {
  const [fetchClient, setFetchClient] = useState<FetchClient>();

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
