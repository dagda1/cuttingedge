import { modularScale } from 'polished';
import { palette } from '../palette.css';

const createScale = (ratio: number, base: number) => (steps: number) => `${modularScale(steps, base, ratio)}px`;

const spaceScale = createScale(1.4, 4);
const lineHeightScale = createScale(1.25, 24);
const borderRadiusScale = createScale(1.5, 4);

export const colors = {
  primary: palette.blue700,
  error: palette.redError,
  notification: palette.yellow400,
  link: palette.trueGray900,
  linkHover: palette.white,
  linkVisited: palette.trueGray700,
};

export const accessibility = {
  elementFocusColor: colors.notification,
  outlineWidth: '3px',
  outlineOffset: '0',
  linkBg: colors.notification,
  outlineColor: colors.notification,
};

export const tokens = {
  space: {
    none: '0',
    '0x': spaceScale(0),
    '1x': spaceScale(1),
    '2x': spaceScale(2),
    '3x': spaceScale(3),
    '4x': spaceScale(4),
    '5x': spaceScale(5),
    '6x': spaceScale(6),
    '7x': spaceScale(7),
    '8x': spaceScale(8),
  },
  borderRadius: {
    '0x': borderRadiusScale(0),
    '1x': borderRadiusScale(1),
    '2x': borderRadiusScale(2),
    '3x': borderRadiusScale(3),
    '4x': borderRadiusScale(4),
    '5x': borderRadiusScale(5),
    full: '99999px',
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
  },
  lineHeight: {
    '0x': lineHeightScale(0),
    '1x': lineHeightScale(1),
    '2x': lineHeightScale(2),
    '3x': lineHeightScale(3),
    '4x': lineHeightScale(4),
    '5x': lineHeightScale(5),
  },
  color: {
    foreground: {
      link: colors.link,
      linkHover: colors.linkHover,
      linkVisited: colors.linkVisited,
      primary: palette.blue700,
      secondary: palette.blue900,
      error: colors.error,
    },
    background: {
      body: palette.black,
      input: palette.white,
      focus: palette.blue100,
    },
  },
  typography: {
    fonts: {
      heading: '"DM Sans", "Helvetica Neue", HelveticaNeue, Helvetica, sans-serif',
      body: 'Times',
      code: 'MonoLisa, "Roboto Mono", Menlo, monospace',
    },
    webFont: null,
    fontWeight: {
      regular: 400,
      medium: 500,
      strong: 700,
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
  ...accessibility,
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
  },
};

export type Tokens = typeof tokens;
