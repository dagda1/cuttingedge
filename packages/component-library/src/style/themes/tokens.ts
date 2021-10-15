import { rem } from 'polished';
import { palette } from '../palette.css';

export const colors = {
  primary: palette.green800,
  secondary: palette.gray100,
  error: palette.redError,
  notification: palette.yellow400,
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
  color: {
    foreground: {
      link: palette.trueGray900,
      linkHover: palette.white,
      linkVisited: palette.trueGray700,
      error: colors.error,
      body: palette.black,
      header: palette.black,
      footer: palette.black,
    },
    background: {
      body: palette.white,
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
    webFont: null,
    fontWeight: {
      ...fontWeight,
    },
    headings: {
      h1: {
        mobile: 2,
        tablet: 2,
        desktop: 3,
      },
      h2: {
        mobile: 1.5,
        tablet: 1.5,
        desktop: 2.25,
      },
      h3: {
        mobile: 1.125,
        tablet: 1.125,
        desktop: 1.5,
      },
      h4: {
        mobile: 1,
        tablet: 1,
        desktop: 1.1875,
      },
    },
    text: {
      body: {
        mobile: 1,
        tablet: 1,
        desktop: 1,
      },
      paragraph: {
        mobile: 1,
        tablet: 1,
        desktop: 1.1875,
      },
    },
  },
  grid: 4,
  border: {
    radius: {
      standard: '8px',
    },
    width: {
      standard: 1,
      large: 2,
    },
    color: {
      standard: palette.trueGray900,
      invalid: colors.error,
      focus: colors.primary,
    },
  },
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
  headings: {
    color: palette.black,
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
};

export type Tokens = typeof tokens;
