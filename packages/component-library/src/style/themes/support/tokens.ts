import type { DeepPartial } from '@cutting/util';
import { palette } from '~/style/palette.css';
import type { Tokens } from '~/style/themes/tokens';
import { extractFontMetricsForTheme } from '~/style/util/typography';
import bebasNeue from '@capsizecss/metrics/bebasNeue';

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
    color: {
      neutralLight: palette.white,
    },
  },
  color: {
    foreground: {
      secondary: palette.white,
      info: '#FFD700',
      promote: '#ffff00',
      link: palette.neutral400,
      linkHover: palette.white,
      linkVisited: palette.neutral100,
      neutral: palette.neutral400,
      h1: palette.white,
      h2: palette.white,
      h3: palette.white,
      h4: palette.white,
    },
    background: {
      body: palette.black,
    },
  },
  typography: {
    webFont: 'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Rubik:wght@300&display=swap',
    fontFamily: 'Bebas Neue,Rubik',
    fontMetrics: extractFontMetricsForTheme(bebasNeue),
    heading: {
      weight: {
        weak: 'regular',
        regular: 'medium',
      } as const,
      level: {
        '1': {
          mobile: {
            fontSize: 96,
            lineGap: 30,
          },
          tablet: {
            fontSize: 128,
            lineGap: 24,
          },
        },
        '2': {
          mobile: {
            fontSize: 60,
            lineGap: 30,
          },
          tablet: {
            fontSize: 80,
            lineGap: 24,
          },
        },
        '3': {
          mobile: {
            fontSize: 28,
            lineGap: 12,
          },
          tablet: {
            fontSize: 31,
            lineGap: 15,
          },
        },
        '4': {
          mobile: {
            fontSize: 22,
            lineGap: 13,
          },
          tablet: {
            fontSize: 25,
            lineGap: 13,
          },
        },
      },
    },
    text: {
      large: {
        mobile: {
          fontSize: 30,
          lineGap: 30,
        },
        tablet: {
          fontSize: 48,
          lineGap: 24,
        },
      },
      standard: {
        mobile: {
          fontSize: 16,
          lineGap: 10,
        },
        tablet: {
          fontSize: 19,
          lineGap: 13,
        },
      },
      small: {
        mobile: {
          fontSize: 14,
          lineGap: 10,
        },
        tablet: {
          fontSize: 17,
          lineGap: 10,
        },
      },
      xsmall: {
        mobile: {
          fontSize: 12,
          lineGap: 9,
        },
        tablet: {
          fontSize: 15,
          lineGap: 9,
        },
      },
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
      padding: buttonPadding,
    },
  },
  radios: {
    borderColor: colors.primary,
  },
  links: {
    color: {
      link: palette.white,
      hover: palette.gray500,
    },
    decoration: {
      link: 'none',
    },
  },
};
