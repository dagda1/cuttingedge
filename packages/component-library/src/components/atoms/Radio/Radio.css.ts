import { style } from '@vanilla-extract/css';
import { vars } from '../../../style/themes/vars.css';
import { responsiveFont } from '../../../style/typography/typography.css';

export const item = style({});

export const small = style({});
export const large = style({});
export const stacked = style({});
export const inline = style({});
export const content = style({
  ...responsiveFont(),
  fontWeight: vars.fontWeight.regular,
});
