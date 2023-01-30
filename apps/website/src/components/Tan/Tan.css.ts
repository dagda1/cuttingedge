import { palette } from '@cutting/component-library';
import { globalStyle, style } from '@vanilla-extract/css';

export const container = style({});

globalStyle(`${container} tspan`, {
  fontSize: '1rem',
  fill: palette.white,
});

globalStyle(`${container} foreignObject`, {
  width: '3rem !important',
});

export const playButton = style({
  position: 'relative',
  zIndex: 3,
});

export const tanCurve = style({
  strokeWidth: 8,
  fill: 'transparent',
  stroke: '#ffffff',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  strokeDasharray: 20,
});

export const unitCircle = style({
  fillOpacity: 0,
  stroke: '#9BC3AF',
  strokeWidth: 10,
});

export const line = style({
  stroke: palette.white,
  strokeWidth: 10,
});

export const hypotenuse = style({
  strokeDasharray: '4 1',
  stroke: '#9BC3AF',
});

export const opposite = style({
  strokeDasharray: 8,
  stroke: 'cyan',
});

export const dot = style({
  fill: palette.white,
});

export const tan = style({
  strokeDasharray: 16,
  stroke: '#7F00FF',
});

export const tan2 = style({
  strokeDasharray: 16,
  stroke: palette.white,
});
