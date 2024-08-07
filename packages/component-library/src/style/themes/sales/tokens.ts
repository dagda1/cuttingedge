import oswald from '@capsizecss/metrics/oswald';
import type { DeepPartial } from '@cutting/util';

import { palette } from '~/style/palette.css';
import type { Tokens } from '~/style/themes/tokens';
import { extractFontMetricsForTheme } from '~/style/util/typography';

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
  color: {
    foreground: {
      link: palette.neutral400,
      linkHover: palette.white,
      linkVisited: palette.neutral100,
      neutral: '#C3CFDD',
      primary: palette.white,
      secondary: palette.white,
      h1: palette.yellow400,
      h2: palette.yellow400,
      h3: palette.yellow400,
      h4: palette.yellow400,
    },
    background: {
      body: palette.gray800,
    },
  },
  typography: {
    webFont: {
      heading: 'https://fonts.googleapis.com/css2?family=Oswald:wght@300&family=Sora&display=swap',
      text: 'https://fonts.googleapis.com/css2?family=Oswald:wght@300&family=Sora&display=swap',
    },
    fontFamily: {
      heading: '"Oswald"',
      text: '"Oswald"',
    },
    fontMetrics: extractFontMetricsForTheme(oswald),
    heading: {
      weight: {
        weak: 'regular',
        regular: 'medium',
      } as const,
      level: {
        '1': {
          mobile: {
            fontSize: 50,
            lineGap: 30,
          },
          tablet: {
            fontSize: 80,
            lineGap: 24,
          },
        },
        '2': {
          mobile: {
            fontSize: 26,
            lineGap: 30,
          },
          tablet: {
            fontSize: 38,
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
          fontSize: 19,
          lineGap: 13,
        },
        tablet: {
          fontSize: 22,
          lineGap: 13,
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
      link: '#0BA5E9',
      hover: palette.white,
    },
    decoration: {
      link: 'none',
    },
  },
};
