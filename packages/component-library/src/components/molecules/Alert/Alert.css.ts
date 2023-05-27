import { globalStyle, style } from '@vanilla-extract/css';
import { atoms } from '~/style/atoms/atoms';
import { vars } from '~/style/themes/vars.css';

export const banner = style([
  atoms({
    marginY: '1x',
  }),
  {
    border: '5px solid transparent',
  },
]);

globalStyle(`${banner} h2`, {
  color: vars.banners.titleColor,
  margin: 0,
  fontSize: vars.space['3x'],
  lineHeight: vars.space['3x'],
});

export const success = style({
  borderColor: vars.colors.primary,
  backgroundColor: vars.colors.primary,
});

export const warning = style({
  borderColor: vars.colors.caution,
  backgroundColor: vars.colors.caution,
});

globalStyle(`${warning} h2`, {
  color: vars.colors.white,
});

export const error = style({
  borderColor: vars.colors.error,
  backgroundColor: vars.colors.error,
});

export const bannerHeading = style({
  padding: '2px 20px 5px',
});

export const bannerContent = style({
  background: vars.banners.backgroundColor,
  padding: '20px',
  color: vars.banners.color,
});

globalStyle(`${bannerContent} p`, {
  margin: 0,
  padding: 0,
});

export const subHeading = style({
  fontWeight: vars.fontWeight.strong,
});

export const body = style({});
