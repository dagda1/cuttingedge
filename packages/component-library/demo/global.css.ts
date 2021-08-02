import { composeStyles, style } from '@vanilla-extract/css';
import { rem } from 'polished';
import { atoms } from '../src/style/atoms/sprinkles.css';
import { vars } from '../src/style/themes/vars.css';

export const wrap = composeStyles(
  style({
    maxWidth: rem(1008),
    paddingLeft: vars.space['2x'],
    paddingRight: vars.space['3x'],
    margin: '0 auto',
  }),
);

export const layout = style({
  display: 'flex',
  flex: 1,
  textAlign: 'left',
  flexFlow: 'row wrap',
});

export const item = composeStyles(
  atoms({
    paddingLeft: {
      mobile: '1x',
      tablet: '3x',
    },
    display: {
      mobile: 'block',
      tablet: 'inline-block',
    },
    flex: {
      mobile: 'auto',
      tablet: '1',
    },
  }),
);
