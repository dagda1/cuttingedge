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
      body: 'transparent',
      heading: 'transparent',
      header: 'transparent',
      footer: 'transparent',
    },
  },
  typography: {
    fonts: {
      heading: "'Roboto'",
      body: "'Roboto'",
      paragraphs: "'Roboto'",
    },
    fontWeight: {
      regular: 900,
      medium: 200,
      strong: 400,
    },
  },
  buttons: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    primary: {
      background: palette.lime500,
      focusColor: colors.secondary,
      padding: buttonPadding,
    },
    secondary: {
      background: colors.secondary,
      focusColor: palette.lime500,
      color: palette.white,
      padding: buttonPadding,
    },
  },
  radios: {
    borderColor: palette.lime500,
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
