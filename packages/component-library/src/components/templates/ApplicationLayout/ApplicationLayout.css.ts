import { globalStyle, style } from '@vanilla-extract/css';
import { rem } from 'polished';
import { breakpoints } from '../../../style/breakpoints';
import { vars } from '../../../style/themes/vars.css';
import { responsiveHeadingFont } from '../../../style/typography/typography.css';

globalStyle('*,*:before,*:after', {
  boxSizing: 'border-box',
});

globalStyle('html', {
  // border: '5px solid black',
});

globalStyle('html, body', {
  margin: 0,
  padding: 0,
  height: '100%',
});

globalStyle('body', {
  fontFamily: vars.fontFamily.body,
  fontWeight: vars.fontWeight.regular,
  backgroundColor: vars.backgroundColor.body,
  color: vars.foregroundColor.body,
  margin: 0,
  // border: '10px solid red',
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
  // border: '10px solid blue',
});

globalStyle('main', {
  display: 'flex',
  flexDirection: 'column',
  flex: '1 0 auto',
  paddingRight: vars.space['2x'],
  paddingLeft: vars.space['2x'],
  // border: '15px solid yellow',
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
  marginTop: vars.space['2x'],
  marginBottom: vars.space['2x'],
});

globalStyle('a:focus,a:focus h2,button:focus,button:focus h2', {
  ...vars.accessibility.accessibleOutline,
  color: vars.foregroundColor.body,
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
  textDecoration: vars.links.textDecoration,
});
