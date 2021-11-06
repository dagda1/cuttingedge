import {
  defineProperties,
  createSprinkles,
  ConditionalValue,
  RequiredConditionalValue,
  createNormalizeValueFn,
  createMapValueFn,
} from '@vanilla-extract/sprinkles';
import { Breakpoint, breakpointNames, breakpoints } from '../breakpoints';
import { vars } from '../themes/vars.css';
import { rem } from 'polished';

const responsiveAtomicProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': `screen and (min-width: ${rem(breakpoints.tablet)})` },
    desktop: { '@media': `screen and (min-width: ${rem(breakpoints.desktop)})` },
    wide: { '@media': `screen and (min-width: ${rem(breakpoints.wide)})` },
  },
  defaultCondition: 'mobile',
  properties: {
    position: ['absolute', 'relative', 'fixed', 'static'],
    display: ['none', 'block', 'inline', 'inline-block', 'flex'],
    alignItems: ['flex-start', 'center', 'flex-end'],
    justifyContent: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around'],
    flexDirection: ['row', 'row-reverse', 'column', 'column-reverse'],
    flexWrap: ['nowrap', 'wrap', 'wrap-reverse'],
    flex: ['auto', '1', '1 1', '1 0 auto'],
    gap: vars.space,
    borderRadius: vars.borderRadius,
    paddingTop: vars.space,
    paddingBottom: vars.space,
    paddingLeft: vars.space,
    paddingRight: vars.space,
    marginTop: vars.space,
    marginBottom: vars.space,
    marginLeft: vars.space,
    marginRight: vars.space,
    fontFamily: vars.fontFamily,
    pointerEvents: ['none', 'auto'],
    opacity: [0, 1],
    textAlign: ['left', 'center', 'right'],
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
  },
});
// const unresponsiveAtomicProperties = defineProperties({
//   properties: unresponsiveProperties,
// });

export const sprinkles = createSprinkles(
  // unresponsiveAtomicProperties,
  responsiveAtomicProperties,
  // pseudoAtomicProperties,
);

export type OptionalResponsiveValue<Value extends string | number> = ConditionalValue<
  typeof responsiveAtomicProperties,
  Value
>;
export type RequiredResponsiveValue<Value extends string | number> = RequiredConditionalValue<
  typeof responsiveAtomicProperties,
  Value
>;

export type RequiredResponsiveObject<Value> = Partial<Record<Breakpoint, Value>> &
  Record<typeof breakpointNames[0], Value>;

export const normalizeResponsiveValue = createNormalizeValueFn(responsiveAtomicProperties);
export const mapResponsiveValue = createMapValueFn(responsiveAtomicProperties);
