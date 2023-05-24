import { style } from '@vanilla-extract/css';
import { vars } from '~/style/themes/vars.css';

export const root = style([
  // responsiveText.body.untrimmed,
  {
    display: 'block',
    fontWeight: vars.textWeight.regular,
    lineHeight: '1.31579',
  },
]);

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
  fontWeight: vars.textWeight.strong,
});
