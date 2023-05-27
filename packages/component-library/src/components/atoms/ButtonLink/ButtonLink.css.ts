import { style } from '@vanilla-extract/css';
import { vars } from '~/style/themes/vars.css';

export const main = style({
  padding: '18px 32px',
  textAlign: 'center',
  ':hover': {
    borderColor: vars.accessibility.accessibleOutline.backgroundColor,
    color: vars.links.color.hover,
    background: vars.accessibility.accessibleOutline.backgroundColor,
  },
});
