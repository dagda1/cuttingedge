import { vars } from '@cutting/component-library';
import { style } from '@vanilla-extract/css';

export const body = style({
  color: vars.foregroundColor.neutral,
  background: vars.backgroundColor.body,
});
