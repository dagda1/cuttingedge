import { style } from '@vanilla-extract/css';
import { vars } from '@cutting/design-system';
import { screenReaderOnly } from '@cutting/design-system';
import { responsiveFont } from '@cutting/design-system';

export const fieldset = style({
  border: 'none',
  padding: 0,
});

export const srOnlyLegend = style({
  ...screenReaderOnly,
});

export const legend = style({
  ...responsiveFont(),
  marginBottom: vars.space['4x'],
});

export const inline = style({
  display: 'flex',
});
