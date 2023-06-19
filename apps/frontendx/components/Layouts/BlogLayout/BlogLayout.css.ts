import { vars } from '@cutting/component-library';
import { globalStyle, style } from '@vanilla-extract/css';
import { darken } from 'polished';

export const container = style({});

const blockquoteColor = darken('0.2', 'rgb(203, 213, 225)');

globalStyle(`${container} blockquote`, {
  padding: '0 1em',
  color: blockquoteColor,
  borderLeft: '0.25em solid #8B949E',
  marginLeft: vars.space['small'],
  fontStyle: 'italic',
});
