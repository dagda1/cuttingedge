import { style, globalStyle } from '@vanilla-extract/css';

export const parent = style({
  width: '100%',
  maxWidth: '100%',
  maxHeight: '100%',
  overflow: 'hidden',
});

globalStyle('main', {
  width: '100%',
  height: '100%',
  maxHeight: '100%',
  overflow: 'hidden',
});
