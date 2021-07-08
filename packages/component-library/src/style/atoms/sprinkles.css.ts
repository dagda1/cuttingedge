import { mapValues } from '@cutting/util';
import {
  createAtomicStyles,
  createAtomsFn,
  createMapValueFn,
  createNormalizeValueFn,
  ConditionalValue,
} from '@vanilla-extract/sprinkles';
import { breakpoints } from '../breakpoints';
import { vars } from '../themes/vars.css';

const responsiveStyles = createAtomicStyles({
  conditions: mapValues(breakpoints, (bp) => (bp === 0 ? {} : { '@media': `screen and (min-width: ${bp}px)` })),
  defaultCondition: 'mobile',
  properties: {
    position: ['absolute', 'relative', 'fixed'],
    display: ['none', 'block', 'inline', 'inline-block', 'flex'],
    alignItems: ['flex-start', 'center', 'flex-end'],
    justifyContent: ['flex-start', 'center', 'flex-end', 'space-between'],
    flexDirection: ['row', 'row-reverse', 'column', 'column-reverse'],
    flexWrap: ['nowrap', 'wrap', 'wrap-reverse'],
    paddingTop: vars.space,
    paddingBottom: vars.space,
    paddingLeft: vars.space,
    paddingRight: vars.space,
    marginTop: vars.space,
    marginBottom: vars.space,
    marginLeft: vars.space,
    marginRight: vars.space,
    pointerEvents: ['none', 'auto'],
    opacity: [0, 1],
    textAlign: ['left', 'center'],
    fontSize: vars.fontSize,
    lineHeight: vars.lineHeight,
    fontWeight: vars.fontWeight,
  },
  shorthands: {
    padding: ['paddingBottom', 'paddingTop', 'paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    paddingX: ['paddingLeft', 'paddingRight'],
    margin: ['marginBottom', 'marginTop', 'marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    marginX: ['marginLeft', 'marginRight'],
    placeItems: ['alignItems', 'justifyContent'],
    typeSize: ['fontSize', 'lineHeight'],
  },
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mapResponsiveValue = createMapValueFn(responsiveStyles) as any;
export const normalizeResponsiveValue = createNormalizeValueFn(responsiveStyles);

export type ResponsiveValue<Value extends string | number> = ConditionalValue<typeof responsiveStyles, Value>;

const unresponsiveStyles = createAtomicStyles({
  properties: {
    top: [0],
    bottom: [0],
    left: [0],
    right: [0],
    flexShrink: [0],
    flexGrow: [0, 1],
    zIndex: [-1, 0, 1],
    width: { full: '100%' },
    borderRadius: vars.borderRadius,
    cursor: ['pointer'],
  },
});

export const atoms = createAtomsFn(responsiveStyles, unresponsiveStyles);

export type Atoms = Parameters<typeof atoms>[0];
