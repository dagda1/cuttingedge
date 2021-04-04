import { FC, useContext } from 'react';
import { createAtom } from '@effection/atom';
import { createContext } from 'react';
import { FetchJob, FetchContext } from 'src/types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const atom = createAtom({ jobs: {} as Record<string, FetchJob> });

const Context = createContext<FetchContext>({
  atom,
});

export function useFetchContext(): FetchContext {
  return useContext(Context);
}

export const FetchProvider: FC = ({ children }) => {
  return <Context.Provider value={{ atom }}>{children}</Context.Provider>;
};
