import { style } from '@vanilla-extract/css';
import { vars } from '~/style/themes/vars.css.js';
import { screenReaderOnly } from '~/style/accessibility.css.js';

export const fieldset = style({
  border: 'none',
  padding: 0,
});

export const srOnlyLegend = style({
  ...screenReaderOnly,
});

export const legend = style({
  marginBottom: vars.space['xxsmall'],
});

export const inline = style({
  display: 'flex',
});
