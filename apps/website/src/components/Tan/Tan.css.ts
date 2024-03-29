import { palette, responsiveStyle, vars } from '@cutting/component-library';
import { globalStyle, style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  height: '100%',
  ...responsiveStyle({
    mobile: {
      padding: vars.space['xxsmall'],
    },
    tablet: {
      padding: vars.space['large'],
    },
  }),
});

globalStyle(`${container} h1`, {
  textAlign: 'center',
});

globalStyle(`${container} section`, {
  ...responsiveStyle({
    mobile: {
      marginTop: vars.space['large'],
    },
    tablet: {
      marginTop: 0,
    },
  }),
});

globalStyle(`${container} tspan`, {
  ...responsiveStyle({
    mobile: {
      // fontSize: '0.75rem',
    },
    tablet: {
      // fontSize: '1rem',
    },
  }),
  fill: palette.white,
});

globalStyle(`${container} foreignobject`, {
  width: '1.75rem',
});

export const playButton = style({
  position: 'relative',
  zIndex: 3,
});

export const tanCurve = style({
  ...responsiveStyle({
    mobile: {
      stroke: '5',
      strokeWidth: 3,
    },
    tablet: {
      stroke: '20',
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
      strokeWidth: 5,
    },
  }),
});

export const ray = style({
  stroke: palette.white,
  strokeWidth: 2,
  strokeOpacity: 0.5,
});

globalStyle(`${container} foreignObject`, {
  width: '6.75rem',
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

export const rearHypotenuse = style({
  strokeDasharray: 2,
  stroke: 'red',
});

export const tan3 = style({
  stroke: 'pink',
});

export const rays = style({
  ...responsiveStyle({
    mobile: {
      display: 'none',
    },
    desktop: {
      display: 'block',
    },
  }),
});
