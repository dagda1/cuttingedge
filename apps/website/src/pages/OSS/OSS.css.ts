import { palette } from '@cutting/component-library';
import { globalStyle, style } from '@vanilla-extract/css';

export const icon = style({
  width: '50px',
});

export const repo = style({
  width: '100%',
  height: '100%',
});

globalStyle(`${repo} a`, {
  display: 'inline-block',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'rgb(51, 51, 51)',
  borderImage: 'initial',
  transition: 'all 0.2s ease',
  padding: '20px',
  height: '100%',
  color: palette.white,
  width: '100%',
});

globalStyle(`${repo} a:hover`, {
  borderColor: palette.white,
});
