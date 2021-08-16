import { composeStyles, style } from '@vanilla-extract/css';
import { responsiveFont } from '@cutting/design-system';
import { vars } from '@cutting/design-system';
import { atoms } from '@cutting/design-system';

export const root = composeStyles(
  atoms({
    marginBottom: '1x',
  }),
  style({
    ...responsiveFont(),
    color: vars.foregroundColor.error,
    fontWeight: vars.fontWeight.regular,
    marginLeft: 0,
    listStyle: 'none',
    display: 'block',
  }),
);
