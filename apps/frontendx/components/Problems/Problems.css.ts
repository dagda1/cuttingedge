import { globalStyle, style } from '@vanilla-extract/css';
import { atoms, palette, vars } from '@cutting/component-library';

export const main = style({
  position: 'relative',
  fontStretch: '100%',
});

globalStyle(`${main} ul`, {
  borderLeft: `5px solid ${palette.white}`,
  paddingLeft: vars.space['medium'],
});

globalStyle(`${main} ul li:first-of-type`, {
  marginTop: '0',
});

export const borderedHeading = style({
  marginTop: vars.space['large'],
  borderTop: '1px dotted #0098d8',
  borderBottom: '1px dotted #0098d8',
  paddingTop: vars.space['small'],
  paddingBottom: vars.space['small'],
});
