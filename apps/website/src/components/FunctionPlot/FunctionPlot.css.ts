import { palette, responsiveStyle, vars, ZIndex } from '@cutting/component-library';
import type { ComplexStyleRule } from '@vanilla-extract/css';
import { globalStyle, style } from '@vanilla-extract/css';

export const container = style({
  flex: 1,
});

globalStyle(`${container} text`, {
  fill: palette.white,
});

const styles: ComplexStyleRule = {
  stroke: palette.white,
  strokeWidth: 2,
};

export const axis = style({
  stroke: palette.white,
});

export const axisLine = style({
  ...styles,
});

export const diff = style({
  fill: palette.red,
});

export const tangent = style({
  stroke: palette.red,
  fill: palette.red,
  zIndex: ZIndex.none,
});

export const diffLabel = style({
  zIndex: ZIndex.none,
});

export const tangentGroup = style({
  zIndex: ZIndex.none,
});

export const form = style({});

globalStyle(`${form} button`, {
  height: '40px',
  padding: '0 10px',
  color: '#ffffff !important',
});

globalStyle(`${form} fieldset > div`, {
  margin: 0,
  padding: 0,
});

export const algebra = style({
  ...responsiveStyle({
    mobile: {
      display: 'block',
    },
    tablet: {
      display: 'flex',
      alignItems: 'auto',
      justifyContent: 'center',
    },
  }),
});

globalStyle(`${algebra} button`, {
  alignSelf: 'flex-end',
});

export const expression = style({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  marginBottom: vars.space['small'],
  ...responsiveStyle({
    mobile: {
      fontSize: '1.5rem',
    },
    tablet: {
      fontSize: '2rem',
    },
    desktop: {
      fontSize: '2.5rem',
    },
  }),
});
