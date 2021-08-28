import { DeepPartial } from '@cutting/util';
import { palette } from '../../palette.css';
import { Tokens } from '../tokens';

const colors = {
  primary: palette.sky700,
  secondary: palette.sky900,
};

const buttonPadding = '14px 22px';

export const tokens: DeepPartial<Tokens> = {
  border: {
    width: {
      standard: 20,
    },
  },
  colors: {
    ...colors,
  },
  color: {
    foreground: {
      body: palette.white,
    },
    background: {
      body: palette.gray800,
    },
  },
  typography: {
    fonts: {
      heading: 'Arial, sans-serif',
      body: 'Arial, sans-serif',
    },
  },
  buttons: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    width: {
      tablet: '100%',
    },
    primary: {
      backgroundColor: colors.primary,
      focusColor: colors.secondary,
      padding: buttonPadding,
      boxShadowColor: colors.primary,
    },
    secondary: {
      backgroundColor: colors.secondary,
      focusColor: colors.primary,
      color: palette.white,
      padding: buttonPadding,
      boxShadowColor: colors.secondary,
    },
    warning: {
      boxShadowColor: palette.redError,
    },
  },
  radios: {
    borderColor: colors.primary,
  },
  links: {
    color: {
      link: palette.trueGray400,
      hover: palette.white,
    },
    decoration: {
      link: 'none',
    },
  },
};
