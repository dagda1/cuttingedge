import { globalStyle, style } from '@vanilla-extract/css';
import { rem } from 'polished';
import { breakpoints } from '@cutting/design-system';
import { vars } from '@cutting/design-system';
import { responsiveFont, responsiveHeadingFont } from '.@cutting/design-system';

globalStyle('*,*:before,*:after', {
  boxSizing: 'border-box',
});

globalStyle('html, body', {
  margin: 0,
  padding: 0,
  height: '100%',
});

globalStyle('body', {
  textSizeAdjust: '100%',
  background: vars.backgroundColor.body,
});

export const body = style({
  fontFamily: vars.fontFamily.body,
  fontWeight: vars.fontWeight.regular,
  backgroundColor: vars.backgroundColor.body,
  color: vars.foregroundColor.body,
  margin: 0,
});

globalStyle('#root', {
  maxWidth: `${breakpoints.desktop}rem`,
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100%',
  height: 'fit-content',
  paddingTop: vars.space['2x'],
  paddingBottom: vars.space['2x'],
});

globalStyle('main', {
  display: 'flex',
  flexDirection: 'column',
  flex: '1 0 auto',
  paddingRight: vars.space['2x'],
  paddingLeft: vars.space['2x'],
});

globalStyle('h1', responsiveHeadingFont('h1'));
globalStyle('h2', responsiveHeadingFont('h2'));
globalStyle('h3', responsiveHeadingFont('h3'));
globalStyle('h4', responsiveHeadingFont('h4'));

globalStyle('h1', {
  marginTop: 0,
  marginBottom: rem(30),
});

globalStyle('h2,h3,h4', {
  marginTop: vars.space['4x'],
  marginBottom: vars.space['3x'],
});

globalStyle('a:focus,a:focus h2', {
  ...vars.accessibility.accessibleOutline,
  color: vars.foregroundColor.body,
  boxShadow: 'initial',
});

export const hidden = style({
  display: 'none',
  outline: 'none',
});

globalStyle('ul', {
  marginTop: 0,
  paddingLeft: 0,
  listStyle: 'none',
});

globalStyle('a', {
  ...responsiveFont(),
  textDecoration: vars.links.decoration.link,
  color: vars.links.color.link,
  textUnderlineOffset: '.1em',
  lineHeight: vars.links.lineHeight,
});

globalStyle('a:focus', {
  ...vars.accessibility.linkFocus,
});

globalStyle('a:active', {
  color: vars.links.color.active,
});

globalStyle('a:hover,a:focus', {
  color: vars.links.color.hover,
  textDecorationThickness: `max(3px, .1875rem, .12em)`,
});
