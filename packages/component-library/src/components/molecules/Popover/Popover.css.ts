import { globalStyle, style } from '@vanilla-extract/css';

import { vars } from '~/style/themes/vars.css';
import { ZIndex } from '~/utl/zindex';

export const popoverButton = style({
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  outline: 'none',
});

globalStyle(`${popoverButton} span:hover`, {
  color: vars.foregroundColor.linkHover,
});

export const popover = style([
  {
    width: 'max-content',
    maxWidth: '100vw',
    backgroundColor: `${vars.foregroundColor.primary}`,
    border: `1px solid ${vars.borderColor.neutralLight}`,
    fontSize: '90%',
    borderRadius: '4px',
    textAlign: 'left',
    zIndex: ZIndex.modal,
  },
]);

globalStyle(`${popover} ul li a`, {
  color: `${vars.foregroundColor.secondary}`,
  display: 'flex',
  alignItems: 'center',
  paddingRight: vars.space.xsmall,
  paddingBottom: vars.space.xsmall,
  cursor: 'pointer',
});

globalStyle(`${popover} li:hover`, {
  background: vars.backgroundColor.linkHover,
});

globalStyle(`${popover} li a:hover`, {
  color: `${vars.foregroundColor.primary}`,
});
