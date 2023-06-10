import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '../../../style/themes/vars.css';
import { rem } from 'polished';
import { breakpoints } from '~/style/breakpoints';
import { responsiveStyle } from '~/style/responsive-style';

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
});

export const container = style({
  display: 'grid',
  gridTemplateRows: '[header] auto [body] 1fr [footer] auto',
  padding: '1rem',
});

export const size = style({
  ...responsiveStyle({
    mobile: {
      maxWidth: 'none',
      // border: '10px solid cyan',
    },
    tablet: {
      maxWidth: `${rem(breakpoints.tablet)}`,
      marginLeft: 'auto',
      marginRight: 'auto',
      // border: '10px solid red'
    },
    desktop: {
      maxWidth: `${rem(breakpoints.desktop)}`,
      // border: '10px solid green'
    },
    wide: {
      maxWidth: `${rem(breakpoints.wide)}`,
      // border: '10px solid yellow'
    },
  }),
});

export const full = style({
  marginLeft: vars.space['xsmall'],
  marginRight: vars.space['xsmall'],
});

globalStyle('main', {
  // display: 'grid',
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

globalStyle('header,footer', {
  // ...bodyStyle,
});

globalStyle('footer', {
  // padding: vars.space['xxsmall'],
});

globalStyle('header', {
  background: vars.backgroundColor.header,
  color: vars.foregroundColor.header,
});

globalStyle('footer', {
  background: vars.backgroundColor.footer,
  color: vars.foregroundColor.footer,
});

globalStyle('header a,footer a', {
  cursor: 'pointer',
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

globalStyle('ul,ol', {
  marginTop: 0,
  paddingLeft: 0,
  listStyle: 'none',
});

globalStyle('a, header a,footer a', {
  // textDecoration: vars.links.decoration.link,
  // color: vars.links.color.link,
  // textUnderlineOffset: '.1em',
  // lineHeight: vars.links.lineHeight,
});

globalStyle('a:focus', {
  // ...vars.accessibility.linkFocus,
});

globalStyle('a:active', {
  // color: vars.links.color.active,
});

globalStyle('a:hover,a:focus', {
  // color: vars.links.color.hover,
  // textDecorationThickness: `max(3px, .1875rem, .12em)`,
});
