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
  color: '#ffffff',
  fontStyle: 'bold',
  textShadow: '0 0 4px #ffffff, 0 0 8px rgba(255, 255, 255, 0.6)',
});
