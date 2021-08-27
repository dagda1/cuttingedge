import { style } from '@vanilla-extract/css';
import { responsiveFont } from '@cutting/design-system/src/typography/typography.css';
import { vars } from '@cutting/design-system/src/themes/vars.css';

export const root = style({
  ...responsiveFont(),
  height: vars.inlineFieldSize.standard,
  width: vars.width.input,
  padding: vars.space['1x'],
  border: `1px solid ${vars.borderColor.standard}`,
  ':focus': {
    background: vars.backgroundColor.focus,
    borderWidth: vars.borderWidth.large,
    ...vars.accessibility.visibleFocus,
    boxShadow: 'inset 0 0 0 2px',
  },
});

export const invalid = style({
  borderWidth: vars.borderWidth.large,
  borderColor: vars.borderColor.invalid,
});
