import { rem } from 'polished';
import { palette } from '~/style/palette.css';
import arialMetfics from '@capsizecss/metrics/arial';
import { extractFontMetricsForTheme } from '../util/typography';

const fontWeight = {
  regular: 400,
  medium: 500,
  strong: 700,
};

export const tokens = {
  space: {
    gutter: 6,
    xxsmall: 1,
    xsmall: 2,
    small: 3,
    medium: 5,
    large: 8,
    xlarge: 11,
    xxlarge: 15,
    xxxlarge: 20,
  },
  inputWidth: {
    width2: '5.4ex',
    width3: '7.2ex',
    width4: '9ex',
    width5: '10.8ex',
    width10: '23ex',
    width20: '41ex',
    width30: '62ex',
    width100: '59ex + 3ex',
    widthQuarter: '25%',
    widthThird: '33.33%',
    widthHalf: '50%',
    widthTwoThirds: '66.66%',
    widthThreeQuarters: '75%',
  },
  border: {
    radius: {
      standard: '4px',
      large: '6px',
      xlarge: '10px',
    },
    width: {
      standard: 1,
      large: 2,
    },
    color: {
      caution: palette.yellow400,
      critical: palette.red600,
      field: '#999999',
      info: palette.blue700,
      positive: palette.lime800,
      promote: palette.violet800,
      standard: palette.neutral900,
      invalid: palette.redError,
      focus: palette.green800,
      neutralLight: palette.grey20,
    },
  },
  shadows: {
    small: '0 2px 4px 0px rgba(28,28,28,.1), 0 2px 2px -2px rgba(28,28,28,.1), 0 4px 4px -4px rgba(28,28,28,.2)',
    medium: '0 2px 4px 0px rgba(28,28,28,.1), 0 8px 8px -4px rgba(28,28,28,.1), 0 12px 12px -8px rgba(28,28,28,.2)',
    large: '0 2px 4px 0px rgba(28,28,28,.1), 0 12px 12px -4px rgba(28,28,28,.1), 0 20px 20px -12px rgba(28,28,28,.2)',
  },
  focusRingSize: 3,
  color: {
    foreground: {
      error: palette.white,
      caution: palette.yellow400,
      critical: palette.red600,
      focus: palette.blue700,
      info: palette.blue700,
      neutral: palette.gray700,
      secondary: palette.neutral950,
      link: palette.neutral900,
      positive: palette.lime800,
      primary: palette.white,
      promote: palette.violet800,
      linkHover: palette.white,
      linkVisited: palette.neutral700,
      h1: palette.gray700,
      h2: palette.gray700,
      h3: palette.gray700,
      h4: palette.gray700,
    },
    background: {
      body: palette.white,
      focus: palette.blue100,
    },
  },
  typography: {
    fontFamily: {
      heading: 'arial,sans-serif',
      text: 'arial,sans-serif',
    },
    fontMetrics: extractFontMetricsForTheme(arialMetfics),
    webFont: null as unknown as { heading: string; text: string },
    fontWeight: {
      ...fontWeight,
    },
    heading: {
      weight: {
        weak: 'regular',
        regular: 'medium',
      } as const,
      level: {
        '1': {
          mobile: {
            fontSize: 28,
            lineGap: 11,
          },
          tablet: {
            fontSize: 36,
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
  touchableSize: 12,
  contentWidth: {
    xsmall: 400,
    small: 660,
    medium: 940,
    large: 1308,
  },
  grid: 4,
  width: {
    input: '100%',
  },
  accessibility: {
    outlineWidth: '3px',
    elementFocusColor: palette.yellow400,
    accessibleOutlineColor: palette.yellow400,
    outlineOffset: '0',
    linkFocusColor: palette.black,
    boxShadowColor: palette.black,
  },
  links: {
    lineHeight: '1.31579',
    color: {
      link: palette.sky700,
      hover: palette.sky900,
      active: palette.black,
    },
    decoration: {
      link: 'underline',
    },
  },
  banners: {
    titleColor: palette.white,
    color: palette.black,
    backgroundColor: palette.white,
  },
  buttons: {
    textTransform: 'none',
    fontWeight: String(fontWeight.regular),
    width: {
      mobile: '100%',
      tablet: 'auto',
    },
    primary: {
      borderWidth: '2px',
      borderColor: 'transparent',
      hoverBackgroundColor: palette.green900,
      background: palette.green800,
      focusColor: palette.white,
      marginTop: 0,
      padding: '8px 10px 7px',
      fontWeight: fontWeight.regular,
      borderBottomColor: 'transparent',
    },
    secondary: {
      borderWidth: '2px',
      borderColor: 'transparent',
      background: palette.gray100,
      focusColor: palette.gray300,
      hoverBackgroundColor: palette.green800,
      marginTop: 0,
      padding: '8px 10px 7px',
      fontWeight: fontWeight.regular,
      borderBottomColor: palette.black,
    },
    warning: {
      borderWidth: '2px',
      border: 'transparent',
      background: palette.redError,
      focusColor: palette.red700,
      hoverBackgroundColor: palette.green800,
      marginTop: 0,
      padding: '8px 10px 7px',
      fontWeight: fontWeight.regular,
      borderBottomColor: palette.gray400,
    },
  },
  radios: {
    borderWidth: '3px',
    borderColor: palette.black,
    regular: {
      width: rem(44),
      height: rem(44),
    },
  },
  transitions: {
    fast: 'transform .125s ease, opacity .125s ease',
    touchable: 'transform 0.2s cubic-bezier(0.02, 1.505, 0.745, 1.235)',
  },
};

export type Tokens = typeof tokens;
