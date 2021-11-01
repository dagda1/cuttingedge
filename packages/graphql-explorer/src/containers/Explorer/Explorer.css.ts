import { globalStyle, style } from '@vanilla-extract/css';

export const container = style({
  border: '1px solid green',
});

globalStyle(`${container} svg`, {
  border: '1px solid red',
});

export const error = style({
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid white',
});
