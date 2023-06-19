import { globalStyle, style } from '@vanilla-extract/css';
import { atoms } from '~/style/atoms/atoms';
import { vars } from '~/style/themes/vars.css';

export const banner = style([
  atoms({
    marginY: 'xxsmall',
  }),
  {
    border: '5px solid transparent',
  },
]);

globalStyle(`${banner} h2`, {
  color: vars.foregroundColor.primary,
  margin: 0,
});

export const success = style({
  borderColor: vars.buttons.primary.background,
  backgroundColor: vars.buttons.primary.background,
});

export const warning = style({
  borderColor: vars.foregroundColor.caution,
  backgroundColor: vars.foregroundColor.caution,
});

export const error = style({
  borderColor: vars.foregroundColor.critical,
  backgroundColor: vars.foregroundColor.critical,
});

export const bannerHeading = style({
  padding: '2px 20px 5px',
});

export const bannerContent = style({
  background: vars.banners.backgroundColor,
  padding: '10px 10px 20px',
  color: vars.foregroundColor.neutral,
});

globalStyle(`${bannerContent} p`, {
  margin: 0,
  padding: 0,
});
