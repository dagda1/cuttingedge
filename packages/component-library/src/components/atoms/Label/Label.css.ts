import { style } from '@vanilla-extract/css';
import { vars } from '../../../style/themes/vars.css';

export const base = style({
  display: 'block',
  '::before': {
    content: '*',
    color: 'red',
  },
});

export const invalid = style({
  color: vars.invalid.color,
  '::before': {
    color: vars.invalid.color,
  },
});

export const required = style({
  color: 'green',
});

export const bold = style({
  fontWeight: vars.fontWeight.strong,
});
