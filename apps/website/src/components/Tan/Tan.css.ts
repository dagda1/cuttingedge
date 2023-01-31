import { palette, responsiveStyle } from '@cutting/component-library';
import { globalStyle, style } from '@vanilla-extract/css';

export const container = style({});

globalStyle(`${container} tspan`, {
  ...responsiveStyle({
    mobile: {
      fontSize: '0.75rem',
    },
    tablet: {
      fontSize: '1rem',
    },
  }),
  fill: palette.white,
});

globalStyle(`${container} foreignObject`, {
  width: '2.25rem',
});

export const playButton = style({
  position: 'relative',
  zIndex: 3,
});

export const tanCurve = style({
  ...responsiveStyle({
    mobile: {
      strokeDasharray: 5,
      strokeWidth: 3,
    },
    tablet: {
      strokeDasharray: 20,
      strokeWidth: 8,
    },
  }),
  fill: 'transparent',
  stroke: '#ffffff',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
});

export const unitCircle = style({
  fillOpacity: 0,
  stroke: '#9BC3AF',
  ...responsiveStyle({
    mobile: {
      strokeWidth: 2,
    },
    tablet: {
      strokeWidth: 10,
    },
  }),
});

export const line = style({
  stroke: palette.white,
  ...responsiveStyle({
    mobile: {
      strokeWidth: 5,
    },
    tablet: {
      strokeWidth: 10,
    },
  }),
});

export const hypotenuse = style({
  strokeDasharray: '4 1',
  stroke: '#9BC3AF',
});

export const opposite = style({
  ...responsiveStyle({
    mobile: {
      strokeDasharray: 3,
    },
    tablet: {
      strokeDasharray: 8,
    },
  }),
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
