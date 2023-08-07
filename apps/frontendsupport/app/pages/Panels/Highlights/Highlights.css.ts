import { palette } from '@cutting/component-library';
import { globalStyle, style } from '@vanilla-extract/css';

export const container = style({});

globalStyle(`${container} a`, {
  color: palette.white,
});
