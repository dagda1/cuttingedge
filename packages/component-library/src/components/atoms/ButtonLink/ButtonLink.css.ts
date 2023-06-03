import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '~/style/themes/vars.css';

export const main = style({
  padding: '14px 22px',
  display: 'inline-block',
  textAlign: 'center',
  ':hover': {
    borderColor: vars.accessibility.accessibleOutline.backgroundColor,
    color: vars.links.color.hover,
    background: vars.accessibility.accessibleOutline.backgroundColor,
  },
});

globalStyle(`${main} span`, {
  padding: 0,
  margin: 0,
});
