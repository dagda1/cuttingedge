import { style } from '@vanilla-extract/css';
import { vars } from '../../../style/themes/vars.css';
import { screenReaderOnly } from '../../../style/accessibility.css';
import { responsiveFont } from '../../../style/typography/typography';

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
