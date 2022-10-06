import { globalStyle, style } from '@vanilla-extract/css';
import { globalHeadingStyle, responsiveText } from '../../../style/typography/typography.css';
import { vars } from '../../../style/themes/vars.css';
import { responsiveTextStyleRule } from '../../../style/typography/typography.css';
import { rem } from 'polished';
import { breakpoints } from '../../../style/breakpoints';
import { responsiveStyle } from '../../../style/responsive-style';

globalStyle('*,*:before,*:after', {
  boxSizing: 'border-box',
});

const bodyStyle = {
  fontFamily: vars.fontFamily.body,
  fontWeight: vars.fontWeight.regular,
};

globalStyle('*,*:before,*:after', {
  boxSizing: 'border-box',
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
  paddingTop: vars.space['2x'],
  paddingBottom: vars.space['2x'],
});

export const header = style({
  gridRow: 'header',
});

export const footer = style({
  gridRow: 'footer',
});

export const body = style({
  ...bodyStyle,
  color: vars.foregroundColor.body,
  // TODO: make this the body
  background: vars.backgroundColor.body,
  gridRow: 'body',
  border: '10px solid cyan',
});

export const container = style({
  display: 'grid',
  gridTemplateRows: '[header] auto [body] 1fr [footer] auto',
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

globalStyle('main', {
  display: 'grid',
  gridTemplateRows: 'auto 1fr',
  gridTemplateColumns: '1fr',
  width: '100%',
  maxWidth: `${rem(breakpoints.desktop)}`,
  ...responsiveStyle({
    mobile: {
      padding: 0,
    },
    tablet: {
      padding: vars.space['2x'],
    },
    desktop: {
      padding: 0,
    },
  }),
});

globalStyle('header,footer', {
  ...bodyStyle,
});

globalStyle('footer', {
  padding: vars.space['1x'],
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

globalStyle('h1', globalHeadingStyle({ level: '1', weight: 'medium' }));
globalStyle('h2', globalHeadingStyle({ level: '2', weight: 'medium' }));
globalStyle('h3', globalHeadingStyle({ level: '3', weight: 'medium' }));
globalStyle('h4', globalHeadingStyle({ level: '4', weight: 'medium' }));

globalStyle('h1', {
  marginTop: 0,
});

globalStyle('h2,h3,h4', {
  marginTop: vars.space['2x'],
  marginBottom: vars.space['2x'],
});

globalStyle('p', {
  fontFamily: vars.fontFamily.paragraphs,
  ...responsiveTextStyleRule.body,
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
  ...responsiveTextStyleRule.body,
});

globalStyle('a, header a,footer a', {
  ...responsiveText.body,
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
