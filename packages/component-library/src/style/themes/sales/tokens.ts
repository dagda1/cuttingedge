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
      header: palette.gray600,
      footer: palette.gray600,
    },
    background: {
      body: 'linear-gradient(167deg, rgba(40,13,87,1) 0%, rgba(54,63,159,1) 100%)',
      header: palette.white,
      footer: palette.white,
    },
  },
  typography: {
    fonts: {
      heading: `baton-turbo,sans-serif`,
      body: `baton-turbo,sans-serif`,
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
      boxShadowColor: palette.orange400,
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
      hover: palette.gray600,
    },
    decoration: {
      link: 'none',
    },
  },
};
