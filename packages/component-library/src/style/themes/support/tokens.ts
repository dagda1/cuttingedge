import type { DeepPartial } from '@cutting/util';
import { palette } from '~/style/palette.css';
import type { Tokens } from '~/style/themes/tokens';
import { extractFontMetricsForTheme } from '~/style/util/typography';
import montserrat from '@capsizecss/metrics/montserrat';
import { helveticaNowDisplayMedium } from './font.css';

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
      secondary: palette.neutral600,
      info: '#F5DEB3',
      promote: '#ffff00',
      link: palette.white,
      linkHover: palette.neutral700,
      linkVisited: palette.neutral400,
      neutral: palette.neutral400,
      h1: palette.white,
      h2: palette.white,
      h3: palette.white,
      h4: palette.white,
    },
    background: {
      body: palette.black,
      secondary: palette.gray800,
    },
  },
  grid: 4,
  typography: {
    webFont: {
      heading: 'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Rubik:wght@300&display=swap',
      text: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap',
    },
    fontFamily: {
      heading: `${helveticaNowDisplayMedium}, sans-serif`,
      text: `${helveticaNowDisplayMedium}, sans-serif`,
    },
    fontMetrics: extractFontMetricsForTheme(montserrat),
    fontWeight: {
      regular: 300,
    },
    heading: {
      weight: {
        weak: 'regular',
        regular: 'medium',
      } as const,
      level: {
        '1': {
          mobile: {
            fontSize: 50,
            lineGap: 12,
          },
          tablet: {
            fontSize: 60,
            lineGap: 15,
          },
        },
        '2': {
          mobile: {
            fontSize: 26,
            lineGap: 14,
          },
          tablet: {
            fontSize: 38,
            lineGap: 15,
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
          fontSize: 22,
          lineGap: 9,
        },
        tablet: {
          fontSize: 25,
          lineGap: 13,
        },
      },
      standard: {
        mobile: {
          fontSize: 16,
          lineGap: 9,
        },
        tablet: {
          fontSize: 19,
          lineGap: 11,
        },
      },
      small: {
        mobile: {
          fontSize: 14,
          lineGap: 12,
        },
        tablet: {
          fontSize: 17,
          lineGap: 13,
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
