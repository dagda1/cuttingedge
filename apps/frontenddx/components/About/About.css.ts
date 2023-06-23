import { vars } from '@cutting/component-library';
import { globalStyle, style } from '@vanilla-extract/css';

export const image = style({
  marginTop: vars.space['small'],
  display: 'flex',
  flex: 1,
});

globalStyle(`${image} img`, {
  maxWidth: '100%',
});
