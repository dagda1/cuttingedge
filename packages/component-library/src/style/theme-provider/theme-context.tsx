import { createContext, useContext } from 'react';
import { Theme } from '../themes/make-cutting-theme';

export const ThemeContext = createContext<Theme | null>(null);

export const useTheme = (): Theme => {
  const theme = useContext(ThemeContext);

  if (theme === null) {
    throw new Error('No theme available on context');
  }

  return theme;
};
