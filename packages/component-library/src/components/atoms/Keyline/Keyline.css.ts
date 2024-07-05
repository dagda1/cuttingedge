import { style } from '@vanilla-extract/css';

import { vars } from '~/style/themes/vars.css';

export const noRadiusOnRight = style({
  borderTopRightRadius: '0 !important',
  borderBottomRightRadius: '0 !important',
});

export const largestWidth = style({
  width: vars.borderRadius.xlarge,
});

export const width = style({
  width: vars.grid,
});
