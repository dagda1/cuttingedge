import { style } from '@vanilla-extract/css';
import { vars } from '../../../style/themes/vars.css';
import { responsiveFont } from '../../../style/typography/typography';

export const root = style({
  ...responsiveFont(),
  display: 'block',
  fontWeight: vars.fontWeight.regular,
  lineHeight: '1.31579',
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
    marginRight: vars.space['1x'],
  },
});

export const strong = style({
  fontWeight: vars.fontWeight.strong,
});
