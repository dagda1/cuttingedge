import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '../../../style/themes/vars.css';

globalStyle('*,*:before,*:after', {
  boxSizing: 'border-box',
});

globalStyle('html', {
  fontSize: '100%',
  fontFamily: vars.fontFamily,
  fontWeight: vars.textWeight.regular,
});

globalStyle('html, body', {
  margin: 0,
  padding: 0,
  height: '100%',
  textSizeAdjust: '100%',
});

globalStyle('#root', {
  display: 'grid',
  height: '100%',
  margin: '0 auto',
  paddingTop: vars.space['xsmall'],
  paddingBottom: vars.space['xsmall'],
});

export const header = style({
  gridRow: 'header',
});

export const footer = style({
  gridRow: 'footer',
});

export const main = style({
  color: vars.foregroundColor.body,
  background: vars.backgroundColor.body,
  gridRow: 'body',
  width: '100%',
  display: 'grid',
});

export const container = style({
  display: 'grid',
  gridTemplateRows: '[header] auto [body] 1fr [footer] auto',
});

export const headingAndBodyLayout = style({
  gridTemplateRows: 'auto 1fr',
});

export const bodyOnlyLayout = style({
  gridTemplateRows: '1fr',
});

export const center = style({
  placeItems: 'center',
});
