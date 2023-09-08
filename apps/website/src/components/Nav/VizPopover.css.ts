import { palette, vars } from '@cutting/component-library';
import { globalStyle, style } from '@vanilla-extract/css';

export const popoverButton = style({
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
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

globalStyle(`${popover} ul`, {
  paddingTop: vars.space.xxsmall,
  paddingBottom: vars.space.xxsmall,
});

globalStyle(`${popover} li:hover`, {
  background: `${palette.yellow400} !important`,
});

globalStyle(`${popover} a:visited`, {
  color: vars.foregroundColor.secondary,
});
