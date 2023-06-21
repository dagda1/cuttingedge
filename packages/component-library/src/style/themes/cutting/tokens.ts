import type { DeepPartial } from '@cutting/util';
import type { Tokens } from '~/style/themes/tokens';
import { palette } from '~/style/palette.css';
import { extractFontMetricsForTheme } from '~/style/util/typography';
import roboto from '@capsizecss/metrics/roboto';

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
      primary: palette.white,
      secondary: palette.white,
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
      body: 'transparent',
    },
  },
  typography: {
    webFont: 'https://fonts.googleapis.com/css?family=Roboto:100,100&amp;display=swap',
    fontMetrics: extractFontMetricsForTheme(roboto),
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
            fontSize: 32,
            lineGap: 11,
          },
          tablet: {
            fontSize: 48,
            lineGap: 14,
          },
        },
        '2': {
          mobile: {
            fontSize: 26,
            lineGap: 11,
          },
          tablet: {
            fontSize: 38,
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
          fontSize: 26,
          lineGap: 11,
        },
        tablet: {
          fontSize: 38,
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
      background: palette.lime500,
      focusColor: colors.secondary,
      padding: buttonPadding,
    },
    secondary: {
      background: colors.secondary,
      focusColor: palette.lime500,
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
