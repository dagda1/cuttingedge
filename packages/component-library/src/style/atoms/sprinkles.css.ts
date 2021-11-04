import { defineProperties, createSprinkles, createMapValueFn } from '@vanilla-extract/sprinkles';
import { breakpoints } from '../breakpoints';
import { vars } from '../themes/vars.css';
import { rem } from 'polished';

export const unresponsiveProperties = {
  background: vars.backgroundColor,
  overflow: ['hidden', 'scroll', 'visible', 'auto'],
  userSelect: ['none'],
  outline: ['none'],
  opacity: [0],
  zIndex: {
    0: 0,
    1: 1,
    2: 2,
    dropdownBackdrop: 90,
    dropdown: 100,
    sticky: 200,
    modalBackdrop: 290,
    modal: 300,
    notification: 400,
  },
  cursor: ['default', 'pointer'],
  pointerEvents: ['none'],
  top: [0],
  bottom: [0],
  left: [0],
  right: [0],
  minWidth: {
    0: '0%',
  },
  transition: vars.transition,
} as const;

export type UnresponsiveProperties = keyof typeof unresponsiveProperties;

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

const unresponsiveAtomicProperties = defineProperties({
  properties: unresponsiveProperties,
});

export const sprinkles = createSprinkles(
  unresponsiveAtomicProperties,
  responsiveAtomicProperties,
  // TODO: pseudo properties
  // pseudoAtomicProperties,
);

export const mapResponsiveValue = createMapValueFn(responsiveAtomicProperties);
