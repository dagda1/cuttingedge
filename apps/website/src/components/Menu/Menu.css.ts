import { palette, responsiveStyle, vars, atoms } from '@cutting/component-library';
import { globalStyle, style } from '@vanilla-extract/css';

export const container = style({});

globalStyle(`${container} h2`, {
  textShadow: `0 0 5px #fff, 0 0 10px #fff, 0 0 20px #ffffff, 0 0 30px #ffffff, 0 0 40px #ffffff, 0 0 55px #ffffff, 0 0 75px #ffffff`,
});

export const currentColor = style({
  color: vars.foregroundColor.neutral,
});

export const contact = style([
  {
    backgroundColor: '#FF8B45',
  },
]);

export const active = style({
  color: 'blue',
  fontStyle: 'bold',
});

globalStyle(`${contact} ${active}`, {
  background: 'inherit',
  padding: '0',
});

export const expandable = style({
  display: 'none',
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  overflow: 'auto',
  backgroundColor: palette.black,
  zIndex: 10,
  padding: '1rem',
  width: '100vw',
  height: '100vh',
});

export const expanded = style([
  {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  atoms({
    paddingY: 'large',
  }),
]);

globalStyle('.szh-menu__item', {
  border: `1px solid ${palette.white}`,
  padding: vars.space['small'],
  width: '100%',
});

globalStyle('.menuitem', {
  width: '100%',
});

globalStyle(`.hamburger-react`, {
  zIndex: 11,
});

globalStyle(`${expanded} ul`, {
  padding: `${vars.space['large']}`,
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
});

globalStyle(`${expanded} li`, {
  border: `1px solid ${palette.white}`,
  paddingTop: `${vars.space['xsmall']} !important`,
  paddingBottom: `${vars.space['medium']} !important`,
  marginBottom: `${vars.space['xsmall']} !important`,
  paddingLeft: `${vars.space['xsmall']} !important`,
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
});

globalStyle(`${expanded} a`, {
  display: 'block',
  width: '100%',
  height: '100%',
  marginTop: vars.space['medium'],
  fontWeight: 'bold',
  textTransform: 'uppercase',
});

globalStyle(`${expanded} li:hover`, {
  background: palette.gray200,
  color: `${palette.white} !important`,
});

export const menuMobileButtonContainer = style([
  {
    verticalAlign: 'middle',
  },
  atoms({
    marginLeft: 'xxsmall',
    marginRight: 'large',
  }),
]);

export const noMobile = style({
  display: 'none !important',
  ...responsiveStyle({
    mobile: {},
    tablet: {
      display: 'inline',
    },
  }),
});

export const dropdown = style({
  border: 0,
  background: 'transparent',
  textDecoration: vars.links.decoration.link,
  color: vars.links.color.link,
  textUnderlineOffset: '.1em',
  lineHeight: vars.links.lineHeight,
  cursor: 'pointer',
  zIndex: 15,
});

globalStyle(`${dropdown} ul`, {
  listStyle: 'none',
});

export const VizMenuItem = style({
  background: palette.white,
  zIndex: 15,
  selectors: {
    [`&:hover,&:focus`]: {
      background: `${palette.yellow400} !important`,
    },
  },
});

export const submenu = style({
  marginBottom: '0 !important',
  color: `${palette.black} !important`,
  selectors: {
    [`&:hover,&:focus`]: {
      color: '#ffffff !important',
      textDecorationThickness: `max(3px, .1875rem, .12em)`,
    },
  },
});
