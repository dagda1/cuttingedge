import type { Provider } from 'react';
import { createContext, useContext } from 'react';

export function createStrictContext<T>(
  options: {
    errorMessage?: string;
    name?: string;
  } = {},
): [Provider<T>, () => T] {
  const Context = createContext<T | undefined>(undefined);
  Context.displayName = options.name;

  function useThisContext() {
    const context = useContext(Context);
    if (context === undefined) {
      throw new Error(options.errorMessage || `${options.name || ''} Context Provider is missing`);
    }

    return context;
  }

  return [Context.Provider, useThisContext] as [Provider<T>, () => T];
}
