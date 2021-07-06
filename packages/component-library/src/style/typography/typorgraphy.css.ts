import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../themes/vars.css';
import { mapToProperty } from '../util/map-property';

export const fontFamily = style({
  fontFamily: vars.fontFamily,
});

export const fontWeight = styleVariants(vars.fontWeight, mapToProperty('fontWeight'));
