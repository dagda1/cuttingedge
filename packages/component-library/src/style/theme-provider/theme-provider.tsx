import { useContext, ReactNode, FC } from 'react';
import { ensureResetImported } from '../reset/reset-tracker';
import { ThemeContext } from './theme-context';
import { BreakpointProvider } from '../hooks/breakpoints/breakpoints-provider';
import { Theme } from '../themes/make-cutting-theme';

if (process.env.NODE_ENV === 'development') {
  ensureResetImported();
}

export interface ThemeProviderProps {
  theme: Theme & { vanillaTheme: string };
  styleBody?: boolean;
  children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ theme, children }: ThemeProviderProps) => {
  const alreadyInProvider = Boolean(useContext(ThemeContext));

  return (
    <ThemeContext.Provider value={theme}>
      <div className={theme.vanillaTheme}>
        {alreadyInProvider ? children : <BreakpointProvider>{children}</BreakpointProvider>}
      </div>
    </ThemeContext.Provider>
  );
};
