import { DeepPartial } from '@cutting/util';
import { palette } from '../../palette.css';
import { Tokens } from '../tokens';

const colors = {
  primary: 'linear-gradient(167deg, rgba(40,13,87,1) 0%, rgba(54,63,159,1) 100%)',
  secondary: palette.white,
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
      body: palette.violet300,
    },
    background: {
      body: '`linear-gradient(167deg, rgba(40,13,87,1) 0%, rgba(54,63,159,1) 100%)`',
    },
  },
  typography: {
    fonts: {
      heading: `'Poppins',sans-serif`,
      body: `'Poppins',sans-serif`,
    },
  },
  headings: {
    color: palette.white,
  },
  buttons: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    width: {
      tablet: '100%',
    },
    primary: {
      background: 'linear-gradient( 93deg,rgba(37,42,213,1) 0%,rgba(122,49,222,1) 52%,rgba(196,56,231,1) 100% )',
      focusColor: colors.secondary,
      padding: buttonPadding,
      boxShadowColor: colors.primary,
    },
    secondary: {
      background: colors.secondary,
      focusColor: colors.primary,
      color: palette.blue700,
      padding: buttonPadding,
      boxShadowColor: colors.secondary,
    },
    warning: {
      boxShadowColor: palette.redError,
    },
  },
  radios: {
    borderColor: palette.blue600,
  },
  links: {
    color: {
      link: palette.violet300,
      hover: palette.white,
    },
    decoration: {
      link: 'none',
    },
  },
};
