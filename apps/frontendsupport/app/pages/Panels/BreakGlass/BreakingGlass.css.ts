import { vars } from '@cutting/component-library';
import { globalStyle, style } from '@vanilla-extract/css';

export const breaking = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  paddingRight: vars.space['xxlarge'],
  paddingLeft: vars.space['xxlarge'],
  position: 'relative',
  minHeight: '100vh',
});

globalStyle(`${breaking} img`, {
  zIndex: 3,
});

export const services = style({
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
});
