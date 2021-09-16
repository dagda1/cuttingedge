import { StorageHelper } from '@cutting/util';
import { useEffect, useState, createContext, useContext, FC } from 'react';
import * as styles from './ColorModeToggle.css';

type ColorMode = 'dark' | 'light';
export const themeKey = 'vanilla-theme-pref';

interface ColorModeContextValues {
  colorMode: ColorMode | null;
  setColorMode: (colorMode: ColorMode) => void;
}

const storageHelper = new StorageHelper('localStorage');

export const ColorModeContext = createContext<ColorModeContextValues>({
  colorMode: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setColorMode: () => {},
});

export const ColorModeProvider: FC = ({ children }) => {
  const [colorMode, setColorMode] = useState<ColorMode | null>(null);

  useEffect(() => {
    setColorMode(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
  }, []);

  const setter = (c: ColorMode) => {
    setColorMode(c);

    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(c);

    try {
      storageHelper.setItem(themeKey, c);
    } catch (e) {}
  };

  return (
    <ColorModeContext.Provider
      value={{
        colorMode,
        setColorMode: setter,
      }}
    >
      {children}
    </ColorModeContext.Provider>
  );
};

export const ColorModeToggle: FC = () => {
  const { colorMode, setColorMode } = useContext(ColorModeContext);

  return (
    <Box
      component="button"
      padding={{ desktop: 'small' }}
      cursor="pointer"
      className={styles.root}
      title="Toggle colour mode"
      onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}
    >
      &nbsp;
    </Box>
  );
};
