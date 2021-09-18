import { DeepPartial } from '@cutting/util';
import { palette } from '../../palette.css';
import { Tokens } from '../tokens';

const colors = {
  primary: 'linear-gradient(167deg, rgba(40,13,87,1) 0%, rgba(54,63,159,1) 100%)',
  secondary: palette.lime500,
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
      header: palette.white,
      footer: palette.white,
    },
    background: {
      body: palette.gray800,
      header: palette.gray800,
      footer: palette.gray800,
    },
  },
  typography: {
    fonts: {
      heading: 'futura-pt,sans-serif',
      body: 'futura-pt,sans-serif',
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
      background: palette.orange400,
      focusColor: colors.secondary,
      padding: buttonPadding,
    },
    secondary: {
      background: colors.secondary,
      focusColor: colors.primary,
      color: palette.white,
      padding: buttonPadding,
    },
  },
  radios: {
    borderColor: palette.white,
  },
  links: {
    color: {
      link: palette.white,
      hover: palette.gray300,
    },
    decoration: {
      link: 'none',
    },
  },
};
