import { palette, vars } from '@cutting/component-library';
import { style } from '@vanilla-extract/css';

export const topBubbleWrapper = style({
  width: '100%',
  maxHeight: '100%',
  maxWidth: '100%',
  position: 'absolute',
  bottom: 'auto',
  left: 0,
  right: 0,
  overflow: 'hidden',
  zIndex: 100,
});

export const topBubble = style({
  width: '300vw',
  height: '80vh',
  backgroundColor: 'inherit',
  borderRadius: '50%',
  marginLeft: '-100vw',
  position: 'relative',
});

export const dark = style({ background: vars.backgroundColor.body });
export const light = style({ background: palette.white });

export const up = style({ marginTop: '-60px' });
