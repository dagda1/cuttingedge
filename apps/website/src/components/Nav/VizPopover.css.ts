import { palette, vars } from '@cutting/component-library';
import { globalStyle, style } from '@vanilla-extract/css';

export const popoverButton = style({
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  outline: 'none',
});

globalStyle(`${popoverButton} span:hover`, {
  color: vars.foregroundColor.linkHover,
});

export const popover = style({
  width: 'max-content',
  maxWidth: '100vw',
  backgroundColor: 'white',
  border: '1px solid #ddd',
  fontSize: '90%',
  borderRadius: '4px',
  textAlign: 'left',
});

globalStyle(`${popover} ul li a`, {
  color: `${palette.black} !important`,
  display: 'flex',
  alignItems: 'center',
  paddingRight: vars.space.xsmall,
  paddingBottom: vars.space.xsmall,
  cursor: 'pointer',
});

globalStyle(`${popover} li:hover`, {
  background: `${palette.yellow400} !important`,
  color: `${palette.white} !important`,
});

globalStyle(`${popover} li a:hover`, {
  color: `${palette.white} !important`,
});
