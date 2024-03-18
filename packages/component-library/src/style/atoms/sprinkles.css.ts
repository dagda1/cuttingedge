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
  auto: 'auto',
  '1/8': '12.5%',
  '1/4': '25%',
  '1/3': '33.3%',
  '1/2': '50%',
  '2/3': '66.6%',
  '3/4': '75%',
  touchable: vars.touchableSize,
};

export const space = {
  ...vars.space,
  none: 0,
} as const;

const boxShadow = {
  ...vars.shadow,
  borderCaution: `inset 0 0 0 ${vars.borderWidth.standard} ${vars.borderColor.caution}`,
  borderCritical: `inset 0 0 0 ${vars.borderWidth.standard} ${vars.borderColor.critical}`,
  borderCriticalLarge: `inset 0 0 0 ${vars.borderWidth.large} ${vars.borderColor.critical}`,
  borderField: `inset 0 0 0 ${vars.borderWidth.standard} ${vars.borderColor.field}`,
  borderInfo: `inset 0 0 0 ${vars.borderWidth.standard} ${vars.borderColor.info}`,
  borderPositive: `inset 0 0 0 ${vars.borderWidth.standard} ${vars.borderColor.positive}`,
  borderPromote: `inset 0 0 0 ${vars.borderWidth.standard} ${vars.borderColor.promote}`,
  outlineFocus: `0 0 0 ${vars.focusRingSize} ${vars.borderColor.focus}`,
  borderNeutralLight: `inset 0 0 0 ${vars.borderWidth.standard} ${vars.borderColor.neutralLight}`,
};

export const colorProperties = {
  background: vars.backgroundColor,
  boxShadow,
} as const;

export type BoxShadow = keyof typeof boxShadow;

export type Background = keyof typeof vars.backgroundColor;

export const unresponsiveProperties = {
  userSelect: ['none'],
  outline: ['none'],
  opacity: [0],
  zIndex: {
    0: 0,
    1: 1,
    2: 2,
    none: -1,
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
  minHeight: {
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
      spaceEvenly: 'space-evenly',
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

const colorAtomicProperties = defineProperties({
  properties: colorProperties,
});

export const sprinkles = createSprinkles(
  unresponsiveAtomicProperties,
  responsiveAtomicProperties,
  colorAtomicProperties,
  // TODO: pseudo properties
  // pseudoAtomicProperties,
);

export const mapResponsiveValue = createMapValueFn(responsiveAtomicProperties);

export const normalizeResponsiveValue = createNormalizeValueFn(responsiveAtomicProperties);
