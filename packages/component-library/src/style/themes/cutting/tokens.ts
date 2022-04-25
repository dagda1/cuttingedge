import type { DeepPartial } from '@cutting/util';
import type { Tokens } from '../tokens';
import { palette } from '../../palette.css';

const colors = {
  primary: palette.lime500,
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
      header: palette.white,
      heading: {
        '1': palette.white,
        '2': palette.white,
        '3': palette.white,
        '4': palette.white,
      },
      footer: palette.white,
    },
    background: {
      body: palette.black,
      heading: palette.black,
      header: palette.black,
      footer: palette.black,
    },
  },
  typography: {
    fonts: {
      heading: 'Arial, sans-serif',
      body: 'Arial, sans-serif',
      paragraphs: 'Arial, sans-serif',
    },
  },
  buttons: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    width: {
      tablet: '100%',
    },
    primary: {
      background: colors.primary,
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
    borderColor: colors.primary,
  },
  links: {
    color: {
      link: palette.neutral400,
      hover: palette.white,
    },
    decoration: {
      link: 'none',
    },
  },
};
