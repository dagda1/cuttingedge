import { vars } from '@cutting/component-library';
import { globalStyle, style } from '@vanilla-extract/css';

export const contact = style([
  {
    backgroundColor: '#FF8B45',
  },
]);
globalStyle(`${contact} a`, {
  color: vars.foregroundColor.neutral,
  background: 'transparent',
});

export const active = style({
  color: 'blue',
  fontStyle: 'bold',
});
