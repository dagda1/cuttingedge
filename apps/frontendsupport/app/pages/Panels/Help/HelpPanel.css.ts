import { vars } from '@cutting/component-library';
import { style } from '@vanilla-extract/css';

export const heading = style({
  position: 'relative',
  zIndex: 3,
  top: '-30%',
  background: vars.backgroundColor.body,
});
