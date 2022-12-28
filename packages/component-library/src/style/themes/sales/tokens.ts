import type { DeepPartial } from '@cutting/util';
import { slate } from 'tailwindcss/colors';
import { palette } from '../../palette.css';
import type { Tokens } from '../tokens';

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
      body: slate[300],
      heading: {
        '1': palette.yellow400,
        '2': slate[300],
        '3': slate[300],
        '4': slate[300],
      },
      header: slate[300],
      footer: palette.white,
    },
    background: {
      body: palette.gray800,
      header: palette.gray800,
      heading: palette.gray800,
      footer: palette.gray800,
    },
  },
  typography: {
    fonts: {
      heading: `'Oswald', sans-serif`,
      body: 'Arial, sans-serif',
      paragraphs: 'Arial, sans-serif',
    },
  },
  buttons: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
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
      link: '#0BA5E9',
      hover: palette.white,
    },
    decoration: {
      link: 'none',
    },
  },
};
