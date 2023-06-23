import type { ConditionalValue, RequiredConditionalValue } from '@vanilla-extract/sprinkles';
import {
  defineProperties,
  createSprinkles,
  createMapValueFn,
  createNormalizeValueFn,
} from '@vanilla-extract/sprinkles';
import { breakpointNames, breakpoints } from '../breakpoints';
import { vars } from '~/style/themes/vars.css';
import { rem } from 'polished';

export type OptionalResponsiveValue<Value extends string | number> = ConditionalValue<
  typeof responsiveAtomicProperties,
  Value
>;
export type RequiredResponsiveValue<Value extends string | number> = RequiredConditionalValue<
  typeof responsiveAtomicProperties,
  Value
>;

const sizes = {
  full: '100%',
  screen: '100vh',
  touchable: vars.touchableSize,
};

export const space = {
  ...vars.space,
  none: 0,
} as const;

export const unresponsiveProperties = {
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
  maxWidth: vars.contentWidth,
  transition: vars.transition,
} as const;

export type UnresponsiveProperties = typeof unresponsiveProperties;

const responsiveAtomicProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': `screen and (min-width: ${rem(breakpoints.tablet)})` },
    desktop: { '@media': `screen and (min-width: ${rem(breakpoints.desktop)})` },
    wide: { '@media': `screen and (min-width: ${rem(breakpoints.wide)})` },
    extraWide: { '@media': `screen and (min-width: ${rem(breakpoints.extraWide)})` },
  },
  defaultCondition: 'mobile',
  properties: {
    display: {
      none: 'none',
      block: 'block',
      inline: 'inline',
      inlineBlock: 'inline-block',
      flex: 'flex',
      grid: 'grid',
    },
    overscrollBehavior: ['none', 'auto', 'contain', 'revert', 'revert-layer', 'initial'],
    position: ['relative', 'absolute', 'fixed'],
    borderRadius: {
      none: '0px',
      full: '9999px',
      ...vars.borderRadius,
    },
    paddingTop: space,
    paddingBottom: space,
    paddingRight: space,
    paddingLeft: space,
    marginTop: space,
    marginBottom: space,
    marginRight: space,
    marginLeft: space,
    alignItems: {
      flexStart: 'flex-start',
      center: 'center',
      flexEnd: 'flex-end',
    },
    justifyContent: {
      flexStart: 'flex-start',
      center: 'center',
      flexEnd: 'flex-end',
      spaceBetween: 'space-between',
      spaceAround: 'space-around',
      spaceEvently: 'space-evenly',
    },
    flexDirection: {
      row: 'row',
      rowReverse: 'row-reverse',
      column: 'column',
      columnReverse: 'column-reverse',
    },
    flexWrap: {
      wrap: 'wrap',
      nowrap: 'nowrap',
    },
    flexShrink: [0],
    flexGrow: [0, 1],
    textAlign: ['left', 'center', 'right'],
    height: { ...sizes, ...space },
    width: { ...sizes, ...space },
    overflow: ['hidden', 'scroll', 'visible', 'auto'],
    overflowX: ['hidden', 'scroll', 'visible', 'auto'],
    overflowY: ['hidden', 'scroll', 'visible', 'auto'],
  },
  responsiveArray: breakpointNames,
  shorthands: {
    padding: ['paddingBottom', 'paddingTop', 'paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    paddingX: ['paddingLeft', 'paddingRight'],
    margin: ['marginBottom', 'marginTop', 'marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    marginX: ['marginLeft', 'marginRight'],
  },
});

export type ResponsiveAtomicProperties = typeof responsiveAtomicProperties;

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

export const normalizeResponsiveValue = createNormalizeValueFn(responsiveAtomicProperties);
