import { palette, vars } from '@cutting/component-library';
import { globalStyle, style } from '@vanilla-extract/css';

export const workWithUsButtonContainer = style({
  zIndex: 2,
});

globalStyle(`${workWithUsButtonContainer} button`, {
  background: vars.backgroundColor.body,
  boxShadow: 'none',
  display: 'inline',
  color: palette.white,
  border: 'none',
  padding: vars.space['small'],
  fontWeight: 800,
  cursor: 'pointer',
  whiteSpace: 'nowrap',
});

globalStyle(`${workWithUsButtonContainer} a`, {
  color: palette.black,
  display: 'block',
});

globalStyle('.szh-menu-button', {
  whiteSpace: 'nowrap',
});
