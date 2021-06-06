import {
  createAtomicStyles,
  createAtomsFn,
  createMapValueFn,
  createNormalizeValueFn,
  ConditionalValue,
} from '@vanilla-extract/sprinkles';
import { vars } from './themes.css';
import { breakpoints } from './theme-utils';

const space = vars.spacing;
export type Space = keyof typeof space;

const margins = {
  ...space,
};

const responsiveStyles = createAtomicStyles({
  conditions: mapValues(breakpoints, (bp) => (bp === 0 ? {} : { '@media': `screen and (min-width: ${bp}px)` })),
  defaultCondition: 'mobile',
  properties: {
    position: ['absolute', 'relative', 'fixed'],
    display: ['none', 'block', 'inline', 'inline-block', 'flex'],
    alignItems: ['flex-start', 'center', 'flex-end'],
    justifyContent: ['flex-start', 'center', 'flex-end', 'space-between'],
    flexDirection: ['row', 'row-reverse', 'column', 'column-reverse'],
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    marginTop: margins,
    marginBottom: margins,
    marginLeft: margins,
    marginRight: margins,
    pointerEvents: ['none', 'auto'],
    opacity: [0, 1],
    textAlign: ['left', 'center'],
    maxWidth: vars.contentWidth,
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
  },
});

export const mapResponsiveValue = createMapValueFn(responsiveStyles);
export const normalizeResponsiveValue = createNormalizeValueFn(responsiveStyles);

export type ResponsiveValue<Value extends string | number> = ConditionalValue<typeof responsiveStyles, Value>;

export const lightMode = 'light';
export const darkMode = 'dark';

const colorStyles = createAtomicStyles({
  conditions: {
    lightMode: {},
    darkMode: { selector: `.${darkMode} &` },
  },
  defaultCondition: 'lightMode',
  properties: {
    background: vars.palette,
    color: vars.palette,
  },
});

export const atoms = createAtomsFn(responsiveStyles, colorStyles);

export type Atoms = Parameters<typeof atoms>[0];
