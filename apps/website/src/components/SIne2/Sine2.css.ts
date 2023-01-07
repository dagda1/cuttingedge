import { palette } from '@cutting/component-library';
import type { ComplexStyleRule } from '@vanilla-extract/css';
import { globalStyle } from '@vanilla-extract/css';
import { style } from '@vanilla-extract/css';

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

globalStyle('line', {
  ...styles,
});

globalStyle('tspan', {
  fill: palette.white,
});
