import { palette, responsiveStyle, vars, atoms } from '@cutting/component-library';
import { globalStyle, style } from '@vanilla-extract/css';

export const mobileButtonContainer = style({
  verticalAlign: 'middle',
});

export const container = style({});

globalStyle(`${container} h2`, {
  textShadow: `0 0 5px #fff, 0 0 10px #fff, 0 0 20px #ffffff, 0 0 30px #ffffff, 0 0 40px #ffffff, 0 0 55px #ffffff, 0 0 75px #ffffff`,
});

globalStyle(`${mobileButtonContainer} button`, {
  position: 'absolute',
  top: '-1rem',
});

globalStyle(`${mobileButtonContainer} svg`, {
  marginBottom: 0,
});

export const contact = style([
  {
    backgroundColor: '#FF8B45',
    borderRadius: '1rem',
    fontSize: '1.25rem',
    ...responsiveStyle({
      mobile: {
        padding: '.5rem .75rem',
      },
      tablet: {
        top: '0 !important',
        fontSize: '2rem',
        padding: '1rem 2rem',
      },
    }),
  },
]);

globalStyle(`li${contact} a`, {
  color: palette.white,
  ...responsiveStyle({
    mobile: { position: 'static' },
    tablet: { position: 'relative', top: '1px' },
  }),
});

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
});

export const expanded = style([
  {
    display: 'block',
  },
  atoms({
    paddingY: 'large',
  }),
]);

export const mobile = style({});
export const closeButton = style({});

globalStyle('.szh-menu__item', {
  border: `1px solid ${palette.white}`,
  padding: vars.space['small'],
  width: '100%',
});

globalStyle('.menuitem', {
  width: '100%',
});

globalStyle(`${expanded} ul li a, ${expanded} ul li:not(${closeButton}) button`, {
  paddingTop: vars.space['xxsmall'],
  paddingBottom: vars.space['small'],
  marginBottom: vars.space['xxsmall'],
  paddingLeft: vars.space['xxsmall'],
  display: 'flex',
  justifyContent: 'center',
  flex: 1,
});

export const horizontal = style({
  display: 'block',
  selectors: {
    [`&:hover`]: {
      color: palette.gray300,
    },
  },
});

globalStyle(`${horizontal} a`, {
  display: 'block',
});

globalStyle(`li.${horizontal}:not(${contact})`, {
  ...responsiveStyle({
    mobile: { display: 'none' },
    tablet: {
      display: 'inline-block',
    },
  }),
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

globalStyle(`${horizontal}${expanded}`, {
  display: 'block',
});

globalStyle(`${horizontal}${expanded} a`, {
  width: '100%',
  display: 'inline-block',
});

globalStyle(`ul li${horizontal}${mobile}`, {
  display: 'flex',
  border: `1px solid ${palette.white}`,
  marginBottom: vars.space['small'],
  color: palette.white,
  justifyContent: 'center',
});

globalStyle(`ul li${horizontal}${mobile}${closeButton}`, {
  display: 'flex',
  justifyContent: 'flex-end',
});

globalStyle(`ul li${horizontal}${mobile}${closeButton} button`, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: vars.space['small'],
  borderRadius: '32px',
  background: palette.white,
  color: '#141414',
  fontSize: '18px',
  height: '32px',
  left: '12px',
  top: '8px',
  transition: 'none',
  width: '32px',
});

globalStyle(`ul li${horizontal}${mobile}${closeButton} button:before`, {
  position: 'absolute',
  // -webkit-transform: translate(-50%, -50%),
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  // -webkit-font-smoothing: antialiased,
  fontFamily: 'icomoon',
  fontStyle: 'normal',
  fontVariant: 'normal',
  lineHeight: 1,
  textIndent: 0,
  textTransform: 'none',
});

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
