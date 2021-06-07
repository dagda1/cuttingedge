import { StorageHelper } from '@cutting/util';
import { useEffect, useState, createContext, useContext, FC } from 'react';
import { Button } from 'src/components/atoms/Button/Button';
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

    storageHelper.setItem(themeKey, c);
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
    <Button
      className={styles.root}
      buttonStyle="primary"
      onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}
    >
      &nbsp;
    </Button>
  );
};
