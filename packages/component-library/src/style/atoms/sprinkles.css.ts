import { defineProperties, createSprinkles, createMapValueFn } from '@vanilla-extract/sprinkles';
import { breakpointNames, breakpoints } from '../breakpoints';
import { vars } from '~/style/themes/vars.css';
import { rem } from 'polished';

const sizes = {
  full: '100%',
  touchable: vars.touchableSize,
};

export const unresponsiveProperties = {
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
  height: sizes,
  width: sizes,
  minWidth: {
    0: '0%',
  },
  maxWidth: vars.contentWidth,
  transition: vars.transition,
} as const;

export type UnresponsiveProperties = keyof typeof unresponsiveProperties;

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
    position: ['relative', 'absolute', 'fixed'],
    borderRadius: {
      none: '0px',
      full: '9999px',
      ...vars.borderRadius,
    },
    paddingTop: vars.space,
    paddingBottom: vars.space,
    paddingRight: vars.space,
    paddingLeft: vars.space,
    marginTop: vars.space,
    marginBottom: vars.space,
    marginRight: vars.space,
    marginLeft: vars.space,
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
