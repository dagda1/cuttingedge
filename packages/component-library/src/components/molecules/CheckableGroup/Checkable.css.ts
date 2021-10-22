import { style } from '@vanilla-extract/css';
import { vars } from '../../../style/themes/vars.css';
import { screenReaderOnly } from '../../../style/accessibility.css';
import { responsiveTextStyleRule } from '../../../style/typography/typography.css';

export const fieldset = style({
  border: 'none',
  padding: 0,
});

export const srOnlyLegend = style({
  ...screenReaderOnly,
});

export const legend = style({
  ...responsiveTextStyleRule.body,
  marginBottom: vars.space['1x'],
});

export const inline = style({
  display: 'flex',
});
