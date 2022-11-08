import { palette, responsiveStyle, vars } from '@cutting/component-library';
import type { ComplexStyleRule } from '@vanilla-extract/css';
import { style, globalStyle } from '@vanilla-extract/css';

export const container = style({
  height: '100%',
  border: '1px solid transparent',
  paddingBottom: vars.space['2x'],
  ...responsiveStyle({
    mobile: {
      margin: '0',
    },
    tablet: {},
    desktop: {
      width: '75%',
      margin: 'auto',
    },
    wide: {},
  }),
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
});

export const diffLabel = style({});

export const form = style({});

export const algebra = style({
  ...responsiveStyle({
    mobile: {
      display: 'block',
    },
    tablet: {
      display: 'grid',
      gridTemplateColumns: 'auto auto',
    },
  }),
});
