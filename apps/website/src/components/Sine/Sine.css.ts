import { palette, responsiveStyle, vars } from '@cutting/component-library';
import type { ComplexStyleRule } from '@vanilla-extract/css';
import { globalStyle, style } from '@vanilla-extract/css';

const strokeColor = palette.white;
const strokeWidth = 2;

export const main = style({
  ...responsiveStyle({
    mobile: {
      padding: vars.space['xxsmall'],
    },
    tablet: {
      padding: vars.space['large'],
    },
  }),
});

const styles: ComplexStyleRule = {
  stroke: strokeColor,
  strokeWidth,
};

globalStyle(`${main} circle`, { ...styles });

export const hypotenuse = style({ ...styles });
export const opposite = style({ ...styles });
export const adjacent = style({ ...styles });
export const joiningLine = style({ ...styles });
export const axisLine = style({ ...styles });
export const sine = style({ ...styles, fill: 'none' });
export const ray = style({ ...styles, strokeOpacity: 0.5 });

export const unitCircle = style({ fillOpacity: 0 });

globalStyle(`${main} circle:not(${unitCircle})`, { fill: strokeColor });

export const axis = style({
  stroke: strokeColor,
});

export const verticalGuide = style({});
export const dot = style({});
export const axisDot = style({});

globalStyle(`${main} foreignObject`, {
  width: '6.75rem',
});
