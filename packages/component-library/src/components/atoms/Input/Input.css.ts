import { composeStyles, style } from '@vanilla-extract/css';
import { vars } from '../../../style/themes/vars.css';

const base = style({
  height: vars.input.height,
  width: vars.input.width,
  padding: vars.input.padding,
  border: `${vars.input.borderWidth} solid ${vars.input.borderColor}`,
  ':focus': {
    background: vars.input.focus.bg,
    border: `${vars.input.focus.borderWidth} solid ${vars.input.focus.borderColor}`,
    outline: `${vars.outlineWidth} solid ${vars.outlineColor}`,
  },
});

export const input = composeStyles(base);

export const invalid = composeStyles(
  base,
  style({
    borderColor: vars.input.invalid.borderColor,
    ':focus': {
      borderColor: vars.input.focus.borderColor,
    },
  }),
);
