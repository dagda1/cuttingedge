import { palette } from '@cutting/component-library';
import type { ComplexStyleRule } from '@vanilla-extract/css';
import { globalStyle } from '@vanilla-extract/css';
import { style } from '@vanilla-extract/css';

const steelBlue = '#4682B4';
const thickStroke = '5px';

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

export const unitCircle = style({
  stroke: steelBlue,
  fill: 'none',
  strokeWidth: thickStroke,
});

export const xCircle = style({});

export const sineCurve = style({
  fill: 'none',
  stroke: 'red',
  strokeWidth: thickStroke,
});
