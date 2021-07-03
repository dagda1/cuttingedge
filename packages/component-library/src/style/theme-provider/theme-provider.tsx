import { useContext, FC } from 'react';
import { ensureResetImported } from '../reset/reset-tracker';
import { ThemeContext } from './theme-context';
import { BreakpointProvider } from '../hooks/breakpoints/breakpoints-provider';
import { Theme } from '../themes/make-cutting-theme';
// import { makeVanillaTheme } from '../themes/make-vanilla-theme';

if (process.env.NODE_ENV === 'development') {
  ensureResetImported();
}

export interface ThemeProviderProps {
  theme: Theme & { theme: string };
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ theme, children }) => {
  const alreadyInProvider = Boolean(useContext(ThemeContext));

  console.log(theme);

  return (
    <ThemeContext.Provider value={theme}>
      <div className={theme.theme}>
        {alreadyInProvider ? children : <BreakpointProvider>{children}</BreakpointProvider>}
      </div>
    </ThemeContext.Provider>
  );
};
