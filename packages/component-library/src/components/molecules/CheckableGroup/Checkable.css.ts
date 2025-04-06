import { style } from '@vanilla-extract/css';

import { screenReaderOnly } from '~/style/accessibility.css';
import { vars } from '~/style/themes/vars.css';

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
  flexWrap: 'wrap',
});
