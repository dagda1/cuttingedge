import { mix, rem } from 'polished';
import { palette } from '../palette.css';
import { getLightVariant } from '../util/a11y';

const brand = '#1250C4';
export const colors = {
  primary: palette.green800,
  secondary: palette.gray100,
  error: palette.redError,
  notification: palette.yellow400,
  brand: '#1250C4',
  brandAccent: '#de0059',
  formAccent: brand,
  focus: brand,
  critical: '#e91b0c',
  criticalLight: '#f9e6e4',
  positive: '#3b610f',
  caution: '#ffc600',
  info: brand,
  promote: '#5736ab',
  white: '#fff',
};

type ScaleKeys<A extends readonly unknown[]> = `${keyof A & `${number}`}x`;

const spacing = [
  0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12.5, 13, 13.5, 14, 14.5,
  15, 16.5, 17, 17.5, 18, 18.5, 19, 19.5, 20,
] as const;

type SpaceKeys = ScaleKeys<typeof spacing>;

const borderRadius = [1, 2, 4, 8, 16, 32] as const;
type BorderRadiusKeys = ScaleKeys<typeof borderRadius>;

const fontWeight = {
  regular: 400,
  medium: 500,
  strong: 700,
} as const;

export const tokens = {
  space: {
    none: '0',
    ...spacing.reduce((acc, curr, i) => {
      acc[`${i + 1}x` as SpaceKeys] = `${curr}rem`;
      return acc;
    }, {} as Record<SpaceKeys, string>),
  },
  borderRadius: {
    ...borderRadius.reduce((acc, curr, i) => {
      acc[`${i + 1}x` as BorderRadiusKeys] = `${curr}px`;
      return acc;
    }, {} as Record<BorderRadiusKeys, string>),
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
      brandAccent: colors.brandAccent,
      caution: colors.caution,
      cautionLight: mix(0.6, colors.caution, getLightVariant(colors.caution)),
      critical: colors.critical,
      criticalLight: mix(0.3, colors.critical, colors.criticalLight),
      field: '#999999',
      formAccent: colors.formAccent,
      formHover: colors.formAccent,
      info: colors.info,
      infoLight: mix(0.3, colors.info, getLightVariant(colors.info)),
      positive: colors.positive,
      positiveLight: mix(0.3, colors.positive, getLightVariant(colors.positive)),
      promote: colors.promote,
      promoteLight: mix(0.3, colors.promote, getLightVariant(colors.promote)),
      standard: palette.trueGray900,
      invalid: colors.error,
      focus: colors.primary,
      standardInverted: colors.white,
    },
  },
  color: {
    foreground: {
      link: palette.trueGray900,
      linkHover: palette.white,
      linkVisited: palette.trueGray700,
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
    fonts: {
      heading: '"GDS Transport",arial,sans-serif',
      body: '"GDS Transport",arial,sans-serif',
      paragraphs: '"GDS Transport",arial,sans-serif',
    },
    fontMetrics: {
      capHeight: 1456,
      ascent: 1900,
      descent: -500,
      lineGap: 0,
      unitsPerEm: 2048,
    },
    webFont: null,
    fontWeight: {
      ...fontWeight,
    },
    heading: {
      level: {
        '1': {
          mobile: {
            fontSize: 32,
            rows: 10,
          },
          tablet: {
            fontSize: 32,
            rows: 21,
          },
          desktop: {
            fontSize: 48,
            rows: 21,
          },
          wide: {
            fontSize: 60,
            rows: 21,
          },
        },
        '2': {
          mobile: {
            fontSize: 28,
            rows: 9,
          },
          tablet: {
            fontSize: 38,
            rows: 13,
          },
          desktop: {
            fontSize: 38,
            rows: 13,
          },
          wide: {
            fontSize: 38,
            rows: 13,
          },
        },
        '3': {
          mobile: {
            fontSize: 22,
            rows: 8,
          },
          tablet: {
            fontSize: 22,
            rows: 8,
          },
          desktop: {
            fontSize: 22,
            rows: 8,
          },
          wide: {
            fontSize: 22,
            rows: 8,
          },
        },
        '4': {
          mobile: {
            fontSize: 18,
            rows: 8,
          },
          tablet: {
            fontSize: 18,
            rows: 8,
          },
          desktop: {
            fontSize: 18,
            rows: 8,
          },
          wide: {
            fontSize: 18,
            rows: 8,
          },
        },
      },
    },
    text: {
      body: {
        mobile: {
          fontSize: 16,
          rows: 8,
        },
        tablet: {
          fontSize: 16,
          rows: 8,
        },
        desktop: {
          fontSize: 19,
          rows: 8,
        },
        wide: {
          fontSize: 19,
          rows: 8,
        },
      },
    },
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
      hoverBackgroundColor: palette.white,
      background: palette.green800,
      focusColor: palette.white,
      color: palette.white,
      marginTop: 0,
      padding: '8px 10px 7px',
      fontWeight: fontWeight.regular,
    },
    secondary: {
      borderWidth: '2px',
      borderColor: 'transparent',
      background: colors.secondary,
      focusColor: palette.gray300,
      hoverBackgroundColor: colors.primary,
      color: palette.black,
      marginTop: 0,
      padding: '8px 10px 7px',
      fontWeight: fontWeight.regular,
    },
    warning: {
      borderWidth: '2px',
      border: 'transparent',
      background: colors.error,
      focusColor: palette.red700,
      hoverBackgroundColor: colors.primary,
      color: palette.white,
      marginTop: 0,
      padding: '8px 10px 7px',
      fontWeight: fontWeight.regular,
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
  touchableSize: 11,
  transitions: {
    fast: 'transform .125s ease, opacity .125s ease',
    touchable: 'transform 0.2s cubic-bezier(0.02, 1.505, 0.745, 1.235)',
  },
};

export type Tokens = typeof tokens;
