import { globalStyle, style } from '@vanilla-extract/css';
import { rem } from 'polished';
import { responsiveStyle } from 'src/style';
import { breakpoints } from '../../../style/breakpoints';
import { vars } from '../../../style/themes/vars.css';
import { responsiveFont, responsiveHeadingFont } from '../../../style/typography/typography';

globalStyle('*,*:before,*:after', {
  boxSizing: 'border-box',
});

const bodyStyle = {
  fontFamily: vars.fontFamily.body,
  fontWeight: vars.fontWeight.regular,
};

export const body = style({
  ...bodyStyle,
  color: vars.foregroundColor.body,
  // TODO: make this the body
  background: vars.backgroundColor.body,
});

globalStyle('*,*:before,*:after', {
  boxSizing: 'border-box',
});

// TODO: make less specific
globalStyle('#root > div,#__next > div', {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
});

globalStyle('html, body', {
  margin: 0,
  padding: 0,
  height: '100%',
  textSizeAdjust: '100%',
});

globalStyle('#root', {
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100%',
  height: 'fit-content',
  paddingTop: vars.space['2x'],
  paddingBottom: vars.space['2x'],
});

export const size = style({
  ...responsiveStyle({
    mobile: {
      maxWidth: 'none',
    },
    tablet: {
      maxWidth: `${breakpoints.tablet}rem`,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    desktop: {
      maxWidth: `${breakpoints.desktop}rem`,
    },
  }),
});

globalStyle('main', {
  display: 'flex',
  maxWidth: `${breakpoints.desktop}rem`,
  flexDirection: 'column',
  flex: '1 0 auto',
  width: '100%',
});

globalStyle('header,footer', {
  ...bodyStyle,
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
  color: 'inherit',
  cursor: 'pointer',
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

globalStyle('h1,h2,h3,h4', {
  color: vars.headings.color,
});

globalStyle('p', {
  fontFamily: vars.fontFamily.paragraphs,
  ...responsiveFont(),
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
