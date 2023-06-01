import type { DeepPartial } from '@cutting/util';
import type { Tokens } from '~/style/themes/tokens';
import { palette } from '~/style/palette.css';

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
    webFont: 'https://fonts.googleapis.com/css?family=Roboto:100,100&amp;display=swap',
    fontFamily: "'Roboto'",
    fontWeight: {
      regular: 900,
      medium: 200,
      strong: 400,
    },
    heading: {
      weight: {
        weak: 'regular',
        regular: 'medium',
      } as const,
      level: {
        '1': {
          mobile: {
            fontSize: 48,
            lineGap: 11,
          },
          tablet: {
            fontSize: 48,
            lineGap: 14,
          },
        },
        '2': {
          mobile: {
            fontSize: 24,
            lineGap: 11,
          },
          tablet: {
            fontSize: 30,
            lineGap: 13,
          },
        },
        '3': {
          mobile: {
            fontSize: 22,
            lineGap: 10,
          },
          tablet: {
            fontSize: 24,
            lineGap: 11,
          },
        },
        '4': {
          mobile: {
            fontSize: 20,
            lineGap: 9,
          },
          tablet: {
            fontSize: 20,
            lineGap: 9,
          },
        },
      },
    },
    text: {
      large: {
        mobile: {
          fontSize: 18,
          lineGap: 13,
        },
        tablet: {
          fontSize: 18,
          lineGap: 13,
        },
      },
      standard: {
        mobile: {
          fontSize: 16,
          lineGap: 12,
        },
        tablet: {
          fontSize: 16,
          lineGap: 12,
        },
      },
      small: {
        mobile: {
          fontSize: 14,
          lineGap: 10,
        },
        tablet: {
          fontSize: 14,
          lineGap: 10,
        },
      },
      xsmall: {
        mobile: {
          fontSize: 12,
          lineGap: 9,
        },
        tablet: {
          fontSize: 12,
          lineGap: 9,
        },
      },
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
