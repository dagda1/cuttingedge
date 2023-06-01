import { rem, mix } from 'polished';
import { palette } from '~/style/palette.css';
import { getLightVariant } from '~/style/util/a11y';
import { rose } from 'tailwindcss/colors';
import arialMetfics from '@capsizecss/metrics/arial';
import { extractFontMetricsForTheme } from '../util/typography';

export const colors = {
  primary: palette.green800,
  secondary: palette.gray100,
  error: palette.redError,
  notification: palette.yellow400,
  brand: palette.blue700,
  focus: palette.blue700,
  critical: palette.red600,
  criticalLight: rose['100'],
  positive: palette.lime800,
  caution: palette.yellow400,
  info: palette.blue700,
  promote: palette.violet800,
  white: palette.white,
};

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
  colors: {
    ...colors,
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
      caution: colors.caution,
      cautionLight: mix(0.6, colors.caution, getLightVariant(colors.caution)),
      critical: colors.critical,
      criticalLight: mix(0.3, colors.critical, colors.criticalLight),
      field: '#999999',
      info: colors.info,
      infoLight: mix(0.3, colors.info, getLightVariant(colors.info)),
      positive: colors.positive,
      positiveLight: mix(0.3, colors.positive, getLightVariant(colors.positive)),
      promote: colors.promote,
      promoteLight: mix(0.3, colors.promote, getLightVariant(colors.promote)),
      standard: palette.neutral900,
      invalid: colors.error,
      focus: palette.green800,
      standardInverted: colors.white,
    },
  },
  color: {
    foreground: {
      link: palette.neutral900,
      linkHover: palette.white,
      linkVisited: palette.neutral700,
      error: colors.error,
      body: palette.black,
      heading: {
        '1': palette.black,
        '2': palette.black,
        '3': palette.black,
        '4': palette.black,
      },
      header: palette.black,
      footer: palette.black,
      neutral: palette.gray700,
    },
    background: {
      body: palette.white,
      heading: palette.white,
      header: palette.white,
      footer: palette.white,
      input: palette.white,
      focus: palette.blue100,
    },
  },
  typography: {
    fontFamily: 'arial,sans-serif',
    fontMetrics: extractFontMetricsForTheme(arialMetfics),
    webFont: null as unknown as string,
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
    elementFocusColor: colors.notification,
    accessibleOutlineColor: colors.notification,
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
      color: palette.white,
      marginTop: 0,
      padding: '8px 10px 7px',
      fontWeight: fontWeight.regular,
      borderBottomColor: 'transparent',
    },
    secondary: {
      borderWidth: '2px',
      borderColor: 'transparent',
      background: colors.secondary,
      focusColor: palette.gray300,
      hoverBackgroundColor: palette.green800,
      color: palette.black,
      marginTop: 0,
      padding: '8px 10px 7px',
      fontWeight: fontWeight.regular,
      borderBottomColor: palette.black,
    },
    warning: {
      borderWidth: '2px',
      border: 'transparent',
      background: colors.error,
      focusColor: palette.red700,
      hoverBackgroundColor: palette.green800,
      color: palette.white,
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
