import { FC, useContext } from 'react';
import { createAtom } from '@effection/atom';
import { createContext } from 'react';
import { FetchTask, FetchAtomContext } from '../types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const atom = createAtom({ jobs: {} as Record<string, FetchTask<any, any>> });

const Context = createContext<FetchAtomContext>({
  atom,
});

export function useFetchContext(): FetchAtomContext {
  return useContext(Context);
}

export const FetchProvider: FC = ({ children }) => {
  return <Context.Provider value={{ atom }}>{children}</Context.Provider>;
};
