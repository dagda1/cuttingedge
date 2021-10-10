import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';
import { breakpoints } from '../breakpoints';
import { vars } from '../themes/vars.css';

const responsiveStyles = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': `screen and (min-width: ${breakpoints.tablet}rem)` },
    desktop: { '@media': `screen and (min-width: ${breakpoints.desktop}rem)` },
  },
  defaultCondition: 'mobile',
  properties: {
    position: ['absolute', 'relative', 'fixed'],
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
    textAlign: ['left', 'center'],
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

const unresponsiveStyles = defineProperties({
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

export const sprinkles = createSprinkles(responsiveStyles, unresponsiveStyles);
