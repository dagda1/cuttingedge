import { style } from '@vanilla-extract/css';
import { vars } from '../../../style/themes/vars.css';

export const base = style({
  height: vars.inlineFieldSize.standard,
  width: vars.width.input,
  padding: vars.space['1x'],
  border: `${vars.borderWidth.standard} solid ${vars.borderColor.standard}`,
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
