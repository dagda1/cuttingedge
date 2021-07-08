import { style } from '@vanilla-extract/css';
import { vars } from 'src/style/themes/vars.css';

export const root = style({
  display: 'block',
  fontWeight: vars.fontWeight.regular,
});

export const invalid = style({
  color: vars.invalid.color,
  '::before': {
    color: vars.invalid.color,
  },
});

export const required = style({
  '::before': {
    content: "'*'",
    marginRight: vars.space['2x'],
  },
});

export const strong = style({
  fontWeight: vars.fontWeight.strong,
});
