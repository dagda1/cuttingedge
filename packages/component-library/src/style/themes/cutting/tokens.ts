import { DeepPartial } from '@cutting/util';
import { palette } from '../../palette.css';
import { Tokens } from '../tokens';

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
      footer: palette.white,
    },
    background: {
      body: palette.gray800,
      header: palette.gray800,
      footer: palette.gray800,
    },
  },
  headings: {
    color: palette.white,
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
      link: palette.trueGray400,
      hover: palette.white,
    },
    decoration: {
      link: 'none',
    },
  },
};
