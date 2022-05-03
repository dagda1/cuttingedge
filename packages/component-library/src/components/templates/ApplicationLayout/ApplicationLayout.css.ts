import { globalStyle, style } from '@vanilla-extract/css';
import rem from 'polished/lib/helpers/rem';
import { globalHeadingStyle, responsiveText } from '../../../style/typography/typography.css';
import { responsiveStyle } from '../../../style';
import { breakpoints } from '../../../style/breakpoints';
import { vars } from '../../../style/themes/vars.css';
import { responsiveTextStyleRule } from '../../../style/typography/typography.css';

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
      maxWidth: `${rem(breakpoints.tablet)}`,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    desktop: {
      maxWidth: `${rem(breakpoints.desktop)}`,
    },
    wide: {
      maxWidth: `${rem(breakpoints.wide)}`,
    },
  }),
});

globalStyle('main', {
  display: 'flex',
  maxWidth: `${rem(breakpoints.desktop)}`,
  flexDirection: 'column',
  flex: '1 0 auto',
  width: '100%',
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
