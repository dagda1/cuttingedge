import { assert } from '@cutting/assert';
import type { ReactNode } from 'react';
import { createContext, useContext, useMemo } from 'react';

export interface ContactFormContext {
  returnUrl?: string;
}

export const FormContext = createContext<ContactFormContext | undefined>(undefined);

export function FormContextProvider({ children, ...props }: ContactFormContext & { children: ReactNode }): JSX.Element {
  const value = useMemo(
    () => ({
      ...props,
    }),
    [props],
  );

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}

export function useFormContext(): ContactFormContext {
  const context = useContext(FormContext);

  assert(!!context, 'useFormContext must be within FormContextProvider');

  return context;
}
