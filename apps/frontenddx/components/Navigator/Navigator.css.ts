import { palette, vars } from '@cutting/component-library';
import { globalStyle, style } from '@vanilla-extract/css';

export const buttonContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
});

globalStyle(`${buttonContainer} a, ${buttonContainer} button`, {
  whiteSpace: 'nowrap',
  minWidth: vars.space['xlarge'],
  display: 'inline-block',
  border: '1px solid green',
  color: palette.white,
});

globalStyle(`${buttonContainer} a:visitied`, {
  color: palette.white,
});

globalStyle(`${buttonContainer} button`, {
  width: vars.space['xlarge'],
});
