import { globalStyle, style } from '@vanilla-extract/css';

export const breaking = style({
  background: '#138F4A',
  border: '10px solid blue',
});

globalStyle(`${breaking} img`, {
  zIndex: 3,
  // position: 'absolute',
});

globalStyle('.bglass-left', {
  right: '50%',
});

globalStyle('.bglass-right', {
  left: '50%',
});
