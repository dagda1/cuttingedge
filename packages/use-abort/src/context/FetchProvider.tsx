import { FC, useContext } from 'react';
import { createAtom } from '@effection/atom';
import { createContext } from 'react';
import { FetchJob, FetchState } from 'src/types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const atom = createAtom({ jobs: {} as Record<string, FetchJob<any>> });

const FetchContext = createContext<FetchState>({
  atom,
});

export function useFetchContext(): FetchState {
  return useContext(FetchContext);
}

export const FetchProvider: FC = ({ children }) => {
  return <FetchContext.Provider value={{ atom }}>{children}</FetchContext.Provider>;
};
